# Postal Code Search App

## Overview

A Single Page Application (SPA) for searching Japanese addresses by postal code using the ZipCloud API.

## Tech Stack

- Next.js
- React
- TypeScript
- SCSS
- Swiper

## Environment

- Node.js: 22.x
- npm: 10.x

## Setup

Install dependencies:

```bash
npm install
```

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```bash
npm run dev
```

## Lint

```bash
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Postal code search using ZipCloud API
- Input validation
- Error handling
- Search history
- Responsive design
- Carousel navigation
- Mobile support

## Design Decisions

- Mobile First Design
- Breakpoint: 768px
- SCSS Modules
- TypeScript Strict Mode

## Project Structure

```text
/
├─ public/                  # Static assets
├─ src/
│  ├─ _classes/             # Domain models and business classes
│  ├─ _components/          # Reusable UI components
│  ├─ _interfaces_/         # Shared interfaces and type declarations
│  ├─ _services/            # API communication and external services
│  ├─ _styles/              # Global styles, variables, and SCSS files
│  └─ app/                  # Next.js App Router pages and layouts
│
│
├─ eslint.config.mjs
├─ package.json
├─ tsconfig.json
├─ next.config.ts
└─ README.md
```
