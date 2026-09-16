import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const ProviderHeader = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-[#fffdf9]">

      <div className="mx-auto flex h-[72px] w-full max-w-[960px] items-center justify-between px-5">

        {/* LOGO */}
        <div className="w-[150px]">
          <div className="text-[27px] font-extrabold italic leading-none">
            <span className="text-[#d71920]">Vib</span>
            <span className="text-[#f2a900]">e</span>
            <span className="text-[#d71920]">ly</span>
          </div>

          <p className="ml-2 text-[7px] text-gray-500">
            Vendors
          </p>

          <p className="ml-3 text-[6px] text-gray-400">
            PORTAL
          </p>
        </div>


        {/* NAVIGATION */}
        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#"
            className="text-[10px] font-bold text-[#d00000]"
          >
            DASHBOARD
          </a>

          <a
            href="#"
            className="text-[10px] text-gray-800"
          >
            PROFILE
          </a>

          <a
            href="#"
            className="text-[10px] text-gray-800"
          >
            PORTFOLIO
          </a>

          <a
            href="#"
            className="text-[10px] text-gray-800"
          >
            SERVICES / PRICING
          </a>

          <a
            href="#"
            className="text-[10px] text-gray-800"
          >
            LEADS
          </a>

        </nav>


        {/* USER */}
        <div className="flex w-[150px] justify-end">
          <FaRegUserCircle className="text-[34px] text-gray-400" />
        </div>

      </div>

    </header>
  );
};

export default ProviderHeader;