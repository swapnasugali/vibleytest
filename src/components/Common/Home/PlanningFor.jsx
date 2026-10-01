import React from "react";

import wedding from "../../../assets/wedding.png";
import corporate from "../../../assets/corporate.png";
import concert from "../../../assets/concert.png";
import family from "../../../assets/family.png";
import birthday from "../../../assets/birthday.png";
import theme from "../../../assets/theme.png";
import social from "../../../assets/social.png";

function PlanningFor() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-gradient-to-r
        from-[#25000f]
        via-[#1f1c2a]
        to-[#10243a]
        px-2
        py-3
        sm:px-4
        sm:py-4
        md:px-8
        md:py-8
      "
    >
      <h2 className="mb-5 text-center text-[15px] font-medium text-white transition-transform duration-300 hover:scale-105 hover:text-pink-500 sm:text-[16px] md:mb-6 md:text-[18px]">
        What Are You Planning For <span>?</span>
      </h2>

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1400px]
          grid-cols-1
          gap-3

          sm:grid-cols-2

          md:aspect-[2/1]
          md:grid-cols-[0.92fr_1fr_1.03fr]
          md:gap-[6px]
        "
      >

        {/* LEFT */}
        <div className="flex min-w-0 flex-col">

          <EventCard
            image={wedding}
            title="Weddings"
            className="aspect-[4/3] sm:aspect-[4/3] md:h-[50%] md:aspect-auto"
          />

          <div className="h-[6px] shrink-0 bg-[#ffb400] md:h-[7px]" />

          <EventCard
            image={family}
            title="Family / Get Togethers"
            className="aspect-[4/3] md:flex-1 md:aspect-auto"
          />

        </div>

        {/* CENTER */}
        <div className="flex min-w-0 flex-col">

          <EventCard
            image={corporate}
            title="Mice / Corporate Events"
            className="aspect-[16/10] md:h-[60%] md:aspect-auto"
          />

          <div className="h-[10px] shrink-0 bg-[#d83b3b] md:h-[18px]" />

          <EventCard
            image={birthday}
            title="Birthdays / Anniversaries"
            className="aspect-[16/9] md:flex-1 md:aspect-auto"
          />

        </div>

        {/* RIGHT */}
        <div className="flex min-w-0 flex-col sm:col-span-2 md:col-span-1">

          <EventCard
            image={concert}
            title="Concerts / DJ Nights"
            className="aspect-[16/9] md:h-[42%] md:aspect-auto"
          />

          <div className="mt-[6px] grid min-h-0 flex-1 grid-cols-2 gap-[6px]">

            {/* Theme */}
            <div className="flex min-h-0 min-w-0 flex-col">

              <div className="h-[10px] shrink-0 bg-[#ffb400] md:h-[16px]" />

              <EventCard
                image={theme}
                title={
                  <>
                    Theme <br /> Parties
                  </>
                }
                className="aspect-[3/4] md:min-h-0 md:flex-1 md:aspect-auto"
                small
              />

            </div>

            {/* Social */}
            <div className="flex min-h-0 min-w-0 flex-col">

              <div className="h-[10px] shrink-0 md:h-[16px]" />

              <EventCard
                image={social}
                title={
                  <>
                    Social <br /> Events
                  </>
                }
                className="aspect-[3/4] md:min-h-0 md:flex-1 md:aspect-auto"
                small
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function EventCard({
  image,
  title,
  className = "",
  small = false,
}) {
  return (
    <div
      className={`
        relative
        w-full
        min-w-0
        overflow-hidden
        transition-transform
        duration-700
        hover:scale-[1.02]
        hover:brightness-125
        ${className}
      `}
    >
      <img
        src={image}
        alt="Event"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute bottom-0 left-0 w-full bg-black/55 px-2 py-2 text-center">
        <p
          className={`font-semibold text-white transition-all duration-300 hover:scale-105 hover:text-blue-500 ${
            small
              ? "text-[11px] sm:text-[13px]"
              : "text-[13px] sm:text-[15px] md:text-[17px]"
          }`}
        >
          • {title}
        </p>
      </div>
    </div>
  );
}

export default PlanningFor;