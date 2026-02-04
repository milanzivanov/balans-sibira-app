# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **Next.js 16 + Sanity CMS** application called "Balans Sibira App" that uses:
- Next.js App Router with React 19
- Sanity v4 for content management (headless CMS)
- TypeScript with strict mode
- Tailwind CSS v4 with PostCSS
- React Compiler enabled
- Styled Components for additional styling

The project integrates Sanity Studio directly into the Next.js app at `/studio` for content authoring.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Run linting
npm run lint
```

## Architecture

### Directory Structure

- **`src/app/`**: Next.js App Router pages and layouts
  - `layout.tsx`: Root layout with metadata
  - `page.tsx`: Home page
  - `studio/[[...tool]]/page.tsx`: Embedded Sanity Studio (catch-all route at `/studio`)

- **`src/sanity/`**: Sanity CMS configuration and schema
  - `env.ts`: Environment variable validation (requires `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`)
  - `lib/client.ts`: Sanity client configuration
  - `lib/live.ts`: Exports `sanityFetch` and `SanityLive` for live content updates
  - `lib/image.ts`: Image URL builder utilities
  - `schemaTypes/`: Content models (Post, Author, Category, BlockContent)
  - `structure.ts`: Sanity Studio structure configuration

- **Root config files**:
  - `sanity.config.ts`: Studio configuration with basePath `/studio`, uses Vision Tool for GROQ queries
  - `sanity.cli.ts`: CLI configuration for running `sanity` commands
  - `next.config.ts`: Next.js config with React Compiler enabled

### Key Patterns

**Environment Variables**: The app requires two environment variables at runtime (configured via `.env.local` or deployment platform):
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION` (optional, defaults to '2026-01-30')

**Sanity Integration**:
- Studio is mounted at `/studio` as a catch-all route
- Content queries use `sanityFetch` from `src/sanity/lib/live.ts` for automatic content updates
- Must render `<SanityLive />` in layout when using live content API
- Client instance in `src/sanity/lib/client.ts` has `useCdn: true` (set to false for ISR or tag-based revalidation)

**Content Schema**: Blog-focused with three main document types:
- `post`: Has title, slug, author (reference), mainImage, categories (array of references), publishedAt, body (blockContent)
- `author`: Has name, slug, image, bio (block array)
- `category`: Has title, slug, description

**Path Aliases**: `@/*` resolves to `./src/*` (configured in `tsconfig.json`)

## Sanity CLI Usage

```bash
# Deploy GraphQL API
npx sanity graphql deploy

# Manage datasets
npx sanity dataset list
npx sanity dataset create <name>

# Deploy Sanity Studio
npx sanity deploy

# Start standalone Sanity Studio (not needed, already embedded at /studio)
npx sanity start
```

## Notes

- React Compiler is enabled in `next.config.ts`
- TypeScript is in strict mode
- The app uses Next.js 16's force-static export for the Studio page
- Sanity Studio uses Structure Builder to organize content (see `src/sanity/structure.ts`)
