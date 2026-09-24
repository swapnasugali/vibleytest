import React from "react";
import { FiPlus } from "react-icons/fi";

const ServiceArea = () => {
  return (
    <section className="w-full rounded-[4px] bg-white">

      {/* HEADER */}

      <div className="border-b border-[#e5e5e5] px-[16px] py-[9px]">

        <h2 className="text-[20px] font-semibold text-[#333]">
          SERVICE AREA / OPERATIONS
        </h2>

      </div>


      {/* CONTENT */}

      <div className="px-[16px] pb-[14px] pt-[9px]">

        {/* BASE LOCATION */}

        <div>

          <label className="mb-[5px] block text-[18px] font-semibold text-[#2E2E2E]">
            Base Area Location
          </label>

          <input
            type="text"
            placeholder="Kondapur, Hyderabad"
            className="
              h-[30px]
              w-full
              rounded-[4px]
              border
              border-[#cfcfcf]
              px-[10px]
              text-[12px]
              outline-none
              placeholder:text-[#777]
            "
          />

        </div>


        {/* SERVICEABLE LOCATIONS */}

        <div className="mt-[10px]">

          <label className="mb-[6px] block text-[18px] font-semibold text-[#2E2E2E]">
            Serviceable Locations
          </label>

          <div className="flex flex-wrap items-center gap-[6px]">

            <span className="rounded-[3px] bg-[#F3F4F6] px-[10px] py-[4px] text-[16px] text-[#4B5563]">
              Telangana
            </span>

            <span className="rounded-[3px] bg-[#F3F4F6] px-[10px] py-[4px] text-[16px] text-[#4B5563]">
              Andhra pradesh
            </span>

            <span className="rounded-[3px] bg-[#F3F4F6] px-[10px] py-[4px] text-[16px] text-[#4B5563]">
              Karnataka
            </span>

            <span className="rounded-[3px] bg-[#F3F4F6] px-[10px] py-[4px] text-[16px] text-[#4B5563]">
              Tamil Nadu
            </span>

            <button
              type="button"
              className="
                flex
                h-[15px]
                w-[15px]
                items-center
                justify-center
                rounded-full
                border
                border-[#555]
              "
            >
              <FiPlus className="text-[9px]" />
            </button>

          </div>

        </div>


        {/* TIMINGS */}

        <div className="mt-[12px] grid grid-cols-1 gap-[12px] sm:grid-cols-2">

          {/* OPERATION TIMINGS */}

          <div>

            <label className="mb-[6px] block text-[18px] font-semibold text-[#333]">
              Operation Timings
            </label>

            <div className="flex flex-wrap items-center gap-[5px]">

              <span className="text-[16px] text-[#2E2E2E]">
                From
              </span>

              <input
                type="text"
                value="10:00am"
                readOnly
                className="
                  h-[30px]
                  w-[68px]
                  rounded-[4px]
                  border
                  border-[#cfcfcf]
                  px-[7px]
                  text-[12px]
                  outline-none
                "
              />

              <span className="text-[16px] text-[#2E2E2E]">
                To
              </span>

              <input
                type="text"
                value="10:00pm"
                readOnly
                className="
                  h-[30px]
                  w-[68px]
                  rounded-[4px]
                  border
                  border-[#cfcfcf]
                  px-[7px]
                  text-[12px]
                  outline-none
                "
              />

            </div>

          </div>


          {/* AVAILABILITY */}

          <div>

            <label className="mb-[6px] block text-[18px] font-semibold text-[#333]">
              Availability
            </label>

            <input
              type="text"
              value="Monday to Sunday ( All Days )"
              readOnly
              className="
                h-[30px]
                w-full
                rounded-[4px]
                border
                border-[#cfcfcf]
                px-[10px]
                text-[12px]
                text-[#777]
                outline-none
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServiceArea;