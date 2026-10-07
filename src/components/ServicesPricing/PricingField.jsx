import React from "react";

const PricingField = ({
  label,
  required = false,
  optional = false,
  children,
  className = "",
  labelClassName = "",
  labelSize = "text-[18px]",
}) => {
  return (
    <div className={className}>
      <label
        className={`
          block
          leading-[24px]
          text-[#333333]
          ${labelSize}
          ${labelClassName}
        `}
      >
        {label}

        {required && (
          <span className="ml-[2px] text-[#d00000]">
            *
          </span>
        )}

        {optional && (
          <span
            className="
              ml-[5px]
              text-[14px]
              font-normal
              italic
              text-[#777777]
            "
          >
            (Optional)
          </span>
        )}
      </label>

      <div className="mt-[6px]">
        {children}
      </div>
    </div>
  );
};


/* =========================================================
   INPUT
========================================================= */

export const inputClassName = `
  h-[45px]
  w-full
  rounded-[3px]
  border
  border-[#cfcfcf]
  bg-white
  px-[12px]
  text-[16px]
  font-normal
  text-[#555555]
  outline-none
  placeholder:text-[15px]
  placeholder:font-normal
  placeholder:text-[#9e9e9e]
  focus:border-[#c40000]
  focus:ring-0
`;


/* =========================================================
   SELECT
========================================================= */

export const selectClassName = `
  h-[45px]
  w-full
  rounded-[3px]
  border
  border-[#cfcfcf]
  bg-white
  px-[12px]
  text-[16px]
  font-normal
  text-[#555555]
  outline-none
  focus:border-[#c40000]
  focus:ring-0
`;


/* =========================================================
   TEXTAREA
========================================================= */

export const textareaClassName = `
  min-h-[100px]
  w-full
  resize-none
  rounded-[3px]
  border
  border-[#cfcfcf]
  bg-white
  px-[12px]
  py-[10px]
  text-[16px]
  font-normal
  leading-[22px]
  text-[#555555]
  outline-none
  placeholder:text-[15px]
  placeholder:font-normal
  placeholder:text-[#9e9e9e]
  focus:border-[#c40000]
  focus:ring-0
`;


export default PricingField;