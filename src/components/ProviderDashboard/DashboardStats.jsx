
import React from "react";

/* =========================================================
   1. PROFILE ICON
========================================================= */
const ProfileIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head */}
      <circle
        cx="24"
        cy="13"
        r="8"
        stroke="#FFB000"
        strokeWidth="2.5"
      />

      {/* Closed rounded body */}
      <path
        d="M10 37C10 31.477 14.477 27 20 27H28C33.523 27 38 31.477 38 37V38C38 39.105 37.105 40 36 40H12C10.895 40 10 39.105 10 38V37Z"
        stroke="#FFB000"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};


/* =========================================================
   2. CONVERSION RATE ICON
   THREE SPARKLES + UPWARD TREND
========================================================= */
const ConversionIcon = () => {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Upward zigzag trend */}
      <path
        d="M8 43L25 26L35 36L53 16"
        stroke="#FFB000"
        strokeWidth="5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />

      {/* Large top sparkle */}
      <path
        d="M25 3L28 11L36 14L28 17L25 25L22 17L14 14L22 11L25 3Z"
        fill="#FFB000"
      />

      {/* Small left sparkle */}
      <path
        d="M10 19L12 25L18 27L12 29L10 35L8 29L2 27L8 25L10 19Z"
        fill="#FFB000"
      />

      {/* Right sparkle */}
      <path
        d="M39 8L42 15L49 18L42 21L39 28L36 21L29 18L36 15L39 8Z"
        fill="#FFB000"
      />
    </svg>
  );
};


/* =========================================================
   3. THUMBNAIL BADGE ICON
   MONITOR + FOUR DOTS
========================================================= */
const ThumbnailBadgeIcon = () => {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Monitor rectangle */}
      <rect
        x="5"
        y="7"
        width="48"
        height="36"
        rx="5"
        stroke="#FFB000"
        strokeWidth="4"
      />

      {/* Four dots */}
      <circle cx="11" cy="51" r="2.5" fill="#FFB000" />
      <circle cx="23" cy="51" r="2.5" fill="#FFB000" />
      <circle cx="35" cy="51" r="2.5" fill="#FFB000" />
      <circle cx="47" cy="51" r="2.5" fill="#FFB000" />
    </svg>
  );
};


/* =========================================================
   DASHBOARD STATS
========================================================= */
const DashboardStats = () => {
  return (
    <div
      className="grid w-full grid-cols-1 gap-4 bg-[#f7f5f5] px-5 py-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[32px] xl:px-[50px] xl:py-[24px]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >

      {/* =====================================================
          PROFILE COMPLETION
      ===================================================== */}
      <div className="relative h-[189px] min-w-0 rounded-[9px] bg-white">

        {/* ICON */}
        <div className="absolute left-0 top-[40px] flex h-[76px] w-[132px] items-center justify-end pr-[16px]">
          <ProfileIcon />
        </div>

        {/* DIVIDER */}
        <div className="absolute left-[132px] top-[40px] h-[76px] border-l border-[#777777]" />

        {/* CONTENT */}
        <div className="absolute left-[145px] right-[10px] top-[45px] min-w-0">

          <h3 className="text-[16px] font-semibold leading-[22px] text-[#760000]">
            Profile Completion
          </h3>

          <p className="mt-[9px] text-center text-[24.27px] font-bold leading-[30px] text-[#111820]">
            95%
          </p>
        </div>

        {/* COMPLETE PROFILE */}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="absolute bottom-[13px] left-1/2 -translate-x-1/2 cursor-pointer whitespace-nowrap text-[14px] font-medium text-[#252525] underline"
        >
          Complete Profile
        </a>
      </div>


      {/* =====================================================
          CONVERSION RATE
      ===================================================== */}
      <div className="relative h-[189px] min-w-0 rounded-[9px] bg-white">

        {/* ICON */}
        <div className="absolute left-0 top-[40px] flex h-[76px] w-[138px] items-center justify-end pr-[12px]">
          <ConversionIcon />
        </div>

        {/* DIVIDER */}
        <div className="absolute left-[138px] top-[40px] h-[76px] border-l border-[#777777]" />

        {/* CONTENT */}
        <div className="absolute left-[162px] right-[12px] top-[45px] min-w-0">

          <h3 className="text-[16px] font-semibold leading-[22px] text-[#760000]">
            Conversion Rate
          </h3>

          <p className="mt-[9px] text-center text-[24.27px] font-bold leading-[30px] text-[#111820]">
            75%
          </p>
        </div>
      </div>


      {/* =====================================================
          THUMBNAIL BADGE TEXT
      ===================================================== */}
      <div className="relative h-[189px] min-w-0 rounded-[9px] bg-white">

        {/* ICON */}
        <div className="absolute left-0 top-[40px] flex h-[76px] w-[121px] items-center justify-end pr-[10px]">
          <ThumbnailBadgeIcon />
        </div>

        {/* DIVIDER */}
        <div className="absolute left-[121px] top-[40px] h-[76px] border-l border-[#777777]" />

        {/* CONTENT */}
        <div className="absolute left-[139px] right-[20px] top-[45px] min-w-0">

          <h3 className="text-center text-[16px] font-semibold leading-[22px] text-[#760000]">
            Thumbnail Badge Text
          </h3>

          {/* BADGE VALUE */}
          <div className="mt-[7px] flex h-[42px] w-full min-w-0 items-center justify-center rounded-[7px] bg-[#e7e7e7] px-1 text-center text-[12px] leading-[16px] text-[#777777]">
            Starting from 12,000
          </div>
        </div>

        {/* INFO AND EDIT */}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="absolute bottom-[13px] left-1/2 -translate-x-1/2 cursor-pointer whitespace-nowrap text-[14px] font-medium text-[#252525] underline"
        >
          Info and Edit
        </a>
      </div>


      {/* =====================================================
          MIN. HIGH VALUE LEAD
      ===================================================== */}
      <div className="relative h-[189px] min-w-0 rounded-[9px] bg-white">

        <div className="absolute left-0 right-0 top-[45px] flex min-w-0 flex-col items-center px-2">

          <h3 className="w-full text-center text-[16px] font-semibold leading-[22px] text-[#760000]">
            Min. High value Lead
          </h3>

          <p className="mt-[9px] text-center text-[24.27px] font-bold leading-[30px] text-[#111820]">
            50,000
          </p>
        </div>
      </div>

    </div>
  );
};

export default DashboardStats;
