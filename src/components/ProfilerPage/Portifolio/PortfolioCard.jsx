import React from "react";

import {
  FiEdit,
  FiEye,
  FiTrash2,
  FiCamera,
} from "react-icons/fi";

import PortfolioGalleryPreview from "./PortfolioGalleryPreview";

const PortfolioCard = ({
  section,
  onDelete,
  showGallery = false,
}) => {
  /* =========================================================
     DELETE
  ========================================================= */

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this portfolio section?"
    );

    if (!confirmed) {
      return;
    }

    if (onDelete) {
      onDelete(section.id);
    }
  };

  const photos = section.photos || [];
  const videos = section.videos || [];

  return (
    <article
      className="
        w-full
        overflow-hidden
        rounded-[7px]
        bg-white
      "
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          flex
          items-start
          justify-between
          px-[27px]
          pb-[11px]
          pt-[14px]
        "
      >
        {/* LEFT */}

        <div className="min-w-0">
          {/* TITLE */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-[7px]
            "
          >
            <h2
              className="
                text-[14px]
                font-medium
                leading-[19px]
                text-[#333333]
              "
            >
              {section.title}
            </h2>

            {section.featured && (
              <span
                className="
                  inline-flex
                  h-[19px]
                  items-center
                  gap-[3px]
                  rounded-[3px]
                  bg-[#f5ad00]
                  px-[7px]
                  text-[7px]
                  font-semibold
                  leading-none
                  text-white
                "
              >
                ★ Featured
              </span>
            )}
          </div>

          {/* SERVICE + EVENT */}

          <div
            className="
              mt-[7px]
              flex
              items-center
              gap-[5px]
            "
          >
            {/* SERVICE */}

            <span
              className="
                inline-flex
                h-[20px]
                items-center
                rounded-[3px]
                bg-[#222222]
                px-[9px]
                text-[7px]
                font-medium
                leading-none
                text-white
              "
            >
              <FiCamera
                className="mr-[4px]"
                size={8}
              />

              {section.serviceType ||
                "General Photography"}
            </span>

            {/* DIVIDER */}

            <span
              className="
                h-[17px]
                w-[1px]
                bg-[#777777]
              "
            />

            {/* EVENT */}

            <span
              className="
                text-[7px]
                font-medium
                leading-none
                text-[#333333]
              "
            >
              {section.eventType ||
                "Corporate Event"}
            </span>
          </div>
        </div>

        {/* ===================================================
            ACTION ICONS
        =================================================== */}

        <div
          className="
            ml-[15px]
            flex
            shrink-0
            items-center
            gap-[20px]
            pt-[1px]
          "
        >
          {/* EDIT */}

          <button
            type="button"
            aria-label="Edit portfolio"
            className="
              flex
              h-[18px]
              w-[18px]
              cursor-pointer
              items-center
              justify-center
              border-0
              bg-transparent
              p-0
              text-[#222222]
              transition
              hover:text-[#a60000]
            "
          >
            <FiEdit
              size={18}
              strokeWidth={2.2}
            />
          </button>

          {/* DELETE */}

          <button
            type="button"
            onClick={handleDelete}
            aria-label="Delete portfolio"
            className="
              flex
              h-[18px]
              w-[18px]
              cursor-pointer
              items-center
              justify-center
              border-0
              bg-transparent
              p-0
              text-[#850000]
              transition
              hover:text-[#c00000]
            "
          >
            <FiTrash2
              size={17}
              strokeWidth={2.2}
            />
          </button>

          {/* EYE */}

          <button
            type="button"
            aria-label="View portfolio"
            className="
              flex
              h-[18px]
              w-[18px]
              cursor-pointer
              items-center
              justify-center
              border-0
              bg-transparent
              p-0
              text-[#222222]
              transition
              hover:text-[#a60000]
            "
          >
            <FiEye
              size={18}
              strokeWidth={2.3}
            />
          </button>
        </div>
      </div>

      {/* =====================================================
          GALLERY
      ===================================================== */}

      {showGallery && (
        <div
          className="
            px-[18px]
            pb-[15px]
          "
        >
          <PortfolioGalleryPreview
            photos={photos}
            videos={videos}
          />
        </div>
      )}
    </article>
  );
};

export default PortfolioCard;