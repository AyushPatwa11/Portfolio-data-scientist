# Ayush Patwa Portfolio Platform

Empirical, minimalist developer portfolio platform built in Next.js 16 and TypeScript, incorporating type-safe static schema compilation (Velite) and Tailwind CSS v4 styling.

Note: This repository has been converted into a small monorepo to separate concerns:

- `Portfolio-data-scientist/` — the existing Next.js frontend app (no changes performed to source files).
- `backend/` — new Express-based backend for lightweight APIs.
- Root `package.json` — workspace scripts to run frontend and backend independently.

See the root README section below for quick run instructions.

---

## 🛠️ Tech Stack & Core Engineering

- **Core Framework**: Next.js 16.2.10 (App Router, Static Export target)
- **Programming Language**: TypeScript (Strict Mode)
- **Style Ingestions**: Tailwind CSS v4 (monochromatic theme + Aki Cobalt accent color)
- **Animation Engine**: Framer Motion 12
- **Data Compiler**: Velite 0.1.1 (Zod-validated markdown/json models compiled at build-time)
- **Icons**: Lucide Icons

---

## 📂 Folder Structure

```
.
├── content/                     # Dynamic markdown/json collections (Zod-validated)
│   ├── projects/                # MDX project case studies
│   ├── experience/              # Professional work & student leadership JSONs
│   ├── certificates/            # Verified certificates JSONs
│   ├── hackathons/              # Hackathons and milestones JSONs
│   ├── learning/                # Active study dashboard cards
│   ├── timeline/                # Academic history ticks
│   └── skills.json              # Core tech stack checklist
├── public/                      # Static assets
│   ├── resume/
│   │   └── resume.pdf           # Configurable resume PDF
│   └── images/
│       └── avatar.png           # Profile photo
├── src/
│   ├── app/                     # Next.js App Router root layouts & sitemaps
│   ├── components/
│   │   ├── layout/              # Navbars and headers
│   │   └── sections/            # Portfolio viewport sections
│   ├── config/                  # Configuration layers (navigation, site, SEO)
│   ├── hooks/                   # Client-side React hooks (useTheme, useReducedMotion)
│   ├── lib/                     # Helpers (SEO constructMetadata, animation presets)
│   └── types/                   # Shared TypeScript interfaces
├── velite.config.ts             # Velite compilation schema definitions
└── package.json                 # Package targets
```

---

## 🛠️ Data-Driven Content Management

All sections on the homepage are data-driven. Templates are saved in each content folder with a `-template` suffix and are automatically filtered out during production builds.

### 1. How to Add a Project Case Study

1. Copy `content/projects/project-template.mdx` to a new file named `my-project-slug.mdx`.
2. Populate the frontmatter fields (title, description, techStack, etc.).
3. Author the case study section body details:
   - `problem`: What challenges were encountered?
   - `solution`: What statistical methods/architecture resolved them?
   - `challenges`: What broke during development?
   - `learnings`: What insights were gained?
   - `futureImprovements`: How does the project scale?
4. Run `npm run build` to compile the static page dynamically.

### 2. How to Add a Certificate

1. Copy `content/certificates/certificate-template.json` to a new file (e.g. `deep-learning-specialization.json`).
2. Populate the title, issuer, issueDate, and verifyUrl fields.
3. The certificate will render automatically under the **Credentials** section.

### 3. How to Update the Resume

1. Replace `public/resume/resume.pdf` with your new PDF resume.
2. Open `src/config/site.ts` and update the metadata:
   - `resumeVersion`: Increment the semantic version (e.g. `'v1.2.1'`).
   - `resumeLastUpdated`: Update the date stamp (e.g. `'July 2026'`).
3. The UI will instantly display the updated date and version alongside the download actions.

---

## 🚀 Development & Compilation

### Setup Dependencies

```bash
npm install
```

### Run Local Dev Server (includes live Velite watcher)

```bash
npm run dev
```

### Build Production Static Output (HTML/CSS export)

```bash
npm run build
```

_The compiled export directory will be generated under `/out`._

---

## ☁️ Deployment

Since the project builds as a completely static site (via `output: 'export'` target in `next.config.ts`), it can be hosted on **Vercel**, **GitHub Pages**, **Netlify**, or **Cloudflare Pages**.

1. Import the repository on Vercel.
2. In Project Settings, ensure the Build Command is `npm run build` and Output Directory is `out`.
3. Deploy.

---

## 🎨 Screenshots & Mockups

Here are placeholders for visual mockups representing the responsive viewports of the V1 portfolio platform:

- **Desktop Viewport**: `![Landing Page Desktop Mockup](./public/images/mockups/desktop-preview.png)`
- **Mobile Viewport**: `![Landing Page Mobile Mockup](./public/images/mockups/mobile-preview.png)`

---

## 🔧 Customization Guide

### 1. Modifying SEO Metadata

Global meta attributes, Twitter templates, and OpenGraph variables are controlled in `src/config/seo.ts`. Update the values inside `seoConfig` to change global page descriptions and search engine crawlers behaviors.

### 2. Modifying Social Navigation Handles

Profile handle identifiers and mail links are managed inside `src/config/social.ts` and `src/config/site.ts`.

---

## 🗺️ Future Roadmap

- [ ] Integrate live Web3Forms endpoint for production contact submissions.
- [ ] Implement Vercel Speed Insights for real-time LCP monitoring.
- [ ] Add dynamic dark-mode transition sound indicators (soft hum toggle).

---

## 📄 License

This personal portfolio code is licensed under the **MIT License**. Feel free to use, modify, and distribute it.
