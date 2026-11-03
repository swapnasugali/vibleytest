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

/* ================= INITIAL FORM DATA ================= */

const initialFormData = {
  serviceMain: "",
  specificServiceName: "",
  chargeType: "Amount Per Event",
  totalPrice: "",
  description: "",
  overTimeCharge: "",
  travelChargeType: "No Travel Charge",
  travelChargeAmount: "",
  minimumBookingHours: "",
  workDeliveryTimeline: "",
};

/* ================= TRAVEL DATA HELPER ================= */

// Supports both new and old localStorage travel-charge formats.
const getTravelChargeData = (service = {}) => {
  if (service.travelChargeType) {
    return {
      travelChargeType: service.travelChargeType,
      travelChargeAmount: service.travelChargeAmount || "",
    };
  }

  const oldTravelCharges = String(service.travelCharges || "");

  if (oldTravelCharges.toLowerCase().includes("no travel")) {
    return {
      travelChargeType: "No Travel Charge",
      travelChargeAmount: "",
    };
  }

  const amountMatch = oldTravelCharges.match(/(\d+(?:\.\d+)?)/);

  if (amountMatch) {
    return {
      travelChargeType: "Per Km",
      travelChargeAmount: amountMatch[1],
    };
  }

  return {
    travelChargeType: "No Travel Charge",
    travelChargeAmount: "",
  };
};

/* ================= COMPONENT ================= */

const SpecificServicePage = () => {
  const [formData, setFormData] = useState(initialFormData);

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
      travelChargeType: "Per Km",
      travelChargeAmount: "25",
      minimumBookingHours: "4",
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
      travelChargeType: "Per Km",
      travelChargeAmount: "25",
      minimumBookingHours: "4",
      workDeliveryTimeline: "Within 3 DAYS of the Event",
    },
  ]);

  const [saveMessage, setSaveMessage] = useState("");
  const [saveType, setSaveType] = useState("");
  const [errors, setErrors] = useState({});
  const [editingServiceId, setEditingServiceId] = useState(null);

  /* ================= INPUT HELPERS ================= */

  const allowOnlyAlphabets = (value) =>
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
    value.replace(/[^\p{L}0-9\s.,!?'"():/%&+-]/gu, "");

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
          ...getTravelChargeData(parsedData.formData),
        });
      }

      if (Array.isArray(parsedData.savedServices)) {
        setSavedServices(
          parsedData.savedServices.map((service) => ({
            ...service,
            ...getTravelChargeData(service),
          }))
        );
      }
    } catch (error) {
      console.error("Unable to load specific service data:", error);
    }
  }, []);

  /* ================= HANDLE CHANGE ================= */

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
      case "travelChargeAmount":
        updatedValue = allowOnlyNumbers(value);
        break;

      case "description":
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

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSaveMessage("");
    setSaveType("");
  };

  /* ================= VALIDATION ================= */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.serviceMain.trim()) {
      newErrors.serviceMain = "Service is required.";
    }

    if (!formData.specificServiceName.trim()) {
      newErrors.specificServiceName =
        "Specific Service Name is required.";
    }

    const validChargeTypes = [
      "Amount Per Event",
      "Amount Per Hour",
      "Amount Per Item",
    ];

    if (!validChargeTypes.includes(formData.chargeType)) {
      newErrors.chargeType = "Please select a valid charge type.";
    }

    if (
      !formData.totalPrice.trim() ||
      !/^\d+(\.\d{1,2})?$/.test(formData.totalPrice.trim()) ||
      Number(formData.totalPrice) <= 0
    ) {
      newErrors.totalPrice = "Enter a valid total price.";
    }

    if (formData.description.length > 400) {
      newErrors.description =
        "Description cannot exceed 400 characters.";
    }

    if (formData.overTimeCharge.trim()) {
      if (
        !/^\d+(\.\d{1,2})?$/.test(formData.overTimeCharge.trim()) ||
        Number(formData.overTimeCharge) <= 0
      ) {
        newErrors.overTimeCharge =
          "Enter a valid overtime charge.";
      }
    }

    // Travel amount is required only for paid travel options.
    if (formData.travelChargeType !== "No Travel Charge") {
      if (!formData.travelChargeAmount.trim()) {
        newErrors.travelChargeAmount =
          "Please enter a travel charge amount.";
      } else if (
        !/^\d+(\.\d{1,2})?$/.test(
          formData.travelChargeAmount.trim()
        ) ||
        Number(formData.travelChargeAmount) <= 0
      ) {
        newErrors.travelChargeAmount =
          "Enter a valid travel charge amount.";
      }
    }

    if (formData.minimumBookingHours.trim()) {
      if (
        !/^\d+(\.\d{1,2})?$/.test(
          formData.minimumBookingHours.trim()
        ) ||
        Number(formData.minimumBookingHours) <= 0
      ) {
        newErrors.minimumBookingHours =
          "Enter valid booking hours.";
      }
    }

    if (
      formData.workDeliveryTimeline &&
      !/^[\p{L}0-9\s.,!?'"():/%&+-]+$/u.test(
        formData.workDeliveryTimeline
      )
    ) {
      newErrors.workDeliveryTimeline =
        "Please enter a valid delivery timeline.";
    }

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

    if (formData.totalPrice.trim()) {
      if (
        !/^\d+(\.\d{1,2})?$/.test(formData.totalPrice.trim()) ||
        Number(formData.totalPrice) <= 0
      ) {
        draftErrors.totalPrice = "Enter a valid total price.";
      }
    }

    if (formData.overTimeCharge.trim()) {
      if (
        !/^\d+(\.\d{1,2})?$/.test(
          formData.overTimeCharge.trim()
        ) ||
        Number(formData.overTimeCharge) <= 0
      ) {
        draftErrors.overTimeCharge =
          "Enter a valid overtime charge.";
      }
    }

    if (
      formData.travelChargeType !== "No Travel Charge" &&
      formData.travelChargeAmount.trim()
    ) {
      if (
        !/^\d+(\.\d{1,2})?$/.test(
          formData.travelChargeAmount.trim()
        ) ||
        Number(formData.travelChargeAmount) <= 0
      ) {
        draftErrors.travelChargeAmount =
          "Enter a valid travel charge amount.";
      }
    }

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

  /* ================= SAVE LOCAL STORAGE ================= */

  const saveToLocalStorage = (
    services = savedServices,
    draftFormData = formData
  ) => {
    try {
      localStorage.setItem(
        "specificServiceData",
        JSON.stringify({
          formData: draftFormData,
          savedServices: services,
          savedAt: new Date().toISOString(),
        })
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

      // Save dynamic travel selection and entered amount.
      travelChargeType: formData.travelChargeType,
      travelChargeAmount:
        formData.travelChargeType === "No Travel Charge"
          ? ""
          : formData.travelChargeAmount.trim(),

      minimumBookingHours: formData.minimumBookingHours.trim(),
      workDeliveryTimeline: formData.workDeliveryTimeline.trim(),
    };

    const updatedServices = editingServiceId
      ? savedServices.map((service) =>
          service.id === editingServiceId ? serviceData : service
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
      `Delete "${
        serviceToDelete?.specificServiceName || "this service"
      }"?`
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
      ...initialFormData,
      serviceMain: service.serviceMain || "",
      specificServiceName: service.specificServiceName || "",
      chargeType: service.chargeType || "Amount Per Event",
      totalPrice: service.totalPrice || "",
      description: service.description || "",
      overTimeCharge: service.overTimeCharge || "",
      ...getTravelChargeData(service),
      minimumBookingHours: service.minimumBookingHours || "",
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

  /* ================= ADD SERVICE ================= */

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

  /* ================= TRAVEL DISPLAY ================= */

  const getTravelText = (service) => {
    const travel = getTravelChargeData(service);

    if (travel.travelChargeType === "No Travel Charge") {
      return "No Travel Charge";
    }

    if (travel.travelChargeType === "Per Km") {
      return `₹${travel.travelChargeAmount} Per Km`;
    }

    return `₹${travel.travelChargeAmount} Fixed Amount`;
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
          className={`mt-[15px] flex items-center gap-[8px] rounded-[5px] border px-[16px] py-[12px] text-[16px] font-medium ${
            saveType === "success"
              ? "border-[#b7dfbd] bg-[#edf9ef] text-[#26733a]"
              : "border-[#efb0b0] bg-[#fff1f1] text-[#c40000]"
          }`}
        >
          {saveType === "success" && (
            <FiCheckCircle className="text-[20px]" />
          )}

          <span>{saveMessage}</span>
        </div>
      )}

      {/* TOOLBAR */}

      <div className="mt-[18px] flex flex-col gap-[10px] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-[10px]">
          <span className="text-[20px] font-normal text-[#555555]">
            All ({String(savedServices.length).padStart(2, "0")})
          </span>

          <button
            type="button"
            className="flex h-[45px] w-[121px] cursor-pointer items-center justify-center gap-[5px] rounded-[4px] bg-white px-[9px] text-[16px] text-[#333333]"
          >
            Sort By
            <FiChevronDown className="text-[17px]" />
          </button>
        </div>

        <button
          type="button"
          onClick={handleAddService}
          className="flex h-[52px] w-[218px] cursor-pointer items-center justify-center gap-[5px] rounded-[4px] bg-[#c40000] px-[16px] text-[18px] font-semibold text-white"
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

      <section className="mt-[7px] rounded-[6px] bg-white px-[25px] py-[20px] sm:px-[30px] md:px-[34px]">
        <div className="grid grid-cols-1 gap-x-[20px] gap-y-[15px] sm:grid-cols-2">
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
              <option value="Amount Per Event">Amount Per Event</option>
              <option value="Amount Per Hour">Amount Per Hour</option>
              <option value="Amount Per Item">Amount Per Item</option>
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

              <span className="absolute right-[8px] top-[-15px] text-[13px] text-[#555555]">
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

          {/* DYNAMIC TRAVEL CHARGES */}

          <PricingField
            label="Travel Charges"
            optional
            labelSize="text-[18px]"
            labelClassName="font-semibold"
          >
            <div className="flex flex-col gap-[8px]">
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

              {formData.travelChargeType !== "No Travel Charge" && (
                <div className="relative">
                  <span className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[15px] text-[#555555]">
                    ₹
                  </span>

                  <input
                    type="text"
                    name="travelChargeAmount"
                    value={formData.travelChargeAmount}
                    onChange={handleChange}
                    placeholder={
                      formData.travelChargeType === "Per Km"
                        ? "Enter amount per km"
                        : "Enter fixed travel amount"
                    }
                    className={`${inputClassName} pl-[30px]`}
                  />
                </div>
              )}

              {formData.travelChargeType === "Per Km" && (
                <p className="text-[13px] text-[#777777]">
                  Travel charge will be calculated per kilometer.
                </p>
              )}

              {formData.travelChargeType === "Fixed Amount" && (
                <p className="text-[13px] text-[#777777]">
                  Enter one fixed travel charge for the service.
                </p>
              )}

              {errors.travelChargeAmount && (
                <p className="mt-[4px] text-[13px] text-[#c40000]">
                  {errors.travelChargeAmount}
                </p>
              )}
            </div>
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

          {/* WORK DELIVERY TIMELINE */}

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

        <div className="mt-[22px] flex flex-col-reverse items-center justify-end gap-[12px] sm:flex-row">
          <button
            type="button"
            onClick={handleSaveDraft}
            className="cursor-pointer text-[18px] font-semibold text-[#c40000]"
          >
            Save Draft
          </button>

          <button
            type="button"
            onClick={handleSaveService}
            className="h-[32px] w-[180px] cursor-pointer rounded-[4px] bg-[#333333] px-[18px] text-[18px] font-semibold text-white"
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
            className="flex items-center justify-between rounded-[5px] bg-white px-[18px] py-[15px]"
          >
            <div className="min-w-0">
              <h3 className="text-[18px] font-semibold text-[#333333]">
                {service.specificServiceName}
              </h3>

              <div className="mt-[6px] flex items-center gap-[7px]">
                <div className="inline-flex h-[37px] w-[142px] shrink-0 items-center rounded-[3px] bg-[#222222] px-[9px] text-[14px] font-medium leading-none text-white">
                  <FaCamera
                    className="mr-[4px] text-white"
                    size={17}
                  />

                  <span className="text-[14px] font-semibold">
                    {service.serviceMain}
                  </span>
                </div>

                <div className="flex items-center gap-[6px] text-[14px]">
                  <span className="font-semibold text-[#222222]">
                    {service.specificServiceName},
                  </span>

                  <span className="font-semibold text-red-900">
                    Add Ons Applicable
                  </span>
                </div>
              </div>

              <p className="mt-[5px] text-[13px] text-[#777777]">
                Travel: {getTravelText(service)}
              </p>
            </div>

            {/* ACTIONS */}

            <div className="ml-[15px] flex shrink-0 items-center gap-[14px]">
              <button
                type="button"
                onClick={() => handleEditService(service)}
                className="cursor-pointer text-[#333333]"
                title="Edit"
              >
                <FiEdit className="text-[18px]" />
              </button>

              <button
                type="button"
                onClick={() => handleDeleteService(service.id)}
                className="cursor-pointer text-[#900000]"
                title="Delete"
              >
                <FaTrash className="text-[16px]" />
              </button>

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
