
import React, { useState } from "react";

const BasicInfo = () => {
  const [languages, setLanguages] = useState([
    "English",
    "Telugu",
    "Hindi",
  ]);

  const [showLanguageInput, setShowLanguageInput] = useState(false);
  const [newLanguage, setNewLanguage] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    serviceType: "",
    specializedIn: "",
    experience: "",
    teamSize: "",
  });

  // Common input change handler
  const handleChange = (event) => {
    const { name, value } = event.target;

    let updatedValue = value;

    if (name === "businessName" || name === "specializedIn") {
      updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccessMessage("");
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Business Name
    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required.";
    } else if (formData.businessName.trim().length < 2) {
      newErrors.businessName =
        "Business name must contain at least 2 characters.";
    } else if (formData.businessName.trim().length > 100) {
      newErrors.businessName =
        "Business name cannot exceed 100 characters.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.businessName.trim())) {
      newErrors.businessName =
        "Only alphabets and spaces are allowed.";
    }

    // Business Type
    if (
      !["Company", "Individual", "Partnership"].includes(
        formData.businessType
      )
    ) {
      newErrors.businessType = "Please select a business type.";
    }

    // Service Type
    if (
      !["Photography", "Catering", "Venue", "Decoration"].includes(
        formData.serviceType
      )
    ) {
      newErrors.serviceType = "Please select a service type.";
    }

    // Specialized In
    if (!formData.specializedIn.trim()) {
      newErrors.specializedIn = "Specialization is required.";
    } else if (formData.specializedIn.trim().length > 100) {
      newErrors.specializedIn =
        "Specialization cannot exceed 100 characters.";
    } else if (
      !/^[a-zA-Z\s]+$/.test(formData.specializedIn.trim())
    ) {
      newErrors.specializedIn =
        "Only alphabets and spaces are allowed.";
    }

    // Experience
    if (formData.experience === "") {
      newErrors.experience = "Experience is required.";
    } else if (
      !/^\d+$/.test(formData.experience) ||
      Number(formData.experience) > 100
    ) {
      newErrors.experience =
        "Enter a whole number between 0 and 100.";
    }

    // Team Size
    if (formData.teamSize === "") {
      newErrors.teamSize = "Team size is required.";
    } else if (
      !/^\d+$/.test(formData.teamSize) ||
      Number(formData.teamSize) < 1 ||
      Number(formData.teamSize) > 1000
    ) {
      newErrors.teamSize =
        "Enter a whole number between 1 and 1000.";
    }

    // Languages
    if (languages.length === 0) {
      newErrors.languages = "Add at least one language.";
    } else if (languages.length > 10) {
      newErrors.languages =
        "You can add a maximum of 10 languages.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Add language
  const handleAddLanguage = () => {
    if (languages.length >= 10) {
      setErrors((prev) => ({
        ...prev,
        languages: "You can add a maximum of 10 languages.",
      }));
      return;
    }

    setNewLanguage("");
    setShowLanguageInput(true);

    setErrors((prev) => ({
      ...prev,
      languages: "",
      newLanguage: "",
    }));
  };

  // Save language
  const handleSaveLanguage = () => {
    const language = newLanguage.trim();

    if (!language) {
      setErrors((prev) => ({
        ...prev,
        newLanguage: "Please enter a language.",
      }));
      return;
    }

    if (!/^[a-zA-Z\s-]+$/.test(language)) {
      setErrors((prev) => ({
        ...prev,
        newLanguage: "Use letters, spaces, or hyphens only.",
      }));
      return;
    }

    if (language.length > 30) {
      setErrors((prev) => ({
        ...prev,
        newLanguage: "Language cannot exceed 30 characters.",
      }));
      return;
    }

    const alreadyExists = languages.some(
      (item) => item.toLowerCase() === language.toLowerCase()
    );

    if (alreadyExists) {
      setErrors((prev) => ({
        ...prev,
        newLanguage: "This language has already been added.",
      }));
      return;
    }

    if (languages.length >= 10) {
      setErrors((prev) => ({
        ...prev,
        languages: "You can add a maximum of 10 languages.",
      }));
      return;
    }

    setLanguages((prev) => [...prev, language]);
    setNewLanguage("");
    setShowLanguageInput(false);

    setErrors((prev) => ({
      ...prev,
      newLanguage: "",
      languages: "",
    }));

    setSuccessMessage("");
  };

  // Cancel language input
  const handleCancelLanguage = () => {
    setShowLanguageInput(false);
    setNewLanguage("");

    setErrors((prev) => ({
      ...prev,
      newLanguage: "",
    }));
  };

  // Enter and Escape keyboard support
  const handleLanguageKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSaveLanguage();
    }

    if (event.key === "Escape") {
      handleCancelLanguage();
    }
  };

  // Remove language
  const handleRemoveLanguage = (languageToRemove) => {
    setLanguages((prev) =>
      prev.filter((language) => language !== languageToRemove)
    );

    setErrors((prev) => ({
      ...prev,
      languages: "",
    }));

    setSuccessMessage("");
  };

  // Submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    const basicInfo = {
      ...formData,
      businessName: formData.businessName.trim(),
      specializedIn: formData.specializedIn.trim(),
      experience: Number(formData.experience),
      teamSize: Number(formData.teamSize),
      languages,
    };

    console.log("Basic Info:", basicInfo);

    setSuccessMessage(
      "Basic information validated successfully."
    );
  };

  // Common styles
  const labelClass =
    "mb-[6px] block text-[16px] font-semibold text-[#2E2E2E]";

  const inputClass =
    "h-[38px] w-full rounded-[5px] border border-[#cfcfcf] bg-white px-[11px] text-[13px] text-[#444] outline-none transition-all duration-200 placeholder:text-[#999] focus:border-[#970000] focus:ring-2 focus:ring-[#970000]/10";

  const errorClass =
    "mt-[5px] text-[12px] font-medium text-red-600";

  return (
    <section
      className="w-full overflow-hidden rounded-[5px] border border-[#eeeeee] bg-white shadow-sm"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Number Input Spinner Styling */}
      <style>{`
        input.number-input-no-spinner {
          appearance: textfield !important;
          -moz-appearance: textfield !important;
        }

        input.number-input-no-spinner::-webkit-inner-spin-button,
        input.number-input-no-spinner::-webkit-outer-spin-button {
          -webkit-appearance: none !important;
          appearance: none !important;
          display: none !important;
          margin: 0 !important;
        }

        input.number-input-no-spinner:focus {
          outline: none;
        }

        input::placeholder {
          color: #999999;
        }

        select {
          cursor: pointer;
        }

        button {
          transition: all 0.2s ease-in-out;
        }
      `}</style>

      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e5e5e5] px-[16px] py-[12px]">
        <h2 className="text-[19px] font-semibold tracking-wide text-[#1C1C1C]">
          BASIC INFO
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="px-[16px] pb-[20px] pt-[16px]"
      >
        {/* Business Name and Business Type */}
        <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">

          <div>
            <label htmlFor="businessName" className={labelClass}>
              Business Name *
            </label>

            <input
              id="businessName"
              name="businessName"
              type="text"
              value={formData.businessName}
              onChange={handleChange}
              maxLength={100}
              placeholder="Artlane Studio"
              aria-invalid={Boolean(errors.businessName)}
              className={`${inputClass} ${
                errors.businessName ? "border-red-500 focus:border-red-500" : ""
              }`}
            />

            {errors.businessName && (
              <p className={errorClass}>
                {errors.businessName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="businessType" className={labelClass}>
              Business Type *
            </label>

            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              aria-invalid={Boolean(errors.businessType)}
              className={`${inputClass} ${
                errors.businessType ? "border-red-500" : ""
              }`}
            >
              <option value="">Select business type</option>
              <option value="Company">Company</option>
              <option value="Individual">Individual</option>
              <option value="Partnership">Partnership</option>
            </select>

            {errors.businessType && (
              <p className={errorClass}>
                {errors.businessType}
              </p>
            )}
          </div>
        </div>

        {/* Service Type */}
        <div className="mt-[14px]">
          <label htmlFor="serviceType" className={labelClass}>
            Service Type *
          </label>

          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            aria-invalid={Boolean(errors.serviceType)}
            className={`${inputClass} ${
              errors.serviceType ? "border-red-500" : ""
            }`}
          >
            <option value="">Select service type</option>
            <option value="Photography">Photography</option>
            <option value="Catering">Catering</option>
            <option value="Venue">Venue</option>
            <option value="Decoration">Decoration</option>
          </select>

          {errors.serviceType && (
            <p className={errorClass}>
              {errors.serviceType}
            </p>
          )}
        </div>

        {/* Specialized In */}
        <div className="mt-[14px]">
          <label htmlFor="specializedIn" className={labelClass}>
            Specialized in *
          </label>

          <input
            id="specializedIn"
            name="specializedIn"
            type="text"
            value={formData.specializedIn}
            onChange={handleChange}
            maxLength={100}
            placeholder="e.g. Weddings Birthdays"
            aria-invalid={Boolean(errors.specializedIn)}
            className={`${inputClass} ${
              errors.specializedIn ? "border-red-500" : ""
            }`}
          />

          {errors.specializedIn && (
            <p className={errorClass}>
              {errors.specializedIn}
            </p>
          )}
        </div>

        {/* Experience and Team Size */}
        <div className="mt-[14px] grid grid-cols-1 gap-[14px] sm:grid-cols-2">

          <div>
            <label htmlFor="experience" className={labelClass}>
              Experience in Years *
            </label>

            <input
              id="experience"
              name="experience"
              type="number"
              min="0"
              max="100"
              step="1"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g. 12"
              aria-invalid={Boolean(errors.experience)}
              className={`number-input-no-spinner ${inputClass} ${
                errors.experience ? "border-red-500" : ""
              }`}
            />

            {errors.experience && (
              <p className={errorClass}>
                {errors.experience}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="teamSize" className={labelClass}>
              Team Size in Members *
            </label>

            <input
              id="teamSize"
              name="teamSize"
              type="number"
              min="1"
              max="1000"
              step="1"
              value={formData.teamSize}
              onChange={handleChange}
              placeholder="e.g. 10"
              aria-invalid={Boolean(errors.teamSize)}
              className={`number-input-no-spinner ${inputClass} ${
                errors.teamSize ? "border-red-500" : ""
              }`}
            />

            {errors.teamSize && (
              <p className={errorClass}>
                {errors.teamSize}
              </p>
            )}
          </div>
        </div>

        {/* Languages Known */}
        <div className="mt-[16px]">
          <div className="mb-[8px] flex items-center justify-between">
            <label className={labelClass}>
              Languages Known *
            </label>

            <span className="text-[11px] text-[#888]">
              {languages.length}/10
            </span>
          </div>

          {/* Language Chips */}
          <div className="flex flex-wrap items-center gap-[8px]">

            {languages.map((language) => (
              <span
                key={language}
                className="inline-flex items-center gap-[8px] rounded-[4px] border border-[#e5e5e5] bg-[#F5F5F5] px-[11px] py-[6px] text-[12px] font-medium text-[#444] transition-colors hover:border-[#970000]/40 hover:bg-[#fff5f5]"
              >
                {language}

                <button
                  type="button"
                  onClick={() => handleRemoveLanguage(language)}
                  aria-label={`Remove ${language}`}
                  title={`Remove ${language}`}
                  className="cursor-pointer text-[15px] font-semibold leading-none text-[#777] hover:text-red-600"
                >
                  ×
                </button>
              </span>
            ))}

            {!showLanguageInput && languages.length < 10 && (
              <button
                type="button"
                onClick={handleAddLanguage}
                aria-label="Add language"
                title="Add language"
                className="flex h-[27px] w-[27px] cursor-pointer items-center justify-center rounded-full border border-[#970000] text-[19px] leading-none text-[#970000] hover:bg-[#970000] hover:text-white"
              >
                +
              </button>
            )}
          </div>

          {/* Add Language Input */}
          {showLanguageInput && (
            <div className="mt-[12px] flex flex-wrap items-start gap-[8px]">

              <div>
                <input
                  autoFocus
                  type="text"
                  value={newLanguage}
                  onChange={(event) => {
                    setNewLanguage(event.target.value);

                    setErrors((prev) => ({
                      ...prev,
                      newLanguage: "",
                    }));
                  }}
                  onKeyDown={handleLanguageKeyDown}
                  placeholder="Enter language"
                  maxLength={30}
                  aria-label="New language"
                  aria-invalid={Boolean(errors.newLanguage)}
                  className="h-[36px] w-[180px] rounded-[5px] border border-[#cfcfcf] px-[10px] text-[12px] outline-none transition-all focus:border-[#970000] focus:ring-2 focus:ring-[#970000]/10"
                />

                {errors.newLanguage && (
                  <p className={errorClass}>
                    {errors.newLanguage}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={handleSaveLanguage}
                className="rounded-[5px] bg-[#970000] px-[15px] py-[9px] text-[12px] font-medium text-white hover:bg-[#790000]"
              >
                Add
              </button>

              <button
                type="button"
                onClick={handleCancelLanguage}
                className="rounded-[5px] border border-[#ccc] px-[15px] py-[9px] text-[12px] text-[#555] hover:bg-[#f3f3f3]"
              >
                Cancel
              </button>
            </div>
          )}

          {errors.languages && (
            <p className={errorClass}>
              {errors.languages}
            </p>
          )}
        </div>

        {/* Submit Section */}
        <div className="mt-[22px] flex flex-wrap items-center gap-[12px] border-t border-[#eeeeee] pt-[15px]">

          <button
            type="submit"
            className="cursor-pointer rounded-[5px] bg-[#970000] px-[22px] py-[10px] text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#790000] hover:shadow-md active:translate-y-0"
          >
            Save Basic Info
          </button>

          {successMessage && (
            <p
              role="status"
              className="flex items-center gap-[6px] text-[12px] font-medium text-green-700"
            >
              <span>✓</span>
              {successMessage}
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default BasicInfo;
