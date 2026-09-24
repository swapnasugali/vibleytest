import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { FaFileAlt, FaPen } from "react-icons/fa";

const CredibilityForTrustSignals = () => {
  // =================================================
  // DYNAMIC FILE STATES
  // =================================================

  const [certifications, setCertifications] = useState([
    "Cambridge - Study Of Photography Completion",
  ]);

  const [awards, setAwards] = useState([
    "Best Candid Photography By Dada Saheb Palke.Pdf",
  ]);

  // =================================================
  // CERTIFICATION FILE UPLOAD
  // =================================================

  const handleCertificationUpload = (event) => {
    const files = Array.from(event.target.files);

    if (files.length > 0) {
      const fileNames = files.map((file) => file.name);

      setCertifications((previousFiles) => [
        ...previousFiles,
        ...fileNames,
      ]);
    }

    event.target.value = "";
  };

  // =================================================
  // AWARD FILE UPLOAD
  // =================================================

  const handleAwardUpload = (event) => {
    const files = Array.from(event.target.files);

    if (files.length > 0) {
      const fileNames = files.map((file) => file.name);

      setAwards((previousFiles) => [
        ...previousFiles,
        ...fileNames,
      ]);
    }

    event.target.value = "";
  };

  return (
    <section className="w-full rounded-[4px] bg-white">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div
        className="
          flex
          items-center
          gap-[5px]
          border-b
          border-[#eeeeee]
          px-[16px]
          py-[9px]
        "
      >
        <h2 className="text-[20px] font-semibold text-[#333]">
          CREDIBILITY FOR TRUST SIGNALS
        </h2>

        <FaPen className="text-[#d99d00]" />
      </div>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="px-[16px] pb-[14px] pt-[10px]">

        {/* ================================================= */}
        {/* TOTAL EVENTS */}
        {/* ================================================= */}

        <div className="mb-[10px]">

          <label
            className="
              mb-[5px]
              block
              text-[18px]
              font-semibold
              text-[#252525]
            "
          >
            Total Events Handled
          </label>

          <input
            type="text"
            value="163"
            readOnly
            className="
              h-[24px]
              w-full
              rounded-[4px]
              border
              border-[#cfcfcf]
              px-[10px]
              text-[14px]
              text-[#6D6D6D]
              outline-none
            "
          />

          <span className="ml-[5px] text-[12px] italic text-[#777]">
            ( Will Be Auto Calculated by Leads Accepted )
          </span>

        </div>

        {/* ================================================= */}
        {/* CERTIFICATIONS */}
        {/* ================================================= */}

        <div className="mb-[10px]">

          <p
            className="
              mb-[6px]
              text-[18px]
              font-semibold
              text-[#252525]
            "
          >
            Certifications ( If any )
          </p>

          {certifications.map((fileName, index) => (
            <div
              key={`${fileName}-${index}`}
              className="mb-[6px] flex items-center gap-[6px]"
            >

              {/* FILE NAME */}

              <div
                className="
                  flex
                  h-[25px]
                  flex-1
                  items-center
                  gap-[6px]
                  overflow-hidden
                  rounded-[4px]
                  border
                  border-[#cfcfcf]
                  px-[8px]
                  text-[12px]
                  text-[#6D6D6D]
                "
              >
                <FaFileAlt className="shrink-0 text-[12px] text-[#000000]" />

                <span className="truncate">
                  {fileName}
                </span>
              </div>

              {/* UPLOAD BUTTON */}

              {index === certifications.length - 1 && (
                <>
                  <input
                    id="certification-upload"
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    multiple
                    onChange={handleCertificationUpload}
                    className="hidden"
                  />

                  <label
                    htmlFor="certification-upload"
                    className="
                      flex
                      h-[25px]
                      shrink-0
                      cursor-pointer
                      items-center
                      gap-[5px]
                      rounded-[4px]
                      border
                      border-[#cfcfcf]
                      bg-white
                      px-[10px]
                      text-[12px]
                      text-[#6D6D6D]
                      shadow-sm
                    "
                  >
                    <FiUpload className="text-[12px] text-[#000000]" />
                    Upload Another
                  </label>
                </>
              )}

            </div>
          ))}

        </div>

        {/* ================================================= */}
        {/* AWARDS */}
        {/* ================================================= */}

        <div>

          <p
            className="
              mb-[6px]
              text-[18px]
              font-semibold
              text-[#252525]
            "
          >
            Award and Recognitions (if any) -
            <span className="text-[12px]">
              {" "}
              Upload in the PDF format
            </span>
          </p>

          {awards.map((fileName, index) => (
            <div
              key={`${fileName}-${index}`}
              className="mb-[6px] flex items-center gap-[6px]"
            >

              {/* FILE NAME */}

              <div
                className="
                  flex
                  h-[25px]
                  flex-1
                  items-center
                  gap-[6px]
                  overflow-hidden
                  rounded-[4px]
                  border
                  border-[#cfcfcf]
                  px-[8px]
                  text-[12px]
                  text-[#6D6D6D]
                "
              >
                <FaFileAlt className="shrink-0 text-[12px] text-[#000000]" />

                <span className="truncate">
                  {fileName}
                </span>
              </div>

              {/* UPLOAD BUTTON */}

              {index === awards.length - 1 && (
                <>
                  <input
                    id="award-upload"
                    type="file"
                    accept=".pdf"
                    multiple
                    onChange={handleAwardUpload}
                    className="hidden"
                  />

                  <label
                    htmlFor="award-upload"
                    className="
                      flex
                      h-[25px]
                      shrink-0
                      cursor-pointer
                      items-center
                      gap-[5px]
                      rounded-[4px]
                      border
                      border-[#cfcfcf]
                      bg-white
                      px-[10px]
                      text-[12px]
                      text-[#6D6D6D]
                      shadow-sm
                    "
                  >
                    <FiUpload className="text-[12px] text-[#000000]" />
                    Upload Another
                  </label>
                </>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default CredibilityForTrustSignals;