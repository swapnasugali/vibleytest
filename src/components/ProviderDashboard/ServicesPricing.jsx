
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ title, value, description, path }) => {
  return (
    <Link
      to={path}
      className="
        group
        relative
        flex
        h-[136px]
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-lg
        border
        border-gray-400
        bg-white
        px-2
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#e53935]
        hover:shadow-md
        focus:outline-none
        focus:ring-2
        focus:ring-[#e53935]
        focus:ring-offset-2
      "
      aria-label={`View ${title}`}
    >
      {/* CARD TITLE */}

      <p
        className="
          text-[14px]
          font-semibold
          text-gray-700
          transition-colors
          duration-300
          group-hover:text-[#e53935]
        "
      >
        {title}
      </p>

      {/* CARD VALUE */}

      <p
        className="
          mt-3
          text-[49.32px]
          font-bold
          leading-none
          text-gray-900
        "
      >
        {value}
      </p>

      {/* CARD DESCRIPTION */}

      <p
        className="
          mt-2
          text-[11px]
          font-normal
          text-gray-500
          transition-colors
          duration-300
          group-hover:text-[#e53935]
        "
      >
        {description}
      </p>

      {/* HOVER ARROW */}

      <span
        className="
          absolute
          right-3
          top-3
          translate-x-1
          opacity-0 
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      >
        <FaArrowRight className="text-[12px] text-[#e53935]" />
      </span>
    </Link>
  );
};

const ServicesPricing = () => {
  return (
    <div
      className="w-full rounded-lg bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >

      {/* HEADER */}

      <div
        className="
          flex
          min-h-[48px]
          w-full
          items-center
          justify-between
          border-b
          border-gray-200
          px-4
          sm:px-5
          md:px-6
        "
      >
        <h2
          className="
            text-[16px]
            font-semibold
            uppercase
            text-gray-800
          "
        >
          Services / Pricing
        </h2>

        <Link
          to="/service-providers/services-pricing"
          className="
            group
            flex
            items-center
            gap-1
            whitespace-nowrap
            text-[14px]
            font-medium
            text-gray-700
            underline
            transition-colors
            duration-300
            hover:text-[#e53935]
          "
        >
          view all services

          <FaArrowRight
            className="
              text-[10px]
              opacity-0
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:opacity-100
            "
          />
        </Link>
      </div>

      {/* SERVICE CARDS */}

      <div
        className="
          grid
          w-full
          grid-cols-1
          gap-3
          px-4
          py-4
          sm:grid-cols-3
          sm:px-5
          md:px-6
          md:py-5
        "
      >

        {/* FIXED PACKAGES */}

        <ServiceCard
          title="Fixed Packages"
          value="09"
          description="Available packages"
          path="/service-providers/services-pricing/fixed-package"
        />

        {/* SPECIFIC SERVICES */}

        <ServiceCard
          title="Specific Services"
          value="34"
          description="Available services"
          path="/service-providers/services-pricing/specific-service"
        />

        {/* ADD ONS */}

        <ServiceCard
          title="Add Ons"
          value="06"
          description="Additional services"
          path="/service-providers/services-pricing/add-ons"
        />

      </div>

    </div>
  );
};

export default ServicesPricing;
