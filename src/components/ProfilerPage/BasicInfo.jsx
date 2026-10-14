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

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccessMessage("");
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};

    // Business name
    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required.";
    } else if (formData.businessName.trim().length < 2) {
      newErrors.businessName =
        "Business name must contain at least 2 characters.";
    } else if (formData.businessName.trim().length > 100) {
      newErrors.businessName =
        "Business name cannot exceed 100 characters.";
    }

    // Business type
    if (!["Company", "Individual", "Partnership"].includes(
      formData.businessType
    )) {
      newErrors.businessType = "Please select a business type.";
    }

    // Service type
    if (
      !["Photography", "Catering", "Venue", "Decoration"].includes(
        formData.serviceType
      )
    ) {
      newErrors.serviceType = "Please select a service type.";
    }

    // Specialization
    if (!formData.specializedIn.trim()) {
      newErrors.specializedIn = "Specialization is required.";
    } else if (formData.specializedIn.trim().length > 100) {
      newErrors.specializedIn =
        "Specialization cannot exceed 100 characters.";
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

    // Team size
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
      newErrors.languages = "You can add a maximum of 10 languages.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Open language input
  const handleAddLanguage = () => {
    if (languages.length >= 10) {
      setErrors((prev) => ({
        ...prev,
        languages: "You can add a maximum of 10 languages.",
      }));
      return;
    }

    setErrors((prev) => ({
      ...prev,
      languages: "",
      newLanguage: "",
    }));

    setShowLanguageInput(true);
  };

  // Save a new language by pressing Enter
  const handleLanguageKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

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
          newLanguage:
            "Use letters, spaces, or hyphens only.",
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
    }

    if (event.key === "Escape") {
      setShowLanguageInput(false);
      setNewLanguage("");

      setErrors((prev) => ({
        ...prev,
        newLanguage: "",
      }));
    }
  };

  // Remove a language
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
    setSuccessMessage("Basic information validated successfully.");
  };

  const labelClass =
    "mb-[5px] block text-[18px] font-semibold text-[#2E2E2E]";

  const inputClass =
    "h-[30px] w-full rounded-[4px] border border-[#cfcfcf] bg-white px-[10px] text-[12px] text-[#555] outline-none focus:border-[#970000]";

  const errorClass = "mt-[4px] text-[12px] text-red-600";

  return (
    <section
      className="w-full rounded-[4px] bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Header */}
      <div className="border-b border-[#e5e5e5] px-[16px] py-[9px]">
        <h2 className="text-[20px] font-semibold text-[#1C1C1C]">
          BASIC INFO
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="px-[16px] pb-[14px] pt-[9px]"
      >
        {/* Business Name + Type */}
        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2">
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
                errors.businessName ? "border-red-500" : ""
              }`}
            />

            {errors.businessName && (
              <p className={errorClass}>{errors.businessName}</p>
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
              className={`${inputClass} cursor-pointer ${
                errors.businessType ? "border-red-500" : ""
              }`}
            >
              <option value="">Select business type</option>
              <option value="Company">Company</option>
              <option value="Individual">Individual</option>
              <option value="Partnership">Partnership</option>
            </select>

            {errors.businessType && (
              <p className={errorClass}>{errors.businessType}</p>
            )}
          </div>
        </div>

        {/* Service Type */}
        <div className="mt-[9px]">
          <label htmlFor="serviceType" className={labelClass}>
            Service Type *
          </label>

          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            aria-invalid={Boolean(errors.serviceType)}
            className={`${inputClass} cursor-pointer ${
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
            <p className={errorClass}>{errors.serviceType}</p>
          )}
        </div>

        {/* Specialized In */}
        <div className="mt-[9px]">
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
            placeholder="e.g. Weddings, Birthdays"
            className={`${inputClass} ${
              errors.specializedIn ? "border-red-500" : ""
            }`}
          />

          {errors.specializedIn && (
            <p className={errorClass}>{errors.specializedIn}</p>
          )}
        </div>

        {/* Experience + Team Size */}
        <div className="mt-[9px] grid grid-cols-1 gap-[10px] sm:grid-cols-2">
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
              className={`${inputClass} ${
                errors.experience ? "border-red-500" : ""
              }`}
            />

            {errors.experience && (
              <p className={errorClass}>{errors.experience}</p>
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
              className={`${inputClass} ${
                errors.teamSize ? "border-red-500" : ""
              }`}
            />

            {errors.teamSize && (
              <p className={errorClass}>{errors.teamSize}</p>
            )}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-[9px]">
          <label className={labelClass}>Languages Known *</label>

          <div className="flex flex-wrap items-center gap-[6px]">
            {languages.map((language) => (
              <span
                key={language}
                className="inline-flex items-center gap-[7px] rounded-[3px] bg-[#F3F4F6] px-[10px] py-[5px] text-[12px] text-[#4B5563]"
              >
                {language}

                <button
                  type="button"
                  onClick={() => handleRemoveLanguage(language)}
                  aria-label={`Remove ${language}`}
                  title={`Remove ${language}`}
                  className="cursor-pointer text-[14px] text-[#777] hover:text-red-600"
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
                className="flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full border border-[#111] text-[15px] leading-none text-[#111] hover:bg-[#f3f3f3]"
              >
                +
              </button>
            )}

            {showLanguageInput && (
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
                className="h-[30px] w-[150px] rounded-[4px] border border-[#cfcfcf] px-[8px] text-[12px] outline-none focus:border-[#970000]"
              />

            )}
          </div>

          {errors.newLanguage && (
            <p className={errorClass}>{errors.newLanguage}</p>
          )}

          {errors.languages && (
            <p className={errorClass}>{errors.languages}</p>
          )}

          {showLanguageInput && (
            <p className="mt-[4px] text-[11px] text-[#777]">
              Press Enter to add or Escape to cancel.
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="mt-[18px] flex flex-wrap items-center gap-[12px]">
          <button
            type="submit"
            className="cursor-pointer rounded-[4px] bg-[#970000] px-[20px] py-[9px] text-[13px] font-medium text-white hover:bg-[#790000]"
          >
            Save Basic Info
          </button>

          {successMessage && (
            <p role="status" className="text-[12px] text-green-700">
              {successMessage}
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default BasicInfo;
