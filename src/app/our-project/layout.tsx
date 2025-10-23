import { generateMetadata } from "@/src/lib/seo/metadata";

// Generate SEO metadata for Our Projects page
export const metadata = generateMetadata("ourProjects");

export default function OurProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
