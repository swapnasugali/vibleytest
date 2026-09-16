import React from "react";

const Legend = ({ color, label, count }) => {
  return (
    <div className="flex items-center gap-2">

      <span
        className={`h-[6px] w-[6px] rounded-full ${color}`}
      />

      <span className="text-[8px] text-gray-700">
        {label}({count})
      </span>

    </div>
  );
};

const LeadStatusSummary = () => {
  return (
    <div className="w-full rounded-lg bg-white">

      {/* HEADER */}
      <div className="flex h-[43px] items-center border-b border-gray-200 px-5">

        <h2 className="text-[10px] font-bold uppercase text-gray-800">
          Lead Status Summary
        </h2>

      </div>


      {/* CONTENT */}
      <div className="px-5 pt-6">

        {/* TOTAL */}
        <div className="mb-2 flex items-center justify-between">

          <span className="text-[9px] font-semibold text-gray-700">
            Total Leads
          </span>

          <span className="text-[9px] font-semibold text-gray-700">
            33
          </span>

        </div>


        {/* BAR */}
        <div className="flex h-[12px] w-full overflow-hidden rounded-full bg-gray-300">

          <div className="w-[21%] bg-blue-500" />

          <div className="w-[29%] bg-orange-500" />

          <div className="w-[29%] bg-green-600" />

          <div className="w-[17%] bg-red-600" />

          <div className="w-[4%] bg-gray-300" />

        </div>


        {/* LEGEND */}
        <div className="mt-6 grid grid-cols-3 gap-y-5">

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
        <div className="mt-10 flex justify-center">

          <a
            href="#"
            className="text-[8px] text-gray-500 underline"
          >
            <span className="mr-1 text-yellow-500">
              ▣
            </span>
            know about the tabs / purpose
          </a>

        </div>

      </div>

    </div>
  );
};

export default LeadStatusSummary;