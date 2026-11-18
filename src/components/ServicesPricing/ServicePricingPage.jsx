
import React, { useEffect, useState } from "react";
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

  // Close guide using Escape key and prevent background scrolling
  useEffect(() => {
    if (!showGuide) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowGuide(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showGuide]);

  // Navigate to Fixed Package page
  const handleAddFixedPackage = () => {
    navigate("/service-providers/services-pricing/fixed-package");
  };

  return (
    <ServicesPricingLayout activeModel="fixed">
      {/* EMPTY / LANDING CONTENT */}
      <div className="flex flex-col items-center px-4 pt-[65px] sm:pt-[85px]">

        {/* ADD FIXED PACKAGE BUTTON */}
        <button
          type="button"
          onClick={handleAddFixedPackage}
          className="
            flex
            h-[52px]
            w-full
            max-w-[363px]
            items-center
            justify-center
            gap-[8px]
            rounded-[5px]
            bg-[#c40000]
            text-white
            transition-all
            duration-200
            hover:bg-[#a90000]
            active:scale-[0.98]
            focus:outline-none
            focus:ring-2
            focus:ring-[#c40000]
            focus:ring-offset-2
          "
        >
          <FiPlusCircle className="text-[16px]" />

          <span className="text-[14px] font-semibold">
            Add a Fixed Package
          </span>
        </button>

        {/* READ THE GUIDE BUTTON */}
        <button
          type="button"
          onClick={() => setShowGuide(true)}
          className="
            mt-[18px]
            flex
            items-center
            justify-center
            gap-[6px]
            text-center
            text-[13px]
            sm:text-[14px]
            text-[#666666]
            underline
            underline-offset-[3px]
            transition-colors
            hover:text-[#a90000]
            cursor-pointer
          "
        >
          <FiBookOpen className="shrink-0 text-[13px]" />

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
            bg-black/40
            p-3
            sm:p-5
          "
          onClick={() => setShowGuide(false)}
        >
          {/* GUIDE MODAL */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="guide-title"
            className="
              relative
              max-h-[92vh]
              w-full
              max-w-[1100px]
              overflow-y-auto
              rounded-[12px]
              bg-white
              px-5
              pb-8
              pt-[75px]
              shadow-xl
              sm:px-[5.2%]
              sm:pb-[45px]
              sm:pt-[55px]
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
                right-4
                top-4
                flex
                h-[36px]
                w-[36px]
                items-center
                justify-center
                rounded-full
                border-2
                border-[#a90000]
                text-[#a90000]
                transition-all
                duration-200
                hover:bg-[#a90000]
                hover:text-white
                sm:right-[4.4%]
                sm:top-[25px]
                sm:h-[43px]
                sm:w-[43px]
                sm:border-[3px]
              "
            >
              <FaTimes className="text-[19px] sm:text-[23px]" />
            </button>

            {/* TITLE */}
            <h2
              id="guide-title"
              className="
                text-center
                text-[22px]
                font-normal
                leading-[1.4]
                text-black
                underline
                underline-offset-[4px]
                sm:text-[30px]
              "
            >
              services & pricing guide
            </h2>

            {/* INTRODUCTION */}
            <p
              className="
                mt-8
                text-[14px]
                font-normal
                leading-[1.7]
                text-[#111111]
                sm:mt-[58px]
                sm:text-[18px]
                sm:leading-[1.65]
              "
            >
              This section allows you to define how clients will book and pay
              for your offerings. Please configure your pricing carefully, as
              this information will be displayed publicly and directly
              influences booking decisions.
            </p>

            {/* A. FIXED PACKAGES */}
            <section className="mt-8 sm:mt-[42px]">
              <h3
                className="
                  text-[18px]
                  font-semibold
                  leading-[1.5]
                  text-[#650900]
                  sm:text-[22px]
                "
              >
                a. Fixed Packages
              </h3>

              <p
                className="
                  ml-3
                  text-[14px]
                  font-normal
                  leading-[1.7]
                  text-[#111111]
                  sm:ml-[34px]
                  sm:text-[18px]
                  sm:leading-[1.65]
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
            <section className="mt-10 sm:mt-[55px]">
              <h3
                className="
                  text-[18px]
                  font-semibold
                  leading-[1.5]
                  text-[#650900]
                  sm:text-[22px]
                "
              >
                b. Specific Service Based Pricing
              </h3>

              <p
                className="
                  ml-3
                  text-[14px]
                  font-normal
                  leading-[1.7]
                  text-[#111111]
                  sm:ml-[34px]
                  sm:text-[18px]
                  sm:leading-[1.65]
                "
              >
                Use this option if you charge per hour, per event, or per
                individual service. Clearly mention what is included, minimum
                booking requirements, and any additional charges. This model
                works best for flexible or customizable bookings.
              </p>
            </section>

            {/* C. ADD-ONS */}
            <section className="mt-10 sm:mt-[55px]">
              <h3
                className="
                  text-[18px]
                  font-semibold
                  leading-[1.5]
                  text-[#650900]
                  sm:text-[22px]
                "
              >
                c. Add-ons
              </h3>

              <p
                className="
                  ml-3
                  text-[14px]
                  font-normal
                  leading-[1.7]
                  text-[#111111]
                  sm:ml-[34px]
                  sm:text-[18px]
                  sm:leading-[1.65]
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
