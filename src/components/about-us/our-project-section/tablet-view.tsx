"use client";

import { memo } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { OurProjectSectionProps } from "../../../types/our-project";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { Container } from "../../shared";
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

// Background image
import Side2BackgroundImage from "../../../../public/assets/desktop/about-us/side-2-background-image.svg";

// Logo and decorative elements
import CanopyLogo from "../../../../public/assets/desktop/about-us/canopy-development-logo.avif";
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

interface TabletViewProps {
  data?: OurProjectSectionProps["data"];
}

// Helper function to create responsive value for tablet with 2 breakpoints
// 768px-1280px: Smooth scaling across the range
const createResponsiveValue = (value768: number, value1280: number): string => {
  return `clamp(
    ${value768}px,
    calc(${value768}px + (${value1280} - ${value768}) * ((100vw - 768px) / 512)),
    ${value1280}px
  )`;
};

// Default data for the tablet view
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
    backgroundImage: Side2BackgroundImage,
  },
};

export const TabletView = memo<TabletViewProps>(({ data = defaultData }) => {
  const { staticLayoutData = defaultData.staticLayoutData, descriptionData } =
    data;

  // Contact redirect hook
  const { redirectToContact } = useContactRedirect();

  // Simple Motion animations
  const containerMotion = useSimpleMotion("about-project-tablet-container");

  return (
    <Container maxWidth="full" className="mx-auto">
      {/* Responsive Layout 768px-1280px - Smooth scaling */}
      <motion.section
        {...SIMPLE_ANIMATIONS.fadeInUp}
        {...containerMotion}
        className="hidden md:block xl:hidden h-full"
        style={{
          paddingLeft: "25px",
          paddingRight: "25px",
          marginTop: createResponsiveValue(46, 77),
        }}
      >
        <div className="w-full">
          {/* Tablet Layout - Vertical Stack */}
          <div
            className="flex flex-col items-start w-full"
            style={{ gap: createResponsiveValue(5, 9) }}
          >
            {/* Side 1 - Static Image Layout (Tablet) */}
            <div
              className="w-full relative z-[2] flex flex-col items-center"
              style={{
                height: createResponsiveValue(381, 637),
                backgroundColor: "rgba(250, 250, 250, 0.6)",
                borderRadius: createResponsiveValue(11, 18),
                padding: `${createResponsiveValue(
                  43,
                  71
                )}px ${createResponsiveValue(64, 107)}px`,
                gap: createResponsiveValue(34, 57),
              }}
            >
              <StaticImageLayoutTablet
                data={{
                  ...staticLayoutData,
                  buttonAction: redirectToContact,
                }}
              />
            </div>

            {/* Side 2 - Description (Tablet) */}
            <div
              className="w-full relative z-[1] flex flex-col mt-[100px]"
              style={{
                gap: createResponsiveValue(5, 9),
              }}
            >
              <DescriptionSectionInlineTablet data={descriptionData} />
            </div>
          </div>
        </div>
      </motion.section>
    </Container>
  );
});

TabletView.displayName = "TabletView";

// Static Image Layout Component (Tablet) - Proportionally scaled with clamp
const StaticImageLayoutTablet = ({ data }: { data: StaticLayoutData }) => {
  const { description, buttonText, buttonAction } = data;

  // Image stack configuration for Group 1
  // Image 1 (root) is fully visible on top, subsequent images stack behind from left to right
  // Rear images are positioned HIGHER (smaller top offset) than front images
  const imageStack = [
    {
      src: ProjectScreeningImg,
      alt: "Project Screening",
      zIndex: 5, // Front-most, fully visible on top
      topOffset: 20, // Front image is LOWER (larger offset)
      leftMultiplier: 0, // Base position (leftmost)
    },
    {
      src: PreFeasibilityImg,
      alt: "Pre-Feasibility",
      zIndex: 4, // Behind Image 1
      topOffset: 15, // 5px HIGHER than Image 1
      leftMultiplier: 0.3, // 30% to the right (70% covered by Image 1)
    },
    {
      src: FeasibilityImg,
      alt: "Feasibility",
      zIndex: 3, // Behind Image 2
      topOffset: 10, // 5px HIGHER than Image 2
      leftMultiplier: 0.6, // 60% to the right (70% covered by Image 2)
    },
    {
      src: CreditSaleImg,
      alt: "Credit Sale",
      zIndex: 2, // Behind Image 3
      topOffset: 5, // 5px HIGHER than Image 3
      leftMultiplier: 0.9, // 90% to the right (70% covered by Image 3)
    },
    {
      src: ValidationImg,
      alt: "Validation",
      zIndex: 1, // Back-most
      topOffset: 0, // Back image is HIGHEST (smallest offset)
      leftMultiplier: 1.2, // 120% to the right (70% covered by Image 4)
    },
  ];

  return (
    <>
      {/* Image Group Content - Horizontal Layout filling width */}
      <div
        className="flex items-center justify-between w-full"
        style={{ gap: createResponsiveValue(20, 35) }}
      >
        {/* Group 1 - Nested Image Stack with Animation */}
        <div className="flex-1 relative flex items-center justify-center">
          <div
            className="relative"
            style={{
              width: createResponsiveValue(244, 407), // 111*2.2 to 185*2.2 (enough for 5 images with 70% overlap)
              height: createResponsiveValue(175, 278), // 155 + 20px offset
            }}
          >
            {imageStack.map((image, index) => {
              // "Card Dealing" Animation Effect:
              // Image 1 (root): Quick fade-in with slight downward movement, finishes first
              // Images 2-5: Slide up sequentially from bottom, creating stacking effect
              const isRootImage = index === 0;

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: `calc(${createResponsiveValue(111, 185)} * ${
                      image.leftMultiplier
                    })`,
                    top: `${image.topOffset}px`,
                    zIndex: image.zIndex,
                  }}
                  initial={
                    isRootImage
                      ? { opacity: 0, y: -10 } // Root: fade in with slight downward movement
                      : { y: 60 } // Others: start below, slide up (no fade)
                  }
                  animate={
                    isRootImage
                      ? { opacity: 1, y: 0 } // Root: fade and settle into position
                      : { y: 0 } // Others: slide to final position
                  }
                  transition={
                    isRootImage
                      ? {
                          duration: 0.3, // Quick fade for root
                          ease: "easeOut",
                        }
                      : {
                          duration: 0.4, // Smooth slide for others
                          delay: 0.3 + (index - 1) * 0.08, // Start after root, staggered
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
                    width={111}
                    height={155}
                    className="object-contain"
                    priority
                    style={{
                      width: createResponsiveValue(111, 185),
                      height: createResponsiveValue(155, 258),
                      filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Group 2 - Nested Image Stack with Animation (3 images) */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className="relative"
            style={{
              width: createResponsiveValue(178, 296), // 111*1.6 to 185*1.6 (enough for 3 images with 70% overlap)
              height: createResponsiveValue(165, 268), // 155 + 10px offset
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
                    left: `calc(${createResponsiveValue(111, 185)} * ${
                      image.leftMultiplier
                    })`,
                    top: `${image.topOffset}px`,
                    zIndex: image.zIndex,
                  }}
                  initial={isRootImage ? { opacity: 0, y: -10 } : { y: 60 }}
                  animate={isRootImage ? { opacity: 1, y: 0 } : { y: 0 }}
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
                    width={111}
                    height={155}
                    className="object-contain"
                    priority
                    style={{
                      width: createResponsiveValue(111, 185),
                      height: createResponsiveValue(155, 258),
                      filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Group 3 - Nested Image Stack with Animation (3 images) */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className="relative"
            style={{
              width: createResponsiveValue(178, 296), // 111*1.6 to 185*1.6 (enough for 3 images with 70% overlap)
              height: createResponsiveValue(165, 268), // 155 + 10px offset
            }}
          >
            {[
              {
                src: ArrOperatingImg,
                alt: "ARR Operating Manual",
                zIndex: 3,
                topOffset: 10,
                leftMultiplier: 0,
              },
              {
                src: ReddOperatingImg,
                alt: "REDD+ Operating Manual",
                zIndex: 2,
                topOffset: 5,
                leftMultiplier: 0.3,
              },
              {
                src: CommunityImg,
                alt: "Community Management Handbook",
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
                    left: `calc(${createResponsiveValue(111, 185)} * ${
                      image.leftMultiplier
                    })`,
                    top: `${image.topOffset}px`,
                    zIndex: image.zIndex,
                  }}
                  initial={isRootImage ? { opacity: 0, y: -10 } : { y: 60 }}
                  animate={isRootImage ? { opacity: 1, y: 0 } : { y: 0 }}
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
                    width={111}
                    height={155}
                    className="object-contain"
                    priority
                    style={{
                      width: createResponsiveValue(111, 185),
                      height: createResponsiveValue(155, 258),
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
        className="flex flex-col items-center rounded-lg mx-auto"
        style={{
          width: createResponsiveValue(702, 1170), // Figma: 702px at 768px → 1170px at 1280px
          backgroundColor: "#F7F7F7",
          padding: "25px 20px", // Fixed padding: 25px vertical, 20px horizontal
          gap: createResponsiveValue(24, 40), // Figma: 24px gap
        }}
      >
        <p
          className="font-open-sans text-center"
          style={{
            fontSize: createResponsiveValue(18, 30), // Figma: 18px at 768px
            fontWeight: 600, // Figma: Semi Bold (600)
            lineHeight: "1.4em", // Figma: 1.4em
            color: "#C4CCD3", // Figma: #C4CCD3
            width: createResponsiveValue(663, 1105), // Figma: 663.09px at 768px
          }}
        >
          {description}
        </p>

        {/* Request Access Button */}
        <motion.button
          onClick={buttonAction}
          className="flex items-center"
          style={{
            gap: createResponsiveValue(8, 13), // Figma: 8px gap
          }}
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
              fontSize: createResponsiveValue(16, 27), // Figma: 16px at 768px
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
            className="flex items-center justify-center"
            style={{
              opacity: 0.4, // Figma: 0.4 opacity
              width: createResponsiveValue(24, 40), // Figma: 24px at 768px
              height: createResponsiveValue(24, 40),
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
              style={{
                width: createResponsiveValue(24, 40),
                height: createResponsiveValue(24, 40),
              }}
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

// Inline Description Component (Tablet) - Redesigned based on Figma
// Scaled from 1440px base to 768px-1280px range (ratios: 0.533 - 0.889)
const DescriptionSectionInlineTablet = ({
  data,
}: {
  data: InlineDescriptionData;
}) => {
  const { mainText } = data;

  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        height: createResponsiveValue(290, 484),
      }}
    >
      {/* Background Gradient Layer */}
      <motion.div
        className="absolute"
        style={{
          left: 0,
          top: createResponsiveValue(-0.13, -0.21), // Figma: -0.24px at 1440px
          width: "100%",
          height: createResponsiveValue(380, 634), // Figma: 713.42px at 1440px
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.7) 28%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Vertical Background Card - Grows from height 0 to max height AFTER parent animation ends */}
      <motion.div
        className="absolute z-[5] bg-[#F9F9F9] bottom-2"
        style={{
          left: createResponsiveValue(55, 92),
          width: createResponsiveValue(126, 211),
          transformOrigin: "bottom",
        }}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: createResponsiveValue(268, 420),
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.0,
          ease: "easeOut",
        }}
      />

      {/* Canopy Logo - Fades in with Vertical Card */}
      <motion.div
        className="absolute z-10"
        style={{
          left: createResponsiveValue(60, 100), // Figma: 112px at 1440px
          top: createResponsiveValue(35, 59), // Figma: 65.98px at 1440px
          width: createResponsiveValue(117, 195), // Figma: 219px at 1440px
          height: createResponsiveValue(81, 135), // Figma: 152px at 1440px
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 1.3, // Appear shortly after Vertical Card starts
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
          top: createResponsiveValue(152, 254), // Figma: 285.98px at 1440px
          width: createResponsiveValue(53, 89), // Figma: 100px at 1440px
          height: createResponsiveValue(88, 148), // Figma: 166px at 1440px
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.4, // Appear after logo
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
          left: createResponsiveValue(232, 387),
          bottom: createResponsiveValue(58, 96),
          width: createResponsiveValue(392, 654),
          height: createResponsiveValue(154, 250),
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 1.5,
          ease: "easeOut",
        }}
      >
        <p
          className="font-work-sans font-[600] leading-[1.4] text-left text-[#91A69E]"
          style={{
            fontSize: createResponsiveValue(13, 21),
            letterSpacing: "-1%",
          }}
        >
          {mainText}
        </p>
      </motion.div>

      {/* Horizontal Background Card - Grows from width 0 to max width AFTER parent animation ends */}
      <motion.div
        className="absolute z-[1] bg-[#919996] left-0"
        style={{
          top: createResponsiveValue(213, 355),
          height: createResponsiveValue(78, 130),
          transformOrigin: "left",
        }}
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: createResponsiveValue(705, 1175), // Figma: 1322px at 1440px
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.2, // Start slightly after Vertical Card starts (1.0s + 0.2s stagger)
          ease: "easeOut",
        }}
      />
    </div>
  );
};
