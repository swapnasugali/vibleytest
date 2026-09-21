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


  // ===================================================
  // MAY 2026
  // ===================================================

  const weeks = [
    ["", "", "", "", 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ];


  // ===================================================
  // SAVE
  // ===================================================

  const handleSave = () => {
    if (selectedDate) {
      setSaved(true);
    }
  };


  return (
    <div
      className="
        w-full
        rounded-[7px]
        border
        border-[#d5d5d5]
        bg-white
        p-[9px]
        shadow-[0_1px_4px_rgba(0,0,0,0.08)]
      "
    >

      {/* ================================================= */}
      {/* MONTH HEADER */}
      {/* ================================================= */}

      <div className="mb-[7px] flex items-center justify-between">

        <button
          type="button"
          aria-label="Previous month"
          className="
            flex
            h-[16px]
            w-[16px]
            items-center
            justify-center
            text-[7px]
            text-[#444]
          "
        >
          <FaChevronLeft />
        </button>


        <p className="text-[8px] font-bold text-[#b40000]">
          MAY 2026
        </p>


        <button
          type="button"
          aria-label="Next month"
          className="
            flex
            h-[16px]
            w-[16px]
            items-center
            justify-center
            text-[7px]
            text-[#444]
          "
        >
          <FaChevronRight />
        </button>

      </div>


      {/* ================================================= */}
      {/* CALENDAR */}
      {/* ================================================= */}

      <div className="rounded-[5px] bg-[#f2f2f2] p-[5px]">

        <div className="space-y-[3px]">

          {weeks.map((week, weekIndex) => (

            <div
              key={weekIndex}
              className="grid grid-cols-7 gap-[2px]"
            >

              {week.map((day, dayIndex) => {

                if (day === "") {
                  return (
                    <div
                      key={dayIndex}
                      className="h-[16px] w-[16px]"
                    />
                  );
                }


                const isYellow =
                  day === 25 ||
                  day === 26 ||
                  day === 31;


                const isRed =
                  showRedDate && day === 27;


                const isSelected =
                  selectedDate === day;


                return (
                  <button
                    key={dayIndex}
                    type="button"
                    onClick={() => setSelectedDate(day)}
                    className={`
                      flex
                      h-[16px]
                      w-[16px]
                      items-center
                      justify-center
                      rounded-[3px]
                      text-[6px]
                      font-medium

                      ${
                        isRed
                          ? "bg-[#ef4444] text-white"
                          : isSelected
                          ? "bg-[#f4bd00] text-white"
                          : isYellow
                          ? "bg-[#f4bd00] text-white"
                          : "bg-[#e3e3e3] text-[#555]"
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

      <div className="mt-[9px] flex items-center justify-between">

        <p className="text-[7px] font-semibold text-[#555]">
          MARK DATE
        </p>

        <p className="text-[7px] text-[#777]">
          {selectedDate
            ? `${selectedDate}th MAY`
            : "--- MAY"}
        </p>

      </div>


      {/* ================================================= */}
      {/* INFO */}
      {/* ================================================= */}

      <div className="mt-[6px] flex items-start gap-[4px]">

        <FaInfoCircle className="mt-[1px] text-[7px] text-[#f4a900]" />

        <p className="text-[5.5px] leading-[8px] text-[#777]">
          mark/note only date by clicking on the date
        </p>

      </div>


      {/* ================================================= */}
      {/* INPUT */}
      {/* ================================================= */}

      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter text"
        className="
          mt-[6px]
          h-[20px]
          w-full
          rounded-[3px]
          border
          border-[#dddddd]
          px-[5px]
          text-[6px]
          text-[#555]
          outline-none
          placeholder:text-[#aaa]
          focus:border-[#b40000]
        "
      />


      {/* ================================================= */}
      {/* SAVE */}
      {/* ================================================= */}

      <div className="mt-[7px] flex justify-end">

        <button
          type="button"
          onClick={handleSave}
          className={`
            rounded-[3px]
            px-[13px]
            py-[4px]
            text-[6px]
            font-medium
            text-white
            ${
              saved
                ? "bg-[#7b0000]"
                : "bg-[#a87979] hover:bg-[#8f5555]"
            }
          `}
        >
          Save
        </button>

      </div>

    </div>
  );
};


// =====================================================
// COMPONENT 294
// FOUR CALENDAR STATES
// =====================================================

const AvailabilityCalendar1 = () => {
  return (
    <div className="w-full">

      <div
        className="
          grid
          w-full
          grid-cols-1
          gap-4
          sm:grid-cols-2
          lg:grid-cols-4
          lg:gap-[14px]
        "
      >

        {/* CALENDAR 1 */}
        <AvailabilityCalendarCard1
          initialSelectedDate={24}
        />


        {/* CALENDAR 2 */}
        <AvailabilityCalendarCard1
          initialSelectedDate={24}
          showRedDate={true}
        />


        {/* CALENDAR 3 */}
        <AvailabilityCalendarCard1
          initialSelectedDate={27}
          showRedDate={true}
          showSavedDate={true}
        />


        {/* CALENDAR 4 */}
        <AvailabilityCalendarCard1
          initialSelectedDate={27}
          initialNote="2 events at the same location."
          showRedDate={true}
          showSavedDate={true}
        />

      </div>

    </div>
  );
};

export default AvailabilityCalendar1;