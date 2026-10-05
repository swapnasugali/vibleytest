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

/* WEDDING */
import photo01 from "../../assets/photo053.jpg";
import photo02 from "../../assets/photo021.jpg";
import photo03 from "../../assets/photo03.jpg";
import photo04 from "../../assets/photo04.jpg";

/* BIRTHDAY */
import birthday1 from "../../assets/birthday1.png";
import birthday2 from "../../assets/birthday.png";
import birthday3 from "../../assets/birthday3.png";
import birthday4 from "../../assets/birthday4.png";

/* WEDDING VIDEOS */
import weddingVideo from "../../assets/Videos/wedding-video.mp4";
import cateringVideo from "../../assets/Videos/events-light-video.mp4";

/* BIRTHDAY VIDEOS */
import cateringvideo from "../../assets/Videos/catering-video.mp4";
import corporatelight from "../../assets/Videos/corporate-light-video.mp4";

/* CORPORATE EVENT */
import corporatePhoto01 from "../../assets/corporategala1.jpg";
import corporatePhoto02 from "../../assets/corporategala2.jpg";
import corporatePhoto03 from "../../assets/corporategala3.jpg";
import corporatePhoto04 from "../../assets/corporategala4.jpg";

import corporateVideo01 from "../../assets/Videos/corporate-light-video.mp4";
import corporateVideo02 from "../../assets/Videos/events-light-video.mp4";

/* GET TO GATHER */
import getTogetherPhoto01 from "../../assets/event11.png";
import getTogetherPhoto02 from "../../assets/light1.jpg";
import getTogetherPhoto03 from "../../assets/event042.jpg";
import getTogetherPhoto04 from "../../assets/event44.png";

import getTogetherVideo01 from "../../assets/Videos/catering-video.mp4";
import getTogetherVideo02 from "../../assets/Videos/wedding-video.mp4";


const EVENT_MEDIA = {
  "corporate event": {
    photos: [
      corporatePhoto01,
      corporatePhoto02,
      corporatePhoto03,
      corporatePhoto04,
    ],
    videos: [
      corporateVideo01,
      corporateVideo02,
    ],
  },

  wedding: {
    photos: [
      photo01,
      photo02,
      photo03,
      photo04,
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
    videos: [
      cateringvideo,
      corporatelight,
    ],
  },

  "get together": {
    photos: [
      getTogetherPhoto01,
      getTogetherPhoto02,
      getTogetherPhoto03,
      getTogetherPhoto04,
    ],
    videos: [
      getTogetherVideo01,
      getTogetherVideo02,
    ],
  },

  "get to gather": {
    photos: [
      getTogetherPhoto01,
      getTogetherPhoto02,
      getTogetherPhoto03,
      getTogetherPhoto04,
    ],
    videos: [
      getTogetherVideo01,
      getTogetherVideo02,
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