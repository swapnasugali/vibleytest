import React, { useState } from "react";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaInfoCircle,
} from "react-icons/fa";

const AvailabilityCalendarOverlay = ({ onClose }) => {

  // =====================================================
  // START WITH MAY 2026
  // =====================================================

  const [currentDate, setCurrentDate] = useState(
    new Date(2026, 4, 1)
  );

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

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
  // DYNAMIC CALENDAR DAYS
  // =====================================================

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();

  const calendarDays = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push("");
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day.toString());
  }

  const weeks = [];

  for (let i = 0; i < calendarDays.length; i += 7) {
    const week = calendarDays.slice(i, i + 7);

    while (week.length < 7) {
      week.push("");
    }

    weeks.push(week);
  }


  // =====================================================
  // DATE LIST
  // =====================================================

  const dates = [
    {
      date: "MAY 24, 2026",
      day: "TODAY",
      status: "Available all day",
      available: true,
    },
    {
      date: "MAY 25, 2026",
      day: "SATURDAY",
      status: "1 event from 11 am",
      available: false,
    },
    {
      date: "MAY 26, 2026",
      day: "SUNDAY",
      status: "2 events",
      available: false,
    },
    {
      date: "MAY 27, 2026",
      day: "MONDAY",
      status: "Available all day",
      available: true,
    },
    {
      date: "MAY 28, 2026",
      day: "TUESDAY",
      status: "Available all day",
      available: true,
    },
    {
      date: "MAY 29, 2026",
      day: "WEDNESDAY",
      status: "Available all day",
      available: true,
    },
    {
      date: "MAY 30, 2026",
      day: "THURSDAY",
      status: "Available all day",
      available: true,
    },
    {
      date: "MAY 31, 2026",
      day: "FRIDAY",
      status: "2 events",
      available: false,
    },
  ];

  return (
    <div className="w-full overflow-hidden rounded-[8px] border border-gray-300 bg-white shadow-sm">

      {/* HEADER */}
      <div className="flex h-[36px] items-center justify-between border-b border-gray-200 bg-white px-[14px]">

        <h2 className="text-[9px] font-bold uppercase tracking-[0.1px] text-[#171717]">
          Availability Calender
        </h2>

        <button
          type="button"
          onClick={onClose}
          className="flex h-[19px] w-[19px] items-center justify-center rounded-full border-[1.5px] border-[#d00000] bg-white text-[#d00000] cursor-pointer"
        >
          <FaTimes className="text-[8px]" />
        </button>

      </div>


      {/* MAIN CONTENT */}
      <div className="grid w-full grid-cols-1 gap-4 bg-white px-[14px] py-[13px] sm:grid-cols-[1fr_250px]">

        {/* LEFT DATE LIST */}
        <div className="min-w-0 bg-white">

          {dates.map((item, index) => (
            <div
              key={index}
              className="mb-[9px] flex min-h-[31px] items-start justify-between"
            >

              {/* DATE */}
              <div>

                <p className="text-[7px] font-bold leading-[9px] text-[#222]">
                  {item.date}
                </p>

                <p className="mt-[2px] text-[7px] leading-[9px] text-[#777]">
                  {item.day}
                </p>

              </div>


              {/* STATUS */}
              <p
                className={`
                  ml-2 whitespace-nowrap pt-[5px] text-right text-[8px] font-semibold
                  ${
                    item.available
                      ? "text-green-600"
                      : "text-red-600 underline"
                  }
                `}
              >
                {item.status}
              </p>

            </div>
          ))}

        </div>


        {/* RIGHT CALENDAR */}
        <div className="min-w-0 bg-white">

          <div className="rounded-[8px] border border-gray-300 bg-white p-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.12)]">

            {/* MONTH HEADER */}
            <div className="flex h-[30px] items-center justify-between rounded-[7px] bg-[#f1f1f1] px-[15px]">

              {/* PREVIOUS MONTH */}

              <button
                type="button"
                onClick={handlePreviousMonth}
                className="flex items-center justify-center bg-transparent"
                aria-label="Previous month"
              >
                <FaChevronLeft className="text-[7px] text-[#222]" />
              </button>


              {/* DYNAMIC MONTH */}

              <span className="text-[9px] font-bold text-[#c00000]">
                {monthNames[currentMonth]} {currentYear}
              </span>


              {/* NEXT MONTH */}

              <button
                type="button"
                onClick={handleNextMonth}
                className="flex items-center justify-center bg-transparent"
                aria-label="Next month"
              >
                <FaChevronRight className="text-[7px] text-[#222]" />
              </button>

            </div>


            {/* CALENDAR BODY */}
            <div className="mt-[8px] rounded-[7px] bg-[#f3f3f3] px-[8px] py-[8px]">

              {weeks.map((week, weekIndex) => (
                <div
                  key={weekIndex}
                  className="mb-[4px] grid grid-cols-7 gap-[4px]"
                >

                  {week.map((day, dayIndex) => {

                    // Original May 2026 yellow dates
                    const yellow =
                      currentYear === 2026 &&
                      currentMonth === 4 &&
                      (
                        day === "25" ||
                        day === "26" ||
                        day === "31"
                      );

                    // Original selected date
                    const selected =
                      currentYear === 2026 &&
                      currentMonth === 4 &&
                      day === "24";

                    return (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`
                          flex h-[21px] items-center justify-center rounded-[3px]
                          text-[8px]
                          ${
                            yellow
                              ? "bg-[#ffc400] font-bold text-white"
                              : selected
                              ? "bg-white font-bold text-black"
                              : day
                              ? "bg-[#dedede] text-[#777]"
                              : "bg-transparent"
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


            {/* MARK DATE SECTION */}
            <div className="mt-[12px] border-t border-gray-200 bg-white pt-[10px]">

              {/* TITLE */}
              <div className="flex items-center justify-between">

                <span className="text-[9px] font-bold uppercase text-[#888]">
                  MARK DATE
                </span>

                <span className="text-[8px] text-[#888]">
                  ---- MAY
                </span>

              </div>


              {/* INFORMATION */}
              <div className="mt-[10px] flex items-center gap-[5px]">

                <FaInfoCircle className="shrink-0 text-[9px] text-[#ffb000]" />

                <span className="whitespace-nowrap text-[7px] text-[#666]">
                  mark/note any date by clicking on the date
                </span>

              </div>


              {/* INPUT */}
              <input
                type="text"
                placeholder="Enter Text"
                className="
                  mt-[11px]
                  h-[30px]
                  w-full
                  rounded-[3px]
                  border
                  border-gray-200
                  bg-white
                  px-[9px]
                  text-[8px]
                  text-gray-700
                  outline-none
                  placeholder:text-gray-400
                  focus:border-gray-300
                "
              />


              {/* SAVE */}
              <div className="mt-[13px] flex justify-end">

                <button
                  type="button"
                  className="
                    h-[27px]
                    rounded-[4px]
                    bg-[#b98686]
                    px-[17px]
                    text-[9px]
                    font-semibold
                    text-white
                  "
                >
                  Save
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AvailabilityCalendarOverlay;