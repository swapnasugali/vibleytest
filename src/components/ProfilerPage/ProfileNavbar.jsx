// ============================================
// ProfileNavbar.jsx
// ============================================

import React, { useState } from "react";
import {
  FaRegUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="relative h-[80px] w-full bg-[#fffdf9]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >

      {/* ============================================
          NAVBAR
          ============================================ */}

      <div className="flex h-full items-center justify-between px-[20px] sm:px-[35px] md:px-[55px]">

        {/* ============================================
            LOGO
            SAME AS ProviderHeader
            ============================================ */}

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


        {/* ============================================
            DESKTOP NAVIGATION
            ============================================ */}

        <nav className="hidden items-center gap-[36px] md:flex">

          <Link
            to="/service-providers"
            className="text-[22px] font-medium text-[#222]"
          >
            DASHBOARD
          </Link>


          <Link
            to="/service-providers/profile"
            className="text-[22px] font-medium text-[#e53935]"
          >
            PROFILE
          </Link>


          <Link
            to="/service-providers/profile/portfolio"
            className="text-[22px] font-medium text-[#222]"
          >
            PORTFOLIO
          </Link>


          <button
            type="button"
            className="text-[22px] font-medium text-[#222]"
          >
            SERVICES / PRICING
          </button>


          <button
            type="button"
            className="text-[22px] font-medium text-[#222]"
          >
            LEADS
          </button>

        </nav>


        {/* ============================================
            RIGHT SIDE
            ============================================ */}

        <div className="flex items-center gap-[18px]">

          <FaRegUserCircle
            className="text-[32px] text-[#b5b5b5] sm:text-[36px]"
          />


          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex cursor-pointer items-center justify-center text-[24px] text-[#333] md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>


      {/* ============================================
          MOBILE MENU
          ============================================ */}

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

          <Link
            to="/service-providers"
            onClick={() => setMenuOpen(false)}
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
          </Link>


          <Link
            to="/service-providers/profile"
            onClick={() => setMenuOpen(false)}
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
          </Link>


          <Link
            to="/service-providers/profile/portfolio"
            onClick={() => setMenuOpen(false)}
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
          </Link>


          <button
            type="button"
            onClick={() => setMenuOpen(false)}
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
            onClick={() => setMenuOpen(false)}
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