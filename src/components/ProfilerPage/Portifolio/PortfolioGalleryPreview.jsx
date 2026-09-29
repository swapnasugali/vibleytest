import React from "react";

import {
  FiImage,
  FiPlayCircle,
} from "react-icons/fi";

import photo1 from "../../../assets/photo01.jpg";
import photo2 from "../../../assets/photo02.jpg";
import photo3 from "../../../assets/photo03.jpg";
import photo4 from "../../../assets/photo04.jpg";

import video1 from "../../../assets/Videos/wedding-video.mp4";
import video2 from "../../../assets/Videos/catering-video.mp4";

const PortfolioGalleryPreview = ({
  photos = [],
  videos = [],
}) => {
  // Default images from assets folder
  const defaultPhotos = [
    photo1,
    photo2,
    photo3,
    photo4,
  ];

  // Default videos from assets/Videos folder
  const defaultVideos = [
    video1,
    video2,
  ];

  // Get photo
  const getPhoto = (index) => {
    return (
      photos[index]?.url ||
      photos[index] ||
      defaultPhotos[index] ||
      null
    );
  };

  // Get video
  const getVideo = (index) => {
    return (
      videos[index]?.url ||
      videos[index] ||
      defaultVideos[index] ||
      null
    );
  };

  // -------------------------
  // PHOTO BOX
  // -------------------------
  const PhotoBox = ({
    index,
    orientation = "square",
  }) => {
    const photo = getPhoto(index);

    const isTall = orientation === "tall";
    const isLandscape = orientation === "landscape";

    return (
      <div
        className="
          relative
          flex
          h-full
          w-full
          items-center
          justify-center
          overflow-hidden
          bg-[#eeeeee]
        "
      >
        {photo ? (
          <img
            src={photo}
            alt={`Portfolio photo ${index + 1}`}
            className="
              h-full
              w-full
              object-cover
            "
          />
        ) : (
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
            "
          >
            <FiImage
              size={isTall ? 28 : 26}
              strokeWidth={1.5}
              className="text-[#c40000]"
            />

            <span
              className="
                mt-[4px]
                text-[12px]
                leading-none
                text-[#000000]
              "
            >
              Photo
            </span>

            <span
              className="
                mt-[13px]
                whitespace-nowrap
                text-[20px]
                leading-none
                text-[#000000]
              "
            >
              {isTall
                ? "( 1080 X 1920 )"
                : isLandscape
                ? "( 1920 X 1080 )"
                : "( 1080 X 1080 )"}
            </span>

            {!isTall && !isLandscape && (
              <span
                className="
                  mt-[4px]
                  text-[10px]
                  leading-none
                  text-[#000000]
                "
              >
                Flexible
              </span>
            )}
          </div>
        )}
      </div>
    );
  };

  // -------------------------
  // VIDEO BOX
  // -------------------------
  const VideoBox = ({ index }) => {
    const video = getVideo(index);

    return (
      <div
        className="
          relative
          flex
          h-full
          w-full
          items-center
          justify-center
          overflow-hidden
          bg-[#eeeeee]
        "
      >
        {video ? (
          <video
            src={video}
            className="
              h-full
              w-full
              object-cover
            "
            muted
            loop
            autoPlay
            playsInline
            controls={false}
          />
        ) : (
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
            "
          >
            <FiPlayCircle
              size={28}
              strokeWidth={1.5}
              className="text-[#c40000]"
            />

            <span
              className="
                mt-[4px]
                text-[12px]
                leading-none
                text-[#222222]
              "
            >
              Video
            </span>

            <span
              className="
                mt-[13px]
                whitespace-nowrap
                text-[20px]
                leading-none
                text-[#222222]
              "
            >
              ( 1080 X 1920 )
            </span>
          </div>
        )}
      </div>
    );
  };

  // -------------------------
  // MAIN GALLERY
  // -------------------------
  return (
    <div
      className="
        grid
        w-full
        aspect-[2.735]
        grid-cols-[1fr_1.77fr_1fr_1fr]
        gap-[3px]
        overflow-hidden
        bg-white
      "
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* =========================
          LEFT TALL PHOTO
      ========================== */}
      <div className="row-span-2 min-h-0">
        <PhotoBox
          index={0}
          orientation="tall"
        />
      </div>

      {/* =========================
          CENTER PHOTO SECTION
      ========================== */}
      <div
        className="
          grid
          min-h-0
          grid-rows-[1.3fr_1fr]
          gap-[3px]
        "
      >
        {/* Center Top Photo */}
        <div className="min-h-0">
          <PhotoBox
            index={1}
            orientation="landscape"
          />
        </div>

        {/* Center Bottom Two Photos */}
        <div
          className="
            grid
            min-h-0
            grid-cols-2
            gap-[3px]
          "
        >
          <div className="min-h-0">
            <PhotoBox
              index={2}
              orientation="square"
            />
          </div>

          <div className="min-h-0">
            <PhotoBox
              index={3}
              orientation="square"
            />
          </div>
        </div>
      </div>

      {/* =========================
          RIGHT VIDEO 1
      ========================== */}
      <div className="row-span-2 min-h-0">
        <VideoBox index={0} />
      </div>

      {/* =========================
          RIGHT VIDEO 2
      ========================== */}
      <div className="row-span-2 min-h-0">
        <VideoBox index={1} />
      </div>
    </div>
  );
};

export default PortfolioGalleryPreview;