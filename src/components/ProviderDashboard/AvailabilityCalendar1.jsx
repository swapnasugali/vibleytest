import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaInfoCircle,
} from "react-icons/fa";

// =====================================================
// SINGLE CALENDAR CARD
// =====================================================

const AvailabilityCalendarCard1 = ({
  initialSelectedDate = null,
  initialNote = "",
  showRedDate = false,
  showSavedDate = false,
}) => {
  const [selectedDate, setSelectedDate] = useState(
    initialSelectedDate
  );

  const [note, setNote] = useState(initialNote);

  const [saved, setSaved] = useState(showSavedDate);

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

    setSelectedDate(null);
    setSaved(false);
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

    setSelectedDate(null);
    setSaved(false);
  };

  // =====================================================
  // DAYS IN MONTH
  // =====================================================

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  // =====================================================
  // CALENDAR DAYS
  // =====================================================

  const calendarDays = [];

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // =====================================================
  // CREATE ROWS
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
  // SAVE
  // =====================================================

  const handleSave = () => {
    if (selectedDate) {
      setSaved(true);
    }
  };

  return (
    <div
      className="
        flex
        min-h-[330px]
        w-full
        flex-col
        overflow-hidden
        rounded-[8px]
        border
        border-gray-300
        bg-white
        shadow-sm
      "
    >
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div
        className="
          flex
          h-[40px]
          shrink-0
          items-center
          border-b
          border-gray-200
          bg-white
          px-[13px]
        "
      >
        <h2
          className="
            text-[15px]
            font-semibold
            uppercase
            tracking-[0.1px]
            text-[#171717]
          "
        >
          Availability Calender
        </h2>
      </div>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div
        className="
          flex
          flex-1
          flex-col
          bg-white
          px-[12px]
          pb-[12px]
          pt-[11px]
        "
      >
        {/* ================================================= */}
        {/* MONTH HEADER */}
        {/* ================================================= */}

        <div
          className="
            flex
            h-[31px]
            shrink-0
            items-center
            justify-between
            rounded-[6px]
            bg-[#f1f1f1]
            px-[12px]
          "
        >
          <button
            type="button"
            onClick={handlePreviousMonth}
            aria-label="Previous month"
            className="
              flex
              h-[18px]
              w-[18px]
              items-center
              justify-center
              text-[#222]
              cursor-pointer
            "
          >
            <FaChevronLeft className="text-[7px]" />
          </button>

          <span
            className="
              text-[18px]
              font-bold
              text-[#c00000]
            "
          >
            {monthNames[currentMonth]} {currentYear}
          </span>

          <button
            type="button"
            onClick={handleNextMonth}
            aria-label="Next month"
            className="
              flex
              h-[18px]
              w-[18px]
              items-center
              justify-center
              text-[#222]
              cursor-pointer
            "
          >
            <FaChevronRight className="text-[7px]" />
          </button>
        </div>

        {/* ================================================= */}
        {/* CALENDAR */}
        {/* ================================================= */}

        <div
          className="
            mt-[7px]
            w-full
            rounded-[6px]
            bg-[#f2f2f2]
            px-[7px]
            py-[7px]
          "
        >
          <div className="flex w-full flex-col gap-[4px]">

            {weeks.map((week, weekIndex) => (
              <div
                key={weekIndex}
                className="
                  grid
                  w-full
                  grid-cols-7
                  gap-[3px]
                "
              >
                {week.map((day, dayIndex) => {
                  if (day === "") {
                    return (
                      <div
                        key={dayIndex}
                        className="h-[17px] w-full"
                      />
                    );
                  }

                  // =================================================
                  // YELLOW DATES
                  // =================================================

                  const isYellowDate =
                    currentYear === 2026 &&
                    currentMonth === 4 &&
                    (
                      day === 25 ||
                      day === 26 ||
                      day === 31
                    );

                  // =================================================
                  // RED DATE
                  // =================================================

                  const isRedDate =
                    showRedDate &&
                    currentYear === 2026 &&
                    currentMonth === 4 &&
                    day === 27;

                  // =================================================
                  // SELECTED DATE
                  // =================================================

                  const isSelected =
                    selectedDate === day;

                  return (
                    <button
                      key={dayIndex}
                      type="button"
                      onClick={() => setSelectedDate(day)}
                      className={`
                        flex
                        h-[17px]
                        w-full
                        items-center
                        justify-center
                        rounded-[3px]
                        text-[6px]
                        font-medium
                        ${
                          isRedDate
                            ? "border border-[#ef4444] bg-[#f5f5f5] font-bold text-[#222]"
                            : isSelected
                            ? "bg-[#ffc400] font-bold text-white"
                            : isYellowDate
                            ? "bg-[#ffc400] font-bold text-white"
                            : "bg-[#dedede] text-[#777]"
                        }
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            ))}

          </div>
        </div>

        {/* ================================================= */}
        {/* MARK DATE */}
        {/* ================================================= */}

        <div
          className="
            mt-[10px]
            border-t
            border-[#dddddd]
            pt-[9px]
          "
        >
          <div className="flex items-center justify-between">

            <span
              className="
                text-[16px]
                font-semibold
                uppercase
                leading-none
                text-[#777]
              "
            >
              MARK DATE
            </span>

            <span
              className="
                text-[16px]
                leading-none
                text-[#777]
              "
            >
              {selectedDate
                ? `${selectedDate}th MAY`
                : `---- MAY`}
            </span>

          </div>

          {/* ================================================= */}
          {/* INFO */}
          {/* ================================================= */}

          <div
            className="
              mt-[7px]
              flex
              items-center
              gap-[4px]
            "
          >
            <FaInfoCircle
              className="
                shrink-0
                text-[7px]
                text-[#ffb000]
              "
            />

            <span
              className="
                text-[12px]
                font-light
                leading-[9px]
                text-[#666]
              "
            >
              mark/note any date by clicking on the date
            </span>
          </div>

          {/* ================================================= */}
          {/* INPUT */}
          {/* ================================================= */}

          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter Text"
            className="
              mt-[7px]
              h-[25px]
              w-[300px]
              rounded-[2px]
              border
              border-[#000000]
              bg-white
              px-[6px]
              text-[12px]
              text-[#000000]
              outline-none
              placeholder:text-[#999]
            "
          />

          {/* ================================================= */}
          {/* SAVE */}
          {/* ================================================= */}

          <div className="mt-[8px] flex justify-end">

            <button
              type="button"
              onClick={handleSave}
              className={`
                h-[21px]
                rounded-[4px]
                w-[100px]
                h-[32px]
                px-[14px]
                text-[20px]
                font-medium
                text-white
                cursor-pointer
                ${
                  saved
                    ? "bg-[#7d0000]"
                    : "bg-[#b98686]"
                }
              `}
            >
              Save
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};


// =====================================================
// MAIN COMPONENT
// =====================================================

const AvailabilityCalendar1 = () => {
  return (
    <div className="w-full">

      {/* ================================================= */}
      {/* CARDS PARENT */}
      {/* ================================================= */}

      <div
        className="
          ml-[140px]
          grid
          w-[calc(100%-100px)]
          grid-cols-1
          gap-[16px]
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >

        {/* CARD 1 */}

        <AvailabilityCalendarCard1
          initialSelectedDate={24}
        />

        {/* CARD 2 */}

        <AvailabilityCalendarCard1
          initialSelectedDate={24}
          showRedDate={true}
        />

        {/* CARD 3 */}

        <AvailabilityCalendarCard1
          initialSelectedDate={27}
          showRedDate={true}
          showSavedDate={true}
        />

        {/* CARD 4 */}

        <AvailabilityCalendarCard1
          initialSelectedDate={27}
          initialNote="2 Events at the same location."
          showRedDate={true}
          showSavedDate={true}
        />

      </div>
    </div>
  );
};

export default AvailabilityCalendar1;