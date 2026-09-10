import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// =====================================================
// CATERING IMAGES
// =====================================================

import catering011 from "../../assets/catering011.png";
import catering012 from "../../assets/catering012.png";
import catering013 from "../../assets/catering013.png";

// =====================================================
// EVENT IMAGES
// =====================================================

import event011 from "../../assets/event011.jpg";
import event012 from "../../assets/event012.jpg";
import event013 from "../../assets/event013.jpg";

// =====================================================
// STAGE DECOR IMAGES
// =====================================================

import stage011 from "../../assets/stage011.jpg";
import stage012 from "../../assets/stage012.jpg";
import stage013 from "../../assets/stage013.jpg";

// =====================================================
// PHOTOGRAPHY IMAGES
// =====================================================

import photo011 from "../../assets/photo011.jpg";
import photo012 from "../../assets/photo012.jpg";
import photo013 from "../../assets/photo013.jpg";

// =====================================================
// DJ IMAGES
// =====================================================

import dj011 from "../../assets/dj011.jpg";
import dj012 from "../../assets/dj012.jpg";
import dj013 from "../../assets/dj013.jpg";

// =====================================================
// ICONS
// =====================================================

import {
  FaAngleDoubleRight,
} from "react-icons/fa";

// =====================================================
// FEATURED SERVICE DATA
// =====================================================

const featuredServiceData = {
  // ===================================================
  // PHOTOGRAPHY
  // ===================================================

  1: {
    id: 1,
    title: "Featured Photography Experts",

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
  // CATERING
  // ===================================================

  2: {
    id: 2,
    title: "Featured Catering Experts",

    experts: [
      {
        id: 201,
        category: "PURE VEG",
        image: catering011,
        label: "CUSTOMIZED MENU OPTIONS",
        name: "IYYENGAR CATERERS",
        location: "Kondapur, Hyderabad",
        portfolioId: "iyyengar-caterers",
      },

      {
        id: 202,
        category: "VEG / NON VEG",
        image: catering012,
        label: "LIVE COUNTERS AVAILABLE",
        name: "DELITE CATERING",
        location: "Kukatpally, Hyderabad",
        portfolioId: "delite-catering",
      },

      {
        id: 203,
        category: "VEG / NON VEG",
        image: catering013,
        label: "MULTI CUISINE SPECIALISTS",
        name: "RUCHI CATERING & CO",
        location: "Manikonda, Hyderabad",
        portfolioId: "ruchi-catering",
      },
    ],
  },

  // ===================================================
  // EVENT
  // ===================================================

  3: {
    id: 3,
    title: "Featured Event Experts",

    experts: [
      {
        id: 301,
        category: "WEDDING HALL",
        image: event011,
        label: "ELEGANT WEDDING VENUES",
        name: "GRAND PALACE",
        location: "Kondapur, Hyderabad",
        portfolioId: "grand-palace",
      },

      {
        id: 302,
        category: "FUNCTION HALL",
        image: event012,
        label: "PREMIUM FUNCTION HALL",
        name: "ROYAL EVENTS",
        location: "Kukatpally, Hyderabad",
        portfolioId: "royal-events",
      },

      {
        id: 303,
        category: "OUTDOOR EVENTS",
        image: event013,
        label: "BEAUTIFUL EVENT SPACES",
        name: "GREEN GARDEN EVENTS",
        location: "Manikonda, Hyderabad",
        portfolioId: "green-garden",
      },
    ],
  },

  // ===================================================
  // STAGE DECOR
  // ===================================================

  4: {
    id: 4,
    title: "Featured Stage Decor Experts",

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
  // DJ / SOUND
  // ===================================================

  5: {
    id: 5,
    title: "Featured DJ & Sound Experts",

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

const FeaturedCateringExperts = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const serviceId = Number(id);

  const service = featuredServiceData[serviceId];

  // ===================================================
  // INVALID ID
  // ===================================================

  if (!service) {
    return (
      <section className="flex min-h-[250px] w-full items-center justify-center bg-white px-5">
        <p className="text-center text-sm font-medium text-[#555]">
          Featured service not found.
        </p>
      </section>
    );
  }

  // ===================================================
  // PORTFOLIO
  // ===================================================

  const handlePortfolio = (expert) => {
    navigate(`/portfolio/${serviceId}/${expert.portfolioId}`);
  };

  // ===================================================
  // BOOK NOW
  // ===================================================

  const handleBookNow = (expert) => {
    console.log("Booking:", expert.name);
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

      <h2
        className="
          text-center
          text-[21px]
          font-medium
          leading-tight
          text-[#252525]

          sm:text-[22px]

          md:text-[23px]

          lg:text-[25px]
        "
      >
        <span className="text-[#f0a900]">
          Featured
        </span>{" "}
        {service.title.replace("Featured ", "")}
      </h2>

      {/* =================================================
          MAIN CARD CONTAINER
      ================================================= */}

      <div
        className="
          relative
          mx-auto
          mt-8
          w-full
          max-w-[1240px]

          sm:mt-9

          md:mt-10

          lg:mt-9
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
            items-center
            justify-center
            rounded-full
            bg-[#c85454]
            text-white
            transition
            duration-200
            hover:bg-[#a90000]

            xl:flex
          "
        >
          <span className="mb-1 text-[27px] leading-none">
            ‹
          </span>
        </button>

        {/* =================================================
            CARDS
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
                w-full
                min-w-0
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
                    transition
                    duration-300
                    hover:scale-[1.02]
                  "
                />

                {/* =================================================
                    TOP CATEGORY
                ================================================= */}

                <span
                  className="
                    absolute
                    left-2.5
                    top-2.5
                    bg-black/65
                    px-2.5
                    py-1.5
                    text-[8px]
                    font-medium
                    tracking-wide
                    text-white

                    sm:text-[9px]
                  "
                >
                  {expert.category}
                </span>

                {/* =================================================
                    PORTFOLIO
                ================================================= */}

                <button
                  type="button"
                  onClick={() => handlePortfolio(expert)}
                  className="
                    absolute
                    right-2.5
                    top-2.5
                    flex
                    cursor-pointer
                    items-center
                    gap-1
                    text-[9px]
                    font-medium
                    text-[#ffc400]
                    transition
                    duration-200
                    hover:text-white

                    sm:right-3
                    sm:text-[10px]
                  "
                >
                  <span>Portfolio</span>

                  {/* WHITE >> SYMBOL */}

                  <FaAngleDoubleRight
                    size={12}
                    className="text-white"
                  />
                </button>

                {/* =================================================
                    IMAGE BOTTOM LABEL
                ================================================= */}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    max-w-[85%]
                    bg-black/75
                    px-3
                    py-2
                    text-[8px]
                    font-medium
                    tracking-wide
                    text-white

                    sm:text-[9px]
                  "
                >
                  {expert.label}
                </span>

              </div>

              {/* =================================================
                  CARD DETAILS
              ================================================= */}

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-3
                  pt-3
                "
              >

                {/* NAME + LOCATION */}

                <div className="min-w-0">

                  <h3
                    className="
                      truncate
                      text-[13px]
                      font-bold
                      leading-tight
                      text-[#252525]

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
                      text-[#555]

                      sm:text-[10px]

                      md:text-[11px]
                    "
                  >
                    {expert.location}
                  </p>

                </div>

                {/* BOOK NOW */}

                <button
                  type="button"
                  onClick={() => handleBookNow(expert)}
                  className="
                    shrink-0
                    cursor-pointer
                    rounded-[2px]
                    bg-[#a90000]
                    px-3.5
                    py-2.5
                    text-[8px]
                    font-semibold
                    tracking-wide
                    text-white
                    transition
                    duration-200
                    hover:bg-[#850000]
                    active:scale-95

                    sm:px-4
                    sm:text-[9px]

                    md:text-[10px]
                  "
                >
                  BOOK NOW
                </button>

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
            items-center
            justify-center
            rounded-full
            bg-[#c85454]
            text-white
            transition
            duration-200
            hover:bg-[#a90000]

            xl:flex
          "
        >
          <span className="mb-1 text-[27px] leading-none">
            ›
          </span>
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
            items-center
            justify-center
            rounded-full
            bg-[#c85454]
            text-white
            transition
            hover:bg-[#a90000]
          "
        >
          <span className="mb-1 text-[21px] leading-none">
            ‹
          </span>
        </button>

        {/* RIGHT */}

        <button
          type="button"
          aria-label="Next"
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-[#c85454]
            text-white
            transition
            hover:bg-[#a90000]
          "
        >
          <span className="mb-1 text-[21px] leading-none">
            ›
          </span>
        </button>

      </div>

    </section>
  );
};

export default FeaturedCateringExperts;