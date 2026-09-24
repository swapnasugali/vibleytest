import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const CalendarEvent = ({
  date,
  day,
  status,
  statusColor,
}) => {
  return (
    <div className="flex w-full items-center justify-between border-b border-gray-200 pb-3">

      {/* DATE */}
      <div className="min-w-0">
        <p className="text-[12.13px] font-semibold text-gray-800 sm:text-[12.13px]">
          {date}
        </p>

        <p className="mt-1 text-[13.86px] font-light text-gray-500 sm:text-[13.86px]">
          {day}
        </p>
      </div>

      {/* STATUS */}
      <p
        className={`ml-3 whitespace-nowrap text-[13.86px] font-semibold sm:text-[13.86px] ${statusColor}`}
      >
        {status}
      </p>

    </div>
  );
};

const AvailabilityCalendar = () => {

  /*
   * Keep May 2026 as the default month.
   */
  const [currentDate, setCurrentDate] = useState(
    new Date(2026, 4, 1)
  );

  /*
   * Month names
   */
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

  /*
   * Previous month
   */
  const handlePreviousMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      )
    );
  };

  /*
   * Next month
   */
  const handleNextMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
    );
  };

  /*
   * Current month and year
   */
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  /*
   * Number of days in current month
   */
  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  /*
   * Create calendar days.
   *
   * Starts directly from 1.
   */
  const calendarDays = [];

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(String(day));
  }

  /*
   * Create weeks
   */
  const weeks = [];

  for (let i = 0; i < calendarDays.length; i += 7) {
    const week = calendarDays.slice(i, i + 7);

    while (week.length < 7) {
      week.push("");
    }

    weeks.push(week);
  }

  /*
   * Only May 25 and May 26
   * have yellow background and white text.
   */
  const isSelected = (day) => {
    if (currentYear === 2026 && currentMonth === 4) {
      return day === "25" || day === "26";
    }

    return false;
  };

  /*
   * These dates should be bold and black.
   */
  const isBoldDate = (day) => {
    return ["24", "27", "28", "29", "30", "31"].includes(day);
  };

  return (
    <div className="w-full rounded-lg bg-white">

      {/* HEADER */}
      <div className="flex min-h-[48px] w-full items-center justify-between border-b border-gray-200 px-4 sm:px-5 md:px-6">

        <h2 className="text-[16px] font-semibold uppercase text-gray-800 sm:text-[16px]">
          Availability Calendar
        </h2>

        <a
          href="#"
          className="whitespace-nowrap text-[14px] font-medium text-gray-700 underline sm:text-[14px]"
        >
          Edit Calendar
        </a>

      </div>

      {/* CONTENT */}
      <div className="grid w-full grid-cols-1 gap-5 px-4 py-4 sm:px-5 md:grid-cols-[1fr_200px] md:px-6 md:py-5">

        {/* LEFT DATE LIST */}
        <div className="min-w-0">

          <div className="space-y-4">

            {/* MAY 24 */}
            <CalendarEvent
              date="MAY 24, 2026"
              day="TODAY"
              status="Available all day"
              statusColor="text-green-600"
            />

            {/* MAY 25 */}
            <CalendarEvent
              date="MAY 25, 2026"
              day="SATURDAY"
              status="1 event from 11 am"
              statusColor="text-red-600 underline"
            />

            {/* MAY 26 */}
            <CalendarEvent
              date="MAY 26, 2026"
              day="SUNDAY"
              status="2 events"
              statusColor="text-red-600 underline"
            />

          </div>

          {/* VIEW ALL */}
          <a
            href="#"
            className="mt-3 block text-[12.13px] font-medium text-gray-700 underline sm:text-[12.13px]"
          >
            view all dates
          </a>

        </div>

        {/* CALENDAR */}
        <div className="w-full">

          {/* LIGHT GREY CALENDAR BACKGROUND */}
          <div className="overflow-hidden rounded-lg border border-gray-300 bg-[#f3f3f3]">

            {/* MONTH HEADER */}
            <div className="flex h-[30px] items-center justify-between bg-gray-100 px-3">

              {/* PREVIOUS MONTH */}
              <button
                type="button"
                onClick={handlePreviousMonth}
                className="flex h-5 w-5 items-center justify-center rounded hover:bg-gray-200"
                aria-label="Previous month"
              >
                <FaChevronLeft className="text-[7px] cursor-pointertext-gray-700" />
              </button>

              {/* MONTH + YEAR */}
              <span className="text-[12px] font-bold text-[#b00000]">
                {monthNames[currentMonth]} {currentYear}
              </span>

              {/* NEXT MONTH */}
              <button
                type="button"
                onClick={handleNextMonth}
                className="flex h-5 w-5 items-center justify-center rounded hover:bg-gray-200"
                aria-label="Next month"
              >
                <FaChevronRight className="text-[7px] cursor-pointer text-gray-700 " />
              </button>

            </div>

            {/* DAYS */}
            <div className="space-y-[4px] p-2">

              {weeks.map((week, weekIndex) => (
                <div
                  key={weekIndex}
                  className="grid grid-cols-7 gap-[3px]"
                >

                  {week.map((day, dayIndex) => {

                    const selected = isSelected(day);
                    const boldDate = isBoldDate(day);

                    return (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`
                          flex
                          h-[18px]
                          items-center
                          justify-center
                          rounded-[3px]
                          text-[7px]

                          ${
                            selected
                              ? "bg-yellow-400 font-bold text-white"
                              : day
                              ? `bg-gray-200 text-black ${
                                  boldDate ? "font-bold" : ""
                                }`
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

          </div>

        </div>

      </div>

    </div>
  );
};

export default AvailabilityCalendar;