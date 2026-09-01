import React, { useRef } from "react";
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
    active: true,
  },
  {
    name: "DJ / Sound Sys",
    image: dj,
    yellowBottom: true,
  },
  {
    name: "DJ / Sound Sys",
    image: dj,
    yellowBottom: true,
  },
  {
    name: "DJ / Sound Sys",
    image: dj,
    yellowBottom: true,
  },
];

const ExploreServices = () => {
  const sliderRef = useRef(null);

  const handlePrevious = () => {
    if (sliderRef.current) {
      const firstCard = sliderRef.current.children[0];
      const gap = 24;

      sliderRef.current.scrollBy({
        left: -(firstCard.offsetWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      const firstCard = sliderRef.current.children[0];
      const gap = 24;

      sliderRef.current.scrollBy({
        left: firstCard.offsetWidth + gap,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-[#f8f8f8] py-8 sm:py-10 md:py-12">
      <div className="mx-auto w-full px-5 sm:px-10 md:px-12">

        {/* Heading */}
        <h2 className="mb-8 text-center text-[20px] font-medium text-[#252525] sm:text-[22px] md:mb-9 md:text-[24px]">
          Explore Services by Category
        </h2>

        {/* Categories */}
        <div className="relative flex items-center">

          {/* Left Arrow */}
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous"
            className="absolute -left-3 top-[85px] z-30 flex cursor-pointer items-center justify-center text-[#222] sm:-left-5 md:-left-7"
          >
            <FaChevronLeft className="text-[22px] font-light" />
          </button>

          {/* Outer Container */}
          <div className="w-full overflow-hidden px-4">

            {/* Horizontal Slider */}
            <div
              ref={sliderRef}
              className="
                flex
                flex-nowrap
                gap-6
                overflow-x-auto
                scroll-smooth
                pb-4
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {categories.map((category, index) => (
                <div
                  key={`${category.name}-${index}`}
                  className="
                    flex
                    w-full
                    shrink-0
                    flex-col
                    items-center
                    sm:w-[calc((100%-24px)/2)]
                    md:w-[calc((100%-48px)/3)]
                    lg:w-[calc((100%-72px)/4)]
                    xl:w-[calc((100%-96px)/5)]
                  "
                >
                  {/* Selected Stage Decor */}
                  {category.active ? (
                    <div className="w-[182px] overflow-hidden border border-[#9ca3af]">

                      {/* Image Section */}
                      <div className="flex h-[180px] w-full items-center justify-center overflow-hidden border-b border-[#9ca3af]">
                        <div className="flex h-[180px] w-[180px] shrink-0 items-center justify-center rounded-full border border-[#d1d5db] bg-[#f1f2f4]">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="h-[126px] w-[126px] object-contain"
                          />
                        </div>
                      </div>

                      {/* Text Section */}
                      <div className="flex h-[42px] items-center justify-center">
                        <span className="text-[24px] font-medium text-black">
                          {category.name}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Normal Category Circle */}
                      <div className="relative flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-full border border-[#d1d5db] bg-[#f1f2f4]">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="relative z-10 h-[126px] w-[126px] object-contain"
                        />

                        {/* Yellow Bottom */}
                        {category.yellowBottom && (
                          <div className="absolute bottom-0 left-0 h-[20px] w-full bg-[#f4b400]" />
                        )}
                      </div>

                      {/* Category Name */}
                      <p className="mt-3 whitespace-nowrap text-center text-[24px] font-medium text-[#222]">
                        {category.name}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next"
            className="absolute -right-3 top-[85px] z-30 flex cursor-pointer items-center justify-center text-[#222] sm:-right-5 md:-right-7"
          >
            <FaChevronRight className="text-[22px] font-light" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default ExploreServices;