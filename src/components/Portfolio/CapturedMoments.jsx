import React from "react";
import { FaCamera } from "react-icons/fa";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";

const ExploreCapturedMoments = () => {
  return (
    <section
      className="
        w-full
        bg-[#f7f7f7]
        px-4
        py-6
        sm:px-6
        md:px-8
        lg:px-10
      "
    >
      {/* ================= HEADING ================= */}
      <h2
        className="
          text-center
          text-[17px]
          font-medium
          leading-[1.2]
          text-[#222222]
          sm:text-[18px]
          md:text-[19px]
        "
      >
        Explore All Captured Moments
      </h2>

      {/* ================= FILTERS ================= */}
      <div
        className="
          mx-auto
          mt-5
          flex
          w-full
          max-w-[850px]
          flex-wrap
          items-center
          gap-x-7
          gap-y-3
          text-[10px]
          text-[#222222]
          sm:text-[11px]
        "
      >
        {/* Event Type */}
        <div className="flex items-center gap-2">
          <span className="whitespace-nowrap">
            Event Type
          </span>

          <select
            defaultValue="Corporate"
            className="
              h-7
              cursor-pointer
              rounded-[4px]
              border
              border-black
              bg-white
              px-2
              text-[9px]
              text-[#e00000]
              outline-none
              sm:text-[10px]
            "
          >
            <option value="Corporate">Corporate</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
          </select>
        </div>

        {/* Service Type */}
        <div className="flex items-center gap-2">
          <span className="whitespace-nowrap">
            Service type
          </span>

          <select
            defaultValue="General Photography"
            className="
              h-7
              cursor-pointer
              rounded-[4px]
              border
              border-black
              bg-white
              px-2
              text-[9px]
              text-[#e00000]
              outline-none
              sm:text-[10px]
            "
          >
            <option value="General Photography">
              General Photography
            </option>

            <option value="Candid Photography">
              Candid Photography
            </option>

            <option value="Videography">
              Videography
            </option>
          </select>
        </div>
      </div>

      {/* ================= MAIN CARD ================= */}
      <div
        className="
          mx-auto
          mt-3
          w-full
          max-w-[850px]
          overflow-hidden
          rounded-[5px]
          bg-white
        "
      >
        {/* ================= CARD HEADER ================= */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-between
            gap-2
            px-4
            pt-3
            text-[7px]
            text-[#222222]
            sm:px-5
            sm:text-[8px]
          "
        >
          {/* LEFT HEADER */}
          <div className="flex items-center gap-2">
            <span
              className="
                flex
                cursor-pointer
                items-center
                gap-1
                rounded-[2px]
                bg-[#202020]
                px-3
                py-[4px]
                text-[6px]
                font-medium
                text-white
                sm:text-[7px]
              "
            >
              <FaCamera className="text-[6px] text-white sm:text-[7px]" />

              <span>
                General Photography
              </span>
            </span>

            <span>
              Corporate Event
            </span>
          </div>

          {/* RIGHT HEADER */}
          <span className="whitespace-nowrap">
            United Agro&apos;s Grand Launch Event 2026
          </span>
        </div>

        {/* ================= CARD BODY ================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            px-4
            pb-4
            pt-3
            sm:px-5
            lg:grid-cols-[205px_1fr]
            lg:gap-3
          "
        >
          {/* ================= LEFT EVENT LIST ================= */}
          <div
            className="
              border-t
              border-[#bdbdbd]
              pt-2
              lg:border-t-0
              lg:pt-0
            "
          >
            <div
              className="
                hidden
                border-t
                border-[#bdbdbd]
                pt-2
                lg:block
              "
            />

            <ul
              className="
                space-y-2
                text-[9px]
                leading-[1.4]
                text-[#333333]
                sm:text-[10px]
              "
            >
              <li className="cursor-pointer font-medium text-[#b00000]">
                › United Agro&apos;s Grand Launch
              </li>

              <li className="cursor-pointer">
                › Miss India Event 2024
              </li>

              <li className="cursor-pointer">
                › ITC Jubilee Celebrations
              </li>

              <li className="cursor-pointer">
                › 14 Reels Production - Success Meet
              </li>

              <li className="cursor-pointer">
                › Narayana Institutions With Chaitanya
              </li>
            </ul>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="min-w-0">

            {/* ================= IMAGE GALLERY ================= */}
            <div
              className="
                grid
                w-full
                min-w-0
                grid-cols-1
                gap-2

                sm:grid-cols-2

                lg:h-[195px]
                lg:grid-cols-[88px_88px_106px_106px]
                lg:grid-rows-[88px_102px]
                lg:gap-[5px]
              "
            >

              {/* ================= IMAGE 1 ================= */}
              <div
                className="
                  col-start-1
                  row-start-1
                  w-full
                  overflow-hidden
                  rounded-[2px]
                  bg-white

                  sm:col-start-1
                  sm:row-start-1

                  lg:col-start-1
                  lg:row-start-1
                  lg:row-span-1
                "
              >
                <img
                  src={image1}
                  alt="United Agro event"
                  className="
                    block
                    h-auto
                    w-full
                    object-contain
                    lg:h-full
                    lg:w-full
                  "
                />
              </div>

              {/* ================= IMAGE 2 ================= */}
              <div
                className="
                  col-start-1
                  row-start-2
                  w-full
                  overflow-hidden
                  rounded-[2px]
                  bg-white

                  sm:col-start-2
                  sm:row-start-1

                  lg:col-start-2
                  lg:row-start-1
                  lg:row-span-1
                "
              >
                <img
                  src={image2}
                  alt="Corporate building"
                  className="
                    block
                    h-auto
                    w-full
                    object-contain
                    lg:h-full
                    lg:w-full
                  "
                />
              </div>

              {/* ================= IMAGE 3 ================= */}
              <div
                className="
                  col-start-1
                  row-start-3
                  w-full
                  overflow-hidden
                  rounded-[2px]
                  bg-white

                  sm:col-span-2
                  sm:row-start-2

                  lg:col-start-1
                  lg:col-span-2
                  lg:row-start-2
                "
              >
                <img
                  src={image3}
                  alt="Corporate event audience"
                  className="
                    block
                    h-auto
                    w-full
                    object-contain
                    lg:h-full
                    lg:w-full
                  "
                />
              </div>

              {/* ================= IMAGE 4 ================= */}
              <div
                className="
                  col-start-1
                  row-start-4
                  w-full
                  overflow-hidden
                  rounded-[2px]
                  bg-white

                  sm:col-start-1
                  sm:row-start-3

                  lg:col-start-3
                  lg:row-start-1
                  lg:row-span-2
                "
              >
                <img
                  src={image4}
                  alt="Corporate launch event"
                  className="
                    block
                    h-auto
                    w-full
                    object-contain
                    lg:h-full
                    lg:w-full
                  "
                />
              </div>

              {/* ================= IMAGE 5 ================= */}
              <div
                className="
                  col-start-1
                  row-start-5
                  w-full
                  overflow-hidden
                  rounded-[2px]
                  bg-white

                  sm:col-start-2
                  sm:row-start-3

                  lg:col-start-4
                  lg:row-start-1
                  lg:row-span-2
                "
              >
                <img
                  src={image5}
                  alt="Corporate professional"
                  className="
                    block
                    h-auto
                    w-full
                    object-contain
                    lg:h-full
                    lg:w-full
                  "
                />
              </div>

            </div>

            {/* ================= DESCRIPTION ================= */}
            <p
              className="
                mt-2
                px-1
                text-[7px]
                leading-[1.45]
                text-[#555555]
                sm:text-[8px]
              "
            >
              The United Agro Event 2026, bringing together progressive
              farmers, agricultural leaders, and emerging agro innovators
              under one inspiring platform, was thoughtfully captured and
              documented by our team. From engaging interactions to
              powerful showcase moments, every frame highlighted the
              energy, vision, and collaborative spirit that made the event
              truly memorable.
            </p>

          </div>
        </div>
      </div>

      {/* ================= CONTACT BUTTON ================= */}
      <div className="flex justify-center pt-5">
        <button
          type="button"
          className="
            cursor-pointer
            rounded-[4px]
            bg-[#b00000]
            px-4
            py-2
            text-[9px]
            font-medium
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-[#8f0000]
          "
        >
          Contact Us
        </button>
      </div>

    </section>
  );
};

export default ExploreCapturedMoments;