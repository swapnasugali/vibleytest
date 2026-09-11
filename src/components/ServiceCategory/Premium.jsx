import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleRight,
} from "react-icons/fa";

// =====================================================
// CATERING IMAGES
// =====================================================

import catering011 from "../../assets/catering051.png";
import catering012 from "../../assets/catering052.png";
import catering013 from "../../assets/catering053.png";

// =====================================================
// EVENT IMAGES
// =====================================================

import event011 from "../../assets/event051.jpg";
import event012 from "../../assets/event052.jpg";
import event013 from "../../assets/event053.jpg";

// =====================================================
// STAGE DECOR IMAGES
// =====================================================

import stage011 from "../../assets/stage051.jpg";
import stage012 from "../../assets/stage052.jpg";
import stage013 from "../../assets/stage053.jpg";

// =====================================================
// PHOTOGRAPHY IMAGES
// =====================================================

import photo011 from "../../assets/photo051.jpg";
import photo012 from "../../assets/photo052.jpg";
import photo013 from "../../assets/photo053.jpg";

// =====================================================
// DJ / SOUND IMAGES
// =====================================================

import dj011 from "../../assets/dj051.jpg";
import dj012 from "../../assets/dj052.jpg";
import dj013 from "../../assets/dj053.jpg";

// =====================================================
// FEATURED SERVICE DATA
// =====================================================

export const featuredServiceData = {
  // ===================================================
  // 1. PHOTOGRAPHY
  // ===================================================

  1: {
    id: 1,

    titleStart: "Creative",
    titleHighlight: "Photography",
    titleEnd: "Experts",

    experts: [
      {
        id: 101,
        category: "WEDDING",
        image: photo011,
        label: "WEDDING PHOTOGRAPHY",
        name: "ARTLANE STUDIO",
        location: "Kondapur, Hyderabad",
        portfolioId: "artlane",
      },

      {
        id: 102,
        category: "PRE WEDDING",
        image: photo012,
        label: "CANDID MOMENTS",
        name: "PIXEL STORIES",
        location: "Kukatpally, Hyderabad",
        portfolioId: "pixel-stories",
      },

      {
        id: 103,
        category: "CANDID",
        image: photo013,
        label: "CREATIVE PHOTOGRAPHY",
        name: "CLICK ART STUDIO",
        location: "Manikonda, Hyderabad",
        portfolioId: "click-art",
      },
    ],
  },

  // ===================================================
  // 2. CATERING
  // ===================================================

  2: {
    id: 2,

    titleStart: "Delicious",
    titleHighlight: "Catering",
    titleEnd: "Experts",

    experts: [
      {
        id: 201,
        category: "VEG / NON VEG",
        image: catering011,
        label: "CUSTOMIZED MENU OPTIONS",
        name: "INFINITE DINING CATERERS",
        location: "BHEL, Hyderabad",
        portfolioId: "infinite-dining",
      },

      {
        id: 202,
        category: "VEG / NON VEG",
        image: catering012,
        label: "PURE CONTINENTAL TASTE",
        name: "GLOBAL TASTES CATERING",
        location: "Nizampet, Hyderabad",
        portfolioId: "global-tastes",
      },

      {
        id: 203,
        category: "VEG / NON VEG",
        image: catering013,
        label: "DIVINE EATING EXPERIENCE",
        name: "CONTINENT CATERERS",
        location: "Manikonda, Hyderabad",
        portfolioId: "continent-caterers",
      },
    ],
  },

  // ===================================================
  // 3. EVENT
  // ===================================================

  3: {
    id: 3,

    titleStart: "Beautiful",
    titleHighlight: "Event",
    titleEnd: "Experts",

    experts: [
      {
        id: 301,
        category: "WEDDING EVENT",
        image: event011,
        label: "ELEGANT EVENT DECOR",
        name: "GRAND PALACE EVENTS",
        location: "Kondapur, Hyderabad",
        portfolioId: "grand-palace",
      },

      {
        id: 302,
        category: "FUNCTION EVENT",
        image: event012,
        label: "PREMIUM EVENT SETUP",
        name: "ROYAL EVENTS",
        location: "Kukatpally, Hyderabad",
        portfolioId: "royal-events",
      },

      {
        id: 303,
        category: "OUTDOOR EVENT",
        image: event013,
        label: "BEAUTIFUL EVENT SPACES",
        name: "GREEN GARDEN EVENTS",
        location: "Manikonda, Hyderabad",
        portfolioId: "green-garden",
      },
    ],
  },

  // ===================================================
  // 4. STAGE DECOR
  // ===================================================

  4: {
    id: 4,

    titleStart: "Elegant",
    titleHighlight: "Stage Decor",
    titleEnd: "Experts",

    experts: [
      {
        id: 401,
        category: "WEDDING DECOR",
        image: stage011,
        label: "PREMIUM WEDDING DECOR",
        name: "ROYAL DECORS",
        location: "Kondapur, Hyderabad",
        portfolioId: "royal-decors",
      },

      {
        id: 402,
        category: "FLORAL DECOR",
        image: stage012,
        label: "BEAUTIFUL FLORAL DESIGNS",
        name: "FLOWER EVENTS",
        location: "Kukatpally, Hyderabad",
        portfolioId: "flower-events",
      },

      {
        id: 403,
        category: "TRADITIONAL",
        image: stage013,
        label: "TRADITIONAL STAGE DECOR",
        name: "MANGALAM DECORS",
        location: "Manikonda, Hyderabad",
        portfolioId: "mangalam-decors",
      },
    ],
  },

  // ===================================================
  // 5. DJ / SOUND
  // ===================================================

  5: {
    id: 5,

    titleStart: "Ultimate",
    titleHighlight: "DJ & Sound",
    titleEnd: "Experts",

    experts: [
      {
        id: 501,
        category: "DJ",
        image: dj011,
        label: "PROFESSIONAL DJ SERVICES",
        name: "DJ BEATS",
        location: "Kondapur, Hyderabad",
        portfolioId: "dj-beats",
      },

      {
        id: 502,
        category: "LIVE MUSIC",
        image: dj012,
        label: "LIVE MUSIC AVAILABLE",
        name: "MUSIC VIBES",
        location: "Kukatpally, Hyderabad",
        portfolioId: "music-vibes",
      },

      {
        id: 503,
        category: "SOUND SYSTEM",
        image: dj013,
        label: "PREMIUM SOUND SYSTEM",
        name: "BASS EVENTS",
        location: "Manikonda, Hyderabad",
        portfolioId: "bass-events",
      },
    ],
  },
};

// =====================================================
// COMPONENT
// =====================================================

const Premium = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ===================================================
  // URL ID
  // ===================================================

  const serviceId = Number(id);

  // ===================================================
  // GET SERVICE DATA
  // ===================================================

  const service = featuredServiceData[serviceId];

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
  // NEW PORTFOLIO NAVIGATION
  // ===================================================

  const handlePortfolio = (expert) => {
    navigate(`/new-portfolio/${serviceId}/${expert.portfolioId}`);
  };

  // ===================================================
  // BOOK NOW
  // ===================================================

  const handleBookNow = (expert) => {
    console.log(`Booking request for ${expert.name}`);
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
            text-[#252525]

            sm:text-[22px]

            md:text-[23px]

            lg:text-[25px]
          "
        >
          {/* BLACK */}

          <span className="text-[#252525]">
            {service.titleStart}
          </span>

          {" "}

          {/* YELLOW */}

          <span className="text-[#ffd000]">
            {service.titleHighlight}
          </span>

          {" "}

          {/* BLACK */}

          <span className="text-[#252525]">
            {service.titleEnd}
          </span>
        </h2>
      </div>

      {/* =================================================
          CARDS MAIN CONTAINER
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
            <article
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
                    rounded-[2px]
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
                    NEW PORTFOLIO
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
                  <span>Portfolio</span>

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
                    min-w-[155px]
                    rounded-tr-[16px]
                    bg-[#350b0b]
                    px-3
                    pb-2
                    pt-2
                    text-[8px]
                    font-medium
                    tracking-wide
                    text-white

                    sm:min-w-[165px]
                    sm:text-[9px]

                    md:text-[10px]
                  "
                  style={{
                    clipPath:
                      "polygon(0 0, 88% 0, 100% 100%, 0 100%)",
                  }}
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
                    onClick={() => handleBookNow(expert)}
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
            </article>
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
};

export default Premium;