import React from "react";
import {
  FaStar,
  FaClock,
  FaUsers,
  FaThumbsUp,
} from "react-icons/fa";

import { FiArrowUpRight } from "react-icons/fi";
import { GiPartyPopper } from "react-icons/gi";
import { PiSealCheckFill } from "react-icons/pi";

// =====================================================
// LOCAL ASSETS
// =====================================================

import profileCover from "../../assets/Photography1.png";
import profileLogo from "../../assets/artlane-logo.png";

const ProfileHero = () => {
  return (
    <section className="w-full overflow-hidden rounded-[6px] border border-[#777] bg-[#eeeeee]">

      {/* ================================================= */}
      {/* COVER IMAGE */}
      {/* ================================================= */}

      <div className="relative w-full overflow-hidden bg-[#eeeeee]">
        <img
          src={profileCover}
          alt="Artlane Studio Cover"
          className="block h-auto w-full object-contain"
        />
      </div>

      {/* ================================================= */}
      {/* PROFILE INFORMATION */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          mt-[0px]
          min-h-[420px]
          w-full
          bg-[#d9d9d9]
          px-[16px]
          pb-[20px]
          pt-[80px]

          sm:mt-[0px]
          sm:min-h-[350px]
          sm:px-[24px]
          sm:pt-[75px]

          md:-mt-[100px]
          md:min-h-[300px]
          md:px-[30px]
          md:pt-[65px]

          lg:-mt-[250px]
          lg:h-[186px]
          lg:min-h-0
          lg:px-0
          lg:pb-0
          lg:pt-0
        "
      >

        {/* ================================================= */}
        {/* PROFILE LOGO */}
        {/* ================================================= */}

        <div
          className="
            absolute
            left-[20px]
            top-[-42px]
            z-20
            flex
            h-[105px]
            w-[105px]
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border-[3px]
            border-[#d9d9d9]
            bg-black
            p-[7px]

            sm:left-[30px]
            sm:top-[-42px]
            sm:h-[115px]
            sm:w-[115px]

            md:left-[38px]
            md:top-[-42px]
            md:h-[122px]
            md:w-[122px]

            lg:left-[46px]
            lg:top-[-36px]
            lg:h-[126px]
            lg:w-[126px]
          "
        >
          <img
            src={profileLogo}
            alt="Artlane Studio Logo"
            className="block h-full w-full object-contain"
          />
        </div>

        {/* ================================================= */}
        {/* BUSINESS INFORMATION */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-20
            w-full

            lg:absolute
            lg:left-[196px]
            lg:top-[14px]
            lg:w-auto
          "
        >

          {/* BUSINESS NAME */}

          <div className="flex flex-wrap items-center gap-[7px]">

            <h1
              className="
                text-[22px]
                font-medium
                leading-none
                text-[#252525]

                sm:text-[26px]
                md:text-[30px]
                lg:text-[34px]
              "
            >
              ARTLANE STUDIO
            </h1>

            {/* VERIFIED */}

            <span
              className="
                flex
                shrink-0
                items-center
                gap-[4px]
                rounded-[3px]
                bg-[#ffc400]
                px-[6px]
                py-[4px]
                text-[10px]
                font-medium
                leading-none
                text-[#1C180D]

                lg:text-[12px]
              "
            >
              <PiSealCheckFill className="text-[13px]" />
              VERIFIED
            </span>

          </div>

          {/* BUSINESS DETAILS */}

          <div
            className="
              mt-[8px]
              flex
              flex-wrap
              items-center
              gap-x-[10px]
              gap-y-[5px]
            "
          >

            {/* RATING */}

            <div className="flex items-center gap-[3px]">
              <FaStar className="text-[8px] text-[#f2b900]" />

              <span className="text-[12px] text-[#252525] sm:text-[13px] lg:text-[14px]">
                4.9
              </span>

              <span className="text-[12px] text-[#6B7280] sm:text-[13px] lg:text-[14px]">
                (22 Reviews)
              </span>
            </div>

            {/* LOCATION */}

            <span className="text-[12px] text-[#6B7280] sm:text-[13px] lg:text-[14px]">
              Kondapur, Hyderabad
            </span>

            {/* MEMBER */}

            <span className="text-[12px] text-[#6B7280] sm:text-[13px] lg:text-[14px]">
              Member since 2018
            </span>

          </div>
        </div>

        {/* ================================================= */}
        {/* ACTION BUTTONS */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-20
            mt-[18px]
            flex
            flex-wrap
            gap-[8px]

            sm:mt-[18px]

            md:mt-[18px]

            lg:absolute
            lg:right-[18px]
            lg:top-[18px]
            lg:mt-0
          "
        >

          {/* EDIT PROFILE */}

          <button
            type="button"
            className="
              h-[42px]
              shrink-0
              cursor-pointer
              rounded-[4px]
              bg-white
              px-[14px]
              text-[14px]
              font-medium
              text-[#1C180D]
              shadow-sm

              sm:h-[46px]
              sm:text-[16px]

              lg:h-[52px]
              lg:text-[18px]
            "
          >
            Edit Profile
          </button>

          {/* VIEW PUBLIC PAGE */}

          <button
            type="button"
            className="
              flex
              h-[42px]
              shrink-0
              cursor-pointer
              items-center
              gap-[6px]
              whitespace-nowrap
              rounded-[4px]
              bg-[#970000]
              px-[14px]
              text-[14px]
              font-medium
              text-white

              sm:h-[46px]
              sm:text-[16px]

              lg:h-[57px]
              lg:text-[18px]
            "
          >
            View Public Page

            <FiArrowUpRight className="text-[18px] lg:text-[20px]" />
          </button>

        </div>

        {/* ================================================= */}
        {/* STATS */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-20
            mt-[24px]
            w-full

            sm:mt-[24px]

            md:mt-[22px]

            lg:absolute
            lg:bottom-[15px]
            lg:left-[195px]
            lg:right-[35px]
            lg:mt-0
            lg:w-auto
          "
        >

          <div
            className="
              grid
              grid-cols-2
              gap-[18px]

              sm:grid-cols-2
              sm:gap-[18px]

              md:grid-cols-4
              md:gap-[22px]

              lg:grid-cols-4
              lg:gap-[30px]
            "
          >

            {/* ================================================= */}
            {/* TOTAL EVENTS */}
            {/* ================================================= */}

            <div className="flex min-w-0 items-center gap-[7px]">

              <div
                className="
                  flex
                  h-[25px]
                  w-[25px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#eee5c8]
                "
              >
                <GiPartyPopper className="text-[14px] text-[#f1b900]" />
              </div>

              <div className="min-w-0">

                <p className="truncate text-[11px] text-[#6B7280] sm:text-[12px] lg:text-[14px]">
                  Total Events
                </p>

                <p className="text-[17px] font-semibold text-[#1C180D] sm:text-[18px] lg:text-[20px]">
                  160+
                </p>

              </div>
            </div>

            {/* ================================================= */}
            {/* EXPERIENCE */}
            {/* ================================================= */}

            <div className="flex min-w-0 items-center gap-[7px]">

              <div
                className="
                  flex
                  h-[25px]
                  w-[25px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#eee5c8]
                "
              >
                <FaClock className="text-[10px] text-[#f1b900]" />
              </div>

              <div className="min-w-0">

                <p className="truncate text-[11px] text-[#6B7280] sm:text-[12px] lg:text-[14px]">
                  Experience
                </p>

                <p className="text-[17px] font-semibold text-[#1C180D] sm:text-[18px] lg:text-[20px]">
                  12 Years
                </p>

              </div>
            </div>

            {/* ================================================= */}
            {/* TEAM SIZE */}
            {/* ================================================= */}

            <div className="flex min-w-0 items-center gap-[7px]">

              <div
                className="
                  flex
                  h-[25px]
                  w-[25px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#eee5c8]
                "
              >
                <FaUsers className="text-[10px] text-[#f1b900]" />
              </div>

              <div className="min-w-0">

                <p className="truncate text-[11px] text-[#6B7280] sm:text-[12px] lg:text-[14px]">
                  Team Size
                </p>

                <p className="text-[17px] font-semibold text-[#1C180D] sm:text-[18px] lg:text-[20px]">
                  15 People
                </p>

              </div>
            </div>

            {/* ================================================= */}
            {/* RESPONSE RATE */}
            {/* ================================================= */}

            <div className="flex min-w-0 items-center gap-[7px]">

              <div
                className="
                  flex
                  h-[25px]
                  w-[25px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#eee5c8]
                "
              >
                <FaThumbsUp className="text-[10px] text-[#f1b900]" />
              </div>

              <div className="min-w-0">

                <p className="truncate text-[11px] text-[#6B7280] sm:text-[12px] lg:text-[14px]">
                  Response Rate
                </p>

                <p className="text-[17px] font-semibold text-[#1C180D] sm:text-[18px] lg:text-[20px]">
                  98%
                </p>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProfileHero;