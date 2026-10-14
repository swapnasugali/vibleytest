
import React, { useState } from "react";
import { FaBars, FaTimes, FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const PricingHeader = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navClass =
    "cursor-pointer whitespace-nowrap text-[13px] font-medium text-[#222222] transition hover:text-[#e00000] lg:text-[14px] xl:text-[16px]";

  const activeNavClass =
    "cursor-pointer whitespace-nowrap text-[13px] font-medium text-[#e00000] transition lg:text-[14px] xl:text-[16px]";

  return (
    <header
      className="w-full border-b border-[#eeeeee]"
      style={{
        minHeight: "82px",
        backgroundColor: "#fffdf9",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div className="flex min-h-[82px] w-full items-center justify-between px-[30px] sm:px-[40px] md:px-[55px] lg:px-[60px] xl:px-[70px]">
        {/* LOGO */}
        <Link
          to="/service-providers"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src="https://res.cloudinary.com/porwmjke/image/upload/v1791779698/logo.png"
            alt="Vibely Vendors"
            className="w-[66px] object-contain sm:w-[72px] md:w-[82px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-[18px] md:flex lg:gap-[25px] xl:gap-[30px]">
          {/* DASHBOARD */}
          <button
            type="button"
            onClick={() => navigate("/service-providers")}
            className={navClass}
          >
            DASHBOARD
          </button>

          {/* PROFILE */}
          <button
            type="button"
            onClick={() => navigate("/service-providers/profile")}
            className={navClass}
          >
            PROFILE
          </button>

          {/* PORTFOLIO */}
          <button
            type="button"
            onClick={() =>
              navigate("/service-providers/profile/portfolio")
            }
            className={navClass}
          >
            PORTFOLIO
          </button>

          {/* SERVICES / PRICING */}
          <button
            type="button"
            onClick={() =>
              navigate("/service-providers/services-pricing")
            }
            className={activeNavClass}
          >
            SERVICES / PRICING
          </button>

          {/* LEADS */}
          <Link
            to="/service-providers/leads"
            onClick={closeMenu}
            className={navClass}
          >
            LEADS
          </Link>
        </nav>

        {/* ACCOUNT + MOBILE MENU */}
        <div className="flex shrink-0 items-center">
          <button
            type="button"
            onClick={() => navigate("/service-providers/profile")}
            aria-label="Open profile"
            className="flex items-center justify-center"
          >
            <FaRegUserCircle className="text-[38px] text-[#b5b5b5] sm:text-[42px]" />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="ml-3 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaTimes className="text-[20px]" />
            ) : (
              <FaBars className="text-[20px]" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-[#fffcf6] md:hidden">
          <div className="flex flex-col px-6 py-3">
            <button
              type="button"
              onClick={() => {
                navigate("/service-providers");
                closeMenu();
              }}
              className="py-2.5 text-left text-[13px] font-medium"
            >
              DASHBOARD
            </button>

            <button
              type="button"
              onClick={() => {
                navigate("/service-providers/profile");
                closeMenu();
              }}
              className="py-2.5 text-left text-[13px] font-medium"
            >
              PROFILE
            </button>

            <button
              type="button"
              onClick={() => {
                navigate("/service-providers/profile/portfolio");
                closeMenu();
              }}
              className="py-2.5 text-left text-[13px] font-medium"
            >
              PORTFOLIO
            </button>

            <button
              type="button"
              onClick={() => {
                navigate("/service-providers/services-pricing");
                closeMenu();
              }}
              className="py-2.5 text-left text-[13px] font-semibold text-[#e00000]"
            >
              SERVICES / PRICING
            </button>

            <Link
              to="/service-providers/leads"
              onClick={closeMenu}
              className="py-2.5 text-[13px] font-medium"
            >
              LEADS
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default PricingHeader;
