import React from "react";
import { useParams } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

// ================= PHOTOGRAPHY =================

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";

// ================= CATERING =================

import catering11 from "../../assets/catering11.jpg";
import catering22 from "../../assets/catering22.jpg";
import catering33 from "../../assets/catering33.jpg";
import catering44 from "../../assets/catering44.jpg";
import catering55 from "../../assets/catering55.jpg";

// ================= LIGHTING =================

import lighting111 from "../../assets/lighting111.jpg";
import lighting22 from "../../assets/lighting22.jpg";
import lighting33 from "../../assets/lighting33.jpg";
import lighting44 from "../../assets/lighting44.jpg";
import lighting55 from "../../assets/lighting55.jpg";

// =====================================================
// PORTFOLIO DATA
// =====================================================

const portfolioData = {
  photography: {
    service: "General Photography",
    event: "Corporate Event",
    eventTitle: "United Agro's Grand Launch Event 2026",

    images: [
      image1,
      image2,
      image3,
      image4,
      image5,
    ],

    alt: [
      "United Agro event",
      "Corporate building",
      "Corporate event audience",
      "Corporate launch event",
      "Corporate professional",
    ],

    description:
      "The United Agro Event 2026, bringing together progressive farmers, agricultural leaders, and emerging agro innovators under one inspiring platform, was thoughtfully captured and documented by our team. From engaging interactions to powerful showcase moments, every frame highlighted the energy, vision, and collaborative spirit that made the event truly memorable.",

    buttonText: "Contact Us",
  },

  catering: {
    service: "Event Catering",
    event: "Wedding Event",
    eventTitle: "Grand Wedding Catering 2026",

    images: [
      catering11,
      catering22,
      catering33,
      catering44,
      catering55,
    ],

    alt: [
      "Wedding catering food",
      "Catering dishes",
      "Wedding buffet",
      "Catering setup",
      "Wedding dining",
    ],

    description:
      "Our catering team creates delicious and beautifully presented food experiences for weddings, celebrations, corporate events, and special occasions. Every dish is prepared with quality ingredients, traditional flavours, attractive presentation, and professional service.",

    buttonText: "Contact Us",
  },

  lighting: {
    service: "Event Lighting",
    event: "Wedding Event",
    eventTitle: "Grand Wedding Lighting 2026",

    images: [
      lighting111,
      lighting22,
      lighting33,
      lighting44,
      lighting55,
    ],

    alt: [
      "Wedding lighting",
      "Event lighting setup",
      "Decorative lighting",
      "Wedding stage lighting",
      "Event decoration",
    ],

    description:
      "Our professional lighting team creates elegant and vibrant lighting arrangements for weddings, parties, corporate events, and celebrations. From decorative lights to stage illumination, every setup is carefully planned to create the perfect atmosphere.",

    buttonText: "Contact Us",
  },
};

// =====================================================
// COMPONENT
// =====================================================

const ExploreCapturedMoments = () => {
  const { type } = useParams();

  const data =
    portfolioData[type] || portfolioData.photography;

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

      {/* =================================================
          HEADING
          ================================================= */}

      <h2
        className="
          text-center
          text-[24px]
          font-medium
          leading-[1.2]
          text-[#252525]

          sm:text-[18px]
          md:text-[19px]
        "
      >
        Explore All Captured Moments
      </h2>


      {/* =================================================
          FILTERS
          ================================================= */}

      <div
        className="
          mx-auto
          mt-5
          flex
          w-full
          max-w-[1050px]
          flex-wrap
          items-center
          gap-x-7
          gap-y-3
          text-[18px]
          text-[#2E2E2E]

          sm:text-[12px]
        "
      >

        {/* EVENT TYPE */}

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
              text-[14px]
              text-[#e00000]
              outline-none

              sm:text-[11px]
            "
          >
            <option value="Corporate">
              Corporate
            </option>

            <option value="Wedding">
              Wedding
            </option>

            <option value="Birthday">
              Birthday
            </option>
          </select>

        </div>


        {/* SERVICE TYPE */}

        <div className="flex items-center gap-2">

          <span className="whitespace-nowrap">
            Service type
          </span>

          <select
            defaultValue={data.service}
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

            <option value="Event Catering">
              Event Catering
            </option>

            <option value="Event Lighting">
              Event Lighting
            </option>

          </select>

        </div>

      </div>


      {/* =================================================
          MAIN CARD
          ================================================= */}

      <div
        className="
          mx-auto
          mt-3
          w-full
          max-w-[1050px]
          overflow-hidden
          rounded-[5px]
          bg-white
        "
      >

        {/* =================================================
            CARD HEADER
            ================================================= */}

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

          {/* LEFT */}

          <div className="flex items-center gap-2">

            <span
              className="
                flex
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

              <FaCamera
                className="
                  text-[12px]
                  text-white

                  sm:text-[7px]
                "
              />

              <span>
                {data.service}
              </span>

            </span>

            <span>
              {data.event}
            </span>

          </div>


          {/* RIGHT */}

          <span className="whitespace-nowrap">
            {data.eventTitle}
          </span>

        </div>


        {/* =================================================
            CARD BODY
            ================================================= */}

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
            lg:gap-4
          "
        >

          {/* =================================================
              LEFT EVENT LIST
              ================================================= */}

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
                text-[16px]
                leading-[1.4]
                text-[#333333]

                sm:text-[10px]
              "
            >

              <li className="cursor-pointer font-medium text-[#b00000]">
                › {data.eventTitle}
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


          {/* =================================================
              RIGHT CONTENT
              ================================================= */}

          <div className="min-w-0">

            {/* =================================================
                IMAGE GALLERY
                ================================================= */}

            <div
              className="
                grid
                w-full
                min-w-0
                grid-cols-1
                gap-2

                sm:grid-cols-1

                lg:h-[435px]
                lg:grid-cols-[1fr_1fr_1.4fr_1.4fr]
                lg:grid-rows-[190px_240px]
                lg:gap-[5px]
              "
            >

              {/* =================================================
                  IMAGE 1
                  TOP LEFT
                  ================================================= */}

              <div
                className="
                  h-[180px]
                  w-full
                  overflow-hidden
                  rounded-[3px]
                  bg-white

                  sm:h-[220px]

                  lg:h-auto
                  lg:col-start-1
                  lg:row-start-1
                "
              >

                <img
                  src={data.images[0]}
                  alt={data.alt[0]}
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                  "
                />

              </div>


              {/* =================================================
                  IMAGE 2
                  TOP SECOND
                  ================================================= */}

              <div
                className="
                  h-[180px]
                  w-full
                  overflow-hidden
                  rounded-[3px]
                  bg-white

                  sm:h-[220px]

                  lg:h-auto
                  lg:col-start-2
                  lg:row-start-1
                "
              >

                <img
                  src={data.images[1]}
                  alt={data.alt[1]}
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                  "
                />

              </div>


              {/* =================================================
                  IMAGE 3
                  BOTTOM WIDE
                  ================================================= */}

              <div
                className="
                  h-[240px]
                  w-full
                  overflow-hidden
                  rounded-[3px]
                  bg-white

                  sm:h-[240px]

                  lg:h-auto
                  lg:col-start-1
                  lg:col-span-2
                  lg:row-start-2
                "
              >

                <img
                  src={data.images[2]}
                  alt={data.alt[2]}
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                  "
                />

              </div>


              {/* =================================================
                  IMAGE 4
                  MIDDLE FULL HEIGHT
                  ================================================= */}

              <div
                className="
                  h-[280px]
                  w-full
                  overflow-hidden
                  rounded-[3px]
                  bg-white

                  sm:h-[280px]

                  lg:h-auto
                  lg:col-start-3
                  lg:row-start-1
                  lg:row-span-2
                "
              >

                <img
                  src={data.images[3]}
                  alt={data.alt[3]}
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                  "
                />

              </div>


              {/* =================================================
                  IMAGE 5
                  RIGHT FULL HEIGHT
                  ================================================= */}

              <div
                className="
                  h-[280px]
                  w-full
                  overflow-hidden
                  rounded-[3px]
                  bg-white

                  sm:h-[280px]

                  lg:h-auto
                  lg:col-start-4
                  lg:row-start-1
                  lg:row-span-2
                "
              >

                <img
                  src={data.images[4]}
                  alt={data.alt[4]}
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                  "
                />

              </div>

            </div>


            {/* =================================================
                DESCRIPTION
                ================================================= */}

            <p
              className="
                mt-2
                px-1
                text-[12px]
                leading-[1.45]
                text-[#555555]

                sm:text-[8px]
              "
            >
              {data.description}
            </p>

          </div>

        </div>

      </div>


      {/* =================================================
          CONTACT BUTTON
          ================================================= */}

      <div className="flex justify-center pt-5">

        <button
          type="button"
          className="
            cursor-pointer
            rounded-[4px]
            bg-[#b00000]
            px-4
            py-2
            text-[16px]
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-[#8f0000]
          "
        >
          {data.buttonText}
        </button>

      </div>

    </section>
  );
};

export default ExploreCapturedMoments;