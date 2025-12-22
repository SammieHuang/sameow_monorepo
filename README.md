# Sameow Monorepo

A monorepo for managing multiple packages and applications.

## Project Structure
.
├─ .github/
│  └─ workflows/
│     └─ storybook-pages.yml
├─ packages/
│  └─ ui/
│     ├─ .storybook/
│     └─ src/
│        ├─ components/
│        │  ├─ Button/
│        │  ├─ Carousel/
│        │  └─ ui/
│        ├─ lib/
│        ├─ styles/
│        ├─ index.ts
│        ├─ types.ts
│        └─ vite-env.d.ts
│        ├─ Welcome.stories.tsx
│        └─ Welcome.tsx
└─ apps/
   └─ demo/
      ├─ pages/
      │  ├─ login/
      │  ├─ signup/
      │  └─ dashboard/
      ├─ layout/
      │  └─ app/
      ├─ data/
      │  └─ mock/
      └─ app/
         └─ router/


## Packages

### `@sameow/ui`

A React UI component library built with:
- **React** & **TypeScript**
- **Tailwind CSS** for styling
- **Storybook** for component documentation and development
- **shadcn/ui** components

#### Components

- **Button** - Button component with variants
- **Carousel** - Carousel/slider component

#### Scripts

- `pnpm storybook` - Start Storybook development server
- `pnpm build-storybook` - Build static Storybook files

## Getting Started

This project uses [pnpm](https://pnpm.io/) as the package manager.

### Installation

```bash
pnpm install
```

### Development

```bash
# Run Storybook for UI components
cd packages/ui
pnpm storybook
```

## Workspace Configuration

This monorepo uses pnpm workspaces configured to support:
- `apps/*` - Applications
- `packages/*` - Shared packages

