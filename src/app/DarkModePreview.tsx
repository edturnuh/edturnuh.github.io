import { useState } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Copy,
  Moon,
  Sun,
  X,
} from 'lucide-react';

type Palette = {
  name: string;
  vibe: string;
  description: string;
  pageBackground: string;
  pageGlow: string;
  surface: string;
  surfaceAlt: string;
  elevated: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accent: string;
  accentSoft: string;
  accentText: string;
  buttonText: string;
  overlay: string;
};

const palettes: Palette[] = [
  {
    name: 'MVP dark',
    vibe: 'Current baseline',
    description: 'Quiet charcoal, soft ivory text, and just enough surface lift.',
    pageBackground: '#131313',
    pageGlow: 'radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 34%)',
    surface: 'rgba(255,255,255,0.03)',
    surfaceAlt: '#1a1a1a',
    elevated: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.10)',
    textPrimary: '#f5f5f4',
    textSecondary: '#d6d3d1',
    textMuted: '#a8a29e',
    accent: '#f5f5f4',
    accentSoft: 'rgba(255,255,255,0.08)',
    accentText: '#171717',
    buttonText: '#171717',
    overlay: 'rgba(0,0,0,0.72)',
  },
  {
    name: 'Warm Summer Night',
    vibe: 'Warm summer night time',
    description: 'Burgundy-black air, apricot warmth, and a little dusky glow.',
    pageBackground: '#1a1112',
    pageGlow: 'radial-gradient(circle at top left, rgba(255,170,112,0.18), transparent 30%), radial-gradient(circle at 85% 10%, rgba(225,92,72,0.12), transparent 22%)',
    surface: 'rgba(255,240,224,0.04)',
    surfaceAlt: '#241718',
    elevated: 'rgba(255,196,156,0.08)',
    border: 'rgba(255,214,191,0.12)',
    textPrimary: '#fff1e6',
    textSecondary: '#f2d0bb',
    textMuted: '#d3a993',
    accent: '#ffb273',
    accentSoft: 'rgba(255,178,115,0.18)',
    accentText: '#2a1710',
    buttonText: '#2a1710',
    overlay: 'rgba(13,6,7,0.74)',
  },
  {
    name: 'Cosy Winter',
    vibe: 'Warm cosy winter time',
    description: 'Dark plum-brown with amber lamp light and heavier cocooning warmth.',
    pageBackground: '#181214',
    pageGlow: 'radial-gradient(circle at top left, rgba(255,196,115,0.16), transparent 32%), radial-gradient(circle at 75% 5%, rgba(140,73,38,0.14), transparent 24%)',
    surface: 'rgba(255,235,214,0.04)',
    surfaceAlt: '#21181b',
    elevated: 'rgba(255,196,115,0.08)',
    border: 'rgba(240,200,170,0.12)',
    textPrimary: '#fff4eb',
    textSecondary: '#e6c9b2',
    textMuted: '#c8a88f',
    accent: '#f0b15e',
    accentSoft: 'rgba(240,177,94,0.20)',
    accentText: '#2a1a0c',
    buttonText: '#2a1a0c',
    overlay: 'rgba(12,8,9,0.76)',
  },
  {
    name: 'Moonwater',
    vibe: 'Extremely dark blues with warm moon tones',
    description: 'Very deep navy, cool air, and warm pale-moon highlights.',
    pageBackground: '#060b18',
    pageGlow: 'radial-gradient(circle at top left, rgba(108,146,255,0.18), transparent 28%), radial-gradient(circle at 82% 12%, rgba(255,228,178,0.10), transparent 22%)',
    surface: 'rgba(210,226,255,0.04)',
    surfaceAlt: '#0a1324',
    elevated: 'rgba(255,228,178,0.08)',
    border: 'rgba(177,199,242,0.14)',
    textPrimary: '#eef4ff',
    textSecondary: '#d3def6',
    textMuted: '#aab8d8',
    accent: '#f1deaf',
    accentSoft: 'rgba(241,222,175,0.18)',
    accentText: '#101b31',
    buttonText: '#101b31',
    overlay: 'rgba(2,6,18,0.78)',
  },
  {
    name: 'Space Exploration',
    vibe: 'Space exploration',
    description: 'A more cinematic vacuum: midnight blue, capsule glass, signal blue.',
    pageBackground: '#050814',
    pageGlow: 'radial-gradient(circle at 18% 8%, rgba(74,121,255,0.20), transparent 28%), radial-gradient(circle at 78% 12%, rgba(90,225,255,0.14), transparent 24%)',
    surface: 'rgba(187,219,255,0.04)',
    surfaceAlt: '#091021',
    elevated: 'rgba(90,225,255,0.10)',
    border: 'rgba(140,180,255,0.14)',
    textPrimary: '#f2f7ff',
    textSecondary: '#cddcf5',
    textMuted: '#95abd3',
    accent: '#78c8ff',
    accentSoft: 'rgba(120,200,255,0.18)',
    accentText: '#071524',
    buttonText: '#071524',
    overlay: 'rgba(2,5,13,0.82)',
  },
  {
    name: 'SE v2',
    vibe: 'Space exploration, warmed slightly',
    description: 'Keeps the dynamic deep-space feel, but adds moon-gold warmth and softer reading tones so it feels more human and premium.',
    pageBackground: '#060916',
    pageGlow: 'radial-gradient(circle at 18% 8%, rgba(74,121,255,0.18), transparent 28%), radial-gradient(circle at 78% 10%, rgba(245,208,140,0.12), transparent 18%), radial-gradient(circle at 60% 0%, rgba(112,225,255,0.08), transparent 20%)',
    surface: 'rgba(208,222,250,0.045)',
    surfaceAlt: '#0a1222',
    elevated: 'rgba(245,208,140,0.08)',
    border: 'rgba(155,183,236,0.14)',
    textPrimary: '#f4f6fb',
    textSecondary: '#d8dde7',
    textMuted: '#adb6c8',
    accent: '#f5d08c',
    accentSoft: 'rgba(245,208,140,0.18)',
    accentText: '#0d1b30',
    buttonText: '#0d1b30',
    overlay: 'rgba(2,5,13,0.82)',
  },
  {
    name: 'Fireplace Reading',
    vibe: 'Reading by the fireplace',
    description: 'Mahogany-dark surfaces with ember orange and paper-warm type.',
    pageBackground: '#16100d',
    pageGlow: 'radial-gradient(circle at top left, rgba(255,116,52,0.20), transparent 28%), radial-gradient(circle at 78% 12%, rgba(255,180,107,0.10), transparent 22%)',
    surface: 'rgba(255,232,212,0.04)',
    surfaceAlt: '#211714',
    elevated: 'rgba(255,139,82,0.10)',
    border: 'rgba(255,209,175,0.12)',
    textPrimary: '#fff1e6',
    textSecondary: '#efd0b7',
    textMuted: '#d6a98c',
    accent: '#f28b52',
    accentSoft: 'rgba(242,139,82,0.20)',
    accentText: '#2b170d',
    buttonText: '#2b170d',
    overlay: 'rgba(10,6,4,0.78)',
  },
  {
    name: 'Fireplace Pitch',
    vibe: 'Fireplace reading, but sharper',
    description: 'Keeps the ember warmth, but adds brighter copper energy and more contrast to feel more ambitious.',
    pageBackground: '#140d0a',
    pageGlow: 'radial-gradient(circle at top left, rgba(255,105,46,0.24), transparent 26%), radial-gradient(circle at 82% 10%, rgba(255,196,117,0.12), transparent 20%)',
    surface: 'rgba(255,233,214,0.045)',
    surfaceAlt: '#1c120f',
    elevated: 'rgba(255,130,70,0.12)',
    border: 'rgba(255,204,166,0.14)',
    textPrimary: '#fff3e8',
    textSecondary: '#f3cfb5',
    textMuted: '#deaa87',
    accent: '#ff7a3d',
    accentSoft: 'rgba(255,122,61,0.22)',
    accentText: '#2b1408',
    buttonText: '#2b1408',
    overlay: 'rgba(9,5,3,0.80)',
  },
  {
    name: 'Copper Sprint',
    vibe: 'Warm, premium, more kinetic',
    description: 'Copper highlights and darker espresso shadows give the same warmth a more driven, commercial feel.',
    pageBackground: '#120c0d',
    pageGlow: 'radial-gradient(circle at 14% 8%, rgba(255,106,64,0.22), transparent 26%), radial-gradient(circle at 82% 12%, rgba(255,157,84,0.14), transparent 22%)',
    surface: 'rgba(255,234,219,0.04)',
    surfaceAlt: '#1a1213',
    elevated: 'rgba(255,126,74,0.11)',
    border: 'rgba(248,194,161,0.13)',
    textPrimary: '#fff1ea',
    textSecondary: '#efcab8',
    textMuted: '#d69f86',
    accent: '#ff6e47',
    accentSoft: 'rgba(255,110,71,0.22)',
    accentText: '#2a120d',
    buttonText: '#2a120d',
    overlay: 'rgba(8,4,5,0.80)',
  },
  {
    name: 'Midnight Ember',
    vibe: 'Firelight with more edge',
    description: 'A moodier charcoal-red variant that feels less sleepy and more high-stakes.',
    pageBackground: '#100b0d',
    pageGlow: 'radial-gradient(circle at top left, rgba(230,69,44,0.24), transparent 28%), radial-gradient(circle at 78% 10%, rgba(255,175,83,0.10), transparent 18%)',
    surface: 'rgba(255,229,220,0.035)',
    surfaceAlt: '#171013',
    elevated: 'rgba(230,69,44,0.12)',
    border: 'rgba(236,171,146,0.12)',
    textPrimary: '#fff0eb',
    textSecondary: '#edc7ba',
    textMuted: '#d49982',
    accent: '#e6452c',
    accentSoft: 'rgba(230,69,44,0.24)',
    accentText: '#2a0f0a',
    buttonText: '#fff4ef',
    overlay: 'rgba(8,4,5,0.82)',
  },
  {
    name: 'Blue/Black',
    vibe: 'Blue/black on dark blue',
    description: 'Sharper, more synthetic, almost tech-luxury without going full dashboard.',
    pageBackground: '#07111f',
    pageGlow: 'radial-gradient(circle at top left, rgba(0,99,255,0.22), transparent 30%), radial-gradient(circle at 85% 8%, rgba(58,114,255,0.14), transparent 24%)',
    surface: 'rgba(150,190,255,0.04)',
    surfaceAlt: '#0b1629',
    elevated: 'rgba(86,136,255,0.10)',
    border: 'rgba(125,164,255,0.14)',
    textPrimary: '#edf4ff',
    textSecondary: '#c3d6f4',
    textMuted: '#90a7d3',
    accent: '#5c8dff',
    accentSoft: 'rgba(92,141,255,0.18)',
    accentText: '#071221',
    buttonText: '#071221',
    overlay: 'rgba(3,7,16,0.80)',
  },
];

function TogglePreview({ palette }: { palette: Palette }) {
  return (
    <div className="flex items-center gap-2">
      <button
        className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border px-3 py-2 text-[14px] transition-all duration-200"
        style={{
          borderColor: palette.border,
          background: palette.surface,
          color: palette.textPrimary,
        }}
      >
        <Sun size={16} />
        <span className="hidden md:inline text-[13px] font-medium tracking-[0.01em]">
          Light
        </span>
      </button>
      <button
        className="rounded-xl border px-4 py-2 text-[14px] transition-all duration-200"
        style={{
          borderColor: palette.border,
          background: palette.surface,
          color: palette.textPrimary,
        }}
      >
        Contact
      </button>
    </div>
  );
}

function PalettePreview({ palette }: { palette: Palette }) {
  return (
    <section
      className="overflow-hidden rounded-[34px] border shadow-[0_40px_120px_rgba(15,23,42,0.24)]"
      style={{
        borderColor: palette.border,
        backgroundColor: palette.pageBackground,
        backgroundImage: palette.pageGlow,
        color: palette.textPrimary,
      }}
    >
      <div
        className="border-b"
        style={{ borderColor: palette.border, background: 'rgba(255,255,255,0.01)' }}
      >
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-5">
          <div className="justify-self-start text-[15px] font-medium tracking-[0.01em]">
            Ed Turner
          </div>
          <div
            className="hidden items-center justify-center gap-6 text-[14px] md:flex"
            style={{ color: palette.textMuted }}
          >
            <span>Selected Work</span>
            <span>About</span>
            <span>Notes</span>
          </div>
          <div className="justify-self-end">
            <TogglePreview palette={palette} />
          </div>
        </div>
      </div>

      <div className="px-6 py-8 md:px-8 md:py-10">
        <p
          className="font-mono text-[12px] uppercase tracking-[0.16em]"
          style={{ color: palette.textMuted }}
        >
          {palette.vibe}
        </p>
        <h2 className="mt-5 max-w-4xl text-[42px] leading-[1.02] tracking-[-0.05em] md:text-[62px]">
          I run revenue-critical websites for high-growth companies
        </h2>
        <p
          className="mt-5 max-w-3xl text-[15px] leading-[1.8]"
          style={{ color: palette.textSecondary }}
        >
          Same layout language, same editorial hierarchy, but a completely different emotional temperature.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            {
              eyebrow: '2026 | Allica Bank',
              title: 'Driving CRO within a GBP1.6bn growth story',
              copy: '+55% CVR while scaling',
            },
            {
              eyebrow: '2025 | Allica Bank',
              title: "Rebuilding a bank's website into a scalable growth asset",
              copy: 'Rapid 4-month rebuild',
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border p-6"
              style={{
                borderColor: palette.border,
                background: palette.surface,
                boxShadow: `inset 0 1px 0 ${palette.elevated}`,
              }}
            >
              <p
                className="font-mono text-[12px] uppercase tracking-[0.15em]"
                style={{ color: palette.textMuted }}
              >
                {card.eyebrow}
              </p>
              <h3 className="mt-5 text-[28px] leading-[1.12] tracking-[-0.03em]">
                {card.title}
              </h3>
              <p
                className="mt-4 text-[15px] leading-[1.7]"
                style={{ color: palette.textSecondary }}
              >
                {card.copy}
              </p>
            </article>
          ))}
        </div>

        <div
          className="mt-10 rounded-[26px] border"
          style={{
            borderColor: palette.border,
            background: palette.surface,
          }}
        >
          <div className="grid gap-8 px-6 py-7 md:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.9fr)]">
            <div>
              <p
                className="font-mono text-[12px] uppercase tracking-[0.16em]"
                style={{ color: palette.textMuted }}
              >
                Contact
              </p>
              <h3 className="mt-4 text-[34px] leading-[1.02] tracking-[-0.04em] md:text-[46px]">
                Open to new roles in website management
              </h3>
              <p
                className="mt-5 max-w-2xl text-[15px] leading-[1.7]"
                style={{ color: palette.textSecondary }}
              >
                This is where each palette really changes the mood of the same interface.
              </p>
            </div>
            <div
              className="rounded-2xl border p-5 md:p-6"
              style={{
                borderColor: palette.border,
                background: palette.surfaceAlt,
              }}
            >
              <p
                className="font-mono text-[12px] uppercase tracking-[0.16em]"
                style={{ color: palette.textMuted }}
              >
                Next Step
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <button
                  className="rounded-xl px-5 py-3 text-[15px] font-medium"
                  style={{
                    background: palette.accent,
                    color: palette.buttonText,
                  }}
                >
                  Contact
                </button>
                <button
                  className="rounded-xl border px-5 py-3 text-[15px]"
                  style={{
                    borderColor: palette.border,
                    background: palette.surface,
                    color: palette.textPrimary,
                  }}
                >
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModalPreview({ palette }: { palette: Palette }) {
  return (
    <div
      className="rounded-[32px] p-4"
      style={{
        background: palette.overlay,
      }}
    >
      <div
        className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border shadow-[0_32px_90px_rgba(0,0,0,0.35)]"
        style={{
          borderColor: palette.border,
          backgroundColor: palette.pageBackground,
          backgroundImage: palette.pageGlow,
          color: palette.textPrimary,
        }}
      >
        <div className="flex items-center justify-between border-b px-6 py-4" style={{ borderColor: palette.border }}>
          <span
            className="font-mono text-[13px] uppercase tracking-[0.16em]"
            style={{ color: palette.textMuted }}
          >
            Contact
          </span>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
            style={{ color: palette.textMuted }}
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-6">
          <h3 className="text-[28px] leading-[1.1] tracking-[-0.03em]">Get in touch</h3>
          <p
            className="mt-3 text-[16px] leading-[1.7]"
            style={{ color: palette.textSecondary }}
          >
            Connect on LinkedIn or email me directly.
          </p>

          <div
            className="mt-6 flex items-center gap-3 rounded-xl border px-4 py-4"
            style={{
              borderColor: palette.border,
              background: palette.surface,
            }}
          >
            <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[15px]">
              edward_turner@hotmail.co.uk
            </span>
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ color: palette.textMuted }}
            >
              <Copy size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DarkModePreview() {
  const [paletteIndex, setPaletteIndex] = useState(0);
  const palette = palettes[paletteIndex];

  const goPrevious = () => {
    setPaletteIndex((current) => (current - 1 + palettes.length) % palettes.length);
  };

  const goNext = () => {
    setPaletteIndex((current) => (current + 1) % palettes.length);
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f4f1ea_0%,#f7f5ef_24%,#eae6de_100%)] px-5 py-8 text-neutral-950 md:px-8 md:py-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-3xl">
          <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500">
            Dark Mode Lab
          </p>
          <h1 className="mt-4 text-[42px] leading-[1.02] font-semibold tracking-[-0.05em] text-neutral-950 md:text-[72px]">
            Alternative dark moods for the same UI
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-neutral-700">
            This page reuses the preview route as a palette explorer. Each option keeps the portfolio structure intact and changes just a handful of colors to push the emotional tone somewhere more distinctive.
          </p>
        </div>

        <section className="mt-10 rounded-[32px] border border-neutral-200 bg-white p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-neutral-500">
                Current Palette
              </p>
              <h2 className="mt-3 text-[30px] leading-[1.04] tracking-[-0.04em] text-neutral-950 md:text-[40px]">
                {palette.name}
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-neutral-700">
                {palette.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={goPrevious}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-300 bg-white text-neutral-950 transition-colors hover:bg-neutral-100"
                aria-label="Previous palette"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={goNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-300 bg-white text-neutral-950 transition-colors hover:bg-neutral-100"
                aria-label="Next palette"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {palettes.map((entry, index) => {
              const isActive = index === paletteIndex;

              return (
                <button
                  key={entry.name}
                  onClick={() => setPaletteIndex(index)}
                  className={`rounded-full border px-3 py-1.5 text-[12px] transition-colors ${
                    isActive
                      ? 'border-neutral-950 bg-neutral-950 text-white'
                      : 'border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {entry.name}
                </button>
              );
            })}
          </div>
        </section>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.8fr)_minmax(320px,0.9fr)]">
          <PalettePreview palette={palette} />

          <div className="space-y-6">
            <section className="rounded-[32px] border border-neutral-200 bg-white p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-6">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-neutral-500">
                Vibe Notes
              </p>
              <h3 className="mt-3 text-[28px] leading-[1.06] tracking-[-0.04em] text-neutral-950">
                {palette.vibe}
              </h3>
              <div className="mt-5 space-y-3 text-[15px] leading-[1.7] text-neutral-700">
                <p>This is still the same portfolio UI: same typography, same spacing, same cards and modal language.</p>
                <p>The difference comes from the page base tone, the warmth or coolness of the text, and how accented surfaces behave.</p>
                <p>The CTA button color is where each palette announces its personality most loudly.</p>
              </div>
            </section>

            <section className="rounded-[32px] border border-neutral-200 bg-white p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-neutral-500">
                    Popup Preview
                  </p>
                  <h3 className="mt-3 text-[28px] leading-[1.06] tracking-[-0.04em] text-neutral-950">
                    Contact modal
                  </h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 text-[12px] text-neutral-700">
                  <ArrowRight size={13} />
                  {palette.name}
                </span>
              </div>
              <div className="mt-5">
                <ModalPreview palette={palette} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
