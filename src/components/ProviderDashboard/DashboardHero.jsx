import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const DashboardHero = () => {
  return (
    <section className="w-full border-b border-gray-200 bg-[#f8f7f7]">

      <div className="mx-auto flex h-[72px] w-full max-w-[960px] items-center justify-between px-5">

        <div>

          <h1 className="text-[18px] font-semibold text-[#292929]">
            Service Provider Dashboard
          </h1>

          <p className="mt-1 text-[11px] text-gray-400">
            Track leads, respond faster, and manage your services efficiently.
          </p>

        </div>


        <div className="flex items-center gap-3">

          <span className="text-[10px] font-bold uppercase text-gray-800">
            Availability Calender
          </span>

          <FaRegCalendarAlt className="text-[22px] text-gray-800" />

        </div>

      </div>

    </section>
  );
};

export default DashboardHero;