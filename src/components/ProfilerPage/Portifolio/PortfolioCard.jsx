import React from "react";
import {
  FiEdit2,
  FiEye,
  FiTrash2,
  FiImage,
  FiPlayCircle,
} from "react-icons/fi";

import PortfolioGalleryPreview from "./PortfolioGalleryPreview";

const PortfolioCard = ({ section }) => {
  return (
    <article className="overflow-hidden rounded-[7px] bg-white">

      {/* =========================================================
          CARD HEADER
      ========================================================= */}
      <div className="flex items-start justify-between px-[28px] pb-3 pt-[17px]">

        {/* LEFT */}
        <div>

          <div className="flex flex-wrap items-center gap-2">

            <h2 className="text-[15px] font-medium text-[#333]">
              {section.title}
            </h2>

            {section.featured && (
              <span
                className="
                  rounded-[3px]
                  bg-[#f5ad00]
                  px-[8px]
                  py-[4px]
                  text-[8px]
                  font-semibold
                  text-white
                "
              >
                ★ Featured
              </span>
            )}

          </div>

          <div className="mt-[8px] flex items-center gap-1">

            <span
              className="
                rounded-[3px]
                bg-[#222]
                px-[10px]
                py-[4px]
                text-[8px]
                font-medium
                text-white
              "
            >
              <FiImage className="mr-1 inline h-[9px] w-[9px]" />
              {section.serviceType}
            </span>

            <span className="text-[8px] font-medium text-[#333]">
              {section.eventType}
            </span>

          </div>

        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-5">

          <button
            type="button"
            className="cursor-pointer text-[#222] hover:text-[#970000]"
          >
            <FiEdit2 className="h-[17px] w-[17px]" />
          </button>

          <button
            type="button"
            className="cursor-pointer text-[#650000] hover:text-[#970000]"
          >
            <FiTrash2 className="h-[17px] w-[17px]" />
          </button>

          <button
            type="button"
            className="cursor-pointer text-[#222] hover:text-[#970000]"
          >
            <FiEye className="h-[18px] w-[18px]" />
          </button>

        </div>

      </div>

      {/* =========================================================
          GALLERY
      ========================================================= */}
      <div className="px-[28px] pb-[17px]">

        <PortfolioGalleryPreview
          photos={section.photos}
          videos={section.videos}
        />

      </div>

    </article>
  );
};

export default PortfolioCard;