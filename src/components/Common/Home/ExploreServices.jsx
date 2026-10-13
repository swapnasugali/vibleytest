import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  {
    name: "Photography",
    image:
      "https://res.cloudinary.com/porwmjke/image/upload/v1791787471/photography.png",
    path: "/services/1",
  },
  {
    name: "Catering",
    image:
      "https://res.cloudinary.com/porwmjke/image/upload/v1791787492/catering.png",
    path: "/services/2",
  },
  {
    name: "Venue booking",
    image:
      "https://res.cloudinary.com/porwmjke/image/upload/v1791787525/venue.png",
    path: "/services/3",
  },
  {
    name: "Stage Decor",
    image:
      "https://res.cloudinary.com/porwmjke/image/upload/v1791784132/stage.png",
    path: "/services/4",
    active: true,
  },
  {
    name: "DJ / Sound Sys",
    image:
      "https://res.cloudinary.com/porwmjke/image/upload/v1791787546/dj.png",
    path: "/services/5",
    yellowBottom: true,
  },
  {
    name: "DJ / Sound Sys",
    image:
      "https://res.cloudinary.com/porwmjke/image/upload/v1791787546/dj.png",
    path: "/services/5",
    yellowBottom: true,
  },
  {
    name: "DJ / Sound Sys",
    image:
      "https://res.cloudinary.com/porwmjke/image/upload/v1791787546/dj.png",
    path: "/services/5",
    yellowBottom: true,
  },
];

const ExploreServices = () => {
  const sliderRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [cardStep, setCardStep] = useState(0);
  const [direction, setDirection] = useState("right");

  const maxIndex = Math.max(0, categories.length - visibleCards);

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= maxIndex;

  // Responsive cards count.
  const updateLayout = useCallback(() => {
    const width = window.innerWidth;

    if (width < 640) {
      setVisibleCards(1);
    } else if (width < 768) {
      setVisibleCards(2);
    } else if (width < 1024) {
      setVisibleCards(3);
    } else if (width < 1280) {
      setVisibleCards(4);
    } else {
      setVisibleCards(5);
    }
  }, []);

  // Measure card width and gap.
  const measureCardStep = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const firstCard = slider.querySelector(".service-card");
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap =
      parseFloat(window.getComputedStyle(slider).columnGap) || 0;

    setCardStep(cardWidth + gap);
  }, []);

  useEffect(() => {
    updateLayout();

    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, [updateLayout]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    measureCardStep();

    const observer = new ResizeObserver(measureCardStep);
    observer.observe(slider);

    const firstCard = slider.querySelector(".service-card");
    if (firstCard) {
      observer.observe(firstCard);
    }

    window.addEventListener("resize", measureCardStep);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureCardStep);
    };
  }, [measureCardStep, visibleCards]);

  // Keep the current index valid after resizing.
  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  // Change direction only at the ends.
  useEffect(() => {
    if (isAtStart) {
      setDirection("right");
    } else if (isAtEnd) {
      setDirection("left");
    }
  }, [isAtStart, isAtEnd]);

  // Move one card only when an arrow is clicked.
  const handleNext = () => {
    if (direction !== "right" || isAtEnd) return;

    setCurrentIndex((index) => Math.min(index + 1, maxIndex));
  };

  const handlePrevious = () => {
    if (direction !== "left" || isAtStart) return;

    setCurrentIndex((index) => Math.max(index - 1, 0));
  };

  // Prevent manual wheel, swipe and drag scrolling.
  const preventManualScroll = (event) => {
    event.preventDefault();
  };

  const gapSize =
    typeof window !== "undefined" && window.innerWidth >= 1024
      ? 28
      : typeof window !== "undefined" && window.innerWidth >= 640
        ? 24
        : 20;

  const translateX = currentIndex * cardStep;

  return (
    <section className="w-full overflow-hidden py-8 sm:py-10 md:py-12">
      <div className="mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12">
        <h2 className="mb-8 text-center text-[20px] font-medium text-[#252525] transition-transform duration-300 hover:scale-105 hover:text-pink-500 sm:text-[22px] md:mb-9 md:text-[24px]">
          Explore Services by Category
        </h2>

        <div className="relative flex items-center">
          {/* LEFT BUTTON */}
          <button
            type="button"
            onClick={handlePrevious}
            disabled={direction !== "left" || isAtStart}
            aria-label="Previous services"
            className="
              absolute -left-2 top-1/2 z-30
              flex -translate-y-1/2 items-center justify-center
              text-[#222] transition-opacity duration-200
              disabled:cursor-not-allowed disabled:opacity-30
              sm:-left-4 md:-left-6 lg:-left-7
            "
          >
            <FaChevronLeft className="cursor-pointer text-[20px] sm:text-[22px]" />
          </button>

          {/* SERVICES VIEWPORT */}
          <div className="w-full min-w-0 overflow-hidden px-1">
            <div
              ref={sliderRef}
              onWheel={preventManualScroll}
              onTouchMove={preventManualScroll}
              onDragStart={preventManualScroll}
              className="flex flex-nowrap select-none pb-4"
              style={{
                gap: `${gapSize}px`,
                transform: `translateX(-${translateX}px)`,
                transition: "transform 450ms ease-in-out",
                willChange: "transform",
                touchAction: "pan-y",
              }}
            >
              {categories.map((category, index) => (
                <Link
                  to={category.path}
                  key={`${category.name}-${index}`}
                  draggable={false}
                  className="service-card flex min-w-0 shrink-0 flex-col items-center"
                  style={{
                    width: `calc((100% - ${
                      (visibleCards - 1) * gapSize
                    }px) / ${visibleCards})`,
                  }}
                >
                  {/* SERVICE IMAGE */}
                  <div
                    className={`
                      relative flex h-[145px] w-[145px] shrink-0
                      items-center justify-center overflow-hidden
                      rounded-full border border-[#d1d5db]
                      bg-[#f1f2f4] transition-transform duration-300
                      hover:scale-105 hover:brightness-110
                      sm:h-[160px] sm:w-[160px]
                      md:h-[170px] md:w-[170px]
                      lg:h-[180px] lg:w-[180px]
                      ${category.active ? "mt-2" : ""}
                    `}
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      draggable={false}
                      className="
                        pointer-events-none relative z-10
                        h-[105px] w-[105px] object-contain
                        transition-transform duration-300
                        sm:h-[112px] sm:w-[112px]
                        md:h-[118px] md:w-[118px]
                        lg:h-[126px] lg:w-[126px]
                      "
                    />

                    {category.yellowBottom && (
                      <div className="pointer-events-none absolute bottom-0 left-0 h-[16px] w-full bg-[#f4b400] sm:h-[18px] lg:h-[20px]" />
                    )}
                  </div>

                  {/* CATEGORY NAME */}
                  <p className="mt-3 max-w-full truncate text-center text-[17px] font-medium text-[#222] transition-colors duration-300 hover:text-blue-500 sm:text-[20px] md:text-[22px] lg:text-[24px]">
                    {category.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <button
            type="button"
            onClick={handleNext}
            disabled={direction !== "right" || isAtEnd}
            aria-label="Next services"
            className="
              absolute -right-2 top-1/2 z-30
              flex -translate-y-1/2 items-center justify-center
              text-[#222] transition-opacity duration-200
              disabled:cursor-not-allowed disabled:opacity-30
              sm:-right-4 md:-right-6 lg:-right-7
            "
          >
            <FaChevronRight className="cursor-pointer text-[20px] sm:text-[22px]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreServices;
