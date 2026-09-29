import React, { useMemo, useState } from "react";

import {
  FiPlusCircle,
  FiChevronDown,
} from "react-icons/fi";

import PortfolioCard from "./PortfolioCard";

const PortfolioList = ({
  sections = [],
  onAddPortfolio,
  onDelete,
}) => {
  const [serviceFilter, setServiceFilter] =
    useState("Service Type");

  const [eventFilter, setEventFilter] =
    useState("Event Type");

  /* =========================================================
     SERVICE OPTIONS
  ========================================================= */

  const serviceOptions = useMemo(() => {
    return [
      ...new Set(
        sections
          .map((section) => section.serviceType)
          .filter(Boolean)
      ),
    ];
  }, [sections]);

  /* =========================================================
     EVENT OPTIONS
  ========================================================= */

  const eventOptions = useMemo(() => {
    return [
      ...new Set(
        sections
          .map((section) => section.eventType)
          .filter(Boolean)
      ),
    ];
  }, [sections]);

  /* =========================================================
     FILTER
  ========================================================= */

  const filteredSections = sections.filter((section) => {
    const serviceMatch =
      serviceFilter === "Service Type" ||
      section.serviceType === serviceFilter;

    const eventMatch =
      eventFilter === "Event Type" ||
      section.eventType === eventFilter;

    return serviceMatch && eventMatch;
  });

  /* =========================================================
     CLEAR FILTER
  ========================================================= */

  const handleAll = () => {
    setServiceFilter("Service Type");
    setEventFilter("Event Type");
  };

  return (
    <section
      className="
        mx-auto
        w-[98%]
        max-w-[1400px]
      "
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex items-start justify-between">
        {/* LEFT */}

        <div>
          <h1
            className="
              text-[34px]
              font-semibold
              leading-[42px]
              text-[#252525]
            "
          >
            Manage Portfolio
          </h1>

          <p
            className="
              mt-[2px]
              text-[18px]
              leading-[22px]
              text-[#999999]
            "
          >
            Create Structured event-based portfolio sections to
            showcase your best work and attract clients
          </p>
        </div>

        {/* ADD NEW PROFILE SECTION */}

        <button
          type="button"
          onClick={onAddPortfolio}
          className="
            mt-[6px]
            flex
            h-[52px]
            min-w-[363px]
            items-center
            justify-center
            gap-[6px]
            rounded-[4px]
            bg-[#a60000]
            px-[12px]
            text-[18px]
            font-semibold
            text-white
            transition
            hover:bg-[#850000]
          "
        >
          <FiPlusCircle
            className="h-[11px] w-[11px]"
          />

          Add New Profile Section
        </button>
      </div>

      {/* =====================================================
          FILTERS
      ===================================================== */}

      <div
        className="
          mt-[20px]
          flex
          items-center
          gap-[6px]
        "
      >
        {/* ALL */}

        <button
          type="button"
          onClick={handleAll}
          className="
            px-[1px]
            text-[22px]
            font-medium
            text-[#555]
          "
        >
          All (
          {String(sections.length).padStart(2, "0")}
          )
        </button>

        {/* SERVICE TYPE */}

        <div className="relative">
          <select
            value={serviceFilter}
            onChange={(event) =>
              setServiceFilter(event.target.value)
            }
            className="
              h-[28px]
              min-w-[91px]
              appearance-none
              rounded-[4px]
              border-0
              bg-white
              pl-[9px]
              pr-[25px]
              text-[20px]
              font-medium
              text-[#0F0B1C]
              outline-none
            "
          >
            <option value="Service Type">
              Service Type
            </option>

            {serviceOptions.map((service) => (
              <option
                key={service}
                value={service}
              >
                {service}
              </option>
            ))}
          </select>

          <FiChevronDown
            className="
              pointer-events-none
              absolute
              right-[6px]
              top-1/2
              h-[20px]
              w-[20px]
              -translate-y-1/2
            "
          />
        </div>

        {/* EVENT TYPE */}

        <div className="relative">
          <select
            value={eventFilter}
            onChange={(event) =>
              setEventFilter(event.target.value)
            }
            className="
              h-[28px]
              min-w-[82px]
              appearance-none
              rounded-[4px]
              border-0
              bg-white
              pl-[9px]
              pr-[25px]
              text-[20px]
              font-medium
              text-[#0F0D1C]
              outline-none
            "
          >
            <option value="Event Type">
              Event Type
            </option>

            {eventOptions.map((type) => (
              <option
                key={type}
                value={type}
              >
                {type}
              </option>
            ))}
          </select>

          <FiChevronDown
            className="
              pointer-events-none
              absolute
              right-[6px]
              top-1/2
              h-[20px]
              w-[20px]
              -translate-y-1/2
            "
          />
        </div>
      </div>

      {/* =====================================================
          PORTFOLIO CARDS
      ===================================================== */}

      <div
        className="
          mt-[20px]
          flex
          flex-col
          gap-[15px]
        "
      >
        {filteredSections.map((section, index) => (
          <PortfolioCard
            key={section.id}
            section={section}
            onDelete={onDelete}
            showGallery={index === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioList;