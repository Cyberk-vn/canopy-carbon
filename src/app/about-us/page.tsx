"use client";

import {
  AboutUsBanner,
  OurPracticalSection,
  OurPurposeSection,
  DevelopmentSequenceSection,
  OurProjectSection,
} from "@/src/components/about-us";
import { AboutUsBannerDesktop } from "@/src/components/about-us/about-us-banner-desktop";
import { OurPracticalSectionDesktop } from "@/src/components/about-us/our-practical-section-desktop";
import { FooterSection } from "@/src/components/common";
import {
  getMenuItems,
  getLogoUrl,
  getMobileMenuStyles,
} from "@/src/lib/navigation";

const AboutUsPage = () => {
  const menuItems = getMenuItems();
  const logoUrl = getLogoUrl();
  const mobileMenuStyles = getMobileMenuStyles("about-us");

  // Development Sequence Data
  const developmentSequenceData = {
    sectionTitle: "Development Sequence",
    sectionSubtitle:
      "Our nature-based projects follow a structured development pathway, segmented into six distinct phases.",
    contentSectionTitle: "Ongoing Project Workstreams",
    contentSectionDescription:
      "Each NBS Project requires ongoing, multifaceted execution far beyond initial validation and verification.",
    projectCards: [
      {
        id: "pre-feasibility",
        title: "Pre-Feasibility Study",
        description:
          "Preliminary review of regulatory context and spatial characteristics of the site, alongside early-stage carbon potential assessment.",
        backgroundImage: "/assets/about-us/our-purpose-main-image.png", // Using existing image as placeholder
        textColor: "light" as const,
        overlayType: "gradient" as const,
        learnMoreUrl: "#",
      },
      {
        id: "climate-action",
        title: "Climate Action Implementation",
        description:
          "Execution of core interventions including forest protection, ARR, and enrichment—carried out in line with validated project design and ecological conditions.",
        backgroundImage: "/assets/about-us/our-practical-bg-image.png", // Using existing image as placeholder
        textColor: "dark" as const,
        overlayType: "rounded" as const,
        learnMoreUrl: "#",
      },
    ],
  };

  return (
    <main className="h-full flex flex-col w-full">
      <div className="block md:hidden">
        <AboutUsBanner
          menuItems={menuItems}
          logoUrl={logoUrl}
          mobileMenuStyles={mobileMenuStyles}
        />
      </div>
      <div className="hidden md:block">
        <AboutUsBannerDesktop
          menuItems={menuItems}
          logoUrl={logoUrl}
          mobileMenuStyles={mobileMenuStyles}
        />
      </div>

      {/* Core content sections - always visible */}
      <OurPurposeSection />

      {/* Responsive sections - use CSS-based responsive design to prevent flash */}
      <div className="block md:hidden">
        <OurPracticalSection />
      </div>
      <div className="hidden md:block">
        <OurPracticalSectionDesktop />
      </div>

      {/* Common sections - always visible */}
      <DevelopmentSequenceSection data={developmentSequenceData} />
      <OurProjectSection />
      <FooterSection />
    </main>
  );
};

export default AboutUsPage;
