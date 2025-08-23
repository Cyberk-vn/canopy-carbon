# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev        # Start development server with Turbopack
npm run build      # Build production bundle
npm run start      # Start production server
npm run lint       # Run ESLint linting

# Development server runs on http://localhost:3000
```

## Project Architecture

### Tech Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS v4 with Shadcn/UI components
- **Animations**: Motion library v12.23.12 for advanced animations, Swiper for carousels
- **State Management**: Zustand v5.0.8 for global state
- **TypeScript**: Full TypeScript support with strict configuration
- **Package Manager**: pnpm

### Directory Structure

```
canopy-carbon/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Geist fonts
│   ├── page.tsx           # Home page
│   └── globals.css        # Global Tailwind styles
├── src/                   # Main source directory
│   ├── app/              # App Router pages (about-us, canopy-insight, our-project)
│   ├── components/       # React components organized by domain
│   │   ├── home/         # Home page specific components
│   │   ├── about-us/     # About Us page components
│   │   ├── canopy-insight/ # Canopy Insight page components
│   │   ├── our-project/  # Our Project page components
│   │   ├── common/       # Shared layout components (navigation, footer)
│   │   └── shared/       # Reusable components across domains
│   ├── hooks/            # Custom hooks organized by feature
│   │   └── responsive/   # Responsive design hooks
│   ├── lib/              # Utilities and configurations
│   │   └── services/     # Service layer for business logic
│   ├── stores/           # State management stores (currently empty)
│   └── types/            # TypeScript type definitions
├── components/           # Root-level components directory
├── lib/                  # Root-level utilities
├── design/               # Design assets and Figma exports
│   └── figma/            # Figma design files organized by feature
├── docs/                 # Project documentation and progress tracking
├── framework/            # Bug reports and feature request templates
└── public/               # Static assets organized by feature
    └── assets/           # Images and icons organized by page/component
```

### Code Organization Principles

Based on the Cursor rules configuration, this project follows strict architectural patterns:

#### File Structure Requirements

- **Business logic**: Must be placed in `src/` directory
- **Services**: Organized by domain in `src/lib/services/`
- **Hooks**: Categorized by feature in `src/hooks/{feature}/`
- **Stores**: Consolidated by feature (e.g., `src/stores/auth.store.ts`, `src/stores/game.store.ts`)
- **Types**: Organized by domain in `src/types/`
- **File naming**: Use kebab-case (e.g., `use-scroll-animation.ts`, `cursor-tracking.service.ts`)

#### State Management

- **Primary**: Zustand for global state with proper TypeScript typing
- **Persistence**: Use persist middleware with BigInt serialization for blockchain data
- **Store structure**: Consolidate related functionality by feature domain
- **Security**: Never store sensitive data (private keys, secrets) in persisted state

#### Frontend Standards

- **Components**: Export default for Pages, named exports for Components
- **Functions**: Arrow functions for all component and function definitions
- **State**: Client Components only manage UI-relevant state
- **Data fetching**: Server Components for initial data, TanStack Query for client-side
- **Styling**: TailwindCSS with custom colors and animations

### Shadcn/UI Configuration

The project uses Shadcn/UI with the following configuration:

- **Style**: "new-york"
- **Base color**: "neutral"
- **CSS Variables**: Enabled
- **Icon library**: Lucide React
- **Components path**: `@/components/ui`
- **Utils path**: `@/lib/utils`

### Path Aliases

TypeScript path mapping configured in `components.json`:

- `@/components` maps to `./components`
- `@/lib` maps to `./lib`
- `@/hooks` maps to `./hooks`
- `@/components/ui` maps to `./components/ui`
- `@/lib/utils` maps to `./lib/utils`

### Design System

#### Custom Colors

The project extends Tailwind with custom colors for specific components:

- Banner component colors: `light-gray-1`, `light-gray-2`, `light-gray-3`, `banner-border`
- Contact section colors: `contact-green`, `contact-text-light`, `contact-text-secondary`

#### Typography

Multiple font families configured:

- **Primary**: Geist Sans (default)
- **Mono**: Geist Mono
- **Alternative**: Roboto, Open Sans, Inter, Avenir

#### Animations

Custom keyframes and animations for accordion components and UI interactions.

### Development Patterns

1. **Component Architecture**: Separate Server and Client Components appropriately
2. **Error Handling**: Consistent error boundaries and error state management
3. **Performance**: Optimize animations and scroll-based interactions
4. **Asset Organization**: Images organized by page/feature in `public/assets/`
5. **Documentation**: Comprehensive progress tracking in `docs/` directory

### Design Assets

The project includes organized Figma design files in `design/figma/` directory:

- Component specifications with implementation checklists
- Design requirements and CSS tokens
- Asset exports and color/gradient definitions
- Layout properties and typography specifications

Use these as reference when implementing UI components to maintain design consistency.

### Project Structure Notes

- **Multi-page Application**: Home, About Us, Canopy Insight, Our Project, and Contact Us pages
- **Component Reusability**: Shared components in `common/` and `shared/`
- **Asset Management**: Extensive image assets organized by feature
- **Animation System**: Motion-based animations integrated throughout components
- **Development Tracking**: Bug reports and feature requests in `framework/` directory
- **Design Integration**: Direct Figma-to-code workflow with exported specifications

### Motion Library Integration

The project uses Motion library for advanced animations:

- Scroll-based animations in hero sections and content blocks
- Component entrance/exit animations
- Mobile-responsive animation patterns
- Custom spring configurations for smooth interactions
