import React from "react";

const PricingActionButtons = ({
  primaryText,
}) => {

  return (
    <div
      className="
        flex
        items-center
        justify-end
        gap-[18px]
        pt-[18px]
      "
    >

      <button
        type="button"
        className="
          text-[9px]
          font-semibold
          text-[#c40000]
          sm:text-[10px]
        "
      >
        Save Draft
      </button>


      <button
        type="button"
        className="
          h-[30px]
          rounded-[4px]
          bg-[#292929]
          px-[18px]
          text-[9px]
          font-semibold
          text-white
          sm:text-[10px]
        "
      >
        {primaryText}
      </button>

    </div>
  );
};

export default PricingActionButtons;