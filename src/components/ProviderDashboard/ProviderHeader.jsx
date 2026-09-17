import React, { useState } from "react";
import {
  FaRegUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const ProviderHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-[#fffdf9]">

      {/* DESKTOP / MOBILE HEADER */}
      <div className="mx-auto flex min-h-[72px] w-full max-w-[960px] items-center justify-between px-4 sm:px-5">

        {/* LOGO */}
        <div className="shrink-0">
          <div className="text-[26px] font-extrabold italic leading-none sm:text-[27px]">
            <span className="text-[#d71920]">Vib</span>
            <span className="text-[#f2a900]">e</span>
            <span className="text-[#d71920]">ly</span>
          </div>

          <p className="ml-2 mt-1 text-[7px] leading-none text-black">
            Vendors
          </p>

          <p className="ml-3 mt-1 text-[7px] leading-none text-black">
            PORTAL
          </p>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-5 md:flex lg:gap-7">

          <a
            href="#"
            className="whitespace-nowrap text-[9px] font-bold text-[#d00000] lg:text-[10px]"
          >
            DASHBOARD
          </a>

          <a
            href="#"
            className="whitespace-nowrap text-[9px] text-gray-800 lg:text-[10px]"
          >
            PROFILE
          </a>

          <a
            href="#"
            className="whitespace-nowrap text-[9px] text-gray-800 lg:text-[10px]"
          >
            PORTFOLIO
          </a>

          <a
            href="#"
            className="whitespace-nowrap text-[9px] text-gray-800 lg:text-[10px]"
          >
            SERVICES / PRICING
          </a>

          <a
            href="#"
            className="whitespace-nowrap text-[9px] text-gray-800 lg:text-[10px]"
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
              className="text-[11px] font-bold text-[#d00000]"
              onClick={() => setMenuOpen(false)}
            >
              DASHBOARD
            </a>

            <a
              href="#"
              className="text-[11px] text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              PROFILE
            </a>

            <a
              href="#"
              className="text-[11px] text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              PORTFOLIO
            </a>

            <a
              href="#"
              className="text-[11px] text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              SERVICES / PRICING
            </a>

            <a
              href="#"
              className="text-[11px] text-gray-800"
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