import React from "react";
import { useParams } from "react-router-dom";
import { FaAward } from "react-icons/fa";

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

              <FaAward
                className="
                  mt-1
                  shrink-0
                  text-[15px]
                  text-[#e50909]
                "
              />

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