import React, { useState } from "react";
import {
  FiPlusCircle,
  FiChevronDown,
} from "react-icons/fi";

import PortfolioCard from "./PortfolioCard";

const PortfolioList = ({
  sections,
  onAddPortfolio,
}) => {
  const [serviceFilter, setServiceFilter] = useState("Service Type");
  const [eventFilter, setEventFilter] = useState("Event Type");

  const filteredSections = sections.filter((section) => {
    const serviceMatch =
      serviceFilter === "Service Type" ||
      section.serviceType === serviceFilter;

    const eventMatch =
      eventFilter === "Event Type" ||
      section.eventType === eventFilter;

    return serviceMatch && eventMatch;
  });

  return (
    <section className="w-full">

      {/* =========================================================
          PAGE HEADER
      ========================================================= */}
      <div className="flex items-start justify-between">

        <div>
          <h1 className="text-[21px] font-semibold text-[#292929]">
            Manage Portfolio
          </h1>

          <p className="mt-[2px] text-[11px] text-[#999]">
            Create Structured event-based portfolio sections to
            showcase your best work and attract clients
          </p>
        </div>

        <button
          type="button"
          onClick={onAddPortfolio}
          className="
            flex
            h-[31px]
            min-w-[196px]
            cursor-pointer
            items-center
            justify-center
            gap-2
            rounded-[4px]
            bg-[#a60000]
            px-4
            text-[11px]
            font-semibold
            text-white
            hover:bg-[#850000]
          "
        >
          <FiPlusCircle className="h-[13px] w-[13px]" />

          Add New Profile Section
        </button>

      </div>

      {/* =========================================================
          FILTERS
      ========================================================= */}
      <div className="mt-5 flex items-center gap-2">

        <button
          type="button"
          className="
            cursor-pointer
            px-1
            text-[11px]
            text-[#555]
          "
        >
          All ({String(sections.length).padStart(2, "0")})
        </button>

        {/* Service Type */}
        <div className="relative">

          <select
            value={serviceFilter}
            onChange={(event) =>
              setServiceFilter(event.target.value)
            }
            className="
              h-[29px]
              cursor-pointer
              appearance-none
              rounded-[4px]
              bg-white
              px-[10px]
              pr-[26px]
              text-[10px]
              text-[#444]
              outline-none
            "
          >
            <option>Service Type</option>

            {[...new Set(sections.map((item) => item.serviceType))]
              .map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
          </select>

          <FiChevronDown
            className="
              pointer-events-none
              absolute
              right-[7px]
              top-1/2
              h-[12px]
              w-[12px]
              -translate-y-1/2
              text-[#444]
            "
          />

        </div>

        {/* Event Type */}
        <div className="relative">

          <select
            value={eventFilter}
            onChange={(event) =>
              setEventFilter(event.target.value)
            }
            className="
              h-[29px]
              cursor-pointer
              appearance-none
              rounded-[4px]
              bg-white
              px-[10px]
              pr-[26px]
              text-[10px]
              text-[#444]
              outline-none
            "
          >
            <option>Event Type</option>

            {[...new Set(sections.map((item) => item.eventType))]
              .map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
          </select>

          <FiChevronDown
            className="
              pointer-events-none
              absolute
              right-[7px]
              top-1/2
              h-[12px]
              w-[12px]
              -translate-y-1/2
              text-[#444]
            "
          />

        </div>

      </div>

      {/* =========================================================
          PORTFOLIO CARDS
      ========================================================= */}
      <div className="mt-5 space-y-4">

        {filteredSections.map((section) => (
          <PortfolioCard
            key={section.id}
            section={section}
          />
        ))}

      </div>

    </section>
  );
};

export default PortfolioList;