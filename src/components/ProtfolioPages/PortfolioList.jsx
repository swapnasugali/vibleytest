import React, {
  useMemo,
  useState,
} from "react";

import {
  FiPlusCircle,
  FiChevronDown,
} from "react-icons/fi";

import PortfolioCard from "./PortfolioCard";
import PortfolioSectionForm from "./PortfolioSectionForm";


/* =========================================================
   NORMALIZE EVENT TYPE
========================================================= */

const normalizeEventType = (value = "") => {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ");
};


/* =========================================================
   DEFAULT PORTFOLIO SECTIONS
========================================================= */

const DEFAULT_SECTIONS = [

  {
    id: "portfolio-1",

    title:
      "Universal Media's Grand Launch Event 2026",

    serviceType:
      "General Photography",

    eventType:
      "Corporate Event",

    featured: true,

    photos: [],
    videos: [],
  },


  {
    id: "portfolio-2",

    title:
      "Destination Wedding at Maldives",

    serviceType:
      "Candid Photography",

    eventType:
      "Wedding",

    featured: false,

    photos: [],
    videos: [],
  },


  {
    id: "portfolio-3",

    title:
      "Shanvi's First Birthday - Theme Light Photography",

    serviceType:
      "General Photography",

    eventType:
      "Birthday",

    featured: false,

    photos: [],
    videos: [],
  },


  {
    id: "portfolio-4",

    title:
      "Get to Gether - At Ridira Retreat",

    serviceType:
      "General Photography",

    eventType:
      "Get To Gather",

    featured: false,

    photos: [],
    videos: [],
  },

];


/* =========================================================
   COMPONENT
========================================================= */

const PortfolioList = ({
  sections: parentSections,
  onAddPortfolio,
  onDelete: parentOnDelete,
}) => {


  /* =======================================================
     LOCAL SECTIONS
  ======================================================= */

  const [sections, setSections] = useState(
    Array.isArray(parentSections)
      ? parentSections
      : DEFAULT_SECTIONS
  );


  /* =======================================================
     SHOW FORM
  ======================================================= */

  const [showForm, setShowForm] =
    useState(false);


  /* =======================================================
     FILTERS
  ======================================================= */

  const [serviceFilter, setServiceFilter] =
    useState("Service Type");

  const [eventFilter, setEventFilter] =
    useState("Event Type");


  /* =======================================================
     SERVICE OPTIONS
  ======================================================= */

  const serviceOptions = useMemo(() => {

    return [
      ...new Set(
        sections
          .map(
            (section) =>
              section?.serviceType
          )
          .filter(Boolean)
      ),
    ];

  }, [sections]);


  /* =======================================================
     EVENT OPTIONS
  ======================================================= */

  const eventOptions = useMemo(() => {

    return [
      ...new Set(
        sections
          .map(
            (section) =>
              section?.eventType
          )
          .filter(Boolean)
      ),
    ];

  }, [sections]);


  /* =======================================================
     FILTER SECTIONS
  ======================================================= */

  const filteredSections = useMemo(() => {

    return sections.filter(
      (section) => {

        const serviceMatch =
          serviceFilter ===
            "Service Type" ||
          section?.serviceType ===
            serviceFilter;


        const eventMatch =
          eventFilter ===
            "Event Type" ||
          section?.eventType ===
            eventFilter;


        return (
          serviceMatch &&
          eventMatch
        );

      }
    );

  }, [
    sections,
    serviceFilter,
    eventFilter,
  ]);


  /* =======================================================
     ADD NEW PROFILE SECTION
  ======================================================= */

  const handleAddNew = () => {

    if (onAddPortfolio) {
      onAddPortfolio();
      return;
    }

    setShowForm(true);

  };


  /* =======================================================
     BACK FROM FORM
  ======================================================= */

  const handleBack = () => {

    setShowForm(false);

  };


  /* =======================================================
     SAVE NEW SECTION
  ======================================================= */

  const handleSaveSection = (
    newSection
  ) => {

    if (!newSection) {
      return;
    }


    const sectionToAdd = {

      ...newSection,

      id:
        newSection.id ||
        `portfolio-${Date.now()}`,

    };


    setSections(
      (previousSections) => [

        ...previousSections,

        sectionToAdd,

      ]
    );


    setShowForm(false);

  };


  /* =======================================================
     DELETE SECTION
  ======================================================= */

  const handleDelete = (
    sectionId
  ) => {

    setSections(
      (previousSections) =>
        previousSections.filter(
          (section) =>
            section.id !== sectionId
        )
    );


    if (parentOnDelete) {
      parentOnDelete(sectionId);
    }

  };


  /* =======================================================
     ALL FILTER
  ======================================================= */

  const handleAll = () => {

    setServiceFilter(
      "Service Type"
    );

    setEventFilter(
      "Event Type"
    );

  };


  /* =======================================================
     ADD NEW FORM
  ======================================================= */

  if (showForm) {

    return (
      <section
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-[12px]
          pb-[30px]
          sm:px-[16px]
          lg:px-[18px]
        "
        style={{
          fontFamily:
            "Poppins, sans-serif",
        }}
      >

        <PortfolioSectionForm
          onBack={handleBack}
          onSave={handleSaveSection}
        />

      </section>
    );

  }


  /* =======================================================
     MANAGE PORTFOLIO
  ======================================================= */

  return (
    <section
      className="
        mx-auto
        w-full
        max-w-[1200px]
        px-[12px]
        pb-[30px]
        sm:px-[16px]
        lg:px-[18px]
      "
      style={{
        fontFamily:
          "Poppins, sans-serif",
      }}
    >

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <div
        className="
          flex
          w-full
          flex-col
          items-start
          justify-between
          gap-[14px]

          sm:flex-row
          sm:items-start
          sm:gap-[12px]
        "
      >

        {/* =================================================
            TITLE
        ================================================= */}

        <div
          className="
            min-w-0
            flex-1
            w-full
            sm:w-auto
          "
        >

          <h1
            className="
              text-[28px]
              font-semibold
              leading-[34px]
              text-[#252525]

              sm:text-[34px]
              sm:leading-[55px]
            "
          >
            Manage Portfolio
          </h1>


          <p
            className="
              mt-[2px]
              max-w-full
              text-[15px]
              leading-[21px]
              text-[#999999]

              sm:text-[18px]
              sm:leading-[22px]
            "
          >
            Create Structured event-based portfolio sections to showcase your best work and attract clients
          </p>

        </div>


        {/* =================================================
            ADD NEW PROFILE SECTION

            Slightly moved down
        ================================================= */}

        <button
          type="button"
          onClick={handleAddNew}
          className="
            mt-[10px]
            flex
            h-[52px]
            w-full
            max-w-[363px]
            shrink-0
            cursor-pointer
            items-center
            justify-center
            gap-[5px]
            self-start
            rounded-[4px]
            border-0
            bg-[#a60000]
            px-[8px]
            text-[16px]
            font-semibold
            text-white
            transition
            hover:bg-[#850000]

            sm:mt-[16px]
            sm:h-[30px]
            sm:w-auto
            sm:min-w-[190px]
            sm:max-w-none
            sm:self-start
            sm:text-[18px]

            lg:min-w-[190px]
          "
        >

          <FiPlusCircle
            className="
              h-[16px]
              w-[16px]
              shrink-0
            "
          />

          <span className="whitespace-nowrap">
            Add New Profile Section
          </span>

        </button>

      </div>


      {/* =====================================================
          FILTERS
      ===================================================== */}

      <div
        className="
          mt-[18px]
          flex
          w-full
          flex-wrap
          items-center
          gap-[6px]
        "
      >

        {/* =================================================
            ALL
        ================================================= */}

        <button
          type="button"
          onClick={handleAll}
          className="
            cursor-pointer
            border-0
            bg-transparent
            p-0
            text-[18px]
            font-medium
            text-[#555555]

            sm:text-[22px]
          "
        >

          All (
          {String(
            sections.length
          ).padStart(2, "0")}
          )

        </button>


        {/* =================================================
            SERVICE TYPE
        ================================================= */}

        <div
          className="
            relative
            w-auto
            max-w-full
            shrink-0
          "
        >

          <select
            value={serviceFilter}
            onChange={(event) =>
              setServiceFilter(
                event.target.value
              )
            }
            className="
              h-[44px]
              min-w-[150px]
              max-w-full
              cursor-pointer
              appearance-none
              rounded-[4px]
              border-0
              bg-white
              pl-[8px]
              pr-[30px]
              text-[16px]
              font-medium
              text-[#0F0B1C]
              outline-none

              sm:h-[52px]
              sm:min-w-[179px]
              sm:text-[20px]
            "
          >

            <option value="Service Type">
              Service Type
            </option>

            {serviceOptions.map(
              (service) => (

                <option
                  key={service}
                  value={service}
                >
                  {service}
                </option>

              )
            )}

          </select>


          <FiChevronDown
            className="
              pointer-events-none
              absolute
              right-[5px]
              top-1/2
              h-[18px]
              w-[18px]
              -translate-y-1/2

              sm:h-[20px]
              sm:w-[20px]
            "
          />

        </div>


        {/* =================================================
            EVENT TYPE
        ================================================= */}

        <div
          className="
            relative
            w-auto
            max-w-full
            shrink-0
          "
        >

          <select
            value={eventFilter}
            onChange={(event) =>
              setEventFilter(
                event.target.value
              )
            }
            className="
              h-[44px]
              min-w-[140px]
              max-w-full
              cursor-pointer
              appearance-none
              rounded-[4px]
              border-0
              bg-white
              pl-[8px]
              pr-[30px]
              text-[16px]
              font-medium
              text-[#0F0B1C]
              outline-none

              sm:h-[52px]
              sm:min-w-[160px]
              sm:text-[18px]
            "
          >

            <option value="Event Type">
              Event Type
            </option>

            {eventOptions.map(
              (type) => (

                <option
                  key={type}
                  value={type}
                >
                  {type}
                </option>

              )
            )}

          </select>


          <FiChevronDown
            className="
              pointer-events-none
              absolute
              right-[5px]
              top-1/2
              h-[18px]
              w-[18px]
              -translate-y-1/2

              sm:h-[20px]
              sm:w-[20px]
            "
          />

        </div>

      </div>


      {/* =====================================================
          PORTFOLIO CARDS
      ===================================================== */}

      <div
        className="
          mt-[18px]
          flex
          w-full
          flex-col
          gap-[15px]
        "
      >

        {filteredSections.map(
          (section, index) => (

            <PortfolioCard
              key={
                section.id ||
                `portfolio-${index}`
              }

              section={section}

              onDelete={
                handleDelete
              }

              /*
                Gallery is visible
                for every card.
              */

              showGallery={true}

            />

          )
        )}


        {/* =================================================
            EMPTY RESULT
        ================================================= */}

        {filteredSections.length === 0 && (

          <div
            className="
              flex
              min-h-[150px]
              w-full
              items-center
              justify-center
              rounded-[7px]
              bg-white
              text-[12px]
              text-[#999999]
            "
          >
            No portfolio sections found.
          </div>

        )}

      </div>

    </section>
  );
};


export default PortfolioList;