import Image from "next/image";

const CollaborateWithUsSection = () => {
  return (
    <section className="relative bg-[#232A26] w-full min-h-[460px] overflow-hidden">
      {/* Main Content Container */}
      <div className="relative z-10 pt-[42px] px-6 md:px-[120px]">
        <div className="w-full max-w-[342px]">
          {/* Content Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[#EDEDED] font-bold text-xl leading-[1.5em] text-left font-['Open_Sans']">
              Collaborate With Us
            </h2>

            <div className="flex flex-col gap-3">
              <p className="text-[#9E9E9E] text-[13px] leading-[1.385em] text-left font-['Open_Sans']">
                We believe meaningful climate solutions are built through
                partnership. At Canopy, we welcome collaboration with project
                proponents, financiers, corporate buyers, and technical
                specialists who share our vision for high-integrity,
                nature-based development.
              </p>
              <p className="text-[#9E9E9E] text-[13px] leading-[1.385em] text-left font-['Open_Sans']">
                Whether you&apos;re looking to co-develop a project, secure
                long-term carbon offtake, or bring technical innovation to the
                field, we&apos;d love to hear from you. Together, we can scale
                impact where it matters most.
              </p>
            </div>
          </div>

          {/* Card Grid Section */}
          <div className="flex flex-col gap-1 mt-6 w-full h-[112px]">
            {/* Top Row */}
            <div className="flex gap-2 w-full">
              <div className="flex items-center justify-center bg-black/20 w-[168px] px-[37px] py-2 rounded hover:bg-black/30 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm leading-[1.714em] text-center font-['Open_Sans']">
                  Co-Develop
                </span>
              </div>
              <div className="flex items-center justify-center bg-black/20 w-[168px] px-4 py-2 rounded hover:bg-black/30 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm leading-[1.714em] text-center font-['Open_Sans']">
                  Purchase Credits
                </span>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex gap-2 w-full">
              <div className="flex items-center justify-center bg-black/20 w-[168px] px-[29px] py-2 rounded hover:bg-black/30 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm leading-[1.714em] text-center font-['Open_Sans']">
                  Fund Pipeline
                </span>
              </div>
              <div className="flex items-center justify-center bg-black/20 w-[168px] px-[38px] py-2 rounded hover:bg-black/30 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm leading-[1.714em] text-center font-['Open_Sans']">
                  Co-Innovate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Images */}
      <div className="absolute top-[98px] right-[-90px] w-[227px] h-[228px] z-0">
        <Image
          src="/assets/our-project/collaborate-with-us/collaborate-decorate-absolute-image.png"
          alt="Collaborate decoration"
          fill
          className="object-cover"
          style={{
            opacity: 0.17,
          }}
        />
      </div>

      <div className="absolute bottom-[-23px] right-[0px] w-[82px] h-[46px] z-0">
        <Image
          src="/assets/our-project/collaborate-with-us/collaborate-decorate-bottom-image.png"
          alt="Bottom decoration"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default CollaborateWithUsSection;
