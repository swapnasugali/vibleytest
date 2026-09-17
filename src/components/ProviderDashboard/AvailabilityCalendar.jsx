import React from "react";
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
        <p className="text-[7px] font-bold text-gray-800 sm:text-[8px]">
          {date}
        </p>

        <p className="mt-1 text-[7px] text-gray-500 sm:text-[8px]">
          {day}
        </p>
      </div>

      {/* STATUS */}
      <p
        className={`ml-3 whitespace-nowrap text-[8px] font-semibold sm:text-[9px] ${statusColor}`}
      >
        {status}
      </p>

    </div>
  );
};


const AvailabilityCalendar = () => {

  const weeks = [
    ["1", "2", "3", "4", "5", "6", "7"],
    ["8", "9", "10", "11", "12", "13", "14"],
    ["15", "16", "17", "18", "19", "20", "21"],
    ["22", "23", "24", "25", "26", "27", "28"],
    ["29", "30", "31", "", "", "", ""],
  ];

  return (
    <div className="w-full rounded-lg bg-white">

      {/* HEADER */}
      <div className="flex min-h-[48px] w-full items-center justify-between border-b border-gray-200 px-4 sm:px-5 md:px-6">

        <h2 className="text-[10px] font-bold uppercase text-gray-800 sm:text-[11px]">
          Availability Calender
        </h2>

        <a
          href="#"
          className="whitespace-nowrap text-[8px] text-gray-700 underline sm:text-[9px]"
        >
          Edit Calender
        </a>

      </div>


      {/* CONTENT */}
      <div className="grid w-full grid-cols-1 gap-5 px-4 py-4 sm:px-5 md:grid-cols-[1fr_200px] md:px-6 md:py-5">

        {/* LEFT DATE LIST */}
        <div className="min-w-0">

          <div className="space-y-4">

            <CalendarEvent
              date="MAY 24, 2026"
              day="TODAY"
              status="Available all day"
              statusColor="text-green-600"
            />

            <CalendarEvent
              date="MAY 25, 2026"
              day="SATURDAY"
              status="1 event from 11 am"
              statusColor="text-red-600 underline"
            />

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
            className="mt-3 block text-[8px] text-gray-700 underline sm:text-[9px]"
          >
            view all dates
          </a>

        </div>


        {/* CALENDAR */}
        <div className="w-full">

          <div className="overflow-hidden rounded-lg border border-gray-300">

            {/* MONTH HEADER */}
            <div className="flex h-[30px] items-center justify-between bg-gray-100 px-3">

              <FaChevronLeft className="text-[7px] text-gray-700" />

              <span className="text-[8px] font-bold text-[#b00000]">
                MAY 2026
              </span>

              <FaChevronRight className="text-[7px] text-gray-700" />

            </div>


            {/* DAYS */}
            <div className="space-y-[4px] p-2">

              {weeks.map((week, weekIndex) => (
                <div
                  key={weekIndex}
                  className="grid grid-cols-7 gap-[3px]"
                >

                  {week.map((day, dayIndex) => {

                    const isSelected =
                      day === "25" || day === "26";

                    const isToday = day === "24";

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
                            isSelected
                              ? "bg-yellow-400 font-bold text-white"
                              : isToday
                              ? "bg-white font-bold text-gray-800"
                              : day
                              ? "bg-gray-200 text-gray-500"
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