# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev       # Start development server
yarn build     # TypeScript check + production build
yarn lint      # Run ESLint
yarn format    # Format code with Prettier
```

## Architecture

Single-page React website for the stac-geoparquet specification. Built with Vite, TypeScript, and Chakra UI v3.

- `src/App.tsx` - Main app with section layout
- `src/theme.ts` - Chakra UI theme with brand colors (teal palette)
- `src/components/Section.tsx` - Reusable section wrapper with consistent styling
- `src/components/` - Page sections: Header, About, Why, HowItWorks, GetStarted, Implementations

Code highlighting uses shiki with Chakra UI's CodeBlock adapter (see GetStarted.tsx).
