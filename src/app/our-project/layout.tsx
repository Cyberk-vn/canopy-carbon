import { generateMetadata, generateViewport } from "@/src/lib/seo/metadata";

// Generate SEO metadata for Our Projects page
export const metadata = generateMetadata("ourProjects");

// Generate viewport with page-specific theme color
export const viewport = generateViewport("ourProjects");

export default function OurProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
