import React from "react";

import {
  FiPlusCircle,
  FiBookOpen,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import ServicesPricingLayout from "./ServicesPricingLayout";


const ServicePricingPage = () => {
  const navigate = useNavigate();


  return (
    <ServicesPricingLayout activeModel="fixed">

      {/* =====================================================
          EMPTY / LANDING CONTENT
      ===================================================== */}

      <div
        className="
          flex
          flex-col
          items-center
          pt-[75px]
          sm:pt-[85px]
        "
      >

        {/* ADD FIXED PACKAGE */}

        <button
          type="button"
          onClick={() =>
            navigate(
              "/service-providers/services-pricing/fixed-package"
            )
          }
          className="
            flex
            h-[52px]
            w-[363px]
            items-center
            justify-center
            gap-[6px]
            rounded-[5px]
            bg-[#c40000]
            text-white
            transition
            hover:bg-[#a90000]
          "
        >

          <FiPlusCircle
            className="
              text-[16px]
            "
          />

          <span
            className="
              text-[14px]
              font-semibold
              cursor-pointer
            "
          >
            Add a Fixed Package
          </span>

        </button>


        {/* GUIDE */}

        <button
          type="button"
          className="
            mt-[18px]
            flex
            items-center
            gap-[5px]
            text-[14px]
            text-[#666666]
            underline
            underline-offset-[2px]
            cursor-pointer
          "
        >

          <FiBookOpen
            className="
              text-[12px]
            "
          />

          <span>
            Read the guide on Adding Services and Pricing
          </span>

        </button>

      </div>

    </ServicesPricingLayout>
  );
};


export default ServicePricingPage;