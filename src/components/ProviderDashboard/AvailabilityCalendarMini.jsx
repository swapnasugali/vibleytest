import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const AvailabilityCalendarMini = ({ marked = false }) => {

  const days = [
    ["27", "28", "29", "30", "1", "2", "3"],
    ["4", "5", "6", "7", "8", "9", "10"],
    ["11", "12", "13", "14", "15", "16", "17"],
    ["18", "19", "20", "21", "22", "23", "24"],
    ["25", "26", "27", "28", "29", "30", "31"],
  ];

  return (
    <div className="relative w-[108px]">

      <div
        className="
          w-[108px]
          rounded-[6px]
          border
          border-[#d5d5d5]
          bg-white
          p-[7px]
          shadow-[0_1px_4px_rgba(0,0,0,0.08)]
        "
      >

        {/* HEADER */}

        <div className="mb-[5px] flex items-center justify-between">

          <button
            type="button"
            aria-label="Previous month"
            className="text-[6px] text-[#444]"
          >
            <FaChevronLeft />
          </button>

          <p className="text-[7px] font-bold text-[#b40000]">
            MAY 2026
          </p>

          <button
            type="button"
            aria-label="Next month"
            className="text-[6px] text-[#444]"
          >
            <FaChevronRight />
          </button>

        </div>


        {/* CALENDAR */}

        <div className="rounded-[4px] bg-[#f2f2f2] p-[4px]">

          <div className="space-y-[2px]">

            {days.map((week, weekIndex) => (

              <div
                key={weekIndex}
                className="grid grid-cols-7 gap-[2px]"
              >

                {week.map((day, dayIndex) => {

                  const isYellow =
                    day === "25" ||
                    day === "26" ||
                    day === "31";

                  const isRed =
                    marked && day === "27";

                  return (
                    <div
                      key={dayIndex}
                      className={`
                        flex
                        h-[11px]
                        w-[11px]
                        items-center
                        justify-center
                        rounded-[2px]
                        text-[5px]

                        ${
                          isRed
                            ? "bg-[#ef4444] text-white"
                            : isYellow
                            ? "bg-[#f4bd00] text-white"
                            : "bg-[#e3e3e3] text-[#555]"
                        }
                      `}
                    >
                      {day}
                    </div>
                  );

                })}

              </div>

            ))}

          </div>

        </div>


        {/* MARK DATE */}

        <div className="mt-[7px] flex items-center justify-between">

          <p className="text-[6px] font-semibold text-[#555]">
            MARK DATE
          </p>

          <p className="text-[6px] text-[#777]">
            {marked ? "27th MAY" : "24th MAY"}
          </p>

        </div>


        {/* INFO */}

        <p className="mt-[4px] text-[4.5px] leading-[6px] text-[#777]">
          🟡 mark/note only date by clicking on the date
        </p>


        {/* INPUT */}

        <input
          type="text"
          placeholder="Enter text"
          className="
            mt-[5px]
            h-[16px]
            w-full
            rounded-[2px]
            border
            border-[#ddd]
            px-[4px]
            text-[5px]
            outline-none
          "
        />


        {/* SAVE */}

        <div className="mt-[5px] flex justify-end">

          <button
            type="button"
            className={`
              rounded-[2px]
              px-[10px]
              py-[3px]
              text-[5px]
              text-white
              ${
                marked
                  ? "bg-[#7b0000]"
                  : "bg-[#a87979]"
              }
            `}
          >
            Save
          </button>

        </div>

      </div>


      {/* MARK DONE */}

      {marked && (
        <div
          className="
            absolute
            right-[-35px]
            top-[50px]
            rounded-[3px]
            bg-white
            px-[4px]
            py-[2px]
            text-[5px]
            text-[#555]
            shadow-sm
          "
        >
          Mark Done
        </div>
      )}

    </div>
  );
};

export default AvailabilityCalendarMini;