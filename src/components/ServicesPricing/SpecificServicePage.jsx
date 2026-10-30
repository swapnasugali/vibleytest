
import React, { useEffect, useState } from "react";

import {
  FiPlusCircle,
  FiEdit,
  FiChevronDown,
  FiCheckCircle,
} from "react-icons/fi";

import { FaCamera, FaTrash } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

import ServicesPricingLayout from "./ServicesPricingLayout";

import PricingField, {
  inputClassName,
  selectClassName,
  textareaClassName,
} from "./PricingField";

const initialFormData = {
  serviceMain: "",
  specificServiceName: "",
  chargeType: "Amount Per Event",
  totalPrice: "",
  description: "",
  overTimeCharge: "",
  travelCharges: "Ex : 25 INR Per Km",
  minimumBookingHours: "",
  advanceBookingPayment: "",
  workDeliveryTimeline: "",
};

const SpecificServicePage = () => {
  /* ================= FORM STATE ================= */

  const [formData, setFormData] = useState(initialFormData);

  /* ================= SAVED SERVICES ================= */

  const [savedServices, setSavedServices] = useState([
    {
      id: 1,
      serviceMain: "Photography",
      specificServiceName: "General Photography",
      chargeType: "Amount Per Event",
      totalPrice: "12000",
      description:
        "Stunning all around photography, which covers the event.",
      overTimeCharge: "1500",
      travelCharges: "Ex : 25 INR Per Km",
      minimumBookingHours: "4",
      advanceBookingPayment: "30%",
      workDeliveryTimeline: "Within 3 DAYS of the Event",
    },
    {
      id: 2,
      serviceMain: "Photography",
      specificServiceName: "Candid Photography",
      chargeType: "Amount Per Event",
      totalPrice: "15000",
      description:
        "Professional candid photography for special events.",
      overTimeCharge: "1500",
      travelCharges: "Ex : 25 INR Per Km",
      minimumBookingHours: "4",
      advanceBookingPayment: "30%",
      workDeliveryTimeline: "Within 3 DAYS of the Event",
    },
  ]);

  /* ================= MESSAGE AND ERRORS ================= */

  const [saveMessage, setSaveMessage] = useState("");
  const [saveType, setSaveType] = useState("");
  const [errors, setErrors] = useState({});
  const [editingServiceId, setEditingServiceId] = useState(null);

  /* ================= VALIDATION HELPERS ================= */

  // Alphabets and spaces only
  const allowOnlyAlphabets = (value) => {
    return value.replace(/[^\p{L}\s]/gu, "");
  };

  // Numbers and decimal point only
  const allowOnlyNumbers = (value) => {
    let cleaned = value.replace(/[^0-9.]/g, "");

    const parts = cleaned.split(".");

    if (parts.length > 2) {
      cleaned = parts[0] + "." + parts.slice(1).join("");
    }

    return cleaned;
  };

  // Price: numbers and one decimal point
  const allowPrice = (value) => {
    return allowOnlyNumbers(value);
  };

  // Percentage: numbers and one optional % symbol
  const allowPercentage = (value) => {
    let cleaned = value.replace(/[^0-9.]/g, "");

    const parts = cleaned.split(".");

    if (parts.length > 2) {
      cleaned = parts[0] + "." + parts.slice(1).join("");
    }

    return cleaned;
  };

  // Description and timeline: letters, numbers and basic punctuation
  const allowDescription = (value) => {
    return value.replace(/[^\p{L}0-9\s.,!?'"():/%&+-]/gu, "");
  };

  /* ================= LOAD LOCAL STORAGE ================= */

  useEffect(() => {
    try {
      const savedData = localStorage.getItem("specificServiceData");

      if (!savedData) return;

      const parsedData = JSON.parse(savedData);

      if (parsedData.formData) {
        setFormData({
          ...initialFormData,
          ...parsedData.formData,
        });
      }

      if (Array.isArray(parsedData.savedServices)) {
        setSavedServices(parsedData.savedServices);
      }
    } catch (error) {
      console.error("Unable to load specific service data:", error);
    }
  }, []);

  /* ================= HANDLE INPUT CHANGES ================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    let updatedValue = value;

    switch (name) {
      case "serviceMain":
      case "specificServiceName":
        updatedValue = allowOnlyAlphabets(value);
        break;

      case "totalPrice":
      case "overTimeCharge":
      case "minimumBookingHours":
        updatedValue = allowOnlyNumbers(value);
        break;

      case "advanceBookingPayment":
        updatedValue = allowPercentage(value);
        break;

      case "description":
        updatedValue = allowDescription(value);
        break;

      case "workDeliveryTimeline":
        updatedValue = allowDescription(value);
        break;

      default:
        updatedValue = value;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: updatedValue,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }

    setSaveMessage("");
    setSaveType("");
  };

  /* ================= VALIDATION ================= */

  const validateForm = () => {
    const newErrors = {};

    // SERVICE
    if (!formData.serviceMain.trim()) {
      newErrors.serviceMain = "Service is required.";
    } else if (
      !/^[\p{L}\s]+$/u.test(formData.serviceMain.trim())
    ) {
      newErrors.serviceMain =
        "Please enter alphabets only.";
    }

    // SPECIFIC SERVICE NAME
    if (!formData.specificServiceName.trim()) {
      newErrors.specificServiceName =
        "Specific Service Name is required.";
    } else if (
      !/^[\p{L}\s]+$/u.test(formData.specificServiceName.trim())
    ) {
      newErrors.specificServiceName =
        "Please enter alphabets only.";
    }

    // CHARGE TYPE
    const validChargeTypes = [
      "Amount Per Event",
      "Amount Per Hour",
      "Amount Per Item",
    ];

    if (!validChargeTypes.includes(formData.chargeType)) {
      newErrors.chargeType = "Please select a valid charge type.";
    }

    // TOTAL PRICE
    if (!formData.totalPrice.trim()) {
      newErrors.totalPrice = "Total Price is required.";
    } else if (
      !/^\d+(\.\d{1,2})?$/.test(formData.totalPrice.trim()) ||
      Number(formData.totalPrice) <= 0
    ) {
      newErrors.totalPrice =
        "Please enter a valid price using numbers only.";
    }

    // DESCRIPTION
    if (formData.description.length > 400) {
      newErrors.description =
        "Description cannot exceed 400 characters.";
    } else if (
      formData.description &&
      !/^[\p{L}0-9\s.,!?'"():/%&+-]+$/u.test(
        formData.description
      )
    ) {
      newErrors.description =
        "Please enter valid description.";
    }

    // OVERTIME CHARGE - OPTIONAL
    if (formData.overTimeCharge.trim()) {
      if (
        !/^\d+(\.\d{1,2})?$/.test(
          formData.overTimeCharge.trim()
        ) ||
        Number(formData.overTimeCharge) <= 0
      ) {
        newErrors.overTimeCharge =
          "Enter a valid overtime charge using numbers only.";
      }
    }

    // MINIMUM BOOKING HOURS - OPTIONAL
    if (formData.minimumBookingHours.trim()) {
      if (
        !/^\d+(\.\d{1,2})?$/.test(
          formData.minimumBookingHours.trim()
        ) ||
        Number(formData.minimumBookingHours) <= 0
      ) {
        newErrors.minimumBookingHours =
          "Enter valid booking hours using numbers only.";
      }
    }

    // ADVANCE BOOKING PAYMENT
    if (!formData.advanceBookingPayment.trim()) {
      newErrors.advanceBookingPayment =
        "Advance Booking Payment is required.";
    } else {
      const percentage = formData.advanceBookingPayment
        .trim()
        .replace(/%/g, "");

      if (
        !/^\d+(\.\d{1,2})?$/.test(percentage) ||
        Number(percentage) < 1 ||
        Number(percentage) > 100
      ) {
        newErrors.advanceBookingPayment =
          "Enter a percentage between 1 and 100.";
      }
    }

    // WORK DELIVERY TIMELINE - OPTIONAL
    if (
      formData.workDeliveryTimeline &&
      !/^[\p{L}0-9\s.,!?'"():/%&+-]+$/u.test(
        formData.workDeliveryTimeline
      )
    ) {
      newErrors.workDeliveryTimeline =
        "Please enter a valid delivery timeline.";
    }

    // DUPLICATE CHECK
    const duplicate = savedServices.some(
      (service) =>
        service.id !== editingServiceId &&
        String(service.serviceMain || "")
          .trim()
          .toLowerCase() ===
          formData.serviceMain.trim().toLowerCase() &&
        String(service.specificServiceName || "")
          .trim()
          .toLowerCase() ===
          formData.specificServiceName.trim().toLowerCase()
    );

    if (
      formData.serviceMain.trim() &&
      formData.specificServiceName.trim() &&
      duplicate
    ) {
      newErrors.specificServiceName =
        "This service name already exists under this service category.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* ================= DRAFT VALIDATION ================= */

  const validateDraft = () => {
    const draftErrors = {};

    // Optional price
    if (formData.totalPrice.trim()) {
      if (
        !/^\d+(\.\d{1,2})?$/.test(formData.totalPrice.trim()) ||
        Number(formData.totalPrice) <= 0
      ) {
        draftErrors.totalPrice = "Enter a valid price using numbers only.";
      }
    }

    // Optional advance payment
    if (formData.advanceBookingPayment.trim()) {
      const percentage = formData.advanceBookingPayment
        .trim()
        .replace(/%/g, "");

      if (
        !/^\d+(\.\d{1,2})?$/.test(percentage) ||
        Number(percentage) < 1 ||
        Number(percentage) > 100
      ) {
        draftErrors.advanceBookingPayment =
          "Enter a percentage between 1 and 100.";
      }
    }

    // Optional overtime
    if (formData.overTimeCharge.trim()) {
      if (
        !/^\d+(\.\d{1,2})?$/.test(formData.overTimeCharge.trim()) ||
        Number(formData.overTimeCharge) <= 0
      ) {
        draftErrors.overTimeCharge =
          "Enter a valid overtime charge.";
      }
    }

    // Optional booking hours
    if (formData.minimumBookingHours.trim()) {
      if (
        !/^\d+(\.\d{1,2})?$/.test(
          formData.minimumBookingHours.trim()
        ) ||
        Number(formData.minimumBookingHours) <= 0
      ) {
        draftErrors.minimumBookingHours =
          "Enter valid booking hours.";
      }
    }

    if (formData.description.length > 400) {
      draftErrors.description =
        "Description cannot exceed 400 characters.";
    }

    setErrors(draftErrors);

    return Object.keys(draftErrors).length === 0;
  };

  /* ================= SAVE TO LOCAL STORAGE ================= */

  const saveToLocalStorage = (
    services = savedServices,
    draftFormData = formData
  ) => {
    try {
      const data = {
        formData: draftFormData,
        savedServices: services,
        savedAt: new Date().toISOString(),
      };

      localStorage.setItem(
        "specificServiceData",
        JSON.stringify(data)
      );

      return true;
    } catch (error) {
      console.error("Unable to save specific service data:", error);

      setSaveType("error");
      setSaveMessage(
        "Unable to save data. Your browser storage may be unavailable."
      );

      return false;
    }
  };

  /* ================= SAVE DRAFT ================= */

  const handleSaveDraft = () => {
    if (!validateDraft()) {
      setSaveType("error");
      setSaveMessage(
        "Please correct the highlighted fields before saving the draft."
      );
      return;
    }

    if (saveToLocalStorage()) {
      setSaveType("success");
      setSaveMessage("Draft saved successfully.");
    }
  };

  /* ================= SAVE SERVICE ================= */

  const handleSaveService = () => {
    if (!validateForm()) {
      setSaveType("error");
      setSaveMessage("Please correct the highlighted fields.");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const serviceData = {
      id: editingServiceId ?? Date.now(),
      serviceMain: formData.serviceMain.trim(),
      specificServiceName: formData.specificServiceName.trim(),
      chargeType: formData.chargeType,
      totalPrice: formData.totalPrice.trim(),
      description: formData.description.trim(),
      overTimeCharge: formData.overTimeCharge.trim(),
      travelCharges: formData.travelCharges,
      minimumBookingHours: formData.minimumBookingHours.trim(),
      advanceBookingPayment: formData.advanceBookingPayment.trim(),
      workDeliveryTimeline: formData.workDeliveryTimeline.trim(),
    };

    const updatedServices = editingServiceId
      ? savedServices.map((service) =>
          service.id === editingServiceId
            ? serviceData
            : service
        )
      : [...savedServices, serviceData];

    const emptyForm = { ...initialFormData };

    if (saveToLocalStorage(updatedServices, emptyForm)) {
      setSavedServices(updatedServices);
      setFormData(emptyForm);
      setErrors({});
      setEditingServiceId(null);

      setSaveType("success");

      setSaveMessage(
        editingServiceId
          ? "Specific service updated successfully."
          : "Specific service saved successfully."
      );
    }
  };

  /* ================= DELETE SERVICE ================= */

  const handleDeleteService = (id) => {
    const serviceToDelete = savedServices.find(
      (service) => service.id === id
    );

    const confirmed = window.confirm(
      `Delete "${serviceToDelete?.specificServiceName || "this service"}"?`
    );

    if (!confirmed) return;

    const updatedServices = savedServices.filter(
      (service) => service.id !== id
    );

    if (saveToLocalStorage(updatedServices)) {
      setSavedServices(updatedServices);

      setSaveType("success");
      setSaveMessage("Service deleted successfully.");
    }
  };

  /* ================= EDIT SERVICE ================= */

  const handleEditService = (service) => {
    setEditingServiceId(service.id);

    setFormData({
      serviceMain: service.serviceMain || "",
      specificServiceName: service.specificServiceName || "",
      chargeType: service.chargeType || "Amount Per Event",
      totalPrice: service.totalPrice || "",
      description: service.description || "",
      overTimeCharge: service.overTimeCharge || "",
      travelCharges:
        service.travelCharges || "Ex : 25 INR Per Km",
      minimumBookingHours: service.minimumBookingHours || "",
      advanceBookingPayment: service.advanceBookingPayment || "",
      workDeliveryTimeline: service.workDeliveryTimeline || "",
    });

    setErrors({});
    setSaveMessage("");
    setSaveType("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ================= ADD NEW SERVICE ================= */

  const handleAddService = () => {
    setEditingServiceId(null);
    setFormData({ ...initialFormData });
    setErrors({});
    setSaveMessage("");
    setSaveType("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ================= RENDER ================= */

  return (
    <ServicesPricingLayout
      activeModel="service"
      showBackgroundLines={false}
    >
      {/* SAVE MESSAGE */}

      {saveMessage && (
        <div
          className={`
            mt-[15px]
            flex items-center gap-[8px]
            rounded-[5px] border
            px-[16px] py-[12px]
            text-[16px] font-medium
            ${
              saveType === "success"
                ? "border-[#b7dfbd] bg-[#edf9ef] text-[#26733a]"
                : "border-[#efb0b0] bg-[#fff1f1] text-[#c40000]"
            }
          `}
        >
          {saveType === "success" && (
            <FiCheckCircle className="text-[20px]" />
          )}

          <span>{saveMessage}</span>
        </div>
      )}

      {/* TOOLBAR */}

      <div
        className="
          mt-[18px] flex flex-col gap-[10px]
          sm:flex-row sm:items-center sm:justify-between
        "
      >
        <div className="flex items-center gap-[10px]">
          <span className="text-[20px] font-normal text-[#555555]">
            All ({String(savedServices.length).padStart(2, "0")})
          </span>

          <button
            type="button"
            className="
              flex h-[45px] w-[121px]
              cursor-pointer items-center justify-center
              gap-[5px] rounded-[4px] bg-white
              px-[9px] text-[16px] text-[#333333]
            "
          >
            Sort By
            <FiChevronDown className="text-[17px]" />
          </button>
        </div>

        <button
          type="button"
          onClick={handleAddService}
          className="
            flex h-[52px] w-[218px]
            cursor-pointer items-center justify-center
            gap-[5px] rounded-[4px] bg-[#c40000]
            px-[16px] text-[18px] font-semibold text-white
          "
        >
          <FiPlusCircle className="text-[17px]" />
          Add Service
        </button>
      </div>

      {/* TITLE */}

      <div className="mt-[15px]">
        <p className="text-[20px] font-medium text-[#777777]">
          {editingServiceId
            ? "Edit Specific Service"
            : "Specific Service - 1"}
        </p>
      </div>

      {/* FORM */}

      <section
        className="
          mt-[7px] rounded-[6px] bg-white
          px-[25px] py-[20px]
          sm:px-[30px] md:px-[34px]
        "
      >
        <div
          className="
            grid grid-cols-1
            gap-x-[20px] gap-y-[15px]
            sm:grid-cols-2
          "
        >
          {/* SERVICE */}

          <PricingField
            label="Service"
            required
            labelSize="text-[18px]"
            labelClassName="font-semibold"
          >
            <input
              type="text"
              name="serviceMain"
              value={formData.serviceMain}
              onChange={handleChange}
              placeholder="Ex : Photography"
              className={inputClassName}
            />

            {errors.serviceMain && (
              <p className="mt-[4px] text-[13px] text-[#c40000]">
                {errors.serviceMain}
              </p>
            )}
          </PricingField>

          {/* SPECIFIC SERVICE NAME */}

          <PricingField
            label="Specific Service Name"
            required
            labelSize="text-[18px]"
            labelClassName="font-semibold"
          >
            <input
              type="text"
              name="specificServiceName"
              value={formData.specificServiceName}
              onChange={handleChange}
              placeholder="Ex : General Photography"
              className={inputClassName}
            />

            {errors.specificServiceName && (
              <p className="mt-[4px] text-[13px] text-[#c40000]">
                {errors.specificServiceName}
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
              className={selectClassName}
            >
              <option value="Amount Per Event">
                Amount Per Event
              </option>

              <option value="Amount Per Hour">
                Amount Per Hour
              </option>

              <option value="Amount Per Item">
                Amount Per Item
              </option>
            </select>

            {errors.chargeType && (
              <p className="mt-[4px] text-[13px] text-[#c40000]">
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
              placeholder="12,000/- INR"
              className={inputClassName}
            />

            {errors.totalPrice && (
              <p className="mt-[4px] text-[13px] text-[#c40000]">
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
                placeholder="Ex : this is the best ever service which includes ..."
                className={textareaClassName}
              />

              <span
                className="
                  absolute right-[8px] top-[-15px]
                  text-[13px] text-[#555555]
                "
              >
                {formData.description.length} / 400 Characters
              </span>
            </div>

            {errors.description && (
              <p className="mt-[4px] text-[13px] text-[#c40000]">
                {errors.description}
              </p>
            )}
          </PricingField>

          {/* OVERTIME */}

          <PricingField
            label="Over Time Charge / Hour"
            optional
            labelSize="text-[18px]"
            labelClassName="font-semibold"
          >
            <input
              type="text"
              name="overTimeCharge"
              value={formData.overTimeCharge}
              onChange={handleChange}
              placeholder="Ex : 1500/- INR Per Hour"
              className={inputClassName}
            />

            {errors.overTimeCharge && (
              <p className="mt-[4px] text-[13px] text-[#c40000]">
                {errors.overTimeCharge}
              </p>
            )}
          </PricingField>

          {/* TRAVEL CHARGES */}

          <PricingField
            label="Travel Charges"
            optional
            labelSize="text-[18px]"
            labelClassName="font-semibold"
          >
            <select
              name="travelCharges"
              value={formData.travelCharges}
              onChange={handleChange}
              className={selectClassName}
            >
              <option value="Ex : 25 INR Per Km">
                Ex : 25 INR Per Km
              </option>

              <option value="No Travel Charge">
                No Travel Charge
              </option>
            </select>
          </PricingField>

          {/* MINIMUM BOOKING HOURS */}

          <PricingField
            label="Min. Booking Hours"
            optional
            labelSize="text-[18px]"
            labelClassName="font-semibold"
          >
            <input
              type="text"
              name="minimumBookingHours"
              value={formData.minimumBookingHours}
              onChange={handleChange}
              placeholder="Ex : 4 Hours"
              className={inputClassName}
            />

            {errors.minimumBookingHours && (
              <p className="mt-[4px] text-[13px] text-[#c40000]">
                {errors.minimumBookingHours}
              </p>
            )}
          </PricingField>

          {/* ADVANCE PAYMENT */}

          <PricingField
            label="Advance Booking Payment (%)"
            required
            labelSize="text-[18px]"
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

            {errors.advanceBookingPayment && (
              <p className="mt-[4px] text-[13px] text-[#c40000]">
                {errors.advanceBookingPayment}
              </p>
            )}
          </PricingField>

          {/* DELIVERY TIMELINE */}

          <PricingField
            label="Work Delivery Timeline"
            optional
            labelSize="text-[18px]"
            labelClassName="font-semibold"
          >
            <input
              type="text"
              name="workDeliveryTimeline"
              value={formData.workDeliveryTimeline}
              onChange={handleChange}
              placeholder="Ex : Within 3 DAYS of the Event"
              className={inputClassName}
            />

            {errors.workDeliveryTimeline && (
              <p className="mt-[4px] text-[13px] text-[#c40000]">
                {errors.workDeliveryTimeline}
              </p>
            )}
          </PricingField>
        </div>

        {/* BUTTONS */}

        <div
          className="
            mt-[22px] flex flex-col-reverse
            items-center justify-end gap-[12px]
            sm:flex-row
          "
        >
          <button
            type="button"
            onClick={handleSaveDraft}
            className="
              cursor-pointer text-[18px]
              font-semibold text-[#c40000]
            "
          >
            Save Draft
          </button>

          <button
            type="button"
            onClick={handleSaveService}
            className="
              h-[32px] w-[180px]
              cursor-pointer rounded-[4px]
              bg-[#333333] px-[18px]
              text-[18px] font-semibold text-white
            "
          >
            {editingServiceId ? "Update Service" : "Save Service"}
          </button>
        </div>
      </section>

      {/* SAVED SERVICES */}

      <div className="mt-[12px] space-y-[8px]">
        {savedServices.map((service) => (
          <div
            key={service.id}
            className="
              flex items-center justify-between
              rounded-[5px] bg-white
              px-[18px] py-[15px]
            "
          >
            {/* LEFT CONTENT */}

            <div className="min-w-0">
              <h3
                className="
                  text-[18px] font-semibold
                  text-[#333333]
                "
              >
                {service.specificServiceName}
              </h3>

              <div
                className="
                  mt-[6px] flex items-center gap-[7px]
                "
              >
                <div
                  className="
                    inline-flex h-[37px] w-[142px]
                    shrink-0 items-center rounded-[3px]
                    bg-[#222222] px-[9px]
                    text-[14px] font-medium
                    leading-none text-white
                  "
                >
                  <FaCamera
                    className="mr-[4px] text-white"
                    size={17}
                  />

                  <span className="text-[14px] font-semibold">
                    {service.serviceMain}
                  </span>
                </div>

                <div
                  className="
                    flex items-center gap-[6px]
                    text-[14px]
                  "
                >
                  <span className="font-semibold text-[#222222]">
                    {service.specificServiceName},
                  </span>

                  <span className="font-semibold text-red-900">
                    Add Ons Applicable
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT ACTIONS */}

            <div
              className="
                ml-[15px] flex shrink-0
                items-center gap-[14px]
              "
            >
              {/* EDIT */}

              <button
                type="button"
                onClick={() => handleEditService(service)}
                className="cursor-pointer text-[#333333]"
                title="Edit"
              >
                <FiEdit className="text-[18px]" />
              </button>

              {/* DELETE */}

              <button
                type="button"
                onClick={() => handleDeleteService(service.id)}
                className="cursor-pointer text-[#900000]"
                title="Delete"
              >
                <FaTrash className="text-[16px]" />
              </button>

              {/* VIEW */}

              <button
                type="button"
                className="cursor-pointer text-[#333333]"
                title="View"
              >
                <LuEyeClosed className="text-[18px]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </ServicesPricingLayout>
  );
};

export default SpecificServicePage;
