import React from "react";
import { useParams } from "react-router-dom";

// =====================================================
// PHOTOGRAPHY
// =====================================================

import photo01 from "../../assets/photo01.jpg";
import photo02 from "../../assets/photo02.jpg";
import photo03 from "../../assets/photo03.jpg";
import photo04 from "../../assets/photo04.jpg";
import photo05 from "../../assets/photo05.jpg";

// =====================================================
// CATERING
// =====================================================

import catering01 from "../../assets/catering01.png";
import catering02 from "../../assets/catering02.png";
import catering03 from "../../assets/catering03.png";
import catering04 from "../../assets/catering04.png";
import catering05 from "../../assets/catering05.png";

// =====================================================
// EVENT
// =====================================================

import event01 from "../../assets/event01.jpg";
import event02 from "../../assets/event02.jpg";
import event03 from "../../assets/event03.jpg";
import event04 from "../../assets/event04.jpg";
import event05 from "../../assets/event05.jpg";

// =====================================================
// STAGE
// =====================================================

import stage01 from "../../assets/stage01.jpg";
import stage02 from "../../assets/stage02.jpg";
import stage03 from "../../assets/stage03.jpg";
import stage04 from "../../assets/stage04.jpg";
import stage05 from "../../assets/stage05.jpg";

// =====================================================
// DJ
// =====================================================

import dj01 from "../../assets/dj01.jpg";
import dj02 from "../../assets/dj02.jpg";
import dj03 from "../../assets/dj03.jpg";
import dj04 from "../../assets/dj04.jpg";
import dj05 from "../../assets/dj05.jpg";

// =====================================================
// MUGGU
// =====================================================

import mugguTop from "../../assets/muggu-top.png";
import mugguBottom from "../../assets/muggu-bottom.png";

// =====================================================
// SERVICE DATA
// =====================================================

const serviceCategoryData = {
  // ===================================================
  // PHOTOGRAPHY
  // ===================================================

  1: {
    title: "Find Photography Your Way",

    categories: [
      {
        title: "Wedding",
        image: photo01,
        dot: "bg-yellow-500",
      },
      {
        title: "Pre Wedding",
        image: photo02,
        dot: "bg-gradient-to-b from-red-500 from-50% to-green-500 to-50%",
      },
      {
        title: "Candid",
        image: photo03,
        dot: "bg-yellow-500",
      },
      {
        title: "Traditional",
        image: photo04,
        dot: "bg-yellow-500",
      },
      {
        title: "Events",
        image: photo05,
        dot: "bg-yellow-500",
      },
    ],
  },

  // ===================================================
  // CATERING
  // ===================================================

  2: {
    title: "Find Catering Your Way",

    categories: [
      {
        title: "Pure Veg",
        image: catering01,
        dot: "bg-green-500",
      },
      {
        title: "Veg / Non Veg",
        image: catering02,
        dot: "bg-gradient-to-b from-red-500 from-50% to-green-500 to-50%",
      },
      {
        title: "Live Counters",
        image: catering03,
        dot: "bg-yellow-500",
      },
      {
        title: "Multi Cuisine",
        image: catering04,
        dot: "bg-yellow-500",
      },
      {
        title: "Breakfast Specials",
        image: catering05,
        dot: "bg-yellow-500",
      },
    ],
  },

  // ===================================================
  // EVENT
  // ===================================================

  3: {
    title: "Find Events Your Way",

    categories: [
      {
        title: "Wedding Halls",
        image: event01,
        dot: "bg-red-500",
      },
      {
        title: "Function Halls",
        image: event02,
        dot: "bg-gradient-to-b from-red-500 from-50% to-green-500 to-50%",
      },
      {
        title: "Outdoor Events",
        image: event03,
        dot: "bg-green-500",
      },
      {
        title: "Banquet Halls",
        image: event04,
        dot: "bg-yellow-500",
      },
      {
        title: "Party Events",
        image: event05,
        dot: "bg-red-500",
      },
    ],
  },

  // ===================================================
  // STAGE DECOR
  // ===================================================

  4: {
    title: "Find Stage Decor Your Way",

    categories: [
      {
        title: "Wedding Decor",
        image: stage01,
        dot: "bg-red-500",
      },
      {
        title: "Floral Decor",
        image: stage02,
        dot: "bg-gradient-to-b from-red-500 from-50% to-green-500 to-50%",
      },
      {
        title: "Traditional",
        image: stage03,
        dot: "bg-yellow-500",
      },
      {
        title: "Modern Decor",
        image: stage04,
        dot: "bg-yellow-500",
      },
      {
        title: "Reception Decor",
        image: stage05,
        dot: "bg-red-500",
      },
    ],
  },

  // ===================================================
  // DJ
  // ===================================================

  5: {
    title: "Find DJ & Sound Your Way",

    categories: [
      {
        title: "DJ",
        image: dj01,
        dot: "bg-red-500",
      },
      {
        title: "Live Music",
        image: dj02,
        dot: "bg-gradient-to-b from-red-500 from-50% to-green-500 to-50%",
      },
      {
        title: "Sound System",
        image: dj03,
        dot: "bg-green-500",
      },
      {
        title: "Dance Floor",
        image: dj04,
        dot: "bg-yellow-500",
      },
      {
        title: "DJ Lighting",
        image: dj05,
        dot: "bg-yellow-500",
      },
    ],
  },
};

// =====================================================
// COMPONENT
// =====================================================

const FindCateringWay = () => {
  const { id } = useParams();

  const service = serviceCategoryData[Number(id)];

  // ===================================================
  // INVALID ID
  // ===================================================

  if (!service) {
    return (
      <section className="flex min-h-[250px] items-center justify-center bg-[#fffaf0]">
        <p className="text-lg font-medium text-[#252525]">
          Service not found
        </p>
      </section>
    );
  }

  // ===================================================
  // MAIN SECTION
  // ===================================================

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#fffaf0]
        px-4
        pb-8
        pt-5

        sm:px-6
        sm:pb-9
        sm:pt-6

        md:px-8
        md:pb-10
        md:pt-7

        lg:px-10
        lg:pb-9
        lg:pt-6
      "
    >

      {/* =================================================
          TOP LEFT MUGGU
      ================================================= */}

      <img
        src={mugguTop}
        alt=""
        className="
          pointer-events-none
          absolute
          left-3
          top-3
          h-[50px]
          w-[50px]
          object-contain
          opacity-60
          mix-blend-multiply

          sm:left-5
          sm:top-4
          sm:h-[58px]
          sm:w-[58px]

          md:left-7
          md:top-5
          md:h-[66px]
          md:w-[66px]

          lg:left-9
          lg:top-5
          lg:h-[72px]
          lg:w-[72px]
        "
      />

      {/* =================================================
          TOP RIGHT MUGGU
      ================================================= */}

      <img
        src={mugguTop}
        alt=""
        className="
          pointer-events-none
          absolute
          right-3
          top-3
          h-[50px]
          w-[50px]
          object-contain
          opacity-60
          mix-blend-multiply

          sm:right-5
          sm:top-4
          sm:h-[58px]
          sm:w-[58px]

          md:right-7
          md:top-5
          md:h-[66px]
          md:w-[66px]

          lg:right-9
          lg:top-5
          lg:h-[72px]
          lg:w-[72px]
        "
      />

      {/* =================================================
          TITLE
      ================================================= */}

      <h2
        className="
          relative
          z-10
          text-center
          text-[26px]
          font-medium
          leading-tight
          text-[#252525]

          sm:text-[23px]

          md:text-[24px]

          lg:text-[26px]
        "
      >
        {service.title}
      </h2>

      {/* =================================================
          CATEGORY GRID
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-9
          grid
          w-full
          max-w-[1200px]
          grid-cols-2
          place-items-start
          justify-items-center
          gap-x-8
          gap-y-10

          sm:mt-10
          sm:grid-cols-3
          sm:gap-x-10
          sm:gap-y-11

          md:mt-10
          md:grid-cols-5
          md:gap-x-9
          md:gap-y-0

          lg:mt-10
          lg:max-w-[1200px]
          lg:gap-x-10
        "
      >

        {service.categories.map((category, index) => (
          <div
            key={index}
            className="
              flex
              w-[180px]
              flex-col
              items-center
              text-center

              sm:w-[190px]

              md:w-[205px]

              lg:w-[215px]
            "
          >

            {/* =================================================
                IMAGE
            ================================================= */}

            <div
              className="
                h-[155px]
                w-[155px]
                overflow-hidden
                rounded-full
                bg-white
                p-1
                shadow-sm

                sm:h-[165px]
                sm:w-[165px]

                md:h-[185px]
                md:w-[185px]

                lg:h-[195px]
                lg:w-[195px]
              "
            >
              <img
                src={category.image}
                alt={category.title}
                className="
                  h-full
                  w-full
                  rounded-full
                  object-cover
                "
              />
            </div>

            {/* =================================================
                CATEGORY NAME
            ================================================= */}

            <div
              className="
                mt-4
                flex
                min-h-[20px]
                items-center
                justify-center
                gap-1.5
              "
            >
              <span
                className={`
                  h-[6px]
                  w-[6px]
                  flex-shrink-0
                  rounded-full
                  ${category.dot}
                `}
              />

              <p
                className="
                  text-[16px]
                  font-medium
                  leading-tight
                  text-[#000000]

                  sm:text-[16px]

                  md:text-[16px]

                  lg:text-[16px]
                "
              >
                {category.title}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* =================================================
          BOTTOM MUGGU
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-9
          flex
          w-full
          max-w-[1200px]
          items-center
          justify-between
          px-1

          sm:mt-10
          sm:px-4

          md:mt-10
          md:px-7

          lg:mt-9
          lg:px-9
        "
      >

        {/* LEFT */}

        <img
          src={mugguBottom}
          alt=""
          className="
            h-[34px]
            w-[34%]
            object-contain
            opacity-60
            mix-blend-multiply

            sm:h-[40px]

            md:h-[48px]

            lg:h-[55px]
          "
        />

        {/* CENTER */}

        <img
          src={mugguBottom}
          alt=""
          className="
            h-[34px]
            w-[34%]
            object-contain
            opacity-60
            mix-blend-multiply

            sm:h-[40px]

            md:h-[48px]

            lg:h-[55px]
          "
        />

        {/* RIGHT */}

        <img
          src={mugguBottom}
          alt=""
          className="
            h-[34px]
            w-[34%]
            object-contain
            opacity-60
            mix-blend-multiply

            sm:h-[40px]

            md:h-[48px]

            lg:h-[55px]
          "
        />

      </div>

    </section>
  );
};

export default FindCateringWay;