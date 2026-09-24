import React, { useState } from "react";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaInfoCircle,
} from "react-icons/fa";

const AvailabilityCalendarOverlay = ({ onClose }) => {
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

  const handlePreviousMonth = () => {
    setCurrentDate(
      new Date(currentYear, currentMonth - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentYear, currentMonth + 1, 1)
    );
  };

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const calendarDays = [];

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

  const isSelected = (day) => {
    if (currentYear === 2026 && currentMonth === 4) {
      return (
        day === "25" ||
        day === "26" ||
        day === "31"
      );
    }

    return false;
  };

  const isBoldDate = (day) => {
    return [
      "24",
      "27",
      "28",
      "29",
      "30",
      "31",
    ].includes(day);
  };

  return (
    <div
      className="
        h-full
        w-[105%]
        overflow-hidden
        rounded-[8px]
        border
        border-gray-300
        bg-white
        shadow-sm
      "
    >

      {/* HEADER */}
      <div
        className="
          flex
          h-[36px]
          items-center
          justify-between
          border-b
          border-gray-200
          bg-white
          px-[14px]
        "
      >
        <h2 className="text-[16px] font-semibold uppercase tracking-[0.1px] text-[#171717]">
          Availability Calender
        </h2>

        <button
          type="button"
          onClick={onClose}
          className="
            flex
            h-[19px]
            w-[19px]
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border-[1.5px]
            border-[#d00000]
            bg-white
            text-[#d00000]
          "
        >
          <FaTimes className="text-[8px]" />
        </button>
      </div>


      {/* MAIN CONTENT */}
      <div
        className="
          grid
          w-full
          grid-cols-1
          gap-6
          bg-white
          px-[14px]
          pb-[16px]
          pt-[12px]
          sm:grid-cols-[1fr_290px]
        "
      >

        {/* LEFT DATE LIST */}
        <div className="min-w-0 bg-white">

          <div className="flex flex-col gap-[17px]">

            {dates.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  min-h-[32px]
                  items-center
                  justify-between
                  gap-5
                "
              >

                {/* DATE + DAY */}
                <div className="min-w-0">

                  <p className="text-[14px] font-semibold leading-[12px] text-[#222]">
                    {item.date}
                  </p>

                  <p className="mt-[6px] text-[14px] font-light leading-[11px] text-[#777]">
                    {item.day}
                  </p>

                </div>


                {/* STATUS */}
                <p
                  className={`
                    shrink-0
                    text-right
                    text-[14px]
                    font-semibold
                    leading-[12px]
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

        </div>


        {/* RIGHT CALENDAR */}
        <div className="min-w-0 bg-white">

          <div
            className="
              rounded-[8px]
              border
              border-gray-300
              bg-white
              p-[11px]
              shadow-[0_1px_4px_rgba(0,0,0,0.12)]
            "
          >

            {/* MONTH HEADER */}
            <div
              className="
                flex
                h-[32px]
                items-center
                justify-between
                rounded-[7px]
                bg-[#f1f1f1]
                px-[14px]
              "
            >

              <button
                type="button"
                onClick={handlePreviousMonth}
                className="
                  flex
                  h-[21px]
                  w-[21px]
                  items-center
                  justify-center
                  bg-transparent
                "
                aria-label="Previous month"
              >
                <FaChevronLeft className="text-[7px] cursor-pointer text-[#222]" />
              </button>


              <span className="text-[18px] font-bold text-[#c00000]">
                {monthNames[currentMonth]} {currentYear}
              </span>


              <button
                type="button"
                onClick={handleNextMonth}
                className="
                  flex
                  h-[21px]
                  w-[21px]
                  items-center
                  justify-center
                  bg-transparent
                "
                aria-label="Next month"
              >
                <FaChevronRight className="text-[7px] cursor-pointer text-[#222]" />
              </button>

            </div>


            {/* CALENDAR GRID */}
            <div
              className="
                mt-[9px]
                rounded-[7px]
                bg-[#f3f3f3]
                px-[9px]
                py-[9px]
              "
            >

              {weeks.map((week, weekIndex) => (
                <div
                  key={weekIndex}
                  className="
                    mb-[5px]
                    grid
                    grid-cols-7
                    gap-[5px]
                    last:mb-0
                  "
                >

                  {week.map((day, dayIndex) => {

                    const selected = isSelected(day);
                    const boldDate = isBoldDate(day);

                    return (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`
                          flex
                          h-[22px]
                          items-center
                          justify-center
                          rounded-[3px]
                          text-[8px]
                          ${
                            selected
                              ? "bg-[#ffc400] font-bold text-white"
                              : day
                              ? `bg-[#dedede] text-[#777] ${
                                  boldDate
                                    ? "font-bold text-black"
                                    : ""
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


            {/* MARK DATE */}
            <div
              className="
                mt-[14px]
                border-t
                border-gray-200
                bg-white
                pt-[11px]
              "
            >

              {/* MARK DATE HEADER */}
              <div className="flex items-center justify-between">

                <span className="text-[15px] font-semibold uppercase leading-none text-[#888]">
                  MARK DATE
                </span>

                <span className="text-[15px] leading-none text-[#888]">
                  ---- MAY
                </span>

              </div>


              {/* INFO */}
              <div className="mt-[11px] flex items-center gap-[7px]">

                <FaInfoCircle className="shrink-0 text-[9px] text-[#ffb000]" />

                <span className="text-[12px] font-light leading-[15px] text-[#666]">
                  mark/note any date by clicking on the date
                </span>

              </div>


              {/* INPUT */}
              <input
                type="text"
                placeholder="Enter Text"
                className="
                  mt-[11px]
                  h-[31px]
                  w-full
                  rounded-[3px]
                  border
                  border-gray-200
                  bg-white
                  px-[9px]
                  text-[13px]
                  text-gray-700
                  outline-none
                  placeholder:text-gray-400
                  focus:border-gray-300
                "
              />


              {/* SAVE */}
              <div className="mt-[12px] flex justify-end">

                <button
                  type="button"
                  className="
                    h-[28px]
                    rounded-[4px]
                    bg-[#b98686]
                    px-[18px]
                    text-[14px]
                    font-medium
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