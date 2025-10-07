import { Metadata } from "next";
import {
  ContactHeroSection,
  ContactHeroSectionDesktop,
  ContactFooterSection,
} from "@/src/components/contact-us";

export const metadata: Metadata = {
  title: "Contact | Canopy Carbon",
  description:
    "Connect with Canopy Carbon for high-integrity nature-based solutions. Partner with us as credit offtakers, capital allocators, researchers, or project proponents.",
  keywords: [
    "carbon credits",
    "nature-based solutions",
    "climate finance",
    "sustainability",
    "contact",
    "partnerships",
  ],
  openGraph: {
    title: "Contact | Canopy Carbon",
    description:
      "Connect with Canopy Carbon for high-integrity nature-based solutions. Partner with us as credit offtakers, capital allocators, researchers, or project proponents.",
    type: "website",
    url: "/contact-us",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Canopy Carbon",
    description:
      "Connect with Canopy Carbon for high-integrity nature-based solutions. Partner with us as credit offtakers, capital allocators, researchers, or project proponents.",
  },
};

const ContactUsPage = () => {
  const contactUsCards = [
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

  return (
    <div className="min-h-screen bg-white">
      <div className="block md:hidden">
        <ContactHeroSection cards={contactUsCards} />
      </div>
      <div className="hidden md:block">
        <ContactHeroSectionDesktop cards={contactUsCards} />
      </div>

      <div className="block md:hidden">
        <ContactFooterSection />
      </div>
    </div>
  );
};

export default ContactUsPage;
