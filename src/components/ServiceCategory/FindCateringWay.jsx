import React from "react";
import { useParams } from "react-router-dom";


// =====================================================
// MUGGU
// =====================================================


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
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549190/photo01.jpg",
        dot: "bg-yellow-500",
      },
      {
        title: "Pre Wedding",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549200/photo02.jpg",
        dot: "bg-gradient-to-b from-red-500 from-50% to-green-500 to-50%",
      },
      {
        title: "Candid",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549208/photo03.jpg",
        dot: "bg-yellow-500",
      },
      {
        title: "Traditional",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549234/photo04.jpg",
        dot: "bg-yellow-500",
      },
      {
        title: "Events",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549222/photo05.jpg",
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
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549355/catering01.png",
        dot: "bg-green-500",
      },
      {
        title: "Veg / Non Veg",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549362/catering02.png",
        dot: "bg-gradient-to-b from-red-500 from-50% to-green-500 to-50%",
      },
      {
        title: "Live Counters",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549362/catering03.png",
        dot: "bg-yellow-500",
      },
      {
        title: "Multi Cuisine",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549362/catering04.png",
        dot: "bg-yellow-500",
      },
      {
        title: "Breakfast Specials",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549362/catering05.png",
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
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549483/event01.jpg",
        dot: "bg-red-500",
      },
      {
        title: "Function Halls",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549483/event02.jpg",
        dot: "bg-gradient-to-b from-red-500 from-50% to-green-500 to-50%",
      },
      {
        title: "Outdoor Events",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549483/event03.jpg",
        dot: "bg-green-500",
      },
      {
        title: "Banquet Halls",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549483/event04.jpg",
        dot: "bg-yellow-500",
      },
      {
        title: "Party Events",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549483/event05.jpg",
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
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549610/stage01.jpg",
        dot: "bg-red-500",
      },
      {
        title: "Floral Decor",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549610/stage02.jpg",
        dot: "bg-gradient-to-b from-red-500 from-50% to-green-500 to-50%",
      },
      {
        title: "Traditional",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549610/stage03.jpg",
        dot: "bg-yellow-500",
      },
      {
        title: "Modern Decor",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549610/stage04.jpg",
        dot: "bg-yellow-500",
      },
      {
        title: "Reception Decor",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791549610/stage05.jpg",
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
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791548896/dj01.jpg",
        dot: "bg-red-500",
      },
      {
        title: "Live Music",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791548896/dj02.jpg",
        dot: "bg-gradient-to-b from-red-500 from-50% to-green-500 to-50%",
      },
      {
        title: "Sound System",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791548896/dj03.jpg",
        dot: "bg-green-500",
      },
      {
        title: "Dance Floor",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791548896/dj04.jpg",
        dot: "bg-yellow-500",
      },
      {
        title: "DJ Lighting",
        image: "https://res.cloudinary.com/porwmjke/image/upload/v1791548896/dj05.jpg",
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
        src="https://res.cloudinary.com/porwmjke/image/upload/v1791786787/muggu-top_2.png"
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
        src="https://res.cloudinary.com/porwmjke/image/upload/v1791786787/muggu-top_2.png"
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
          max-w-[1250px]
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
          md:gap-x-10
          md:gap-y-0

          lg:mt-10
          lg:max-w-[1250px]
          lg:gap-x-12
        "
      >

        {service.categories.map((category, index) => (
          <div
            key={index}
            className="
              flex
              w-[190px]
              flex-col
              items-center
              text-center

              sm:w-[200px]

              md:w-[215px]

              lg:w-[225px]
            "
          >

            {/* =================================================
                CIRCLE IMAGE
            ================================================= */}

            <div
              className="
                h-[170px]
                w-[170px]
                shrink-0
                overflow-hidden
                rounded-full
                bg-white
                p-1.5
                shadow-sm

                sm:h-[180px]
                sm:w-[180px]

                md:h-[200px]
                md:w-[200px]

                lg:h-[210px]
                lg:w-[210px]
              "
            >
              <img
                src={category.image}
                alt={category.title}
                className="
                  block
                  h-full
                  w-full
                  rounded-full
                  object-cover
                  object-center
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
                  shrink-0
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
          mt-10
          flex
          w-full
          max-w-[1250px]
          items-center
          justify-between
          gap-10
          px-3

          sm:mt-11
          sm:gap-14
          sm:px-5

          md:mt-12
          md:gap-20
          md:px-8

          lg:mt-11
          lg:gap-24
          lg:px-12
        "
      >

        {/* =================================================
            LEFT MUGGU
        ================================================= */}

        <img
          src="https://res.cloudinary.com/porwmjke/image/upload/v1791786830/muggu-bottom.png"
          alt=""
          className="
            h-[34px]
            w-[30%]
            object-contain
            opacity-60
            mix-blend-multiply

            sm:h-[40px]
            sm:w-[28%]

            md:h-[48px]
            md:w-[27%]

            lg:h-[55px]
            lg:w-[26%]
          "
        />

        {/* =================================================
            CENTER MUGGU
        ================================================= */}

        <img
          src="https://res.cloudinary.com/porwmjke/image/upload/v1791786830/muggu-bottom.png"
          alt=""
          className="
            h-[34px]
            w-[30%]
            object-contain
            opacity-60
            mix-blend-multiply

            sm:h-[40px]
            sm:w-[28%]

            md:h-[48px]
            md:w-[27%]

            lg:h-[55px]
            lg:w-[26%]
          "
        />

        {/* =================================================
            RIGHT MUGGU
        ================================================= */}

        <img
          src="https://res.cloudinary.com/porwmjke/image/upload/v1791786830/muggu-bottom.png"
          alt=""
          className="
            h-[34px]
            w-[30%]
            object-contain
            opacity-60
            mix-blend-multiply

            sm:h-[40px]
            sm:w-[28%]

            md:h-[48px]
            md:w-[27%]

            lg:h-[55px]
            lg:w-[26%]
          "
        />

      </div>
    </section>
  );
};

export default FindCateringWay;