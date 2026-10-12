import React, { useState } from "react";

import {
  FiEdit,
  FiEye,
} from "react-icons/fi";

import {
  FaStar,
  FaCamera,
  FaTrash,
} from "react-icons/fa";

import { LuEyeClosed } from "react-icons/lu";

import PortfolioGalleryPreview from "./PortfolioGalleryPreview";



const EVENT_MEDIA = {
  "corporate event": {
    photos: [
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780934/corporategala1.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780934/corporategala2.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780934/corporategala3.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780934/corporategala4.jpg",
    ],
    videos: [
      "https://res.cloudinary.com/porwmjke/video/upload/v1791781085/corporate-light-video.mp4",
      "https://res.cloudinary.com/porwmjke/video/upload/v1791783928/events-light-video.mp4",
    ],
  },

  wedding: {
    photos: [
      "https://res.cloudinary.com/porwmjke/image/upload/v1791778383/photo053.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791779160/photo021.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791549208/photo03.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791549234/photo04.jpg",
    ],
    videos: [
      "https://res.cloudinary.com/porwmjke/video/upload/v1791783833/wedding-video.mp4",
      "https://res.cloudinary.com/porwmjke/video/upload/v1791783565/catering-video.mp4",
    ],
  },

  birthday: {
    photos: [
      "https://res.cloudinary.com/porwmjke/image/upload/v1791783409/birthday1.png",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791783409/birthday2.png",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791783409/birthday3.png",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791783409/birthday4.png",
    ],
    videos: [
      "https://res.cloudinary.com/porwmjke/video/upload/v1791783565/catering-video.mp4",
      "https://res.cloudinary.com/porwmjke/video/upload/v1791781085/corporate-light-video.mp4",
    ],
  },

  "get together": {
    photos: [
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780861/event11.png",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791781798/light11.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791777473/event042.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780874/event44.png",
    ],
    videos: [
      "https://res.cloudinary.com/porwmjke/video/upload/v1791783565/catering-video.mp4",
      "https://res.cloudinary.com/porwmjke/video/upload/v1791783833/wedding-video.mp4",
    ],
  },

  "get to gather": {
    photos: [
      "https://res.cloudinary.com/porwmjke/image/upload/v1791781798/light11.jpg",
     "https://res.cloudinary.com/porwmjke/image/upload/v1791781798/light11.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791777473/event042.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780874/event44.png",
    ],
    videos: [
      "https://res.cloudinary.com/porwmjke/video/upload/v1791781085/corporate-light-video.mp4",
      "https://res.cloudinary.com/porwmjke/video/upload/v1791783833/wedding-video.mp4",
    ],
  },
};


const normalizeEventType = (value = "") => {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ");
};


const PortfolioCard = ({
  section,
  onEdit,
  onDelete,
  showGallery = false,
}) => {
  const [isVisible, setIsVisible] = useState(showGallery);

  const handleEdit = () => {
    if (onEdit) {
      onEdit(section);
    }
  };


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


  const eventKey = normalizeEventType(
    section?.eventType
  );


  const eventMedia =
    EVENT_MEDIA[eventKey] || {
      photos: [],
      videos: [],
    };


  const savedPhotos = Array.isArray(section?.photos)
    ? section.photos
    : [];


  const savedVideos = Array.isArray(section?.videos)
    ? section.videos
    : [];


  const photos =
    savedPhotos.length > 0
      ? savedPhotos
      : eventMedia.photos;


  const videos =
    savedVideos.length > 0
      ? savedVideos
      : eventMedia.videos;


  /* =====================================================
     DESTINATION WEDDING AT MALDIVES
     ALWAYS SHOW FEATURED BADGE
  ===================================================== */

  const isDestinationWedding =
    section?.title
      ?.toString()
      .trim()
      .toLowerCase() ===
    "destination wedding at maldives";


  const isFeatured =
    isDestinationWedding ||
    section?.featured === true;


  return (
    <article
      className="
        w-full
        max-w-full
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
          w-full
          min-w-0
          items-start
          justify-between
          gap-[10px]
          px-[27px]
          pb-[10px]
          pt-[14px]
        "
      >

        <div className="min-w-0 flex-1">

          <div
            className="
              flex
              min-w-0
              flex-wrap
              items-center
              gap-[7px]
            "
          >

            <h2
              className="
                min-w-0
                max-w-full
                break-words
                text-[26px]
                font-regular
              
                leading-[19px]
                text-[#333333]
              "
            >
              {section?.title ||
                "Untitled Portfolio"}
            </h2>


            {/* =================================================
                FEATURED BADGE
            ================================================= */}

            {isFeatured && (
              <span
                className="
                  inline-flex
                  h-[37px]
                  shrink-0
                  items-center
                  gap-[3px]
                  rounded-[3px]
                  bg-[#f5ad00]
                  px-[6px]
                  text-[14px]
                  font-semibold
                  leading-none
                  text-white
                "
              >
                <FaStar size={17} />

                Featured
              </span>
            )}

          </div>


          {/* =================================================
              SERVICE + EVENT TYPE
          ================================================= */}

          <div
            className="
              mt-[6px]
              flex
              min-w-0
              flex-wrap
              items-center
              gap-[5px]
            "
          >

            <span
              className="
                inline-flex
                h-[27px]
                max-w-full
                shrink-0
                items-center
                overflow-hidden
                rounded-[3px]
                bg-[#222222]
                px-[7px]
                text-[14px]
                font-medium
                leading-none
                text-white
              "
            >

              <FaCamera
                className="
                  mr-[4px]
                  shrink-0
                "
                size={17}
              />

              <span className="truncate">
                {section?.serviceType ||
                  "General Photography"}
              </span>

            </span>


            <span
              className="
                h-[14px]
                w-[1px]
                shrink-0
                bg-[#777777]
              "
            />


            <span
              className="
                max-w-full
                truncate
                text-[14px]
                font-medium
                leading-none
                text-[#333333]
              "
            >
              {section?.eventType ||
                "Corporate Event"}
            </span>

          </div>

        </div>


        {/* =====================================================
            ACTION BUTTONS
        ===================================================== */}

        <div
          className="
            flex
            shrink-0
            items-center
            gap-[28px]
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
              h-[32px]
              w-[32px]
              shrink-0
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
              size={25}
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
              h-[32px]
              w-[32px]
              shrink-0
              cursor-pointer
              items-center
              justify-center
              border-0
              bg-transparent
              p-0
              text-[#850000]
              transition
              hover:text-[#a60000]
            "
          >
            <FaTrash
              size={30}
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
              h-[70px]
              w-[70px]
              shrink-0
              cursor-pointer
              items-center
              justify-center
              border-0
              bg-transparent
              p-0
              text-[#222222]
              transition
              hover:text-[#111111]
            "
          >

            {isVisible ? (
              <FiEye
                size={30}
                strokeWidth={2.2}
              />
            ) : (
              <LuEyeClosed
                size={38}
                strokeWidth={3}
              />
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
            w-full
            min-w-0
            px-[12px]
            pb-[12px]
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