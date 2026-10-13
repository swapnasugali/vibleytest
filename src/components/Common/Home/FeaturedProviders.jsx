import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronRight,
} from "react-icons/fa";

const providers = [
  {
    category: "Photography",
    name: "ARTLANE STUDIO",
    location: "Kondapalli, Hyderabad",
    image:
      "https://res.cloudinary.com/porwmjke/image/upload/v1791787040/provider1.png",
    offer: "STARTING FROM ₹25,000",
    portfolioPath: "/portfolio/photography/photo001",
  },
  {
    category: "Catering",
    name: "MANGALAM CATERERS",
    location: "Kukatpally, Hyderabad",
    image:
      "https://res.cloudinary.com/porwmjke/image/upload/v1791787063/provider2.png",
    offer: "BEST PRICES PER PLATE",
    portfolioPath: "/portfolio/catering/catering001",
  },
  {
    category: "Lighting",
    name: "ELITE LIGHTING SERVICES",
    location: "Madhapur, Hyderabad",
    image:
      "https://res.cloudinary.com/porwmjke/image/upload/v1791787098/provider3.png",
    offer: "COMBO WITH DJ SERVICES",
    portfolioPath: "/portfolio/lighting/lighting001",
  },
  {
    category: "Lighting",
    name: "ELITE LIGHTING SERVICES",
    location: "Madhapur, Hyderabad",
    image:
      "https://res.cloudinary.com/porwmjke/image/upload/v1791787098/provider3.png",
    offer: "COMBO WITH DJ SERVICES",
    portfolioPath: "/portfolio/lighting/lighting001",
  },
  {
    category: "Lighting",
    name: "ELITE LIGHTING SERVICES",
    location: "Madhapur, Hyderabad",
    image:
      "https://res.cloudinary.com/porwmjke/image/upload/v1791787098/provider3.png",
    offer: "COMBO WITH DJ SERVICES",
    portfolioPath: "/portfolio/lighting/lighting001",
  },
];

const FeaturedProviders = () => {
  const sliderRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardStep, setCardStep] = useState(0);
  const [direction, setDirection] = useState("right");

  const maxIndex = Math.max(0, providers.length - visibleCards);

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= maxIndex;

  // Update visible cards according to screen size.
  const updateLayout = useCallback(() => {
    const width = window.innerWidth;

    if (width < 640) {
      setVisibleCards(1);
    } else if (width < 1024) {
      setVisibleCards(2);
    } else {
      setVisibleCards(3);
    }
  }, []);

  useEffect(() => {
    updateLayout();

    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, [updateLayout]);

  // Measure the actual card width and gap.
  const measureCardStep = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const firstCard = slider.querySelector(".provider-card");
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const styles = window.getComputedStyle(slider);
    const gap = parseFloat(styles.columnGap) || 0;

    setCardStep(cardWidth + gap);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    measureCardStep();

    const observer = new ResizeObserver(() => {
      measureCardStep();
    });

    observer.observe(slider);

    const firstCard = slider.querySelector(".provider-card");

    if (firstCard) {
      observer.observe(firstCard);
    }

    window.addEventListener("resize", measureCardStep);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureCardStep);
    };
  }, [measureCardStep]);

  // Keep the index within bounds when screen size changes.
  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  // Switch direction only when reaching either end.
  useEffect(() => {
    if (isAtStart) {
      setDirection("right");
    } else if (isAtEnd) {
      setDirection("left");
    }
  }, [isAtStart, isAtEnd]);

  // Move one card per arrow click.
  const handleNext = () => {
    if (direction !== "right" || isAtEnd) return;

    setCurrentIndex((index) => Math.min(index + 1, maxIndex));
  };

  const handlePrevious = () => {
    if (direction !== "left" || isAtStart) return;

    setCurrentIndex((index) => Math.max(index - 1, 0));
  };

  // Block manual wheel, swipe and drag movement.
  const preventManualScroll = (event) => {
    event.preventDefault();
  };

  const translateX = currentIndex * cardStep;

  return (
    <section className="w-full overflow-hidden px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-14 xl:px-16">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Heading */}
        <h2 className="mb-7 text-[19px] font-medium text-[#252525] transition-all duration-300 hover:scale-105 hover:text-pink-500 sm:text-[22px] md:mb-8 md:text-[25px]">
          Featured Service Providers
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={handlePrevious}
            disabled={direction !== "left" || isAtStart}
            aria-label="Previous"
            className={`absolute -left-2 top-1/2 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#f2676d] text-white shadow-sm transition-opacity duration-200 sm:-left-4 md:-left-7 lg:-left-10 ${
              direction === "left" && !isAtStart
                ? "cursor-pointer opacity-100"
                : "cursor-not-allowed opacity-40"
            }`}
          >
            <FaArrowLeft className="text-[10px]" />
          </button>

          {/* Slider Viewport */}
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              onWheel={preventManualScroll}
              onTouchMove={preventManualScroll}
              onDragStart={preventManualScroll}
              className="
                flex flex-nowrap gap-5 select-none pb-3
                sm:gap-6 lg:gap-7
              "
              style={{
                transform: `translateX(-${translateX}px)`,
                transition: "transform 450ms ease-in-out",
                willChange: "transform",
                touchAction: "pan-y",
              }}
            >
              {providers.map((provider, index) => (
                <div
                  key={`${provider.name}-${index}`}
                  className="
                    provider-card
                    min-w-0 shrink-0 overflow-hidden
                    border border-[#dedede] bg-white
                  "
                  style={{
                    width: `calc((100% - ${
                      (visibleCards - 1) *
                      (window.innerWidth >= 1024
                        ? 28
                        : window.innerWidth >= 640
                          ? 24
                          : 20)
                    }px) / ${visibleCards})`,
                  }}
                >
                  {/* Image Area */}
                  <div className="relative aspect-[1.75/1] w-full overflow-hidden bg-[#f2f2f2]">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      draggable={false}
                      className="pointer-events-none h-full w-full object-cover object-center transition-transform duration-300"
                    />

                    {/* Category */}
                    <div className="absolute left-2 top-2 z-10 flex h-[25px] w-[112px] max-w-[calc(100%-100px)] items-center justify-center rounded-[4px] border border-white/50 bg-[rgba(39,39,39,0.37)]">
                      <span className="truncate text-[10px] font-semibold text-white sm:text-[11px]">
                        {provider.category}
                      </span>
                    </div>

                    {/* Portfolio */}
                    <Link
                      to={provider.portfolioPath}
                      draggable={false}
                      className="
                        absolute right-2 top-3 z-10
                        flex cursor-pointer items-center gap-[2px]
                        text-[9px] font-medium text-[#f4b400]
                        transition-all duration-300
                        hover:scale-105 hover:text-white
                        sm:right-3 sm:text-[10px]
                      "
                    >
                      <span>Portfolio</span>

                      <span className="flex items-center -space-x-[3px] text-white">
                        <FaChevronRight className="text-[7px]" />
                        <FaChevronRight className="text-[7px]" />
                      </span>
                    </Link>

                    {/* Bottom Offer */}
                    <div className="absolute bottom-0 left-0 z-10 max-w-[90%]">
                      <div className="relative flex h-[30px] items-center bg-[#272727]/90 px-3 pr-6">
                        <span className="relative z-10 truncate whitespace-nowrap text-[9px] font-medium uppercase text-white sm:text-[10px]">
                          {provider.offer}
                        </span>

                        <div className="absolute -right-[14px] top-0 h-[30px] w-[28px] rounded-tr-full bg-[#272727]/90" />
                      </div>
                    </div>
                  </div>

                  {/* Provider Details */}
                  <div className="flex min-w-0 items-center justify-between gap-2 px-3 py-3 sm:gap-3 sm:px-4 sm:py-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-[16px] font-medium text-black sm:text-[20px] md:text-[22px]">
                        {provider.name}
                      </h3>

                      <p className="mt-1 truncate text-[10px] font-normal text-black sm:text-[12px] md:text-[13px]">
                        {provider.location}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="
                        h-[40px] w-[95px] shrink-0
                        cursor-pointer rounded-[4px]
                        bg-[#A63A2A] text-[11px] font-semibold text-white
                        transition-all duration-300
                        hover:scale-105 hover:brightness-110
                        sm:h-[45px] sm:w-[120px] sm:text-[14px]
                        md:w-[130px] md:text-[15px]
                      "
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={handleNext}
            disabled={direction !== "right" || isAtEnd}
            aria-label="Next"
            className={`absolute -right-2 top-1/2 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#f2676d] text-white shadow-sm transition-opacity duration-200 sm:-right-4 md:-right-7 lg:-right-10 ${
              direction === "right" && !isAtEnd
                ? "cursor-pointer opacity-100"
                : "cursor-not-allowed opacity-40"
            }`}
          >
            <FaArrowRight className="text-[10px]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;
