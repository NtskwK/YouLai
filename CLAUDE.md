# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

YouLai is a React + TypeScript web application with an interactive map interface. It uses Vite as the build tool and Tailwind CSS for styling.

## Common Commands

```bash
pnpm install     # Install dependencies
pnpm dev         # Start development server
pnpm build       # TypeScript check + production build
pnpm preview     # Preview production build
pnpm format      # Format code with Biome
pnpm lint        # Lint code with Biome
```

Note: This project uses pnpm as the package manager (pnpm-lock.yaml present).

## Tech Stack

- **Framework**: React 19.2.4
- **Language**: TypeScript 5.8
- **Build tool**: Vite 8
- **Styling**: Tailwind CSS 4.2 (via @tailwindcss/vite plugin)
- **Map**: Leaflet 1.9 for map rendering
- **PostCSS**: Using @tailwindcss/postcss for Tailwind processing

## Architecture

The application has a simple single-page structure:

- `src/main.tsx` - Entry point, renders App component
- `src/App.tsx` - Main layout with header and map area
- `src/components/MapContainer.tsx` - Leaflet map integration
- `src/App.css` - Base styles and CSS variables

## Important Notes

- **Always run `pnpm format` and `pnpm lint` after modifying code** to ensure code quality consistency.
- Tailwind CSS v4 uses a different configuration approach - no tailwind.config.js needed, using `@tailwindcss/vite` plugin instead.
