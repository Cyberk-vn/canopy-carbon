import { generateMetadata, generateViewport } from "@/src/lib/seo/metadata";

// Generate SEO metadata for Insights page
export const metadata = generateMetadata("insights");

// Generate viewport with page-specific theme color
export const viewport = generateViewport("insights");

export default function CanopyInsightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
