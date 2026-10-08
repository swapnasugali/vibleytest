// ============================================
// LeadsHeader.jsx
// ============================================

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";
import account from "../../assets/account.jpg";

const LeadsHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="relative w-full border-b border-gray-200 bg-[#fffdf9]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >

      {/* ============================================
          NAVBAR
          ============================================ */}

      <div className="flex min-h-[72px] w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

        {/* ============================================
            LOGO
            ============================================ */}

        <Link
          to="/service-providers"
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
        </Link>


        {/* ============================================
            DESKTOP NAVIGATION
            ============================================ */}

        <nav className="hidden items-center gap-5 md:flex lg:gap-8 xl:gap-10">

          {/* DASHBOARD */}

          <Link
            to="/service-providers"
            className={`
              whitespace-nowrap
              text-[12px]
              font-medium
              lg:text-[14px]
              xl:text-[16px]
              ${
                location.pathname === "/service-providers"
                  ? "text-[#e53935]"
                  : "text-[#222]"
              }
            `}
          >
            DASHBOARD
          </Link>


          {/* PROFILE */}

          <Link
            to="/service-providers/profile"
            className={`
              whitespace-nowrap
              text-[12px]
              font-medium
              lg:text-[14px]
              xl:text-[16px]
              ${
                location.pathname === "/service-providers/profile"
                  ? "text-[#e53935]"
                  : "text-[#222]"
              }
            `}
          >
            PROFILE
          </Link>


          {/* PORTFOLIO */}

          <Link
            to="/service-providers/profile/portfolio"
            className={`
              whitespace-nowrap
              text-[12px]
              font-medium
              lg:text-[14px]
              xl:text-[16px]
              ${
                location.pathname === "/service-providers/profile/portfolio"
                  ? "text-[#e53935]"
                  : "text-[#222]"
              }
            `}
          >
            PORTFOLIO
          </Link>


          {/* SERVICES / PRICING */}

          <Link
            to="/service-providers/services-pricing"
            className={`
              whitespace-nowrap
              text-[12px]
              font-medium
              lg:text-[14px]
              xl:text-[16px]
              ${
                location.pathname.startsWith(
                  "/service-providers/services-pricing"
                )
                  ? "text-[#e53935]"
                  : "text-[#222]"
              }
            `}
          >
            SERVICES / PRICING
          </Link>


          {/* LEADS */}

          <Link
            to="/service-providers/leads"
            className={`
              whitespace-nowrap
              text-[12px]
              font-semibold
              lg:text-[14px]
              xl:text-[16px]
              ${
                location.pathname === "/service-providers/leads"
                  ? "text-[#e53935]"
                  : "text-[#222]"
              }
            `}
          >
            LEADS
          </Link>

        </nav>


        {/* ============================================
            RIGHT SIDE
            ============================================ */}

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">

          {/* ACCOUNT IMAGE */}

          <Link
            to="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
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
          </Link>


          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
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


      {/* ============================================
          MOBILE MENU
          ============================================ */}

      {menuOpen && (
        <nav
          className="
            absolute
            left-0
            right-0
            top-full
            z-50
            border-t
            border-gray-200
            bg-[#fffdf9]
            px-5
            py-4
            shadow-md
            md:hidden
          "
        >

          <div className="flex flex-col gap-4">

            {/* DASHBOARD */}

            <Link
              to="/service-providers"
              onClick={closeMenu}
              className={`
                text-[15px]
                font-medium
                ${
                  location.pathname === "/service-providers"
                    ? "text-[#e53935]"
                    : "text-[#222]"
                }
              `}
            >
              DASHBOARD
            </Link>


            {/* PROFILE */}

            <Link
              to="/service-providers/profile"
              onClick={closeMenu}
              className={`
                text-[15px]
                font-medium
                ${
                  location.pathname === "/service-providers/profile"
                    ? "text-[#e53935]"
                    : "text-[#222]"
                }
              `}
            >
              PROFILE
            </Link>


            {/* PORTFOLIO */}

            <Link
              to="/service-providers/profile/portfolio"
              onClick={closeMenu}
              className={`
                text-[15px]
                font-medium
                ${
                  location.pathname === "/service-providers/profile/portfolio"
                    ? "text-[#e53935]"
                    : "text-[#222]"
                }
              `}
            >
              PORTFOLIO
            </Link>


            {/* SERVICES / PRICING */}

            <Link
              to="/service-providers/services-pricing"
              onClick={closeMenu}
              className={`
                text-left
                text-[15px]
                font-medium
                ${
                  location.pathname.startsWith(
                    "/service-providers/services-pricing"
                  )
                    ? "text-[#e53935]"
                    : "text-[#222]"
                }
              `}
            >
              SERVICES / PRICING
            </Link>


            {/* LEADS */}

            <Link
              to="/service-providers/leads"
              onClick={closeMenu}
              className={`
                text-left
                text-[15px]
                font-medium
                ${
                  location.pathname === "/service-providers/leads"
                    ? "text-[#e53935]"
                    : "text-[#222]"
                }
              `}
            >
              LEADS
            </Link>

          </div>

        </nav>
      )}

    </header>
  );
};

export default LeadsHeader;