import React from "react";
import {
  FaRegCircle,
  FaCheckCircle,
  FaRegMoneyBillAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const PricingModels = ({ activeModel }) => {

  const navigate = useNavigate();


  const handleModelChange = (model) => {

    if (model === "fixed") {
      navigate(
        "/service-providers/services-pricing/fixed-package"
      );
    }

    if (model === "service") {
      navigate(
        "/service-providers/services-pricing/service-based"
      );
    }

    if (model === "addons") {
      navigate(
        "/service-providers/services-pricing/add-ons"
      );
    }
  };


  const isActive = (model) =>
    activeModel === model;


  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        rounded-[7px]
        bg-white
        shadow-[0_2px_10px_rgba(0,0,0,0.06)]
      "
    >

      <div
        className="
          px-[14px]
          py-[16px]
          sm:px-[18px]
          sm:py-[18px]
          md:px-[20px]
        "
      >

        {/* HEADING */}

        <div className="flex items-start">

          <div
            className="
              relative
              mr-[7px]
              mt-[1px]
              h-[22px]
              w-[20px]
              shrink-0
            "
          >

            <FaRegMoneyBillAlt
              className="
                absolute
                left-0
                top-0
                text-[17px]
                text-[#e00000]
              "
            />

            <span
              className="
                absolute
                bottom-[2px]
                left-[-4px]
                h-[12px]
                w-[19px]
                border-b-[2px]
                border-l-[2px]
                border-[#e00000]
              "
            />

          </div>


          <div>

            <h2
              className="
                text-[16px]
                font-medium
                leading-[18px]
                text-[#181111]
                sm:text-[18px]
              "
            >
              Pricing Models
            </h2>

            <p
              className="
                mt-[1px]
                text-[8px]
                leading-[12px]
                text-[#8A6060]
                sm:text-[9px]
              "
            >
              Choose how you want to structure your charges.
            </p>

          </div>

        </div>


        {/* MODEL BUTTONS */}

        <div
          className="
            mt-[13px]
            grid
            grid-cols-1
            gap-[8px]
            sm:grid-cols-3
            sm:gap-[10px]
          "
        >

          {/* FIXED */}

          <button
            type="button"
            onClick={() => handleModelChange("fixed")}
            className={`
              relative
              min-h-[48px]
              rounded-[6px]
              border
              px-[10px]
              py-[7px]
              text-left
              transition
              ${
                isActive("fixed")
                  ? "border-[#e00000]"
                  : "border-[#d7d7d7]"
              }
            `}
          >

            <h3 className="text-[10px] font-semibold text-[#292929] sm:text-[11px]">
              Fixed Packages
            </h3>

            <p className="text-[7px] text-[#8A6060] sm:text-[8px]">
              Set price for bundled services.
            </p>

            <span className="absolute right-[7px] top-[7px]">

              {isActive("fixed") ? (
                <FaCheckCircle className="text-[10px] text-[#e00000]" />
              ) : (
                <FaRegCircle className="text-[10px] text-[#d0d0d0]" />
              )}

            </span>

          </button>


          {/* SPECIFIC SERVICE */}

          <button
            type="button"
            onClick={() => handleModelChange("service")}
            className={`
              relative
              min-h-[48px]
              rounded-[6px]
              border
              px-[10px]
              py-[7px]
              text-left
              transition
              ${
                isActive("service")
                  ? "border-[#e00000]"
                  : "border-[#d7d7d7]"
              }
            `}
          >

            <h3 className="text-[10px] font-semibold text-[#292929] sm:text-[11px]">
              Specific Service-based
            </h3>

            <p className="text-[7px] text-[#8A6060] sm:text-[8px]">
              Hourly or per-item rates.
            </p>

            <span className="absolute right-[7px] top-[7px]">

              {isActive("service") ? (
                <FaCheckCircle className="text-[10px] text-[#e00000]" />
              ) : (
                <FaRegCircle className="text-[10px] text-[#d0d0d0]" />
              )}

            </span>

          </button>


          {/* ADD ONS */}

          <button
            type="button"
            onClick={() => handleModelChange("addons")}
            className={`
              relative
              min-h-[48px]
              rounded-[6px]
              border
              px-[10px]
              py-[7px]
              text-left
              transition
              ${
                isActive("addons")
                  ? "border-[#e00000]"
                  : "border-[#d7d7d7]"
              }
            `}
          >

            <h3 className="text-[10px] font-semibold text-[#292929] sm:text-[11px]">
              Add Ons
            </h3>

            <p className="text-[7px] text-[#8A6060] sm:text-[8px]">
              Offer flexibility to clients.
            </p>

            <span className="absolute right-[7px] top-[7px]">

              {isActive("addons") ? (
                <FaCheckCircle className="text-[10px] text-[#e00000]" />
              ) : (
                <FaRegCircle className="text-[10px] text-[#d0d0d0]" />
              )}

            </span>

          </button>

        </div>

      </div>

    </section>
  );
};

export default PricingModels;