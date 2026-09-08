import React from "react";
import { useParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import photography from "../../assets/photography1.png";
import cateringlogo from "../../assets/catering-logo.jpg";
import lightinglogo from "../../assets/lighting-logo.jpg";

const portfolioData = {
  photography: {
    image: photography,
    alt: "Artlane Studio Photography",
  },

  catering: {
    image: cateringlogo,
    alt: "Mangalam Caterers",
  },

  lighting: {
    image: lightinglogo,
    alt: "Elite Lighting Services",
  },
};

const PortfolioHero = () => {
  const { type } = useParams();

  const data =
    portfolioData[type] || portfolioData.photography;

  return (
    <section className="w-full bg-black p-0">
      <div
        className="
          relative
          flex
          w-full
          items-center
          justify-center
          overflow-hidden
        "
      >
        {/* ================= HERO IMAGE ================= */}

        <img
          src={data.image}
          alt={data.alt}
          className="
            block
            h-[400px]
            w-full
            object-cover
            object-center

            sm:h-[500px]

            md:h-[550px]

            lg:h-[600px]
          "
        />

        {/* ================= LEFT ARROW ================= */}

        <button
          type="button"
          className="
            absolute
            left-5
            top-1/2
            z-10
            -translate-y-1/2
            cursor-pointer
            text-white
            transition-transform
            duration-300
            hover:scale-125
          "
          aria-label="Previous image"
        >
          <FaChevronLeft
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
            "
          />
        </button>

        {/* ================= RIGHT ARROW ================= */}

        <button
          type="button"
          className="
            absolute
            right-5
            top-1/2
            z-10
            -translate-y-1/2
            cursor-pointer
            text-white
            transition-transform
            duration-300
            hover:scale-125
          "
          aria-label="Next image"
        >
          <FaChevronRight
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
            "
          />
        </button>
      </div>
    </section>
  );
};

export default PortfolioHero;