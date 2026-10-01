import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";

import event1 from "../../../assets/event1.png";
import event2 from "../../../assets/event2.png";
import event3 from "../../../assets/event3.png";

import vibelyLogo from "../../../assets/vibely-logo.png";
import vajraLogo from "../../../assets/vajra-logo.png";
import idealLogo from "../../../assets/ideal-logo.png";

const organizers = [
  {
    name: "Vibely Events",
    image: event1,
    logo: vibelyLogo,
    events: "220+ events",
    description: "Popular for Corporate, Wedding Events",
  },
  {
    name: "Vajra Events",
    image: event2,
    logo: vajraLogo,
    events: "30+ events",
    description: "Popular for Movie, Entertainment Programs",
  },
  {
    name: "Ideal Events",
    image: event3,
    logo: idealLogo,
    events: "220+ events",
    description: "Popular for Wedding, Birthday, Annual Ceremonies",
  },
  {
    name: "Vajra Events",
    image: event2,
    logo: vajraLogo,
    events: "30+ events",
    description: "Popular for Movie, Entertainment Programs",
  },
];

const MostHappeningEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, organizers.length - visibleCards);

    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, currentIndex]);

  const maxIndex = Math.max(0, organizers.length - visibleCards);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full overflow-hidden bg-[#f7f7f7] px-4 py-8 sm:px-6 sm:py-9 md:px-10 md:py-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Heading + Filter */}
        <div className="relative mb-7 flex min-h-[44px] items-center justify-center">

          <h2 className="px-16 text-center text-[18px] font-medium leading-6 text-[#344054] transition-all duration-300 hover:scale-105 hover:text-pink-500 sm:px-20 sm:text-[22px] md:px-0 md:text-[25px]">
            Most Happening Event Organizers
          </h2>

          {/* Filter */}
          <button
            type="button"
            className="absolute right-0 flex items-center gap-2 text-[9px] font-medium tracking-wide text-[#222] sm:text-[11px]"
          >
            <span className="flex h-[14px] w-[14px] flex-col items-center justify-center gap-[3px]">
              <span className="block h-[1px] w-[14px] bg-[#222]" />
              <span className="block h-[1px] w-[9px] bg-[#222]" />
              <span className="block h-[1px] w-[4px] bg-[#222]" />
            </span>

            <span>FILTER BY</span>
          </button>
        </div>

        {/* Cards */}
        <div className="relative">

          {/* Left Arrow */}
          {currentIndex > 0 && (
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous"
              className="absolute -left-1 top-1/2 z-30 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#f2676d] text-white shadow-sm sm:-left-4 md:-left-7 lg:-left-10"
            >
              <FaArrowLeft className="text-[10px]" />
            </button>
          )}

          {/* Slider */}
          <div className="overflow-hidden px-3 pt-5 sm:px-2">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out sm:gap-6 md:gap-7"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% / ${visibleCards}) - ${currentIndex} * ${visibleCards === 1 ? "16px" : visibleCards === 2 ? "24px" : "28px"}))`,
              }}
            >
              {organizers.map((organizer, index) => (
                <div
                  key={index}
                  className="
                    min-w-0
                    flex-[0_0_100%]

                    sm:flex-[0_0_calc((100%-24px)/2)]

                    lg:flex-[0_0_calc((100%-56px)/3)]
                  "
                >
                  {/* Image */}
                  <div className="relative aspect-[1.85/1] w-full transition-transform duration-300 hover:scale-[1.02] hover:brightness-130">

                    <div className="h-full w-full overflow-hidden">
                      <img
                        src={organizer.image}
                        alt={organizer.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    {/* Logo */}
                    <div className="absolute -left-3 -top-3 z-40 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-white p-2 shadow-[6px_6px_12px_rgba(255,255,255,0.9)] transition-transform duration-300 hover:scale-105 hover:brightness-110 sm:h-[60px] sm:w-[60px] md:h-[62px] md:w-[62px]">
                      <img
                        src={organizer.logo}
                        alt={`${organizer.name} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    {/* Event Count */}
                    <span className="absolute right-0 top-2 z-10 bg-black/65 px-2 py-1 text-[9px] font-medium text-[#f4b400] sm:px-3 sm:text-[10px]">
                      {organizer.events}
                    </span>

                    {/* Name Banner */}
                    <div className="absolute bottom-0 -left-3 z-20 h-[43px] w-[78%] min-w-0 sm:h-[46px] sm:w-[72%] sm:min-w-[200px]">

                      <svg
                        viewBox="0 0 1000 100"
                        preserveAspectRatio="none"
                        className="absolute inset-0 h-full w-full"
                      >
                        <path
                          d="
                            M 18 0
                            H 760
                            C 800 0 825 8 855 20
                            L 1000 100
                            H 18
                            C 8 100 0 92 0 80
                            V 20
                            C 0 8 8 0 18 0
                            Z
                          "
                          fill="#c0321c"
                        />
                      </svg>

                      <div className="relative z-10 flex h-full items-center gap-2 px-4 sm:px-5">

                        <span className="relative flex h-[18px] w-[18px] shrink-0 items-center justify-center sm:h-[20px] sm:w-[20px]">
                          <svg
                            viewBox="0 0 24 24"
                            className="absolute inset-0 h-full w-full"
                          >
                            <path
                              d="
                                M12 1.5
                                L14.4 7.1
                                L20.5 5.5
                                L18.9 11.6
                                L24 15
                                L18.2 17.5
                                L19.5 23.5
                                L13.8 21.2
                                L12 24
                                L10.2 21.2
                                L4.5 23.5
                                L5.8 17.5
                                L0 15
                                L5.1 11.6
                                L3.5 5.5
                                L9.6 7.1
                                Z
                              "
                              fill="#ffbe0c"
                            />
                          </svg>

                          <FaCheck className="relative z-10 text-[7px] text-[#A63A2A]" />
                        </span>

                        <span className="min-w-0 truncate text-[12px] font-medium text-white sm:text-[15px]">
                          {organizer.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-2 h-auto min-h-[21px] w-full truncate text-[11px] font-medium leading-4 text-black transition-colors hover:text-blue-500 sm:text-[12px]">
                    {organizer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          {currentIndex < maxIndex && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next"
              className="absolute -right-1 top-1/2 z-30 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#f2676d] text-white shadow-sm sm:-right-4 md:-right-7 lg:-right-10"
            >
              <FaArrowRight className="text-[10px]" />
            </button>
          )}

        </div>
      </div>
    </section>
  );
};

export default MostHappeningEvents;