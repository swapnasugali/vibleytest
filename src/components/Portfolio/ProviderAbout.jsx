import React from "react";
import { useParams } from "react-router-dom";

// ================= AWARD ICON =================

const AwardIcon = () => {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-1 shrink-0"
      aria-hidden="true"
    >
      {/* Award Circle */}
      <circle
        cx="12"
        cy="10"
        r="7.5"
        stroke="#A40000"
        strokeWidth="2"
      />

      {/* Yellow Star */}
      <path
        d="M12 4.8L13.45 8.05L17 8.4L14.35 10.75L15.1 14.2L12 12.4L8.9 14.2L9.65 10.75L7 8.4L10.55 8.05L12 4.8Z"
        fill="#FFBD00"
      />

      {/* Left Ribbon */}
      <path
        d="M6 15L3.5 20.8L8.2 20.2L10.5 24.5L12 18"
        stroke="#A40000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Ribbon */}
      <path
        d="M18 15L20.5 20.8L15.8 20.2L13.5 24.5L12 20"
        stroke="#A40000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ================= PORTFOLIO DATA =================

const portfolioData = {
  photography: {
    heading:
      "Artlane - Creating unforgettable moments since ages.",

    description:
      "Artlane Studio is an award-winning wedding and event photography studio based in Hyderabad, capturing beautiful moments through a creative and cinematic lens. Our team focuses on natural emotions, beautiful lighting, and timeless memories.",

    awards: [
      {
        title: "International Wedding Excellence Award – 2024",
        description:
          "Honored for creating visually rich and memorable wedding stories with a strong focus on creativity and emotion.",
      },
      {
        title: "Luxury Wedding Excellence Award",
        description:
          "Recognized for delivering elegant and refined wedding photography with attention to detail and timeless storytelling.",
      },
    ],
  },

  catering: {
    heading:
      "Mangalam Caterers - Serving delicious memories for every occasion.",

    description:
      "Mangalam Caterers provides quality catering services for weddings, corporate events, birthdays, and special celebrations. Our team focuses on delicious food, attractive presentation, hygienic preparation, and professional service.",

    awards: [
      {
        title: "Best Wedding Catering Service – 2024",
        description:
          "Recognized for providing delicious traditional and modern cuisine with excellent service for wedding celebrations.",
      },
      {
        title: "Excellence in Catering Services Award",
        description:
          "Honored for quality food, professional buffet arrangements, and reliable catering services across different events.",
      },
    ],
  },

  lighting: {
    heading:
      "Elite Lighting Services - Creating the perfect atmosphere for every event.",

    description:
      "Elite Lighting Services provides professional lighting solutions for weddings, parties, corporate events, and celebrations. Our team creates attractive stage, decorative, and event lighting setups according to the theme and requirements.",

    awards: [
      {
        title: "Best Event Lighting Service – 2024",
        description:
          "Recognized for creative lighting arrangements and professional event setups for weddings and special celebrations.",
      },
      {
        title: "Excellence in Event Decoration",
        description:
          "Honored for delivering stylish lighting solutions with attention to design, quality, and event requirements.",
      },
    ],
  },
};

// ================= COMPONENT =================

const ProviderAbout = () => {
  const { type } = useParams();

  const data =
    portfolioData[type] || portfolioData.photography;

  return (
    <section className="w-full bg-[#f7f7f7] px-6 py-5 sm:px-8 md:px-10">

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        {/* ================= ABOUT PROVIDER ================= */}

        <div className="rounded-lg bg-white px-4 py-4">

          <h2 className="text-[22px] font-medium italic text-[#555555]">
            {data.heading}
          </h2>

          <p className="mt-4 text-[16px] leading-5 text-[#5A403E]">
            {data.description}
          </p>

        </div>

        {/* ================= AWARDS ================= */}

        <div className="rounded-lg bg-white px-4 py-4">

          {data.awards.map((award, index) => (
            <div
              key={index}
              className={`flex items-start gap-2 ${
                index > 0 ? "mt-4" : ""
              }`}
            >

              {/* ================= AWARD SYMBOL ================= */}

              <AwardIcon />

              <div>

                <h3 className="text-[18px] font-medium text-[#252525] underline">
                  {award.title}
                </h3>

                <p className="mt-1 text-[14px] leading-4 text-[#5A403E]">
                  {award.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProviderAbout;