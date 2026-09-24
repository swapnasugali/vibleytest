import React, { useState } from "react";
import { FaPen } from "react-icons/fa";

const ContactPreferences = () => {

  // =====================================================
  // TOGGLE STATES
  // =====================================================

  const [showPhonePublicly, setShowPhonePublicly] = useState(true);

  const [whatsappDirect, setWhatsappDirect] = useState(true);


  return (
    <section className="w-full rounded-[4px] bg-white">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="flex items-center gap-[5px] border-b border-[#e5e5e5] px-[16px] py-[9px]">

        <h2 className="text-[20px] font-semibold text-[#333]">
          CONTACT PREFERENCES
        </h2>

        <FaPen className="text-[#d99d00]" />

      </div>


      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="px-[16px] pb-[18px] pt-[9px]">

        {/* ================================================= */}
        {/* PHONE NUMBERS */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2">

          {/* WHATSAPP */}

          <div>

            <label className="mb-[5px] block text-[18px] font-semibold text-[#333]">
              Phone Number ( Whatsapp )
            </label>

            <input
              type="text"
              placeholder="+91 93761 34217"
              className="
                h-[40px]
                w-full
                rounded-[4px]
                border
                border-[#cfcfcf]
                px-[10px]
                text-[12px]
                outline-none
                placeholder:text-[#6D6D6D]
              "
            />

          </div>


          {/* SECONDARY */}

          <div>

            <label className="mb-[5px] block text-[18px] font-semibold text-[#333]">

              Secondary Phone Number

              <span className="ml-[3px] text-[13px] font-normal italic text-[#888]">
                (Optional)
              </span>

            </label>

            <input
              type="text"
              placeholder="+91 6501213242"
              className="
                h-[40px]
                w-full
                rounded-[4px]
                border
                border-[#cfcfcf]
                px-[10px]
                text-[12px]
                outline-none
                placeholder:text-[#6D6D6D]
              "
            />

          </div>

        </div>


        {/* ================================================= */}
        {/* EMAIL */}
        {/* ================================================= */}

        <div className="mt-[10px]">

          <label className="mb-[5px] block text-[18px] font-semibold text-[#333]">
            Contact Email
          </label>

          <input
            type="email"
            placeholder="Enter contact email"
            className="
              h-[40px]
              w-full
              rounded-[4px]
              border
              border-[#cfcfcf]
              px-[10px]
              text-[12px]
              outline-none
              placeholder:text-[#6D6D6D]
            "
          />

        </div>


        {/* ================================================= */}
        {/* DIVIDER */}
        {/* ================================================= */}

        <div className="my-[10px] border-t border-[#eeeeee]" />


        {/* ================================================= */}
        {/* PRIMARY CONTACT */}
        {/* ================================================= */}

        <div className="flex flex-wrap items-center gap-[10px]">

          <span className="text-[18px] font-semibold text-[#333]">
            Primary Contact method Preference
          </span>

          <label className="flex items-center gap-[3px] text-[18px]">
            Call

            <input
              type="radio"
              name="contactMethod"
              defaultChecked
              className="h-[15px] w-[15px] accent-[#970000] cursor-pointer "
            />

          </label>


          <label className="flex items-center gap-[3px] text-[18px]">
            Chat

            <input
              type="radio"
              name="contactMethod"
              className="h-[15px] w-[15px] accent-[#970000] cursor-pointer "
            />

          </label>


          <label className="flex items-center gap-[3px] text-[18px]">
            Email

            <input
              type="radio"
              name="contactMethod"
              className="h-[15px] w-[15px] accent-[#970000] cursor-pointer "
            />

          </label>

        </div>


        {/* ================================================= */}
        {/* PHONE PUBLIC */}
        {/* ================================================= */}

        <div className="mt-[10px] flex items-center justify-between gap-[10px] sm:justify-start">

          <span className="text-[18px] font-semibold text-[#333]">
            Show Phone Number Publicly
          </span>


          {/* PHONE PUBLIC TOGGLE */}

          <button
            type="button"
            onClick={() =>
              setShowPhonePublicly(!showPhonePublicly)
            }
            className={`
              relative
              h-[18px]
              w-[28px]
              cursor-pointer
              rounded-full
              ${
                showPhonePublicly
                  ? "bg-[#a90000]"
                  : "bg-[#cfcfcf]"
              }
            `}
          >

            <span
              className={`
                absolute
                top-[3px]
                h-[12px]
                w-[12px]
                rounded-full
                bg-white
                ${
                  showPhonePublicly
                    ? "right-[2px]"
                    : "left-[2px]"
                }
              `}
            />

          </button>

        </div>


        {/* ================================================= */}
        {/* WHATSAPP DIRECT */}
        {/* ================================================= */}

        <div className="mt-[8px] flex items-center justify-between gap-[10px] sm:justify-start">

          <span className="text-[18px] font-semibold text-[#333]">
            Enabled Whatsapp Contact directly
          </span>


          {/* WHATSAPP TOGGLE */}

          <button
            type="button"
            onClick={() =>
              setWhatsappDirect(!whatsappDirect)
            }
            className={`
              relative
              h-[18px]
              w-[28px]
              cursor-pointer
              rounded-full
              ${
                whatsappDirect
                  ? "bg-[#a90000]"
                  : "bg-[#cfcfcf]"
              }
            `}
          >

            <span
              className={`
                absolute
                top-[3px]
                h-[12px]
                w-[12px]
                rounded-full
                bg-white
                ${
                  whatsappDirect
                    ? "right-[2px]"
                    : "left-[2px]"
                }
              `}
            />

          </button>

        </div>


        {/* ================================================= */}
        {/* AUTO RESPONSE */}
        {/* ================================================= */}

        <div className="mt-[14px]">

          <label className="mb-[5px] block text-[18px] text-[#C1C1C1]">
            Auto - response Message in Whatsapp
          </label>

          <textarea
            placeholder="Write about your business in brief for client overview"
            className="
              h-[50px]
              w-full
              resize-none
              rounded-[4px]
              border
              border-[#cfcfcf]
              px-[10px]
              py-[8px]
              text-[12px]
              outline-none
              placeholder:text-[#6D6D6D]
            "
          />

        </div>

      </div>

    </section>
  );
};

export default ContactPreferences;