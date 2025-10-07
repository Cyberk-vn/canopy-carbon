"use client";

import { useEffect } from "react";
import {
  AboutUsBanner,
  OurPracticalSection,
  OurPurposeSection,
  DevelopmentSequenceSection,
  OurProjectSection,
} from "@/src/components/about-us";
import { AboutUsBannerDesktop } from "@/src/components/about-us/about-us-banner-desktop";
import { OurPracticalSectionDesktop } from "@/src/components/about-us/our-practical-section-desktop";
import { OurPracticalSectionTablet } from "@/src/components/about-us/our-practical-section-tablet";
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

  // Mobile-first image preloading for critical images
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;

      // Critical images to preload on mobile (above-the-fold content)
      const criticalImages = [
        "/assets/about-us/contact-us-banner-bg-image.png", // Main banner
        "/assets/about-us/banner-child-image.png", // Decorative element
      ];

      // Secondary images to preload after critical images (mobile-first)
      const secondaryImages = isMobile
        ? [
            "/assets/about-us/our-purpose-main-image.png", // Purpose section
            "/assets/about-us/our-pratical-bg-mobile-image.png", // Practical section bg
          ]
        : [];

      // Preload critical images immediately
      criticalImages.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        link.fetchPriority = "high";
        document.head.appendChild(link);
      });

      // Preload secondary images with lower priority after a delay
      setTimeout(() => {
        secondaryImages.forEach((src) => {
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "image";
          link.href = src;
          link.fetchPriority = "low";
          document.head.appendChild(link);
        });
      }, 500);
    }
  }, []);

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
      <OurPracticalSectionTablet />
      <OurPracticalSectionDesktop />

      {/* Common sections - always visible */}
      <DevelopmentSequenceSection data={developmentSequenceData} />
      <OurProjectSection />
      <FooterSection />
    </main>
  );
};

export default AboutUsPage;
