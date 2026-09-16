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
    <div className="mb-2 flex items-center justify-between border-b border-gray-200 pb-2">

      <div>
        <p className="text-[7px] font-bold text-gray-700">
          {date}
        </p>

        <p className="mt-[2px] text-[6px] text-gray-500">
          {day}
        </p>
      </div>

      <p className={`text-[8px] font-semibold ${statusColor}`}>
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
      <div className="flex h-[43px] items-center justify-between border-b border-gray-200 px-5">

        <h2 className="text-[10px] font-bold uppercase text-gray-800">
          Availability Calender
        </h2>

        <a
          href="#"
          className="text-[8px] text-gray-700 underline"
        >
          Edit Calender
        </a>

      </div>


      {/* BODY */}
      <div className="flex gap-4 px-5 py-3">

        {/* LEFT */}
        <div className="w-[55%]">

          <CalendarEvent
            date="MAY 24, 2026"
            day="TODAY"
            status="Available all day"
            statusColor="text-green-600"
          />

          <CalendarEvent
            date="MAY 25, 2026"
            day="SATURDAY"
            status="1 event from 11am"
            statusColor="text-red-600 underline"
          />

          <CalendarEvent
            date="MAY 26, 2026"
            day="SUNDAY"
            status="2 events"
            statusColor="text-red-600 underline"
          />

          <a
            href="#"
            className="mt-2 block text-[8px] text-gray-700 underline"
          >
            view all dates
          </a>

        </div>


        {/* RIGHT CALENDAR */}
        <div className="min-w-0 flex-1">

          <div className="overflow-hidden rounded-lg border border-gray-300">

            {/* MONTH */}
            <div className="flex h-[27px] items-center justify-between bg-gray-100 px-3">

              <FaChevronLeft className="text-[6px] text-gray-600" />

              <span className="text-[8px] font-bold text-[#b00000]">
                MAY 2026
              </span>

              <FaChevronRight className="text-[6px] text-gray-600" />

            </div>


            {/* CALENDAR */}
            <div className="space-y-[3px] p-2">

              {weeks.map((week, weekIndex) => (

                <div
                  key={weekIndex}
                  className="grid grid-cols-7 gap-[3px]"
                >

                  {week.map((day, dayIndex) => (

                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`
                        flex
                        h-[17px]
                        items-center
                        justify-center
                        rounded-[2px]
                        text-[7px]
                        ${
                          day === "25" || day === "26"
                            ? "bg-yellow-400 font-bold text-white"
                            : "bg-gray-200 text-gray-500"
                        }
                      `}
                    >
                      {day}
                    </div>

                  ))}

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