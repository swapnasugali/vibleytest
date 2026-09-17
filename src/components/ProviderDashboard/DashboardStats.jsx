import React from "react";

/* =========================================================
   PROFILE ICON
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
      <circle
        cx="24"
        cy="13"
        r="8"
        stroke="#FFB000"
        strokeWidth="2.5"
      />

      <path
        d="M10 38C10 31.9249 15.3726 27 22 27H26C32.6274 27 38 31.9249 38 38"
        stroke="#FFB000"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};


/* =========================================================
   CONVERSION RATE ICON
   MAGIC WAND + SPARKLES
========================================================= */
const ConversionIcon = () => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main wand */}
      <path
        d="M13 40L36 17"
        stroke="#FFB000"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Wand handle/top */}
      <path
        d="M31 12L41 22"
        stroke="#FFB000"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Large sparkle - top left */}
      <path
        d="M15 7V17"
        stroke="#FFB000"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M10 12H20"
        stroke="#FFB000"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Small sparkle - top */}
      <path
        d="M26 5V11"
        stroke="#FFB000"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M23 8H29"
        stroke="#FFB000"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Small sparkle - right */}
      <path
        d="M40 29V37"
        stroke="#FFB000"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M36 33H44"
        stroke="#FFB000"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};


/* =========================================================
   THUMBNAIL BADGE ICON
========================================================= */
const ThumbnailBadgeIcon = () => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rectangle */}
      <rect
        x="7"
        y="7"
        width="38"
        height="28"
        rx="3"
        stroke="#FFB000"
        strokeWidth="2.5"
      />

      {/* Four dots */}
      <circle
        cx="11"
        cy="42"
        r="2"
        fill="#FFB000"
      />

      <circle
        cx="21"
        cy="42"
        r="2"
        fill="#FFB000"
      />

      <circle
        cx="31"
        cy="42"
        r="2"
        fill="#FFB000"
      />

      <circle
        cx="41"
        cy="42"
        r="2"
        fill="#FFB000"
      />
    </svg>
  );
};


/* =========================================================
   DASHBOARD STATS
========================================================= */
const DashboardStats = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* =====================================================
          PROFILE COMPLETION
      ===================================================== */}
      <div className="flex min-h-[118px] w-full items-center rounded-lg bg-white px-4 py-4 sm:px-5">

        {/* ICON */}
        <div className="flex w-[52px] shrink-0 items-center justify-center">
          <ProfileIcon />
        </div>

        {/* DIVIDER */}
        <div className="mx-3 h-[58px] shrink-0 border-l border-gray-300" />

        {/* CONTENT */}
        <div className="flex min-w-0 flex-1 flex-col items-center text-center">

          <h3 className="whitespace-nowrap text-[10px] font-bold text-[#760000] sm:text-[11px]">
            Profile Completion
          </h3>

          <p className="mt-1 text-[25px] font-bold leading-none text-gray-900">
            95%
          </p>

          <a
            href="#"
            className="mt-5 whitespace-nowrap text-[9px] text-gray-700 underline sm:text-[10px]"
          >
            Complete Profile
          </a>

        </div>
      </div>


      {/* =====================================================
          CONVERSION RATE
      ===================================================== */}
      <div className="flex min-h-[118px] w-full items-center rounded-lg bg-white px-4 py-4 sm:px-5">

        {/* EXACT CONVERSION SYMBOL */}
        <div className="flex w-[52px] shrink-0 items-center justify-center">
          <ConversionIcon />
        </div>

        {/* DIVIDER */}
        <div className="mx-3 h-[58px] shrink-0 border-l border-gray-300" />

        {/* CONTENT */}
        <div className="flex min-w-0 flex-1 flex-col items-center text-center">

          <h3 className="whitespace-nowrap text-[10px] font-bold text-[#760000] sm:text-[11px]">
            Conversion Rate
          </h3>

          <p className="mt-2 text-[25px] font-bold leading-none text-gray-900">
            75%
          </p>

        </div>
      </div>


      {/* =====================================================
          THUMBNAIL BADGE TEXT
      ===================================================== */}
      <div className="flex min-h-[118px] w-full items-center rounded-lg bg-white px-4 py-4 sm:px-5">

        {/* ICON */}
        <div className="flex w-[52px] shrink-0 items-center justify-center">
          <ThumbnailBadgeIcon />
        </div>

        {/* DIVIDER */}
        <div className="mx-3 h-[58px] shrink-0 border-l border-gray-300" />

        {/* CONTENT */}
        <div className="min-w-0 flex-1">

          <h3 className="whitespace-nowrap text-center text-[10px] font-bold text-[#760000] sm:text-[11px]">
            Thumbnail Badge Text
          </h3>

          <div className="mt-2 w-full rounded-md bg-gray-200 px-2 py-2 text-center text-[8px] text-gray-500 sm:text-[9px]">
            Starting from 12,000
          </div>

          <a
            href="#"
            className="mt-5 block text-center text-[9px] text-gray-700 underline sm:text-[10px]"
          >
            Info and Edit
          </a>

        </div>
      </div>


      {/* =====================================================
          MIN HIGH VALUE LEAD
      ===================================================== */}
      <div className="flex min-h-[118px] w-full flex-col items-center justify-center rounded-lg bg-white px-4 py-4 text-center">

        <h3 className="whitespace-nowrap text-[10px] font-bold text-[#760000] sm:text-[11px]">
          Min. High value Lead
        </h3>

        <p className="mt-2 text-[25px] font-bold leading-none text-gray-900">
          50,000
        </p>

      </div>

    </div>
  );
};

export default DashboardStats;