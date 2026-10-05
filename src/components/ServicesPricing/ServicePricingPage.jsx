import React, { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaRegCircle,
  FaCheckCircle,
  FaRegMoneyBillAlt,
} from "react-icons/fa";

import {
  FiPlusCircle,
  FiBookOpen,
} from "react-icons/fi";

import { useNavigate, Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import account from "../../assets/account.jpg";

const ServicesPricingPage = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [pricingModel, setPricingModel] = useState("fixed");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handlePricingModel = (model) => {
    setPricingModel(model);
  };

  const handleAddFixedPackage = () => {
    console.log("Add Fixed Package");
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        fontFamily: "Poppins, sans-serif",

        backgroundColor: "#f6f6f6",

        backgroundImage: `
          repeating-linear-gradient(
            90deg,
            #ebebeb 0px,
            #ebebeb 75px,
            #f6f6f6 75px,
            #f6f6f6 89px
          )
        `,

        backgroundPosition: "49px 0px",
      }}
    >
      {/* =========================================================
          HEADER
      ========================================================= */}
      <header
        className="w-full border-b border-[#eeeeee]"
        style={{
          minHeight: "95px",

          backgroundColor: "#fffcf6",

          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              #f3f0eb 0px,
              #f3f0eb 75px,
              #fffcf6 75px,
              #fffcf6 89px
            )
          `,

          backgroundPosition: "49px 0px",
        }}
      >
        <div
          className="
            flex
            min-h-[95px]
            w-full
            items-center
            justify-between
            px-[49px]
            sm:px-[49px]
            md:px-[55px]
            lg:px-[60px]
            xl:px-[62px]
          "
        >
          {/* =====================================================
              LOGO
          ===================================================== */}
          <Link
            to="/service-providers"
            onClick={closeMenu}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Vibely Vendors"
              className="
                w-[82px]
                object-contain
                sm:w-[85px]
                md:w-[88px]
                lg:w-[90px]
              "
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <nav
            className="
              hidden
              items-center
              gap-[40px]
              md:flex
              lg:gap-[42px]
              xl:gap-[44px]
            "
          >
            {/* DASHBOARD */}
            <button
              type="button"
              onClick={() => navigate("/service-providers")}
              className="
                cursor-pointer
                whitespace-nowrap
                text-[14px]
                font-normal
                text-[#222222]
                transition
                hover:text-[#e00000]
                lg:text-[15px]
                xl:text-[16px]
              "
            >
              DASHBOARD
            </button>

            {/* PROFILE */}
            <button
              type="button"
              onClick={() => navigate("/service-providers/profile")}
              className="
                cursor-pointer
                whitespace-nowrap
                text-[14px]
                font-normal
                text-[#222222]
                transition
                hover:text-[#e00000]
                lg:text-[15px]
                xl:text-[16px]
              "
            >
              PROFILE
            </button>

            {/* PORTFOLIO */}
            <button
              type="button"
              onClick={() =>
                navigate("/service-providers/profile/portfolio")
              }
              className="
                cursor-pointer
                whitespace-nowrap
                text-[14px]
                font-normal
                text-[#222222]
                transition
                hover:text-[#e00000]
                lg:text-[15px]
                xl:text-[16px]
              "
            >
              PORTFOLIO
            </button>

            {/* SERVICES / PRICING */}
            <button
              type="button"
              onClick={() =>
                navigate("/service-providers/profile/services-pricing")
              }
              className="
                cursor-pointer
                whitespace-nowrap
                text-[14px]
                font-bold
                text-[#e00000]
                lg:text-[15px]
                xl:text-[16px]
              "
            >
              SERVICES / PRICING
            </button>

            {/* LEADS */}
            <button
              type="button"
              className="
                cursor-pointer
                whitespace-nowrap
                text-[14px]
                font-normal
                text-[#222222]
                transition
                hover:text-[#e00000]
                lg:text-[15px]
                xl:text-[16px]
              "
            >
              LEADS
            </button>
          </nav>

          {/* =====================================================
              ACCOUNT
          ===================================================== */}
          <div className="flex items-center">
            <img
              src={account}
              alt="Account"
              className="
                h-[42px]
                w-[42px]
                rounded-full
                object-cover
              "
            />

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="ml-4 md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FaTimes className="text-[20px] text-[#222222]" />
              ) : (
                <FaBars className="text-[20px] text-[#222222]" />
              )}
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}
        {menuOpen && (
          <div className="border-t border-gray-200 bg-[#fffdf9] md:hidden">
            <div className="flex flex-col px-5 py-3">
              <button
                type="button"
                onClick={() => {
                  navigate("/service-providers");
                  closeMenu();
                }}
                className="
                  py-2.5
                  text-left
                  text-[15px]
                  font-normal
                  text-[#222222]
                "
              >
                DASHBOARD
              </button>

              <button
                type="button"
                onClick={() => {
                  navigate("/service-providers/profile");
                  closeMenu();
                }}
                className="
                  py-2.5
                  text-left
                  text-[15px]
                  font-normal
                  text-[#222222]
                "
              >
                PROFILE
              </button>

              <button
                type="button"
                onClick={() => {
                  navigate("/service-providers/profile/portfolio");
                  closeMenu();
                }}
                className="
                  py-2.5
                  text-left
                  text-[15px]
                  font-normal
                  text-[#222222]
                "
              >
                PORTFOLIO
              </button>

              <button
                type="button"
                onClick={() => {
                  navigate("/service-providers/profile/services-pricing");
                  closeMenu();
                }}
                className="
                  py-2.5
                  text-left
                  text-[15px]
                  font-bold
                  text-[#e00000]
                "
              >
                SERVICES / PRICING
              </button>

              <button
                type="button"
                onClick={closeMenu}
                className="
                  py-2.5
                  text-left
                  text-[15px]
                  font-normal
                  text-[#222222]
                "
              >
                LEADS
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <main
        className="
          mx-auto
          w-full
          max-w-[880px]
          px-0
          pb-[50px]
          pt-[14px]
        "
      >
        {/* =======================================================
            PAGE TITLE
        ======================================================= */}
        <div>
          <h1
            className="
              text-[32px]
              font-medium
              leading-[45px]
              text-[#303030]
            "
          >
            Services and Pricing
          </h1>

          <p
            className="
              mt-[1px]
              text-[18px]
              font-normal
              leading-[18px]
              text-[#a2a2a2]
            "
          >
            Configure your pricing models, packages, and add-ons to streamline
            your bookings.
          </p>
        </div>

        {/* =========================================================
            PRICING MODELS CARD
        ========================================================= */}
        <section
          className="
            relative
            mt-[19px]
            h-[232px]
            w-full
            overflow-hidden
            rounded-[8px]
            bg-transparent
            shadow-[0_2px_12px_rgba(0,0,0,0.06)]
          "
        >
          <div
            className="
              relative
              z-10
              h-full
              px-[19px]
              pt-[24px]
            "
          >
            {/* ===================================================
                PRICING MODELS HEADING
            =================================================== */}
            <div className="flex items-start">

              {/* =================================================
                  MONEY ICON + EXTRA L-SHAPE
              ================================================= */}
              <div
                className="
                  relative
                  mt-[1px]
                  mr-[7px]
                  h-[25px]
                  w-[22px]
                  shrink-0
                "
              >
                <FaRegMoneyBillAlt
                  className="
                    absolute
                    left-0
                    top-0
                    text-[20px]
                    text-[#e00000]
                  "
                />

                {/* EXTRA L-SHAPE BELOW THE MONEY SYMBOL */}
                <span
                  className="
                    absolute
                    bottom-[4px]
                    left-[-5px]
                    h-[15px]
                    w-[22px]
                    border-b-[3px]
                    border-l-[3px]
                    border-[#e00000]
                  "
                />
              </div>

              <div>
                <h2
                  className="
                    text-[26px]
                    font-medium
                    leading-[21px]
                    text-[#181111]
                  "
                >
                  Pricing Models
                </h2>

                <p
                  className="
                    mt-[1px]
                    text-[14px]
                    font-normal
                    leading-[25px]
                    text-[#8A6060]
                  "
                >
                  Choose how you want to structure your charges.
                </p>
              </div>
            </div>

            {/* ===================================================
                PRICING OPTIONS
            =================================================== */}
            <div
              className="
                mt-[14px]
                grid
                w-full
                grid-cols-3
                gap-[15px]
              "
            >
              {/* =================================================
                  FIXED PACKAGES
              ================================================= */}
              <button
                type="button"
                onClick={() => handlePricingModel("fixed")}
                className={`
                  relative
                  h-[54px]
                  w-full
                  rounded-[7px]
                  border
                  px-[11px]
                  py-[8px]
                  text-left
                  ${
                    pricingModel === "fixed"
                      ? "border-[#e00000]"
                      : "border-[#d0d0d0]"
                  }
                `}
              >
                <h3
                  className="
                    text-[18px]
                    font-semibold
                    leading-[16px]
                    text-[#292929]
                  "
                >
                  Fixed Packages
                </h3>

                <p
                  className="
                    mt-[1px]
                    text-[14px]
                    font-normal
                    leading-[22px]
                    text-[#8A6060]
                  "
                >
                  Set price for bundled services.
                </p>

                <span
                  className="
                    absolute
                    right-[8px]
                    top-[10px]
                  "
                >
                  {pricingModel === "fixed" ? (
                    <FaCheckCircle
                      className="
                        text-[14px]
                        text-[#e00000]
                      "
                    />
                  ) : (
                    <FaRegCircle
                      className="
                        text-[14px]
                        text-[#d0d0d0]
                      "
                    />
                  )}
                </span>
              </button>

              {/* =================================================
                  SPECIFIC SERVICE-BASED
              ================================================= */}
              <button
                type="button"
                onClick={() => handlePricingModel("service")}
                className={`
                  relative
                  h-[54px]
                  w-full
                  rounded-[7px]
                  border
                  px-[11px]
                  py-[8px]
                  text-left
                  ${
                    pricingModel === "service"
                      ? "border-[#e00000]"
                      : "border-[#d0d0d0]"
                  }
                `}
              >
                <h3
                  className="
                    text-[18px]
                    font-semibold
                    leading-[16px]
                    text-[#292929]
                  "
                >
                  Specific Service-based
                </h3>

                <p
                  className="
                    mt-[1px]
                    text-[14px]
                    font-normal
                    leading-[22px]
                    text-[#8A6060]
                  "
                >
                  Hourly or per-item rates.
                </p>

                <span
                  className="
                    absolute
                    right-[8px]
                    top-[10px]
                  "
                >
                  {pricingModel === "service" ? (
                    <FaCheckCircle
                      className="
                        text-[14px]
                        text-[#e00000]
                      "
                    />
                  ) : (
                    <FaRegCircle
                      className="
                        text-[14px]
                        text-[#d0d0d0]
                      "
                    />
                  )}
                </span>
              </button>

              {/* =================================================
                  ADD ONS
              ================================================= */}
              <button
                type="button"
                onClick={() => handlePricingModel("addons")}
                className={`
                  relative
                  h-[54px]
                  w-full
                  rounded-[7px]
                  border
                  px-[11px]
                  py-[8px]
                  text-left
                  ${
                    pricingModel === "addons"
                      ? "border-[#e00000]"
                      : "border-[#d0d0d0]"
                  }
                `}
              >
                <h3
                  className="
                    text-[18px]
                    font-semibold
                    leading-[16px]
                    text-[#292929]
                  "
                >
                  Add Ons
                </h3>

                <p
                  className="
                    mt-[1px]
                    text-[14px]
                    font-normal
                    leading-[22px]
                    text-[#8A6060]
                  "
                >
                  Offer flexibility to clients.
                </p>

                <span
                  className="
                    absolute
                    right-[8px]
                    top-[10px]
                  "
                >
                  {pricingModel === "addons" ? (
                    <FaCheckCircle
                      className="
                        text-[14px]
                        text-[#e00000]
                      "
                    />
                  ) : (
                    <FaRegCircle
                      className="
                        text-[14px]
                        text-[#d0d0d0]
                      "
                    />
                  )}
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================
            ADD FIXED PACKAGE
        ========================================================= */}
        <div
          className="
            flex
            flex-col
            items-center
            pt-[99px]
          "
        >
          {/* =====================================================
              ADD FIXED PACKAGE BUTTON
          ===================================================== */}
          <button
            type="button"
            onClick={handleAddFixedPackage}
            className="
              flex
              h-[35px]
              w-[245px]
              cursor-pointer
              items-center
              justify-center
              gap-[6px]
              rounded-[5px]
              bg-[#c40000]
              text-white
            "
          >
            {/* PLUS CIRCLE */}
            <FiPlusCircle
              className="
                shrink-0
                text-[16px]
                text-white
              "
            />

            <span
              className="
                text-[11px]
                font-semibold
                leading-none
              "
            >
              Add a Fixed Package
            </span>
          </button>

          {/* =====================================================
              GUIDE
          ===================================================== */}
          <button
            type="button"
            className="
              mt-[18px]
              flex
              items-center
              gap-[5px]
              text-[10px]
              font-normal
              leading-none
              text-[#666666]
              underline
              underline-offset-[2px]
            "
          >
            <FiBookOpen
              className="
                shrink-0
                text-[14px]
                text-[#333333]
              "
            />

            <span>
              Read the guide on Adding Services and Pricing
            </span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default ServicesPricingPage;