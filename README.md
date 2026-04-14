# Noshitha Juttu Portfolio

Personal portfolio for Noshitha Juttu, built with Next.js, React, TypeScript, and Tailwind CSS. The site highlights AI systems work, retrieval and NLP projects, data engineering experience, publications, hackathons, and contact links.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- Vercel deployment

## Project Structure

```text
app/
  globals.css      Global styles and Tailwind setup
  layout.tsx       Root metadata and layout
  page.tsx         Portfolio page UI
data/
  siteContent.ts   Portfolio content, links, projects, and experience
public/
  Resume_Noshitha_Juttu.pdf
  Noshitha_Profile_Picture.jpeg
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Updating Content

Most portfolio content lives in `data/siteContent.ts`, including:

- Navigation links
- Hero text and profile details
- Experience
- Projects
- Hackathons
- Publications
- Tech stack
- Contact copy

Static files such as the resume and profile image are stored in `public/`.

## Deployment

This repository is connected to Vercel. Pushing changes to the `main` branch will trigger a new Vercel deployment.
