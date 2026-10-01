import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import logo from "../../assets/logo.png";
import account from "../../assets/account.jpg";

const ProviderHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="w-full border-b border-gray-200 bg-[#fffdf9]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >

      {/* ================= HEADER ================= */}
      <div className="flex min-h-[72px] w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

        {/* ================= LOGO ================= */}
        <a
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Vibely"
            className="
              block
              h-auto
              w-[75px]
              object-contain
              sm:w-[85px]
              md:w-[90px]
              lg:w-[100px]
              xl:w-[110px]
            "
          />
        </a>


        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden items-center gap-5 md:flex lg:gap-8 xl:gap-10">

          <a
            href="#"
            className="
              whitespace-nowrap
              text-[12px]
              font-bold
              text-[#d00000]
              lg:text-[14px]
              xl:text-[16px]
            "
          >
            DASHBOARD
          </a>

          <a
            href="/service-providers/profile"
            className="
              whitespace-nowrap
              text-[12px]
              text-gray-900
              lg:text-[14px]
              xl:text-[16px]
            "
          >
            PROFILE
          </a>

          <a
            href="#"
            className="
              whitespace-nowrap
              text-[12px]
              text-gray-900
              lg:text-[14px]
              xl:text-[16px]
            "
          >
            PORTFOLIO
          </a>

          <a
            href="#"
            className="
              whitespace-nowrap
              text-[12px]
              text-gray-900
              lg:text-[14px]
              xl:text-[16px]
            "
          >
            SERVICES / PRICING
          </a>

          <a
            href="#"
            className="
              whitespace-nowrap
              text-[12px]
              text-gray-900
              lg:text-[14px]
              xl:text-[16px]
            "
          >
            LEADS
          </a>

        </nav>


        {/* ================= RIGHT SIDE ================= */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">

          {/* ACCOUNT IMAGE */}
          <a
            href="/"
            className="flex items-center shrink-0"
          >
            <img
              src={account}
              alt="Account"
              className="
                block
                h-[30px]
                w-[30px]
                rounded-full
                object-cover
                sm:h-[34px]
                sm:w-[34px]
                md:h-[38px]
                md:w-[38px]
              "
            />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex
              items-center
              justify-center
              text-[23px]
              text-gray-700
              md:hidden
            "
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>


      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <nav className="border-t border-gray-200 bg-[#fffdf9] px-5 py-4 md:hidden">

          <div className="flex flex-col gap-4">

            <a
              href="#"
              className="text-[15px] font-semibold text-[#d00000]"
              onClick={closeMenu}
            >
              DASHBOARD
            </a>

            <a
              href="/service-providers/profile"
              className="text-[15px] font-medium text-gray-900"
              onClick={closeMenu}
            >
              PROFILE
            </a>

            <a
              href="#"
              className="text-[15px] font-medium text-gray-900"
              onClick={closeMenu}
            >
              PORTFOLIO
            </a>

            <a
              href="#"
              className="text-[15px] font-medium text-gray-900"
              onClick={closeMenu}
            >
              SERVICES / PRICING
            </a>

            <a
              href="#"
              className="text-[15px] font-medium text-gray-900"
              onClick={closeMenu}
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