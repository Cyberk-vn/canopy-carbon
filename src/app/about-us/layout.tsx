import { generateMetadata, generateViewport } from "@/src/lib/seo/metadata";

// Generate SEO metadata for About Us page
export const metadata = generateMetadata("aboutUs");

// Generate viewport with page-specific theme color
export const viewport = generateViewport("aboutUs");

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
