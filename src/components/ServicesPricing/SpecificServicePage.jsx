import React from "react";

import {
  FiPlusCircle,
  FiEdit2,
  FiTrash2,
  FiChevronDown,
} from "react-icons/fi";

import ServicesPricingLayout from "./ServicesPricingLayout";

import PricingField, {
  inputClassName,
  selectClassName,
  textareaClassName,
} from "./PricingField";


const SpecificServicePage = () => {

  return (
    <ServicesPricingLayout
      activeModel="service"
      showBackgroundLines={false}
    >

      {/* =====================================================
          TOOLBAR
      ===================================================== */}

      <div
        className="
          mt-[18px]
          flex
          items-center
          justify-between
        "
      >

        <div className="flex items-center gap-[10px]">

          <span className="text-[22px] text-[#555555]">
            All (01)
          </span>

          <button
            type="button"
            className="
              flex
              h-[52px]
              w-[121px]
              items-center
              gap-[5px]
              rounded-[4px]
              bg-white
              px-[9px]
              text-[20px]
              text-[#333333]
            "
          >
            Sort By
            <FiChevronDown />
          </button>

        </div>


        <button
          type="button"
          className="
            flex
            h-[52px]
            w-[218px]
            items-center
            gap-[5px]
            rounded-[4px]
            bg-[#c40000]
            px-[16px]
            text-[18px]
            font-medium
            text-white
          "
        >
          <FiPlusCircle />
          Add Service
        </button>

      </div>


      {/* =====================================================
          TITLE
      ===================================================== */}

      <div className="mt-[15px]">

        <p
          className="
            text-[20px]
            font-medium
            text-[#777777]
          "
        >
          Service Based Charges - 1
        </p>

      </div>


      {/* =====================================================
          SERVICE FORM
      ===================================================== */}

      <section
        className="
          mt-[7px]
          rounded-[6px]
          bg-white
          px-[25px]
          py-[20px]
          sm:px-[30px]
          md:px-[34px]
        "
      >

        <div
          className="
            grid
            grid-cols-1
            gap-x-[20px]
            gap-y-[15px]
            sm:grid-cols-2
          "
        >

          {/* SERVICE MAIN */}

          <PricingField
            label="Service (Main)"
            required
          >
            <input
              type="text"
              placeholder="Ex : Photography"
              className={inputClassName}
            />
          </PricingField>


          {/* SPECIFIC SERVICE */}

          <PricingField
            label="Specific Service Name"
            required
          >
            <input
              type="text"
              placeholder="Ex : Candid Photography"
              className={inputClassName}
            />
          </PricingField>


          {/* CHARGE TYPE */}

          <PricingField
            label="Charge Type"
            required
          >
            <select className={selectClassName}>
              <option>
                Amount Per Hour
              </option>

              <option>
                Amount Per Item
              </option>

            </select>
          </PricingField>


          {/* BASE PRICE */}

          <PricingField
            label="Base Price (Per Hour)"
            required
          >
            <input
              type="text"
              placeholder="Ex : From 2000/- INR"
              className={inputClassName}
            />
          </PricingField>


          {/* DESCRIPTION */}

          <PricingField
            label="Description"
            className="sm:col-span-2"
          >
            <div className="relative">

              <textarea
                placeholder="Ex : Specialized in delivering Ultra Definition Candid Photography, includes the Trending AI motion Tech for Social ..."
                className={textareaClassName}
              />

              <span
                className="
                  absolute
                  right-[8px]
                  top-[-15px]
                  text-[8px]
                  text-[#555555]
                "
              >
                0 / 500 Characters
              </span>

            </div>
          </PricingField>


          {/* INCLUSIONS */}

          <PricingField
            label="Inclusions"
            required
          >
            <input
              type="text"
              placeholder="Ex : 1 Lead Photographer, 1 Lighting Assistant"
              className={inputClassName}
            />
          </PricingField>


          {/* PORTFOLIO */}

          <PricingField
            label="Attach Portfolio Section for Quick Access to Work Samples"
          >
            <select className={selectClassName}>
              <option>
                Portfolio Section 2
              </option>

              <option>
                Portfolio Section 1
              </option>

            </select>
          </PricingField>


          {/* OVER TIME */}

          <PricingField
            label="Over Time Charge / Hour"
            optional
          >
            <input
              type="text"
              placeholder="Ex : 1500/- INR Per Hour"
              className={inputClassName}
            />
          </PricingField>


          {/* TRAVEL */}

          <PricingField
            label="Travel Charges"
            optional
          >
            <select className={selectClassName}>
              <option>
                Ex : 25 INR Per Km
              </option>

              <option>
                No Travel Charge
              </option>
            </select>
          </PricingField>


          {/* MIN HOURS */}

          <PricingField
            label="Min. Booking Hours"
            optional
          >
            <input
              type="text"
              placeholder="Ex : 4 Hours"
              className={inputClassName}
            />
          </PricingField>


          {/* ADVANCE */}

          <PricingField
            label="Advance Booking Payment (%)"
            required
          >
            <input
              type="text"
              placeholder="Ex : 30%"
              className={inputClassName}
            />
          </PricingField>


          {/* DELIVERY */}

          <PricingField
            label="Work Delivery Timeline"
            optional
          >
            <input
              type="text"
              placeholder="Ex : Within 3 DAYS of the Event"
              className={inputClassName}
            />
          </PricingField>

        </div>


        {/* BUTTONS */}

        <div
          className="
            mt-[22px]
            flex
            flex-col-reverse
            items-center
            justify-end
            gap-[10px]
            sm:flex-row
          "
        >

          <button
            type="button"
            className="
              text-[10px]
              font-semibold
              text-[#c40000]
            "
          >
            Save Draft
          </button>


          <button
            type="button"
            className="
              h-[32px]
              rounded-[4px]
              bg-[#333333]
              px-[18px]
              text-[10px]
              font-semibold
              text-white
            "
          >
            Save Service
          </button>

        </div>

      </section>


      {/* =====================================================
          SAVED SERVICES
      ===================================================== */}

      <div
        className="
          mt-[12px]
          space-y-[8px]
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
            rounded-[5px]
            bg-white
            px-[18px]
            py-[15px]
          "
        >

          <div>

            <h3
              className="
                text-[12px]
                font-medium
                text-[#333333]
              "
            >
              Candid Photography
            </h3>

            <div
              className="
                mt-[5px]
                text-[8px]
                text-[#777777]
              "
            >
              Photography
              <span className="mx-[5px] text-[#c40000]">
                |
              </span>
              Candid Photography
            </div>

          </div>


          <div className="flex items-center gap-[12px]">

            <FiEdit2 className="text-[13px]" />

            <FiTrash2 className="text-[13px] text-[#900000]" />

            <FiChevronDown className="text-[13px]" />

          </div>

        </div>


        <div
          className="
            flex
            items-center
            justify-between
            rounded-[5px]
            bg-white
            px-[18px]
            py-[15px]
          "
        >

          <div>

            <h3
              className="
                text-[12px]
                font-medium
                text-[#333333]
              "
            >
              Drone Videography
            </h3>

            <div
              className="
                mt-[5px]
                text-[8px]
                text-[#777777]
              "
            >
              Videography
              <span className="mx-[5px] text-[#c40000]">
                |
              </span>
              Candid Photography
            </div>

          </div>


          <div className="flex items-center gap-[12px]">

            <FiEdit2 className="text-[13px]" />

            <FiTrash2 className="text-[13px] text-[#900000]" />

            <FiChevronDown className="text-[13px]" />

          </div>

        </div>

      </div>

    </ServicesPricingLayout>
  );
};


export default SpecificServicePage;