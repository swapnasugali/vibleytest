
import React, { useState } from "react";
import { FaBars, FaTimes, FaRegUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const PricingHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    {
      label: "DASHBOARD",
      path: "/service-providers",
    },
    {
      label: "PROFILE",
      path: "/service-providers/profile",
    },
    {
      label: "PORTFOLIO",
      path: "/service-providers/profile/portfolio",
    },
    {
      label: "SERVICES / PRICING",
      path: "/service-providers/services-pricing",
    },
    {
      label: "LEADS",
      path: "/service-providers/leads",
    },
  ];

  const isActive = (path) => {
    if (path === "/service-providers") {
      return location.pathname === path;
    }

    if (path === "/service-providers/services-pricing") {
      return (
        location.pathname === path ||
        location.pathname.startsWith(
          "/service-providers/services-pricing/"
        )
      );
    }

    if (path === "/service-providers/profile") {
      return (
        location.pathname === path ||
        location.pathname.startsWith(
          "/service-providers/profile/"
        )
      );
    }

    return location.pathname === path;
  };

  const navClass = (path) =>
    `cursor-pointer whitespace-nowrap text-[13px] font-medium transition lg:text-[14px] xl:text-[16px] ${
      isActive(path)
        ? "text-[#e00000]"
        : "text-[#222222] hover:text-[#e00000]"
    }`;

  const mobileNavClass = (path) =>
    `py-2.5 text-left text-[13px] font-medium transition ${
      isActive(path)
        ? "text-[#e00000]"
        : "text-[#222222] hover:text-[#e00000]"
    }`;

  return (
    <header
      className="w-full border-b border-[#eeeeee]"
      style={{
        minHeight: "82px",
        backgroundColor: "#fffdf9",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* HEADER MAIN */}
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
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={navClass(item.path)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ACCOUNT + MOBILE MENU */}
        <div className="flex shrink-0 items-center">
          <Link
            to="/service-providers/profile"
            onClick={closeMenu}
            aria-label="Open profile"
            className="flex items-center justify-center"
          >
            <FaRegUserCircle className="text-[38px] text-[#b5b5b5] sm:text-[42px]" />
          </Link>

          {/* MOBILE MENU BUTTON */}
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

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav className="border-t border-gray-200 bg-[#fffcf6] md:hidden">
          <div className="flex flex-col px-6 py-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={mobileNavClass(item.path)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default PricingHeader;
