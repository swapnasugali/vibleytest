import React, { useState } from "react";

const BasicInfo = () => {

  // =====================================================
  // LANGUAGES STATE
  // =====================================================

  const [languages, setLanguages] = useState([
    "English",
    "Telugu",
    "Hindi",
  ]);

  const [showLanguageInput, setShowLanguageInput] = useState(false);
  const [newLanguage, setNewLanguage] = useState("");


  // =====================================================
  // ADD LANGUAGE
  // =====================================================

  const handleAddLanguage = () => {
    setShowLanguageInput(true);
  };


  // =====================================================
  // SAVE NEW LANGUAGE
  // =====================================================

  const handleLanguageKeyDown = (event) => {

    if (event.key === "Enter") {

      const language = newLanguage.trim();

      if (language !== "" && !languages.includes(language)) {

        setLanguages([
          ...languages,
          language,
        ]);

      }

      setNewLanguage("");
      setShowLanguageInput(false);
    }

  };


  return (
    <section className="w-full rounded-[4px] bg-white">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="border-b border-[#e5e5e5] px-[16px] py-[9px]">

        <h2 className="text-[20px] font-semibold text-[#1C1C1C]">
          BASIC INFO
        </h2>

      </div>


      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="px-[16px] pb-[14px] pt-[9px]">


        {/* ================================================= */}
        {/* BUSINESS NAME + TYPE */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2">

          {/* BUSINESS NAME */}

          <div>

            <label className="mb-[5px] block text-[18px] font-semibold text-[#2E2E2E]">
              Business Name
            </label>

            <input
              type="text"
              placeholder="Artlane Studio"
              className="
                h-[30px]
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


          {/* BUSINESS TYPE */}

          <div>

            <label className="mb-[5px] block text-[18px] font-semibold text-[#2E2E2E]">
              Business Type
            </label>

            <select
              defaultValue="Company"
              className="
                h-[30px]
                w-full
                rounded-[4px]
                border
                border-[#cfcfcf]
                bg-white
                px-[8px]
                text-[12px]
                cursor-pointer
                text-[#555]
                outline-none
              "
            >
              <option>Company</option>
              <option>Individual</option>
              <option>Partnership</option>
            </select>

          </div>

        </div>


        {/* ================================================= */}
        {/* SERVICE TYPE */}
        {/* ================================================= */}

        <div className="mt-[9px]">

          <label className="mb-[5px] block text-[18px] font-semibold text-[#2E2E2E]">
            Service Type
          </label>

          <select
            defaultValue="Photography"
            className="
              h-[30px]
              w-full
              rounded-[4px]
              border
              border-[#cfcfcf]
              bg-white
              px-[8px]
              text-[12px]
              cursor-pointer
              text-[#555]
              outline-none
            "
          >
            <option>Photography</option>
            <option>Catering</option>
            <option>Venue</option>
            <option>Decoration</option>
          </select>

        </div>


        {/* ================================================= */}
        {/* SPECIALIZED IN */}
        {/* ================================================= */}

        <div className="mt-[9px]">

          <label className="mb-[5px] block text-[18px] font-semibold text-[#2E2E2E]">
            Specialized in
          </label>

          <input
            type="text"
            className="
              h-[30px]
              w-full
              rounded-[4px]
              border
              border-[#cfcfcf]
              px-[10px]
              text-[16px]
              outline-none
            "
          />

        </div>


        {/* ================================================= */}
        {/* EXPERIENCE + TEAM SIZE */}
        {/* ================================================= */}

        <div className="mt-[9px] grid grid-cols-1 gap-[10px] sm:grid-cols-2">

          {/* EXPERIENCE */}

          <div>

            <label className="mb-[5px] block text-[18px] font-semibold text-[#2E2E2E]">
              Experience in Years
            </label>

            <input
              type="text"
              placeholder="Ex : 12 years"
              className="
                h-[30px]
                w-full
                rounded-[4px]
                border
                border-[#cfcfcf]
                px-[10px]
                text-[12px]
                outline-none
                placeholder:text-[#777]
              "
            />

          </div>


          {/* TEAM SIZE */}

          <div>

            <label className="mb-[5px] block text-[18px] font-semibold text-[#2E2E2E]">
              Team Size in Members
            </label>

            <input
              type="text"
              placeholder="Ex : 10 members"
              className="
                h-[30px]
                w-full
                rounded-[4px]
                border
                border-[#cfcfcf]
                px-[10px]
                text-[12px]
                outline-none
                placeholder:text-[#777]
              "
            />

          </div>

        </div>


        {/* ================================================= */}
        {/* LANGUAGES */}
        {/* ================================================= */}

        <div className="mt-[9px]">

          <label className="mb-[5px] block text-[18px] font-semibold text-[#2E2E2E]">
            Languages Known
          </label>


          {/* LANGUAGE TAGS */}

          <div className="flex flex-wrap items-center gap-[6px]">

            {languages.map((language) => (

              <span
                key={language}
                className="
                  rounded-[3px]
                  bg-[#F3F4F6]
                  px-[10px]
                  py-[5px]
                  text-[12x]
                  text-[#4B5563]
                "
              >
                {language}
              </span>

            ))}


            {/* ================================================= */}
            {/* PLUS BUTTON */}
            {/* ================================================= */}

            {!showLanguageInput && (

              <button
                type="button"
                onClick={handleAddLanguage}
                className="
                  flex
                  h-[20px]
                  w-[20px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#555]
                  text-[15px]
                  leading-none
                  text-[#333]
                  cursor-pointer
                  hover:bg-[#f3f3f3]
                "
              >
                +
              </button>

            )}


            {/* ================================================= */}
            {/* NEW LANGUAGE INPUT */}
            {/* ================================================= */}

            {showLanguageInput && (

              <input
                autoFocus
                type="text"
                value={newLanguage}
                onChange={(event) =>
                  setNewLanguage(event.target.value)
                }
                onKeyDown={handleLanguageKeyDown}
                placeholder="Enter language"
                className="
                  h-[30px]
                  w-[130px]
                  rounded-[4px]
                  border
                  border-[#cfcfcf]
                  px-[8px]
                  text-[14px]
                  outline-none
                  focus:border-[#970000]
                "
              />

            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default BasicInfo;