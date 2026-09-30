import React, { useState } from "react";

import {
  FiEdit,
  FiEye,
  FiTrash2,
} from "react-icons/fi";

import {
  FaEyeSlash,
  FaStar,
  FaCamera,
} from "react-icons/fa";

import PortfolioGalleryPreview from "./PortfolioGalleryPreview";

const PortfolioCard = ({
  section,
  onEdit,
  onDelete,
  showGallery = false,
}) => {
  const [isVisible, setIsVisible] = useState(showGallery);

  const handleEdit = () => {
    if (onEdit) onEdit(section);
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this portfolio section?"
    );

    if (!confirmed) return;

    if (onDelete) onDelete(section.id);
  };

  const photos = Array.isArray(section.photos)
    ? section.photos
    : [];

  const videos = Array.isArray(section.videos)
    ? section.videos
    : [];

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
          CARD HEADER
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

        {/* LEFT CONTENT */}

        <div className="min-w-0">

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
                text-[26px]
                font-medium
                leading-[19px]
                text-[#333333]
              "
            >
              {section.title}
            </h2>


            {/* FEATURED */}

            {section.featured && (
              <span
                className="
                  inline-flex
                  h-[24px]
                  items-center
                  gap-[3px]
                  rounded-[3px]
                  bg-[#f5ad00]
                  px-[7px]
                  text-[14px]
                  font-semibold
                  leading-none
                  text-white
                "
              >
                <FaStar size={18} />
                Featured
              </span>
            )}

          </div>


          {/* SERVICE + EVENT TYPE */}

          <div
            className="
              mt-[7px]
              flex
              items-center
              gap-[5px]
            "
          >

            <span
              className="
                inline-flex
                h-[20px]
                items-center
                rounded-[3px]
                bg-[#222222]
                px-[9px]
                text-[14px]
                font-medium
                leading-none
                text-white
              "
            >
              <FaCamera
                className="mr-[4px] text-white"
                size={17}
              />

              {section.serviceType ||
                "General Photography"}
            </span>


            <span
              className="
                h-[17px]
                w-[1px]
                bg-[#777777]
              "
            />


            <span
              className="
                text-[14px]
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


        {/* =================================================
            ACTION ICONS
        ================================================= */}

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
            onClick={handleEdit}
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


          {/* SHOW / HIDE */}

          <button
            type="button"
            onClick={() =>
              setIsVisible(
                (previous) => !previous
              )
            }
            aria-label={
              isVisible
                ? "Hide portfolio"
                : "Show portfolio"
            }
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

            {isVisible ? (
              <FiEye
                size={18}
                strokeWidth={2.3}
              />
            ) : (
              <FaEyeSlash size={18} />
            )}

          </button>

        </div>

      </div>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      {isVisible && (
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