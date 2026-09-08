import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useParams } from "react-router-dom";

// ================= PHOTOGRAPHY =================

import provider1 from "../../assets/provider11.png";
import provider2 from "../../assets/provider22.png";
import provider3 from "../../assets/provider33.png";

// ================= CATERING =================

import catering21 from "../../assets/catering21.jpg";
import catering31 from "../../assets/catering31.jpg";
import catering41 from "../../assets/catering41.jpg";

// ================= LIGHTING =================

import light11 from "../../assets/light11.jpg";
import light22 from "../../assets/light22.jpg";
import light33 from "../../assets/light33.jpg";

// ======================================================
// PROVIDER DATA
// ======================================================

const providerData = {
  photography: [
    {
      image: provider1,
      service: "Photography",
      name: "SHANKARA STUDIOS",
      location: "Hyderabad, Telangana",
      price: "₹15,000",
    },
    {
      image: provider2,
      service: "Photography",
      name: "HASTAGE PHOTOGRAPHY",
      location: "Vijayawada, Andhra Pradesh",
      price: "₹12,000",
    },
    {
      image: provider3,
      service: "Photography",
      name: "ELITE PHOTO STUDIO",
      location: "Hyderabad, Telangana",
      price: "₹5,999/-",
    },
  ],

  catering: [
    {
      image: catering21,
      service: "Catering",
      name: "MANGALAM CATERING",
      location: "Hyderabad, Telangana",
      price: "₹25,000",
    },
    {
      image: catering31,
      service: "Catering",
      name: "ANNAPURNA CATERERS",
      location: "Vijayawada, Andhra Pradesh",
      price: "₹20,000",
    },
    {
      image: catering41,
      service: "Catering",
      name: "SRI SAI CATERING",
      location: "Tirupati, Andhra Pradesh",
      price: "₹18,000",
    },
  ],

  lighting: [
    {
      image: light11,
      service: "Lighting",
      name: "ELITE LIGHTING",
      location: "Hyderabad, Telangana",
      price: "₹10,000",
    },
    {
      image: light22,
      service: "Lighting",
      name: "BRIGHT EVENTS",
      location: "Vijayawada, Andhra Pradesh",
      price: "₹8,500",
    },
    {
      image: light33,
      service: "Lighting",
      name: "ROYAL LIGHTING",
      location: "Tirupati, Andhra Pradesh",
      price: "₹7,500",
    },
  ],
};

// ======================================================
// COMPONENT
// ======================================================

const ExploreOtherServiceProviders = () => {
  const { type } = useParams();

  const providers =
    providerData[type] || providerData.photography;

  return (
    <section
      className="
        w-full
        border-t
        border-[#555555]
        bg-[#f7f7f7]
        px-4
        pb-12
        pt-5

        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12
      "
    >

      {/* ==================================================
          HEADING
          ================================================== */}

      <h2
        className="
          text-center
          text-[18px]
          font-medium
          leading-[1.2]
          text-[#252525]

          sm:text-[19px]
          md:text-[20px]
          lg:text-[21px]
        "
      >
        Explore Other Service Providers
      </h2>

      {/* ==================================================
          PROVIDERS CONTAINER
          ================================================== */}

      <div
        className="
          relative
          mx-auto
          mt-8
          w-full
          max-w-[1250px]
        "
      >

        {/* ==================================================
            LEFT ARROW
            ================================================== */}

        <button
          type="button"
          aria-label="Previous providers"
          className="
            absolute
            left-[-42px]
            top-1/2
            z-10
            hidden
            h-8
            w-8
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-[#c54b4b]
            text-white
            shadow-md
            transition-all
            duration-300
            hover:scale-110
            hover:bg-[#a90000]

            xl:flex
          "
        >
          <FaChevronLeft className="text-[11px]" />
        </button>

        {/* ==================================================
            PROVIDER GRID
            ================================================== */}

        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-9

            sm:grid-cols-2
            sm:gap-8

            lg:grid-cols-3
            lg:gap-9

            xl:gap-10
          "
        >

          {providers.map((provider, index) => (

            <div
              key={index}
              className="
                w-full
                min-w-0
              "
            >

              {/* ==================================================
                  IMAGE
                  ================================================== */}

              <div
                className="
                  relative
                  h-[225px]
                  w-full
                  overflow-hidden
                  rounded-[3px]

                  sm:h-[215px]

                  md:h-[225px]

                  lg:h-[235px]

                  xl:h-[240px]
                "
              >

                <img
                  src={provider.image}
                  alt={provider.name}
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                  "
                />

                {/* ==================================================
                    SERVICE LABEL
                    ================================================== */}

                <span
                  className="
                    absolute
                    left-2
                    top-2
                    rounded-[2px]
                    border
                    border-white
                    bg-black/60
                    px-2
                    py-1
                    text-[11px]
                    font-semibold
                    uppercase
                    text-white

                    sm:text-[12px]

                    md:text-[13px]
                  "
                >
                  {provider.service}
                </span>

                {/* ==================================================
                    PORTFOLIO
                    ================================================== */}

                <button
                  type="button"
                  className="
                    absolute
                    right-2
                    top-2
                    flex
                    cursor-pointer
                    items-center
                    gap-1
                    text-[9px]
                    font-semibold
                    text-[#ffd000]
                    transition-all
                    duration-300
                    hover:scale-105

                    sm:text-[10px]

                    md:text-[11px]
                  "
                >
                  Portfolio

                  <FaChevronRight className="text-[11px]" />
                </button>

                {/* ==================================================
                    STARTING PRICE
                    ================================================== */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    bg-black/80
                    px-3
                    py-2
                    text-[10px]
                    font-medium
                    text-white

                    sm:text-[11px]

                    md:text-[12px]
                  "
                >
                  STARTING FROM {provider.price}
                </div>

              </div>

              {/* ==================================================
                  PROVIDER DETAILS
                  ================================================== */}

              <div
                className="
                  mt-3
                  flex
                  items-start
                  justify-between
                  gap-4
                "
              >

                {/* ================= NAME ================= */}

                <div
                  className="
                    min-w-0
                    flex-1
                  "
                >

                  <h3
                    className="
                      truncate
                      text-[17px]
                      font-medium
                      leading-[1.2]
                      text-[#000000]

                      sm:text-[18px]

                      md:text-[19px]

                      lg:text-[20px]
                    "
                  >
                    {provider.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      leading-[1.3]
                      text-[#000000]

                      sm:text-[11px]

                      md:text-[12px]
                    "
                  >
                    {provider.location}
                  </p>

                </div>

                {/* ==================================================
                    BOOK NOW
                    ================================================== */}

                <button
                  type="button"
                  className="
                    shrink-0
                    cursor-pointer
                    whitespace-nowrap
                    rounded-[2px]
                    bg-[#a90000]
                    px-3
                    py-2
                    text-[10px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-[#850000]

                    sm:px-3.5
                    sm:py-2
                    sm:text-[11px]

                    md:px-4
                    md:py-2.5
                    md:text-[12px]
                  "
                >
                  BOOK NOW
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* ==================================================
            RIGHT ARROW
            ================================================== */}

        <button
          type="button"
          aria-label="Next providers"
          className="
            absolute
            right-[-42px]
            top-1/2
            z-10
            hidden
            h-8
            w-8
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-[#A70000]
            text-white
            shadow-md
            transition-all
            duration-300
            hover:scale-110
            hover:bg-[#850000]

            xl:flex
          "
        >
          <FaChevronRight className="text-[11px]" />
        </button>

      </div>

    </section>
  );
};

export default ExploreOtherServiceProviders;