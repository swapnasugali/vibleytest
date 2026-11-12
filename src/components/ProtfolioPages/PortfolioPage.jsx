
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, Link, useLocation } from "react-router-dom";

import PortfolioList from "./PortfolioList";

const PortfolioPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Navigation function
  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  // Active page styling
  const isActivePage = (path) => {
    if (path === "/service-providers/services-pricing") {
      return location.pathname.startsWith(path);
    }

    return location.pathname === path;
  };

  const getLinkStyle = (path) => `
    whitespace-nowrap
    border-0
    bg-transparent
    cursor-pointer
    p-0
    text-[12px]
    lg:text-[14px]
    xl:text-[16px]
    ${
      isActivePage(path)
        ? "font-bold text-[#d00000]"
        : "font-normal text-gray-900"
    }
  `;

  const getMobileLinkStyle = (path) => `
    border-0
    bg-transparent
    p-0
    text-left
    text-[15px]
    ${
      isActivePage(path)
        ? "font-semibold text-[#d00000]"
        : "font-medium text-gray-900"
    }
  `;

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

  return (
    <div
      className="min-h-screen w-full bg-[#f7f6f6]"
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* HEADER */}

      <header
        className="
          relative
          z-50
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
            {navigationItems.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => handleNavigation(item.path)}
                className={getLinkStyle(item.path)}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* RIGHT SIDE */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-3
              sm:gap-4
            "
          >
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
              onClick={() => setMenuOpen((previous) => !previous)}
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
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}

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
                <button
                  key={item.path}
                  type="button"
                  onClick={() => handleNavigation(item.path)}
                  className={getMobileLinkStyle(item.path)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* MAIN PORTFOLIO CONTENT */}

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
