import React from "react";

const PricingField = ({
  label,
  required = false,
  optional = false,
  children,
  className = "",
  labelClassName = "",
  labelSize = "10px",
}) => {
  return (
    <div className={className}>
      <label
        className={`
          block
          font-medium
          leading-[24px]
          text-[#333333]
          ${labelClassName}
        `}
        style={{
          fontSize: labelSize,
        }}
      >
        {label}

        {required && (
          <span className="text-[#d00000]">
            *
          </span>
        )}

        {optional && (
          <span className="ml-[4px] text-[12px] italic text-[#777777]">
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
  text-[14px]
  text-[#555555]
  outline-none
  placeholder:text-[14px]
  placeholder:text-[#9e9e9e]
  focus:border-[#c40000]
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
  text-[14px]
  text-[#555555]
  outline-none
  focus:border-[#c40000]
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
  text-[14px]
  leading-[20px]
  text-[#555555]
  outline-none
  placeholder:text-[14px]
  placeholder:text-[#9e9e9e]
  focus:border-[#c40000]
`;


export default PricingField;