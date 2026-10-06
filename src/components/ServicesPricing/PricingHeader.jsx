import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";
import account from "../../assets/account.jpg";

const PricingHeader = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="w-full border-b border-[#eeeeee]"
      style={{
        minHeight: "72px",

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
          min-h-[72px]
          w-full
          items-center
          justify-between
          px-[30px]
          sm:px-[40px]
          md:px-[48px]
          lg:px-[60px]
          xl:px-[70px]
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
              w-[66px]
              object-contain
              sm:w-[70px]
              md:w-[74px]
            "
          />
        </Link>


        {/* DESKTOP NAVIGATION */}

        <nav
          className="
            hidden
            items-center
            gap-[28px]
            md:flex
            lg:gap-[38px]
            xl:gap-[42px]
          "
        >

          <button
            type="button"
            onClick={() => navigate("/service-providers")}
            className="text-[12px] text-[#222222] hover:text-[#e00000] lg:text-[13px]"
          >
            DASHBOARD
          </button>

          <button
            type="button"
            onClick={() => navigate("/service-providers/profile")}
            className="text-[12px] text-[#222222] hover:text-[#e00000] lg:text-[13px]"
          >
            PROFILE
          </button>

          <button
            type="button"
            onClick={() =>
              navigate("/service-providers/profile/portfolio")
            }
            className="text-[12px] text-[#222222] hover:text-[#e00000] lg:text-[13px]"
          >
            PORTFOLIO
          </button>

          <button
            type="button"
            onClick={() =>
              navigate("/service-providers/services-pricing")
            }
            className="
              text-[12px]
              font-semibold
              text-[#e00000]
              lg:text-[13px]
            "
          >
            SERVICES / PRICING
          </button>

          <button
            type="button"
            className="text-[12px] text-[#222222] lg:text-[13px]"
          >
            LEADS
          </button>

        </nav>


        {/* ACCOUNT */}

        <div className="flex items-center">

          <img
            src={account}
            alt="Account"
            className="
              h-[34px]
              w-[34px]
              rounded-full
              object-cover
              sm:h-[38px]
              sm:w-[38px]
            "
          />

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="ml-3 md:hidden"
          >
            {menuOpen ? (
              <FaTimes className="text-[18px]" />
            ) : (
              <FaBars className="text-[18px]" />
            )}
          </button>

        </div>

      </div>


      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="border-t border-gray-200 bg-[#fffdf9] md:hidden">

          <div className="flex flex-col px-6 py-3">

            <button
              onClick={() => {
                navigate("/service-providers");
                closeMenu();
              }}
              className="py-2 text-left text-[14px]"
            >
              DASHBOARD
            </button>

            <button
              onClick={() => {
                navigate("/service-providers/profile");
                closeMenu();
              }}
              className="py-2 text-left text-[14px]"
            >
              PROFILE
            </button>

            <button
              onClick={() => {
                navigate("/service-providers/profile/portfolio");
                closeMenu();
              }}
              className="py-2 text-left text-[14px]"
            >
              PORTFOLIO
            </button>

            <button
              onClick={() => {
                navigate("/service-providers/services-pricing");
                closeMenu();
              }}
              className="py-2 text-left text-[14px] font-semibold text-[#e00000]"
            >
              SERVICES / PRICING
            </button>

            <button
              onClick={closeMenu}
              className="py-2 text-left text-[14px]"
            >
              LEADS
            </button>

          </div>

        </div>
      )}

    </header>
  );
};

export default PricingHeader;