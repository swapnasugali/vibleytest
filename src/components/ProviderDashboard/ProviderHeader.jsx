import React, { useState } from "react";
import {
  FaRegUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const ProviderHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="w-full border-b border-gray-200 bg-[#fffdf9]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >

      {/* DESKTOP / MOBILE HEADER */}
      <div className="flex min-h-[72px] w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

        {/* LOGO */}
        <div className="shrink-0">

          {/* VIBELY */}
          <div className="relative h-[58px] w-[125px]">

            {/* V */}
            <span
              className="
                absolute
                left-0
                top-[8px]
                text-[44px]
                font-black
                italic
                leading-none
                tracking-[-7px]
                text-[#d71920]
              "
              style={{
                transform: "skewX(-8deg)",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 900,
              }}
            >
              V
            </span>

            {/* i */}
            <span
              className="
                absolute
                left-[25px]
                top-[9px]
                text-[42px]
                font-black
                italic
                leading-none
                tracking-[-7px]
                text-[#f2a900]
              "
              style={{
                transform: "skewX(-10deg)",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 900,
              }}
            >
              i
            </span>

            {/* b */}
            <span
              className="
                absolute
                left-[43px]
                top-[8px]
                text-[43px]
                font-black
                italic
                leading-none
                tracking-[-7px]
                text-[#d71920]
              "
              style={{
                transform: "skewX(-8deg)",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 900,
              }}
            >
              b
            </span>

            {/* e */}
            <span
              className="
                absolute
                left-[68px]
                top-[9px]
                text-[42px]
                font-black
                italic
                leading-none
                tracking-[-7px]
                text-[#d71920]
              "
              style={{
                transform: "skewX(-8deg)",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 900,
              }}
            >
              e
            </span>

            {/* l */}
            <span
              className="
                absolute
                left-[89px]
                top-[5px]
                text-[46px]
                font-black
                italic
                leading-none
                tracking-[-8px]
                text-[#f2a900]
              "
              style={{
                transform: "skewX(-8deg)",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 900,
              }}
            >
              l
            </span>

            {/* y */}
            <span
              className="
                absolute
                left-[99px]
                top-[9px]
                text-[43px]
                font-black
                italic
                leading-none
                tracking-[-7px]
                text-[#d71920]
              "
              style={{
                transform: "skewX(-12deg)",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 900,
              }}
            >
              y
            </span>

          </div>

          {/* VENDORS */}
          <p className="ml-2 mt-[-3px] text-[14.49px] font-normal leading-none text-black">
            Vendors
          </p>

          {/* PORTAL */}
          <p className="ml-3 mt-1 text-[14.49px] font-normal leading-none text-black">
            PORTAL
          </p>

        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-5 md:flex lg:gap-8 xl:gap-10">

          <a
            href="#"
            className="whitespace-nowrap text-[16px] font-bold text-[#d00000] lg:text-[16px]"
          >
            DASHBOARD
          </a>

          <a
            href="/service-providers/profile"
            className="whitespace-nowrap text-[16px] text-gray-800 lg:text-[16px]"
          >
            PROFILE
          </a>

          <a
            href="#"
            className="whitespace-nowrap text-[16px] text-gray-800 lg:text-[16px]"
          >
            PORTFOLIO
          </a>

          <a
            href="#"
            className="whitespace-nowrap text-[16px] text-gray-800 lg:text-[16px]"
          >
            SERVICES / PRICING
          </a>

          <a
            href="#"
            className="whitespace-nowrap text-[16px] text-gray-800 lg:text-[16px]"
          >
            LEADS
          </a>

        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* USER ICON */}
          <FaRegUserCircle className="text-[30px] text-gray-400 sm:text-[34px]" />

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[24px] text-gray-700 md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <nav className="border-t border-gray-200 bg-[#fffdf9] px-5 py-4 md:hidden">

          <div className="flex flex-col gap-4">

            <a
              href="#"
              className="text-[16px] font-semibold text-[#d00000]"
              onClick={() => setMenuOpen(false)}
            >
              DASHBOARD
            </a>

            <a
              href="/service-providers/profile"
              className="text-[16px] font-medium text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              PROFILE
            </a>

            <a
              href="#"
              className="text-[16px] font-medium text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              PORTFOLIO
            </a>

            <a
              href="#"
              className="text-[16px] font-medium text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              SERVICES / PRICING
            </a>

            <a
              href="#"
              className="text-[16px] font-medium text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              LEADS
            </a>

          </div>

        </nav>
      )}

    </header>
  );
};

export default ProviderHeader;