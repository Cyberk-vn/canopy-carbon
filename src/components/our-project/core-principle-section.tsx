import React, { JSX } from "react";

/**
 * Interface for individual principle card configuration
 */
interface PrincipleCard {
  id: string;
  text: string;
  backgroundColor: string;
  padding: string;
}

const CorePrincipleSection: React.FC = () => {
  const leftColumnCards: PrincipleCard[] = [
    {
      id: "card-1",
      text: "Effective \nGovernance",
      backgroundColor: "#232A26",
      padding: "19px 34px",
    },
    {
      id: "card-2",
      text: "Transparency",
      backgroundColor: "#272F2A",
      padding: "28px",
    },
    {
      id: "card-3",
      text: "Additionality",
      backgroundColor: "#2B332F",
      padding: "28px 31px",
    },
    {
      id: "card-4",
      text: "Robust \nQuantification",
      backgroundColor: "#2F3833",
      padding: "19px 25px",
    },
    {
      id: "card-5",
      text: "Safeguards & \nBenefits",
      backgroundColor: "#333D37",
      padding: "19px 27px",
    },
  ];

  const rightColumnCards: PrincipleCard[] = [
    {
      id: "card-1",
      text: "Tracking",
      backgroundColor: "#232A26",
      padding: "28px 48px",
    },
    {
      id: "card-2",
      text: "Independent \nAudit",
      backgroundColor: "#272F2A",
      padding: "19px 29px",
    },
    {
      id: "card-3",
      text: "Permanence",
      backgroundColor: "#2B332F",
      padding: "28px 32px",
    },
    {
      id: "card-4",
      text: "No Double \nCounting",
      backgroundColor: "#2F3833",
      padding: "19px 38px",
    },
    {
      id: "card-5",
      text: "Contribution \nto Net Zero",
      backgroundColor: "#333D37",
      padding: "19px 29px",
    },
  ];

  const renderCard = (card: PrincipleCard): JSX.Element => (
    <div
      key={card.id}
      className="w-[163px] flex flex-col justify-center items-center gap-[10px] mb-4"
      style={{
        backgroundColor: card.backgroundColor,
        padding: card.padding,
      }}
    >
      <span className="font-open-sans font-semibold text-[15px] leading-[1.4em] text-[#9C9C9C] text-center whitespace-pre-line">
        {card.text}
      </span>
    </div>
  );

  return (
    <section className="w-full bg-[#1E2421] px-6 md:px-[120px] py-6">
      <div className="max-w-[392px] mx-auto md:mx-0 md:max-w-[600px] lg:max-w-[800px]">
        {/* Title */}
        <h2 className="font-open-sans font-semibold text-xl leading-[1.5em] text-[#9C9C9C] mb-[24px]">
          The Core Carbon Principle
        </h2>

        {/* Principle Cards Grid */}
        <div className="flex justify-center md:justify-start gap-[16px] mb-[24px]">
          {/* Left Column */}
          <div className="flex flex-col">
            {leftColumnCards.map((card) => renderCard(card))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {rightColumnCards.map((card) => renderCard(card))}
          </div>
        </div>

        {/* Description Section */}
        <div className="max-w-[342px] mx-auto md:mx-0">
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="font-open-sans font-normal text-[13px] leading-[1.538em] text-[#949494] text-left w-full">
              Developed and published in 2023 by the Integrity Council for the
              Voluntary Carbon Market (ICVCM), the CCP was formulated in
              response to growing concerns over integrity in global carbon
              markets. The CCP is widely regarded today as a foundational
              benchmark for defining high-integrity carbon projects. The ICVCM
              Committee regularly reviews methodologies developed by
              standard-setting bodies and issues CCP labels to validate their
              alignment with the framework.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePrincipleSection;
