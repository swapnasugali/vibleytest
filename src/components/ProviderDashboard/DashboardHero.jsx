import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import AvailabilityCalendarOverlay from "./AvailabilityCalendarOverlay";

const DashboardHero = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <section className="w-full border-b border-gray-200 bg-[#f8f7f7]">

        {/* DASHBOARD HERO CONTENT */}
        <div className="flex min-h-[72px] w-full flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-0 md:py-0 md:px-8 lg:px-10 xl:px-12">

          {/* TITLE */}
          <div>
            <h1 className="text-[26px] font-medium text-[#252525] sm:text-[26px]">
              Service Provider Dashboard
            </h1>

            <p className="mt-1 text-[16px] text-gray-300 sm:text-[16px]">
              Track leads, respond faster, and manage your services efficiently.
            </p>
          </div>

          {/* AVAILABILITY */}
          <div className="flex items-center gap-3">

            <span className="text-[16px] font-semibold uppercase text-[#000000] sm:text-[16px]">
              Availability Calender
            </span>

            <FaRegCalendarAlt
              onClick={() => setShowCalendar(true)}
              className="
                cursor-pointer
                text-[20px]
                text-gray-800
                transition
                hover:text-[#b00000]
                sm:text-[22px]
              "
            />

          </div>

        </div>

      </section>

      {/* CALENDAR OVERLAY */}
      {showCalendar && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/40
            p-4
          "
        >
          <div className="w-full max-w-[700px]">

            <AvailabilityCalendarOverlay
              onClose={() => setShowCalendar(false)}
            />

          </div>
        </div>
      )}

    </>
  );
};

export default DashboardHero;