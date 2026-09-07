import React from "react";
import { useParams } from "react-router-dom";

import photography1 from "../../assets/photography1.jpg";
import photography2 from "../../assets/photography2.jpg";
import photography3 from "../../assets/photography3.jpg";

import catering1 from "../../assets/catering1.jpg";
import catering2 from "../../assets/catering2.jpg";
import catering3 from "../../assets/catering3.jpg";

import lighting1 from "../../assets/lighting1.jpg";
import lighting2 from "../../assets/lighting2.jpg";
import lighting3 from "../../assets/lighting3.jpg";

const portfolioData = {
  photography: {
    title: "Photography Services",
    description:
      "Professional photography services for weddings, birthdays, corporate events and special occasions.",
    images: [photography1, photography2, photography3],
  },

  catering: {
    title: "Catering Services",
    description:
      "Delicious food, beautiful presentation and professional catering services for every special occasion.",
    images: [catering1, catering2, catering3],
  },

  lighting: {
    title: "Lighting Services",
    description:
      "Professional lighting solutions for weddings, parties, corporate events and celebrations.",
    images: [lighting1, lighting2, lighting3],
  },
};

const PortfolioGallery = () => {
  const { type } = useParams();

  const data = portfolioData[type] || portfolioData.photography;

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1180px]">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[20px] font-semibold text-[#252525] sm:text-[22px] md:text-[25px]">
            {data.title}
          </h2>

          <p className="mx-auto mt-2 max-w-[650px] text-[9px] leading-[1.6] text-[#666666] sm:text-[10px] md:text-[11px]">
            {data.description}
          </p>
        </div>

        {/* Images */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {data.images.map((image, index) => (
            <div
              key={index}
              className="
                h-[190px]
                overflow-hidden
                rounded-[6px]
                bg-[#f2f2f2]
                shadow-[0_2px_8px_rgba(0,0,0,0.15)]
                sm:h-[210px]
                md:h-[230px]
              "
            >
              <img
                src={image}
                alt={`${data.title} ${index + 1}`}
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioGallery;