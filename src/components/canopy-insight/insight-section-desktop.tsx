"use client";

import Image from "next/image";
import { motion } from "motion/react";
import FadeContent from "@/src/components/animation/fade-content";
import { useContactRedirect } from "@/src/hooks/navigation/use-contact-redirect";

interface InsightSectionDesktopProps {
  title: string;
  description: string;
  showDecorators?: boolean;
  imagePosition?: "left" | "right";
  titleFontSize?: string;
  imageSrc?: string;
}

export function InsightSectionDesktop({
  title,
  description,
  imagePosition = "right",
  titleFontSize = "28px",
  imageSrc = "/assets/desktop/canopy-insight/bayond-emission-card-1.png",
}: InsightSectionDesktopProps) {
  // Contact redirect hook
  const { redirectToContact } = useContactRedirect();
  const sectionContent = (
    <FadeContent
      duration={600}
      delay={0}
      threshold={0.1}
      easing="ease-out"
      className="flex flex-col gap-[40px]"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "80px 68px",
        width: "fit-content",
      }}
    >
      {/* Title */}
      <FadeContent
        duration={500}
        delay={100}
        threshold={0.1}
        easing="ease-out"
        style={{
          fontFamily: "Open Sans",
          fontWeight: 700,
          fontSize: titleFontSize,
          lineHeight: "1.36181640625em",
          color: "#6A7D8E",
        }}
      >
        {title}
      </FadeContent>

      {/* Content Container - Two Column Layout */}
      <div
        className="flex items-stretch gap-8 flex-row"
        style={{
          width: "1305px",
          backgroundColor: "#F7F7F7",
          padding: "32px",
        }}
      >
        {imagePosition === "left" ? (
          <>
            {/* Left Column: Image Asset */}
            <div
              className="flex-1 relative"
              style={{
                height: "281.81px",
                maxWidth: "604px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Shadow overlay */}
              <div
                className="absolute inset-0"
                style={{
                  boxShadow: "0 4px 16px rgba(1, 27, 13, 0.3)",
                  zIndex: 1,
                }}
              />

              <FadeContent
                duration={600}
                delay={400}
                threshold={0.1}
                easing="ease-out"
                className="w-full h-full relative"
                style={{ zIndex: 2 }}
              >
                <Image
                  src={imageSrc}
                  alt="Beyond Emission Cards"
                  width={637}
                  height={314}
                  className="w-full h-full object-contain"
                />
              </FadeContent>
            </div>

            {/* Right Column: Description and Button */}
            <div
              className="flex flex-col justify-between gap-6"
              style={{
                padding: "24px",
                flex: "1",
                maxWidth: "604px",
                backgroundColor: "#FFFFFF",
              }}
            >
              {/* Description */}
              <FadeContent
                duration={500}
                delay={200}
                threshold={0.1}
                easing="ease-out"
                className="flex-1"
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "1.36181640625em",
                  letterSpacing: "-2%",
                  color: "rgba(108, 113, 115, 0.8)",
                }}
              >
                {description}
              </FadeContent>

              {/* Request Access Button */}
              <FadeContent
                duration={500}
                delay={300}
                threshold={0.1}
                easing="ease-out"
              >
                <motion.button
                  onClick={redirectToContact}
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
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "1.399999976158142em",
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
                    Request Access
                  </motion.span>
                  <motion.div
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
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                    >
                      <motion.path
                        d="M9 6.42L14.59 12L9 17.58"
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
              </FadeContent>
            </div>
          </>
        ) : (
          <>
            {/* Left Column: Description and Button */}
            <div
              className="flex flex-col justify-between gap-6"
              style={{
                padding: "24px",
                flex: "1",
                maxWidth: "604px",
                backgroundColor: "#FFFFFF",
              }}
            >
              {/* Description */}
              <FadeContent
                duration={500}
                delay={200}
                threshold={0.1}
                easing="ease-out"
                className="flex-1"
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "1.36181640625em",
                  letterSpacing: "-2%",
                  color: "rgba(108, 113, 115, 0.8)",
                }}
              >
                {description}
              </FadeContent>

              {/* Request Access Button */}
              <FadeContent
                duration={500}
                delay={300}
                threshold={0.1}
                easing="ease-out"
              >
                <motion.button
                  onClick={redirectToContact}
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
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "1.399999976158142em",
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
                    Request Access
                  </motion.span>
                  <motion.div
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
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                    >
                      <motion.path
                        d="M9 6.42L14.59 12L9 17.58"
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
              </FadeContent>
            </div>

            {/* Right Column: Image Asset */}
            <div
              className="flex-1 relative"
              style={{
                height: "281.81px",
                maxWidth: "604px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Shadow overlay */}
              <div
                className="absolute inset-0"
                style={{
                  boxShadow: "0 4px 16px rgba(1, 27, 13, 0.3)",
                  zIndex: 1,
                }}
              />

              <FadeContent
                duration={600}
                delay={400}
                threshold={0.1}
                easing="ease-out"
                className="w-full h-full relative"
                style={{ zIndex: 2 }}
              >
                <Image
                  src={imageSrc}
                  alt="Beyond Emission Cards"
                  width={637}
                  height={314}
                  className="w-full h-full object-contain"
                />
              </FadeContent>
            </div>
          </>
        )}
      </div>
    </FadeContent>
  );

  return (
    <div className="w-full flex flex-col items-center">
      {/* Container with proper responsive behavior */}
      <div className="w-full flex justify-center">{sectionContent}</div>
    </div>
  );
}

export default InsightSectionDesktop;
