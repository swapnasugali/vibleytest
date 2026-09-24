import React from "react";
import { FaTimes } from "react-icons/fa";

const LeadStatusOverlay = ({ onClose }) => {
  return (
    <div className="w-full overflow-hidden rounded-[8px] border border-gray-300 bg-white shadow-sm md:w-[95%]">

      {/* HEADER */}
      <div className="flex h-[36px] items-center justify-between border-b border-gray-200 bg-white px-[13px]">

        <h2 className="text-[px] font-semibold uppercase tracking-[0.1px] text-[#171717]">
          Lead Status Summary
        </h2>

        <button
          type="button"
          onClick={onClose}
          className="flex h-[19px] w-[19px] cursor-pointer items-center justify-center rounded-full border-[1.5px] border-[#d00000] bg-white text-[#d00000]"
        >
          <FaTimes className="text-[8px]" />
        </button>

      </div>

      {/* CONTENT */}
      <div className="bg-white px-[13px] py-[18px]">

        {/* NEW */}
        <div>
          <h3 className="text-[16px] font-semibold leading-[10px] text-[#111]">
            New
          </h3>

          <div className="my-[14px] h-px w-full bg-[#e5e5e5]" />

          <p className="text-[14px] leading-[11px] text-[#555]">
            Newly received leads that are yet to be contacted.
          </p>
        </div>

        {/* CONTACTED */}
        <div className="mt-[22px]">
          <h3 className="text-[16px] font-semibold leading-[10px] text-[#111]">
            Contacted
          </h3>

          <div className="my-[14px] h-px w-full bg-[#e5e5e5]" />

          <p className="text-[14px] leading-[11px] text-[#555]">
            Leads that have been reached out to but not finalized.
          </p>
        </div>

        {/* BOOKED */}
        <div className="mt-[22px]">
          <h3 className="text-[16px] font-semibold leading-[10px] text-[#111]">
            Booked:
          </h3>

          <div className="my-[14px] h-px w-full bg-[#e5e5e5]" />

          <p className="text-[14px] leading-[11px] text-[#555]">
            Leads successfully converted into confirmed bookings.
          </p>
        </div>

        {/* REJECTED */}
        <div className="mt-[22px]">
          <h3 className="text-[16px] font-semibold leading-[10px] text-[#111]">
            Rejected
          </h3>

          <div className="my-[14px] h-px w-full bg-[#e5e5e5]" />

          <p className="text-[14px] leading-[11px] text-[#555]">
            Leads that did not proceed due to decline or mismatch.
          </p>
        </div>

        {/* MISSED */}
        <div className="mt-[22px]">
          <h3 className="text-[16px] font-semibold leading-[10px] text-[#111]">
            Missed
          </h3>

          <div className="my-[14px] h-px w-full bg-[#e5e5e5]" />

          <p className="text-[14px] leading-[11px] text-[#555]">
            Leads not responded to before the event date and marked as missed.
          </p>
        </div>

      </div>

    </div>
  );
};

export default LeadStatusOverlay;