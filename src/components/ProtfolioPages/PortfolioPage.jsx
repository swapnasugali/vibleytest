import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import account from "../../assets/account.jpg";

import PortfolioList from "./PortfolioList";

const PortfolioPage = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen w-full bg-[#f7f6f6]"
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className="
          w-full
          border-b
          border-gray-200
          bg-[#fffdf9]
        "
      >

        <div
          className="
            flex
            min-h-[72px]
            w-full
            items-center
            justify-between
            px-4
            sm:px-6
            md:px-8
            lg:px-10
            xl:px-12
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/service-providers"
            onClick={closeMenu}
            className="
              flex
              shrink-0
              items-center
            "
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


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="
              hidden
              items-center
              gap-5
              md:flex
              lg:gap-8
              xl:gap-10
            "
          >

            {/* =================================================
                DASHBOARD
            ================================================= */}

            <button
              type="button"
              onClick={() => {
                navigate("/service-providers");
                closeMenu();
              }}
              className="
                whitespace-nowrap
                border-0
                bg-transparent
                cursor-pointer
                p-0
                text-[12px]
                font-normal
                text-gray-900

                lg:text-[14px]
                xl:text-[16px]
              "
            >
              DASHBOARD
            </button>


            {/* =================================================
                PROFILE
            ================================================= */}

            <button
              type="button"
              onClick={() => {
                navigate(
                  "/service-providers/profile"
                );
                closeMenu();
              }}
              className="
                whitespace-nowrap
                border-0
                bg-transparent
                cursor-pointer
                p-0
                text-[12px]
                font-normal
                text-gray-900

                lg:text-[14px]
                xl:text-[16px]
              "
            >
              PROFILE
            </button>


            {/* =================================================
                PORTFOLIO - ACTIVE
            ================================================= */}

            <button
              type="button"
              onClick={() => {
                navigate(
                  "/service-providers/portfolio"
                );
                closeMenu();
              }}
              className="
                whitespace-nowrap
                border-0
                bg-transparent
                cursor-pointer
                p-0
                text-[12px]
                font-bold
                text-[#d00000]

                lg:text-[14px]
                xl:text-[16px]
              "
            >
              PORTFOLIO
            </button>


            {/* =================================================
                SERVICES / PRICING
            ================================================= */}

            <button
              type="button"
              onClick={() => {
                navigate(
                  "/service-providers/services-pricing"
                );
                closeMenu();
              }}
              className="
                whitespace-nowrap
                border-0
                bg-transparent
                cursor-pointer
                p-0
                text-[12px]
                font-normal
                text-gray-900

                lg:text-[14px]
                xl:text-[16px]
              "
            >
              SERVICES / PRICING
            </button>


            {/* =================================================
                LEADS
            ================================================= */}

            <button
              type="button"
              className="
                whitespace-nowrap
                border-0
                bg-transparent
                cursor-pointer
                p-0
                text-[12px]
                font-normal
                text-gray-900

                lg:text-[14px]
                xl:text-[16px]
              "
            >
              LEADS
            </button>

          </nav>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-3

              sm:gap-4
            "
          >

            {/* =================================================
                ACCOUNT IMAGE
            ================================================= */}

            <Link
              to="/"
              className="
                flex
                shrink-0
                items-center
              "
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


            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className="
                flex
                items-center
                justify-center
                border-0
                bg-transparent
                p-0
                text-[23px]
                text-gray-700

                md:hidden
              "
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}
            </button>

          </div>

        </div>


        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        {menuOpen && (

          <nav
            className="
              border-t
              border-gray-200
              bg-[#fffdf9]
              px-5
              py-4

              md:hidden
            "
          >

            <div
              className="
                flex
                flex-col
                gap-4
              "
            >

              {/* =================================================
                  DASHBOARD
              ================================================= */}

              <button
                type="button"
                onClick={() => {
                  navigate(
                    "/service-providers"
                  );
                  closeMenu();
                }}
                className="
                  border-0
                  bg-transparent
                  p-0
                  text-left
                  text-[15px]
                  font-medium
                  text-gray-900
                "
              >
                DASHBOARD
              </button>


              {/* =================================================
                  PROFILE
              ================================================= */}

              <button
                type="button"
                onClick={() => {
                  navigate(
                    "/service-providers/profile"
                  );
                  closeMenu();
                }}
                className="
                  border-0
                  bg-transparent
                  p-0
                  text-left
                  text-[15px]
                  font-medium
                  text-gray-900
                "
              >
                PROFILE
              </button>


              {/* =================================================
                  PORTFOLIO - ACTIVE
              ================================================= */}

              <button
                type="button"
                onClick={() => {
                  navigate(
                    "/service-providers/portfolio"
                  );
                  closeMenu();
                }}
                className="
                  border-0
                  bg-transparent
                  p-0
                  text-left
                  text-[15px]
                  font-semibold
                  text-[#d00000]
                "
              >
                PORTFOLIO
              </button>


              {/* =================================================
                  SERVICES / PRICING
              ================================================= */}

              <button
                type="button"
                onClick={() => {
                  navigate(
                    "/service-providers/services-pricing"
                  );
                  closeMenu();
                }}
                className="
                  border-0
                  bg-transparent
                  p-0
                  text-left
                  text-[15px]
                  font-medium
                  text-gray-900
                "
              >
                SERVICES / PRICING
              </button>


              {/* =================================================
                  LEADS
              ================================================= */}

              <button
                type="button"
                onClick={closeMenu}
                className="
                  border-0
                  bg-transparent
                  p-0
                  text-left
                  text-[15px]
                  font-medium
                  text-gray-900
                "
              >
                LEADS
              </button>

            </div>

          </nav>

        )}

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main
        className="
          w-full
          bg-[#f7f6f6]
        "
      >
        <PortfolioList />
      </main>

    </div>
  );
};

export default PortfolioPage;