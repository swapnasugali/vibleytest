import React from "react";

import {
  FiPlusCircle,
  FiEdit2,
  FiTrash2,
  FiChevronDown,
  FiUploadCloud,
} from "react-icons/fi";

import ServicesPricingLayout from "./ServicesPricingLayout";

import PricingField, {
  inputClassName,
  selectClassName,
  textareaClassName,
} from "./PricingField";


const AddOnPage = () => {

  return (
    <ServicesPricingLayout
      activeModel="addons"
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

          <span className="text-[11px] text-[#555555]">
            All (04)
          </span>

          <button
            type="button"
            className="
              flex
              h-[30px]
              items-center
              gap-[5px]
              rounded-[4px]
              bg-white
              px-[9px]
              text-[10px]
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
            h-[30px]
            items-center
            gap-[5px]
            rounded-[4px]
            bg-[#c40000]
            px-[16px]
            text-[10px]
            font-medium
            text-white
          "
        >
          <FiPlusCircle />
          New Add on
        </button>

      </div>


      {/* =====================================================
          TITLE
      ===================================================== */}

      <div className="mt-[15px]">

        <p
          className="
            text-[11px]
            text-[#777777]
          "
        >
          Add On 1
        </p>

      </div>


      {/* =====================================================
          ADD ON FORM
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

          {/* ADD ON NAME */}

          <PricingField
            label="Add on Name"
            required
          >
            <input
              type="text"
              placeholder="Ex : Drone Service - Photos and Video Clips"
              className={inputClassName}
            />
          </PricingField>


          {/* CATEGORY */}

          <PricingField
            label="Category"
            required
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
          >
            <select className={selectClassName}>

              <option>
                Amount Per Event
              </option>

              <option>
                Amount Per Hour
              </option>

              <option>
                Amount Per Item
              </option>

            </select>
          </PricingField>


          {/* TOTAL PRICE */}

          <PricingField
            label="Total Price"
            required
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
                  top-[-15px]
                  text-[8px]
                  text-[#555555]
                "
              >
                0 / 400 Characters
              </span>

            </div>
          </PricingField>


          {/* PREVIEW IMAGE */}

          <PricingField label="Preview Image">

            <div
              className="
                flex
                h-[115px]
                w-full
                flex-col
                items-center
                justify-center
                rounded-[4px]
                border
                border-dashed
                border-[#cfcfcf]
                bg-white
              "
            >

              <FiUploadCloud
                className="
                  text-[17px]
                  text-[#e00000]
                "
              />

              <p
                className="
                  mt-[5px]
                  text-[8px]
                  text-[#555555]
                "
              >
                Click to upload, OR drag and drop
              </p>

              <p
                className="
                  mt-[2px]
                  text-[7px]
                  text-[#999999]
                "
              >
                (PNG, JPG, WEBP Max 2MB)
              </p>

            </div>

          </PricingField>


          {/* APPLICABILITY */}

          <PricingField
            label="Applicability"
            required
          >
            <select className={selectClassName}>

              <option>
                To all Services & Packages
              </option>

              <option>
                Specific Services
              </option>

              <option>
                Specific Packages
              </option>

            </select>
          </PricingField>

        </div>


        {/* BUTTONS */}

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
            Save Add On
          </button>

        </div>

      </section>


      {/* =====================================================
          SAVED ADD ONS
      ===================================================== */}

      <div
        className="
          mt-[12px]
          space-y-[8px]
        "
      >

        {/* ADD ON 1 */}

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
              Neon Lighting Service
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
              Lighting, Applicable To All Services and Packages
            </div>

          </div>


          <div className="flex items-center gap-[12px]">

            <FiEdit2 className="text-[13px]" />

            <FiTrash2 className="text-[13px] text-[#900000]" />

            <FiChevronDown className="text-[13px]" />

          </div>

        </div>


        {/* ADD ON 2 */}

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
              Cinematic Reel Shots Recording for Social Media Presence
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
              Cinematic videography, Applicable To Packages
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


export default AddOnPage;