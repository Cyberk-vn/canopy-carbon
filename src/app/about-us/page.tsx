import {
  AboutUsBanner,
  OurPracticalSection,
  OurPurposeSection,
  DevelopmentSequenceSection,
  OurProjectSection,
} from "@/src/components/about-us";
import { FooterSection } from "@/src/components/common";
import {
  getMenuItems,
  getLogoUrl,
  getMobileMenuStyles,
} from "@/src/lib/navigation";

const aboutUsPage = () => {
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
      <AboutUsBanner
        menuItems={menuItems}
        logoUrl={logoUrl}
        mobileMenuStyles={mobileMenuStyles}
      />
      <OurPurposeSection />
      <OurPracticalSection />
      <DevelopmentSequenceSection data={developmentSequenceData} />
      <OurProjectSection />
      <FooterSection />
    </main>
  );
};

export default aboutUsPage;
