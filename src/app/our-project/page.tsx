"use client";

import { useEffect } from "react";
import {
  OurProjectBanner,
  CorePrincipleSection,
  OurProjectBenefitSection,
  CanopyPortfolioSection,
  CollaborateWithUsSection,
} from "@/src/components/our-project";
import { OurProjectBannerDesktop } from "@/src/components/our-project/our-project-banner-desktop";
import { FooterSection } from "@/src/components/common";
import {
  getMenuItems,
  getLogoUrl,
  getMobileMenuStyles,
} from "@/src/lib/navigation";
import CorePrincipleSectionDesktop from "@/src/components/our-project/core-principle-section-desktop";
import OurProjectBenefitSectionDesktop from "@/src/components/our-project/our-project-benefit-section-desktop";
import CanopyPortfolioSectionDesktop from "@/src/components/our-project/canopy-portfolio-section-desktop";
import CollaborateWithUsSectionDesktop from "@/src/components/our-project/collaborate-with-us-section-desktop";

const OurProjectPage = () => {
  const menuItems = getMenuItems();
  const logoUrl = getLogoUrl();
  const mobileMenuStyles = getMobileMenuStyles("our-project");

  // Mobile-first image preloading for critical images
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;

      // Critical images to preload on mobile (above-the-fold content)
      const criticalImages = [
        "/assets/our-project/canopy-portfolio-section/canopy-portfolio-bg-381140.png", // Portfolio header
        "/assets/our-project/benefit-section/benefit-logo.svg", // Benefit section logo
      ];

      // Secondary images to preload after critical images (mobile-first)
      const secondaryImages = isMobile
        ? [
            "/assets/our-project/portfolio/carousel-images/portfolio-image-1.png", // First portfolio image
            "/assets/our-project/canopy-portfolio-section/canopy-blue-print-bg.png", // Blueprint bg
            "/assets/our-project/benefit-section/left-logo.png", // Left cert logo
            "/assets/our-project/benefit-section/right-logo.png", // Right cert logo
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
      }, 300); // Faster than about-us since our-project has simpler banner
    }
  }, []);

  return (
    <main className="h-full flex flex-col w-full">
      {/* Render both banners and use CSS to show/hide - prevents flash */}
      <div className="block md:hidden">
        <OurProjectBanner
          menuItems={menuItems}
          logoUrl={logoUrl}
          mobileMenuStyles={mobileMenuStyles}
        />
      </div>
      <div className="hidden md:block">
        <OurProjectBannerDesktop
          menuItems={menuItems}
          logoUrl={logoUrl}
          mobileMenuStyles={mobileMenuStyles}
        />
      </div>

      {/* Core Principle Section - Responsive sections */}
      <div className="block md:hidden">
        <CorePrincipleSection />
      </div>
      <div className="hidden md:block">
        <CorePrincipleSectionDesktop />
      </div>

      {/* Benefit Section - Responsive sections */}
      <div className="block md:hidden">
        <OurProjectBenefitSection />
      </div>
      <div className="hidden md:block">
        <OurProjectBenefitSectionDesktop />
      </div>
      {/* Portfolio Section - Responsive sections */}
      <div className="block md:hidden">
        <CanopyPortfolioSection />
      </div>
      <div className="hidden md:block">
        <CanopyPortfolioSectionDesktop />
      </div>

      {/* Collaborate With Us Section - Responsive sections */}
      <div className="block md:hidden">
        <CollaborateWithUsSection />
      </div>
      <div className="hidden md:block">
        <CollaborateWithUsSectionDesktop />
      </div>

      <FooterSection />
    </main>
  );
};

export default OurProjectPage;
