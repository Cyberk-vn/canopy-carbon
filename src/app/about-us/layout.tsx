import { generateMetadata } from "@/src/lib/seo/metadata";

// Generate SEO metadata for About Us page
export const metadata = generateMetadata("aboutUs");

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
