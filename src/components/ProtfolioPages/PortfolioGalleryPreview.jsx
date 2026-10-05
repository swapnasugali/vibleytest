import React, { useRef, useState } from "react";
import {
  FiImage,
  FiPlay,
  FiPause,
} from "react-icons/fi";

/* =========================================================
   MEDIA URL
========================================================= */

const getMediaUrl = (media) => {
  if (!media) {
    return "";
  }

  if (typeof media === "string") {
    return media;
  }

  if (media.url) {
    return media.url;
  }

  if (media.file instanceof File) {
    return URL.createObjectURL(
      media.file
    );
  }

  if (media instanceof File) {
    return URL.createObjectURL(media);
  }

  return "";
};

/* =========================================================
   PHOTO BOX
========================================================= */

const PhotoBox = ({ photo }) => {
  const url = getMediaUrl(photo);

  return (
    <div
      className="
        relative
        h-full
        w-full
        overflow-hidden
        rounded-[6px]
        bg-[#F4F4F4]
      "
    >
      {url ? (
        <img
          src={url}
          alt="Portfolio"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />
      ) : (
        <div
          className="
            flex
            h-full
            w-full
            items-center
            justify-center
          "
        >
          <FiImage
            className="
              text-[28px]
              text-[#B8B8B8]
            "
          />
        </div>
      )}
    </div>
  );
};

/* =========================================================
   VIDEO BOX
========================================================= */

const VideoBox = ({ video }) => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const url = getMediaUrl(video);

  const handleToggle = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const videoElement =
      videoRef.current;

    if (!videoElement || !url) {
      return;
    }

    try {
      if (videoElement.paused) {
        await videoElement.play();
      } else {
        videoElement.pause();
      }
    } catch (error) {
      console.error(
        "Video play error:",
        error
      );
    }
  };

  return (
    <div
      className="
        relative
        h-full
        w-full
        overflow-hidden
        rounded-[6px]
        bg-black
      "
    >
      {url ? (
        <video
          ref={videoRef}
          src={url}
          muted
          playsInline
          preload="metadata"
          onPlay={() =>
            setIsPlaying(true)
          }
          onPause={() =>
            setIsPlaying(false)
          }
          onEnded={() =>
            setIsPlaying(false)
          }
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />
      ) : (
        <div
          className="
            flex
            h-full
            w-full
            items-center
            justify-center
            bg-[#F4F4F4]
          "
        >
          <FiPlay
            className="
              text-[28px]
              text-[#B8B8B8]
            "
          />
        </div>
      )}

      {/* PLAY / PAUSE */}

      {url && (
        <button
          type="button"
          onClick={handleToggle}
          aria-label={
            isPlaying
              ? "Pause video"
              : "Play video"
          }
          className="
            absolute
            left-1/2
            top-1/2
            z-30
            flex
            h-[40px]
            w-[40px]
            -translate-x-1/2
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border-0
            bg-white/90
            p-0
            shadow-sm
            transition-all
            duration-200
            hover:scale-105
            hover:bg-white
          "
        >
          {isPlaying ? (
            <FiPause
              className="
                h-[16px]
                w-[16px]
                text-black
              "
            />
          ) : (
            <FiPlay
              className="
                ml-[2px]
                h-[16px]
                w-[16px]
                text-black
              "
            />
          )}
        </button>
      )}
    </div>
  );
};

/* =========================================================
   EMPTY MEDIA BOX
========================================================= */

const EmptyMediaBox = () => {
  return (
    <div
      className="
        flex
        h-full
        w-full
        items-center
        justify-center
        rounded-[6px]
        bg-[#F4F4F4]
      "
    >
      <FiImage
        className="
          text-[28px]
          text-[#B8B8B8]
        "
      />
    </div>
  );
};

/* =========================================================
   PORTFOLIO GALLERY
========================================================= */

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

  const photo1 = safePhotos[0];
  const photo2 = safePhotos[1];
  const photo3 = safePhotos[2];
  const photo4 = safePhotos[3];

  const video1 = safeVideos[0];
  const video2 = safeVideos[1];

  return (
    <div className="w-full min-w-0">

      {/* ===================================================
          DESKTOP GALLERY
      =================================================== */}

      <div
        className="
          hidden
          h-[360px]
          w-full
          grid-cols-[1fr_1.75fr_1.75fr_1fr_1fr]
          grid-rows-[1fr_1fr]
          gap-[4px]
          overflow-hidden
          rounded-[6px]
          md:grid
        "
      >

        {/* PHOTO 1 */}

        <div
          className="
            col-start-1
            row-span-2
            min-h-0
            h-full
            w-full
          "
        >
          {photo1 ? (
            <PhotoBox photo={photo1} />
          ) : (
            <EmptyMediaBox />
          )}
        </div>

        {/* PHOTO 2 */}

        <div
          className="
            col-start-2
            col-span-2
            row-start-1
            min-h-0
            h-full
            w-full
          "
        >
          {photo2 ? (
            <PhotoBox photo={photo2} />
          ) : (
            <EmptyMediaBox />
          )}
        </div>

        {/* PHOTO 3 */}

        <div
          className="
            col-start-2
            row-start-2
            min-h-0
            h-full
            w-full
          "
        >
          {photo3 ? (
            <PhotoBox photo={photo3} />
          ) : (
            <EmptyMediaBox />
          )}
        </div>

        {/* PHOTO 4 */}

        <div
          className="
            col-start-3
            row-start-2
            min-h-0
            h-full
            w-full
          "
        >
          {photo4 ? (
            <PhotoBox photo={photo4} />
          ) : (
            <EmptyMediaBox />
          )}
        </div>

        {/* VIDEO 1 */}

        <div
          className="
            col-start-4
            row-span-2
            min-h-0
            h-full
            w-full
          "
        >
          {video1 ? (
            <VideoBox video={video1} />
          ) : (
            <EmptyMediaBox />
          )}
        </div>

        {/* VIDEO 2 */}

        <div
          className="
            col-start-5
            row-span-2
            min-h-0
            h-full
            w-full
          "
        >
          {video2 ? (
            <VideoBox video={video2} />
          ) : (
            <EmptyMediaBox />
          )}
        </div>
      </div>

      {/* ===================================================
          MOBILE / TABLET GALLERY
      =================================================== */}

      <div
        className="
          grid
          grid-cols-2
          gap-[4px]
          md:hidden
        "
      >

        {/* PHOTO 1 */}

        <div className="h-[190px] w-full">
          {photo1 ? (
            <PhotoBox photo={photo1} />
          ) : (
            <EmptyMediaBox />
          )}
        </div>

        {/* PHOTO 2 */}

        <div className="h-[190px] w-full">
          {photo2 ? (
            <PhotoBox photo={photo2} />
          ) : (
            <EmptyMediaBox />
          )}
        </div>

        {/* PHOTO 3 */}

        <div className="h-[190px] w-full">
          {photo3 ? (
            <PhotoBox photo={photo3} />
          ) : (
            <EmptyMediaBox />
          )}
        </div>

        {/* PHOTO 4 */}

        <div className="h-[190px] w-full">
          {photo4 ? (
            <PhotoBox photo={photo4} />
          ) : (
            <EmptyMediaBox />
          )}
        </div>

        {/* VIDEO 1 */}

        <div className="h-[190px] w-full">
          {video1 ? (
            <VideoBox video={video1} />
          ) : (
            <EmptyMediaBox />
          )}
        </div>

        {/* VIDEO 2 */}

        <div className="h-[190px] w-full">
          {video2 ? (
            <VideoBox video={video2} />
          ) : (
            <EmptyMediaBox />
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGalleryPreview;