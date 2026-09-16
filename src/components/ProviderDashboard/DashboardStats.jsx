import React from "react";
import {
  FaRegUser,
  FaMagic,
  FaRegWindowMaximize,
} from "react-icons/fa";

const DashboardStats = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* ================= PROFILE ================= */}
      <div className="flex h-[100px] items-center rounded-lg bg-white px-4">

        <div className="flex w-[40px] shrink-0 justify-center">
          <FaRegUser className="text-[27px] text-yellow-500" />
        </div>

        <div className="mx-3 h-[48px] border-l border-gray-300" />

        <div className="flex-1 text-center">

          <h3 className="text-[9px] font-bold text-[#760000]">
            Profile Completion
          </h3>

          <p className="mt-1 text-[18px] font-bold text-gray-900">
            95%
          </p>

          <a
            href="#"
            className="mt-2 block text-[8px] text-gray-700 underline"
          >
            Complete Profile
          </a>

        </div>

      </div>


      {/* ================= CONVERSION ================= */}
      <div className="flex h-[100px] items-center rounded-lg bg-white px-4">

        <div className="flex w-[40px] shrink-0 justify-center">
          <FaMagic className="text-[27px] text-yellow-500" />
        </div>

        <div className="mx-3 h-[48px] border-l border-gray-300" />

        <div className="flex-1 text-center">

          <h3 className="text-[9px] font-bold text-[#760000]">
            Conversion Rate
          </h3>

          <p className="mt-1 text-[18px] font-bold text-gray-900">
            75%
          </p>

        </div>

      </div>


      {/* ================= THUMBNAIL ================= */}
      <div className="flex h-[100px] items-center rounded-lg bg-white px-4">

        <div className="flex w-[40px] shrink-0 justify-center">
          <FaRegWindowMaximize className="text-[27px] text-yellow-500" />
        </div>

        <div className="mx-3 h-[48px] border-l border-gray-300" />

        <div className="min-w-0 flex-1">

          <h3 className="text-[9px] font-bold text-[#760000]">
            Thumbnail Badge Text
          </h3>

          <div className="mt-2 rounded bg-gray-200 px-2 py-[7px] text-[8px] text-gray-500">
            Starting from 12,000
          </div>

          <a
            href="#"
            className="mt-2 block text-[8px] text-gray-700 underline"
          >
            Info and Edit
          </a>

        </div>

      </div>


      {/* ================= HIGH VALUE LEAD ================= */}
      <div className="flex h-[100px] flex-col items-center justify-center rounded-lg bg-white">

        <h3 className="text-[9px] font-bold text-[#760000]">
          Min. High value Lead
        </h3>

        <p className="mt-1 text-[18px] font-bold text-gray-900">
          50,000
        </p>

      </div>

    </div>
  );
};

export default DashboardStats;