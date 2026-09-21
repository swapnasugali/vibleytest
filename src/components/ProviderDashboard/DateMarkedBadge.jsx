import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const DateMarkedBadge = ({
  type = "orange",
  date = "27th MAY, 2026",
}) => {

  const isGreen = type === "green";

  return (
    <div
      className="
        flex
        h-[64px]
        w-[64px]
        flex-col
        items-center
        justify-center
        rounded-full
        border
        border-[#e00000]
        bg-white
      "
    >

      {/* CHECK ICON */}

      <FaCheckCircle
        className={`
          mb-[2px]
          text-[13px]
          ${
            isGreen
              ? "text-[#39a852]"
              : "text-[#f4a900]"
          }
        `}
      />


      {/* TITLE */}

      <p className="text-[7px] font-medium leading-none text-black">
        Date Marked
      </p>


      {/* DATE */}

      <p className="mt-[3px] text-[5px] font-semibold leading-none text-[#b40000]">
        {date}
      </p>

    </div>
  );
};

export default DateMarkedBadge;