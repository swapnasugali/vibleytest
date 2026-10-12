import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// =====================================================

import {
  FaAngleDoubleRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// =====================================================
// FEATURED SERVICE DATA
// =====================================================

const featuredServiceData = {
  // ===================================================
  // 1. PHOTOGRAPHY
  // ===================================================

  1: {
    id: 1,
    title: "Featured Photography Experts",

    experts: [
      {
        id: 101,
        category: "WEDDING",
        image:"https://res.cloudinary.com/porwmjke/image/upload/v1791776705/photo011.jpg",
        label: "WEDDING PHOTOGRAPHY",
        name: "ARTLANE STUDIO",
        location: "Kondapur, Hyderabad",
        portfolioId: "artlane",
      },

      {
        id: 102,
        category: "PRE WEDDING",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791776705/photo012.jpg",
        label: "CANDID MOMENTS",
        name: "PIXEL STORIES",
        location: "Kukatpally, Hyderabad",
        portfolioId: "pixel-stories",
      },

      {
        id: 103,
        category: "CANDID",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791776705/photo013.jpg",
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
    title: "Featured Catering Experts",

    experts: [
      {
        id: 201,
        category: "PURE VEG",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791776557/catering011.png",
        label: "CUSTOMIZED MENU OPTIONS",
        name: "IYYENGAR CATERERS",
        location: "Kondapur, Hyderabad",
        portfolioId: "iyyengar-caterers",
      },

      {
        id: 202,
        category: "VEG / NON VEG",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791776557/catering012.png",
        label: "LIVE COUNTERS AVAILABLE",
        name: "DELITE CATERING",
        location: "Kukatpally, Hyderabad",
        portfolioId: "delite-catering",
      },

      {
        id: 203,
        category: "VEG / NON VEG",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791776557/catering013.png",
        label: "MULTI CUISINE SPECIALISTS",
        name: "RUCHI CATERING & CO",
        location: "Manikonda, Hyderabad",
        portfolioId: "ruchi-catering",
      },
    ],
  },

  // ===================================================
  // 3. EVENT
  // ===================================================

  3: {
    id: 3,
    title: "Featured Event Experts",

    experts: [
      {
        id: 301,
        category: "WEDDING HALL",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791776626/event011.jpg",
        label: "ELEGANT WEDDING VENUES",
        name: "GRAND PALACE",
        location: "Kondapur, Hyderabad",
        portfolioId: "grand-palace",
      },

      {
        id: 302,
        category: "FUNCTION HALL",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791776626/event012.jpg",
        label: "PREMIUM FUNCTION HALL",
        name: "ROYAL EVENTS",
        location: "Kukatpally, Hyderabad",
        portfolioId: "royal-events",
      },

      {
        id: 303,
        category: "OUTDOOR EVENTS",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791776626/event013.jpg",
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
    title: "Featured Stage Decor Experts",

    experts: [
      {
        id: 401,
        category: "WEDDING DECOR",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791776654/stage011.jpg",
        label: "PREMIUM WEDDING DECOR",
        name: "ROYAL DECORS",
        location: "Kondapur, Hyderabad",
        portfolioId: "royal-decors",
      },

      {
        id: 402,
        category: "FLORAL DECOR",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791776654/stage012.jpg",
        label: "BEAUTIFUL FLORAL DESIGNS",
        name: "FLOWER EVENTS",
        location: "Kukatpally, Hyderabad",
        portfolioId: "flower-events",
      },

      {
        id: 403,
        category: "TRADITIONAL",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791776654/stage013.jpg",
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
    title: "Featured DJ & Sound Experts",

    experts: [
      {
        id: 501,
        category: "DJ",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791776722/dj011.jpg",
        label: "PROFESSIONAL DJ SERVICES",
        name: "DJ BEATS",
        location: "Kondapur, Hyderabad",
        portfolioId: "dj-beats",
      },

      {
        id: 502,
        category: "LIVE MUSIC",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791776722/dj012.jpg",
        label: "LIVE MUSIC AVAILABLE",
        name: "MUSIC VIBES",
        location: "Kukatpally, Hyderabad",
        portfolioId: "music-vibes",
      },

      {
        id: 503,
        category: "SOUND SYSTEM",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791776722/dj013.jpg",
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

  // ===================================================
  // SERVICE ID
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
    navigate(
      `/service/${serviceId}/portfolio/${expert.portfolioId}`
    );
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

      <div
        className="
          mb-8
          text-center

          sm:mb-9

          md:mb-10
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
          <span className="text-[#f0a900]">
            Featured
          </span>{" "}

          {service.title.replace("Featured ", "")}
        </h2>
      </div>

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
            cursor-pointer
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
          <FaChevronLeft size={13} />
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
                </span>

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
                    text-[#ffc400]
                    transition
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

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    max-w-[85%]
                    rounded-tr-[12px]
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

                {/* =================================================
                    BOOK NOW
                ================================================= */}

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
            cursor-pointer
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
            bg-[#c85454]
            text-white
            transition
            hover:bg-[#a90000]
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
            bg-[#c85454]
            text-white
            transition
            hover:bg-[#a90000]
          "
        >
          <FaChevronRight size={11} />
        </button>

      </div>

    </section>
  );
};

export default FeaturedCateringExperts;