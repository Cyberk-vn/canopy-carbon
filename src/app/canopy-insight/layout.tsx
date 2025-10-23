import { generateMetadata } from "@/src/lib/seo/metadata";

// Generate SEO metadata for Insights page
export const metadata = generateMetadata("insights");

export default function CanopyInsightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
