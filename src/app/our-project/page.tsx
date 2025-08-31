import {
  OurProjectBanner,
  CorePrincipleSection,
  OurProjectBenefitSection,
  CanopyPortfolioSection,
  CollaborateWithUsSection,
} from "@/src/components/our-project";
import { FooterSection } from "@/src/components/common";
import {
  getMenuItems,
  getLogoUrl,
  getMobileMenuStyles,
} from "@/src/lib/navigation";

const OurProjectPage = () => {
  const menuItems = getMenuItems();
  const logoUrl = getLogoUrl();
  const mobileMenuStyles = getMobileMenuStyles("our-project");

  return (
    <main>
      <OurProjectBanner
        menuItems={menuItems}
        logoUrl={logoUrl}
        mobileMenuStyles={mobileMenuStyles}
      />
      <CorePrincipleSection />
      <OurProjectBenefitSection />
      <CanopyPortfolioSection />
      <CollaborateWithUsSection />
      <FooterSection />
    </main>
  );
};

export default OurProjectPage;
