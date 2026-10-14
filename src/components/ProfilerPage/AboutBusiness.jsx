
import React, { useState } from "react";
import { FaPen, FaCheck, FaTimes } from "react-icons/fa";

const AboutBusiness = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [shortStatement, setShortStatement] = useState("");
  const [briefDescription, setBriefDescription] = useState("");

  const [savedStatement, setSavedStatement] = useState("");
  const [savedDescription, setSavedDescription] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  // Open edit mode
  const handleEdit = () => {
    if (!isEditing) {
      setShortStatement(savedStatement);
      setBriefDescription(savedDescription);
      setSuccessMessage("");
    }

    setIsEditing(true);
  };

  // Save changes
  const handleSave = () => {
    setSavedStatement(shortStatement);
    setSavedDescription(briefDescription);
    setSuccessMessage("Business details saved successfully.");
    setIsEditing(false);
  };

  // Cancel changes
  const handleCancel = () => {
    setShortStatement(savedStatement);
    setBriefDescription(savedDescription);
    setSuccessMessage("");
    setIsEditing(false);
  };

  return (
    <section
      className="w-full rounded-[4px] bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* HEADER */}
      <div className="flex items-center gap-[8px] border-b border-[#e5e5e5] px-[16px] py-[9px]">
        <h2 className="text-[20px] font-semibold text-[#333]">
          ABOUT THE BUSINESS
        </h2>

        {/* EDIT ICON - ALWAYS VISIBLE */}
        <button
          type="button"
          onClick={handleEdit}
          title="Edit business details"
          aria-label="Edit business details"
          aria-pressed={isEditing}
          className={`flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[2px] border border-[#252525] transition hover:bg-gray-100 ${
            isEditing ? "bg-[#fff8e6]" : "bg-white"
          }`}
        >
          <FaPen className="text-[13px] text-[#d99d00]" />
        </button>

        {isEditing && (
          <span className="text-[11px] font-medium text-[#970000]">
            Editing
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="px-[16px] pb-[18px] pt-[9px]">
        {/* SHORT STATEMENT */}
        <div>
          <label className="mb-[5px] block text-[18px] font-semibold text-[#333]">
            Short Statement
          </label>

          <input
            type="text"
            value={shortStatement}
            onChange={(e) => {
              setShortStatement(e.target.value);
              setSuccessMessage("");
            }}
            readOnly={!isEditing}
            placeholder="Ex : Creating unforgettable moments since 2010."
            className={`h-[40px] w-full rounded-[4px] border border-[#cfcfcf] px-[10px] text-[12px] outline-none placeholder:text-[#474747] ${
              isEditing
                ? "bg-white focus:border-[#d99d00]"
                : "cursor-default bg-gray-50"
            }`}
          />
        </div>

        {/* BRIEF DESCRIPTION */}
        <div className="mt-[10px]">
          <label className="mb-[5px] block text-[18px] font-semibold text-[#2E2E2E]">
            Brief Description
          </label>

          <textarea
            value={briefDescription}
            onChange={(e) => {
              setBriefDescription(e.target.value);
              setSuccessMessage("");
            }}
            readOnly={!isEditing}
            placeholder="Write about your business in brief for client overview"
            className={`h-[60px] w-full resize-none rounded-[4px] border border-[#cfcfcf] px-[10px] py-[8px] text-[12px] outline-none placeholder:text-[#474747] ${
              isEditing
                ? "bg-white focus:border-[#d99d00]"
                : "cursor-default bg-gray-50"
            }`}
          />
        </div>

        {/* SAVE AND CANCEL BUTTONS */}
        {isEditing && (
          <div className="mt-[12px] flex justify-end gap-[8px]">
            <button
              type="button"
              onClick={handleCancel}
              className="flex items-center gap-[6px] rounded-[4px] border border-[#cfcfcf] px-[12px] py-[7px] text-[12px] text-[#333] hover:bg-gray-100"
            >
              <FaTimes />
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-[6px] rounded-[4px] bg-[#d99d00] px-[12px] py-[7px] text-[12px] font-medium text-white hover:bg-[#bd8900]"
            >
              <FaCheck />
              Save
            </button>
          </div>
        )}

        {/* SUCCESS MESSAGE */}
        {successMessage && !isEditing && (
          <p
            role="status"
            className="mt-[10px] text-right text-[12px] text-green-600"
          >
            {successMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default AboutBusiness;
