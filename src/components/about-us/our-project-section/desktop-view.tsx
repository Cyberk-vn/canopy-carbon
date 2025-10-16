"use client";

import { memo } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { OurProjectSectionProps } from "../../../types/our-project";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { useContactRedirect } from "@/src/hooks/navigation/use-contact-redirect";

// Static image imports - Group 1
import ProjectScreeningImg from "../../../../public/assets/desktop/about-us/our-project/project-screening-img.png";
import PreFeasibilityImg from "../../../../public/assets/desktop/about-us/our-project/pre-feasibility-img.png";
import FeasibilityImg from "../../../../public/assets/desktop/about-us/our-project/feasibilty-img.png";
import CreditSaleImg from "../../../../public/assets/desktop/about-us/our-project/credit-sale-img.png";
import ValidationImg from "../../../../public/assets/desktop/about-us/our-project/validation-img.png";

// Static image imports - Group 2
import SafeguardImg from "../../../../public/assets/desktop/about-us/our-project/safeguard-img.png";
import MrvManagementImg from "../../../../public/assets/desktop/about-us/our-project/mrv-management-img.png";
import BiocharImg from "../../../../public/assets/desktop/about-us/our-project/biochar-img.png";

// Static image imports - Group 3
import ArrOperatingImg from "../../../../public/assets/desktop/about-us/our-project/arr-operating-img.png";
import ReddOperatingImg from "../../../../public/assets/desktop/about-us/our-project/redd-operating-img.png";
import CommunityImg from "../../../../public/assets/desktop/about-us/our-project/community-img.png";
import BiodiversityImg from "../../../../public/assets/desktop/about-us/our-project/biodiversity-img.png";

// Logo and decorative elements
import CanopyLogo from "../../../../public/assets/desktop/about-us/canopy-development-logo.svg";
import DotDecorator from "../../../../public/assets/desktop/about-us/dot-decorater-img.svg";

// Simplified component interfaces
interface StaticLayoutData {
  description: string;
  buttonText: string;
  buttonAction: () => void;
}

interface InlineDescriptionData {
  mainText: string;
  backgroundImage: string | StaticImageData;
}

interface DesktopViewProps {
  data?: OurProjectSectionProps["data"];
}

// Helper function to create responsive value for desktop with 3 breakpoints
// 1280px-1440px-2200px: Smooth scaling across the range
const createResponsiveValue = (
  value1280: number,
  value1440: number,
  value2200: number
): string => {
  return `clamp(
    ${value1280}px,
    min(
      calc(${value1280}px + (${value1440} - ${value1280}) * ((100vw - 1280px) / 160)),
      calc(${value1440}px + (${value2200} - ${value1440}) * ((100vw - 1440px) / 760))
    ),
    ${value2200}px
  )`;
};

// Default data for the desktop view
const defaultData = {
  staticLayoutData: {
    description:
      "Our team upholds operational excellence through structured SOPs—formulated from field experience and refined over time—to ensure disciplined, accountable implementation across all workstreams.",
    buttonText: "Request Access",
    buttonAction: () => {
      console.log("Request Access clicked");
    },
  },
  descriptionData: {
    mainText:
      "At Canopy, we're institutionalizing the NBS carbon project model—bringing executional discipline, radical transparency, and long-term vision to deliver large-scale, high-integrity projects that anchor the emergence of carbon as a legitimate asset class.",
    backgroundImage: "/assets/desktop/about-us/side-2-background-image.svg",
  },
};

export const DesktopView = memo<DesktopViewProps>(({ data = defaultData }) => {
  const { staticLayoutData = defaultData.staticLayoutData, descriptionData } =
    data;

  // Contact redirect hook
  const { redirectToContact } = useContactRedirect();

  // Simple Motion animations
  const containerMotion = useSimpleMotion("about-project-desktop-container");

  return (
    <div
      className="mx-auto max-w-[1920px]"
      style={{
        marginTop: createResponsiveValue(77, 86, 131),
      }}
    >
      {/* Desktop Layout ≥1280px - Max width 2200px with 25px horizontal padding */}
      <motion.section
        {...SIMPLE_ANIMATIONS.fadeInUp}
        {...containerMotion}
        className="hidden xl:block h-full"
      >
        <div className="w-full">
          {/* Desktop Layout - Row (Vertical Stack) */}
          <div
            className="flex flex-col items-start"
            style={{ gap: createResponsiveValue(9, 10, 15) }}
          >
            {/* Side 1 */}
            <div
              className="w-full relative z-[2] flex flex-col items-end py-[80px]"
              style={{
                height: createResponsiveValue(637, 716, 880),
                backgroundColor: "rgba(250, 250, 250, 0.6)",
                gap: createResponsiveValue(57, 64, 98),
              }}
            >
              <StaticImageLayout
                data={{
                  ...staticLayoutData,
                  buttonAction: redirectToContact,
                }}
              />
            </div>

            {/* Side 2 - Description */}
            <div
              className="w-full relative z-[1] flex flex-col mt-[68px] 3xl:mb-[111px]"
              style={{
                gap: createResponsiveValue(9, 10, 15),
              }}
            >
              <DescriptionSectionInline data={descriptionData} />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
});

DesktopView.displayName = "DesktopView";

// Static Image Layout Component (Desktop)
const StaticImageLayout = ({ data }: { data: StaticLayoutData }) => {
  const { description, buttonText, buttonAction } = data;

  // Image stack configuration for Group 1 (5 images)
  const imageStackGroup1 = [
    {
      src: ProjectScreeningImg,
      alt: "Project Screening",
      zIndex: 5,
      topOffset: 20,
      leftMultiplier: 0,
    },
    {
      src: PreFeasibilityImg,
      alt: "Pre-Feasibility",
      zIndex: 4,
      topOffset: 15,
      leftMultiplier: 0.3,
    },
    {
      src: FeasibilityImg,
      alt: "Feasibility",
      zIndex: 3,
      topOffset: 10,
      leftMultiplier: 0.6,
    },
    {
      src: CreditSaleImg,
      alt: "Credit Sale",
      zIndex: 2,
      topOffset: 5,
      leftMultiplier: 0.9,
    },
    {
      src: ValidationImg,
      alt: "Validation",
      zIndex: 1,
      topOffset: 0,
      leftMultiplier: 1.2,
    },
  ];

  return (
    <>
      {/* Image Group Content - Horizontal Layout */}
      <div
        className="flex items-center justify-start w-full pl-[136px]"
        style={{
          gap: "80px",
        }}
      >
        {/* Group 1 - Nested Image Stack with Animation (5 images) */}
        <div className="flex items-center justify-center">
          <div
            className="relative"
            style={{
              width: createResponsiveValue(364, 407, 525), // Updated for max 239px image width
              height: createResponsiveValue(278, 313, 354), // Updated for max 334px image height + 20px offset
            }}
          >
            {imageStackGroup1.map((image, index) => {
              const isRootImage = index === 0;

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: `calc(${createResponsiveValue(165, 185, 239)} * ${
                      image.leftMultiplier
                    })`,
                    top: `${image.topOffset}px`,
                    zIndex: image.zIndex,
                  }}
                  initial={isRootImage ? { opacity: 0, y: -10 } : { y: 60 }}
                  whileInView={isRootImage ? { opacity: 1, y: 0 } : { y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={
                    isRootImage
                      ? {
                          duration: 0.3,
                          ease: "easeOut",
                        }
                      : {
                          duration: 0.4,
                          delay: 0.3 + (index - 1) * 0.08,
                          ease: "easeOut",
                        }
                  }
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={185}
                    height={258}
                    className="object-contain rounded-[5px]"
                    priority
                    style={{
                      width: createResponsiveValue(165, 185, 239),
                      height: createResponsiveValue(230, 258, 334),
                      filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Group 2 - Nested Image Stack with Animation (3 images) */}
        <div className="flex items-center justify-center">
          <div
            className="relative"
            style={{
              width: createResponsiveValue(264, 296, 383), // Updated for max 239px image width
              height: createResponsiveValue(238, 268, 344), // Updated for max 334px image height + 10px offset
            }}
          >
            {[
              {
                src: SafeguardImg,
                alt: "Safeguards & Co-Benefits",
                zIndex: 3,
                topOffset: 10,
                leftMultiplier: 0,
              },
              {
                src: MrvManagementImg,
                alt: "MRV Management Protocol",
                zIndex: 2,
                topOffset: 5,
                leftMultiplier: 0.3,
              },
              {
                src: BiocharImg,
                alt: "Biochar",
                zIndex: 1,
                topOffset: 0,
                leftMultiplier: 0.6,
              },
            ].map((image, index) => {
              const isRootImage = index === 0;

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: `calc(${createResponsiveValue(165, 185, 239)} * ${
                      image.leftMultiplier
                    })`,
                    top: `${image.topOffset}px`,
                    zIndex: image.zIndex,
                  }}
                  initial={isRootImage ? { opacity: 0, y: -10 } : { y: 60 }}
                  whileInView={isRootImage ? { opacity: 1, y: 0 } : { y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={
                    isRootImage
                      ? {
                          duration: 0.3,
                          ease: "easeOut",
                        }
                      : {
                          duration: 0.4,
                          delay: 0.3 + (index - 1) * 0.08,
                          ease: "easeOut",
                        }
                  }
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={185}
                    height={258}
                    className="object-contain rounded-[5px]"
                    priority
                    style={{
                      width: createResponsiveValue(165, 185, 239),
                      height: createResponsiveValue(230, 258, 334),
                      filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Group 3 - Nested Image Stack with Animation (4 images) */}
        <div className="flex items-center justify-center">
          <div
            className="relative"
            style={{
              width: createResponsiveValue(314, 352, 454), // Updated for 4 images
              height: createResponsiveValue(248, 278, 359), // Updated for 4 images with offset
            }}
          >
            {[
              {
                src: ArrOperatingImg,
                alt: "ARR Operating Manual",
                zIndex: 4,
                topOffset: 15,
                leftMultiplier: 0,
              },
              {
                src: ReddOperatingImg,
                alt: "REDD+ Operating Manual",
                zIndex: 3,
                topOffset: 10,
                leftMultiplier: 0.3,
              },
              {
                src: CommunityImg,
                alt: "Community Management Handbook",
                zIndex: 2,
                topOffset: 5,
                leftMultiplier: 0.6,
              },
              {
                src: BiodiversityImg,
                alt: "Biodiversity Strategy Book",
                zIndex: 1,
                topOffset: 0,
                leftMultiplier: 0.9,
              },
            ].map((image, index) => {
              const isRootImage = index === 0;

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: `calc(${createResponsiveValue(165, 185, 239)} * ${
                      image.leftMultiplier
                    })`,
                    top: `${image.topOffset}px`,
                    zIndex: image.zIndex,
                  }}
                  initial={isRootImage ? { opacity: 0, y: -10 } : { y: 60 }}
                  whileInView={isRootImage ? { opacity: 1, y: 0 } : { y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={
                    isRootImage
                      ? {
                          duration: 0.3,
                          ease: "easeOut",
                        }
                      : {
                          duration: 0.4,
                          delay: 0.3 + (index - 1) * 0.08,
                          ease: "easeOut",
                        }
                  }
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={185}
                    height={258}
                    className="object-contain rounded-[5px]"
                    priority
                    style={{
                      width: createResponsiveValue(165, 185, 239),
                      height: createResponsiveValue(230, 258, 334),
                      filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Description Section - Matching Figma Design */}
      <div
        className="flex flex-col items-center mx-auto"
        style={{
          width: createResponsiveValue(1043, 1170, 1788), // Figma: 1170px at 1440px
          backgroundColor: "#F7F7F7",
          padding: "48px 20px", // Fixed padding
          gap: 24, // Figma: 40px gap at 1440px
        }}
      >
        <p
          className="text-center 3xl:font-avenir-heavy 3xl:font-normal text-[#C4CCD3] leading-[1.2]"
          style={{
            fontSize: createResponsiveValue(18, 24, 33),
            fontWeight: 600,
            width: createResponsiveValue(985, 1050, 1100),
          }}
        >
          {description}
        </p>

        {/* Request Access Button */}
        <motion.button
          onClick={buttonAction}
          className="flex items-center gap-1"
          whileHover={{
            scale: 1.05,
            x: 5,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1, ease: "easeIn" },
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.span
            className="font-open-sans text-center"
            style={{
              fontSize: createResponsiveValue(16, 12, 16), // Figma: 27px at 1440px
              fontWeight: 400, // Figma: Regular (400)
              lineHeight: "1.4em", // Figma: 1.4em
              color: "rgba(0, 0, 0, 0.4)", // Figma: rgba(0, 0, 0, 0.4)
            }}
            whileHover={{
              color: "rgba(0, 0, 0, 0.6)",
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{
              color: "rgba(0, 0, 0, 0.8)",
              transition: { duration: 0.1, ease: "easeIn" },
            }}
          >
            {buttonText}
          </motion.span>
          <motion.div
            className="flex items-center justify-center w-6 h-6"
            style={{
              opacity: 0.4, // Figma: 0.4 opacity
            }}
            whileHover={{
              opacity: 0.6,
              x: 3,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
          >
            <motion.svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <motion.path
                d="M9 6.42L14.58 12L9 17.58"
                stroke="#323232" // Figma: #323232
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                whileHover={{
                  stroke: "#202020",
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              />
            </motion.svg>
          </motion.div>
        </motion.button>
      </div>
    </>
  );
};

// Inline Description Component (Desktop)
const DescriptionSectionInline = ({
  data,
}: {
  data: InlineDescriptionData;
}) => {
  const { mainText } = data;

  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        height: createResponsiveValue(484, 545, 833), // Figma: 545px at 1440px
      }}
    >
      {/* Background Gradient Layer */}
      <motion.div
        className="absolute"
        style={{
          left: 0,
          top: createResponsiveValue(-0.21, -0.24, -0.37), // Figma: -0.24px at 1440px
          width: "100%",
          height: createResponsiveValue(634, 713, 1090), // Figma: 713.42px at 1440px
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.7) 28%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 100%)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Vertical Background Card - Grows from height 0 to max height */}
      <motion.div
        className="absolute z-[5] bottom-[10px] bg-[#F9F9F9]"
        style={{
          left: createResponsiveValue(92, 103, 157),
          width: createResponsiveValue(211, 237, 330),
          transformOrigin: "bottom",
        }}
        initial={{ height: 0, opacity: 0 }}
        whileInView={{
          height: createResponsiveValue(300, 446, 663),
          opacity: 1,
        }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: "easeOut",
        }}
      />

      {/* Canopy Logo - Fades in with Vertical Card */}
      <motion.div
        className="absolute z-10"
        style={{
          left: createResponsiveValue(100, 112, 125), // Figma: 112px at 1440px
          top: createResponsiveValue(100, 112, 150),
          width: createResponsiveValue(195, 219, 470), // Figma: 219px at 1440px
          height: createResponsiveValue(135, 152, 344), // Figma: 152px at 1440px
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: 1.3,
          ease: "easeOut",
        }}
      >
        <Image
          src={CanopyLogo}
          alt="Canopy Development Logo"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Dot Decorator Image - Fades in with Vertical Card */}
      <motion.div
        className="absolute z-10"
        style={{
          left: 0,
          top: createResponsiveValue(254, 286, 437), // Figma: 285.98px at 1440px
          width: createResponsiveValue(89, 100, 153), // Figma: 100px at 1440px
          height: createResponsiveValue(148, 166, 254), // Figma: 166px at 1440px
        }}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: 1.4,
          ease: "easeOut",
        }}
      >
        <Image
          src={DotDecorator}
          alt="Decorative dots"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Main Text Content - Fades in */}
      <motion.div
        className="absolute z-20"
        style={{
          left: createResponsiveValue(387, 435, 665),
          bottom: createResponsiveValue(96, 108, 243),
          width: createResponsiveValue(654, 736, 972),
          height: createResponsiveValue(207, 233, 340),
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          delay: 1.3,
          ease: "easeOut",
        }}
      >
        <p
          className="font-avenir-heavy font-normal text-[#91A69E]"
          style={{
            fontSize: createResponsiveValue(21, 24, 33),
            lineHeight: "1.2em",
            letterSpacing: "-1%",
            textAlign: "left",
          }}
        >
          {mainText}
        </p>
      </motion.div>

      {/* Horizontal Background Card - Grows from width 0 to max width (constrained to container) */}
      <motion.div
        className="absolute z-[1] bg-[#919996] left-0"
        style={{
          top: createResponsiveValue(355, 399, 610),
          height: createResponsiveValue(130, 146, 223),
          transformOrigin: "left",
        }}
        initial={{ width: 0, opacity: 0 }}
        whileInView={{
          width: `min(${createResponsiveValue(1175, 1322, 1761)}, 100%)`,
          opacity: 1,
        }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: "easeOut",
        }}
      />
    </div>
  );
};
