import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaInfoCircle,
} from "react-icons/fa";


// =====================================================
// SINGLE CALENDAR CARD
// =====================================================

const AvailabilityCalendarCard = ({
  initialSelectedDate = null,
  initialNote = "",
  showRedDate = false,
  showSavedDate = false,
}) => {
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const [note, setNote] = useState(initialNote);

  const weeks = [
    ["1", "2", "3", "4", "5", "6", "7"],
    ["8", "9", "10", "11", "12", "13", "14"],
    ["15", "16", "17", "18", "19", "20", "21"],
    ["22", "23", "24", "25", "26", "27", "28"],
    ["29", "30", "31", "", "", "", ""],
  ];

  const yellowDates = ["25", "26", "31"];

  const handleDateClick = (day) => {
    if (!day) return;

    setSelectedDate(Number(day));
  };

  return (
    <div
      className="
        flex
        h-[253px]
        w-[182px]
        flex-none
        flex-col
        rounded-[6px]
        border
        border-[#d8d8d8]
        bg-white
        p-[7px]
        shadow-[0_1px_3px_rgba(0,0,0,0.10)]
      "
    >

      {/* ================================================= */}
      {/* MONTH HEADER */}
      {/* ================================================= */}

      <div
        className="
          flex
          h-[17px]
          shrink-0
          items-center
          justify-between
          px-[34px]
        "
      >

        <button
          type="button"
          className="
            flex
            h-[13px]
            w-[13px]
            items-center
            justify-center
            bg-transparent
          "
        >
          <FaChevronLeft className="text-[5px] text-[#222]" />
        </button>


        <span
          className="
            whitespace-nowrap
            text-[7px]
            font-bold
            text-[#b00000]
          "
        >
          MAY 2026
        </span>


        <button
          type="button"
          className="
            flex
            h-[13px]
            w-[13px]
            items-center
            justify-center
            bg-transparent
          "
        >
          <FaChevronRight className="text-[5px] text-[#222]" />
        </button>

      </div>


      {/* ================================================= */}
      {/* CALENDAR */}
      {/* ================================================= */}

      <div
        className="
          mt-[4px]
          shrink-0
          rounded-[7px]
          bg-[#f2f2f2]
          px-[7px]
          py-[6px]
        "
      >

        {weeks.map((week, weekIndex) => (

          <div
            key={weekIndex}
            className="
              mb-[3px]
              grid
              grid-cols-7
              gap-[3px]
            "
          >

            {week.map((day, dayIndex) => {

              const isYellow = yellowDates.includes(day);

              const isRed =
                day === "27" &&
                showRedDate;

              const isSelected =
                day !== "" &&
                Number(day) === selectedDate;


              return (

                <button
                  key={`${weekIndex}-${dayIndex}`}
                  type="button"
                  disabled={!day}
                  onClick={() => handleDateClick(day)}
                  className={`
                    flex
                    h-[17px]
                    w-[17px]
                    items-center
                    justify-center
                    rounded-[2px]
                    p-0
                    text-[7px]
                    leading-none

                    ${
                      !day
                        ? "bg-transparent"
                        : isRed
                        ? "border-[1px] border-[#e00000] bg-white font-bold text-[#222]"
                        : isYellow
                        ? "bg-[#ffc400] font-bold text-white"
                        : isSelected
                        ? "bg-white font-bold text-[#222]"
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


      {/* ================================================= */}
      {/* MARK DATE SECTION */}
      {/* ================================================= */}

      <div className="mt-[8px] min-w-0 flex-1">

        {/* MARK DATE HEADER */}

        <div className="flex items-center justify-between">

          <span
            className="
              whitespace-nowrap
              text-[7px]
              font-bold
              uppercase
              text-[#888]
            "
          >
            MARK DATE
          </span>


          <span
            className="
              whitespace-nowrap
              text-[7px]
              text-[#888]
            "
          >
            {showSavedDate
              ? "27th MAY"
              : "---- MAY"}
          </span>

        </div>


        {/* ================================================= */}
        {/* INFO */}
        {/* ================================================= */}

        <div
          className="
            mt-[8px]
            flex
            items-center
            gap-[3px]
            whitespace-nowrap
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
              whitespace-nowrap
              text-[6px]
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
            h-[24px]
            w-full
            rounded-[2px]
            border
            border-[#e2e2e2]
            bg-white
            px-[6px]
            text-[7px]
            text-[#444]
            outline-none
            placeholder:text-[#aaa]
            focus:border-[#b00000]
          "
        />


        {/* ================================================= */}
        {/* SAVE */}
        {/* ================================================= */}

        <div className="mt-[9px] flex justify-end">

          <button
            type="button"
            className="
              h-[20px]
              min-w-[43px]
              rounded-[3px]
              bg-[#b98787]
              px-[11px]
              text-[7px]
              font-semibold
              text-white
              transition
              hover:bg-[#8b0000]
            "
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
};


// =====================================================
// AVAILABILITY CALENDAR 1
// =====================================================

const AvailabilityCalendar1 = () => {
  return (
    <div className="w-full bg-white">

      {/* ================================================= */}
      {/* FOUR CARDS SIDE BY SIDE */}
      {/* ================================================= */}

      <div
        className="
          flex
          w-fit
          flex-nowrap
          items-start
          gap-[18px]
        "
      >

        {/* ================================================= */}
        {/* CARD 1 */}
        {/* ================================================= */}

        <AvailabilityCalendarCard
          initialSelectedDate={24}
        />


        {/* ================================================= */}
        {/* CARD 2 */}
        {/* ================================================= */}

        <AvailabilityCalendarCard
          initialSelectedDate={24}
          showRedDate={true}
        />


        {/* ================================================= */}
        {/* CARD 3 */}
        {/* ================================================= */}

        <AvailabilityCalendarCard
          initialSelectedDate={27}
          showRedDate={true}
          showSavedDate={true}
        />


        {/* ================================================= */}
        {/* CARD 4 */}
        {/* ================================================= */}

        <AvailabilityCalendarCard
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