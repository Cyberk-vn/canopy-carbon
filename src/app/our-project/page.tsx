import {
  OurProjectBanner,
  CorePrincipleSection,
  OurProjectBenefitSection,
  CanopyPortfolioSection,
  CollaborateWithUsSection,
} from "@/src/components/our-project";
import { FooterSection } from "@/src/components/common";

const OurProjectPage = () => {
  const menuItems = [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about-us" },
    { text: "Our projects", url: "/our-project" },
    { text: "Canopy insights", url: "/insights" },
  ];

  const logoUrl = "/assets/banner-shared-component/logo.png";

  return (
    <main>
      <OurProjectBanner menuItems={menuItems} logoUrl={logoUrl} />
      <CorePrincipleSection />
      <OurProjectBenefitSection />
      <CanopyPortfolioSection />
      <CollaborateWithUsSection />
      <FooterSection />
    </main>
  );
};

export default OurProjectPage;
