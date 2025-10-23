import type { Metadata } from "next";
import { Roboto, Open_Sans, Inter, Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ProductionGate } from "../components/ui/ProductionGate";
import { generateRootMetadata } from "../lib/seo/metadata";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  renderJsonLd,
} from "../lib/seo/structured-data";

const openSans = Open_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const inter = Inter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const workSans = Work_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const avenirHeavy = localFont({
  src: "../../public/fonts/avenir/avenir-lt-std-85-heavy.otf",
  variable: "--font-avenir-heavy",
  weight: "850",
  display: "swap",
});

const helveticaLight = localFont({
  src: "../../public/fonts/helvetica/helvetica-w01-light.otf",
  variable: "--font-helvetica-light",
  weight: "300",
  display: "swap",
});

// Generate comprehensive SEO metadata with explicit metadataBase
// CRITICAL: metadataBase MUST be explicit new URL() for social media bots
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "https://www.canopycarbon.org";

export const metadata: Metadata = {
  ...generateRootMetadata(),
  metadataBase: new URL(baseUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data schemas
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={renderJsonLd(organizationSchema)}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={renderJsonLd(websiteSchema)}
        />
      </head>
      <body
        className={`${openSans.variable} ${roboto.variable} ${inter.variable} ${workSans.variable} ${avenirHeavy.variable} ${helveticaLight.variable} antialiased font-open-sans`}
      >
        <ProductionGate>{children}</ProductionGate>
      </body>
    </html>
  );
}
