import React, { useState } from "react";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";

const ProfileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative h-[80px] w-full bg-[#fffdf9]">

      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <div className="flex h-full items-center justify-between px-[20px] sm:px-[35px] md:px-[55px]">

        {/* ================================================= */}
        {/* LOGO */}
        {/* ================================================= */}

        <div className="flex w-[120px] flex-col leading-none">
          <span className="text-[27px] font-extrabold italic tracking-[-2px] text-[#b40000]">
            Vibely
          </span>

          <span className="ml-[8px] text-[8px] font-medium tracking-[0.5px] text-[#777]">
            Vendors
          </span>

          <span className="ml-[8px] text-[8px] font-medium tracking-[0.5px] text-[#777]">
            PORTAL
          </span>
        </div>

        {/* ================================================= */}
        {/* DESKTOP NAVIGATION */}
        {/* ================================================= */}

        <nav className="hidden items-center gap-[36px] md:flex">

          <button className="text-[12px] font-medium text-[#222]">
            DASHBOARD
          </button>

          <button className="text-[12px] font-medium text-[#e53935]">
            PROFILE
          </button>

          <button className="text-[12px] font-medium text-[#222]">
            PORTFOLIO
          </button>

          <button className="text-[12px] font-medium text-[#222]">
            SERVICES / PRICING
          </button>

          <button className="text-[12px] font-medium text-[#222]">
            LEADS
          </button>

        </nav>

        {/* ================================================= */}
        {/* RIGHT SIDE */}
        {/* ================================================= */}

        <div className="flex items-center gap-[18px]">

          {/* USER ICON */}

          <FaRegUserCircle className="text-[32px] text-[#b5b5b5] sm:text-[36px]" />

          {/* HAMBURGER - MOBILE ONLY */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex cursor-pointer items-center justify-center text-[24px] text-[#333] md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* ================================================= */}
      {/* MOBILE MENU */}
      {/* ================================================= */}

      {menuOpen && (
        <nav
          className="
            absolute
            left-0
            right-0
            top-[80px]
            z-50
            border-t
            border-[#eeeeee]
            bg-[#fffdf9]
            shadow-md
            md:hidden
          "
        >

          <button
            type="button"
            className="
              block
              w-full
              border-b
              border-[#eeeeee]
              px-[25px]
              py-[14px]
              text-left
              text-[12px]
              font-medium
              text-[#222]
            "
          >
            DASHBOARD
          </button>

          <button
            type="button"
            className="
              block
              w-full
              border-b
              border-[#eeeeee]
              px-[25px]
              py-[14px]
              text-left
              text-[12px]
              font-medium
              text-[#e53935]
            "
          >
            PROFILE
          </button>

          <button
            type="button"
            className="
              block
              w-full
              border-b
              border-[#eeeeee]
              px-[25px]
              py-[14px]
              text-left
              text-[12px]
              font-medium
              text-[#222]
            "
          >
            PORTFOLIO
          </button>

          <button
            type="button"
            className="
              block
              w-full
              border-b
              border-[#eeeeee]
              px-[25px]
              py-[14px]
              text-left
              text-[12px]
              font-medium
              text-[#222]
            "
          >
            SERVICES / PRICING
          </button>

          <button
            type="button"
            className="
              block
              w-full
              px-[25px]
              py-[14px]
              text-left
              text-[12px]
              font-medium
              text-[#222]
            "
          >
            LEADS
          </button>

        </nav>
      )}

    </header>
  );
};

export default ProfileNavbar;