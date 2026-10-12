import React from "react";
import { useParams } from "react-router-dom";

// =====================================================
// SERVICE DATA
// =====================================================

export const serviceCategoryData = {
  // ===================================================
  // PHOTOGRAPHY
  // ===================================================

  1: {
    id: 1,
    service: "Photography",
    heroImage: "https://res.cloudinary.com/porwmjke/image/upload/v1791778056/photo031.jpg",
    offer: "Enjoy Flat 40% OFF",
    subtitle: "On Wedding Photography",
    button: "Grab The Deal",
  },

  // ===================================================
  // CATERING
  // ===================================================

  2: {
    id: 2,
    service: "Catering",
    heroImage: "https://res.cloudinary.com/porwmjke/image/upload/v1791778041/catering031.png",
    offer: "Enjoy Flat 40% OFF",
    subtitle: "On Multi Cuisine Catering",
    button: "Grab The Deal",
  },

  // ===================================================
  // DECOR
  // ===================================================

  3: {
    id: 3,
    service: "Decor",
    heroImage: "https://res.cloudinary.com/porwmjke/image/upload/v1791778063/event031.jpg",
    offer: "Enjoy Flat 40% OFF",
    subtitle: "On Beautiful Event Decor",
    button: "Grab The Deal",
  },

  // ===================================================
  // STAGE
  // ===================================================

  4: {
    id: 4,
    service: "Stage",
    heroImage: "https://res.cloudinary.com/porwmjke/image/upload/v1791778074/stage031.jpg",
    offer: "Enjoy Flat 40% OFF",
    subtitle: "On Premium Stage Decor",
    button: "Grab The Deal",
  },

  // ===================================================
  // DJ
  // ===================================================

  5: {
    id: 5,
    service: "DJ",
    heroImage: "https://res.cloudinary.com/porwmjke/image/upload/v1791778088/dj031.jpg",
    offer: "Enjoy Flat 40% OFF",
    subtitle: "On DJ & Sound Services",
    button: "Grab The Deal",
  },
};

// =====================================================
// COMPONENT
// =====================================================

const FlatOf = () => {
  const { id } = useParams();

  // ===================================================
  // GET SERVICE DATA
  // ===================================================

  const service = serviceCategoryData[Number(id)];

  // ===================================================
  // INVALID ID
  // ===================================================

  if (!service) {
    return (
      <section className="flex min-h-[300px] items-center justify-center bg-white">
        <p className="text-lg font-medium text-[#252525]">
          Service not found
        </p>
      </section>
    );
  }

  // ===================================================
  // MAIN UI
  // ===================================================

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        px-4
        py-6

        sm:px-6
        sm:py-7

        md:px-8
        md:py-8

        lg:px-10
        lg:py-9
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1250px]
          flex-col
          items-center
          justify-between
          gap-8

          md:flex-row
          md:gap-10
        "
      >

        {/* =================================================
            LEFT IMAGE
        ================================================= */}

        <div
          className="
            flex
            w-full
            justify-center

            md:w-[52%]
          "
        >
          <img
            src={service.heroImage}
            alt={service.service}
            className="
              h-[420px]
              w-full
              max-w-[648px]
              object-cover

              sm:h-[360px]

              md:h-[390px]

              lg:h-[420px]
            "
          />
        </div>

        {/* =================================================
            RIGHT CONTENT
        ================================================= */}

        <div
          className="
            flex
            w-full
            flex-col
            items-center
            justify-center
            text-center

            md:w-[48%]
            md:items-start
            md:text-left
          "
        >

          {/* =================================================
              OFFER
          ================================================= */}

          <h1
            className="
              text-[56px]
              font-semibold
              leading-tight

              sm:text-[42px]

              md:text-[46px]

              lg:text-[56px]
            "
          >

            {/* ENJOY FLAT - YELLOW */}

            <span className="text-[#ffd700]">
              Enjoy Flat{" "}
            </span>

            {/* 40% - RED */}

            <span className="text-red-700">
              40%
            </span>

            {/* OFF - YELLOW */}

            <span className="text-[#ffd700]">
              {" "}OFF
            </span>

          </h1>

          {/* =================================================
              SUBTITLE
          ================================================= */}

          <p
            className="
              mt-2
              OliverOblique
              text-[34px]
              leading-tight
              text-[#252525]

              sm:text-[27px]

              md:text-[30px]

              lg:text-[38px]
            "
          >
            {service.subtitle}
          </p>

          {/* =================================================
              BUTTON
          ================================================= */}

          <button
            type="button"
            className="
              mt-5
              cursor-pointer
              rounded-[5px]
              bg-[#a90000]
              px-6
              py-2.5
              text-[16px]
              font-semibold
              text-white
              transition
              duration-200
              hover:bg-[#850000]
              active:scale-95
            "
          >
            {service.button}
          </button>

        </div>

      </div>
    </section>
  );
};

export default FlatOf;