# PRD: Sanity CMS Build-Time Content Integration

## Status

Draft for review.

## Summary

Add Sanity CMS as the content source for selected parts of edturnuh.com, starting with `LatestNotes` and `FeaturedProjects`.

The site should remain a static Vite/React site hosted on GitHub Pages. Sanity content will be fetched at build time, converted into local generated data, and bundled into the static site. Visitors should not need to call Sanity from the browser.

## Why This Project

The current site stores key portfolio content directly inside React components. That is simple and fast, but every content change requires editing code, rebuilding, and deploying.

Sanity would help separate content from presentation:

- Notes can be written and edited in a CMS.
- Featured projects can be managed as structured content.
- Case study copy, metrics, tags, and ordering can change without rewriting component code.
- GitHub Pages can continue hosting the static site.
- Build-time fetching keeps the live site fast and simple.

## Goals

- Use Sanity Free plan as the CMS for public portfolio content.
- Keep GitHub Pages as the production host.
- Fetch Sanity content during build, not in the browser.
- Migrate `LatestNotes` first because it is simpler.
- Migrate `FeaturedProjects` second because it has richer modal data.
- Preserve the current visual design and interaction behavior.
- Keep the first implementation boring, understandable, and easy to roll back.

## Non-Goals

- Do not redesign the site.
- Do not migrate the whole site into Sanity.
- Do not replace GitHub Pages.
- Do not add client-side Sanity requests in production.
- Do not add draft previews, visual editing, or live editing in the first pass.
- Do not move to Next.js, Astro, or another framework yet.

## Current State

### LatestNotes

`src/app/components/LatestNotes.tsx` contains a local `notes` array with:

- `title`
- `summary`

The section heading and intro text are also hard-coded:

- eyebrow: `Opinion`
- heading: `Notes on AI`
- intro line/date

### FeaturedProjects

`src/app/components/FeaturedProjects.tsx` contains a local `projects` array with:

- `client`
- `subtitle`
- `result`
- `cardSupportingText`
- `description`
- `metrics`
- `tags`
- `detailedDescription`
- optional `liveDemo`
- optional `deepDive`

The UI includes cards, modal detail views, analytics events, and a special Tetris live demo project.

## Recommended Approach

Use a build-time content generation step:

```txt
Sanity Content Lake
  -> fetch script runs before Vite build
  -> generated local JSON/TS data file
  -> React components import generated data
  -> Vite builds static site
  -> GitHub Pages serves static files
```

This gives the site the performance and reliability of static hosting while moving editable content into Sanity.

## Proposed Architecture

### Sanity

Create a Sanity project with one public dataset, likely `production`.

Create a Studio with schemas for:

- `note`
- `project`

Sanity Studio can be hosted by Sanity at a `*.sanity.studio` URL. It does not need to live inside edturnuh.com for the first version.

### Repo

Add a small content integration layer:

- `sanity/` or `studio/` for Sanity Studio code, if keeping Studio inside this repo.
- `scripts/fetch-sanity-content.mjs` to fetch published content.
- `src/app/content/generatedContent.json` or `src/app/content/generatedContent.ts` as the generated output.
- Component updates so `LatestNotes` and `FeaturedProjects` read generated content rather than local arrays.

Recommended generated format: JSON first, because it is easy to inspect and keeps the fetch script simple.

### Build

Update the build flow:

```txt
npm run fetch:content
npm run build
```

In GitHub Actions, the deploy workflow should fetch content before `npm run build`.

For local development, either:

- run `npm run fetch:content` before `npm run dev`, or
- keep a committed generated file as a fallback seed.

Recommendation: commit an initial generated file that mirrors current content, then allow the fetch script to overwrite it locally/CI.

## Content Model

### Note

Minimum fields:

- `title`: string, required
- `summary`: text, required
- `sortOrder`: number, required
- `isPublished`: boolean, default true

Possible later fields:

- `slug`
- `publishedAt`
- `topic`
- `body`
- `seoTitle`
- `seoDescription`

For the first release, notes should remain short card-style summaries. No full note pages yet.

### Project

Minimum fields:

- `title`: string, maps to current `client`
- `yearLabel`: string, maps to current `subtitle`
- `clientLabel`: string, maps to current `result`
- `cardSupportingText`: string
- `shortDescription`: string, maps to current `description`
- `metrics`: array of `{ label, value }`
- `tags`: array of strings
- `overview`: rich text or text
- `sortOrder`: number
- `isPublished`: boolean
- `projectType`: enum: `caseStudy`, `liveDemo`

Optional fields:

- `deepDiveTitle`
- `deepDiveDescription`
- `deepDiveStatLabel`
- `deepDiveStatValue`
- `externalLinks`

Special handling:

- The Tetris project should probably remain a local special-case for version 1.
- Sanity can control its card/modal copy, but the actual game component should remain code-owned.
- Use a stable field like `liveDemoKey: "tetris"` if we want Sanity to decide where that item appears.

## Rich Text Decision

There are two realistic choices:

### Option A: Plain Text / Limited HTML

Fastest migration. Keep `detailedDescription` style similar to today and render line breaks/lists.

Pros:

- Lower effort.
- Similar to current implementation.
- Easier to generate JSON.

Cons:

- Less editor-friendly.
- Link and strong formatting stay awkward.

### Option B: Portable Text

Use Sanity's structured rich text format for project overviews and future notes.

Pros:

- More CMS-native.
- Cleaner editing experience.
- Better for future long-form content.

Cons:

- Requires a Portable Text renderer in React.
- More schema and rendering work.

Recommendation: use Portable Text for project overview/deep dive if we want to learn Sanity properly. Use simple text for note summaries.

## Publishing Workflow

First version:

1. Edit note/project in Sanity Studio.
2. Publish the Sanity document.
3. Manually run GitHub Actions deploy workflow.
4. GitHub fetches content, builds the site, deploys to Pages.

Second version:

1. Publish in Sanity.
2. Sanity webhook triggers GitHub Actions.
3. Site rebuilds automatically.

The Sanity Free plan includes 2 GROQ-powered webhooks, so one webhook for rebuilds should be enough.

## GitHub Actions

Current workflow already:

- checks out repo
- installs dependencies
- runs `npm run build`
- deploys `dist` to GitHub Pages

Future workflow should add:

```txt
npm run fetch:content
npm run build
```

If the Sanity dataset is public and only published content is fetched, this may not need a Sanity token. If we later need private/draft content, add a GitHub Actions secret.

## Requirements

### Functional Requirements

- The site builds successfully from GitHub Actions.
- `LatestNotes` content comes from generated Sanity content.
- `FeaturedProjects` content comes from generated Sanity content, except any intentionally code-owned live demo behavior.
- Published Sanity content appears on the live site after a rebuild.
- Missing optional fields do not break the UI.
- Project ordering is controlled by `sortOrder`.
- Unpublished content is excluded.

### Non-Functional Requirements

- No production browser dependency on Sanity API availability.
- No Sanity token exposed in client-side JavaScript.
- Existing analytics events continue to work.
- Existing project modal behavior continues to work.
- Site performance should remain broadly unchanged.
- Build should fail loudly if required content is malformed.

## Validation Rules

Sanity schemas should enforce:

- Required title/summary fields.
- Required project card fields.
- At least one metric only where appropriate, not globally required.
- Reasonable max lengths for card text.
- Unique or stable slugs if/when pages are added.
- Sort order for predictable display.

The fetch script should validate:

- Required fields exist.
- Array fields are arrays.
- Project type is recognized.
- Tetris/live demo keys are known before rendering.

## Implementation Plan

### Phase 1: Setup and Content Model

- Create Sanity project and dataset.
- Create `note` schema.
- Create `project` schema.
- Enter current notes and projects into Sanity.
- Keep app code unchanged while reviewing data shape.

### Phase 2: Build-Time Fetch

- Add Sanity client dependency.
- Add fetch script.
- Generate local content JSON.
- Add npm script: `fetch:content`.
- Confirm generated output mirrors current hard-coded content.

### Phase 3: Notes Migration

- Update `LatestNotes` to import generated notes.
- Preserve existing section heading and layout.
- Test local build.
- Deploy manually.

### Phase 4: Projects Migration

- Update `FeaturedProjects` to import generated projects.
- Keep `ProjectCard` and `ProjectModal` presentation logic mostly unchanged.
- Handle `liveDemoKey` for Tetris.
- Test modal content, tags, metrics, deep dive, and analytics.

### Phase 5: Automation

- Add `fetch:content` to GitHub Actions before build.
- Add Sanity webhook to trigger GitHub workflow.
- Test: publish in Sanity -> GitHub rebuild -> live site updates.

## Acceptance Criteria

- A new note can be created in Sanity and appears on the live site after rebuild.
- A note can be hidden/unpublished without deleting it.
- Project card copy can be edited in Sanity and appears after rebuild.
- Project modal overview copy can be edited in Sanity and appears after rebuild.
- Project ordering can be changed from Sanity.
- The Tetris project still opens and plays as before.
- `npm run build` succeeds locally.
- GitHub Pages deploy succeeds.
- No Sanity token appears in the built `dist` assets.

## Risks

- Rich text migration could take longer than expected.
- Generated content may drift from component expectations unless validated.
- Sanity webhook to GitHub Actions may require careful token setup.
- Public datasets mean published content is queryable by anyone, though this is acceptable for public portfolio content.
- The Tetris project is a code/content hybrid, so it needs explicit handling.

## Open Questions

- Should Sanity Studio live in this repo or in a separate repo?
- Should the generated content file be committed as a fallback?
- Should project body copy use Portable Text from day one?
- Should `LatestNotes` remain short cards only, or become full note pages later?
- Should section headings like `Notes on AI` and `Selected work` stay code-owned or move into a `siteSettings` document?
- Should Sanity control the Tetris card order/copy while code controls the game itself?

## Recommended First Cut

Build the smallest useful version:

- Sanity Studio hosted by Sanity.
- Public dataset.
- `note` and `project` schemas only.
- Build-time fetch script.
- Generated JSON imported by React.
- Manual GitHub Actions rebuild first.
- Webhook automation second.

This keeps the project focused: learn Sanity, prove the workflow, and avoid turning the portfolio into a larger platform before the value is obvious.

## Reference Links

- Sanity docs: https://www.sanity.io/docs
- Sanity Content Lake: https://www.sanity.io/docs/content-lake
- Sanity Studio deployment: https://www.sanity.io/docs/studio/deployment
- Sanity webhooks: https://www.sanity.io/docs/content-lake/webhooks
- Sanity pricing: https://www.sanity.io/pricing
- GitHub Pages overview: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
