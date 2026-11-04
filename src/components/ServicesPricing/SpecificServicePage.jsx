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

/* =========================================================
   INITIAL FORM DATA
========================================================= */
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

/* =========================================================
   TRAVEL CHARGE DATA
========================================================= */
const getTravelChargeData = (service = {}) => {
  if (service.travelChargeType) {
    return {
      travelChargeType: service.travelChargeType,
      travelChargeAmount: service.travelChargeAmount || "",
    };
  }

  // Support older saved data
  const oldValue = String(service.travelCharges || "");

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

/* =========================================================
   SPECIFIC SERVICE PAGE
========================================================= */
const SpecificServicePage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [savedServices, setSavedServices] = useState([]);
  const [saveMessage, setSaveMessage] = useState("");
  const [saveType, setSaveType] = useState("");
  const [errors, setErrors] = useState({});
  const [editingServiceId, setEditingServiceId] = useState(null);

  /* =========================================================
     INPUT VALIDATION HELPERS
  ========================================================= */

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

  /* =========================================================
     LOAD DATA FROM LOCAL STORAGE
  ========================================================= */

  useEffect(() => {
    try {
      const stored = localStorage.getItem("specificServiceData");

      if (!stored) return;

      const parsed = JSON.parse(stored);

      if (parsed.formData) {
        setFormData({
          ...initialFormData,
          ...parsed.formData,
          ...getTravelChargeData(parsed.formData),
        });
      }

      if (Array.isArray(parsed.savedServices)) {
        setSavedServices(
          parsed.savedServices.map((service) => ({
            ...service,
            ...getTravelChargeData(service),
          }))
        );
      }
    } catch (error) {
      console.error("Unable to load specific service data:", error);
    }
  }, []);

  /* =========================================================
     HANDLE INPUT CHANGE
  ========================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;
    let nextValue = value;

    if (name === "serviceMain" || name === "specificServiceName") {
      nextValue = allowOnlyAlphabets(value);
    } else if (
      [
        "totalPrice",
        "overTimeCharge",
        "minimumBookingHours",
        "travelChargeAmount",
      ].includes(name)
    ) {
      nextValue = allowOnlyNumbers(value);
    } else if (
      name === "description" ||
      name === "workDeliveryTimeline"
    ) {
      nextValue = allowDescription(value);
    }

    setFormData((previous) => ({
      ...previous,
      [name]: nextValue,

      // Clear travel amount when No Travel Charge is selected
      ...(name === "travelChargeType" &&
      value === "No Travel Charge"
        ? { travelChargeAmount: "" }
        : {}),
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSaveMessage("");
    setSaveType("");
  };

  /* =========================================================
     FORM VALIDATION
  ========================================================= */

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.serviceMain.trim()) {
      nextErrors.serviceMain = "Service is required.";
    }

    if (!formData.specificServiceName.trim()) {
      nextErrors.specificServiceName =
        "Specific Service Name is required.";
    }

    if (
      ![
        "Amount Per Event",
        "Amount Per Hour",
        "Amount Per Item",
      ].includes(formData.chargeType)
    ) {
      nextErrors.chargeType = "Please select a valid charge type.";
    }

    if (
      !formData.totalPrice.trim() ||
      !/^\d+(\.\d{1,2})?$/.test(formData.totalPrice) ||
      Number(formData.totalPrice) <= 0
    ) {
      nextErrors.totalPrice = "Enter a valid total price.";
    }

    if (formData.description.length > 400) {
      nextErrors.description =
        "Description cannot exceed 400 characters.";
    }

    if (
      formData.overTimeCharge.trim() &&
      (
        !/^\d+(\.\d{1,2})?$/.test(formData.overTimeCharge) ||
        Number(formData.overTimeCharge) <= 0
      )
    ) {
      nextErrors.overTimeCharge =
        "Enter a valid overtime charge.";
    }

    // Travel amount validation
    if (formData.travelChargeType !== "No Travel Charge") {
      if (
        !formData.travelChargeAmount.trim() ||
        !/^\d+(\.\d{1,2})?$/.test(formData.travelChargeAmount) ||
        Number(formData.travelChargeAmount) <= 0
      ) {
        nextErrors.travelChargeAmount =
          "Enter a valid travel charge amount.";
      }
    }

    if (
      formData.minimumBookingHours.trim() &&
      (
        !/^\d+(\.\d{1,2})?$/.test(formData.minimumBookingHours) ||
        Number(formData.minimumBookingHours) <= 0
      )
    ) {
      nextErrors.minimumBookingHours =
        "Enter valid booking hours.";
    }

    if (
      formData.workDeliveryTimeline &&
      !/^[\p{L}0-9\s.,!?'"():/%&+-]+$/u.test(
        formData.workDeliveryTimeline
      )
    ) {
      nextErrors.workDeliveryTimeline =
        "Enter a valid delivery timeline.";
    }

    // Duplicate service validation
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
      nextErrors.specificServiceName =
        "This service name already exists under this service category.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  /* =========================================================
     SAVE DATA TO LOCAL STORAGE
  ========================================================= */

  const saveToLocalStorage = (
    services = savedServices,
    draft = formData
  ) => {
    try {
      localStorage.setItem(
        "specificServiceData",
        JSON.stringify({
          formData: draft,
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

  /* =========================================================
     SAVE DRAFT
  ========================================================= */

  const handleSaveDraft = () => {
    if (
      formData.travelChargeType !== "No Travel Charge" &&
      formData.travelChargeAmount.trim() &&
      (
        !/^\d+(\.\d{1,2})?$/.test(formData.travelChargeAmount) ||
        Number(formData.travelChargeAmount) <= 0
      )
    ) {
      setErrors({
        travelChargeAmount: "Enter a valid travel charge amount.",
      });

      setSaveType("error");
      setSaveMessage("Please correct the highlighted field.");

      return;
    }

    if (saveToLocalStorage()) {
      setSaveType("success");
      setSaveMessage("Draft saved successfully.");
    }
  };

  /* =========================================================
     SAVE OR UPDATE SERVICE
  ========================================================= */

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
          service.id === editingServiceId
            ? serviceData
            : service
        )
      : [...savedServices, serviceData];

    if (saveToLocalStorage(updatedServices, initialFormData)) {
      setSavedServices(updatedServices);
      setFormData({ ...initialFormData });
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

  /* =========================================================
     DELETE SERVICE
  ========================================================= */

  const handleDeleteService = (id) => {
    const item = savedServices.find(
      (service) => service.id === id
    );

    if (
      !window.confirm(
        `Delete "${item?.specificServiceName || "this service"}"?`
      )
    ) {
      return;
    }

    const updatedServices = savedServices.filter(
      (service) => service.id !== id
    );

    if (saveToLocalStorage(updatedServices)) {
      setSavedServices(updatedServices);
      setSaveType("success");
      setSaveMessage("Service deleted successfully.");
    }
  };

  /* =========================================================
     EDIT SERVICE
  ========================================================= */

  const handleEditService = (service) => {
    setEditingServiceId(service.id);

    setFormData({
      ...initialFormData,
      ...service,
      ...getTravelChargeData(service),
    });

    setErrors({});
    setSaveMessage("");
    setSaveType("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     ADD NEW SERVICE
  ========================================================= */

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

  /* =========================================================
     TRAVEL CHARGE DISPLAY
  ========================================================= */

  const travelText = (service) => {
    const data = getTravelChargeData(service);

    if (data.travelChargeType === "No Travel Charge") {
      return "No Travel Charge";
    }

    if (data.travelChargeType === "Per Km") {
      return `₹${data.travelChargeAmount} / Km`;
    }

    return `₹${data.travelChargeAmount} Fixed`;
  };

  /* =========================================================
     UI
  ========================================================= */

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

      {/* TOP HEADER */}
      <div className="mt-[18px] flex flex-col gap-[10px] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-[10px]">
          <span className="text-[20px] font-normal text-[#555555]">
            All ({String(savedServices.length).padStart(2, "0")})
          </span>

          <button
            type="button"
            className="flex h-[45px] w-[121px] items-center justify-center gap-[5px] rounded-[4px] bg-white px-[9px] text-[16px] text-[#333333]"
          >
            Sort By
            <FiChevronDown className="text-[17px]" />
          </button>
        </div>

        <button
          type="button"
          onClick={handleAddService}
          className="flex h-[52px] w-[218px] items-center justify-center gap-[5px] rounded-[4px] bg-[#c40000] px-[16px] text-[18px] font-semibold text-white"
        >
          <FiPlusCircle className="text-[17px]" />
          Add Service
        </button>
      </div>

      {/* FORM TITLE */}
      <div className="mt-[15px]">
        <p className="text-[20px] font-medium text-[#777777]">
          {editingServiceId
            ? "Edit Specific Service"
            : "Specific Service - 1"}
        </p>
      </div>

      {/* SERVICE FORM */}
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
              <option>Amount Per Event</option>
              <option>Amount Per Hour</option>
              <option>Amount Per Item</option>
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
              name="totalPrice"
              value={formData.totalPrice}
              onChange={handleChange}
              placeholder="12000"
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
                placeholder="Describe the service..."
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

          {/* OVERTIME CHARGE */}
          <PricingField
            label="Over Time Charge / Hour"
            optional
            labelSize="text-[18px]"
            labelClassName="font-semibold"
          >
            <input
              name="overTimeCharge"
              value={formData.overTimeCharge}
              onChange={handleChange}
              placeholder="1500"
              className={inputClassName}
            />

            {errors.overTimeCharge && (
              <p className="mt-[4px] text-[13px] text-[#c40000]">
                {errors.overTimeCharge}
              </p>
            )}
          </PricingField>

          {/* =================================================
              TRAVEL CHARGES - MANUAL AMOUNT INPUT
          ================================================= */}
          <PricingField
            label="Travel Charges"
            optional
            labelSize="text-[18px]"
            labelClassName="font-semibold"
          >
            <div className="flex flex-col gap-[8px]">
              {/* TRAVEL TYPE */}
              <select
                name="travelChargeType"
                value={formData.travelChargeType}
                onChange={handleChange}
                className={selectClassName}
              >
                <option value="No Travel Charge">
                  No Travel Charge
                </option>

                <option value="Per Km">
                  Per Km
                </option>

                <option value="Fixed Amount">
                  Fixed Amount
                </option>
              </select>

              {/* MANUAL AMOUNT INPUT */}
              {formData.travelChargeType !== "No Travel Charge" && (
                <div className="relative">
                  <span className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[15px] text-[#555555]">
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
                    className={`${inputClassName} pl-[30px]`}
                  />
                </div>
              )}

              {/* HELPER TEXT */}
              {formData.travelChargeType === "Per Km" && (
                <p className="text-[13px] text-[#777777]">
                  Enter the travel charge manually for each kilometer.
                </p>
              )}

              {formData.travelChargeType === "Fixed Amount" && (
                <p className="text-[13px] text-[#777777]">
                  Enter the fixed travel charge for the service.
                </p>
              )}

              {/* TRAVEL VALIDATION */}
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
              name="minimumBookingHours"
              value={formData.minimumBookingHours}
              onChange={handleChange}
              placeholder="4"
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
              name="workDeliveryTimeline"
              value={formData.workDeliveryTimeline}
              onChange={handleChange}
              placeholder="Within 3 days of the event"
              className={inputClassName}
            />

            {errors.workDeliveryTimeline && (
              <p className="mt-[4px] text-[13px] text-[#c40000]">
                {errors.workDeliveryTimeline}
              </p>
            )}
          </PricingField>
        </div>

        {/* FORM BUTTONS */}
        <div className="mt-[22px] flex flex-col-reverse items-center justify-end gap-[12px] sm:flex-row">
          <button
            type="button"
            onClick={handleSaveDraft}
            className="text-[18px] font-semibold text-[#c40000]"
          >
            Save Draft
          </button>

          <button
            type="button"
            onClick={handleSaveService}
            className="h-[32px] w-[180px] rounded-[4px] bg-[#333333] px-[18px] text-[18px] font-semibold text-white"
          >
            {editingServiceId ? "Update Service" : "Save Service"}
          </button>
        </div>
      </section>

      {/* =====================================================
          SAVED SERVICES
      ===================================================== */}
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

              {/* DISPLAY SAVED TRAVEL CHARGE */}
              <p className="mt-[5px] text-[13px] text-[#777777]">
                Travel: {travelText(service)}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="ml-[15px] flex shrink-0 items-center gap-[14px]">
              <button
                type="button"
                onClick={() => handleEditService(service)}
                className="text-[#333333]"
                title="Edit"
              >
                <FiEdit className="text-[18px]" />
              </button>

              <button
                type="button"
                onClick={() => handleDeleteService(service.id)}
                className="text-[#900000]"
                title="Delete"
              >
                <FaTrash className="text-[16px]" />
              </button>

              <button
                type="button"
                className="text-[#333333]"
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