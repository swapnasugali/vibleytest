import React from "react";
import { FaPen} from "react-icons/fa";

const AboutBusiness = () => {
  return (
    <section className="w-full rounded-[4px] bg-white">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="flex items-center gap-[5px] border-b border-[#e5e5e5] px-[16px] py-[9px]">

        <h2 className="text-[20px] font-semibold text-[#333]">
          ABOUT THE BUSINESS
        </h2>

        {/* PEN ICON WITH SQUARE BORDER */}

        <span
          className="
            flex
            h-[12px]
            w-[12px]
            items-center
            justify-center
            rounded-[2px]
            border
            border-[#252525]
          "
        >
          <FaPen className="text-[45px] text-[#d99d00]" />
        </span>

      </div>


      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="px-[16px] pb-[18px] pt-[9px]">

        {/* ================================================= */}
        {/* SHORT STATEMENT */}
        {/* ================================================= */}

        <div>

          <label className="mb-[5px] block text-[18px] font-semibold text-[#333]">
            Short Statement
          </label>

          <input
            type="text"
            placeholder="Ex : Creating unforgettable moments since 2010."
            className="
              h-[40px]
              w-full
              rounded-[4px]
              border
              border-[#cfcfcf]
              px-[10px]
              text-[12px]
              outline-none
              placeholder:text-[#474747]
            "
          />

        </div>


        {/* ================================================= */}
        {/* BRIEF DESCRIPTION */}
        {/* ================================================= */}

        <div className="mt-[10px]">

          <label className="mb-[5px] block text-[18px] font-semibold text-[#2E2E2E]">
            Brief Description
          </label>

          <textarea
            placeholder="Write about your business in brief for client overview"
            className="
              h-[60px]
              w-full
              resize-none
              rounded-[4px]
              border
              border-[#cfcfcf]
              px-[10px]
              py-[8px]
              text-[12px]
              outline-none
              placeholder:text-[#474747]
            "
          />

        </div>

      </div>

    </section>
  );
};

export default AboutBusiness;