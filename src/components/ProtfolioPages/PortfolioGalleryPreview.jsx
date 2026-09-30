import React from "react";

import {
  FiPlay,
  FiImage,
} from "react-icons/fi";


const PortfolioGalleryPreview = ({
  photos = [],
  videos = [],
}) => {

  const safePhotos =
    Array.isArray(photos)
      ? photos
      : [];

  const safeVideos =
    Array.isArray(videos)
      ? videos
      : [];


  const getMediaUrl = (media) => {

    if (!media) {
      return "";
    }

    if (typeof media === "string") {
      return media;
    }

    return media.url || "";
  };


  const allMedia = [
    ...safePhotos.map(
      (photo) => ({
        type: "photo",
        url: getMediaUrl(photo),
      })
    ),

    ...safeVideos.map(
      (video) => ({
        type: "video",
        url: getMediaUrl(video),
      })
    ),
  ];


  if (allMedia.length === 0) {
    return (
      <div
        className="
          flex
          h-[180px]
          w-full
          items-center
          justify-center
          rounded-[6px]
          bg-[#f4f4f4]
          text-[14px]
          text-[#888888]
        "
      >
        No media available
      </div>
    );
  }


  return (
    <div
      className="
        grid
        w-full
        grid-cols-4
        gap-[8px]
      "
    >

      {allMedia
        .slice(0, 6)
        .map((media, index) => (

          <div
            key={`${media.type}-${index}`}
            className="
              relative
              h-[190px]
              overflow-hidden
              rounded-[5px]
              bg-[#eeeeee]
            "
          >

            {/* =================================================
                IMAGE
            ================================================= */}

            {media.type === "photo" &&
            media.url ? (

              <img
                src={media.url}
                alt={`Portfolio ${index + 1}`}
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

            ) : null}


            {/* =================================================
                VIDEO
            ================================================= */}

            {media.type === "video" &&
            media.url ? (

              <video
                src={media.url}
                className="
                  h-full
                  w-full
                  object-cover
                "
                muted
                playsInline
                controls
              />

            ) : null}


            {/* =================================================
                EMPTY MEDIA
            ================================================= */}

            {!media.url && (
              <div
                className="
                  flex
                  h-full
                  w-full
                  items-center
                  justify-center
                  bg-[#f1f1f1]
                "
              >
                <FiImage
                  size={28}
                  className="text-[#999999]"
                />
              </div>
            )}


            {/* =================================================
                VIDEO LABEL
            ================================================= */}

            {media.type === "video" &&
              media.url && (
                <span
                  className="
                    absolute
                    left-[8px]
                    top-[8px]
                    flex
                    items-center
                    gap-[4px]
                    rounded-[3px]
                    bg-black/70
                    px-[7px]
                    py-[4px]
                    text-[11px]
                    font-medium
                    text-white
                  "
                >

                  <FiPlay
                    size={11}
                    fill="white"
                  />

                  Video

                </span>
              )}

          </div>

        ))}

    </div>
  );
};

export default PortfolioGalleryPreview;