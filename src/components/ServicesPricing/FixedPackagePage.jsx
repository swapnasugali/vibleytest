
import React, { useEffect, useMemo, useState } from "react";
import {
  FiPlusCircle,
  FiEdit,
  FiTrash2,
  FiChevronDown,
  FiCheckCircle,
  FiEye,
  FiEyeOff,
  FiArrowLeft,
} from "react-icons/fi";
import { FaCamera, FaTrash } from "react-icons/fa";
import ServicesPricingLayout from "./ServicesPricingLayout";
import PricingField, {
  inputClassName,
  selectClassName,
  textareaClassName,
} from "./PricingField";

const STORAGE_KEY = "fixedPackageData";

const initialFormData = {
  packageName: "",
  category: "",
  chargeType: "Amount Per Event",
  totalPrice: "",
  description: "",
  overTimeCharge: "",
  travelChargeType: "No Travel Charge",
  travelChargeAmount: "",
  minimumBookingHours: "",
  advanceBookingPayment: "",
  workDeliveryTimeline: "",
};

const initialServices = () => [
  { id: 1, name: "", description: "" },
  { id: 2, name: "", description: "" },
];

const getTravelChargeData = (data = {}) => {
  if (data.travelChargeType) {
    return {
      travelChargeType: data.travelChargeType,
      travelChargeAmount: data.travelChargeAmount || "",
    };
  }

  const oldValue = String(data.travelCharges || "");

  if (/no travel/i.test(oldValue)) {
    return {
      travelChargeType: "No Travel Charge",
      travelChargeAmount: "",
    };
  }

  const match = oldValue.match(/(\d+(?:\.\d+)?)/);

  return match
    ? {
        travelChargeType: "Per Km",
        travelChargeAmount: match[1],
      }
    : {
        travelChargeType: "No Travel Charge",
        travelChargeAmount: "",
      };
};

const FixedPackagePage = () => {
  const [formData, setFormData] = useState({ ...initialFormData });
  const [services, setServices] = useState(initialServices());

  const [savedPackages, setSavedPackages] = useState([
    {
      id: 1,
      packageName: "Corporate Event Package",
      category: "Photography",
      serviceCount: "3 services, Add Ons Applicable",
      travelChargeType: "No Travel Charge",
      travelChargeAmount: "",
    },
    {
      id: 2,
      packageName: "Pre Wedding Shoot Package",
      category: "Photography",
      serviceCount: "4 Services, Add Ons Applicable",
      travelChargeType: "No Travel Charge",
      travelChargeAmount: "",
    },
  ]);

  const [errors, setErrors] = useState({});
  const [saveMessage, setSaveMessage] = useState("");
  const [saveType, setSaveType] = useState("");
  const [editingPackageId, setEditingPackageId] = useState(null);
  const [viewOnly, setViewOnly] = useState(false);
  const [showMainForm, setShowMainForm] = useState(true);
  const [sortBy, setSortBy] = useState("newest");

  // Load saved information
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return;

      const parsed = JSON.parse(stored);

      if (parsed.formData) {
        setFormData({
          ...initialFormData,
          ...parsed.formData,
          ...getTravelChargeData(parsed.formData),
        });
      }

      if (Array.isArray(parsed.services)) {
        setServices(parsed.services);
      }

      if (Array.isArray(parsed.savedPackages)) {
        setSavedPackages(
          parsed.savedPackages.map((pkg) => ({
            ...pkg,
            ...getTravelChargeData(pkg),
          }))
        );
      }
    } catch (error) {
      console.error("Unable to load package data:", error);
    }
  }, []);

  // Alphabet and number restrictions
  const allowOnlyAlphabets = (value) =>
    value.replace(/[^a-zA-Z\s]/g, "");

  const allowOnlyNumbers = (value) => {
    let cleaned = value.replace(/[^0-9.]/g, "");
    const parts = cleaned.split(".");

    if (parts.length > 2) {
      cleaned = parts[0] + "." + parts.slice(1).join("");
    }

    return cleaned;
  };

  const allowPrice = (value) =>
    value.replace(/[^0-9,./-]/g, "");

  const allowPercentage = (value) =>
    value.replace(/[^0-9.%]/g, "");

  const allowDescription = (value) =>
    value.replace(/[^a-zA-Z0-9\s.,!?'-]/g, "");

  const clearMessage = () => {
    setSaveMessage("");
    setSaveType("");
  };

  // Sorted package list
  const sortedPackages = useMemo(() => {
    const list = [...savedPackages];

    switch (sortBy) {
      case "oldest":
        return list.sort((a, b) => Number(a.id) - Number(b.id));

      case "az":
        return list.sort((a, b) =>
          a.packageName.localeCompare(b.packageName)
        );

      case "za":
        return list.sort((a, b) =>
          b.packageName.localeCompare(a.packageName)
        );

      default:
        return list.sort((a, b) => Number(b.id) - Number(a.id));
    }
  }, [savedPackages, sortBy]);

  // Input change
  const handleChange = (event) => {
    if (viewOnly) return;

    const { name, value } = event.target;
    let updatedValue = value;

    switch (name) {
      case "packageName":
      case "category":
        updatedValue = allowOnlyAlphabets(value);
        break;

      case "totalPrice":
        updatedValue = allowPrice(value);
        break;

      case "overTimeCharge":
      case "minimumBookingHours":
      case "travelChargeAmount":
        updatedValue = allowOnlyNumbers(value);
        break;

      case "advanceBookingPayment":
        updatedValue = allowPercentage(value);
        break;

      case "description":
      case "workDeliveryTimeline":
        updatedValue = allowDescription(value);
        break;

      default:
        break;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: updatedValue,
      ...(name === "travelChargeType" &&
      value === "No Travel Charge"
        ? { travelChargeAmount: "" }
        : {}),
    }));

    if (errors[name]) {
      setErrors((previous) => ({ ...previous, [name]: "" }));
    }

    clearMessage();
  };

  // Service input
  const handleServiceChange = (id, field, value) => {
    if (viewOnly) return;

    let updatedValue = value;

    if (field === "name") {
      updatedValue = allowOnlyAlphabets(value);
    }

    if (field === "description") {
      updatedValue = allowDescription(value);
    }

    setServices((previous) =>
      previous.map((service) =>
        service.id === id
          ? { ...service, [field]: updatedValue }
          : service
      )
    );

    setErrors((previous) => ({
      ...previous,
      [`service-${id}-${field}`]: "",
    }));

    clearMessage();
  };

  const addService = () => {
    if (viewOnly) return;

    setServices((previous) => [
      ...previous,
      { id: Date.now(), name: "", description: "" },
    ]);
  };

  const removeService = (id) => {
    if (viewOnly) return;

    if (services.length <= 2) {
      setErrors((previous) => ({
        ...previous,
        services: "At least 2 services are required.",
      }));
      return;
    }

    setServices((previous) =>
      previous.filter((service) => service.id !== id)
    );
  };

  // Reset form
  const resetForm = () => {
    setFormData({ ...initialFormData });
    setServices(initialServices());
    setErrors({});
    setEditingPackageId(null);
    setViewOnly(false);
    clearMessage();
  };

  // Price validation
  const isValidPrice = (value) => {
    const price = value.trim();

    const validFormat =
      /^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{1,2})?(?:\/-)?$/.test(
        price
      );

    const numericValue = Number(
      price.replace(/,/g, "").replace(/\/-$/, "")
    );

    return (
      validFormat &&
      Number.isFinite(numericValue) &&
      numericValue > 0
    );
  };

  const isValidTravelAmount = (value) =>
    /^\d+(\.\d{1,2})?$/.test(value) && Number(value) > 0;

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    const packageName = formData.packageName.trim();
    const category = formData.category.trim();
    const price = formData.totalPrice.trim();
    const advance = formData.advanceBookingPayment.trim();

    if (!packageName) {
      newErrors.packageName = "Package Name is required.";
    } else if (packageName.length > 80) {
      newErrors.packageName = "Maximum 80 characters allowed.";
    }

    if (!category) {
      newErrors.category = "Category is required.";
    } else if (category.length > 60) {
      newErrors.category = "Maximum 60 characters allowed.";
    }

    if (!formData.chargeType) {
      newErrors.chargeType = "Please select a charge type.";
    }

    if (!price) {
      newErrors.totalPrice = "Total Price is required.";
    } else if (!isValidPrice(price)) {
      newErrors.totalPrice = "Enter a valid price greater than 0.";
    }

    if (formData.description.length > 400) {
      newErrors.description = "Maximum 400 characters allowed.";
    }

    if (!advance) {
      newErrors.advanceBookingPayment =
        "Advance Booking Payment is required.";
    } else if (
      !/^\d+(?:\.\d+)?%?$/.test(advance) ||
      Number(advance.replace("%", "")) < 1 ||
      Number(advance.replace("%", "")) > 100
    ) {
      newErrors.advanceBookingPayment =
        "Enter a percentage between 1 and 100.";
    }

    if (formData.overTimeCharge.trim()) {
      const value = formData.overTimeCharge.trim();

      if (!/^\d+(\.\d{1,2})?$/.test(value)) {
        newErrors.overTimeCharge = "Enter a valid overtime charge.";
      }
    }

    if (formData.travelChargeType !== "No Travel Charge") {
      if (!isValidTravelAmount(formData.travelChargeAmount.trim())) {
        newErrors.travelChargeAmount =
          "Enter a valid travel charge amount.";
      }
    }

    if (formData.minimumBookingHours.trim()) {
      const value = formData.minimumBookingHours.trim();

      if (!/^\d+(\.\d+)?$/.test(value) || Number(value) <= 0) {
        newErrors.minimumBookingHours =
          "Enter booking hours greater than 0.";
      }
    }

    if (services.length < 2) {
      newErrors.services = "At least 2 services are required.";
    }

    services.forEach((service) => {
      const name = service.name.trim();
      const description = service.description.trim();

      if (!name) {
        newErrors[`service-${service.id}-name`] =
          "Service Name is required.";
      } else if (name.length > 80) {
        newErrors[`service-${service.id}-name`] =
          "Maximum 80 characters allowed.";
      }

      if (!description) {
        newErrors[`service-${service.id}-description`] =
          "Description is required.";
      } else if (description.length > 200) {
        newErrors[`service-${service.id}-description`] =
          "Maximum 200 characters allowed.";
      }
    });

    const duplicate = savedPackages.some(
      (pkg) =>
        pkg.id !== editingPackageId &&
        pkg.packageName?.trim().toLowerCase() ===
          packageName.toLowerCase() &&
        pkg.category?.trim().toLowerCase() ===
          category.toLowerCase()
    );

    if (duplicate) {
      newErrors.packageName =
        "A package with this name and category already exists.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Save data to localStorage
  const savePackageData = (
    status,
    packages = savedPackages,
    draft = formData,
    serviceList = services
  ) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        formData: draft,
        services: serviceList,
        savedPackages: packages,
        status,
        savedAt: new Date().toISOString(),
      })
    );
  };

  // Save draft
  const handleSaveDraft = () => {
    if (viewOnly) return;

    const draftErrors = {};

    if (
      formData.totalPrice.trim() &&
      !isValidPrice(formData.totalPrice)
    ) {
      draftErrors.totalPrice = "Enter a valid price.";
    }

    if (
      formData.description.length > 400
    ) {
      draftErrors.description = "Maximum 400 characters allowed.";
    }

    if (formData.packageName.length > 80) {
      draftErrors.packageName = "Maximum 80 characters allowed.";
    }

    if (formData.category.length > 60) {
      draftErrors.category = "Maximum 60 characters allowed.";
    }

    setErrors(draftErrors);

    if (Object.keys(draftErrors).length > 0) {
      setSaveType("error");
      setSaveMessage("Please correct the highlighted fields.");
      return;
    }

    try {
      savePackageData("draft");
      setSaveType("success");
      setSaveMessage("Draft saved successfully.");
    } catch (error) {
      console.error(error);
      setSaveType("error");
      setSaveMessage("Unable to save draft. Please try again.");
    }
  };

  // Save or update package
  const handleSavePackage = () => {
    if (viewOnly) return;

    if (!validateForm()) {
      setSaveType("error");
      setSaveMessage("Please fill all required fields correctly.");

      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const newPackage = {
      id: editingPackageId ?? Date.now(),
      packageName: formData.packageName.trim(),
      category: formData.category.trim(),
      serviceCount: `${services.length} services, Add Ons Applicable`,
      travelChargeType: formData.travelChargeType,
      travelChargeAmount:
        formData.travelChargeType === "No Travel Charge"
          ? ""
          : formData.travelChargeAmount.trim(),
      formData: { ...formData },
      services: [...services],
    };

    const updatedPackages = editingPackageId
      ? savedPackages.map((pkg) =>
          pkg.id === editingPackageId ? newPackage : pkg
        )
      : [...savedPackages, newPackage];

    try {
      savePackageData(
        "saved",
        updatedPackages,
        { ...initialFormData },
        initialServices()
      );

      setSavedPackages(updatedPackages);
      resetForm();

      setSaveType("success");
      setSaveMessage(
        editingPackageId
          ? "Package updated successfully."
          : "Package saved successfully."
      );

      setShowMainForm(true);
    } catch (error) {
      console.error(error);
      setSaveType("error");
      setSaveMessage("Unable to save package. Please try again.");
    }
  };

  // Delete saved package
  const handleDeletePackage = (id) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this package?"
    );

    if (!shouldDelete) return;

    const updatedPackages = savedPackages.filter(
      (pkg) => pkg.id !== id
    );

    setSavedPackages(updatedPackages);

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed = stored ? JSON.parse(stored) : {};

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          ...parsed,
          savedPackages: updatedPackages,
        })
      );

      setSaveType("success");
      setSaveMessage("Package deleted successfully.");
    } catch (error) {
      console.error(error);
      setSaveType("error");
      setSaveMessage("Unable to delete package.");
    }
  };

  // Load package for editing
  const handleEditPackage = (pkg) => {
    setEditingPackageId(pkg.id);
    setViewOnly(false);

    setFormData({
      ...initialFormData,
      ...(pkg.formData || {}),
      packageName: pkg.packageName || "",
      category: pkg.category || "",
      ...getTravelChargeData(pkg.formData || pkg),
    });

    setServices(
      Array.isArray(pkg.services) && pkg.services.length
        ? pkg.services
        : initialServices()
    );

    setErrors({});
    clearMessage();
    setShowMainForm(true);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Load package in read-only view
  const handleViewPackage = (pkg) => {
    handleEditPackage(pkg);
    setViewOnly(true);
  };

  const travelText = (pkg) => {
    const data = getTravelChargeData(pkg);

    if (data.travelChargeType === "No Travel Charge") {
      return "No Travel Charge";
    }

    if (data.travelChargeType === "Per Km") {
      return `₹${data.travelChargeAmount} / Km`;
    }

    return `₹${data.travelChargeAmount} Fixed`;
  };

  const showError = (name) =>
    errors[name] ? (
      <p className="mt-1 text-[12px] text-[#c40000] sm:text-[13px]">
        {errors[name]}
      </p>
    ) : null;

  const fieldLabel =
    "text-[16px] sm:text-[18px] font-semibold";

  return (
    <ServicesPricingLayout
      activeModel="fixed"
      showBackgroundLines={false}
    >
      <div className="mx-auto w-full max-w-[1090px] px-[12px] sm:px-[16px] md:px-[20px] lg:px-0">

        {/* MESSAGE */}

        {saveMessage && (
          <div
            className={`mt-4 flex items-center gap-2 rounded border px-4 py-3 text-sm sm:text-base ${
              saveType === "success"
                ? "border-[#b7dfbd] bg-[#edf9ef] text-[#26733a]"
                : "border-[#efb0b0] bg-[#fff1f1] text-[#c40000]"
            }`}
          >
            {saveType === "success" && (
              <FiCheckCircle className="shrink-0 text-xl" />
            )}
            {saveMessage}
          </div>
        )}

        {/* TOOLBAR */}

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center justify-between gap-3 sm:justify-start">
            <span className="text-[17px] text-[#555] sm:text-xl">
              All ({String(savedPackages.length).padStart(2, "0")})
            </span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                aria-label="Sort packages"
                className="h-[42px] w-[145px] appearance-none rounded border border-[#ddd] bg-white px-3 pr-8 text-sm text-[#333] outline-none focus:border-[#c40000] sm:h-[45px] sm:text-base"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="az">Name: A to Z</option>
                <option value="za">Name: Z to A</option>
              </select>
              <FiChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              resetForm();
              setShowMainForm(true);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex h-[48px] w-full items-center justify-center gap-2 rounded bg-[#c40000] px-4 text-base font-semibold text-white transition hover:bg-[#a80000] sm:h-[52px] sm:w-[218px] sm:text-lg"
          >
            <FiPlusCircle />
            Add Package
          </button>
        </div>

        {/* MAIN PACKAGE FORM */}

        {showMainForm && (
          <section className="mt-4 overflow-hidden rounded-md bg-white">

            <div className="flex min-h-[48px] items-center justify-between px-4">
              <p className="text-[17px] font-medium text-[#555] sm:text-xl">
                {viewOnly
                  ? "View Fixed Package"
                  : editingPackageId
                    ? "Edit Fixed Package"
                    : "Fixed Package"}
              </p>

              {viewOnly && (
                <span className="rounded bg-[#f2f2f2] px-3 py-1 text-xs text-[#555]">
                  Read Only
                </span>
              )}
            </div>

            {/* TOP ACTIONS */}

            <div className="flex h-[54px] items-center justify-between border-y border-[#e5e5e5] px-4 sm:px-8">

              {viewOnly ? (
                <button
                  type="button"
                  onClick={() => setViewOnly(false)}
                  className="flex items-center gap-2 text-sm font-medium text-[#970000] hover:text-[#c40000]"
                >
                  <FiEdit />
                  Enable Editing
                </button>
              ) : (
                <span className="text-sm text-[#777]">
                  Package Details
                </span>
              )}

              <div className="flex items-center gap-5">
                <button
                  type="button"
                  onClick={() => {
                    setShowMainForm(false);
                    setViewOnly(false);
                  }}
                  title="Hide form"
                  aria-label="Hide form"
                  className="text-[#333] hover:text-[#c40000]"
                >
                  <FiEyeOff size={21} />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (editingPackageId) {
                      const pkg = savedPackages.find(
                        (item) => item.id === editingPackageId
                      );

                      if (pkg) handleDeletePackage(pkg.id);
                    } else {
                      resetForm();
                    }
                  }}
                  title="Clear form or delete current package"
                  aria-label="Clear or delete package"
                  className="text-[#900000] hover:text-[#c40000]"
                >
                  <FaTrash size={17} />
                </button>
              </div>
            </div>

            <div className="px-4 py-5 sm:px-6 md:px-8">

              <fieldset disabled={viewOnly}>
                <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">

                  <PricingField
                    label="Fixed Package Name"
                    required
                    labelSize={fieldLabel}
                    labelClassName="font-semibold"
                  >
                    <input
                      type="text"
                      name="packageName"
                      value={formData.packageName}
                      onChange={handleChange}
                      maxLength={80}
                      placeholder="Ex : All in One Trending Pack"
                      className={inputClassName}
                    />
                    {showError("packageName")}
                  </PricingField>

                  <PricingField
                    label="Category"
                    required
                    labelSize={fieldLabel}
                    labelClassName="font-semibold"
                  >
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      maxLength={60}
                      placeholder="Ex : Photography"
                      className={inputClassName}
                    />
                    {showError("category")}
                  </PricingField>

                  <PricingField
                    label="Charge Type"
                    required
                    labelSize={fieldLabel}
                    labelClassName="font-semibold"
                  >
                    <select
                      name="chargeType"
                      value={formData.chargeType}
                      onChange={handleChange}
                      className={selectClassName}
                    >
                      <option>Amount Per Event</option>
                      <option>Amount Per Hour</option>
                      <option>Amount Per Item</option>
                    </select>
                    {showError("chargeType")}
                  </PricingField>

                  <PricingField
                    label="Total Price"
                    required
                    labelSize={fieldLabel}
                    labelClassName="font-semibold"
                  >
                    <input
                      type="text"
                      name="totalPrice"
                      value={formData.totalPrice}
                      onChange={handleChange}
                      placeholder="12000"
                      className={inputClassName}
                    />
                    {showError("totalPrice")}
                  </PricingField>

                  <PricingField
                    label="Description"
                    labelSize={fieldLabel}
                    labelClassName="font-semibold"
                    className="sm:col-span-2"
                  >
                    <div className="relative">
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        maxLength={400}
                        placeholder="Describe the package and included services..."
                        className={textareaClassName}
                      />
                      <span className="absolute bottom-2 right-3 text-xs text-[#777]">
                        {formData.description.length} / 400
                      </span>
                    </div>
                    {showError("description")}
                  </PricingField>

                  <PricingField
                    label="Over Time Charge / Hour"
                    optional
                    labelSize={fieldLabel}
                    labelClassName="font-semibold"
                  >
                    <input
                      type="text"
                      name="overTimeCharge"
                      value={formData.overTimeCharge}
                      onChange={handleChange}
                      placeholder="Ex : 1500"
                      className={inputClassName}
                    />
                    {showError("overTimeCharge")}
                  </PricingField>

                  <PricingField
                    label="Travel Charges"
                    optional
                    labelSize={fieldLabel}
                    labelClassName="font-semibold"
                  >
                    <div className="flex flex-col gap-2">
                      <select
                        name="travelChargeType"
                        value={formData.travelChargeType}
                        onChange={handleChange}
                        className={selectClassName}
                      >
                        <option value="No Travel Charge">
                          No Travel Charge
                        </option>
                        <option value="Per Km">Per Km</option>
                        <option value="Fixed Amount">Fixed Amount</option>
                      </select>

                      {formData.travelChargeType !==
                        "No Travel Charge" && (
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]">
                            ₹
                          </span>
                          <input
                            type="text"
                            inputMode="decimal"
                            name="travelChargeAmount"
                            value={formData.travelChargeAmount}
                            onChange={handleChange}
                            placeholder={
                              formData.travelChargeType === "Per Km"
                                ? "Enter amount per km"
                                : "Enter fixed amount"
                            }
                            className={`${inputClassName} pl-8`}
                          />
                        </div>
                      )}
                      {showError("travelChargeAmount")}
                    </div>
                  </PricingField>

                  <PricingField
                    label="Min. Booking Hours"
                    optional
                    labelSize={fieldLabel}
                    labelClassName="font-semibold"
                  >
                    <input
                      type="text"
                      name="minimumBookingHours"
                      value={formData.minimumBookingHours}
                      onChange={handleChange}
                      placeholder="Ex : 4"
                      className={inputClassName}
                    />
                    {showError("minimumBookingHours")}
                  </PricingField>

                  <PricingField
                    label="Advance Booking Payment (%)"
                    required
                    labelSize={fieldLabel}
                    labelClassName="font-semibold"
                  >
                    <input
                      type="text"
                      name="advanceBookingPayment"
                      value={formData.advanceBookingPayment}
                      onChange={handleChange}
                      placeholder="Ex : 30%"
                      className={inputClassName}
                    />
                    {showError("advanceBookingPayment")}
                  </PricingField>

                  <PricingField
                    label="Work Delivery Timeline"
                    optional
                    labelSize={fieldLabel}
                    labelClassName="font-semibold"
                  >
                    <input
                      type="text"
                      name="workDeliveryTimeline"
                      value={formData.workDeliveryTimeline}
                      onChange={handleChange}
                      placeholder="Ex : Within 3 days of the event"
                      className={inputClassName}
                    />
                  </PricingField>
                </div>

                {/* SERVICES */}

                <div className="mt-7">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <label className="text-base font-semibold text-[#333] sm:text-lg">
                      Services Provided
                      <span className="text-[#c40000]"> *</span>
                      <span className="ml-1 text-sm italic text-[#777]">
                        (At least 2 services)
                      </span>
                    </label>

                    {!viewOnly && (
                      <button
                        type="button"
                        onClick={addService}
                        className="flex h-[38px] items-center justify-center gap-2 rounded border border-[#ccc] px-4 text-[#970000] hover:bg-[#fff5f5]"
                      >
                        <FiPlusCircle />
                        Add Service
                      </button>
                    )}
                  </div>

                  {showError("services")}

                  <div className="mt-3 space-y-4 bg-[#fffcef] p-3 sm:p-4">
                    {services.map((service, index) => (
                      <div
                        key={service.id}
                        className="grid grid-cols-1 gap-3 border-b border-[#eee] pb-4 last:border-0 last:pb-0 sm:grid-cols-[25px_1fr] lg:grid-cols-[25px_1fr_1.5fr]"
                      >
                        <div className="hidden pt-3 text-sm font-medium sm:block">
                          {index + 1}.
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <label className="text-base font-semibold sm:text-lg">
                              Service Name
                              <span className="text-[#c40000]"> *</span>
                            </label>

                            {!viewOnly && services.length > 2 && (
                              <button
                                type="button"
                                onClick={() => removeService(service.id)}
                                title="Remove service"
                                className="text-[#c40000]"
                              >
                                <FiTrash2 size={18} />
                              </button>
                            )}
                          </div>

                          <input
                            type="text"
                            value={service.name}
                            maxLength={80}
                            onChange={(event) =>
                              handleServiceChange(
                                service.id,
                                "name",
                                event.target.value
                              )
                            }
                            placeholder="Ex : General Photography"
                            className={`${inputClassName} mt-1 w-full`}
                          />
                          {showError(`service-${service.id}-name`)}
                        </div>

                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <label className="text-base font-semibold sm:text-lg">
                              Description
                              <span className="text-[#c40000]"> *</span>
                            </label>
                            <span className="text-xs text-[#777]">
                              {service.description.length}/200
                            </span>
                          </div>

                          <input
                            type="text"
                            value={service.description}
                            maxLength={200}
                            onChange={(event) =>
                              handleServiceChange(
                                service.id,
                                "description",
                                event.target.value
                              )
                            }
                            placeholder="Describe this service..."
                            className={`${inputClassName} mt-1 w-full`}
                          />
                          {showError(
                            `service-${service.id}-description`
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </fieldset>

              {/* FORM ACTIONS */}

              <div className="mt-6 flex flex-col-reverse justify-end gap-3 sm:flex-row sm:items-center">

                {viewOnly ? (
                  <button
                    type="button"
                    onClick={() => {
                      setViewOnly(false);
                      setShowMainForm(false);
                    }}
                    className="flex items-center justify-center gap-2 py-2 text-[#970000] hover:text-[#c40000]"
                  >
                    <FiArrowLeft />
                    Back to Packages
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={handleSaveDraft}
                      className="py-2 text-base font-semibold text-[#c40000] hover:text-[#970000] sm:mr-2 sm:text-lg"
                    >
                      Save Draft
                    </button>

                    <button
                      type="button"
                      onClick={handleSavePackage}
                      className="h-[42px] rounded bg-[#333] px-6 text-base font-semibold text-white hover:bg-[#222] sm:w-[190px] sm:text-lg"
                    >
                      {editingPackageId
                        ? "Update Package"
                        : "Save Package"}
                    </button>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        {/* SHOW FORM AGAIN */}

        {!showMainForm && (
          <button
            type="button"
            onClick={() => setShowMainForm(true)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded bg-white py-4 text-[#970000] shadow-sm hover:bg-[#fff8f8]"
          >
            <FiEye size={19} />
            Show Package Form
          </button>
        )}

        {/* SAVED PACKAGES */}

        <div className="mt-4 space-y-3">
          {sortedPackages.length === 0 ? (
            <div className="rounded bg-white px-4 py-10 text-center">
              <p className="text-base font-semibold text-[#555]">
                No Fixed Packages Added
              </p>
              <p className="mt-1 text-sm text-[#888]">
                Click Add Package to create your first package.
              </p>
            </div>
          ) : (
            sortedPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex flex-col gap-3 rounded-md bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="break-words text-base font-semibold text-[#333] sm:text-lg">
                    {pkg.packageName}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <div className="inline-flex min-h-[34px] items-center gap-2 rounded bg-[#222] px-3 py-2 text-white">
                      <FaCamera size={15} />
                      <span className="text-sm font-semibold">
                        {pkg.category}
                      </span>
                    </div>

                    <span className="text-sm font-semibold text-[#333]">
                      {pkg.serviceCount?.split(
                        "Add Ons Applicable"
                      )[0]}
                      <span className="text-red-900">
                        Add Ons Applicable
                      </span>
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-[#777]">
                    Travel: {travelText(pkg)}
                  </p>
                </div>

                <div className="flex shrink-0 items-center justify-end gap-5 border-t border-[#eee] pt-3 sm:border-0 sm:pt-0">

                  <button
                    type="button"
                    onClick={() => handleViewPackage(pkg)}
                    title="View package"
                    aria-label="View package"
                    className="text-[#333] transition hover:text-[#970000]"
                  >
                    <FiEye size={19} />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleEditPackage(pkg)}
                    title="Edit package"
                    aria-label="Edit package"
                    className="text-[#333] transition hover:text-[#970000]"
                  >
                    <FiEdit size={19} />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeletePackage(pkg.id)}
                    title="Delete package"
                    aria-label="Delete package"
                    className="text-[#900000] transition hover:text-[#c40000]"
                  >
                    <FaTrash size={17} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </ServicesPricingLayout>
  );
};

export default FixedPackagePage;
