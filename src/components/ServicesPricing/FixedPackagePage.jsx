import React, { useState } from "react";

import {
  FiPlusCircle,
  FiTrash2,
  FiChevronDown,
} from "react-icons/fi";

import ServicesPricingLayout from "./ServicesPricingLayout";

import PricingField, {
  inputClassName,
  selectClassName,
  textareaClassName,
} from "./PricingField";


const FixedPackagePage = () => {

  const [services, setServices] = useState([
    {
      id: 1,
      name: "",
      description: "",
    },
    {
      id: 2,
      name: "",
      description: "",
    },
  ]);


  /* =========================================================
     ADD SERVICE
  ========================================================= */

  const addService = () => {
    setServices((previous) => [
      ...previous,
      {
        id: Date.now(),
        name: "",
        description: "",
      },
    ]);
  };


  /* =========================================================
     REMOVE SERVICE
  ========================================================= */

  const removeService = (id) => {
    setServices((previous) =>
      previous.filter(
        (service) => service.id !== id
      )
    );
  };


  return (
    <ServicesPricingLayout
      activeModel="fixed"
      showBackgroundLines={false}
    >

      {/* =====================================================
          TOOLBAR
      ===================================================== */}

      <div
        className="
          mt-[18px]
          flex
          flex-col
          justify-between
          gap-[10px]
          sm:flex-row
          sm:items-center
        "
      >

        <div className="text-[22px] text-[#555555]">
          All (01)
        </div>


        <button
          type="button"
          onClick={addService}
          className="
            flex
            h-[52px]
            w-[218px]
            items-center
            justify-center
            gap-[5px]
            self-start
            cursor-pointer
            rounded-[4px]
            bg-[#c40000]
            px-[16px]
            text-[18px]
            font-semibold
            text-white
            sm:self-auto
          "
        >
          <FiPlusCircle className="text-[16px]" />
          Add Package
        </button>

      </div>


      {/* =====================================================
          SORT
      ===================================================== */}

      <div
        className="
          mt-[-45px]
          ml-[105px]
          hidden
          sm:block
        "
      >

        <button
          type="button"
          className="
            flex
            h-[52px]
            w-[121px]
            cursor-pointer
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
          <FiChevronDown className="text-[20px]" />
        </button>

      </div>


      {/* =====================================================
          PACKAGE TITLE
      ===================================================== */}

      <div className="mt-[15px]">

        <p
          className="
            text-[20px]
            font-medium
            text-[#737373]
          "
        >
          Fixed Package 1
        </p>

      </div>


      {/* =====================================================
          PACKAGE FORM
      ===================================================== */}

      <section
        className="
          mt-[8px]
          rounded-[6px]
          bg-white
          px-[24px]
          py-[20px]
          shadow-[0_1px_7px_rgba(0,0,0,0.04)]
          sm:px-[30px]
          md:px-[34px]
        "
      >

        <div
          className="
            grid
            grid-cols-1
            gap-x-[18px]
            gap-y-[15px]
            sm:grid-cols-2
          "
        >

          {/* PACKAGE NAME */}

          <PricingField
            label="Fixed Package Name"
            required
            labelSize="18px"
            labelClassName="font-semibold"
          >
            <input
              type="text"
              placeholder="Ex : All in One Trending Pack"
              className={inputClassName}
            />
          </PricingField>


          {/* CATEGORY */}

          <PricingField
            label="Category"
            required
            labelSize="18px"
            labelClassName="font-semibold"
          >
            <input
              type="text"
              placeholder="Photography"
              className={inputClassName}
            />
          </PricingField>


          {/* CHARGE TYPE */}

          <PricingField
            label="Charge Type"
            required
            labelSize="18px"
            labelClassName="font-semibold"
          >
            <select className={selectClassName}>

              <option className="text-[16px] text-[#474747]">
                Amount Per Event
              </option>

              <option className="text-[16px] text-[#474747]">
                Amount Per Hour
              </option>

            </select>
          </PricingField>


          {/* TOTAL PRICE */}

          <PricingField
            label="Total Price"
            required
            labelSize="18px"
            labelClassName="font-semibold"
          >
            <input
              type="text"
              placeholder="12,000/- INR"
              className={inputClassName}
            />
          </PricingField>


          {/* DESCRIPTION */}

          <PricingField
            label="Description"
            labelSize="18px"
            labelClassName="font-semibold"
            className="sm:col-span-2"
          >

            <div className="relative">

              <textarea
                placeholder="Ex : this is the best ever package which includes all the services ..."
                className={textareaClassName}
              />

              <span
                className="
                  absolute
                  right-[8px]
                  top-[-20px]
                  text-[16px]
                  font-medium
                  text-[#555555]
                "
              >
                0 / 400 Characters
              </span>

            </div>

          </PricingField>


          {/* OVER TIME CHARGE */}

          <PricingField
            label="Over Time Charge / Hour"
            labelSize="18px"
            labelClassName="font-semibold"
            optional
          >
            <input
              type="text"
              placeholder="Ex : 1500/- INR per Hour"
              className={inputClassName}
            />
          </PricingField>


          {/* TRAVEL CHARGES */}

          <PricingField
            label="Travel Charges"
            labelSize="18px"
            labelClassName="font-semibold"
            optional
          >
            <select className={selectClassName}>

              <option className="text-[16px] text-[#474747]">
                Ex : 25 INR Per Km
              </option>

              <option className="text-[16px] text-[#474747]">
                No Travel Charge
              </option>

            </select>
          </PricingField>


          {/* MINIMUM BOOKING HOURS */}

          <PricingField
            label="Min. Booking Hours"
            labelSize="18px"
            labelClassName="font-semibold"
            optional
          >
            <input
              type="text"
              placeholder="Ex : 4 Hours"
              className={inputClassName}
            />
          </PricingField>


          {/* ADVANCE BOOKING PAYMENT */}

          <PricingField
            label="Advance Booking Payment (%)"
            labelSize="18px"
            labelClassName="font-semibold"
            required
          >
            <input
              type="text"
              placeholder="Ex : 30%"
              className={inputClassName}
            />
          </PricingField>


          {/* WORK DELIVERY TIMELINE */}

          <PricingField
            label="Work Delivery Timeline"
            labelSize="18px"
            labelClassName="font-semibold"
            optional
          >
            <input
              type="text"
              placeholder="Ex : Within 3 DAYS of the Event"
              className={inputClassName}
            />
          </PricingField>

        </div>


        {/* =====================================================
            SERVICES PROVIDED
        ===================================================== */}

        <div className="mt-[16px]">

          <div
            className="
              flex
              items-center
              justify-between
            "
          >

            <label
              className="
                text-[18px]
                font-semibold
                text-[#333333]
              "
            >
              Services Provided

              <span className="text-[#d00000]">
                *
              </span>

              <span
                className="
                  ml-[4px]
                  text-[15px]
                  italic
                  text-[#737373]
                "
              >
                (at least 2 services makes the package)
              </span>
            </label>


            <button
              type="button"
              onClick={addService}
              className="
                flex
                h-[37px]
                w-[167px]
                cursor-pointer
                items-center
                gap-[4px]
                rounded-[3px]
                border
                border-[#cfcfcf]
                px-[8px]
                text-[18px]
                font-medium
                text-[#970000]
              "
            >
              <FiPlusCircle className="text-[16px]" />
              Add Service
            </button>

          </div>


          {/* =================================================
              SERVICE LIST
          ================================================= */}

          <div
            className="
              mt-[7px]
              bg-[#fffcef]
              px-[12px]
              py-[10px]
            "
          >

            {services.map((service, index) => (

              <div
                key={service.id}
                className="
                  relative
                  mb-[10px]
                  grid
                  grid-cols-1
                  gap-[10px]
                  last:mb-0
                  sm:grid-cols-[25px_1fr_1.5fr]
                "
              >

                {/* NUMBER */}

                <div
                  className="
                    hidden
                    pt-[10px]
                    text-[9px]
                    font-medium
                    sm:block
                  "
                >
                  {index + 1}.
                </div>


                {/* SERVICE NAME */}

                <div>

                  <label
                    className="
                      block
                      text-[18px]
                      font-semibold
                    "
                  >
                    Service Name

                    <span className="text-[#d00000]">
                      *
                    </span>
                  </label>


                  <input
                    type="text"
                    placeholder={
                      index === 0
                        ? "Ex : General Photography"
                        : "Ex : Candid Photography"
                    }
                    className={`
                      ${inputClassName}
                      mt-[4px]
                    `}
                  />

                </div>


                {/* DESCRIPTION */}

                <div>

                  <div
                    className="
                      flex
                      justify-between
                    "
                  >

                    <label
                      className="
                        text-[18px]
                        font-semibold
                      "
                    >
                      Description

                      <span className="text-[#d00000]">
                        *
                      </span>
                    </label>


                    <span
                      className="
                        text-[14px]
                        text-[#737373]
                      "
                    >
                      0 / 200 Characters
                    </span>

                  </div>


                  <input
                    type="text"
                    placeholder={
                      index === 0
                        ? "Ex : Stunning All around photography, which covers the event ..."
                        : "Ex : Candid are Club, We are specialized in taking a toned cand..."
                    }
                    className={`
                      ${inputClassName}
                      mt-[4px]
                    `}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* =====================================================
            BUTTONS
            UI ONLY — NO SAVE ACTION
        ===================================================== */}

        <div
          className="
            mt-[20px]
            flex
            flex-col-reverse
            items-center
            justify-end
            gap-[10px]
            sm:flex-row
          "
        >

          {/* SAVE DRAFT
              No onClick
              No navigation
              No API
              No state change
          */}

          <button
            type="button"
            className="
              cursor-pointer
              text-[22px]
              font-semibold
              text-[#c40000]
            "
          >
            Save Draft
          </button>


          {/* SAVE PACKAGE
              No onClick
              No navigation
              No API
              No state change
          */}

          <button
            type="button"
            className="
              h-[54px]
              w-[236px]
              cursor-pointer
              rounded-[4px]
              bg-[#333333]
              px-[18px]
              text-[22px]
              font-semibold
              text-white
            "
          >
            Save Package
          </button>

        </div>

      </section>

    </ServicesPricingLayout>
  );
};


export default FixedPackagePage;