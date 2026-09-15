import React from "react";
import { useNavigate, useParams } from "react-router-dom";

// =====================================================
// CATERING IMAGES
// =====================================================

import catering021 from "../../assets/catering021.png";
import catering022 from "../../assets/catering022.png";
import catering023 from "../../assets/catering023.png";

// =====================================================
// EVENT IMAGES
// =====================================================

import event021 from "../../assets/event021.jpg";
import event022 from "../../assets/event022.jpg";
import event023 from "../../assets/event023.jpg";

// =====================================================
// STAGE DECOR IMAGES
// =====================================================

import stage021 from "../../assets/stage021.jpg";
import stage022 from "../../assets/stage022.jpg";
import stage023 from "../../assets/stage023.jpg";

// =====================================================
// PHOTOGRAPHY IMAGES
// =====================================================

import photo021 from "../../assets/photo021.jpg";
import photo022 from "../../assets/photo022.jpg";
import photo023 from "../../assets/photo023.jpg";

// =====================================================
// DJ IMAGES
// =====================================================

import dj021 from "../../assets/dj021.jpg";
import dj022 from "../../assets/dj022.jpg";
import dj023 from "../../assets/dj023.jpg";

// =====================================================
// ICONS
// =====================================================

import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleRight,
} from "react-icons/fa";

// =====================================================
// TRUSTED SERVICE DATA
// =====================================================

const trustedServiceData = {
  // ===================================================
  // 1. PHOTOGRAPHY
  // ===================================================

  1: {
    id: 1,
    headingStart: "Trusted",
    headingHighlight: "Photography",
    headingEnd: "Experts",

    cards: [
      {
        id: 1,
        category: "PHOTOGRAPHY",
        image: photo021,
        label: "CANDID & TRADITIONAL PHOTOGRAPHY",
        name: "ARTLANE STUDIO",
        location: "Kondapur, Hyderabad",
        portfolioId: 1,
      },
      {
        id: 2,
        category: "PRE-WEDDING",
        image: photo022,
        label: "CREATIVE COUPLE PORTRAITS",
        name: "PIXEL PERFECT STUDIO",
        location: "Madhapur, Hyderabad",
        portfolioId: 2,
      },
      {
        id: 3,
        category: "EVENT PHOTOGRAPHY",
        image: photo023,
        label: "PROFESSIONAL EVENT COVERAGE",
        name: "MOMENTS PHOTOGRAPHY",
        location: "Gachibowli, Hyderabad",
        portfolioId: 3,
      },
    ],
  },

  // ===================================================
  // 2. CATERING
  // ===================================================

  2: {
    id: 2,
    headingStart: "Trusted",
    headingHighlight: "Pure Veg",
    headingEnd: "Caterers",

    cards: [
      {
        id: 1,
        category: "PURE VEG",
        image: catering021,
        label: "CUSTOMIZED MENU OPTIONS",
        name: "IYYENGAR CATERERS",
        location: "HBY, Hyderabad",
        portfolioId: 1,
      },
      {
        id: 2,
        category: "PURE VEG",
        image: catering022,
        label: "MORE THAN 50+ VARIETIES",
        name: "SAMPRADA CATERING",
        location: "Nizampet, Hyderabad",
        portfolioId: 2,
      },
      {
        id: 3,
        category: "PURE VEG",
        image: catering023,
        label: "DIVINE EATING EXPERIENCE",
        name: "SWACHH CATERERS",
        location: "Manikonda, Hyderabad",
        portfolioId: 3,
      },
    ],
  },

  // ===================================================
  // 3. EVENT
  // ===================================================

  3: {
    id: 3,
    headingStart: "Trusted",
    headingHighlight: "Event",
    headingEnd: "Experts",

    cards: [
      {
        id: 1,
        category: "WEDDING DECOR",
        image: event021,
        label: "ELEGANT WEDDING DECORATIONS",
        name: "ROYAL EVENT DECORS",
        location: "Banjara Hills, Hyderabad",
        portfolioId: 1,
      },
      {
        id: 2,
        category: "EVENT DECOR",
        image: event022,
        label: "TRADITIONAL & MODERN THEMES",
        name: "DREAM DECORATORS",
        location: "Jubilee Hills, Hyderabad",
        portfolioId: 2,
      },
      {
        id: 3,
        category: "VENUE DECOR",
        image: event023,
        label: "BEAUTIFUL VENUE SETUPS",
        name: "GRAND EVENTS",
        location: "Hitech City, Hyderabad",
        portfolioId: 3,
      },
    ],
  },

  // ===================================================
  // 4. STAGE DECOR
  // ===================================================

  4: {
    id: 4,
    headingStart: "Trusted",
    headingHighlight: "Stage",
    headingEnd: "Decor Experts",

    cards: [
      {
        id: 1,
        category: "STAGE DECOR",
        image: stage021,
        label: "ROYAL STAGE DESIGNS",
        name: "ROYAL STAGE DECORS",
        location: "Kukatpally, Hyderabad",
        portfolioId: 1,
      },
      {
        id: 2,
        category: "WEDDING STAGE",
        image: stage022,
        label: "PREMIUM WEDDING STAGES",
        name: "GRAND STAGE EVENTS",
        location: "Miyapur, Hyderabad",
        portfolioId: 2,
      },
      {
        id: 3,
        category: "EVENT STAGE",
        image: stage023,
        label: "CREATIVE STAGE SETUPS",
        name: "DREAM STAGE DECORS",
        location: "Secunderabad, Hyderabad",
        portfolioId: 3,
      },
    ],
  },

  // ===================================================
  // 5. DJ / SOUND
  // ===================================================

  5: {
    id: 5,
    headingStart: "Trusted",
    headingHighlight: "DJ & Sound",
    headingEnd: "Experts",

    cards: [
      {
        id: 1,
        category: "DJ",
        image: dj021,
        label: "PROFESSIONAL DJ SERVICES",
        name: "DJ BEATS",
        location: "Madhapur, Hyderabad",
        portfolioId: 1,
      },
      {
        id: 2,
        category: "DJ & SOUND",
        image: dj022,
        label: "PREMIUM SOUND SYSTEMS",
        name: "PARTY BEATS",
        location: "Gachibowli, Hyderabad",
        portfolioId: 2,
      },
      {
        id: 3,
        category: "DJ EVENTS",
        image: dj023,
        label: "LIVE DJ & MUSIC",
        name: "RHYTHM EVENTS",
        location: "Hitech City, Hyderabad",
        portfolioId: 3,
      },
    ],
  },
};

// =====================================================
// COMPONENT
// =====================================================

function TrustedPureVegCaterers() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ===================================================
  // SERVICE ID
  // ===================================================

  const serviceId = Number(id);

  // ===================================================
  // GET SERVICE
  // ===================================================

  const service = trustedServiceData[serviceId];

  // ===================================================
  // INVALID ID
  // ===================================================

  if (!service) {
    return (
      <section
        className="
          flex
          min-h-[300px]
          w-full
          items-center
          justify-center
          bg-white
          px-5
        "
      >
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Service Not Found
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

  const handlePortfolio = (portfolioId) => {
    /*
      IMPORTANT:

      Old:
      /portfolio/${serviceId}/${portfolioId}

      New:
      /trusted-portfolio/${serviceId}/${portfolioId}

      So this will NOT open your old/common portfolio page.
    */

    navigate(
      `/trusted-portfolio/${serviceId}/${portfolioId}`
    );
  };

  // ===================================================
  // BOOK NOW
  // ===================================================

  const handleBookNow = (expertName) => {
    console.log(
      `Booking request for ${expertName}`
    );
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
            {service.headingStart}{" "}
          </span>

          {/* GREEN */}

          <span className="text-[#16803b]">
            {service.headingHighlight}
          </span>

          {/* BLACK */}

          <span className="text-[#252525]">
            {" "}
            {service.headingEnd}
          </span>
        </h2>
      </div>

      {/* =================================================
          MAIN CARD CONTAINER
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
          {service.cards.map((expert) => (
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

                {/* =================================================
                    IMAGE OVERLAY
                ================================================= */}

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
                  onClick={() =>
                    handlePortfolio(expert.portfolioId)
                  }
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
                  CARD DETAILS
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

export default TrustedPureVegCaterers;