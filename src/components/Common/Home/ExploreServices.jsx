import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import photography from "../../../assets/photography.png";
import catering from "../../../assets/catering.png";
import venue from "../../../assets/venue.png";
import stage from "../../../assets/stage1.png";
import dj from "../../../assets/dj.png";

const categories = [
  {
    name: "Photography",
    image: photography,
  },
  {
    name: "Catering",
    image: catering,
  },
  {
    name: "Venue booking",
    image: venue,
  },
  {
    name: "Stage Decor",
    image: stage,
  },
  {
    name: "DJ / Sound Sys",
    image: dj,
  },
];

const ExploreServices = () => {
  const [activeCategory, setActiveCategory] = useState(3);

  const handlePrevious = () => {
    setActiveCategory((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveCategory((prev) =>
      prev === categories.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#fffdfa] via-[#fffdfb] to-[#fefdfb] px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-14 xl:px-16">
      <div className="mx-auto w-full max-w-[1400px]">
        
        {/* Heading */}
        <h2 className="mb-8 text-center text-[18px] font-medium text-[#374151] sm:text-[20px] md:mb-10 md:text-[22px]">
          Explore Services by Category
        </h2>

        {/* Categories */}
        <div className="relative flex w-full items-center">

          {/* Left Arrow */}
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous category"
            className="
              absolute
              left-0
              top-[42%]
              z-20
              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              text-[#222]
            "
          >
            <FaChevronLeft className="text-[20px]" />
          </button>

          {/* Categories Container */}
          <div
            className="
              flex
              w-full
              items-start
              justify-between
              gap-4
              overflow-x-auto
              px-10
              pb-2

              sm:px-12
              md:px-14
              lg:px-16

              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {categories.map((category, index) => {
              const isActive = activeCategory === index;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => setActiveCategory(index)}
                  className={`
                    shrink-0
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "border border-[#9ca3af]"
                        : "border border-transparent"
                    }
                  `}
                >
                  <div className="flex w-[105px] flex-col items-center px-1 pb-3 pt-2 sm:w-[115px] md:w-[125px]">

                    {/* Circle */}
                    <div className="flex h-[78px] w-[78px] items-center justify-center rounded-full border border-[#d1d5db] bg-[#f6f6f6] shadow-sm sm:h-[90px] sm:w-[90px] md:h-[105px] md:w-[105px]">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="h-[72%] w-[72%] object-contain"
                      />
                    </div>

                    {/* Category Name */}
                    <p className="mt-3 whitespace-nowrap text-center text-[10px] font-medium text-[#374151] sm:text-[11px] md:text-[13px]">
                      {category.name}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next category"
            className="
              absolute
              right-0
              top-[42%]
              z-20
              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              text-[#222]
            "
          >
            <FaChevronRight className="text-[20px]" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default ExploreServices;