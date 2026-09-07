import React from "react";
import { FaPhone } from "react-icons/fa";

const MostPopularServices = () => {
  return (
    <section
      className="
        w-full
        bg-[#f7f7f7]
        px-4
        pb-8
        pt-8
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
          sm:text-[18px]
          md:text-[19px]
        "
      >
        Most Popular Services By Us
      </h2>

      {/* ================= SERVICE CARDS ================= */}
      <div
        className="
          mx-auto
          mt-6
          grid
          w-full
          max-w-[900px]
          grid-cols-1
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          lg:items-start
          lg:gap-6
        "
      >
        {/* ===================================================== */}
        {/* LEFT COLUMN - FIXED PACKAGE */}
        {/* ===================================================== */}

        <div className="flex w-full flex-col">
          <div
            className="
              w-full
              overflow-hidden
              rounded-[6px]
              bg-white
              shadow-[0_2px_5px_rgba(0,0,0,0.25)]
            "
          >
            {/* Top Label */}
            <div
              className="
                px-2
                py-2
                text-[12px]
                text-[#181111]
                sm:text-[13px]
              "
            >
              Fixed Package
            </div>

            {/* Green Header */}
            <div
              className="
                flex
                items-center
                justify-between
                bg-[#007d2b]
                px-2
                py-1.5
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
                All Rounder Package
              </span>

              <span
                className="
                  text-[8px]
                  font-medium
                  sm:text-[9px]
                "
              >
                Consists of :
              </span>
            </div>

            {/* Services */}
            <div className="px-2 py-3">
              {/* General Photography */}
              <div>
                <h3
                  className="
                    text-[14px]
                    font-semibold
                    text-[#570000]
                    sm:text-[15px]
                  "
                >
                  General Photography
                </h3>

                <p
                  className="
                    mt-1
                    text-[9px]
                    leading-[1.45]
                    text-[#555555]
                    sm:text-[10px]
                  "
                >
                  Capturing all the key event moments with clarity and
                  creativity.
                </p>
              </div>

              {/* Portrait Photography */}
              <div className="mt-3">
                <h3
                  className="
                    text-[14px]
                    font-semibold
                    text-[#570000]
                    sm:text-[15px]
                  "
                >
                  Portrait Photography
                </h3>

                <p
                  className="
                    mt-1
                    text-[9px]
                    leading-[1.45]
                    text-[#555555]
                    sm:text-[10px]
                  "
                >
                  Portrait Photography capturing elegant and expressive
                  individual portraits beautifully.
                </p>
              </div>

              {/* Videography */}
              <div className="mt-3">
                <h3
                  className="
                    text-[14px]
                    font-semibold
                    text-[#570000]
                    sm:text-[15px]
                  "
                >
                  Videography
                </h3>

                <p
                  className="
                    mt-1
                    text-[9px]
                    leading-[1.45]
                    text-[#555555]
                    sm:text-[10px]
                  "
                >
                  Videography capturing events through cinematic and
                  memorable video storytelling.
                </p>
              </div>

              {/* Divider */}
              <div className="my-2 border-t border-[#777777]" />

              {/* Add Ons */}
              <span
                className="
                  inline-block
                  bg-[#ffc400]
                  px-2
                  py-1
                  text-[9px]
                  font-medium
                  text-white
                  sm:text-[10px]
                "
              >
                Add Ons
              </span>

              {/* Dronography */}
              <div className="mt-2">
                <h3
                  className="
                    text-[14px]
                    font-semibold
                    text-[#570000]
                    sm:text-[15px]
                  "
                >
                  Dronography
                </h3>

                <p
                  className="
                    mt-1
                    text-[9px]
                    leading-[1.45]
                    text-[#555555]
                    sm:text-[10px]
                  "
                >
                  Drone Photography capturing stunning aerial views and
                  cinematic event moments.
                </p>
              </div>
            </div>

            {/* Price */}
            <div
              className="
                bg-[#970000]
                px-2
                py-3
                text-center
                text-white
              "
            >
              <p
                className="
                  text-[11px]
                  sm:text-[12px]
                "
              >
                Starting from{" "}
                <span
                  className="
                    text-[19px]
                    font-bold
                    sm:text-[20px]
                  "
                >
                  ₹ 43,300/-
                </span>
              </p>

              <button
                type="button"
                className="
                  mx-auto
                  mt-2
                  flex
                  cursor-pointer
                  items-center
                  justify-center
                  gap-1
                  rounded-[3px]
                  bg-black
                  px-4
                  py-1.5
                  text-[8px]
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <FaPhone className="rotate-90 text-[14px] text-[#FFAA00]" />
                Register Pack
              </button>
            </div>
          </div>

          {/* View Packages */}
          <button
            type="button"
            className="
              mt-4
              cursor-pointer
              text-center
              text-[11px]
              text-black
              underline
              sm:text-[12px]
            "
          >
            View all packages
          </button>
        </div>

        {/* ===================================================== */}
        {/* MIDDLE COLUMN - SERVICES */}
        {/* ===================================================== */}

        <div className="flex w-full flex-col gap-4">
          {/* General Photography */}
          <div
            className="
              overflow-hidden
              rounded-[6px]
              bg-white
              shadow-[0_2px_5px_rgba(0,0,0,0.25)]
            "
          >
            {/* Label */}
            <div
              className="
                px-2
                py-2
                text-[11px]
                text-[#333333]
                sm:text-[12px]
              "
            >
              Specific Price Based Service
            </div>

            {/* Green Header */}
            <div
              className="
                flex
                items-center
                justify-between
                bg-[#007d2b]
                px-2
                py-1.5
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
                General Photography
              </span>

              <span
                className="
                  text-[8px]
                  font-medium
                  sm:text-[9px]
                "
              >
                Consists of :
              </span>
            </div>

            {/* Service Content */}
            <div className="px-2 py-3">
              <h3
                className="
                  text-[14px]
                  font-semibold
                  text-[#570000]
                  sm:text-[15px]
                "
              >
                General Photography
              </h3>

              <p
                className="
                  mt-1
                  text-[9px]
                  leading-[1.45]
                  text-[#555555]
                  sm:text-[10px]
                "
              >
                Capturing all the key event moments with clarity and
                creativity.
              </p>
            </div>

            {/* Price */}
            <div
              className="
                bg-[#b00000]
                px-2
                py-3
                text-center
                text-white
              "
            >
              <p
                className="
                  text-[11px]
                  sm:text-[12px]
                "
              >
                Starting from{" "}
                <span
                  className="
                    text-[19px]
                    font-bold
                    sm:text-[20px]
                  "
                >
                  ₹ 10,300/-
                </span>
              </p>

              <button
                type="button"
                className="
                  mx-auto
                  mt-2
                  flex
                  cursor-pointer
                  items-center
                  justify-center
                  gap-1
                  rounded-[3px]
                  bg-black
                  px-4
                  py-1.5
                  text-[8px]
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <FaPhone className="rotate-90 text-[14px] text-[#FFAA00]" />
                Register Pack
              </button>
            </div>
          </div>

          {/* Videography */}
          <div
            className="
              overflow-hidden
              rounded-[6px]
              bg-white
              shadow-[0_2px_5px_rgba(0,0,0,0.25)]
            "
          >
            {/* Label */}
            <div
              className="
                px-2
                py-2
                text-[11px]
                text-[#333333]
                sm:text-[12px]
              "
            >
              Specific Price Based Service
            </div>

            {/* Green Header */}
            <div
              className="
                flex
                items-center
                justify-between
                bg-[#007d2b]
                px-2
                py-1.5
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
                Videography
              </span>

              <span
                className="
                  text-[8px]
                  font-medium
                  sm:text-[9px]
                "
              >
                Consists of :
              </span>
            </div>

            {/* Service Content */}
            <div className="px-2 py-3">
              <h3
                className="
                  text-[14px]
                  font-semibold
                  text-[#570000]
                  sm:text-[15px]
                "
              >
                Videography
              </h3>

              <p
                className="
                  mt-1
                  text-[9px]
                  leading-[1.45]
                  text-[#555555]
                  sm:text-[10px]
                "
              >
                Videography capturing events through cinematic and
                memorable video storytelling.
              </p>
            </div>

            {/* Price */}
            <div
              className="
                bg-[#b00000]
                px-2
                py-3
                text-center
                text-white
              "
            >
              <p
                className="
                  text-[11px]
                  sm:text-[12px]
                "
              >
                Starting from{" "}
                <span
                  className="
                    text-[19px]
                    font-bold
                    sm:text-[20px]
                  "
                >
                  ₹ 17,300/-
                </span>
              </p>

              <button
                type="button"
                className="
                  mx-auto
                  mt-2
                  flex
                  cursor-pointer
                  items-center
                  justify-center
                  gap-1
                  rounded-[3px]
                  bg-black
                  px-4
                  py-1.5
                  text-[8px]
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <FaPhone className="rotate-90 text-[14px] text-[#FFAA00]" />
                Register Pack
              </button>
            </div>
          </div>

          {/* View Services */}
          <button
            type="button"
            className="
              cursor-pointer
              text-center
              text-[11px]
              text-black
              underline
              sm:text-[12px]
            "
          >
            View all Services
          </button>
        </div>

        {/* ===================================================== */}
        {/* RIGHT COLUMN - ADD ONS */}
        {/* ===================================================== */}

        <div className="flex w-full flex-col gap-4">
          {/* Dronography */}
          <div
            className="
              overflow-hidden
              rounded-[6px]
              bg-white
              shadow-[0_2px_5px_rgba(0,0,0,0.25)]
            "
          >
            {/* Label */}
            <div
              className="
                px-2
                py-2
                text-[10px]
                text-[#333333]
                sm:text-[11px]
              "
            >
              Add On : Needs atleast a single service registration
            </div>

            {/* Orange Header */}
            <div
              className="
                flex
                items-center
                justify-between
                bg-[#f2a900]
                px-2
                py-1.5
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
                Dronography
              </span>

              <span
                className="
                  text-[8px]
                  font-medium
                  sm:text-[9px]
                "
              >
                Consists of :
              </span>
            </div>

            {/* Content */}
            <div className="px-2 py-3">
              <h3
                className="
                  text-[14px]
                  font-semibold
                  text-[#570000]
                  sm:text-[15px]
                "
              >
                Dronography
              </h3>

              <p
                className="
                  mt-1
                  text-[9px]
                  leading-[1.45]
                  text-[#555555]
                  sm:text-[10px]
                "
              >
                Drone Photography capturing stunning aerial views and
                cinematic event moments.
              </p>

              <p
                className="
                  mt-4
                  text-center
                  text-[11px]
                  text-[#333333]
                  sm:text-[12px]
                "
              >
                Starting from{" "}
                <span
                  className="
                    text-[19px]
                    font-bold
                    sm:text-[20px]
                  "
                >
                  ₹ 6,500/-
                </span>
              </p>
            </div>
          </div>

          {/* Instant Reels */}
          <div
            className="
              overflow-hidden
              rounded-[6px]
              bg-white
              shadow-[0_2px_5px_rgba(0,0,0,0.25)]
            "
          >
            {/* Label */}
            <div
              className="
                px-2
                py-2
                text-[10px]
                text-[#333333]
                sm:text-[11px]
              "
            >
              Add On : Needs atleast a single service registration
            </div>

            {/* Orange Header */}
            <div
              className="
                flex
                items-center
                justify-between
                bg-[#f2a900]
                px-2
                py-1.5
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
                Instant Reels
              </span>

              <span
                className="
                  text-[8px]
                  font-medium
                  sm:text-[9px]
                "
              >
                Consists of :
              </span>
            </div>

            {/* Content */}
            <div className="px-2 py-3">
              <h3
                className="
                  text-[14px]
                  font-semibold
                  text-[#570000]
                  sm:text-[15px]
                "
              >
                Instant Reels
              </h3>

              <p
                className="
                  mt-1
                  text-[9px]
                  leading-[1.45]
                  text-[#555555]
                  sm:text-[10px]
                "
              >
                We will be Creating Instant 30-second reels with quick
                editing and delivery within 5 minutes for instant social
                sharing.
              </p>

              <p
                className="
                  mt-4
                  text-center
                  text-[11px]
                  text-[#333333]
                  sm:text-[12px]
                "
              >
                Starting from{" "}
                <span
                  className="
                    text-[19px]
                    font-bold
                    sm:text-[20px]
                  "
                >
                  ₹ 5,500/-
                </span>
              </p>
            </div>
          </div>

          {/* View Add Ons */}
          <button
            type="button"
            className="
              cursor-pointer
              text-center
              text-[11px]
              text-black
              underline
              sm:text-[12px]
            "
          >
            View all Add Ons
          </button>
        </div>
      </div>

      {/* ===================================================== */}
      {/* TERMS AND CONDITIONS */}
      {/* ===================================================== */}

      <div
        className="
          flex
          justify-center
          px-4
          py-8
          sm:py-9
          md:py-10
        "
      >
        <button
          type="button"
          className="
            flex
            cursor-pointer
            items-center
            gap-2
            text-[16px]
            font-medium
            text-[#252525]
            sm:text-[17px]
            md:text-[18px]
          "
        >
          {/* ================= ORANGE SEARCH/PIN SHAPE ================= */}
          <svg
            width="36"
            height="46"
            viewBox="0 0 36 46"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            {/* Curved orange shape */}
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

            {/* White search circle */}
            <circle
              cx="16"
              cy="14.5"
              r="6.2"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
            />

            {/* White search handle */}
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

          {/* Terms text */}
          <span className="whitespace-nowrap">
            Terms and Conditions
          </span>
        </button>
      </div>
    </section>
  );
};

export default MostPopularServices;