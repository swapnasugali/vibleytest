import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const AvailabilityCalendarMini = ({ marked = false }) => {
  // =====================================================
  // START WITH MAY 2026
  // =====================================================

  const [currentDate, setCurrentDate] = useState(
    new Date(2026, 4, 1)
  );

  // =====================================================
  // MONTH NAMES
  // =====================================================

  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // =====================================================
  // PREVIOUS MONTH
  // =====================================================

  const handlePreviousMonth = () => {
    setCurrentDate(
      new Date(
        currentYear,
        currentMonth - 1,
        1
      )
    );
  };

  // =====================================================
  // NEXT MONTH
  // =====================================================

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(
        currentYear,
        currentMonth + 1,
        1
      )
    );
  };

  // =====================================================
  // DAYS IN CURRENT MONTH
  // =====================================================

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  // =====================================================
  // CREATE CALENDAR DAYS
  // START DIRECTLY FROM 1
  // =====================================================

  const calendarDays = [];

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // =====================================================
  // CREATE WEEKS
  // =====================================================

  const weeks = [];

  for (let i = 0; i < calendarDays.length; i += 7) {
    const week = calendarDays.slice(i, i + 7);

    while (week.length < 7) {
      week.push("");
    }

    weeks.push(week);
  }

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <div
      className="
        w-[115px]
        rounded-[7px]
        border
        border-[#d5d5d5]
        bg-white
        p-[8px]
        shadow-[0_1px_4px_rgba(0,0,0,0.08)]
      "
    >

      {/* ================================================= */}
      {/* MONTH HEADER */}
      {/* ================================================= */}

      <div className="mb-[6px] flex items-center justify-between">

        {/* PREVIOUS */}

        <button
          type="button"
          onClick={handlePreviousMonth}
          aria-label="Previous month"
          className="
            flex
            h-[16px]
            w-[16px]
            items-center
            justify-center
            text-[7px]
            text-[#444]
            hover:text-[#b40000]
            cursor-pointer
          "
        >
          <FaChevronLeft />
        </button>

        {/* MONTH + YEAR */}

        <p
          className="
            text-[12px]
            font-bold
            text-[#b40000]
          "
        >
          {monthNames[currentMonth]} {currentYear}
        </p>

        {/* NEXT */}

        <button
          type="button"
          onClick={handleNextMonth}
          aria-label="Next month"
          className="
            flex
            h-[16px]
            w-[16px]
            items-center
            justify-center
            text-[7px]
            text-[#444]
            hover:text-[#b40000]
            cursor-pointer
          "
        >
          <FaChevronRight />
        </button>

      </div>

      {/* ================================================= */}
      {/* CALENDAR */}
      {/* ================================================= */}

      <div
        className="
          rounded-[5px]
          bg-[#f2f2f2]
          p-[5px]
        "
      >

        {/* WEEK DAYS */}

        <div
          className="
            mb-[3px]
            grid
            grid-cols-7
            gap-[2px]
          "
        >

          {[
            "S",
            "M",
            "T",
            "W",
            "T",
            "F",
            "S",
          ].map((day, index) => (
            <div
              key={index}
              className="
                flex
                h-[14px]
                w-[12px]
                items-center
                justify-center
                text-[5px]
                font-semibold
                text-[#777]
              "
            >
              {day}
            </div>
          ))}

        </div>

        {/* DATES */}

        <div className="space-y-[2px]">

          {weeks.map((week, weekIndex) => (
            <div
              key={weekIndex}
              className="
                grid
                grid-cols-7
                gap-[2px]
              "
            >

              {week.map((day, dayIndex) => {

                // Empty calendar cell
                if (day === "") {
                  return (
                    <div
                      key={dayIndex}
                      className="
                        h-[14px]
                        w-[12px]
                      "
                    />
                  );
                }

                // =================================================
                // MAY 2026 YELLOW DATES
                // =================================================

                const isYellow =
                  currentYear === 2026 &&
                  currentMonth === 4 &&
                  (
                    day === 25 ||
                    day === 26 ||
                    day === 31
                  );

                // =================================================
                // MAY 2026 MARKED DATE
                // =================================================

                const isMarked =
                  marked &&
                  currentYear === 2026 &&
                  currentMonth === 4 &&
                  day === 27;

                return (
                  <div
                    key={dayIndex}
                    className={`
                      flex
                      h-[14px]
                      w-[12px]
                      items-center
                      justify-center
                      rounded-[2px]
                      text-[5px]
                      font-medium

                      ${
                        isMarked
                          ? "border border-[#ef4444] bg-transparent text-[#555]"
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

    </div>
  );
};

export default AvailabilityCalendarMini;