import React from "react";
import {
  FiImage,
  FiPlayCircle,
} from "react-icons/fi";

const PortfolioGalleryPreview = ({
  photos = [],
  videos = [],
}) => {
  const getPhoto = (index) => {
    return photos[index]?.url || null;
  };

  const getVideo = (index) => {
    return videos[index] || null;
  };

  return (
    <div
      className="
        grid
        h-[255px]
        grid-cols-[1fr_2fr_1fr_1fr]
        grid-rows-[1.6fr_1fr]
        gap-[4px]
        overflow-hidden
        bg-white
      "
    >

      {/* =========================================================
          LEFT VERTICAL PHOTO
      ========================================================= */}
      <div className="row-span-2 flex items-center justify-center bg-[#eeeeee]">

        {getPhoto(0) ? (
          <img
            src={getPhoto(0)}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center">

            <FiImage className="h-[25px] w-[25px] text-[#c00000]" />

            <span className="mt-1 text-[9px] text-[#222]">
              Photo
            </span>

            <span className="mt-3 text-[11px] text-[#222]">
              ( 1080 X 1920 )
            </span>

          </div>
        )}

      </div>

      {/* =========================================================
          CENTER LARGE PHOTO
      ========================================================= */}
      <div className="flex items-center justify-center bg-[#eeeeee]">

        {getPhoto(1) ? (
          <img
            src={getPhoto(1)}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center">

            <FiImage className="h-[25px] w-[25px] text-[#c00000]" />

            <span className="mt-1 text-[9px] text-[#222]">
              Photo
            </span>

            <span className="mt-3 text-[11px] text-[#222]">
              ( 1920 X 1080 )
            </span>

          </div>
        )}

      </div>

      {/* =========================================================
          RIGHT VIDEO 1
      ========================================================= */}
      <div className="row-span-2 flex items-center justify-center bg-[#eeeeee]">

        {getVideo(0) ? (
          <video
            src={getVideo(0)}
            className="h-full w-full object-cover"
            controls
          />
        ) : (
          <div className="flex flex-col items-center">

            <FiPlayCircle className="h-[25px] w-[25px] text-[#c00000]" />

            <span className="mt-1 text-[9px] text-[#222]">
              Video
            </span>

            <span className="mt-3 text-[11px] text-[#222]">
              ( 1080 X 1920 )
            </span>

          </div>
        )}

      </div>

      {/* =========================================================
          RIGHT VIDEO 2
      ========================================================= */}
      <div className="row-span-2 flex items-center justify-center bg-[#eeeeee]">

        {getVideo(1) ? (
          <video
            src={getVideo(1)}
            className="h-full w-full object-cover"
            controls
          />
        ) : (
          <div className="flex flex-col items-center">

            <FiPlayCircle className="h-[25px] w-[25px] text-[#c00000]" />

            <span className="mt-1 text-[9px] text-[#222]">
              Video
            </span>

            <span className="mt-3 text-[11px] text-[#222]">
              ( 1080 X 1920 )
            </span>

          </div>
        )}

      </div>

      {/* =========================================================
          BOTTOM PHOTO 1
      ========================================================= */}
      <div className="flex items-center justify-center bg-[#eeeeee]">

        {getPhoto(2) ? (
          <img
            src={getPhoto(2)}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center">

            <FiImage className="h-[22px] w-[22px] text-[#c00000]" />

            <span className="mt-1 text-[8px] text-[#222]">
              Photo
            </span>

            <span className="mt-2 text-[10px] text-[#222]">
              ( 1080 X 1080 )
            </span>

            <span className="mt-1 text-[6px] text-[#222]">
              Flexible
            </span>

          </div>
        )}

      </div>

      {/* =========================================================
          BOTTOM PHOTO 2
      ========================================================= */}
      <div className="flex items-center justify-center bg-[#eeeeee]">

        {getPhoto(3) ? (
          <img
            src={getPhoto(3)}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center">

            <FiImage className="h-[22px] w-[22px] text-[#c00000]" />

            <span className="mt-1 text-[8px] text-[#222]">
              Photo
            </span>

            <span className="mt-2 text-[10px] text-[#222]">
              ( 1080 X 1080 )
            </span>

            <span className="mt-1 text-[6px] text-[#222]">
              Flexible
            </span>

          </div>
        )}

      </div>

    </div>
  );
};

export default PortfolioGalleryPreview;