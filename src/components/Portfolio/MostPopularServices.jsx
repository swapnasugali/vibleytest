import React from "react";
import { FaPhone } from "react-icons/fa";
import { useParams } from "react-router-dom";

// ======================================================
// DYNAMIC SERVICE DATA
// ======================================================

const serviceData = {
  // ====================================================
  // PHOTOGRAPHY
  // ====================================================

  photography: {
    fixedPackage: {
      label: "Fixed Package",
      title: "All Rounder Package",
      price: "₹ 43,300/-",

      services: [
        {
          title: "General Photography",
          description:
            "Capturing all the key event moments with clarity and creativity.",
        },
        {
          title: "Portrait Photography",
          description:
            "Portrait Photography capturing elegant and expressive individual portraits beautifully.",
        },
        {
          title: "Videography",
          description:
            "Videography capturing events through cinematic and memorable video storytelling.",
        },
      ],

      addOn: {
        title: "Dronography",
        description:
          "Drone Photography capturing stunning aerial views and cinematic event moments.",
      },
    },

    services: [
      {
        title: "General Photography",
        price: "₹ 10,300/-",
        description:
          "Capturing all the key event moments with clarity and creativity.",
      },
      {
        title: "Videography",
        price: "₹ 17,300/-",
        description:
          "Videography capturing events through cinematic and memorable video storytelling.",
      },
    ],

    addOns: [
      {
        title: "Dronography",
        price: "₹ 6,500/-",
        description:
          "Drone Photography capturing stunning aerial views and cinematic event moments.",
      },
      {
        title: "Instant Reels",
        price: "₹ 5,500/-",
        description:
          "Creating instant 30-second reels with quick editing and delivery within 5 minutes for instant social sharing.",
      },
    ],
  },

  // ====================================================
  // CATERING
  // ====================================================

  catering: {
    fixedPackage: {
      label: "Fixed Package",
      title: "Complete Catering Package",
      price: "₹ 43,300/-",

      services: [
        {
          title: "Food & Menu Planning",
          description:
            "Planning a customized menu with a variety of delicious dishes according to the event and guest requirements.",
        },
        {
          title: "Food Preparation",
          description:
            "Freshly prepared dishes with attention to taste, quality, hygiene, and presentation.",
        },
        {
          title: "Serving & Hospitality",
          description:
            "Professional food serving and hospitality support to provide guests with a smooth and enjoyable dining experience.",
        },
      ],

      addOn: {
        title: "Live Food Counters",
        description:
          "Live food counters offering freshly prepared dishes and interactive food experiences for guests.",
      },
    },

    services: [
      {
        title: "Food & Menu Planning",
        price: "₹ 10,300/-",
        description:
          "Customized menu planning with suitable food options based on the event type, guest preferences, and requirements.",
      },
      {
        title: "Food Preparation",
        price: "₹ 17,300/-",
        description:
          "Fresh and hygienically prepared food with quality ingredients and professional presentation.",
      },
    ],

    addOns: [
      {
        title: "Live Food Counters",
        price: "₹ 6,500/-",
        description:
          "Freshly prepared food served through live counters to create an engaging dining experience.",
      },
      {
        title: "Dessert Counter",
        price: "₹ 5,500/-",
        description:
          "A dedicated dessert selection with attractive presentation to add a sweet finish to your event.",
      },
    ],
  },

  // ====================================================
  // LIGHTING
  // ====================================================

  lighting: {
    fixedPackage: {
      label: "Fixed Package",
      title: "Complete Lighting Package",
      price: "₹ 43,300/-",

      services: [
        {
          title: "Decorative Lighting",
          description:
            "Beautiful decorative lighting arrangements designed to enhance the overall look and atmosphere of the venue.",
        },
        {
          title: "Stage Lighting",
          description:
            "Professional stage lighting designed to highlight performances, ceremonies, and important event moments.",
        },
        {
          title: "Event Illumination",
          description:
            "Complete venue illumination with carefully planned lighting setups according to the event theme and space.",
        },
      ],

      addOn: {
        title: "Special Effects Lighting",
        description:
          "Special lighting effects that add visual impact and create an attractive atmosphere for memorable celebrations.",
      },
    },

    services: [
      {
        title: "Decorative Lighting",
        price: "₹ 10,300/-",
        description:
          "Decorative lighting arrangements that enhance the venue and create a beautiful event atmosphere.",
      },
      {
        title: "Stage Lighting",
        price: "₹ 17,300/-",
        description:
          "Professional stage illumination designed for ceremonies, performances, parties, and special event moments.",
      },
    ],

    addOns: [
      {
        title: "Special Effects Lighting",
        price: "₹ 6,500/-",
        description:
          "Special lighting effects designed to add more visual appeal and energy to the event venue.",
      },
      {
        title: "Theme Lighting",
        price: "₹ 5,500/-",
        description:
          "Customized lighting arrangements based on the event theme, venue style, and client requirements.",
      },
    ],
  },
};

// ======================================================
// MAIN COMPONENT
// ======================================================

const MostPopularServices = () => {
  const { type } = useParams();

  const data =
    serviceData[type] || serviceData.photography;

  return (
    <section
      className="
        w-full
        bg-[#f7f7f7]
        px-4
        pb-10
        pt-10

        sm:px-6
        sm:pb-11
        sm:pt-11

        md:px-8
        md:pb-12
        md:pt-12

        lg:px-10
        lg:pb-14
        lg:pt-12
      "
    >

      {/* ==================================================
          HEADING
          ================================================== */}

      <h2
        className="
          text-center
          text-[26px]
          font-medium
          leading-[1.2]
          text-[#252525]

          sm:text-[19px]
          md:text-[20px]
          lg:text-[21px]
        "
      >
        Most Popular Services By Us
      </h2>

      {/* ==================================================
          SERVICE CARDS
          ================================================== */}

      <div
        className="
          mx-auto
          mt-7
          grid
          w-full
          max-w-[1150px]
          grid-cols-1
          gap-7

          sm:grid-cols-2
          sm:gap-7

          lg:grid-cols-3
          lg:items-start
          lg:gap-8
        "
      >

        {/* ==================================================
            LEFT COLUMN - FIXED PACKAGE
            ================================================== */}

        <div className="flex w-full flex-col">

          <div
            className="
              min-h-[510px]
              w-full
              overflow-hidden
              rounded-[7px]
              bg-white
              shadow-[0_2px_6px_rgba(0,0,0,0.25)]
            "
          >

            {/* Top Label */}

            <div
              className="
                px-4
                py-3
                text-[11px]
                text-[#181111]

                sm:text-[12px]
              "
            >
              {data.fixedPackage.label}
            </div>

            {/* Green Header */}

            <div
              className="
                flex
                min-h-[38px]
                items-center
                justify-between
                bg-[#007d2b]
                px-4
                py-2.5
                text-white
              "
            >

              <span
                className="
                  text-[13px]
                  font-semibold

                  sm:text-[14px]
                "
              >
                {data.fixedPackage.title}
              </span>

              <span
                className="
                  whitespace-nowrap
                  text-[8px]
                  font-medium

                  sm:text-[9px]
                "
              >
                Consists of :
              </span>

            </div>

            {/* Services */}

            <div className="px-4 py-5">

              {data.fixedPackage.services.map(
                (service, index) => (
                  <div
                    key={service.title}
                    className={
                      index > 0
                        ? "mt-5"
                        : ""
                    }
                  >

                    <h3
                      className="
                        text-[13px]
                        font-semibold
                        leading-[1.35]
                        text-[#570000]

                        sm:text-[14px]
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        text-[9px]
                        leading-[1.6]
                        text-[#555555]

                        sm:text-[10px]
                      "
                    >
                      {service.description}
                    </p>

                  </div>
                )
              )}

              {/* Divider */}

              <div
                className="
                  my-4
                  border-t
                  border-[#777777]
                "
              />

              {/* Add Ons */}

              <span
                className="
                  inline-block
                  bg-[#ffc400]
                  px-2.5
                  py-1
                  text-[9px]
                  font-medium
                  text-white

                  sm:text-[10px]
                "
              >
                Add Ons
              </span>

              {/* Add On */}

              <div className="mt-4">

                <h3
                  className="
                    text-[13px]
                    font-semibold
                    leading-[1.35]
                    text-[#570000]

                    sm:text-[14px]
                  "
                >
                  {data.fixedPackage.addOn.title}
                </h3>

                <p
                  className="
                    mt-1.5
                    text-[9px]
                    leading-[1.6]
                    text-[#555555]

                    sm:text-[10px]
                  "
                >
                  {data.fixedPackage.addOn.description}
                </p>

              </div>

            </div>

            {/* Price */}

            <div
              className="
                bg-[#970000]
                px-4
                py-5
                text-center
                text-white
              "
            >

              <p
                className="
                  text-[10px]

                  sm:text-[11px]
                "
              >
                Starting from{" "}

                <span
                  className="
                    text-[19px]
                    font-bold

                    sm:text-[21px]
                  "
                >
                  {data.fixedPackage.price}
                </span>
              </p>

              <button
                type="button"
                className="
                  mx-auto
                  mt-3
                  flex
                  cursor-pointer
                  items-center
                  justify-center
                  gap-1.5
                  rounded-[3px]
                  bg-black
                  px-5
                  py-2.5
                  text-[8px]
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >

                <FaPhone
                  className="
                    rotate-90
                    text-[13px]
                    text-[#FFAA00]
                  "
                />

                Register Pack

              </button>

            </div>

          </div>

          {/* View Packages */}

          <button
            type="button"
            className="
              mt-5
              cursor-pointer
              text-center
              text-[10px]
              text-black
              underline

              sm:text-[11px]
            "
          >
            View all packages
          </button>

        </div>

        {/* ==================================================
            MIDDLE COLUMN - SERVICES
            ================================================== */}

        <div
          className="
            flex
            w-full
            flex-col
            gap-5
          "
        >

          {data.services.map((service) => (

            <div
              key={service.title}
              className="
                min-h-[235px]
                overflow-hidden
                rounded-[7px]
                bg-white
                shadow-[0_2px_6px_rgba(0,0,0,0.25)]
              "
            >

              {/* Label */}

              <div
                className="
                  px-4
                  py-3
                  text-[10px]
                  text-[#333333]

                  sm:text-[11px]
                "
              >
                Specific Price Based Service
              </div>

              {/* Green Header */}

              <div
                className="
                  flex
                  min-h-[38px]
                  items-center
                  justify-between
                  bg-[#007d2b]
                  px-4
                  py-2.5
                  text-white
                "
              >

                <span
                  className="
                    text-[13px]
                    font-semibold

                    sm:text-[14px]
                  "
                >
                  {service.title}
                </span>

                <span
                  className="
                    whitespace-nowrap
                    text-[8px]
                    font-medium

                    sm:text-[9px]
                  "
                >
                  Consists of :
                </span>

              </div>

              {/* Content */}

              <div className="px-4 py-5">

                <h3
                  className="
                    text-[13px]
                    font-semibold
                    leading-[1.35]
                    text-[#570000]

                    sm:text-[14px]
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-1.5
                    text-[9px]
                    leading-[1.6]
                    text-[#555555]

                    sm:text-[10px]
                  "
                >
                  {service.description}
                </p>

              </div>

              {/* Price */}

              <div
                className="
                  bg-[#b00000]
                  px-4
                  py-5
                  text-center
                  text-white
                "
              >

                <p
                  className="
                    text-[10px]

                    sm:text-[11px]
                  "
                >
                  Starting from{" "}

                  <span
                    className="
                      text-[19px]
                      font-bold

                      sm:text-[21px]
                    "
                  >
                    {service.price}
                  </span>
                </p>

                <button
                  type="button"
                  className="
                    mx-auto
                    mt-3
                    flex
                    cursor-pointer
                    items-center
                    justify-center
                    gap-1.5
                    rounded-[3px]
                    bg-black
                    px-5
                    py-2.5
                    text-[8px]
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >

                  <FaPhone
                    className="
                      rotate-90
                      text-[13px]
                      text-[#FFAA00]
                    "
                  />

                  Register Pack

                </button>

              </div>

            </div>

          ))}

          {/* View Services */}

          <button
            type="button"
            className="
              cursor-pointer
              text-center
              text-[10px]
              text-black
              underline

              sm:text-[11px]
            "
          >
            View all Services
          </button>

        </div>

        {/* ==================================================
            RIGHT COLUMN - ADD ONS
            ================================================== */}

        <div
          className="
            flex
            w-full
            flex-col
            gap-5
          "
        >

          {data.addOns.map((addOn) => (

            <div
              key={addOn.title}
              className="
                min-h-[245px]
                overflow-hidden
                rounded-[7px]
                bg-white
                shadow-[0_2px_6px_rgba(0,0,0,0.25)]
              "
            >

              {/* Label */}

              <div
                className="
                  px-4
                  py-3
                  text-[9px]
                  leading-[1.5]
                  text-[#333333]

                  sm:text-[10px]
                "
              >
                Add On : Needs atleast a single service registration
              </div>

              {/* Orange Header */}

              <div
                className="
                  flex
                  min-h-[38px]
                  items-center
                  justify-between
                  bg-[#f2a900]
                  px-4
                  py-2.5
                  text-white
                "
              >

                <span
                  className="
                    text-[13px]
                    font-semibold

                    sm:text-[14px]
                  "
                >
                  {addOn.title}
                </span>

                <span
                  className="
                    whitespace-nowrap
                    text-[8px]
                    font-medium

                    sm:text-[9px]
                  "
                >
                  Consists of :
                </span>

              </div>

              {/* Content */}

              <div className="px-4 py-5">

                <h3
                  className="
                    text-[13px]
                    font-semibold
                    leading-[1.35]
                    text-[#570000]

                    sm:text-[14px]
                  "
                >
                  {addOn.title}
                </h3>

                <p
                  className="
                    mt-1.5
                    text-[9px]
                    leading-[1.6]
                    text-[#555555]

                    sm:text-[10px]
                  "
                >
                  {addOn.description}
                </p>

                <p
                  className="
                    mt-6
                    text-center
                    text-[10px]
                    text-[#333333]

                    sm:text-[11px]
                  "
                >
                  Starting from{" "}

                  <span
                    className="
                      text-[19px]
                      font-bold

                      sm:text-[21px]
                    "
                  >
                    {addOn.price}
                  </span>
                </p>

              </div>

            </div>

          ))}

          {/* View Add Ons */}

          <button
            type="button"
            className="
              cursor-pointer
              text-center
              text-[10px]
              text-black
              underline

              sm:text-[11px]
            "
          >
            View all Add Ons
          </button>

        </div>

      </div>

      {/* ==================================================
          TERMS AND CONDITIONS
          ================================================== */}

      <div
        className="
          flex
          justify-center
          px-4
          py-9

          sm:py-10
          md:py-11
          lg:py-12
        "
      >

        <button
          type="button"
          className="
            flex
            cursor-pointer
            items-center
            gap-2.5
            text-[16px]
            font-medium
            text-[#252525]

            sm:text-[17px]
            md:text-[18px]
          "
        >

          {/* Orange Search / Pin Shape */}

          <svg
            width="38"
            height="48"
            viewBox="0 0 38 48"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >

            <path
              d="
                M18 0
                C8.1 0 1 6.2 1 15.2
                C1 22.2 5.2 27.4 11.3 32.5
                L18 39
                L24.7 32.5
                C30.8 27.4 35 22.2 35 15.2
                C35 6.2 27.9 0 18 0
                Z
              "
              fill="#F2A900"
            />

            <circle
              cx="16"
              cy="14.5"
              r="6.2"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
            />

            <line
              x1="20.5"
              y1="19"
              x2="25"
              y2="23.5"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

          </svg>

          {/* Terms Text */}

          <span className="whitespace-nowrap">
            Terms and Conditions
          </span>

        </button>

      </div>

    </section>
  );
};

export default MostPopularServices;