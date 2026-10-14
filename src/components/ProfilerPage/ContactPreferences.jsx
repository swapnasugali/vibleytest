
import React, { useState } from "react";
import { FaPen, FaCheck, FaTimes } from "react-icons/fa";

const ContactPreferences = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [showPhonePublicly, setShowPhonePublicly] = useState(true);
  const [whatsappDirect, setWhatsappDirect] = useState(true);

  const initialFormData = {
    whatsappPhone: "",
    secondaryPhone: "",
    email: "",
    contactMethod: "Call",
    autoResponse: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [savedData, setSavedData] = useState({
    ...initialFormData,
    showPhonePublicly: true,
    whatsappDirect: true,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Open edit mode
  const handleEdit = () => {
    if (!isEditing) {
      setFormData({
        whatsappPhone: savedData.whatsappPhone,
        secondaryPhone: savedData.secondaryPhone,
        email: savedData.email,
        contactMethod: savedData.contactMethod,
        autoResponse: savedData.autoResponse,
      });

      setShowPhonePublicly(savedData.showPhonePublicly);
      setWhatsappDirect(savedData.whatsappDirect);
      setErrors({});
      setSuccessMessage("");
    }

    setIsEditing(true);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

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

  // Validate Indian mobile number
  const isValidIndianPhone = (phone) => {
    const cleanedPhone = phone.replace(/[\s()-]/g, "");
    return /^(?:\+91)?[6-9]\d{9}$/.test(cleanedPhone);
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.whatsappPhone.trim()) {
      newErrors.whatsappPhone = "WhatsApp phone number is required.";
    } else if (!isValidIndianPhone(formData.whatsappPhone)) {
      newErrors.whatsappPhone = "Enter a valid 10-digit mobile number.";
    }

    if (formData.secondaryPhone.trim()) {
      if (!isValidIndianPhone(formData.secondaryPhone)) {
        newErrors.secondaryPhone =
          "Enter a valid 10-digit mobile number.";
      } else if (
        formData.secondaryPhone.replace(/[\s()-]/g, "") ===
        formData.whatsappPhone.replace(/[\s()-]/g, "")
      ) {
        newErrors.secondaryPhone =
          "Secondary phone number must be different.";
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Contact email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!["Call", "Chat", "Email"].includes(formData.contactMethod)) {
      newErrors.contactMethod = "Select a contact method.";
    }

    if (whatsappDirect && !formData.autoResponse.trim()) {
      newErrors.autoResponse =
        "Auto-response message is required when WhatsApp is enabled.";
    } else if (formData.autoResponse.length > 500) {
      newErrors.autoResponse =
        "Auto-response message cannot exceed 500 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Save changes
  const handleSave = (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    const updatedData = {
      ...formData,
      whatsappPhone: formData.whatsappPhone.trim(),
      secondaryPhone: formData.secondaryPhone.trim(),
      email: formData.email.trim(),
      autoResponse: formData.autoResponse.trim(),
      showPhonePublicly,
      whatsappDirect,
    };

    setSavedData(updatedData);

    setFormData({
      whatsappPhone: updatedData.whatsappPhone,
      secondaryPhone: updatedData.secondaryPhone,
      email: updatedData.email,
      contactMethod: updatedData.contactMethod,
      autoResponse: updatedData.autoResponse,
    });

    console.log("Contact Preferences:", updatedData);

    setIsEditing(false);
    setSuccessMessage("Contact preferences saved successfully.");
  };

  // Cancel changes
  const handleCancel = () => {
    setFormData({
      whatsappPhone: savedData.whatsappPhone,
      secondaryPhone: savedData.secondaryPhone,
      email: savedData.email,
      contactMethod: savedData.contactMethod,
      autoResponse: savedData.autoResponse,
    });

    setShowPhonePublicly(savedData.showPhonePublicly);
    setWhatsappDirect(savedData.whatsappDirect);
    setErrors({});
    setIsEditing(false);
    setSuccessMessage("");
  };

  const inputClass =
    "h-[40px] w-full rounded-[4px] border border-[#cfcfcf] px-[10px] text-[12px] outline-none focus:border-[#970000]";

  const labelClass =
    "mb-[5px] block text-[16px] font-semibold text-[#333]";

  const errorClass = "mt-[4px] text-[12px] text-red-600";

  return (
    <section
      className="w-full rounded-[4px] bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center gap-[8px] border-b border-[#e5e5e5] px-[16px] py-[9px]">
        <h2 className="text-[20px] font-semibold text-[#333]">
          CONTACT PREFERENCES
        </h2>

        {/* Pen icon always visible */}
        <button
          type="button"
          onClick={handleEdit}
          title={isEditing ? "Editing contact preferences" : "Edit contact preferences"}
          aria-label="Edit contact preferences"
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

      <form
        onSubmit={handleSave}
        noValidate
        className="px-[16px] pb-[18px] pt-[12px]"
      >
        {/* Phone Numbers */}
        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2">
          <div>
            <label htmlFor="whatsappPhone" className={labelClass}>
              Phone Number (WhatsApp) *
            </label>

            <input
              id="whatsappPhone"
              name="whatsappPhone"
              type="tel"
              value={formData.whatsappPhone}
              onChange={handleChange}
              readOnly={!isEditing}
              placeholder="+91 93761 34217"
              autoComplete="tel"
              aria-invalid={Boolean(errors.whatsappPhone)}
              className={`${inputClass} ${
                errors.whatsappPhone ? "border-red-500" : ""
              } ${!isEditing ? "cursor-default bg-gray-50" : "bg-white"}`}
            />

            {errors.whatsappPhone && (
              <p className={errorClass}>{errors.whatsappPhone}</p>
            )}
          </div>

          <div>
            <label htmlFor="secondaryPhone" className={labelClass}>
              Secondary Phone Number{" "}
              <span className="text-[12px] font-normal italic text-[#888]">
                (Optional)
              </span>
            </label>

            <input
              id="secondaryPhone"
              name="secondaryPhone"
              type="tel"
              value={formData.secondaryPhone}
              onChange={handleChange}
              readOnly={!isEditing}
              placeholder="+91 65012 13242"
              autoComplete="tel"
              aria-invalid={Boolean(errors.secondaryPhone)}
              className={`${inputClass} ${
                errors.secondaryPhone ? "border-red-500" : ""
              } ${!isEditing ? "cursor-default bg-gray-50" : "bg-white"}`}
            />

            {errors.secondaryPhone && (
              <p className={errorClass}>{errors.secondaryPhone}</p>
            )}
          </div>
        </div>

        {/* Contact Email */}
        <div className="mt-[12px]">
          <label htmlFor="email" className={labelClass}>
            Contact Email *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            readOnly={!isEditing}
            placeholder="Enter contact email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            className={`${inputClass} ${
              errors.email ? "border-red-500" : ""
            } ${!isEditing ? "cursor-default bg-gray-50" : "bg-white"}`}
          />

          {errors.email && (
            <p className={errorClass}>{errors.email}</p>
          )}
        </div>

        <div className="my-[14px] border-t border-[#eeeeee]" />

        {/* Primary Contact Method */}
        <fieldset>
          <legend className="mb-[8px] text-[16px] font-semibold text-[#333]">
            Primary Contact Method Preference *
          </legend>

          <div className="flex flex-wrap items-center gap-[18px]">
            {["Call", "Chat", "Email"].map((method) => (
              <label
                key={method}
                className={`flex items-center gap-[6px] text-[14px] text-[#333] ${
                  isEditing ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  checked={formData.contactMethod === method}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="h-[15px] w-[15px] accent-[#970000]"
                />
                {method}
              </label>
            ))}
          </div>

          {errors.contactMethod && (
            <p className={errorClass}>{errors.contactMethod}</p>
          )}
        </fieldset>

        {/* Show Phone Publicly */}
        <div className="mt-[16px] flex flex-wrap items-center justify-between gap-[10px] sm:justify-start sm:gap-[16px]">
          <span className="text-[16px] font-semibold text-[#333]">
            Show Phone Number Publicly
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={showPhonePublicly}
            disabled={!isEditing}
            aria-label="Show phone number publicly"
            onClick={() => setShowPhonePublicly((prev) => !prev)}
            className={`relative h-[18px] w-[28px] rounded-full transition-colors disabled:cursor-default ${
              showPhonePublicly ? "bg-[#a90000]" : "bg-[#cfcfcf]"
            }`}
          >
            <span
              className={`absolute top-[3px] h-[12px] w-[12px] rounded-full bg-white transition-all ${
                showPhonePublicly ? "right-[2px]" : "left-[2px]"
              }`}
            />
          </button>
        </div>

        {/* WhatsApp Direct */}
        <div className="mt-[12px] flex flex-wrap items-center justify-between gap-[10px] sm:justify-start sm:gap-[16px]">
          <span className="text-[16px] font-semibold text-[#333]">
            Enable WhatsApp Contact Directly
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={whatsappDirect}
            disabled={!isEditing}
            aria-label="Enable WhatsApp contact directly"
            onClick={() => {
              setWhatsappDirect((prev) => !prev);
              setErrors((prev) => ({ ...prev, autoResponse: "" }));
              setSuccessMessage("");
            }}
            className={`relative h-[18px] w-[28px] rounded-full transition-colors disabled:cursor-default ${
              whatsappDirect ? "bg-[#a90000]" : "bg-[#cfcfcf]"
            }`}
          >
            <span
              className={`absolute top-[3px] h-[12px] w-[12px] rounded-full bg-white transition-all ${
                whatsappDirect ? "right-[2px]" : "left-[2px]"
              }`}
            />
          </button>
        </div>

        {/* WhatsApp Auto-response */}
        <div className="mt-[16px]">
          <label
            htmlFor="autoResponse"
            className={`mb-[5px] block text-[16px] font-semibold ${
              whatsappDirect ? "text-[#333]" : "text-[#999]"
            }`}
          >
            Auto-response Message in WhatsApp
            {whatsappDirect && " *"}
          </label>

          <textarea
            id="autoResponse"
            name="autoResponse"
            value={formData.autoResponse}
            onChange={handleChange}
            readOnly={!isEditing}
            maxLength={500}
            placeholder="Write about your business in brief for client overview"
            aria-invalid={Boolean(errors.autoResponse)}
            className={`min-h-[70px] w-full resize-y rounded-[4px] border border-[#cfcfcf] px-[10px] py-[8px] text-[12px] outline-none focus:border-[#970000] ${
              errors.autoResponse ? "border-red-500" : ""
            } ${!isEditing ? "cursor-default bg-gray-50" : "bg-white"}`}
          />

          <div className="mt-[4px] flex items-start justify-between gap-[8px]">
            {errors.autoResponse ? (
              <p className={errorClass}>{errors.autoResponse}</p>
            ) : (
              <span />
            )}

            <span className="shrink-0 text-[11px] text-[#888]">
              {formData.autoResponse.length}/500
            </span>
          </div>
        </div>

        {/* Save and Cancel */}
        {isEditing && (
          <div className="mt-[18px] flex flex-wrap items-center gap-[10px]">
            <button
              type="submit"
              className="flex items-center gap-[6px] rounded-[4px] bg-[#970000] px-[18px] py-[9px] text-[13px] font-medium text-white hover:bg-[#790000]"
            >
              <FaCheck />
              Save Preferences
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="flex items-center gap-[6px] rounded-[4px] border border-[#cfcfcf] px-[18px] py-[9px] text-[13px] text-[#333] hover:bg-gray-100"
            >
              <FaTimes />
              Cancel
            </button>
          </div>
        )}

        {successMessage && !isEditing && (
          <p role="status" className="mt-[12px] text-[13px] text-green-700">
            {successMessage}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactPreferences;
