
import React from "react";
import {
  FaRegCircle,
  FaCheckCircle,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PricingHeader from "./PricingHeader";

const ServicesPricingLayout = ({
  children,
  activeModel = "fixed",
}) => {
  const navigate = useNavigate();

  const handlePricingModel = (model) => {
    if (model === "fixed") {
      navigate("/service-providers/services-pricing/fixed-package");
    } else if (model === "service") {
      navigate("/service-providers/services-pricing/specific-service");
    } else if (model === "addons") {
      navigate("/service-providers/services-pricing/add-ons");
    }
  };

  const models = [
    {
      id: "fixed",
      title: "Fixed Packages",
      description: "Set price for bundled services.",
    },
    {
      id: "service",
      title: "Specific Service-based",
      description: "Hourly or per-item rates.",
    },
    {
      id: "addons",
      title: "Add Ons",
      description: "Offer flexibility to clients.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#f5f5f5]">
      {/* HEADER */}
      <PricingHeader />

      {/* MAIN CONTENT */}
      <main className="mx-auto w-full max-w-[978px] px-[20px] pb-[60px] pt-[16px] sm:px-0">
        {/* PAGE TITLE */}
        <div>
          <h1 className="text-[32px] font-medium leading-[30px] text-[#252525]">
            Services and Pricing
          </h1>

          <p className="mt-[1px] text-[18px] leading-[44px] text-[#999999]">
            Configure your pricing models, packages, and add-ons to streamline your bookings.
          </p>
        </div>

        {/* PRICING MODELS PANEL */}
        <section className="mt-[20px] w-full rounded-[9px] border border-[#eeeeee] bg-white shadow-[0_3px_15px_rgba(0,0,0,0.045)]">
          <div className="px-[20px] py-[26px]">
            {/* PANEL HEADING */}
            <div className="flex items-start">
              <div className="relative mr-[8px] mt-[1px] h-[22px] w-[21px] shrink-0">
                <FaRegMoneyBillAlt className="absolute left-[2px] top-[1px] z-10 text-[16px] text-[#e00000]" />

                <span className="absolute bottom-[2px] left-[-1px] z-20 h-[10px] w-[2px] rounded-full bg-[#e00000]" />

                <span className="absolute bottom-[2px] left-[1px] z-20 h-[2px] w-[13px] rounded-full bg-[#e00000]" />
              </div>

              <div>
                <h2 className="text-[26px] font-medium leading-[22px] text-[#181111]">
                  Pricing Models
                </h2>

                <p className="text-[14px] leading-[30px] text-[#8A6060]">
                  Choose how you want to structure your charges.
                </p>
              </div>
            </div>

            {/* PRICING MODEL CARDS */}
            <div className="mt-[14px] grid grid-cols-1 gap-[14px] sm:grid-cols-3">
              {models.map((model) => {
                const isActive = activeModel === model.id;

                return (
                  <button
                    key={model.id}
                    type="button"
                    onClick={() => handlePricingModel(model.id)}
                    aria-pressed={isActive}
                    className={`cursor-pointer relative min-h-[56px] w-full rounded-[10px] border px-[11px] py-[9px] text-left transition ${
                      isActive
                        ? "border-[#e00000] bg-white"
                        : "border-[#d5d2cf] bg-white hover:border-[#e00000]"
                    }`}
                  >
                    <h3 className="pr-[20px] text-[18px] font-semibold leading-[17px] text-[#181111]">
                      {model.title}
                    </h3>

                    <p className="mt-[1px] text-[14px] leading-[20px] text-[#8A6060]">
                      {model.description}
                    </p>

                    <span className="absolute right-[10px] top-[11px]">
                      {isActive ? (
                        <FaCheckCircle className="text-[14px] text-[#e00000]" />
                      ) : (
                        <FaRegCircle className="text-[14px] text-[#d5d2cf]" />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* PAGE CONTENT */}
        {children}
      </main>
    </div>
  );
};

export default ServicesPricingLayout;
