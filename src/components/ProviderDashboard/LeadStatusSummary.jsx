import React from "react";
import { FaBookOpen } from "react-icons/fa6";

const Legend = ({ color, label, count }) => {
  return (
    <div className="flex min-w-0 items-center gap-2">

      {/* CIRCLE */}
      <span
        className={`
          block
          h-[8px]
          w-[8px]
          shrink-0
          rounded-full
          ${color}
        `}
      />

      {/* LABEL + COUNT */}
      <span className="whitespace-nowrap text-[14px] font-normal text-gray-700 sm:text-[14px] md:text-[14px]">
        {label}(
        <span className="font-semibold">
          {count}
        </span>
        )
      </span>

    </div>
  );
};

const LeadStatusSummary = () => {
  return (
    <div className="w-full rounded-lg bg-white">

      {/* HEADER */}
      <div className="flex min-h-[50px] w-full items-center border-b border-gray-200 px-4 sm:min-h-[58px] sm:px-6 md:px-8 lg:px-10 xl:px-12">

        <h2 className="text-[16px] font-semibold uppercase text-gray-800 sm:text-[16px] md:text-[12px]">
          Lead Status Summary
        </h2>

      </div>

      {/* CONTENT */}
      <div className="w-full px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:px-10 xl:px-12">

        {/* TOTAL LEADS */}
        <div className="mb-2 flex w-full items-center justify-between">

          <span className="text-[14px] font-semibold text-gray-700 sm:text-[14px] md:text-[14px]">
            Total Leads
          </span>

          <span className="text-[14px] font-semibold text-gray-700 sm:text-[14px] md:text-[14px]">
            33
          </span>

        </div>

        {/* STATUS BAR */}
        <div className="flex h-[10px] w-full overflow-hidden rounded-full bg-gray-300 sm:h-[11px] md:h-[12px]">

          <div className="w-[17%] bg-blue-500" />
          <div className="w-[30%] bg-orange-500" />
          <div className="w-[25%] bg-green-600" />
          <div className="w-[10%] bg-red-500" />
          <div className="w-[4%] bg-gray-300" />

        </div>

        {/* LEGEND */}
        <div className="mt-6 grid w-full grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3">

          {/* NEW */}
          <Legend
            color="bg-blue-500"
            label="New"
            count="12"
          />

          {/* BOOKED */}
          <Legend
            color="bg-green-600"
            label="Booked"
            count="12"
          />

          {/* MISSED */}
          <Legend
            color="bg-gray-400"
            label="Missed"
            count="06"
          />

          {/* CONTACTED */}
          <Legend
            color="bg-orange-500"
            label="Contacted"
            count="08"
          />

          {/* REJECTED */}
          <Legend
            color="bg-red-600"
            label="Rejected"
            count="02"
          />

        </div>

        {/* HELP */}
        <div className="mt-8 flex w-full justify-center sm:mt-10">

          <a
            href="#"
            className="flex items-center text-center text-[8px] text-gray-500 underline sm:text-[9px] md:text-[10px]"
          >
            <FaBookOpen className="mr-1 text-[14px] text-yellow-500 sm:text-[14px]" />
            know about the tabs / purpose
          </a>

        </div>

      </div>
    </div>
  );
};

export default LeadStatusSummary;