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
