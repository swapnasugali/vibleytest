import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronRight,
} from "react-icons/fa";

import provider1 from "../../../assets/provider1.png";
import provider2 from "../../../assets/provider2.png";
import provider3 from "../../../assets/provider3.png";

const providers = [
  {
    category: "Photography",
    name: "ARTLANE STUDIO",
    location: "Kondapalli, Hyderabad",
    image: provider1,
    offer: "STARTING FROM ₹25,000",
    portfolioPath: "/photography-portfolio",
  },
  {
    category: "Catering",
    name: "MANGALAM CATERERS",
    location: "Kukatpally, Hyderabad",
    image: provider2,
    offer: "BEST PRICES PER PLATE",
    portfolioPath: "/catering-portfolio",
  },
  {
    category: "Lighting",
    name: "ELITE LIGHTING SERVICES",
    location: "Madhapur, Hyderabad",
    image: provider3,
    offer: "COMBO WITH DJ SERVICES",
    portfolioPath: "/lighting-portfolio",
  },
  {
    category: "Lighting",
    name: "ELITE LIGHTING SERVICES",
    location: "Madhapur, Hyderabad",
    image: provider3,
    offer: "COMBO WITH DJ SERVICES",
    portfolioPath: "/lighting-portfolio",
  },
  {
    category: "Lighting",
    name: "ELITE LIGHTING SERVICES",
    location: "Madhapur, Hyderabad",
    image: provider3,
    offer: "COMBO WITH DJ SERVICES",
    portfolioPath: "/lighting-portfolio",
  },
];

const FeaturedProviders = () => {
  const sliderRef = useRef(null);

  // Arrow visibility
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
      const card = sliderRef.current.children[0];
      const gap = 28;

      sliderRef.current.scrollBy({
        left: -(card.offsetWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.children[0];
      const gap = 28;

      sliderRef.current.scrollBy({
        left: card.offsetWidth + gap,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-14 xl:px-16">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Heading */}
        <h2 className="mb-7 text-[19px] font-medium text-[#252525] sm:text-[22px] md:mb-8 md:text-[25px] hover:text-pink-500 hover:scale-105">
          Featured Service Providers
        </h2>

        <div className="relative">

          {/* Left Arrow */}
          {showLeft && (
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous"
              className="absolute -left-3 top-[42%] z-30 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#f2676d] text-white shadow-sm sm:-left-4 md:-left-7 lg:-left-10"
            >
              <FaArrowLeft className="text-[10px]" />
            </button>
          )}

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
              pb-3
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              lg:gap-7
            "
          >
            {providers.map((provider, index) => (
              <div
                key={index}
                className="
                  w-full
                  shrink-0
                  overflow-hidden
                  border
                  border-[#dedede]
                  bg-white
                  sm:w-[calc((100%-24px)/2)]
                  lg:w-[calc((100%-56px)/3)]
                "
              >

                {/* Image Area */}
                <div className="relative aspect-[1.75/1] w-full overflow-hidden bg-[#f2f2f2] hover:scale-105 hover:brightness-110 transition-transform duration-300">

                  {/* Provider Image */}
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="h-full w-full object-cover object-center"
                  />

                  {/* Category */}
                  <div className="absolute left-2 top-2 z-10 flex h-[25px] w-[112px] items-center justify-center rounded-[4px] border border-white/50 bg-[rgba(39,39,39,0.37)]">
                    <span className="text-[10px] font-semibold text-white sm:text-[11px] hover:text-blue-500 hover:scale-105 hover:brightness-130 transition-transform duration-300">
                      {provider.category}
                    </span>
                  </div>

                  {/* Portfolio */}
                  <Link
                    to={provider.portfolioPath}
                    className="absolute right-3 top-3 z-10 flex cursor-pointer items-center gap-[2px] text-[10px] font-medium text-[#f4b400]"
                  >
                    <span>Portfolio</span>

                    <span className="flex items-center -space-x-[3px] text-white">
                      <FaChevronRight className="text-[8px]" />
                      <FaChevronRight className="text-[8px]" />
                    </span>
                  </Link>

                  {/* Bottom Offer */}
                  <div className="absolute bottom-0 left-0 z-10">
                    <div className="relative flex h-[30px] items-center bg-[#272727]/90 px-3 pr-6">
                      <span className="relative z-10 whitespace-nowrap text-[10px] font-medium uppercase text-white hover:text-green-500">
                        {provider.offer}
                      </span>

                      <div className="absolute -right-[14px] top-0 h-[30px] w-[28px] rounded-tr-full bg-[#272727]/90" />
                    </div>
                  </div>

                </div>

                {/* Provider Details */}
                <div className="flex items-center justify-between gap-3 px-3 py-3 sm:px-4 sm:py-4">

                  <div className="min-w-0">
                    <h3 className="text-[18px] font-medium text-black sm:text-[20px] md:text-[22px] hover:text-blue-500">
                      {provider.name}
                    </h3>

                    <p className="mt-1 text-[11px] font-normal text-black sm:text-[12px] md:text-[13px] hover:text-yellow-500">
                      {provider.location}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="h-[45px] w-[120px] shrink-0 cursor-pointer rounded-[4px] bg-[#A63A2A] text-[14px] font-semibold text-white transition hover:bg-[#8f3023] sm:w-[130px] sm:text-[15px] hover:bg-blue-500 hover:text-red-500 hover:scale-105 hover:brightness-110 transition-transform duration-300"
                  >
                    BOOK NOW
                  </button>

                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {showRight && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next"
              className="absolute -right-3 top-[42%] z-30 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#f2676d] text-white shadow-sm sm:-right-4 md:-right-7 lg:-right-10"
            >
              <FaArrowRight className="text-[10px]" />
            </button>
          )}

        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;