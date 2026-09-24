import React, { useState } from "react";

const ServicePolicy = () => {

  // =====================================================
  // TOGGLE STATES
  // =====================================================

  const [enableRescheduling, setEnableRescheduling] = useState(true);

  const [bookingInAdvance, setBookingInAdvance] = useState(true);


  return (
    <section className="w-full rounded-[4px] bg-white">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="border-b border-[#e5e5e5] px-[16px] py-[9px]">

        <h2 className="text-[20px] font-semibold text-[#333]">
          SERVICE POLICY & REGULATIONS
        </h2>

      </div>


      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="px-[16px] pb-[16px] pt-[9px]">

        {/* ================================================= */}
        {/* CANCELLATION POLICY */}
        {/* ================================================= */}

        <label className="mb-[5px] block text-[18px] font-semibold text-[#333]">
          Cancellation Policy Summary
        </label>

        <textarea
          placeholder="Write your Policy, to be displayed for the clients before booking.."
          className="
            h-[150px]
            w-full
            resize-none
            rounded-[4px]
            border
            border-[#cfcfcf]
            px-[10px]
            py-[8px]
            text-[12px]
            outline-none
            placeholder:text-[#9F9F9F]
          "
        />


        {/* ================================================= */}
        {/* DIVIDER */}
        {/* ================================================= */}

        <div className="my-[10px] border-t border-[#eeeeee]" />


        {/* ================================================= */}
        {/* RESCHEDULING */}
        {/* ================================================= */}

        <div className="flex flex-wrap items-center gap-[7px]">

          <span className="text-[18px] font-semibold text-[#333]">
            Enable Re Scheduling
          </span>


          {/* RESCHEDULING TOGGLE */}

          <button
            type="button"
            onClick={() =>
              setEnableRescheduling(!enableRescheduling)
            }
            className={`
              relative
              h-[18px]
              w-[28px]
              cursor-pointer
              rounded-full
              transition-colors
              duration-200
              ${
                enableRescheduling
                  ? "bg-[#a90000]"
                  : "bg-[#cfcfcf]"
              }
            `}
          >

            <span
              className={`
                absolute
                top-[3px]
                h-[12px]
                w-[12px]
                rounded-full
                bg-white
                transition-all
                duration-200
                ${
                  enableRescheduling
                    ? "right-[2px]"
                    : "left-[2px]"
                }
              `}
            />

          </button>


          <span className="text-[18px] text-[#333]">
            Within
          </span>


          <select
            defaultValue="3 Days"
            className="
              h-[25px]
              rounded-[4px]
              border
              border-[#cfcfcf]
              bg-white
              px-[7px]
              text-[12px]
              outline-none
              cursor-pointer
            "
          >
            <option>3 Days</option>
            <option>5 Days</option>
            <option>7 Days</option>
          </select>


          <span className="text-[18px] text-[#333]">
            Of Booking
          </span>

        </div>


        {/* ================================================= */}
        {/* BOOKING IN ADVANCE */}
        {/* ================================================= */}

        <div className="mt-[10px] flex flex-wrap items-center gap-[7px]">

          <span className="text-[18px] font-semibold text-[#333]">
            Booking In Advance
          </span>


          {/* BOOKING IN ADVANCE TOGGLE */}

          <button
            type="button"
            onClick={() =>
              setBookingInAdvance(!bookingInAdvance)
            }
            className={`
              relative
              h-[18px]
              w-[28px]
              cursor-pointer
              rounded-full
              transition-colors
              duration-200
              ${
                bookingInAdvance
                  ? "bg-[#a90000]"
                  : "bg-[#cfcfcf]"
              }
            `}
          >

            <span
              className={`
                absolute
                top-[3px]
                h-[12px]
                w-[12px]
                rounded-full
                bg-white
                transition-all
                duration-200
                ${
                  bookingInAdvance
                    ? "right-[2px]"
                    : "left-[2px]"
                }
              `}
            />

          </button>


          <input
            type="text"
            placeholder="Enter basic Advance %"
            className="
              h-[25px]
              w-[175px]
              rounded-[4px]
              border
              border-[#cfcfcf]
              px-[8px]
              text-[12px]
              outline-none
            "
          />

        </div>

      </div>

    </section>
  );
};

export default ServicePolicy;