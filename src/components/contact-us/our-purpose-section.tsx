"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/src/hooks/responsive/use-scroll-animation";

export const OurPurposeSection = () => {
  return (
    <div 
      ref={useScrollAnimation({ animationType: 'fadeInUp', threshold: 0.2 })}
      className="relative w-full px-0 md:px-[118px]"
    >
      {/* Main Container - Mobile First */}
      <div className="relative w-full md:max-w-none">
        <div className="grid grid-cols-[35%_65%] w-full h-[377px] md:hidden">
          {/* Left Side with Card Effect - Mobile */}
          <div className="relative flex items-start justify-center">
            {/* Image with Card Effect */}
            <div 
              ref={useScrollAnimation({ animationType: 'scaleIn', delay: 0, threshold: 0.3 })}
              className="card-effect purpose-card relative w-[85%] h-[87%]"
            >
              <Image
                src="/assets/contact-us/our-purpose-main-image.png"
                alt="Our Purpose"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side Content - Mobile */}
          <div 
            ref={useScrollAnimation({ animationType: 'fadeInRight', delay: 10, threshold: 0.3 })}
            className="flex flex-col justify-center px-2"
          >
            {/* Title Section */}
            <div className="flex flex-col gap-3 mb-4">
              {/* Main Purpose Text - Figma styling */}
              <p
                className="font-open-sans text-[#95A4B0]"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "1.4285714285714286em",
                  letterSpacing: "-3%",
                }}
              >
                Canopy Carbon was founded to address this structural supply
                shortfall - by delivering nature-based projects with
                uncompromising execution and long-term credibility.
              </p>

              {/* Our Purpose Label - Figma styling */}
              <p
                className="font-open-sans"
                style={{
                  fontSize: "10px",
                  fontWeight: 300,
                  lineHeight: "1.8em",
                  color: "rgba(139, 147, 140, 0.8)",
                }}
              >
                -Our Purpose
              </p>
            </div>

            {/* App Icon - Centered below text */}
            <div className="flex justify-center">
              <div className="w-[200px] h-[60px] relative opacity-45">
                <Image
                  src="/assets/contact-us/app-icon.png"
                  alt="Canopy Carbon App Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden md:flex md:gap-8 lg:gap-12">
          {/* Left Side with Card Effect - Desktop */}
          <div 
            ref={useScrollAnimation({ animationType: 'fadeInLeft', delay: 0, threshold: 0.3 })}
            className="flex-shrink-0"
          >
            <div className="relative w-[139px] h-[377px] lg:w-[180px] lg:h-[480px]">
              {/* Background Rectangle */}
              <div
                className="absolute inset-0 lg:w-[135px] w-[104px] h-full"
                style={{
                  backgroundColor: "#1D1F1F",
                }}
              />

              {/* Image with Card Effect */}
              <div
                className="card-effect purpose-card absolute"
                style={{
                  left: "21px",
                  top: "31px",
                  width: "118px",
                  height: "329px",
                }}
              >
                <Image
                  src="/assets/contact-us/our-purpose-main-image.png"
                  alt="Our Purpose"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side Content - Desktop */}
          <div 
            ref={useScrollAnimation({ animationType: 'fadeInRight', delay: 10, threshold: 0.3 })}
            className="flex-1 flex flex-col justify-center gap-8 max-w-[600px]"
          >
            {/* App Icon */}
            <div className="w-[250px] h-[77px] relative">
              <Image
                src="/assets/contact-us/app-icon.png"
                alt="Canopy Carbon App Icon"
                fill
                className="object-contain"
              />
            </div>

            {/* Title Section */}
            <div className="flex flex-col gap-4 max-w-[400px]">
              {/* Main Purpose Text */}
              <p
                className="font-open-sans font-semibold text-[#95A4B0]"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.4285714285714286em",
                  letterSpacing: "-3%",
                }}
              >
                Canopy Carbon was founded to address this structural supply
                shortfall - by delivering nature-based projects with
                uncompromising execution and long-term credibility.
              </p>

              {/* Our Purpose Label */}
              <p
                className="font-open-sans font-light text-[rgba(139,147,140,0.8)]"
                style={{
                  fontSize: "12px",
                  lineHeight: "1.8em",
                }}
              >
                -Our Purpose
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card Effect Styles - Updated with #1D1F1F color */}
      <style jsx>{`
        .card-effect {
          background: #1d1f1f;
          box-shadow: -25px 0px 0 0px #1d1f1f, -25px 20px 0 0px #1d1f1f;
          transition: transform 0.3s, box-shadow 0.3s;
          overflow: hidden;
        }

        .card-effect:hover {
          transform: translate(8px, -8px);
          box-shadow: -35px 0px 0 0px #1d1f1f, -35px 30px 0 0px #1d1f1f;
        }

        .purpose-card {
          position: relative;
        }

        .purpose-card:hover {
          animation: glitch 0.3s infinite;
        }

        @keyframes glitch {
          0% {
            transform: translate(2px, 2px) translate(5px, -5px);
          }
          25% {
            transform: translate(-2px, -2px) translate(5px, -5px);
          }
          50% {
            transform: translate(-2px, 2px) translate(5px, -5px);
          }
          75% {
            transform: translate(2px, -2px) translate(5px, -5px);
          }
          100% {
            transform: translate(2px, 2px) translate(5px, -5px);
          }
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .card-effect {
            box-shadow: -20px 0px 0 0px #1d1f1f, -20px 15px 0 0px #1d1f1f;
          }

          .card-effect:hover {
            transform: translate(7px, -7px);
            box-shadow: -28px 0px 0 0px #1d1f1f, -28px 22px 0 0px #1d1f1f;
          }
        }

        /* Large screen adjustments */
        @media (min-width: 1024px) {
          .purpose-card {
            width: 150px !important;
            height: 420px !important;
            left: 27px !important;
            top: 40px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OurPurposeSection;
