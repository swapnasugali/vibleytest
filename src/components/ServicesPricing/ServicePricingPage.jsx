import React, { useState } from "react";
import {
  FiPlusCircle,
  FiBookOpen,
} from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ServicesPricingLayout from "./ServicesPricingLayout";

const ServicePricingPage = () => {
  const navigate = useNavigate();
  const [showGuide, setShowGuide] = useState(false);

  return (
    <ServicesPricingLayout activeModel="fixed">
      {/* EMPTY / LANDING CONTENT */}
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
          <FiPlusCircle className="text-[16px]" />

          <span className="text-[14px] font-semibold">
            Add a Fixed Package
          </span>
        </button>

        {/* READ THE GUIDE */}
        <button
          type="button"
          onClick={() => setShowGuide(true)}
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
          <FiBookOpen className="text-[12px]" />

          <span>
            Read the guide on Adding Services and Pricing
          </span>
        </button>
      </div>

      {/* SERVICES & PRICING GUIDE POPUP */}
      {showGuide && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/30
            p-[2px]
          "
          onClick={() => setShowGuide(false)}
        >
          {/* POPUP */}
          <div
            className="
              relative
              h-[99.2vh]
              w-[85.5%]
              overflow-y-auto
              rounded-[14px]
              bg-white
              px-[5.2%]
              pt-[45px]
              pb-[45px]
              shadow-lg
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setShowGuide(false)}
              aria-label="Close guide"
              className="
                absolute
                right-[4.4%]
                top-[50px]
                flex
                h-[43px]
                w-[43px]
                items-center
                justify-center
                rounded-full
                border-[3px]
                border-[#a90000]
                text-[#a90000]
                transition
                hover:bg-[#a90000]
                hover:text-white
              "
            >
              <FaTimes className="text-[23px] cursor-pointer" />
            </button>

            {/* TITLE */}
            <h2
              className="
                text-center
                text-[30px]
                font-normal
                leading-[1.3]
                text-black
                underline
                underline-offset-[4px]
              "
            >
              services & pricing guide
            </h2>

            {/* INTRODUCTION */}
            <p
              className="
                mt-[58px]
                text-[18px]
                font-normal
                leading-[1.65]
                text-[#111111]
              "
            >
              This section allows you to define how clients will book and pay
              for your offerings. Please configure your pricing carefully, as
              this information will be displayed publicly and directly
              influences booking decisions.
            </p>

            {/* A. FIXED PACKAGES */}
            <section className="mt-[42px]">
              <h3
                className="
                  text-[22px]
                  font-semibold
                  leading-[1.4]
                  text-[#650900]
                "
              >
                a. Fixed Packages
              </h3>

              <p
                className="
                  ml-[34px]
                  text-[18px]
                  font-normal
                  leading-[1.65]
                  text-[#111111]
                "
              >
                Use this option to bundle multiple services into a single
                price. Packages are ideal when you want to present complete
                event solutions with defined inclusions and duration. Ensure
                that all services included in the package are clearly
                described.
              </p>
            </section>

            {/* B. SPECIFIC SERVICE BASED PRICING */}
            <section className="mt-[72px]">
              <h3
                className="
                  text-[22px]
                  font-semibold
                  leading-[1.4]
                  text-[#650900]
                "
              >
                b. Specific Service Based Pricing
              </h3>

              <p
                className="
                  ml-[34px]
                  text-[18px]
                  font-normal
                  leading-[1.65]
                  text-[#111111]
                "
              >
                Use this option if you charge per hour, per event, or per
                individual service. Clearly mention what is included, minimum
                booking requirements, and any additional charges. This model
                works best for flexible or customizable bookings.
              </p>
            </section>

            {/* C. ADD-ONS */}
            <section className="mt-[72px]">
              <h3
                className="
                  text-[22px]
                  font-semibold
                  leading-[1.4]
                  text-[#650900]
                "
              >
                c. Specific Service Based Pricing
              </h3>

              <p
                className="
                  ml-[34px]
                  text-[18px]
                  font-normal
                  leading-[1.65]
                  text-[#111111]
                "
              >
                Add-ons are optional upgrades that clients can select in
                addition to a service or package. Keep them simple, clearly
                priced, and directly relevant to your main offerings.
              </p>
            </section>
          </div>
        </div>
      )}
    </ServicesPricingLayout>
  );
};

export default ServicePricingPage;