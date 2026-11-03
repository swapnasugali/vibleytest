
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const ProviderHeader = () => {
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

    if (path === "/service-providers/profile") {
      return (
        location.pathname === path ||
        location.pathname.startsWith(
          "/service-providers/profile/"
        )
      );
    }

    if (path === "/service-providers/services-pricing") {
      return (
        location.pathname === path ||
        location.pathname.startsWith(
          "/service-providers/services-pricing/"
        )
      );
    }

    return location.pathname === path;
  };

  const navClass = (path) =>
    `cursor-pointer whitespace-nowrap text-[12px] font-medium transition lg:text-[14px] xl:text-[16px] ${
      isActive(path)
        ? "text-[#e53935]"
        : "text-[#222222] hover:text-[#e53935]"
    }`;

  const mobileNavClass = (path) =>
    `whitespace-nowrap text-[15px] font-medium transition ${
      isActive(path)
        ? "text-[#e53935]"
        : "text-[#222222] hover:text-[#e53935]"
    }`;

  return (
    <header
      className="w-full border-b border-gray-200 bg-[#fffdf9]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* HEADER */}
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

        {/* RIGHT SIDE */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          {/* ACCOUNT IMAGE */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
            aria-label="Open account"
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

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav className="border-t border-gray-200 bg-[#fffdf9] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
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

export default ProviderHeader;
