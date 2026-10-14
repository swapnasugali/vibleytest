
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

const CredibilityForTrustSignals = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [certifications, setCertifications] = useState([
    "Cambridge - Study Of Photography Completion",
  ]);

  const [awards, setAwards] = useState([
    "Best Candid Photography By Dada Saheb Palke.Pdf",
  ]);

  const [savedCertifications, setSavedCertifications] =
    useState([...certifications]);

  const [savedAwards, setSavedAwards] = useState([...awards]);

  const [certificationError, setCertificationError] = useState("");
  const [awardError, setAwardError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Open edit mode
  const handleEdit = () => {
    if (!isEditing) {
      setCertifications([...savedCertifications]);
      setAwards([...savedAwards]);
      setCertificationError("");
      setAwardError("");
      setSuccessMessage("");
    }

    setIsEditing(true);
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
    event.target.value = "";

    if (selectedFiles.length === 0) return;

    const errors = [];
    const validFiles = [];
    const existingNames = new Set(
      currentFiles.map((name) => name.toLowerCase())
    );

    selectedFiles.forEach((file) => {
      const extension = file.name.split(".").pop()?.toLowerCase();

      if (!extension || !allowedTypes.includes(extension)) {
        errors.push(
          `${file.name}: Invalid file type. Allowed: ${allowedTypes.join(", ")}.`
        );
        return;
      }

      if (file.size === 0) {
        errors.push(`${file.name}: Empty files are not allowed.`);
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        errors.push(`${file.name}: File size must not exceed 5 MB.`);
        return;
      }

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

      validFiles.push(file);
    });

    const remainingSlots = MAX_FILES - currentFiles.length;

    if (remainingSlots <= 0) {
      setError(`Maximum ${MAX_FILES} files allowed.`);
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
        ...filesToAdd.map((file) => file.name),
      ]);
    }

    setError(errors.length > 0 ? errors.join(" ") : "");
    setSuccessMessage("");
  };

  const handleCertificationUpload = (event) => {
    validateAndAddFiles(
      event,
      certifications,
      setCertifications,
      setCertificationError,
      CERTIFICATION_TYPES
    );
  };

  const handleAwardUpload = (event) => {
    validateAndAddFiles(
      event,
      awards,
      setAwards,
      setAwardError,
      ["pdf"]
    );
  };

  // Remove a certification
  const handleRemoveCertification = (indexToRemove) => {
    setCertifications((previousFiles) =>
      previousFiles.filter((_, index) => index !== indexToRemove)
    );
    setCertificationError("");
    setSuccessMessage("");
  };

  // Remove an award
  const handleRemoveAward = (indexToRemove) => {
    setAwards((previousFiles) =>
      previousFiles.filter((_, index) => index !== indexToRemove)
    );
    setAwardError("");
    setSuccessMessage("");
  };

  // Save changes
  const handleSave = () => {
    setSavedCertifications([...certifications]);
    setSavedAwards([...awards]);

    setCertificationError("");
    setAwardError("");
    setSuccessMessage("Changes saved successfully.");
    setIsEditing(false);
  };

  // Cancel changes
  const handleCancel = () => {
    setCertifications([...savedCertifications]);
    setAwards([...savedAwards]);

    setCertificationError("");
    setAwardError("");
    setSuccessMessage("");
    setIsEditing(false);
  };

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

        {/* Pen icon stays visible in both modes */}
        <button
          type="button"
          onClick={handleEdit}
          title="Edit credibility details"
          aria-label="Edit credibility details"
          aria-pressed={isEditing}
          className={`flex h-[24px] w-[24px] items-center justify-center rounded-[3px] border border-transparent transition hover:border-[#e5e5e5] hover:bg-gray-100 ${
            isEditing ? "bg-[#fff8e6]" : "bg-transparent"
          }`}
        >
          <FaPen className="cursor-pointer text-[13px] text-[#d99d00]" />
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
          <label className="mb-[5px] block text-[18px] font-semibold text-[#252525]">
            Total Events Handled
          </label>

          <div className="flex h-[30px] w-full items-center rounded-[4px] border border-[#cfcfcf] px-[10px]">
            <span className="text-[14px] text-[#6D6D6D]">163</span>

            <span className="ml-[12px] text-[12px] italic text-[#777]">
              ( Will be auto calculated by leads accepted )
            </span>
          </div>
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

          {certifications.map((fileName, index) => (
            <div
              key={`${fileName}-${index}`}
              className="mb-[6px] flex items-center gap-[6px]"
            >
              <div
                title={fileName}
                className="flex h-[25px] min-w-0 flex-1 items-center gap-[6px] overflow-hidden rounded-[4px] border border-[#cfcfcf] px-[8px] text-[12px] text-[#6D6D6D]"
              >
                <FaFileAlt className="shrink-0 text-[12px] text-black" />
                <span className="truncate">{fileName}</span>
              </div>

              {isEditing && (
                <button
                  type="button"
                  onClick={() => handleRemoveCertification(index)}
                  className="shrink-0 text-[12px] text-red-600 hover:text-red-800"
                  aria-label={`Remove ${fileName}`}
                  title="Remove file"
                >
                  Remove
                </button>
              )}

              {isEditing && index === certifications.length - 1 && (
                <label className="flex h-[25px] shrink-0 cursor-pointer items-center gap-[5px] rounded-[4px] border border-[#cfcfcf] bg-white px-[10px] text-[12px] text-[#6D6D6D] shadow-sm">
                  <FiUpload className="text-[12px] text-black" />
                  Upload Another

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    multiple
                    disabled={certifications.length >= MAX_FILES}
                    onChange={handleCertificationUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          ))}

          {certifications.length === 0 && isEditing && (
            <label className="mb-[6px] flex h-[30px] w-fit cursor-pointer items-center gap-[5px] rounded-[4px] border border-[#cfcfcf] px-[10px] text-[12px] text-[#6D6D6D]">
              <FiUpload className="text-black" />
              Upload Certification
              <input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                multiple
                onChange={handleCertificationUpload}
                className="hidden"
              />
            </label>
          )}

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

          {awards.map((fileName, index) => (
            <div
              key={`${fileName}-${index}`}
              className="mb-[6px] flex items-center gap-[6px]"
            >
              <div
                title={fileName}
                className="flex h-[25px] min-w-0 flex-1 items-center gap-[6px] overflow-hidden rounded-[4px] border border-[#cfcfcf] px-[8px] text-[12px] text-[#6D6D6D]"
              >
                <FaFileAlt className="shrink-0 text-[12px] text-black" />
                <span className="truncate">{fileName}</span>
              </div>

              {isEditing && (
                <button
                  type="button"
                  onClick={() => handleRemoveAward(index)}
                  className="shrink-0 text-[12px] text-red-600 hover:text-red-800"
                  aria-label={`Remove ${fileName}`}
                  title="Remove file"
                >
                  Remove
                </button>
              )}

              {isEditing && index === awards.length - 1 && (
                <label className="flex h-[25px] shrink-0 cursor-pointer items-center gap-[5px] rounded-[4px] border border-[#cfcfcf] bg-white px-[10px] text-[12px] text-[#6D6D6D] shadow-sm">
                  <FiUpload className="text-[12px] text-black" />
                  Upload Another

                  <input
                    type="file"
                    accept=".pdf"
                    multiple
                    disabled={awards.length >= MAX_FILES}
                    onChange={handleAwardUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          ))}

          {awards.length === 0 && isEditing && (
            <label className="mb-[6px] flex h-[30px] w-fit cursor-pointer items-center gap-[5px] rounded-[4px] border border-[#cfcfcf] px-[10px] text-[12px] text-[#6D6D6D]">
              <FiUpload className="text-black" />
              Upload Award PDF
              <input
                type="file"
                accept=".pdf"
                multiple
                onChange={handleAwardUpload}
                className="hidden"
              />
            </label>
          )}

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
