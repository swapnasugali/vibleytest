
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { FaFileAlt, FaPen } from "react-icons/fa";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_FILES = 10;

const CERTIFICATION_TYPES = [
  "pdf",
  "doc",
  "docx",
  "jpg",
  "jpeg",
  "png",
];

const initialCertifications = [
  {
    name: "Cambridge - Study Of Photography Completion",
    file: null,
  },
];

const initialAwards = [
  {
    name: "Best Candid Photography By Dada Saheb Palke.Pdf",
    file: null,
  },
];

const CredibilityForTrustSignals = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Total Events
  const [totalEvents, setTotalEvents] = useState("163");
  const [savedTotalEvents, setSavedTotalEvents] = useState("163");
  const [totalEventsError, setTotalEventsError] = useState("");

  // Certification files
  const [certifications, setCertifications] = useState(
    initialCertifications
  );

  const [savedCertifications, setSavedCertifications] = useState(
    initialCertifications
  );

  // Award files
  const [awards, setAwards] = useState(initialAwards);

  const [savedAwards, setSavedAwards] = useState(initialAwards);

  // Error and success messages
  const [certificationError, setCertificationError] = useState("");
  const [awardError, setAwardError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Open edit mode
  const handleEdit = () => {
    if (isEditing) return;

    setTotalEvents(savedTotalEvents);

    setCertifications([...savedCertifications]);
    setAwards([...savedAwards]);

    setTotalEventsError("");
    setCertificationError("");
    setAwardError("");
    setSuccessMessage("");

    setIsEditing(true);
  };

  // Total events: numbers only
  const handleTotalEventsChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");

    setTotalEvents(value);
    setTotalEventsError("");
    setSuccessMessage("");
  };

  // Validate and add uploaded files
  const validateAndAddFiles = (
    event,
    currentFiles,
    setFiles,
    setError,
    allowedTypes
  ) => {
    const selectedFiles = Array.from(event.target.files || []);

    // Allow selecting the same file again
    event.target.value = "";

    if (selectedFiles.length === 0) return;

    const errors = [];
    const validFiles = [];

    const existingNames = new Set(
      currentFiles.map((item) => item.name.toLowerCase())
    );

    selectedFiles.forEach((file) => {
      const extension = file.name.split(".").pop()?.toLowerCase();

      // File type validation
      if (!extension || !allowedTypes.includes(extension)) {
        errors.push(
          `${file.name}: Invalid file type. Allowed: ${allowedTypes.join(", ")}.`
        );
        return;
      }

      // Empty file validation
      if (file.size === 0) {
        errors.push(`${file.name}: Empty files are not allowed.`);
        return;
      }

      // File size validation
      if (file.size > MAX_FILE_SIZE) {
        errors.push(`${file.name}: File size must not exceed 5 MB.`);
        return;
      }

      // Duplicate filename validation
      const normalizedName = file.name.toLowerCase();

      if (
        existingNames.has(normalizedName) ||
        validFiles.some(
          (item) => item.name.toLowerCase() === normalizedName
        )
      ) {
        errors.push(`${file.name}: This filename already exists.`);
        return;
      }

      validFiles.push({
        name: file.name,
        file: file,
      });
    });

    // Maximum 10 files validation
    const remainingSlots = MAX_FILES - currentFiles.length;

    if (remainingSlots <= 0) {
      setError(`Maximum ${MAX_FILES} files allowed.`);
      setSuccessMessage("");
      return;
    }

    if (validFiles.length > remainingSlots) {
      errors.push(
        `You can add only ${remainingSlots} more file(s). Maximum ${MAX_FILES} files allowed.`
      );
    }

    const filesToAdd = validFiles.slice(0, remainingSlots);

    if (filesToAdd.length > 0) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...filesToAdd,
      ]);
    }

    setError(errors.length > 0 ? errors.join(" ") : "");
    setSuccessMessage("");
  };

  // Certification upload
  const handleCertificationUpload = (event) => {
    validateAndAddFiles(
      event,
      certifications,
      setCertifications,
      setCertificationError,
      CERTIFICATION_TYPES
    );
  };

  // Award upload - PDF only
  const handleAwardUpload = (event) => {
    validateAndAddFiles(
      event,
      awards,
      setAwards,
      setAwardError,
      ["pdf"]
    );
  };

  // Remove certification
  const handleRemoveCertification = (indexToRemove) => {
    setCertifications((previousFiles) =>
      previousFiles.filter((_, index) => index !== indexToRemove)
    );

    setCertificationError("");
    setSuccessMessage("");
  };

  // Remove award
  const handleRemoveAward = (indexToRemove) => {
    setAwards((previousFiles) =>
      previousFiles.filter((_, index) => index !== indexToRemove)
    );

    setAwardError("");
    setSuccessMessage("");
  };

  // Save changes
  const handleSave = () => {
    if (totalEvents.trim() === "") {
      setTotalEventsError("Total Events Handled is required.");
      return;
    }

    if (!/^\d+$/.test(totalEvents)) {
      setTotalEventsError("Please enter numbers only.");
      return;
    }

    const updatedCertifications = [...certifications];
    const updatedAwards = [...awards];

    setSavedTotalEvents(totalEvents);
    setSavedCertifications(updatedCertifications);
    setSavedAwards(updatedAwards);

    setTotalEventsError("");
    setCertificationError("");
    setAwardError("");

    console.log("Credibility Details:", {
      totalEvents,
      certifications: updatedCertifications,
      awards: updatedAwards,
    });

    setIsEditing(false);
    setSuccessMessage("Changes saved successfully.");
  };

  // Cancel changes
  const handleCancel = () => {
    setTotalEvents(savedTotalEvents);

    setCertifications([...savedCertifications]);
    setAwards([...savedAwards]);

    setTotalEventsError("");
    setCertificationError("");
    setAwardError("");
    setSuccessMessage("");

    setIsEditing(false);
  };

  // Reusable upload button
  const UploadButton = ({
    accept,
    onChange,
    disabled,
    label,
  }) => (
    <label
      className={`
        flex h-[25px] w-fit shrink-0 items-center gap-[5px]
        rounded-[4px] border border-[#cfcfcf]
        bg-white px-[10px] text-[12px] text-[#6D6D6D]
        shadow-sm
        ${
          isEditing && !disabled
            ? "cursor-pointer hover:bg-gray-50"
            : "cursor-not-allowed opacity-50"
        }
      `}
    >
      <FiUpload className="text-[12px] text-black" />

      {label}

      <input
        type="file"
        accept={accept}
        multiple
        disabled={!isEditing || disabled}
        onChange={onChange}
        className="hidden"
      />
    </label>
  );

  return (
    <section
      className="w-full rounded-[4px] bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* HEADER */}
      <div className="flex items-center gap-[5px] border-b border-[#eeeeee] px-[16px] py-[9px]">
        <h2 className="text-[20px] font-semibold text-[#333]">
          CREDIBILITY FOR TRUST SIGNALS
        </h2>

        <button
          type="button"
          onClick={handleEdit}
          disabled={isEditing}
          title="Edit credibility details"
          aria-label="Edit credibility details"
          aria-pressed={isEditing}
          className={`flex h-[24px] w-[24px] items-center justify-center rounded-[3px] border border-transparent transition hover:border-[#e5e5e5] hover:bg-gray-100 ${
            isEditing
              ? "cursor-default bg-[#fff8e6]"
              : "cursor-pointer bg-transparent"
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
      <div className="px-[16px] pb-[14px] pt-[10px]">

        {/* TOTAL EVENTS HANDLED */}
        <div className="mb-[10px]">
          <label
            htmlFor="totalEvents"
            className="mb-[5px] block text-[18px] font-semibold text-[#252525]"
          >
            Total Events Handled
          </label>

          <div className="flex h-[30px] w-full items-center rounded-[4px] border border-[#cfcfcf] px-[10px]">
            {isEditing ? (
              <input
                id="totalEvents"
                type="text"
                inputMode="numeric"
                value={totalEvents}
                onChange={handleTotalEventsChange}
                placeholder="163"
                className="h-full w-full bg-transparent text-[14px] text-[#6D6D6D] outline-none"
              />
            ) : (
              <span className="text-[14px] text-[#6D6D6D]">
                {savedTotalEvents}
              </span>
            )}

            <span className="ml-[12px] shrink-0 text-[12px] italic text-[#777]">
              ( Enter total events handled )
            </span>
          </div>

          {totalEventsError && (
            <p role="alert" className="mt-1 text-[12px] text-[#b42318]">
              {totalEventsError}
            </p>
          )}
        </div>

        {/* CERTIFICATIONS */}
        <div className="mb-[10px]">
          <div className="mb-[6px] flex flex-wrap items-center justify-between gap-2">
            <p className="text-[18px] font-semibold text-[#252525]">
              Certifications ( If any )
            </p>

            <span className="text-[11px] text-[#777]">
              Max 5 MB per file · Up to 10 files
            </span>
          </div>

          {certifications.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="mb-[6px] flex items-center gap-[6px]"
            >
              <div
                title={item.name}
                className="flex h-[25px] min-w-0 flex-1 items-center gap-[6px] overflow-hidden rounded-[4px] border border-[#cfcfcf] px-[8px] text-[12px] text-[#6D6D6D]"
              >
                <FaFileAlt className="shrink-0 text-[12px] text-black" />

                <span className="truncate">
                  {item.name}
                </span>
              </div>

              {isEditing && (
                <button
                  type="button"
                  onClick={() => handleRemoveCertification(index)}
                  className="shrink-0 text-[12px] text-red-600 hover:text-red-800"
                  aria-label={`Remove ${item.name}`}
                  title="Remove file"
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <div className="mt-[6px] flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] text-[#777]">
              {certifications.length}/{MAX_FILES} files uploaded
            </span>

            {isEditing && (
              <UploadButton
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleCertificationUpload}
                disabled={certifications.length >= MAX_FILES}
                label="Upload Another"
              />
            )}
          </div>

          {certifications.length >= MAX_FILES && (
            <p className="mt-1 text-[12px] text-[#b42318]">
              Maximum {MAX_FILES} certification files reached.
            </p>
          )}

          {certificationError && (
            <p role="alert" className="mt-1 text-[12px] text-[#b42318]">
              {certificationError}
            </p>
          )}
        </div>

        {/* AWARDS AND RECOGNITIONS */}
        <div>
          <div className="mb-[6px] flex flex-wrap items-center justify-between gap-2">
            <p className="text-[18px] font-semibold text-[#252525]">
              Award and Recognitions (if any) -
              <span className="text-[12px] font-normal">
                {" "}Upload in the PDF format
              </span>
            </p>

            <span className="text-[11px] text-[#777]">
              Max 5 MB per file · Up to 10 files
            </span>
          </div>

          {awards.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="mb-[6px] flex items-center gap-[6px]"
            >
              <div
                title={item.name}
                className="flex h-[25px] min-w-0 flex-1 items-center gap-[6px] overflow-hidden rounded-[4px] border border-[#cfcfcf] px-[8px] text-[12px] text-[#6D6D6D]"
              >
                <FaFileAlt className="shrink-0 text-[12px] text-black" />

                <span className="truncate">
                  {item.name}
                </span>
              </div>

              {isEditing && (
                <button
                  type="button"
                  onClick={() => handleRemoveAward(index)}
                  className="shrink-0 text-[12px] text-red-600 hover:text-red-800"
                  aria-label={`Remove ${item.name}`}
                  title="Remove file"
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <div className="mt-[6px] flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] text-[#777]">
              {awards.length}/{MAX_FILES} files uploaded
            </span>

            {isEditing && (
              <UploadButton
                accept=".pdf"
                onChange={handleAwardUpload}
                disabled={awards.length >= MAX_FILES}
                label="Upload Award PDF"
              />
            )}
          </div>

          {awards.length >= MAX_FILES && (
            <p className="mt-1 text-[12px] text-[#b42318]">
              Maximum {MAX_FILES} award files reached.
            </p>
          )}

          {awardError && (
            <p role="alert" className="mt-1 text-[12px] text-[#b42318]">
              {awardError}
            </p>
          )}
        </div>

        {/* SAVE / CANCEL */}
        {isEditing && (
          <div className="mt-[14px] flex justify-end gap-[8px] border-t border-[#eeeeee] pt-[12px]">
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-[4px] border border-[#cfcfcf] bg-white px-[16px] py-[7px] text-[12px] font-medium text-[#555] hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="rounded-[4px] bg-[#d99d00] px-[16px] py-[7px] text-[12px] font-medium text-white hover:bg-[#c58f00]"
            >
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

export default CredibilityForTrustSignals;
