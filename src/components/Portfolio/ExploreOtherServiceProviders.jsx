import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import provider1 from "../../assets/provider11.png";
import provider2 from "../../assets/provider22.png";
import provider3 from "../../assets/provider33.png";

const ExploreOtherServiceProviders = () => {
  return (
    <section
      className="
        w-full
        bg-[#f7f7f7]
        border-t
        border-[#555555]
        px-4
        pb-8
        pt-4
        sm:px-6
        md:px-8
        lg:px-10
      "
    >
      {/* ================= HEADING ================= */}
      <h2
        className="
          text-center
          text-[26px]
          font-medium
          text-[#252525]
          sm:text-[19px]
          md:text-[20px]
        "
      >
        Explore Other Service Providers
      </h2>

      {/* ================= PROVIDERS ================= */}
      <div
        className="
          relative
          mx-auto
          mt-6
          w-full
          max-w-[1000px]
        "
      >
        {/* LEFT ARROW */}
        <button
          type="button"
          aria-label="Previous providers"
          className="
            absolute
            left-[-32px]
            top-1/2
            z-10
            hidden
            h-6
            w-6
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-[#c54b4b]
            text-white
            sm:flex
          "
        >
          <FaChevronLeft className="text-[10px]" />
        </button>

        <div
          className="
            grid
            grid-cols-1
            gap-7
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-7
          "
        >
          {/* ================= PROVIDER 1 ================= */}
          <div className="w-full">
            <div
              className="
                relative
                h-[205px]
                w-full
                overflow-hidden
                sm:h-[190px]
                lg:h-[205px]
              "
            >
              <img
                src={provider1}
                alt="Shankara Studios"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* Photography Label */}
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
                  text-[14px]
                  font-semibold
                  text-white
                "
              >
                Photography
              </span>

              {/* Portfolio */}
              <button
                type="button"
                className="
                  absolute
                  right-2
                  top-2
                  cursor-pointer
                  text-[10px]
                  font-semibold
                  text-[#ffd000]
                "
              >
                Portfolio <FaChevronRight className="inline text-[14px]" />
              </button>

              {/* Starting Price */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  bg-black/80
                  px-3
                  py-1.5
                  text-[12px]
                  font-medium
                  text-white
                "
              >
                STARTING FROM ₹15,000
              </div>
            </div>

            {/* Provider Details */}
            <div className="mt-2 flex items-start justify-between gap-2">
              <div>
                <h3
                  className="
                    text-[21px]
                    font-medium
                    leading-none
                    text-[#000000]
                  "
                >
                  SHANKARA STUDIOS
                </h3>

                <p className="mt-1 text-[12px] text-[#000000]">
                  Hyderabad, Telangana
                </p>
              </div>

              <button
                type="button"
                className="
                  cursor-pointer
                  whitespace-nowrap
                  rounded-[2px]
                  bg-[#a90000]
                  px-3
                  py-2
                  text-[15px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#850000]
                "
              >
                BOOK NOW
              </button>
            </div>
          </div>

          {/* ================= PROVIDER 2 ================= */}
          <div className="w-full">
            <div
              className="
                relative
                h-[205px]
                w-full
                overflow-hidden
                sm:h-[190px]
                lg:h-[205px]
              "
            >
              <img
                src={provider2}
                alt="Hastage Photography"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* Photography Label */}
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
                  text-[14px]
                  font-medium
                  uppercase
                  text-white
                "
              >
                PHOTOGRAPHY
              </span>

              {/* Portfolio */}
              <button
                type="button"
                className="
                  absolute
                  right-2
                  top-2
                  cursor-pointer
                  text-[10px]
                  font-semibold
                  text-[#ffd000]
                "
              >
                Portfolio <FaChevronRight className="inline text-[14px]" />
              </button>

              {/* Starting Price */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  bg-black/80
                  px-3
                  py-1.5
                  text-[12px]
                  font-medium
                  text-white
                "
              >
                STARTING FROM ₹12,000
              </div>
            </div>

            {/* Provider Details */}
            <div className="mt-2 flex items-start justify-between gap-2">
              <div>
                <h3
                  className="
                    text-[21px]
                    font-medium
                    leading-none
                    text-[#111111]
                  "
                >
                  HASTAGE PHOTOGRAPHY
                </h3>

                <p className="mt-1 text-[12px] text-[#000000]">
                  Vijayawada, Andhra Pradesh
                </p>
              </div>

              <button
                type="button"
                className="
                  cursor-pointer
                  whitespace-nowrap
                  rounded-[2px]
                  bg-[#a90000]
                  px-3
                  py-2
                  text-[15px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#850000]
                "
              >
                BOOK NOW
              </button>
            </div>
          </div>

          {/* ================= PROVIDER 3 ================= */}
          <div className="w-full">
            <div
              className="
                relative
                h-[205px]
                w-full
                overflow-hidden
                sm:h-[190px]
                lg:h-[205px]
              "
            >
              <img
                src={provider3}
                alt="Elite Photo Studio"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* Photography Label */}
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
                  text-[14px]
                  font-medium
                  uppercase
                  text-white
                "
              >
                PHOTOGRAPHY
              </span>

              {/* Portfolio */}
              <button
                type="button"
                className="
                  absolute
                  right-2
                  top-2
                  cursor-pointer
                  text-[10px]
                  font-semibold
                  text-[#ffd000]
                "
              >
                Portfolio <FaChevronRight className="inline text-[12px]" />
              </button>

              {/* Starting Price */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  bg-black/80
                  px-3
                  py-1.5
                  text-[12px]
                  font-medium
                  text-white
                "
              >
                STARTING FROM ₹5999/-
              </div>
            </div>

            {/* Provider Details */}
            <div className="mt-2 flex items-start justify-between gap-2">
              <div>
                <h3
                  className="
                    text-[21px]
                    font-medium
                    leading-none
                    text-[#111111]
                  "
                >
                  ELITE PHOTO STUDIO
                </h3>

                <p className="mt-1 text-[12px] text-[#333333]">
                  Hyderabad, Telangana
                </p>
              </div>

              <button
                type="button"
                className="
                  cursor-pointer
                  whitespace-nowrap
                  rounded-[2px]
                  bg-[#a90000]
                  px-3
                  py-2
                  text-[15px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#850000]
                "
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          type="button"
          aria-label="Next providers"
          className="
            absolute
            right-[-32px]
            top-1/2
            z-10
            hidden
            h-6
            w-6
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-[#A70000]
            text-white
            sm:flex
          "
        >
          <FaChevronRight className="text-[10px]" />
        </button>
      </div>
    </section>
  );
};

export default ExploreOtherServiceProviders;