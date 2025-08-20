import {
  AboutUsBanner,
  OurPracticalSection,
  OurPurposeSection,
  DevelopmentSequenceSection,
  OurProjectSection,
} from "@/src/components/about-us";
import { FooterSection } from "@/src/components/common";

const aboutUsPage = () => {
  const menuItems = [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about" },
    { text: "Our projects", url: "/projects" },
    { text: "Canopy insights", url: "/insights" },
    { text: "About Us", url: "/about-us" },
  ];

  const logoUrl = "/assets/banner-shared-component/logo.png";

  // Development Sequence Data
  const developmentSequenceData = {
    sectionTitle: "Development Sequence",
    sectionSubtitle: "Our nature-based projects follow a structured development pathway, segmented into six distinct phases.",
    contentSectionTitle: "Ongoing Project Workstreams",
    contentSectionDescription: "Each NBS Project requires ongoing, multifaceted execution far beyond initial validation and verification.",
    projectCards: [
      {
        id: "pre-feasibility",
        title: "Pre-Feasibility Study",
        description: "Preliminary review of regulatory context and spatial characteristics of the site, alongside early-stage carbon potential assessment.",
        backgroundImage: "/assets/about-us/our-purpose-main-image.png", // Using existing image as placeholder
        textColor: "light" as const,
        overlayType: "gradient" as const,
        learnMoreUrl: "#"
      },
      {
        id: "climate-action",
        title: "Climate Action Implementation",
        description: "Execution of core interventions including forest protection, ARR, and enrichment—carried out in line with validated project design and ecological conditions.",
        backgroundImage: "/assets/about-us/our-practical-bg-image.png", // Using existing image as placeholder
        textColor: "dark" as const,
        overlayType: "rounded" as const,
        learnMoreUrl: "#"
      }
    ]
  };

  return (
    <main className="min-h-screen w-full">
      <AboutUsBanner menuItems={menuItems} logoUrl={logoUrl} />
      <OurPurposeSection />
      <OurPracticalSection />
      <DevelopmentSequenceSection data={developmentSequenceData} />
      <OurProjectSection />
      <FooterSection />
    </main>
  );
};

export default aboutUsPage;
