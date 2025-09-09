"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { OurProjectSectionProps } from "../../../types/our-project";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { Container } from "../../shared";
import { useContactRedirect } from "@/src/hooks/navigation/use-contact-redirect";

// Simplified component interfaces
interface StaticLayoutData {
  description: string;
  buttonText: string;
  buttonAction: () => void;
}

interface InlineDescriptionData {
  mainText: string;
  backgroundImage: string;
}

interface DesktopViewProps {
  data?: OurProjectSectionProps["data"];
}

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
  const desktopStaticMotion = useSimpleMotion("about-project-desktop-static");
  const desktopDescriptionMotion = useSimpleMotion(
    "about-project-desktop-description"
  );

  return (
    <Container maxWidth="default">
      <motion.section
        {...SIMPLE_ANIMATIONS.fadeInUp}
        {...containerMotion}
        className="w-[1440px] h-full"
      >
        <div className="w-full">
          {/* Desktop Layout - Row (Vertical Stack) */}
          <div className="flex flex-col gap-[10px] items-start">
            {/* Side 1 */}
            <motion.div
              {...SIMPLE_ANIMATIONS.fadeInUp}
              {...desktopStaticMotion}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="w-full relative z-[2] rounded-[20px] flex flex-col items-center gap-[64px]"
              style={{
                height: "716px",
                backgroundColor: "rgba(250, 250, 250, 0.6)",
                padding: "80px 120px",
              }}
            >
              <StaticImageLayout
                data={{
                  ...staticLayoutData,
                  buttonAction: redirectToContact,
                }}
              />
            </motion.div>

            {/* Side 2 - Description */}
            <motion.div
              {...SIMPLE_ANIMATIONS.fadeInUp}
              {...desktopDescriptionMotion}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="w-full relative z-[1] flex flex-col gap-[10px]"
              style={{
                height: "829px",
              }}
            >
              <DescriptionSectionInline data={descriptionData} />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Container>
  );
});

DesktopView.displayName = "DesktopView";

// Static Image Layout Component (Desktop)
const StaticImageLayout = ({ data }: { data: StaticLayoutData }) => {
  const { description, buttonText, buttonAction } = data;

  // Static SVG assets for the three image groups with specific dimensions
  const imageGroups = [
    {
      src: "/assets/desktop/about-us/our-project-group-1.svg",
      alt: "Our Project Group 1",
      width: 447,
      height: 295,
    },
    {
      src: "/assets/desktop/about-us/our-project-group-2.svg",
      alt: "Our Project Group 2",
      width: 285,
      height: 275,
    },
    {
      src: "/assets/desktop/about-us/our-project-group-3.svg",
      alt: "Our Project Group 3",
      width: 289,
      height: 278,
    },
  ];

  return (
    <>
      {/* Image Group Content - Horizontal Layout with 80px spacing */}
      <div className="flex items-center justify-center gap-[80px]">
        {imageGroups.map((group, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={group.src}
              alt={group.alt}
              width={group.width}
              height={group.height}
              className="object-contain"
              priority
              style={{
                width: `${group.width}px`,
                height: `${group.height}px`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Description Section */}
      <div
        className="w-full flex flex-col items-center gap-6 rounded-lg"
        style={{
          backgroundColor: "#F7F7F7",
          padding: "24px 0",
        }}
      >
        <p
          className="font-open-sans text-center"
          style={{
            fontSize: "24px",
            fontWeight: 300,
            lineHeight: "1.4em",
            color: "#2E2F2D",
            maxWidth: "954px",
          }}
        >
          {description}
        </p>

        {/* Request Access Button */}
        <motion.button
          onClick={buttonAction}
          className="flex items-center gap-2"
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
            className="font-open-sans"
            style={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "1.4em",
              color: "rgba(0, 0, 0, 0.4)",
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
            className="w-6 h-6 flex items-center justify-center"
            style={{ opacity: 0.4 }}
            whileHover={{
              opacity: 0.6,
              x: 3,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
          >
            <motion.svg
              width="24"
              height="24"
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
                stroke="#323232"
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
  const { mainText, backgroundImage } = data;

  return (
    <div className="w-[1440px] h-[669px] relative overflow-hidden">
      {/* Single SVG Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt="Side 2 background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container with Figma specifications */}
      <div
        className="absolute inset-0 z-10"
        style={{ padding: "72px 120px 139px 120px" }}
      >
        <div className="w-full h-full relative">
          {/* Decorative Lines Group 57 - positioned at x:0, y:0 (ABOVE mainText) */}
          <div
            className="absolute"
            style={{ left: 0, top: "0px", width: "690px", height: "40px" }}
          >
            {/* Top line - 6px stroke at y:0 */}
            <div
              className="absolute"
              style={{
                top: "0px",
                left: 0,
                width: "690px",
                height: "0px",
                borderTop: "6px solid rgba(172, 184, 194, 0.2)",
              }}
            />
            {/* Bottom line - 4px stroke at y:40, x:1 */}
            <div
              className="absolute"
              style={{
                top: "40px",
                left: "1px",
                width: "511px",
                height: "0px",
                borderTop: "4px solid rgba(172, 184, 194, 0.2)",
              }}
            />
          </div>

          {/* Main Text - positioned at x:0, y:139 within content area */}
          <div
            className="absolute"
            style={{ left: 0, top: "139px", width: "686px", height: "180px" }}
          >
            <p
              className="font-open-sans"
              style={{
                fontSize: "28px",
                fontWeight: 300,
                lineHeight: "1.4em",
                textAlign: "left",
                color: "#2E2F2D",
              }}
            >
              {mainText}
            </p>
          </div>

          {/* Decorative Lines Group - positioned at x:0, y:417 within content area */}
          <div
            className="absolute"
            style={{ left: 0, top: "417px", width: "690px", height: "40px" }}
          >
            {/* Top line - 6px stroke at y:40 */}
            <div
              className="absolute"
              style={{
                top: "40px",
                left: 0,
                width: "690px",
                height: "0px",
                borderTop: "6px solid rgba(172, 184, 194, 0.2)",
              }}
            />
            {/* Bottom line - 4px stroke at y:0, x:1 */}
            <div
              className="absolute"
              style={{
                top: "0px",
                left: "1px",
                width: "511px",
                height: "0px",
                borderTop: "4px solid rgba(172, 184, 194, 0.2)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
