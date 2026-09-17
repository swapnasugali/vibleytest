import React from "react";
import { FaRegLightbulb } from "react-icons/fa";

const Legend = ({ color, label, count }) => {
  return (
    <div className="flex min-w-0 items-center gap-2">
      <span
        className={`h-[7px] w-[7px] shrink-0 rounded-full ${color}`}
      />

      <span className="whitespace-nowrap text-[8px] text-gray-700 sm:text-[9px] md:text-[10px]">
        {label}({count})
      </span>
    </div>
  );
};

const LeadStatusSummary = () => {
  return (
    <div className="w-full rounded-lg bg-white">

      {/* HEADER */}
      <div className="flex min-h-[50px] w-full items-center border-b border-gray-200 px-4 sm:min-h-[58px] sm:px-5 md:px-6">
        <h2 className="text-[10px] font-bold uppercase text-gray-800 sm:text-[11px] md:text-[12px]">
          Lead Status Summary
        </h2>
      </div>

      {/* CONTENT */}
      <div className="w-full px-4 py-5 sm:px-5 sm:py-6 md:px-6">

        {/* TOTAL LEADS */}
        <div className="mb-2 flex w-full items-center justify-between">
          <span className="text-[9px] font-semibold text-gray-700 sm:text-[10px] md:text-[11px]">
            Total Leads
          </span>

          <span className="text-[9px] font-semibold text-gray-700 sm:text-[10px] md:text-[11px]">
            33
          </span>
        </div>

        {/* STATUS BAR */}
        <div className="flex h-[10px] w-full overflow-hidden rounded-full bg-gray-300 sm:h-[11px] md:h-[12px]">
          <div className="w-[21%] bg-blue-500" />
          <div className="w-[29%] bg-orange-500" />
          <div className="w-[29%] bg-green-600" />
          <div className="w-[17%] bg-red-600" />
          <div className="w-[4%] bg-gray-300" />
        </div>

        {/* LEGEND */}
        <div className="mt-6 grid w-full grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3">
          
          <Legend
            color="bg-blue-500"
            label="New"
            count="12"
          />

          <Legend
            color="bg-green-600"
            label="Booked"
            count="12"
          />

          <Legend
            color="bg-gray-400"
            label="Missed"
            count="06"
          />

          <Legend
            color="bg-orange-500"
            label="Contacted"
            count="08"
          />

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
            <FaRegLightbulb className="mr-1 text-[9px] text-yellow-500 sm:text-[10px]" />
            know about the tabs / purpose
          </a>
        </div>

      </div>
    </div>
  );
};

export default LeadStatusSummary;