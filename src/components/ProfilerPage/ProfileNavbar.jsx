
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const ProfileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // All navigation routes
  const navigationItems = [
    {
      name: "DASHBOARD",
      path: "/service-providers",
    },
    {
      name: "PROFILE",
      path: "/service-providers/profile",
    },
    {
      name: "PORTFOLIO",
      path: "/service-providers/profile/portfolio",
    },
    {
      name: "SERVICES / PRICING",
      path: "/service-providers/services-pricing",
    },
    {
      name: "LEADS",
      path: "/service-providers/leads",
    },
  ];

  // Check active page
  const isActivePage = (path) => {
    // Services/Pricing remains active on its sub-pages
    if (path === "/service-providers/services-pricing") {
      return location.pathname.startsWith(path);
    }

    // Other navigation items use exact route matching
    return location.pathname === path;
  };

  // Navigation link styles
  const getDesktopLinkStyle = (path) => {
    return `
      whitespace-nowrap
      text-[12px]
      font-medium
      lg:text-[14px]
      xl:text-[16px]
      ${
        isActivePage(path)
          ? "text-[#e53935]"
          : "text-[#222]"
      }
    `;
  };

  const getMobileLinkStyle = (path) => {
    return `
      text-[15px]
      font-medium
      ${
        isActivePage(path)
          ? "text-[#e53935]"
          : "text-[#222]"
      }
    `;
  };

  return (
    <header
      className="relative w-full border-b border-gray-200 bg-[#fffdf9]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >

      {/* NAVBAR */}

      <div className="flex min-h-[72px] w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

        {/* LOGO */}

        <Link
          to="/service-providers"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src="https://res.cloudinary.com/porwmjke/image/upload/v1791779698/logo.png"
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

        {/* DESKTOP NAVIGATION */}

        <nav className="hidden items-center gap-5 md:flex lg:gap-8 xl:gap-10">

          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={getDesktopLinkStyle(item.path)}
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* RIGHT SIDE */}

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">

          {/* ACCOUNT IMAGE */}

          <Link
            to="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
          >
            <img
              src="https://res.cloudinary.com/porwmjke/image/upload/v1791779703/account.jpg"
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

      {/* MOBILE MENU */}

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

            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={getMobileLinkStyle(item.path)}
              >
                {item.name}
              </Link>
            ))}

          </div>

        </nav>
      )}

    </header>
  );
};

export default ProfileNavbar;
