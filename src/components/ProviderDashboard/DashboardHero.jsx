import React, { useState } from "react";
import AvailabilityCalendarOverlay from "./AvailabilityCalendarOverlay";

const CalendarIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="5"
      width="22"
      height="20"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />

    <path
      d="M8 3V8M20 3V8M3 11H25"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    <path
      d="M8 15H10M14 15H16M20 15H20.5M8 19H10M14 19H16M20 19H20.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const DashboardHero = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <section
        className="w-full border-b border-gray-200 bg-[#f8f7f7]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
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
          <button
            type="button"
            onClick={() => setShowCalendar(true)}
            className="flex cursor-pointer items-center gap-3 self-start text-left md:self-auto"
            aria-label="Open availability calendar"
          >
            <span className="text-[16px] font-semibold uppercase text-[#000000] sm:text-[16px]">
              Availability Calender
            </span>

            <span className="text-gray-800 transition hover:text-[#b00000]">
              <CalendarIcon />
            </span>
          </button>
        </div>
      </section>

      {/* CALENDAR OVERLAY */}
      {showCalendar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
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