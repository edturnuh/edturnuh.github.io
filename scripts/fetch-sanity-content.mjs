import { existsSync, readFileSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.resolve(__dirname, '../src/app/content/generatedContent.json');

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) {
    return;
  }

  const lines = readFileSync(filePath, 'utf8').split('\n');

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) {
      return;
    }

    const separatorIndex = trimmed.indexOf('=');

    if (separatorIndex === -1) {
      return;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  });
}

loadEnvFile(path.resolve(__dirname, '../.env'));
loadEnvFile(path.resolve(__dirname, '../.env.local'));

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const apiVersion = process.env.SANITY_API_VERSION || '2026-07-16';
const useCdn = process.env.SANITY_USE_CDN === 'true';
const token = process.env.SANITY_READ_TOKEN;

const query = `{
  "notes": *[_type == "note" && isPublished != false] | order(sortOrder asc, _createdAt asc) {
    title,
    summary
  },
  "projects": *[_type == "project" && isPublished != false] | order(sortOrder asc, _createdAt asc) {
    "client": coalesce(title, client),
    "subtitle": coalesce(yearLabel, subtitle),
    "result": coalesce(clientLabel, result),
    cardSupportingText,
    "description": coalesce(shortDescription, description, ""),
    "metrics": coalesce(metrics[]{label, value}, []),
    "tags": coalesce(tags, []),
    "detailedDescription": coalesce(overviewText, detailedDescription, ""),
    "liveDemo": select(liveDemoKey == "tetris" => "tetris", null),
    "deepDive": select(
      defined(deepDiveTitle) || defined(deepDiveDescription) || defined(deepDiveStatLabel) || defined(deepDiveStatValue) => {
        "title": deepDiveTitle,
        "description": deepDiveDescription,
        "stat": select(
          defined(deepDiveStatLabel) || defined(deepDiveStatValue) => {
            "label": deepDiveStatLabel,
            "value": deepDiveStatValue
          },
          null
        )
      },
      defined(deepDive) => deepDive,
      null
    )
  }
}`;

function assertString(value, label) {
  if (typeof value !== 'string') {
    throw new Error(`Expected ${label} to be a string.`);
  }
}

function validateContent(content) {
  if (!Array.isArray(content.notes)) {
    throw new Error('Expected notes to be an array.');
  }

  if (!Array.isArray(content.projects)) {
    throw new Error('Expected projects to be an array.');
  }

  if (content.projects.length === 0) {
    throw new Error('Expected at least one project.');
  }

  content.notes.forEach((note, index) => {
    assertString(note.title, `notes[${index}].title`);
    assertString(note.summary, `notes[${index}].summary`);
  });

  content.projects.forEach((project, index) => {
    assertString(project.client, `projects[${index}].client`);
    assertString(project.subtitle, `projects[${index}].subtitle`);
    assertString(project.result, `projects[${index}].result`);
    assertString(project.cardSupportingText, `projects[${index}].cardSupportingText`);
    assertString(project.description, `projects[${index}].description`);
    assertString(project.detailedDescription, `projects[${index}].detailedDescription`);

    if (!Array.isArray(project.metrics)) {
      throw new Error(`Expected projects[${index}].metrics to be an array.`);
    }

    if (!Array.isArray(project.tags)) {
      throw new Error(`Expected projects[${index}].tags to be an array.`);
    }

    project.metrics.forEach((metric, metricIndex) => {
      assertString(metric.label, `projects[${index}].metrics[${metricIndex}].label`);
      assertString(metric.value, `projects[${index}].metrics[${metricIndex}].value`);
    });

    if (project.liveDemo !== undefined && project.liveDemo !== null && project.liveDemo !== 'tetris') {
      throw new Error(`Unknown live demo key in projects[${index}]: ${project.liveDemo}`);
    }

    if (project.deepDive !== undefined && project.deepDive !== null) {
      assertString(project.deepDive.title, `projects[${index}].deepDive.title`);
      assertString(project.deepDive.description, `projects[${index}].deepDive.description`);

      if (project.deepDive.stat !== undefined && project.deepDive.stat !== null) {
        assertString(project.deepDive.stat.label, `projects[${index}].deepDive.stat.label`);
        assertString(project.deepDive.stat.value, `projects[${index}].deepDive.stat.value`);
      }
    }
  });
}

async function fetchSanityContent() {
  if (!projectId) {
    console.log('SANITY_PROJECT_ID is not set. Keeping existing generated content.');
    return;
  }

  const host = useCdn ? 'apicdn.sanity.io' : 'api.sanity.io';
  const params = new URLSearchParams({ query });
  const url = `https://${projectId}.${host}/v${apiVersion}/data/query/${dataset}?${params}`;
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  const response = await fetch(url, { headers });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Sanity request failed: ${response.status} ${response.statusText}\n${body}`);
  }

  const payload = await response.json();
  const content = {
    notes: payload.result?.notes ?? [],
    projects: payload.result?.projects ?? [],
  };

  validateContent(content);

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(content, null, 2)}\n`);

  console.log(`Wrote ${content.notes.length} notes and ${content.projects.length} projects to ${outputPath}`);
}

fetchSanityContent().catch((error) => {
  console.error(error);
  process.exit(1);
});
