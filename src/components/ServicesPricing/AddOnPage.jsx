
import React, { useEffect, useMemo, useState } from "react";
import {
  FiPlusCircle,
  FiEdit,
  FiChevronDown,
  FiUploadCloud,
  FiCheckCircle,
  FiEye,
} from "react-icons/fi";
import { FaCamera, FaTrash, FaTimes } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

import ServicesPricingLayout from "./ServicesPricingLayout";
import PricingField, {
  inputClassName,
  selectClassName,
  textareaClassName,
} from "./PricingField";

const STORAGE_KEY = "specificAddOns";
const DRAFT_KEY = "addOnDraft";
const MAX_IMAGE_SIZE = 2 * 1024 * 1024;

const emptyFormData = {
  addOnName: "",
  category: "",
  chargeType: "Amount Per Event",
  totalPrice: "",
  description: "",
  previewImage: "",
  imageName: "",
  applicability: "To all Services & Packages",
};

const initialAddOns = [
  {
    id: 1,
    addOnName: "Neon Lighting Service",
    category: "Photography",
    description: "Lighting, Applicable To All Services and Packages",
    chargeType: "Amount Per Event",
    totalPrice: "5000",
    applicability: "To all Services & Packages",
    previewImage: "",
    imageName: "",
    status: "saved",
    savedAt: new Date().toISOString(),
  },
  {
    id: 2,
    addOnName: "Cinematic Reel Shots Recording for Social Media Presence",
    category: "Videography",
    description: "Cinematic videography, Applicable To Packages",
    chargeType: "Amount Per Event",
    totalPrice: "8000",
    applicability: "Specific Packages",
    previewImage: "",
    imageName: "",
    status: "saved",
    savedAt: new Date().toISOString(),
  },
];

const AddOnPage = () => {
  const [formData, setFormData] = useState({ ...emptyFormData });
  const [savedAddOns, setSavedAddOns] = useState(initialAddOns);

  const [errors, setErrors] = useState({});
  const [saveMessage, setSaveMessage] = useState("");
  const [saveType, setSaveType] = useState("");

  const [showMainForm, setShowMainForm] = useState(true);
  const [editingAddOnId, setEditingAddOnId] = useState(null);
  const [isViewMode, setIsViewMode] = useState(false);

  const [sortBy, setSortBy] = useState("newest");

  // Load saved Add-ons from localStorage
  useEffect(() => {
    try {
      const storedAddOns = localStorage.getItem(STORAGE_KEY);

      if (storedAddOns) {
        const parsed = JSON.parse(storedAddOns);
        if (Array.isArray(parsed)) setSavedAddOns(parsed);
      }
    } catch (error) {
      console.error("Unable to load Add-ons:", error);
    }
  }, []);

  // Sort Add-ons without changing original state
  const sortedAddOns = useMemo(() => {
    const list = [...savedAddOns];

    switch (sortBy) {
      case "oldest":
        return list.sort(
          (a, b) => new Date(a.savedAt || 0) - new Date(b.savedAt || 0)
        );

      case "name-asc":
        return list.sort((a, b) =>
          (a.addOnName || "").localeCompare(b.addOnName || "")
        );

      case "name-desc":
        return list.sort((a, b) =>
          (b.addOnName || "").localeCompare(a.addOnName || "")
        );

      case "newest":
      default:
        return list.sort(
          (a, b) => new Date(b.savedAt || 0) - new Date(a.savedAt || 0)
        );
    }
  }, [savedAddOns, sortBy]);

  const showMessage = (message, type = "success") => {
    setSaveMessage(message);
    setSaveType(type);
  };

  const clearMessage = () => {
    setSaveMessage("");
    setSaveType("");
  };

  const saveToStorage = (items) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  // Input restrictions
  const allowOnlyAlphabets = (value) =>
    value.replace(/[^\p{L}\s-]/gu, "");

  const allowOnlyCategory = (value) =>
    value.replace(/[^\p{L}\s]/gu, "");

  const allowOnlyNumbers = (value) => {
    let cleaned = value.replace(/[^0-9.]/g, "");
    const parts = cleaned.split(".");

    if (parts.length > 2) {
      cleaned = parts[0] + "." + parts.slice(1).join("");
    }

    return cleaned;
  };

  const allowDescription = (value) =>
    value.replace(/[^\p{L}\p{N}\s.,!?'"():;\/&+-]/gu, "");

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    let updatedValue = value;

    if (isViewMode) return;

    if (name === "addOnName") {
      updatedValue = allowOnlyAlphabets(value);
    }

    if (name === "category") {
      updatedValue = allowOnlyCategory(value);
    }

    if (name === "totalPrice") {
      updatedValue = allowOnlyNumbers(value);
    }

    if (name === "description") {
      updatedValue = allowDescription(value).slice(0, 400);
    }

    setFormData((previous) => ({
      ...previous,
      [name]: updatedValue,
    }));

    if (errors[name]) {
      setErrors((previous) => ({ ...previous, [name]: "" }));
    }

    clearMessage();
  };

  // Convert uploaded image to data URL so it can persist in localStorage
  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
      showMessage("Please upload a PNG, JPG, or WEBP image.", "error");
      event.target.value = "";
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      showMessage("Image size must be less than 2MB.", "error");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setFormData((previous) => ({
        ...previous,
        previewImage: reader.result,
        imageName: file.name,
      }));
      clearMessage();
    };

    reader.onerror = () => {
      showMessage("Unable to read the selected image.", "error");
    };

    reader.readAsDataURL(file);
    event.target.value = "";
  };

  // Required field validation
  const validateForm = () => {
    const newErrors = {};
    const name = formData.addOnName.trim();
    const category = formData.category.trim();
    const price = formData.totalPrice.trim();

    if (!name) {
      newErrors.addOnName = "Add-on Name is required.";
    } else if (name.length > 80) {
      newErrors.addOnName = "Add-on Name must be 80 characters or fewer.";
    } else if (!/^[\p{L}\s-]+$/u.test(name)) {
      newErrors.addOnName = "Only alphabets, spaces and hyphens are allowed.";
    }

    if (!category) {
      newErrors.category = "Category is required.";
    } else if (category.length > 60) {
      newErrors.category = "Category must be 60 characters or fewer.";
    } else if (!/^[\p{L}\s]+$/u.test(category)) {
      newErrors.category = "Only alphabets and spaces are allowed.";
    }

    if (!formData.chargeType) {
      newErrors.chargeType = "Please select a charge type.";
    }

    if (!price) {
      newErrors.totalPrice = "Total Price is required.";
    } else if (
      !/^\d+(\.\d{1,2})?$/.test(price) ||
      !Number.isFinite(Number(price)) ||
      Number(price) <= 0
    ) {
      newErrors.totalPrice = "Enter a valid price greater than 0.";
    }

    if (formData.description.length > 400) {
      newErrors.description = "Description cannot exceed 400 characters.";
    }

    if (!formData.applicability) {
      newErrors.applicability = "Applicability is required.";
    }

    const duplicate = savedAddOns.some(
      (item) =>
        item.addOnName?.trim().toLowerCase() === name.toLowerCase() &&
        item.category?.trim().toLowerCase() === category.toLowerCase() &&
        item.id !== editingAddOnId
    );

    if (name && category && duplicate) {
      newErrors.addOnName =
        "An Add-on with this name already exists in this category.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Draft validation allows incomplete fields
  const validateDraft = () => {
    const newErrors = {};
    const name = formData.addOnName.trim();
    const category = formData.category.trim();
    const price = formData.totalPrice.trim();

    if (name.length > 80) {
      newErrors.addOnName = "Add-on Name must be 80 characters or fewer.";
    } else if (name && !/^[\p{L}\s-]+$/u.test(name)) {
      newErrors.addOnName = "Only alphabets, spaces and hyphens are allowed.";
    }

    if (category.length > 60) {
      newErrors.category = "Category must be 60 characters or fewer.";
    } else if (category && !/^[\p{L}\s]+$/u.test(category)) {
      newErrors.category = "Only alphabets and spaces are allowed.";
    }

    if (
      price &&
      (!/^\d+(\.\d{1,2})?$/.test(price) || Number(price) <= 0)
    ) {
      newErrors.totalPrice = "Enter a valid price greater than 0.";
    }

    const duplicate = savedAddOns.some(
      (item) =>
        item.addOnName?.trim().toLowerCase() === name.toLowerCase() &&
        item.category?.trim().toLowerCase() === category.toLowerCase() &&
        item.id !== editingAddOnId
    );

    if (name && category && duplicate) {
      newErrors.addOnName =
        "An Add-on with this name already exists in this category.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Save draft
  const handleSaveDraft = () => {
    if (isViewMode) return;

    if (!validateDraft()) {
      showMessage("Please correct the highlighted fields.", "error");
      return;
    }

    try {
      const draft = {
        ...formData,
        status: "draft",
        savedAt: new Date().toISOString(),
      };

      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
      showMessage("Draft saved successfully.");
    } catch (error) {
      console.error("Unable to save draft:", error);
      showMessage("Unable to save draft. Browser storage may be full.", "error");
    }
  };

  // Save new Add-on or update existing Add-on
  const handleSaveAddOn = () => {
    if (isViewMode) return;

    if (!validateForm()) {
      showMessage("Please fill all required fields correctly.", "error");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const newAddOn = {
      ...formData,
      id: editingAddOnId || Date.now(),
      addOnName: formData.addOnName.trim(),
      category: formData.category.trim(),
      totalPrice: formData.totalPrice.trim(),
      description:
        formData.description.trim() ||
        `${formData.chargeType}, ${formData.applicability}`,
      status: "saved",
      savedAt: new Date().toISOString(),
    };

    const updated = editingAddOnId
      ? savedAddOns.map((item) =>
          item.id === editingAddOnId ? newAddOn : item
        )
      : [...savedAddOns, newAddOn];

    try {
      saveToStorage(updated);
      setSavedAddOns(updated);
      setFormData({ ...emptyFormData });
      setEditingAddOnId(null);
      setIsViewMode(false);
      setErrors({});
      showMessage(
        editingAddOnId
          ? "Add-on updated successfully."
          : "Add-on saved successfully."
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Unable to save Add-on:", error);
      showMessage("Unable to save Add-on. Please try again.", "error");
    }
  };

  // Load selected Add-on into form
  const loadAddOn = (addOn) => {
    setFormData({
      ...emptyFormData,
      ...addOn,
      totalPrice: String(addOn.totalPrice || ""),
    });

    setEditingAddOnId(addOn.id);
    setErrors({});
    setShowMainForm(true);
    clearMessage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Edit selected Add-on
  const handleEditAddOn = (addOn) => {
    loadAddOn(addOn);
    setIsViewMode(false);
  };

  // View selected Add-on in read-only mode
  const handleViewAddOn = (addOn) => {
    loadAddOn(addOn);
    setIsViewMode(true);
  };

  // Create new Add-on
  const handleNewAddOn = () => {
    setFormData({ ...emptyFormData });
    setEditingAddOnId(null);
    setIsViewMode(false);
    setErrors({});
    setShowMainForm(true);
    clearMessage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete saved Add-on
  const handleDeleteAddOn = (id) => {
    if (!window.confirm("Are you sure you want to delete this Add-on?")) {
      return;
    }

    const updated = savedAddOns.filter((item) => item.id !== id);

    try {
      saveToStorage(updated);
      setSavedAddOns(updated);

      if (editingAddOnId === id) {
        setFormData({ ...emptyFormData });
        setEditingAddOnId(null);
        setIsViewMode(false);
      }

      showMessage("Add-on deleted successfully.");
    } catch (error) {
      console.error("Unable to delete Add-on:", error);
      showMessage("Unable to delete Add-on. Please try again.", "error");
    }
  };

  // Clear current form
  const handleClearForm = () => {
    if (!window.confirm("Are you sure you want to clear this form?")) return;

    setFormData({ ...emptyFormData });
    setEditingAddOnId(null);
    setIsViewMode(false);
    setErrors({});
    clearMessage();
  };

  // Toggle form visibility
  const handleToggleForm = () => {
    setShowMainForm((previous) => !previous);
  };

  return (
    <ServicesPricingLayout activeModel="addons" showBackgroundLines={false}>
      {/* SUCCESS / ERROR MESSAGE */}
      {saveMessage && (
        <div
          role="status"
          className={`mt-[15px] flex items-center gap-2 rounded-[5px] border px-4 py-3 text-sm font-medium ${
            saveType === "success"
              ? "border-[#b7dfbd] bg-[#edf9ef] text-[#26733a]"
              : "border-[#efb0b0] bg-[#fff1f1] text-[#c40000]"
          }`}
        >
          {saveType === "success" && <FiCheckCircle size={19} />}
          <span>{saveMessage}</span>
          <button
            type="button"
            onClick={clearMessage}
            aria-label="Dismiss message"
            className="ml-auto"
          >
            <FaTimes />
          </button>
        </div>
      )}

      {/* TOOLBAR */}
      <div className="mt-[18px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[18px] text-[#555555]">
            All ({String(savedAddOns.length).padStart(2, "0")})
          </span>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              aria-label="Sort Add-ons"
              className="h-[42px] w-[155px] appearance-none rounded border border-[#dddddd] bg-white px-3 pr-8 text-sm text-[#333333] outline-none focus:border-[#c40000]"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name-asc">Name A–Z</option>
              <option value="name-desc">Name Z–A</option>
            </select>
            <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <button
          type="button"
          onClick={handleNewAddOn}
          className="flex h-[48px] w-full items-center justify-center gap-2 rounded bg-[#c40000] px-4 text-base font-semibold text-white transition hover:bg-[#a80000] active:scale-[0.98] sm:w-[218px]"
        >
          <FiPlusCircle size={17} />
          New Add-on
        </button>
      </div>

      {/* MAIN ADD-ON FORM CARD */}
      <section className="mt-[15px] overflow-hidden rounded-[6px] bg-white">
        <div className="flex min-h-[48px] items-center justify-between px-4">
          <p className="text-[19px] font-medium text-[#555555]">
            {isViewMode
              ? "View Add-on"
              : editingAddOnId
              ? "Edit Add-on"
              : "Add-on Details"}
          </p>

          {isViewMode && (
            <span className="rounded bg-[#f3f3f3] px-3 py-1 text-xs text-[#555555]">
              Read Only
            </span>
          )}
        </div>

        {/* TOP ACTIONS */}
        <div className="flex h-[56px] items-center justify-end gap-7 border-y border-[#e5e5e5] px-5 sm:px-[34px]">
          <button
            type="button"
            onClick={() => {
              setIsViewMode(false);
              setShowMainForm(true);
            }}
            title="Edit"
            aria-label="Edit Add-on"
            className="text-[#222222] transition hover:text-[#c40000]"
          >
            <FiEdit size={21} />
          </button>

          <button
            type="button"
            onClick={handleClearForm}
            title="Clear form"
            aria-label="Clear current form"
            className="text-[#8b0000] transition hover:text-[#c40000]"
          >
            <FaTrash size={17} />
          </button>

          <button
            type="button"
            onClick={handleToggleForm}
            title={showMainForm ? "Hide form" : "Show form"}
            aria-label={showMainForm ? "Hide form" : "Show form"}
            className="text-[#222222] transition hover:text-[#c40000]"
          >
            {showMainForm ? (
              <LuEyeClosed size={21} />
            ) : (
              <FiEye size={21} />
            )}
          </button>
        </div>

        {/* FORM */}
        {showMainForm && (
          <div className="px-4 py-5 sm:px-[30px] md:px-[34px]">
            <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
              {/* ADD-ON NAME */}
              <PricingField
                label="Add-on Name"
                required
                labelSize="text-[18px]"
                labelClassName="font-semibold"
              >
                <input
                  type="text"
                  name="addOnName"
                  value={formData.addOnName}
                  onChange={handleChange}
                  maxLength={80}
                  disabled={isViewMode}
                  placeholder="Ex: Drone Service - Photos and Video Clips"
                  className={`${inputClassName} ${
                    isViewMode ? "cursor-not-allowed bg-[#f7f7f7]" : ""
                  }`}
                />
                {errors.addOnName && (
                  <p className="mt-1 text-[13px] text-[#c40000]">
                    {errors.addOnName}
                  </p>
                )}
              </PricingField>

              {/* CATEGORY */}
              <PricingField
                label="Category"
                required
                labelSize="text-[18px]"
                labelClassName="font-semibold"
              >
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  maxLength={60}
                  disabled={isViewMode}
                  placeholder="Photography"
                  className={`${inputClassName} ${
                    isViewMode ? "cursor-not-allowed bg-[#f7f7f7]" : ""
                  }`}
                />
                {errors.category && (
                  <p className="mt-1 text-[13px] text-[#c40000]">
                    {errors.category}
                  </p>
                )}
              </PricingField>

              {/* CHARGE TYPE */}
              <PricingField
                label="Charge Type"
                required
                labelSize="text-[18px]"
                labelClassName="font-semibold"
              >
                <select
                  name="chargeType"
                  value={formData.chargeType}
                  onChange={handleChange}
                  disabled={isViewMode}
                  className={`${selectClassName} ${
                    isViewMode ? "cursor-not-allowed bg-[#f7f7f7]" : ""
                  }`}
                >
                  <option>Amount Per Event</option>
                  <option>Amount Per Hour</option>
                  <option>Amount Per Item</option>
                </select>
                {errors.chargeType && (
                  <p className="mt-1 text-[13px] text-[#c40000]">
                    {errors.chargeType}
                  </p>
                )}
              </PricingField>

              {/* TOTAL PRICE */}
              <PricingField
                label="Total Price"
                required
                labelSize="text-[18px]"
                labelClassName="font-semibold"
              >
                <input
                  type="text"
                  name="totalPrice"
                  value={formData.totalPrice}
                  onChange={handleChange}
                  inputMode="decimal"
                  disabled={isViewMode}
                  placeholder="Ex: 12000"
                  className={`${inputClassName} ${
                    isViewMode ? "cursor-not-allowed bg-[#f7f7f7]" : ""
                  }`}
                />
                {errors.totalPrice && (
                  <p className="mt-1 text-[13px] text-[#c40000]">
                    {errors.totalPrice}
                  </p>
                )}
              </PricingField>

              {/* DESCRIPTION */}
              <PricingField
                label="Description"
                labelSize="text-[18px]"
                labelClassName="font-semibold"
                className="sm:col-span-2"
              >
                <div className="relative">
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    maxLength={400}
                    disabled={isViewMode}
                    placeholder="Describe what this Add-on includes..."
                    className={`${textareaClassName} ${
                      isViewMode ? "cursor-not-allowed bg-[#f7f7f7]" : ""
                    }`}
                  />
                  {!isViewMode && (
                    <span className="absolute right-2 top-[-17px] text-[12px] text-[#777777]">
                      {formData.description.length} / 400 Characters
                    </span>
                  )}
                </div>
                {errors.description && (
                  <p className="mt-1 text-[13px] text-[#c40000]">
                    {errors.description}
                  </p>
                )}
              </PricingField>

              {/* PREVIEW IMAGE */}
              <PricingField
                label="Preview Image"
                labelSize="text-[18px]"
                labelClassName="font-semibold"
              >
                <div className="flex min-h-[115px] flex-col items-center justify-center rounded border border-dashed border-[#cccccc] bg-white p-3">
                  {formData.previewImage ? (
                    <div className="flex w-full flex-col items-center gap-2">
                      <img
                        src={formData.previewImage}
                        alt="Add-on preview"
                        className="h-[100px] max-w-full rounded object-contain"
                      />
                      <p className="max-w-full truncate text-xs text-[#555555]">
                        {formData.imageName || "Uploaded image"}
                      </p>
                      {!isViewMode && (
                        <button
                          type="button"
                          onClick={() =>
                            setFormData((previous) => ({
                              ...previous,
                              previewImage: "",
                              imageName: "",
                            }))
                          }
                          className="text-xs text-[#c40000] underline"
                        >
                          Remove image
                        </button>
                      )}
                    </div>
                  ) : isViewMode ? (
                    <p className="text-sm text-[#888888]">No image uploaded</p>
                  ) : (
                    <label className="flex cursor-pointer flex-col items-center text-center">
                      <FiUploadCloud className="text-[25px] text-[#e00000]" />
                      <span className="mt-1 text-sm text-[#555555]">
                        Click to upload an image
                      </span>
                      <span className="mt-1 text-xs text-[#999999]">
                        PNG, JPG, WEBP — Max 2MB
                      </span>
                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/webp"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              </PricingField>

              {/* APPLICABILITY */}
              <PricingField
                label="Applicability"
                required
                labelSize="text-[18px]"
                labelClassName="font-semibold"
              >
                <select
                  name="applicability"
                  value={formData.applicability}
                  onChange={handleChange}
                  disabled={isViewMode}
                  className={`${selectClassName} ${
                    isViewMode ? "cursor-not-allowed bg-[#f7f7f7]" : ""
                  }`}
                >
                  <option>To all Services & Packages</option>
                  <option>Specific Services</option>
                  <option>Specific Packages</option>
                </select>
                {errors.applicability && (
                  <p className="mt-1 text-[13px] text-[#c40000]">
                    {errors.applicability}
                  </p>
                )}
              </PricingField>
            </div>

            {/* FORM BUTTONS */}
            <div className="mt-6 flex flex-col-reverse justify-end gap-3 sm:flex-row sm:items-center">
              {isViewMode ? (
                <button
                  type="button"
                  onClick={() => setIsViewMode(false)}
                  className="h-[42px] rounded bg-[#333333] px-6 text-sm font-semibold text-white transition hover:bg-[#222222]"
                >
                  Edit Add-on
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={handleSaveDraft}
                    className="text-center text-[16px] font-semibold text-[#c40000] transition hover:text-[#970000]"
                  >
                    Save Draft
                  </button>

                  <button
                    type="button"
                    onClick={handleSaveAddOn}
                    className="h-[42px] w-full rounded bg-[#333333] px-5 text-[16px] font-semibold text-white transition hover:bg-[#222222] sm:w-[180px]"
                  >
                    {editingAddOnId ? "Update Add-on" : "Save Add-on"}
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </section>

      {/* SAVED ADD-ONS */}
      <div className="mt-3 space-y-2">
        {sortedAddOns.length === 0 ? (
          <div className="rounded bg-white px-4 py-10 text-center">
            <p className="text-base font-medium text-[#555555]">
              No Add-ons Added Yet
            </p>
            <p className="mt-1 text-sm text-[#888888]">
              Click New Add-on to create your first Add-on.
            </p>
          </div>
        ) : (
          sortedAddOns.map((addOn) => (
            <div
              key={addOn.id}
              className="flex flex-col gap-3 rounded-[5px] bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              {/* ADD-ON DETAILS */}
              <div className="min-w-0 flex-1">
                <h3 className="break-words text-[17px] font-semibold text-[#333333]">
                  {addOn.addOnName}
                </h3>

                <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
                  <div className="inline-flex min-h-[35px] w-fit max-w-full items-center rounded bg-[#222222] px-2 text-white sm:min-w-[142px]">
                    <FaCamera className="mr-2 shrink-0" size={16} />
                    <span className="truncate text-sm font-semibold">
                      {addOn.category}
                    </span>
                  </div>

                  <span className="break-words text-sm leading-5 text-[#777777]">
                    {addOn.description ||
                      `${addOn.chargeType || ""}, ${addOn.applicability || ""}`}
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#777777]">
                  {addOn.totalPrice && (
                    <span>
                      Price: ₹{Number(addOn.totalPrice).toLocaleString("en-IN")}
                    </span>
                  )}
                  {addOn.chargeType && <span>{addOn.chargeType}</span>}
                  {addOn.applicability && <span>{addOn.applicability}</span>}
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex w-full items-center justify-end gap-5 border-t border-[#eeeeee] pt-3 sm:w-auto sm:border-0 sm:pt-0">
                <button
                  type="button"
                  onClick={() => handleEditAddOn(addOn)}
                  title="Edit"
                  aria-label={`Edit ${addOn.addOnName}`}
                  className="text-[#333333] transition hover:text-[#c40000]"
                >
                  <FiEdit size={18} />
                </button>

                <button
                  type="button"
                  onClick={() => handleDeleteAddOn(addOn.id)}
                  title="Delete"
                  aria-label={`Delete ${addOn.addOnName}`}
                  className="text-[#900000] transition hover:text-[#c40000]"
                >
                  <FaTrash size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => handleViewAddOn(addOn)}
                  title="View"
                  aria-label={`View ${addOn.addOnName}`}
                  className="text-[#333333] transition hover:text-[#c40000]"
                >
                  <FiEye size={19} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </ServicesPricingLayout>
  );
};

export default AddOnPage;
