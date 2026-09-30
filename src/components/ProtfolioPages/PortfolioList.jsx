import React, { useMemo, useState } from "react";

import {
  FiPlusCircle,
  FiChevronDown,
} from "react-icons/fi";

import PortfolioCard from "./PortfolioCard";

/* =========================================================
   WEDDING IMAGES
========================================================= */

import wedding1 from "../../../assets/wedding1.png";
import wedding2 from "../../../assets/wedding2.png";
import wedding3 from "../../../assets/wedding3.png";
import wedding4 from "../../../assets/wedding4.png";

/* =========================================================
   BIRTHDAY IMAGES
========================================================= */

import birthday1 from "../../../assets/birthday1.png";
import birthday2 from "../../../assets/birthday2.png";
import birthday3 from "../../../assets/birthday3.png";
import birthday4 from "../../../assets/birthday4.png";

/* =========================================================
   GET TOGETHER IMAGES
========================================================= */

import event1 from "../../../assets/event011.jpg";
import event2 from "../../../assets/event021.jpg";
import event3 from "../../../assets/event031.jpg";
import event4 from "../../../assets/event041.jpg";

/* =========================================================
   WEDDING VIDEOS
========================================================= */

import weddingVideo from "../../../assets/Videos/wedding-video.mp4";
import cateringVideo from "../../../assets/Videos/events-light-video.mp4";


//Birthday Videos

import cateringvideo from "../../../assets/Videos/catering-video.mp4";
import corporatelight from "../../../assets/Videos/corporate-light-video.mp4";


/* =========================================================
   EVENT MEDIA
   Keep this OUTSIDE the component
========================================================= */

const EVENT_MEDIA = {
  wedding: {
    photos: [
      wedding1,
      wedding2,
      wedding3,
      wedding4,
    ],

    videos: [
      weddingVideo,
      cateringVideo,
    ],
  },

  birthday: {
    photos: [
      birthday1,
      birthday2,
      birthday3,
      birthday4,
    ],

    videos: [],
  },

  "get together": {
    photos: [
      event1,
      event2,
      event3,
      event4,
    ],

    videos: [],
  },
};


/* =========================================================
   NORMALIZE EVENT NAME
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
   COMPONENT
========================================================= */

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
     ADD EVENT MEDIA
  ========================================================= */

  const sectionsWithMedia = useMemo(() => {
    return sections.map((section) => {
      const eventKey = normalizeEventType(
        section.eventType
      );

      const media = EVENT_MEDIA[eventKey];

      return {
        ...section,

        /*
         * If this section already has photos,
         * keep those photos.
         *
         * Otherwise get photos according
         * to its event type.
         */

        photos:
          Array.isArray(section.photos) &&
          section.photos.length > 0
            ? section.photos
            : media?.photos || [],

        /*
         * If this section already has videos,
         * keep those videos.
         *
         * Otherwise get videos according
         * to its event type.
         */

        videos:
          Array.isArray(section.videos) &&
          section.videos.length > 0
            ? section.videos
            : media?.videos || [],
      };
    });
  }, [sections]);


  /* =========================================================
     SERVICE OPTIONS
  ========================================================= */

  const serviceOptions = useMemo(() => {
    return [
      ...new Set(
        sectionsWithMedia
          .map(
            (section) =>
              section.serviceType
          )
          .filter(Boolean)
      ),
    ];
  }, [sectionsWithMedia]);


  /* =========================================================
     EVENT OPTIONS
  ========================================================= */

  const eventOptions = useMemo(() => {
    return [
      ...new Set(
        sectionsWithMedia
          .map(
            (section) =>
              section.eventType
          )
          .filter(Boolean)
      ),
    ];
  }, [sectionsWithMedia]);


  /* =========================================================
     FILTER
  ========================================================= */

  const filteredSections =
    sectionsWithMedia.filter(
      (section) => {
        const serviceMatch =
          serviceFilter === "Service Type" ||
          section.serviceType === serviceFilter;

        const eventMatch =
          eventFilter === "Event Type" ||
          section.eventType === eventFilter;

        return (
          serviceMatch &&
          eventMatch
        );
      }
    );


  /* =========================================================
     CLEAR FILTER
  ========================================================= */

  const handleAll = () => {
    setServiceFilter("Service Type");
    setEventFilter("Event Type");
  };


  /* =========================================================
     UI
  ========================================================= */

  return (
    <section
      className="
        mx-auto
        w-[98%]
        max-w-[1400px]
      "
      style={{
        fontFamily:
          "'Poppins', sans-serif",
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
            Create Structured event-based
            portfolio sections to showcase
            your best work and attract clients
          </p>
        </div>


        {/* ADD NEW PROFILE */}

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
          {String(
            sectionsWithMedia.length
          ).padStart(2, "0")}
          )
        </button>


        {/* SERVICE TYPE */}

        <div className="relative">

          <select
            value={serviceFilter}
            onChange={(event) =>
              setServiceFilter(
                event.target.value
              )
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
              setEventFilter(
                event.target.value
              )
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

        {filteredSections.map(
          (section, index) => (
            <PortfolioCard
              key={section.id}
              section={section}
              onDelete={onDelete}

              /*
               * First card open.
               * Other cards closed.
               */
              showGallery={
                index === 0
              }
            />
          )
        )}

      </div>

    </section>
  );
};

export default PortfolioList;