
import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FiPlusCircle,
  FiChevronDown,
  FiFilter,
} from "react-icons/fi";

import PortfolioCard from "./PortfolioCard";
import PortfolioSectionForm from "./PortfolioSectionForm";


/* =========================================================
   NORMALIZE FILTER VALUES
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
    title: "Universal Media's Grand Launch Event 2026",
    serviceType: "General Photography",
    eventType: "Corporate Event",
    featured: true,
    photos: [],
    videos: [],
  },

  {
    id: "portfolio-2",
    title: "Destination Wedding at Maldives",
    serviceType: "Candid Photography",
    eventType: "Wedding",
    featured: false,
    photos: [],
    videos: [],
  },

  {
    id: "portfolio-3",
    title: "Shanvi's First Birthday - Theme Light Photography",
    serviceType: "General Photography",
    eventType: "Birthday",
    featured: false,
    photos: [],
    videos: [],
  },

  {
    id: "portfolio-4",
    title: "Get to Gether - At Ridira Retreat",
    serviceType: "General Photography",
    eventType: "Get To Gather",
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

  onSavePortfolio,

  onUpdatePortfolio,
}) => {


  /* =======================================================
     LOCAL PORTFOLIO DATA
  ======================================================= */

  const [sections, setSections] = useState(() =>
    Array.isArray(parentSections)
      ? parentSections
      : DEFAULT_SECTIONS
  );


  /* =======================================================
     SYNC PARENT DATA
  ======================================================= */

  useEffect(() => {

    if (Array.isArray(parentSections)) {
      setSections(parentSections);
    }

  }, [parentSections]);


  /* =======================================================
     FORM VISIBILITY
  ======================================================= */

  const [showForm, setShowForm] = useState(false);


  /* =======================================================
     EDIT SECTION DATA
  ======================================================= */

  const [editingSection, setEditingSection] = useState(null);


  /* =======================================================
     FILTER STATES
  ======================================================= */

  const [serviceFilter, setServiceFilter] =
    useState("Service Type");

  const [eventFilter, setEventFilter] =
    useState("Event Type");


  /* =======================================================
     DYNAMIC SERVICE OPTIONS
  ======================================================= */

  const serviceOptions = useMemo(() => {

    return [
      ...new Set(
        sections
          .map((section) => section?.serviceType?.trim())
          .filter(Boolean)
      ),
    ].sort((a, b) => a.localeCompare(b));

  }, [sections]);


  /* =======================================================
     DYNAMIC EVENT OPTIONS
  ======================================================= */

  const eventOptions = useMemo(() => {

    return [
      ...new Set(
        sections
          .map((section) => section?.eventType?.trim())
          .filter(Boolean)
      ),
    ].sort((a, b) => a.localeCompare(b));

  }, [sections]);


  /* =======================================================
     DYNAMIC FILTERED SECTIONS
  ======================================================= */

  const filteredSections = useMemo(() => {

    return sections.filter((section) => {

      const serviceMatch =
        serviceFilter === "Service Type" ||
        normalizeEventType(section?.serviceType) ===
          normalizeEventType(serviceFilter);

      const eventMatch =
        eventFilter === "Event Type" ||
        normalizeEventType(section?.eventType) ===
          normalizeEventType(eventFilter);

      return serviceMatch && eventMatch;

    });

  }, [
    sections,
    serviceFilter,
    eventFilter,
  ]);


  /* =======================================================
     FILTERED COUNT
  ======================================================= */

  const filteredCount = filteredSections.length;


  /* =======================================================
     ADD NEW PROFILE SECTION
  ======================================================= */

  const handleAddNew = () => {

    setEditingSection(null);

    if (onAddPortfolio) {
      onAddPortfolio();
      return;
    }

    setShowForm(true);

  };


  /* =======================================================
     EDIT PORTFOLIO SECTION
  ======================================================= */

  const handleEdit = (section) => {

    if (!section) return;

    setEditingSection(section);

    setShowForm(true);

  };


  /* =======================================================
     BACK FROM FORM
  ======================================================= */

  const handleBack = () => {

    setShowForm(false);

    setEditingSection(null);

  };


  /* =======================================================
     SAVE / UPDATE PORTFOLIO
  ======================================================= */

  const handleSaveSection = (formData) => {

    if (!formData) return;


    /* -----------------------------------------------
       UPDATE EXISTING SECTION
    ----------------------------------------------- */

    if (editingSection) {

      const updatedSection = {
        ...editingSection,
        ...formData,
        id: editingSection.id,
      };

      setSections((previousSections) =>
        previousSections.map((section) =>
          String(section.id) === String(editingSection.id)
            ? updatedSection
            : section
        )
      );

      if (onUpdatePortfolio) {
        onUpdatePortfolio(updatedSection);
      }

    }


    /* -----------------------------------------------
       ADD NEW SECTION
    ----------------------------------------------- */

    else {

      const sectionToAdd = {
        ...formData,

        id:
          formData.id ||
          `portfolio-${Date.now()}-${Math.random()
            .toString(36)
            .slice(2, 7)}`,

        photos: Array.isArray(formData.photos)
          ? formData.photos
          : [],

        videos: Array.isArray(formData.videos)
          ? formData.videos
          : [],
      };

      setSections((previousSections) => [
        ...previousSections,
        sectionToAdd,
      ]);

      if (onSavePortfolio) {
        onSavePortfolio(sectionToAdd);
      }

    }


    setShowForm(false);

    setEditingSection(null);

  };


  /* =======================================================
     DELETE PORTFOLIO SECTION
  ======================================================= */

  const handleDelete = (sectionId) => {

    setSections((previousSections) =>
      previousSections.filter(
        (section) =>
          String(section.id) !== String(sectionId)
      )
    );

    if (parentOnDelete) {
      parentOnDelete(sectionId);
    }

  };


  /* =======================================================
     RESET ALL FILTERS
  ======================================================= */

  const handleAll = () => {

    setServiceFilter("Service Type");

    setEventFilter("Event Type");

  };


  /* =======================================================
     CHECK FILTER ACTIVE
  ======================================================= */

  const hasActiveFilters =
    serviceFilter !== "Service Type" ||
    eventFilter !== "Event Type";


  /* =======================================================
     FORM VIEW
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
          fontFamily: "Poppins, sans-serif",
        }}
      >

        <PortfolioSectionForm
          key={editingSection?.id || "new-portfolio"}
          initialData={editingSection}
          onBack={handleBack}
          onSave={handleSaveSection}
        />

      </section>

    );

  }


  /* =======================================================
     MAIN PORTFOLIO UI
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
        fontFamily: "Poppins, sans-serif",
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

        {/* TITLE */}

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
            Create Structured event-based portfolio sections
            to showcase your best work and attract clients
          </p>

        </div>


        {/* ADD NEW BUTTON */}

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
            className="h-[16px] w-[16px] shrink-0"
          />

          <span className="whitespace-nowrap">
            Add New Profile Section
          </span>

        </button>

      </div>


      {/* =====================================================
          FILTER SECTION
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

        {/* ALL COUNT */}

        <button
          type="button"
          onClick={handleAll}
          aria-pressed={!hasActiveFilters}
          className={`
            cursor-pointer
            border-0
            bg-transparent
            p-0
            text-[18px]
            font-medium
            transition
            sm:text-[22px]
            ${
              !hasActiveFilters
                ? "text-[#a60000]"
                : "text-[#555555]"
            }
          `}
        >

          All (
          {String(sections.length).padStart(2, "0")}
          )

        </button>


        {/* SERVICE TYPE FILTER */}

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
              setServiceFilter(event.target.value)
            }
            aria-label="Filter by service type"
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
              focus:ring-1
              focus:ring-[#a60000]
              sm:h-[52px]
              sm:min-w-[179px]
              sm:text-[20px]
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


        {/* EVENT TYPE FILTER */}

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
              setEventFilter(event.target.value)
            }
            aria-label="Filter by event type"
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
              focus:ring-1
              focus:ring-[#a60000]
              sm:h-[52px]
              sm:min-w-[160px]
              sm:text-[18px]
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


        {/* CLEAR FILTERS */}

        {hasActiveFilters && (

          <button
            type="button"
            onClick={handleAll}
            className="
              flex
              h-[36px]
              cursor-pointer
              items-center
              gap-[5px]
              rounded-[4px]
              border
              border-[#e3caca]
              bg-white
              px-[10px]
              text-[12px]
              font-medium
              text-[#a60000]
              transition
              hover:bg-[#fff5f5]
              sm:h-[40px]
              sm:text-[13px]
            "
          >

            <FiFilter size={14} />

            Clear Filters

          </button>

        )}

      </div>


      {/* =====================================================
          RESULTS COUNT
      ===================================================== */}

      {hasActiveFilters && (

        <p
          className="
            mt-[9px]
            text-[12px]
            text-[#888888]
            sm:text-[13px]
          "
        >
          Showing {filteredCount} of {sections.length} portfolio sections
        </p>

      )}


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

        {filteredSections.map((section) => (

          <PortfolioCard
            key={section.id}

            section={section}

            onDelete={handleDelete}

            onEdit={handleEdit}

            showGallery={true}
          />

        ))}


        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {filteredSections.length === 0 && (

          <div
            className="
              flex
              min-h-[190px]
              w-full
              flex-col
              items-center
              justify-center
              gap-[9px]
              rounded-[7px]
              bg-white
              px-[15px]
              py-[20px]
              text-center
            "
          >

            <div
              className="
                flex
                h-[42px]
                w-[42px]
                items-center
                justify-center
                rounded-full
                bg-[#fff1f1]
                text-[#a60000]
              "
            >

              <FiFilter size={19} />

            </div>

            <h3
              className="
                text-[15px]
                font-semibold
                text-[#444444]
              "
            >
              No Portfolio Sections Found
            </h3>

            <p
              className="
                max-w-[350px]
                text-[12px]
                leading-[19px]
                text-[#999999]
              "
            >
              No sections match your selected filters.
              Try changing the filters or add a new portfolio section.
            </p>


            {/* CLEAR FILTERS */}

            {hasActiveFilters && (

              <button
                type="button"
                onClick={handleAll}
                className="
                  mt-[3px]
                  cursor-pointer
                  border-0
                  bg-transparent
                  text-[13px]
                  font-semibold
                  text-[#a60000]
                  underline
                "
              >
                Clear Filters
              </button>

            )}


            {/* ADD PORTFOLIO */}

            {sections.length === 0 && (

              <button
                type="button"
                onClick={handleAddNew}
                className="
                  mt-[5px]
                  flex
                  h-[38px]
                  cursor-pointer
                  items-center
                  justify-center
                  gap-[6px]
                  rounded-[4px]
                  bg-[#a60000]
                  px-[15px]
                  text-[13px]
                  font-semibold
                  text-white
                  hover:bg-[#850000]
                "
              >

                <FiPlusCircle size={15} />

                Add Portfolio Section

              </button>

            )}

          </div>

        )}

      </div>

    </section>

  );

};


export default PortfolioList;
