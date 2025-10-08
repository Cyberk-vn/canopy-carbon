import type { Metadata } from "next";
import { Roboto, Open_Sans, Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import { ProductionGate } from "../components/ui/ProductionGate";

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

export const metadata: Metadata = {
  title: "Canopy Carbon - Climate Infrastructure Company",
  description:
    "A Climate Infrastructure Company Specialising in Nature-Based Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${roboto.variable} ${inter.variable} ${workSans.variable} antialiased font-open-sans`}
      >
        <ProductionGate>{children}</ProductionGate>
      </body>
    </html>
  );
}
