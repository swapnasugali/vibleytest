
import React from "react";
import { Link, useLocation } from "react-router-dom";

const LeadsHeader = () => {
  const location = useLocation();

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

  return (
    <header
      className="w-full border-b border-[#eeeeee] bg-[#fffdf9]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="flex min-h-[82px] w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* LOGO */}
        <Link
          to="/service-providers"
          className="flex shrink-0 items-center"
        >
          <img
            src="https://res.cloudinary.com/porwmjke/image/upload/v1791779698/logo.png"
            alt="Vibely"
            className="block h-auto w-[75px] object-contain sm:w-[85px] md:w-[90px] lg:w-[100px] xl:w-[110px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-5 md:flex lg:gap-8 xl:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`whitespace-nowrap text-[12px] font-medium transition lg:text-[14px] xl:text-[16px] ${
                isActive(item.path)
                  ? "text-[#e53935]"
                  : "text-[#222222] hover:text-[#e53935]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ACCOUNT */}
        <Link
          to="/service-providers/profile"
          aria-label="Open profile"
          className="flex shrink-0 items-center"
        >
          <img
            src="https://res.cloudinary.com/porwmjke/image/upload/v1791779703/account.jpg"
            alt="Account"
            className="block h-[30px] w-[30px] rounded-full object-cover sm:h-[34px] sm:w-[34px] md:h-[38px] md:w-[38px]"
          />
        </Link>
      </div>
    </header>
  );
};

export default LeadsHeader;
