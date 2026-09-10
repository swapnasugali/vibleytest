import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
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
    path: "/services/1",
  },
  {
    name: "Catering",
    image: catering,
    path: "/services/2",
  },
  {
    name: "Venue booking",
    image: venue,
    path: "/services/3",
  },
  {
    name: "Stage Decor",
    image: stage,
    path: "/services/4",
    active: true,
  },
  {
    name: "DJ / Sound Sys",
    image: dj,
    path: "/services/5",
    yellowBottom: true,
  },
  {
    name: "DJ / Sound Sys",
    image: dj,
    path: "/services/5",
    yellowBottom: true,
  },
  {
    name: "DJ / Sound Sys",
    image: dj,
    path: "/services/5",
    yellowBottom: true,
  },
];

const ExploreServices = () => {
  const sliderRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;

      const isAtStart = slider.scrollLeft <= 0;

      const isAtEnd =
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 1;

      setShowLeft(!isAtStart);
      setShowRight(!isAtEnd);
    }
  };

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
    <section className="w-full py-8 sm:py-10 md:py-12">
      <div className="mx-auto w-full px-5 sm:px-10 md:px-12">

        {/* Heading */}
        <h2 className="mb-8 text-center text-[20px] font-medium text-[#252525] hover:scale-105 hover:text-pink-500 sm:text-[22px] md:mb-9 md:text-[24px]">
          Explore Services by Category
        </h2>

        {/* Categories */}
        <div className="relative flex items-center">

          {/* Left Arrow */}
          {showLeft && (
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous"
              className="absolute -left-3 top-[85px] z-30 flex cursor-pointer items-center justify-center text-[#222] sm:-left-5 md:-left-7"
            >
              <FaChevronLeft className="text-[22px] font-light" />
            </button>
          )}

          {/* Outer Container */}
          <div className="w-full overflow-hidden px-1">

            {/* Horizontal Slider */}
            <div
              ref={sliderRef}
              onScroll={handleScroll}
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
                <Link
                  to={category.path}
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
                    <div className="flex w-[180px] flex-col items-center">

                      {/* Stage Decor Image */}
                      <div className="relative mt-2 flex h-[180px] w-[180px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d1d5db] bg-[#f1f2f4] transition-transform duration-300 hover:scale-105 hover:brightness-110">

                        <img
                          src={category.image}
                          alt={category.name}
                          className="relative z-10 h-[126px] w-[126px] object-contain transition-transform duration-300 hover:scale-105 hover:brightness-130"
                        />

                      </div>

                      {/* Stage Decor Name */}
                      <p className="mt-3 whitespace-nowrap text-center text-[24px] font-medium text-[#222] transition-transform duration-300 hover:text-blue-500 hover:brightness-110">
                        {category.name}
                      </p>

                    </div>
                  ) : (
                    <>
                      {/* Normal Category Circle */}
                      <div className="relative flex h-[180px] w-[180px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d1d5db] bg-[#f1f2f4] transition-transform duration-300 hover:scale-105 hover:brightness-110">

                        <img
                          src={category.image}
                          alt={category.name}
                          className="relative z-10 h-[126px] w-[126px] object-contain transition-all duration-300 hover:scale-110 hover:brightness-110"
                        />

                        {/* Yellow Bottom */}
                        {category.yellowBottom && (
                          <div className="absolute bottom-0 left-0 h-[20px] w-full bg-[#f4b400]" />
                        )}

                      </div>

                      {/* Category Name */}
                      <p className="mt-3 whitespace-nowrap text-center text-[24px] font-medium text-[#222] transition-transform duration-300 hover:text-blue-500 hover:brightness-110">
                        {category.name}
                      </p>
                    </>
                  )}

                </Link>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          {showRight && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next"
              className="absolute -right-3 top-[85px] z-30 flex cursor-pointer items-center justify-center text-[#222] sm:-right-5 md:-right-7"
            >
              <FaChevronRight className="text-[22px] font-light" />
            </button>
          )}

        </div>
      </div>
    </section>
  );
};

export default ExploreServices;