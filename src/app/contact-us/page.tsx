import {
  ContactHeroSection,
  ContactHeroSectionDesktop,
  ContactFooterSection,
} from "@/src/components/contact-us";
import { generateMetadata } from "@/src/lib/seo/metadata";
import {
  generateWebPageSchema,
  renderJsonLd,
} from "@/src/lib/seo/structured-data";

// Generate SEO metadata for Contact Us page
export const metadata = generateMetadata("contactUs");

const ContactUsPage = () => {
  // Generate structured data for Contact Us page
  const webPageSchema = generateWebPageSchema("contactUs");

  // Mobile version - Shorter, optimized content
  const contactUsCardsMobile = [
    {
      id: "credit-offtakers",
      title: "Credit Offtakers",
      description:
        "Secure high-integrity carbon credits through direct offtake or long-term partnerships with us. Our projects meet CCP and CCOP thresholds, with flexibility to tailor structures to your climate goals.",
    },
    {
      id: "capital-allocators",
      title: "Capital Allocators",
      description:
        "Partner with us to finance premium nature-based assets. We offer institutional-grade execution, transparent reporting, and clear use-of-proceeds frameworks across our growing project pipeline.",
    },
    {
      id: "researchers",
      title: "Researchers",
      description:
        "Co-develop insights across climate, biodiversity, and community themes. Access structured field data from our active NBS projects to support impactful, real-world research collaboration.",
    },
    {
      id: "project-proponents",
      title: "Project Proponents",
      description:
        "Co-develop projects with Canopy and benefit from our field-tested SOPs, operational know-how, and network resources. We provide practical support to accelerate your project's success.",
    },
  ];

  // Desktop version - Original content
  const contactUsCardsDesktop = [
    {
      id: "credit-offtakers",
      title: "Credit Offtakers",
      description:
        "Secure high-integrity carbon credits through direct offtake or long-term partnerships with us. Our projects meet CCP thresholds and CCOP requirements, with flexibility to tailor structures to your climate goals.",
    },
    {
      id: "capital-allocators",
      title: "Capital Allocators",
      description:
        "Partner with us to finance premium nature-based carbon assets. We offer institutional-grade execution, transparent reporting, and clear use-of-proceeds frameworks across our growing project pipeline.",
    },
    {
      id: "researchers",
      title: "Researchers",
      description:
        "Co-develop insights across climate, biodiversity, and community themes. Access structured field data from our active nature-based projects to support impactful, real-world research collaboration.",
    },
    {
      id: "project-proponents",
      title: "Project Proponents",
      description:
        "Co-develop projects with Canopy and benefit from our field-tested SOPs, operational know-how, and network resources. We provide practical support to accelerate your project's success.",
    },
  ];

  return (
    <>
      {/* WebPage Schema for Contact Us */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderJsonLd(webPageSchema)}
      />

      <div className="bg-white">
        <div className="block md:hidden">
          <ContactHeroSection cards={contactUsCardsMobile} />
        </div>
        <div className="hidden md:block">
          <ContactHeroSectionDesktop cards={contactUsCardsDesktop} />
        </div>

        <div className="block md:hidden">
          <ContactFooterSection />
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
