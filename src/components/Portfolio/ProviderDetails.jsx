import React from "react";
import { useParams } from "react-router-dom";

import {
  FaStar,
  FaMapMarkerAlt,
  FaUsers,
  FaClock,
  FaThumbsUp,
} from "react-icons/fa";

import { GiPartyPopper } from "react-icons/gi";
import { FiArrowUpRight } from "react-icons/fi";
import { PiSealCheckFill } from "react-icons/pi";

// ================= LOGOS =================

import artlaneLogo from "../../assets/artlane-logo.png";
import mangalamLogo from "../../assets/mangalam-logo.png";
import lightiningLogo from "../../assets/lightining-logo.avif";

// ================= PORTFOLIO DATA =================

const portfolioData = {
  photography: {
    name: "ARTLANE STUDIO",
    location: "Kondapur, Hyderabad",
    logo: artlaneLogo,
    rating: "4.9 (22 Reviews)",
    memberSince: "Member since 2018",
    totalEvents: "160+",
    experience: "12 Years",
    startingFrom: "₹ 12,000/-",
    responseRate: "98%",
  },

  catering: {
    name: "MANGALAM CATERERS",
    location: "Kukatpally, Hyderabad",
    logo: mangalamLogo,
    rating: "4.8 (35 Reviews)",
    memberSince: "Member since 2016",
    totalEvents: "250+",
    experience: "10 Years",
    startingFrom: "₹ 450/- Per Plate",
    responseRate: "97%",
  },

  lighting: {
    name: "ELITE LIGHTING SERVICES",
    location: "Madhapur, Hyderabad",
    logo: lightiningLogo,
    rating: "4.7 (28 Reviews)",
    memberSince: "Member since 2019",
    totalEvents: "180+",
    experience: "8 Years",
    startingFrom: "₹ 15,000/-",
    responseRate: "96%",
  },
};

// ================= COMPONENT =================

const ProviderDetails = () => {
  const { type } = useParams();

  // Get provider based on URL
  const provider =
    portfolioData[type] || portfolioData.photography;

  return (
    <section
      className="
        relative
        z-10
        -mt-[80px]
        w-full
        bg-gradient-to-r
        from-[#8b0000]
        to-[#260000]
        px-5
        pb-8
        pt-24
        text-white

        sm:-mt-[120px]
        sm:px-8
        sm:pb-10
        sm:pt-28

        md:-mt-[150px]
        md:px-10
        md:pb-12
        md:pt-28

        lg:-mt-[205px]
        lg:px-16
        lg:pb-14
        lg:pt-12
      "
    >

      {/* ================= LOGO ================= */}

      <div
        className="
          absolute
          left-1/2
          top-[-35px]
          z-20
          flex
          h-[90px]
          w-[90px]
          -translate-x-1/2
          items-center
          justify-center
          overflow-hidden
          rounded-full
          bg-[#151515]

          sm:left-8
          sm:top-[-35px]
          sm:h-[115px]
          sm:w-[115px]
          sm:translate-x-0

          md:left-10
          md:top-[-40px]
          md:h-[135px]
          md:w-[135px]

          lg:left-6
          lg:top-[-35px]
          lg:h-[160px]
          lg:w-[160px]
        "
      >
        <img
          src={provider.logo}
          alt={provider.name}
          className="
            h-full
            w-full
            object-contain
            p-2
            sm:p-3
          "
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]

          lg:ml-[150px]
          lg:max-w-[calc(100%-150px)]
        "
      >

        {/* ================= PROVIDER TOP ================= */}

        <div
          className="
            flex
            flex-col
            gap-5

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-4
          "
        >

          {/* ================= PROVIDER INFORMATION ================= */}

          <div className="min-w-0">

            {/* NAME + VERIFIED */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2
              "
            >

              <h2
                className="
                  text-[17px]
                  font-semibold
                  leading-none

                  sm:text-[19px]

                  md:text-[21px]
                "
              >
                {provider.name}
              </h2>

              {/* VERIFIED */}

              <span
                className="
                  flex
                  items-center
                  gap-1
                  rounded-[3px]
                  bg-[#ffbd00]
                  px-2
                  py-[3px]
                  text-[7px]
                  font-bold
                  leading-none
                  text-black
                "
              >
                <PiSealCheckFill className="text-[11px] text-black" />
                VERIFIED
              </span>

            </div>

            {/* ================= RATING / LOCATION / MEMBER ================= */}

            <div
              className="
                mt-2
                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-2
                text-[8px]

                sm:gap-x-5
                sm:text-[9px]

                md:text-[10px]
              "
            >

              {/* RATING */}

              <span
                className="
                  flex
                  items-center
                  gap-1
                  whitespace-nowrap
                "
              >
                <FaStar className="text-[12px] text-[#ffd000]" />

                <span>
                  {provider.rating}
                </span>
              </span>

              {/* LOCATION */}

              <span
                className="
                  flex
                  items-center
                  gap-1
                  whitespace-nowrap
                "
              >
                <FaMapMarkerAlt className="text-[12px] text-[#ffd000]" />

                <span>
                  {provider.location}
                </span>
              </span>

              {/* MEMBER SINCE */}

              <span className="whitespace-nowrap">
                {provider.memberSince}
              </span>

            </div>

          </div>

          {/* ================= REQUEST QUOTE ================= */}

          <button
            type="button"
            className="
              flex
              w-fit
              shrink-0
              cursor-pointer
              items-center
              gap-1
              rounded-[5px]
              bg-[#e50909]
              px-4
              py-2
              text-[9px]
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#ff1a1a]

              sm:px-5
              sm:py-2.5
              sm:text-[12px]

              md:text-[11px]
            "
          >
            Request Quote
            <FiArrowUpRight className="text-sm" />
          </button>

        </div>

        {/* ================= DIVIDER ================= */}

        <div className="mt-4 h-px w-full bg-white/50" />

        {/* ================= STATISTICS ================= */}

        <div
          className="
            mt-4
            grid
            grid-cols-2
            gap-x-5
            gap-y-4

            sm:grid-cols-4
            sm:gap-x-6
            sm:gap-y-3
          "
        >

          {/* ================= TOTAL EVENTS ================= */}

          <div className="flex items-center gap-2">

            <div
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#701d00]

                sm:h-8
                sm:w-8
              "
            >
              <GiPartyPopper
                className="
                  text-[14px]
                  text-[#ffd000]

                  sm:text-[15px]
                "
              />
            </div>

            <div className="min-w-0">

              <p
                className="
                  text-[7px]
                  text-white/70

                  sm:text-[12px]
                "
              >
                Total Events
              </p>

              <p
                className="
                  text-[10px]
                  font-medium

                  sm:text-[18px]
                "
              >
                {provider.totalEvents}
              </p>

            </div>

          </div>

          {/* ================= EXPERIENCE ================= */}

          <div className="flex items-center gap-2">

            <div
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#701d00]

                sm:h-8
                sm:w-8
              "
            >
              <FaClock
                className="
                  text-[11px]
                  text-[#ffd000]

                  sm:text-[12px]
                "
              />
            </div>

            <div className="min-w-0">

              <p
                className="
                  text-[7px]
                  text-white/70

                  sm:text-[12px]
                "
              >
                Experience
              </p>

              <p
                className="
                  text-[10px]
                  font-medium

                  sm:text-[18px]
                "
              >
                {provider.experience}
              </p>

            </div>

          </div>

          {/* ================= STARTING FROM ================= */}

          <div className="flex items-center gap-2">

            <div
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#701d00]

                sm:h-8
                sm:w-8
              "
            >
              <FaUsers
                className="
                  text-[11px]
                  text-[#ffd000]

                  sm:text-[12px]
                "
              />
            </div>

            <div className="min-w-0">

              <p
                className="
                  text-[7px]
                  text-white/70

                  sm:text-[12px]
                "
              >
                Starting From
              </p>

              <p
                className="
                  text-[10px]
                  font-medium

                  sm:text-[18px]
                "
              >
                {provider.startingFrom}
              </p>

            </div>

          </div>

          {/* ================= RESPONSE RATE ================= */}

          <div className="flex items-center gap-2">

            <div
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#701d00]

                sm:h-8
                sm:w-8
              "
            >
              <FaThumbsUp
                className="
                  text-[11px]
                  text-[#ffd000]

                  sm:text-[12px]
                "
              />
            </div>

            <div className="min-w-0">

              <p
                className="
                  text-[7px]
                  text-white/70

                  sm:text-[12px]
                "
              >
                Response Rate
              </p>

              <p
                className="
                  text-[10px]
                  font-medium

                  sm:text-[18px]
                "
              >
                {provider.responseRate}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProviderDetails;