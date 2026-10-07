import React, { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaRegCircle,
  FaCheckCircle,
  FaRegMoneyBillAlt,
} from "react-icons/fa";

import { useNavigate, Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import account from "../../assets/account.jpg";

const ServicesPricingLayout = ({
  children,
  activeModel = "fixed",
  showBackgroundLines = true,
}) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =========================================================
     PRICING MODEL NAVIGATION
  ========================================================= */

  const handlePricingModel = (model) => {
    if (model === "fixed") {
      navigate(
        "/service-providers/services-pricing/fixed-package"
      );
    }

    if (model === "service") {
      navigate(
        "/service-providers/services-pricing/specific-service"
      );
    }

    if (model === "addons") {
      navigate(
        "/service-providers/services-pricing/add-ons"
      );
    }
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f6f6f6",
        backgroundImage: showBackgroundLines
          ? `
            repeating-linear-gradient(
              90deg,
              #ebebeb 0px,
              #ebebeb 75px,
              #f6f6f6 75px,
              #f6f6f6 89px
            )
          `
          : "none",
        backgroundPosition: "49px 0px",
        backgroundAttachment: "scroll",
      }}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className="w-full border-b border-[#eeeeee]"
        style={{
          minHeight: "95px",
          backgroundColor: "#fffcf6",
          backgroundImage: showBackgroundLines
            ? `
              repeating-linear-gradient(
                90deg,
                #f3f0eb 0px,
                #f3f0eb 75px,
                #fffcf6 75px,
                #fffcf6 89px
              )
            `
            : "none",
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
            px-[30px]
            sm:px-[40px]
            md:px-[55px]
            lg:px-[60px]
          "
        >
          {/* LOGO */}

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

          {/* DESKTOP NAVIGATION */}

          <nav
            className="
              hidden
              items-center
              gap-[30px]
              md:flex
              lg:gap-[40px]
              xl:gap-[44px]
            "
          >
            <button
              type="button"
              onClick={() => navigate("/service-providers")}
              className="
                cursor-pointer
                whitespace-nowrap
                text-[14px]
                font-medium
                text-[#222222]
                transition
                hover:text-[#e00000]
                lg:text-[15px]
              "
            >
              DASHBOARD
            </button>

            <button
              type="button"
              onClick={() =>
                navigate("/service-providers/profile")
              }
              className="
                cursor-pointer
                whitespace-nowrap
                text-[14px]
                font-medium
                text-[#222222]
                transition
                hover:text-[#e00000]
                lg:text-[15px]
              "
            >
              PROFILE
            </button>

            <button
              type="button"
              onClick={() =>
                navigate(
                  "/service-providers/profile/portfolio"
                )
              }
              className="
                cursor-pointer
                whitespace-nowrap
                text-[14px]
                font-medium
                text-[#222222]
                transition
                hover:text-[#e00000]
                lg:text-[15px]
              "
            >
              PORTFOLIO
            </button>

            <button
              type="button"
              onClick={() =>
                navigate(
                  "/service-providers/services-pricing"
                )
              }
              className="
                cursor-pointer
                whitespace-nowrap
                text-[14px]
                font-semibold
                text-[#e00000]
                lg:text-[15px]
              "
            >
              SERVICES / PRICING
            </button>

            <button
              type="button"
              className="
                cursor-pointer
                whitespace-nowrap
                text-[14px]
                font-medium
                text-[#222222]
                transition
                hover:text-[#e00000]
                lg:text-[15px]
              "
            >
              LEADS
            </button>
          </nav>

          {/* ACCOUNT + MOBILE BUTTON */}

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

            <button
              type="button"
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
              className="ml-4 md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FaTimes
                  className="
                    text-[20px]
                    text-[#222222]
                  "
                />
              ) : (
                <FaBars
                  className="
                    text-[20px]
                    text-[#222222]
                  "
                />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}

        {menuOpen && (
          <div
            className="
              border-t
              border-gray-200
              bg-[#fffdf9]
              md:hidden
            "
          >
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
                  font-medium
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
                  font-medium
                  text-[#222222]
                "
              >
                PROFILE
              </button>

              <button
                type="button"
                onClick={() => {
                  navigate(
                    "/service-providers/profile/portfolio"
                  );
                  closeMenu();
                }}
                className="
                  py-2.5
                  text-left
                  text-[15px]
                  font-medium
                  text-[#222222]
                "
              >
                PORTFOLIO
              </button>

              <button
                type="button"
                onClick={() => {
                  navigate(
                    "/service-providers/services-pricing"
                  );
                  closeMenu();
                }}
                className="
                  py-2.5
                  text-left
                  text-[15px]
                  font-semibold
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
                  font-medium
                  text-[#222222]
                "
              >
                LEADS
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main
        className="
          mx-auto
          w-full
          max-w-[1040px]
          px-[20px]
          pb-[60px]
          pt-[22px]
          sm:px-[30px]
          md:px-[40px]
          lg:px-[50px]
        "
      >
        {/* PAGE TITLE */}

        <div>
          <h1
            className="
              text-[32px]
              font-medium
              leading-[36px]
              text-[#292929]
            "
          >
            Services and Pricing
          </h1>

          <p
            className="
              mt-[1px]
              text-[13px]
              leading-[32px]
              text-[#999999]
              sm:text-[18px]
              sm:leading-[28px]
            "
          >
            Configure your pricing models, packages, and add-ons
            to streamline your bookings.
          </p>
        </div>

        {/* =====================================================
            PRICING MODELS
        ===================================================== */}

        <section
          className="
            mt-[18px]
            w-full
            overflow-hidden
            rounded-[7px]
            border
            border-[#e4e1de]
            shadow-[0_2px_10px_rgba(0,0,0,0.045)]
          "
          style={{
            backgroundColor: "rgba(246, 246, 246, 0.32)",
          }}
        >
          <div
            className="
              px-[18px]
              py-[18px]
              sm:px-[20px]
              sm:py-[20px]
            "
          >
            {/* =================================================
                PRICING MODELS HEADING
            ================================================= */}

            <div className="flex items-start">
              
              {/* MONEY ICON + L MARK */}

              <div
                className="
                  relative
                  mr-[8px]
                  mt-[1px]
                  h-[28px]
                  w-[25px]
                  shrink-0
                "
              >
                <FaRegMoneyBillAlt
                  className="
                    absolute
                    left-[3px]
                    top-0
                    z-10
                    text-[17px]
                    text-[#e00000]
                  "
                />

                {/* VERTICAL PART OF L */}

                <span
                  className="
                    absolute
                    bottom-[8px]
                    left-[-2px]
                    z-20
                    h-[12px]
                    w-[2px]
                    rounded-full
                    bg-[#e00000]
                  "
                />

                {/* HORIZONTAL PART OF L */}

                <span
                  className="
                    absolute
                    bottom-[8px]
                    left-0
                    z-20
                    h-[2px]
                    w-[20px]
                    rounded-full
                    bg-[#e00000]
                  "
                />
              </div>

              {/* HEADING TEXT */}

              <div>
                <h2
                  className="
                    text-[26px]
                    font-medium
                    leading-[20px]
                    text-[#181111]
                  "
                >
                  Pricing Models
                </h2>

                <p
                  className="
                    mt-[1px]
                    text-[14px]
                    leading-[35px]
                    text-[#8A6060]
                  "
                >
                  Choose how you want to structure your charges.
                </p>
              </div>
            </div>

            {/* =================================================
                PRICING MODEL CARDS
            ================================================= */}

            <div
              className="
                mt-[12px]
                grid
                grid-cols-1
                gap-[10px]
                sm:grid-cols-3
              "
            >
              {/* FIXED PACKAGES */}

              <button
                type="button"
                onClick={() =>
                  handlePricingModel("fixed")
                }
                className={`
                  relative
                  min-h-[50px]
                  w-full
                  cursor-pointer
                  rounded-[6px]
                  border
                  px-[10px]
                  py-[7px]
                  text-left
                  transition
                  ${
                    activeModel === "fixed"
                      ? "border-[#e00000]"
                      : "border-[#d5d2cf]"
                  }
                `}
                style={{
                  backgroundColor:
                    activeModel === "fixed"
                      ? "rgba(255,255,255,0.28)"
                      : "rgba(255,255,255,0.18)",
                }}
              >
                <h3
                  className="
                    text-[18px]
                    font-semibold
                    leading-[16px]
                    text-[#181111]
                  "
                >
                  Fixed Packages
                </h3>

                <p
                  className="
                    text-[14px]
                    leading-[23px]
                    text-[#8A6060]
                  "
                >
                  Set price for bundled services.
                </p>

                <span
                  className="
                    absolute
                    right-[7px]
                    top-[8px]
                  "
                >
                  {activeModel === "fixed" ? (
                    <FaCheckCircle
                      className="
                        text-[12px]
                        text-[#e00000]
                      "
                    />
                  ) : (
                    <FaRegCircle
                      className="
                        text-[12px]
                        text-[#bdb9b5]
                      "
                    />
                  )}
                </span>
              </button>

              {/* SPECIFIC SERVICE */}

              <button
                type="button"
                onClick={() =>
                  handlePricingModel("service")
                }
                className={`
                  relative
                  min-h-[50px]
                  w-full
                  cursor-pointer
                  rounded-[6px]
                  border
                  px-[10px]
                  py-[7px]
                  text-left
                  transition
                  ${
                    activeModel === "service"
                      ? "border-[#e00000]"
                      : "border-[#d5d2cf]"
                  }
                `}
                style={{
                  backgroundColor:
                    activeModel === "service"
                      ? "rgba(255,255,255,0.28)"
                      : "rgba(255,255,255,0.18)",
                }}
              >
                <h3
                  className="
                    text-[18px]
                    font-semibold
                    leading-[16px]
                    text-[#181111]
                  "
                >
                  Specific Service-based
                </h3>

                <p
                  className="
                    text-[14px]
                    leading-[23px]
                    text-[#8A6060]
                  "
                >
                  Hourly or per-item rates.
                </p>

                <span
                  className="
                    absolute
                    right-[7px]
                    top-[8px]
                  "
                >
                  {activeModel === "service" ? (
                    <FaCheckCircle
                      className="
                        text-[12px]
                        text-[#e00000]
                      "
                    />
                  ) : (
                    <FaRegCircle
                      className="
                        text-[12px]
                        text-[#bdb9b5]
                      "
                    />
                  )}
                </span>
              </button>

              {/* ADD ONS */}

              <button
                type="button"
                onClick={() =>
                  handlePricingModel("addons")
                }
                className={`
                  relative
                  min-h-[50px]
                  w-full
                  cursor-pointer
                  rounded-[6px]
                  border
                  px-[10px]
                  py-[7px]
                  text-left
                  transition
                  ${
                    activeModel === "addons"
                      ? "border-[#e00000]"
                      : "border-[#d5d2cf]"
                  }
                `}
                style={{
                  backgroundColor:
                    activeModel === "addons"
                      ? "rgba(255,255,255,0.28)"
                      : "rgba(255,255,255,0.18)",
                }}
              >
                <h3
                  className="
                    text-[18px]
                    font-semibold
                    leading-[16px]
                    text-[#181111]
                  "
                >
                  Add Ons
                </h3>

                <p
                  className="
                    text-[14px]
                    leading-[33px]
                    text-[#8A6060]
                  "
                >
                  Additional services that adds value.
                </p>

                <span
                  className="
                    absolute
                    right-[7px]
                    top-[8px]
                  "
                >
                  {activeModel === "addons" ? (
                    <FaCheckCircle
                      className="
                        text-[12px]
                        text-[#e00000]
                      "
                    />
                  ) : (
                    <FaRegCircle
                      className="
                        text-[12px]
                        text-[#bdb9b5]
                      "
                    />
                  )}
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* PAGE CONTENT */}

        {children}
      </main>
    </div>
  );
};

export default ServicesPricingLayout;