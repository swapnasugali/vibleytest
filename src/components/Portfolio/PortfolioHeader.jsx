import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const PortfolioHeader = () => {
  return (
    <section className="flex w-full items-center justify-between bg-white px-5 py-3 sm:px-8 md:px-12">

      {/* Back to Home */}
      <Link
        to="/"
        className="flex items-center gap-2 text-[11px] font-medium text-[#111111] transition-all duration-300 hover:scale-105 hover:text-red-600 sm:text-[12px]"
      >
        <FaArrowLeft className="text-[11px] text-[#ef1414] sm:text-[12px]" />

        <span>Back to Home</span>
      </Link>

      {/* Provider Name */}
      <div className="flex items-center text-[11px] font-medium sm:text-[12px]">
        <span className="text-[#111111]">
          Artlane Studio
        </span>

        <span className="mx-2 text-[#777777]">
          |
        </span>

        <span className="text-[#555555]">
          Photography
        </span>
      </div>

    </section>
  );
};

export default PortfolioHeader;