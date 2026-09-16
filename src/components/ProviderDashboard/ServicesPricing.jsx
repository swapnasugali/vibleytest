import React from "react";

const ServiceCard = ({ title, value }) => {
  return (
    <div className="flex h-[114px] flex-col items-center justify-center rounded-lg border border-gray-300">

      <p className="text-[9px] text-gray-700">
        {title}
      </p>

      <p className="mt-3 text-[31px] font-bold leading-none text-gray-900">
        {value}
      </p>

    </div>
  );
};

const ServicesPricing = () => {
  return (
    <div className="w-full rounded-lg bg-white">

      {/* HEADER */}
      <div className="flex h-[43px] items-center justify-between border-b border-gray-200 px-5">

        <h2 className="text-[10px] font-bold uppercase text-gray-800">
          Services / Pricing
        </h2>

        <a
          href="#"
          className="text-[8px] text-gray-700 underline"
        >
          view all services
        </a>

      </div>


      {/* CARDS */}
      <div className="grid grid-cols-3 gap-2 px-4 py-3">

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