import React from "react";
import {
  FaStar,
  FaMapMarkerAlt,
  FaUsers,
  FaClock,
  FaThumbsUp,
  FaCheckCircle,
} from "react-icons/fa";

import { GiPartyPopper } from "react-icons/gi";

import artlaneLogo from "../../assets/artlane-logo.png";

const ProviderDetails = () => {
  return (
    <section className="relative z-10 -mt-43 w-full bg-gradient-to-r from-[#8b0000] to-[#260000] px-8 pb-5 pt-5 text-white sm:px-8 md:px-10">

      {/* Overlapping Provider Logo */}
      <div
        className="
          absolute
          left-6
          top-[-31px]
          z-20
          flex
          h-[209px]
          w-[209px]
          items-center
          justify-center
          overflow-hidden
          rounded-full
          bg-[#151515]
          sm:left-8
          md:left-6
        "
      >
        <img
          src={artlaneLogo}
          alt="Artlane Studio"
          className="h-full w-full object-contain p-5"
        />
      </div>

      {/* Provider Content */}
      <div className="ml-[175px]">

        {/* Provider Name + Request Quote */}
        <div className="flex items-start justify-between gap-4">

          {/* Left Content */}
          <div>

            {/* Provider Name + Verified */}
            <div className="flex items-center gap-2">

              <h2 className="text-[20px] font-semibold sm:text-[22px]">
                ARTLANE STUDIO
              </h2>

              {/* Verified Badge */}
              <span className="flex items-center gap-1 rounded bg-[#ffbd00] px-2 py-[2px] text-[8px] font-bold text-black">
                <FaCheckCircle className="text-[8px]" />
                VERIFIED
              </span>

            </div>

            {/* Rating / Location / Member */}
            <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-[10px]">

              {/* Rating */}
              <span className="flex items-center gap-1">
                <FaStar className="text-[#ffd000]" />
                4.9 (22 Reviews)
              </span>

              {/* Location */}
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-[#ffd000]" />
                Kondapur, Hyderabad
              </span>

              {/* Member Since */}
              <span>
                Member since 2018
              </span>

            </div>

          </div>

          {/* Request Quote Button */}
          <button
            type="button"
            className="
              mr-1
              rounded-md
              bg-[#e50909]
              px-5
              py-2.5
              text-[11px]
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#ff1a1a]
            "
          >
            Request Quote ↗
          </button>

        </div>

        {/* Divider */}
        <div className="mt-4 h-px w-full bg-white/60" />

        {/* Statistics */}
        <div className="mt-4 grid grid-cols-2 gap-y-4 sm:grid-cols-4">

          {/* Total Events */}
          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#701d00]">
              <GiPartyPopper className="text-[18px] text-[#ffd000]" />
            </div>

            <div>
              <p className="text-[8px] text-white/80">
                Total Events
              </p>

              <p className="text-[13px] font-medium">
                160+
              </p>
            </div>

          </div>

          {/* Experience */}
          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#701d00]">
              <FaClock className="text-sm text-[#ffd000]" />
            </div>

            <div>
              <p className="text-[8px] text-white/80">
                Experience
              </p>

              <p className="text-[13px] font-medium">
                12 Years
              </p>
            </div>

          </div>

          {/* Starting From */}
          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#701d00]">
              <FaUsers className="text-sm text-[#ffd000]" />
            </div>

            <div>
              <p className="text-[8px] text-white/80">
                Starting From
              </p>

              <p className="text-[13px] font-medium">
                ₹ 12,000/-
              </p>
            </div>

          </div>

          {/* Response Rate */}
          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#701d00]">
              <FaThumbsUp className="text-sm text-[#ffd000]" />
            </div>

            <div>
              <p className="text-[8px] text-white/80">
                Response Rate
              </p>

              <p className="text-[13px] font-medium">
                98%
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProviderDetails;