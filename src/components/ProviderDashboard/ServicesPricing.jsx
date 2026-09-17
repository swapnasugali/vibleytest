import React from "react";

const ServiceCard = ({ title, value }) => {
  return (
    <div
      className="
        flex
        h-[136px]
        w-full
        flex-col
        items-center
        justify-center
        rounded-lg
        border
        border-gray-400
        px-2
      "
    >
      <p className="text-[9px] font-medium text-gray-700 sm:text-[10px]">
        {title}
      </p>

      <p className="mt-3 text-[38px] font-bold leading-none text-gray-900 sm:text-[40px]">
        {value}
      </p>
    </div>
  );
};

const ServicesPricing = () => {
  return (
    <div className="w-full rounded-lg bg-white">

      {/* HEADER */}
      <div className="flex min-h-[48px] w-full items-center justify-between border-b border-gray-200 px-4 sm:px-5 md:px-6">

        <h2 className="text-[10px] font-bold uppercase text-gray-800 sm:text-[11px]">
          Services / Pricing
        </h2>

        <a
          href="#"
          className="whitespace-nowrap text-[8px] text-gray-700 underline sm:text-[9px]"
        >
          view all services
        </a>

      </div>


      {/* SERVICE CARDS */}
      <div className="grid w-full grid-cols-1 gap-3 px-4 py-4 sm:grid-cols-3 sm:px-5 md:px-6 md:py-5">

        <ServiceCard
          title="Fixed Packages"
          value="09"
        />

        <ServiceCard
          title="Specific Services"
          value="34"
        />

        <ServiceCard
          title="Add Ons"
          value="06"
        />

      </div>

    </div>
  );
};

export default ServicesPricing;