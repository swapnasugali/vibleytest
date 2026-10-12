import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleRight,
} from "react-icons/fa";

// =====================================================
// FEATURED EXPERT DATA
// =====================================================

const featuredExpertsData = {
  // ===================================================
  // PHOTOGRAPHY
  // ===================================================

  1: {
    headingFirst: "Authentic",
    headingSecond: "Photography",
    headingEnd: "Experts",

    experts: [
      {
        id: 101,
        category: "WEDDING",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791777374/photo041.jpg",
        label: "CANDID WEDDING MOMENTS",
        name: "ARTLANE STUDIO",
        location: "Kondapur, Hyderabad",

        // NEW PORTFOLIO ID
        portfolioId: 101,
      },

      {
        id: 102,
        category: "PRE WEDDING",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791777374/photo042.jpg",
        label: "BEAUTIFUL PRE WEDDING",
        name: "PIXEL STORIES",
        location: "Kukatpally, Hyderabad",

        // NEW PORTFOLIO ID
        portfolioId: 102,
      },

      {
        id: 103,
        category: "CANDID",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791777374/photo043.jpg",
        label: "CREATIVE PHOTOGRAPHY",
        name: "CLICK ART STUDIO",
        location: "Manikonda, Hyderabad",

        // NEW PORTFOLIO ID
        portfolioId: 103,
      },
    ],
  },

  // ===================================================
  // CATERING
  // ===================================================

  2: {
    headingFirst: "Authentic",
    headingSecond: "Meat & Grill",
    headingEnd: "Experts",

    experts: [
      {
        id: 201,
        category: "VEG / NON VEG",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791777348/catering041.png",
        label: "CUSTOMIZED MENU OPTIONS",
        name: "BABU KHAN CATERERS",
        location: "BHEL, Hyderabad",

        // NEW PORTFOLIO ID
        portfolioId: 201,
      },

      {
        id: 202,
        category: "VEG / NON VEG",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791777348/catering042.png",
        label: "TASTE IN EVERY SERVE",
        name: "RAJA BAB CATERING",
        location: "Nizampet, Hyderabad",

        // NEW PORTFOLIO ID
        portfolioId: 202,
      },

      {
        id: 203,
        category: "VEG / NON VEG",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791777348/catering043.png",
        label: "SEA FOOD SPECIALISTS",
        name: "SWACHH CATERERS",
        location: "Manikonda, Hyderabad",

        // NEW PORTFOLIO ID
        portfolioId: 203,
      },
    ],
  },

  // ===================================================
  // EVENT DECOR
  // ===================================================

  3: {
    headingFirst: "Beautiful",
    headingSecond: "Event Decor",
    headingEnd: "Experts",

    experts: [
      {
        id: 301,
        category: "WEDDING DECOR",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791777464/event041.jpg",
        label: "ELEGANT EVENT DECOR",
        name: "ROYAL DECORS",
        location: "Kondapur, Hyderabad",

        // NEW PORTFOLIO ID
        portfolioId: 301,
      },

      {
        id: 302,
        category: "FLORAL DECOR",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791777464/event042.jpg",
        label: "BEAUTIFUL FLORAL DESIGNS",
        name: "FLOWER EVENTS",
        location: "Kukatpally, Hyderabad",

        // NEW PORTFOLIO ID
        portfolioId: 302,
      },

      {
        id: 303,
        category: "EVENT DECOR",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791777464/event043.jpg",
        label: "PREMIUM EVENT DECOR",
        name: "ELITE DECORS",
        location: "Manikonda, Hyderabad",

        // NEW PORTFOLIO ID
        portfolioId: 303,
      },
    ],
  },

  // ===================================================
  // STAGE DECOR
  // ===================================================

  4: {
    headingFirst: "Premium",
    headingSecond: "Stage Decor",
    headingEnd: "Experts",

    experts: [
      {
        id: 401,
        category: "WEDDING STAGE",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791777491/stage041.jpg",
        label: "PREMIUM WEDDING STAGE",
        name: "ROYAL STAGE DECORS",
        location: "Kondapur, Hyderabad",

        // NEW PORTFOLIO ID
        portfolioId: 401,
      },

      {
        id: 402,
        category: "FLORAL STAGE",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791777491/stage042.jpg",
        label: "BEAUTIFUL FLORAL STAGE",
        name: "FLOWER STAGE EVENTS",
        location: "Kukatpally, Hyderabad",

        // NEW PORTFOLIO ID
        portfolioId: 402,
      },

      {
        id: 403,
        category: "TRADITIONAL",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791777491/stage043.jpg",
        label: "TRADITIONAL STAGE DECOR",
        name: "MANGALAM STAGES",
        location: "Manikonda, Hyderabad",

        // NEW PORTFOLIO ID
        portfolioId: 403,
      },
    ],
  },

  // ===================================================
  // DJ & SOUND
  // ===================================================

  5: {
    headingFirst: "Professional",
    headingSecond: "DJ & Sound",
    headingEnd: "Experts",

    experts: [
      {
        id: 501,
        category: "DJ",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791777403/dj041.jpg",
        label: "PROFESSIONAL DJ SERVICES",
        name: "DJ BEATS",
        location: "Kondapur, Hyderabad",

        // NEW PORTFOLIO ID
        portfolioId: 501,
      },

      {
        id: 502,
        category: "LIVE MUSIC",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791777403/dj042.jpg",
        label: "LIVE MUSIC AVAILABLE",
        name: "MUSIC VIBES",
        location: "Kukatpally, Hyderabad",

        // NEW PORTFOLIO ID
        portfolioId: 502,
      },

      {
        id: 503,
        category: "SOUND SYSTEM",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791777403/dj043.jpg",
        label: "PREMIUM SOUND SYSTEM",
        name: "BASS EVENTS",
        location: "Manikonda, Hyderabad",

        // NEW PORTFOLIO ID
        portfolioId: 503,
      },
    ],
  },
};

// =====================================================
// COMPONENT
// =====================================================

function AuthenticMeatGrill() {
  const { id } = useParams();

  const navigate = useNavigate();

  const serviceId = Number(id);

  const service = featuredExpertsData[serviceId];

  // ===================================================
  // INVALID ID
  // ===================================================

  if (!service) {
    return (
      <section className="flex min-h-[300px] w-full items-center justify-center bg-white px-5">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Featured Service Not Found
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Please select a valid service.
          </p>
        </div>
      </section>
    );
  }

  // ===================================================
  // PORTFOLIO
  // ===================================================

  const handlePortfolio = (expert) => {
   

    navigate(
      `/service-portfolio/${serviceId}/${expert.portfolioId}`
    );
  };

  // ===================================================
  // BOOK NOW
  // ===================================================

  const handleBookNow = (expertName) => {
    console.log(`Booking request for ${expertName}`);
  };

  // ===================================================
  // UI
  // ===================================================

  return (
    <section
      className="
        w-full
        bg-white
        px-4
        py-9

        sm:px-6
        sm:py-10

        md:px-8
        md:py-11

        lg:px-10
        lg:py-12
      "
    >

      {/* =================================================
          HEADING
      ================================================= */}

      <div
        className="
          mb-8
          text-center

          sm:mb-9

          md:mb-10

          lg:mb-10
        "
      >
        <h2
          className="
            text-[21px]
            font-medium
            leading-tight
            tracking-normal

            sm:text-[22px]

            md:text-[23px]

            lg:text-[25px]
          "
        >

          {/* FIRST WORD */}

          <span className="text-[#252525]">
            {service.headingFirst}{" "}
          </span>

          {/* HIGHLIGHT */}

          <span className="text-[#a90000]">
            {service.headingSecond}
          </span>

          {/* LAST WORD */}

          <span className="text-[#252525]">
            {" "}
            {service.headingEnd}
          </span>

        </h2>
      </div>

      {/* =================================================
          CARDS CONTAINER
      ================================================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1240px]
        "
      >

        {/* =================================================
            DESKTOP LEFT ARROW
        ================================================= */}

        <button
          type="button"
          aria-label="Previous"
          className="
            absolute
            left-[-55px]
            top-1/2
            z-20
            hidden
            h-[38px]
            w-[38px]
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-[#c94f55]
            text-white
            transition-all
            duration-200
            hover:bg-[#a91f28]

            xl:flex
          "
        >
          <FaChevronLeft size={13} />
        </button>

        {/* =================================================
            CARD GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-7

            sm:grid-cols-2
            sm:gap-7

            lg:grid-cols-3
            lg:gap-9
          "
        >

          {service.experts.map((expert) => (

            <div
              key={expert.id}
              className="
                group
                w-full
                min-w-0
                overflow-hidden
                bg-white

                shadow-[0_4px_18px_rgba(0,0,0,0.12)]

                transition-all
                duration-300

                hover:-translate-y-1

                hover:shadow-[0_8px_25px_rgba(0,0,0,0.16)]
              "
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  h-[225px]
                  w-full
                  overflow-hidden

                  sm:h-[225px]

                  md:h-[235px]

                  lg:h-[240px]
                "
              >

                <img
                  src={expert.image}
                  alt={expert.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center

                    transition-transform
                    duration-500

                    group-hover:scale-[1.02]
                  "
                />

                {/* IMAGE OVERLAY */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-black/10
                  "
                />

                {/* =================================================
                    CATEGORY
                ================================================= */}

                <div
                  className="
                    absolute
                    left-3
                    top-3
                    bg-black/65
                    px-2.5
                    py-1.5
                    text-[9px]
                    font-medium
                    tracking-wide
                    text-white

                    sm:text-[10px]
                  "
                >
                  {expert.category}
                </div>

                {/* =================================================
                    PORTFOLIO
                ================================================= */}

                <button
                  type="button"
                  onClick={() => handlePortfolio(expert)}
                  className="
                    absolute
                    right-3
                    top-3

                    flex
                    cursor-pointer
                    items-center
                    gap-1

                    text-[10px]
                    font-medium
                    text-[#ffd000]

                    transition-colors
                    duration-200

                    hover:text-white

                    sm:right-4
                    sm:text-[11px]
                  "
                >

                  <span>
                    Portfolio
                  </span>

                  <FaAngleDoubleRight
                    size={12}
                    className="text-white"
                  />

                </button>

                {/* =================================================
                    BOTTOM LABEL
                ================================================= */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    max-w-[85%]

                    bg-[#350b0b]

                    px-3
                    py-2

                    text-[8px]
                    font-medium
                    tracking-wide
                    text-white

                    sm:text-[9px]

                    md:text-[10px]
                  "
                >
                  {expert.label}
                </div>

              </div>

              {/* =================================================
                  DETAILS
              ================================================= */}

              <div
                className="
                  px-3
                  pb-3
                  pt-3

                  sm:px-3.5
                  sm:pb-3.5

                  md:px-4
                  md:pb-4
                "
              >

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >

                  {/* =================================================
                      NAME + LOCATION
                  ================================================= */}

                  <div className="min-w-0">

                    <h3
                      className="
                        truncate
                        text-[13px]
                        font-semibold
                        leading-tight
                        text-[#151515]

                        sm:text-[14px]

                        md:text-[15px]
                      "
                    >
                      {expert.name}
                    </h3>

                    <p
                      className="
                        mt-1
                        truncate
                        text-[9px]
                        leading-tight
                        text-gray-500

                        sm:text-[10px]

                        md:text-[11px]
                      "
                    >
                      {expert.location}
                    </p>

                  </div>

                  {/* =================================================
                      BOOK NOW
                  ================================================= */}

                  <button
                    type="button"
                    onClick={() =>
                      handleBookNow(expert.name)
                    }
                    className="
                      flex-shrink-0
                      cursor-pointer
                      rounded-sm

                      bg-[#b00000]

                      px-3.5
                      py-2

                      text-[9px]
                      font-semibold
                      text-white

                      transition-colors
                      duration-200

                      hover:bg-[#8f0000]

                      active:scale-95

                      sm:px-4
                      sm:py-2.5
                      sm:text-[10px]

                      md:px-5
                      md:text-[11px]
                    "
                  >
                    BOOK NOW
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* =================================================
            DESKTOP RIGHT ARROW
        ================================================= */}

        <button
          type="button"
          aria-label="Next"
          className="
            absolute
            right-[-55px]
            top-1/2
            z-20
            hidden

            h-[38px]
            w-[38px]

            -translate-y-1/2

            cursor-pointer

            items-center
            justify-center

            rounded-full

            bg-[#c94f55]

            text-white

            transition-all
            duration-200

            hover:bg-[#a91f28]

            xl:flex
          "
        >
          <FaChevronRight size={13} />
        </button>

      </div>

      {/* =================================================
          MOBILE / TABLET ARROWS
      ================================================= */}

      <div
        className="
          mx-auto
          mt-6
          flex
          w-full
          max-w-[1240px]
          items-center
          justify-between

          xl:hidden
        "
      >

        {/* LEFT */}

        <button
          type="button"
          aria-label="Previous"
          className="
            flex
            h-8
            w-8
            cursor-pointer
            items-center
            justify-center
            rounded-full

            bg-[#c94f55]

            text-white

            transition

            hover:bg-[#a91f28]
          "
        >
          <FaChevronLeft size={11} />
        </button>

        {/* RIGHT */}

        <button
          type="button"
          aria-label="Next"
          className="
            flex
            h-8
            w-8
            cursor-pointer
            items-center
            justify-center
            rounded-full

            bg-[#c94f55]

            text-white

            transition

            hover:bg-[#a91f28]
          "
        >
          <FaChevronRight size={11} />
        </button>

      </div>

    </section>
  );
}

export default AuthenticMeatGrill;