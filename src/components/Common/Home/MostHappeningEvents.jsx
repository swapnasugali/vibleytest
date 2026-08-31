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
  return (
    <section className="w-full bg-[#f7f7f7] px-5 py-8 sm:px-8 md:px-12 md:py-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Heading + Filter */}
        <div className="relative mb-7 flex min-h-[40px] items-center justify-center">
          <h2 className="text-center text-[19px] font-medium text-[#344054] sm:text-[22px] md:text-[25px]">
            Most Happening Event Organizers
          </h2>

          {/* Desktop Filter */}
          <button className="absolute right-0 hidden items-center gap-2 text-[10px] font-medium tracking-wide text-[#222] sm:flex sm:text-[11px]">
            <span className="flex flex-col items-end gap-[3px]">
              <span className="block h-[1px] w-[14px] bg-[#222]" />
              <span className="block h-[1px] w-[10px] bg-[#222]" />
              <span className="block h-[1px] w-[6px] bg-[#222]" />
            </span>

            <span>FILTER BY</span>
          </button>
        </div>

        {/* Mobile Filter */}
        <div className="mb-5 flex justify-end sm:hidden">
          <button className="flex items-center gap-2 text-[10px] font-medium tracking-wide text-[#222]">
            <span className="flex flex-col items-end gap-[3px]">
              <span className="block h-[1px] w-[14px] bg-[#222]" />
              <span className="block h-[1px] w-[10px] bg-[#222]" />
              <span className="block h-[1px] w-[6px] bg-[#222]" />
            </span>

            <span>FILTER BY</span>
          </button>
        </div>

        {/* Cards Area */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            aria-label="Previous"
            className="
              absolute
              -left-3
              top-[42%]
              z-30
              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-[#f2676d]
              text-white
              shadow-sm
              sm:-left-5
              md:-left-7
              lg:-left-10
            "
          >
            <FaArrowLeft className="text-[10px]" />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {organizers.map((organizer, index) => (
              <div key={index} className="min-w-0">
                {/* Image Area */}
                <div className="relative aspect-[1.85/1] w-full">
                  {/* Main Event Image */}
                  <div className="h-full w-full overflow-hidden">
                    <img
                      src={organizer.image}
                      alt={organizer.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  {/* Organizer Logo - Top Left */}
                  <div
                    className="
                      absolute
                      -left-2
                      -top-2
                      z-30
                      flex
                      h-[42px]
                      w-[42px]
                      items-center
                      justify-center
                      rounded-[8px]
                      bg-white
                      p-1.5
                      shadow-[0_2px_18px_rgba(255,255,255,0.95)]

                      sm:h-[46px]
                      sm:w-[46px]

                      md:h-[50px]
                      md:w-[50px]
                    "
                  >
                    <img
                      src={organizer.logo}
                      alt={`${organizer.name} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Event Count */}
                  <span
                    className="
                      absolute
                      right-0
                      top-2
                      z-10
                      bg-black/65
                      px-3
                      py-1
                      text-[10px]
                      font-medium
                      text-[#f4b400]
                      sm:text-[11px]
                    "
                  >
                    {organizer.events}
                  </span>

                  {/* Organizer Name Banner */}
                  <div
                    className="
                      absolute
                      -left-1
                      bottom-0
                      z-20
                      h-[42px]
                      w-[68%]
                      min-w-[190px]
                      sm:h-[44px]
                    "
                  >
                    {/* Brown/Red Curved Background */}
                    <svg
                      viewBox="0 0 1000 100"
                      preserveAspectRatio="none"
                      className="absolute inset-0 h-full w-full"
                    >
                      <path
                        d="
                          M 22 0
                          H 780
                          C 820 0 845 4 885 42
                          L 1000 100
                          H 22
                          C 10 100 0 90 0 76
                          V 24
                          C 0 10 10 0 22 0
                          Z
                        "
                        fill="#A63A2A"
                      />
                    </svg>

                    {/* Banner Content */}
                    <div className="relative z-10 flex h-full items-center gap-2 px-5">
                      {/* Yellow Star + Tick */}
                      <span
                        className="
                          flex
                          h-[16px]
                          w-[16px]
                          shrink-0
                          items-center
                          justify-center
                          bg-[#F4B400]
                          [clip-path:polygon(50%_0%,62%_22%,85%_15%,78%_38%,100%_50%,78%_62%,85%_85%,62%_78%,50%_100%,38%_78%,15%_85%,22%_62%,0%_50%,22%_38%,15%_15%,38%_22%)]
                        "
                      >
                       <span className="relative flex h-[16px] w-[16px] items-center justify-center bg-[#F4B400]">
                        <FaCheck className="text-[8px] text-[#A63A2A]" />
                        </span>
                      </span>

                      {/* Organizer Name */}
                      <span className="whitespace-nowrap text-[14px] font-medium text-white sm:text-[15px]">
                        {organizer.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-2 text-[11px] leading-4 text-[#000000] sm:text-[12px]">
                  {organizer.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            aria-label="Next"
            className="
              absolute
              -right-3
              top-[42%]
              z-30
              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-[#f2676d]
              text-white
              shadow-sm
              sm:-right-5
              md:-right-7
              lg:-right-10
            "
          >
            <FaArrowRight className="text-[10px]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MostHappeningEvents;