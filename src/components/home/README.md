# Home Banner Component

## Overview
The Banner component is the main hero section for the Canopy Carbon website, featuring:
- Full-width background image with gradient overlay
- Navigation menu with blur effect
- Responsive design for desktop, tablet, and mobile
- Company branding and messaging

## Features
- **Responsive Design**: Mobile-first approach with desktop optimizations
- **Interactive Navigation**: Hover states and mobile dropdown menu
- **Performance Optimized**: Uses Next.js Image component for optimal loading
- **TypeScript Support**: Fully typed props and interfaces
- **Accessibility**: Semantic HTML and ARIA-compliant navigation

## Props
```typescript
interface BannerProps {
  title: string;           // Main title text
  subtitle: string;        // Descriptive subtitle
  menuItems: MenuItem[];   // Navigation menu items
  logoUrl: string;         // Company logo image path
}

interface MenuItem {
  text: string;           // Menu item display text
  url: string;            // Navigation URL
}
```

## Usage
```tsx
import { Banner } from '@/src/components/home/banner';

const menuItems = [
  { text: "Home", url: "/" },
  { text: "About Us", url: "/about" },
  // ... more items
];

<Banner
  title="Canopy Carbon"
  subtitle="A Climate Infrastructure Company Specialising in Nature-Based Solutions."
  menuItems={menuItems}
  logoUrl="/assets/banner-shared-component/logo.png"
/>
```

## Assets Required
- Background image: `/public/assets/banner-shared-component/background.png`
- Decorative circle: `/public/assets/banner-shared-component/circle.png`
- Logo: `/public/assets/banner-shared-component/logo.png`

## Design Specifications
- Desktop: 1440px width × 700px height
- Typography: Roboto (titles), Open Sans (body/navigation)
- Colors: Custom light grays for text, transparent backgrounds with blur
- Gradient overlay for text readability