import React from "react";
import { FaTimes } from "react-icons/fa";

const ThumbnailBadgeTextOverlay = ({ onClose }) => {
  return (
    <div className="w-full overflow-hidden rounded-[8px] border border-gray-300 bg-white shadow-sm">

      {/* HEADER */}
      <div className="flex h-[39px] items-center justify-between border-b border-gray-200 bg-white px-[13px]">

        <h2 className="text-[9px] font-bold uppercase tracking-[0.1px] text-[#171717]">
          Thumbnail Badge Text
        </h2>

        <button
          type="button"
          onClick={onClose}
          className="flex h-[19px] w-[19px] items-center justify-center rounded-full border-[1.5px] border-[#d00000] bg-white text-[#d00000] cursor-pointer"
        >
          <FaTimes className="text-[8px]" />
        </button>

      </div>

      {/* CONTENT */}
      <div className="relative h-[200px] bg-white">

        <p className="absolute left-0 right-0 top-[10px] px-4 text-center text-[8px] leading-[13px] text-[#555]">
          Manage the badge text in the landing page thumbnail previews.
        </p>

        <button
          type="button"
          className="absolute bottom-[12px] left-1/2 -translate-x-1/2 bg-transparent text-[8px] font-semibold text-[#333] underline"
        >
          Edit
        </button>

      </div>

    </div>
  );
};

export default ThumbnailBadgeTextOverlay;