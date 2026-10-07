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

const SpecificServicePage = () => {
  /* =====================================================
     FORM STATE
  ===================================================== */

  const [formData, setFormData] = useState({
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
  });

  /* =====================================================
     SAVED SERVICES
  ===================================================== */

  const [savedServices, setSavedServices] = useState([
    {
      id: 1,
      serviceMain: "Photography",
      specificServiceName: "General Photography",
      chargeType: "Amount Per Event",
      totalPrice: "12,000/- INR",
      description:
        "Stunning all around photography, which covers the event.",
      overTimeCharge: "1500/- INR Per Hour",
      travelCharges: "Ex : 25 INR Per Km",
      minimumBookingHours: "4 Hours",
      advanceBookingPayment: "30%",
      workDeliveryTimeline:
        "Within 3 DAYS of the Event",
    },
    {
      id: 2,
      serviceMain: "Photography",
      specificServiceName: "Candid Photography",
      chargeType: "Amount Per Event",
      totalPrice: "15,000/- INR",
      description:
        "Professional candid photography for special events.",
      overTimeCharge: "1500/- INR Per Hour",
      travelCharges: "Ex : 25 INR Per Km",
      minimumBookingHours: "4 Hours",
      advanceBookingPayment: "30%",
      workDeliveryTimeline:
        "Within 3 DAYS of the Event",
    },
  ]);

  /* =====================================================
     MESSAGE / VALIDATION
  ===================================================== */

  const [saveMessage, setSaveMessage] = useState("");
  const [saveType, setSaveType] = useState("");
  const [errors, setErrors] = useState({});

  /* =====================================================
     LOAD LOCAL STORAGE
  ===================================================== */

  useEffect(() => {
    try {
      const savedData =
        localStorage.getItem("specificServiceData");

      if (!savedData) {
        return;
      }

      const parsedData = JSON.parse(savedData);

      if (parsedData.formData) {
        setFormData(parsedData.formData);
      }

      if (
        parsedData.savedServices &&
        Array.isArray(parsedData.savedServices)
      ) {
        setSavedServices(parsedData.savedServices);
      }
    } catch (error) {
      console.error(
        "Unable to load specific service data:",
        error
      );
    }
  }, []);

  /* =====================================================
     HANDLE INPUT
  ===================================================== */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }

    if (saveMessage) {
      setSaveMessage("");
      setSaveType("");
    }
  };

  /* =====================================================
     VALIDATION
  ===================================================== */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.serviceMain.trim()) {
      newErrors.serviceMain =
        "Service is required.";
    }

    if (!formData.specificServiceName.trim()) {
      newErrors.specificServiceName =
        "Specific Service Name is required.";
    }

    if (!formData.totalPrice.trim()) {
      newErrors.totalPrice =
        "Total Price is required.";
    }

    if (!formData.advanceBookingPayment.trim()) {
      newErrors.advanceBookingPayment =
        "Advance Booking Payment is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =====================================================
     SAVE TO LOCAL STORAGE
  ===================================================== */

  const saveToLocalStorage = (
    services = savedServices
  ) => {
    const data = {
      formData,
      savedServices: services,
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "specificServiceData",
      JSON.stringify(data)
    );
  };

  /* =====================================================
     SAVE DRAFT
  ===================================================== */

  const handleSaveDraft = () => {
    saveToLocalStorage();

    setSaveType("success");

    setSaveMessage(
      "Draft saved successfully."
    );

    setTimeout(() => {
      setSaveMessage("");
    }, 3000);
  };

  /* =====================================================
     SAVE SERVICE
  ===================================================== */

  const handleSaveService = () => {
    const isValid = validateForm();

    if (!isValid) {
      setSaveType("error");

      setSaveMessage(
        "Please fill all required fields."
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const newService = {
      id: Date.now(),
      serviceMain:
        formData.serviceMain.trim(),
      specificServiceName:
        formData.specificServiceName.trim(),
      chargeType: formData.chargeType,
      totalPrice: formData.totalPrice,
      description: formData.description,
      overTimeCharge:
        formData.overTimeCharge,
      travelCharges:
        formData.travelCharges,
      minimumBookingHours:
        formData.minimumBookingHours,
      advanceBookingPayment:
        formData.advanceBookingPayment,
      workDeliveryTimeline:
        formData.workDeliveryTimeline,
    };

    const updatedServices = [
      ...savedServices,
      newService,
    ];

    setSavedServices(updatedServices);

    saveToLocalStorage(updatedServices);

    setSaveType("success");

    setSaveMessage(
      "Specific service saved successfully."
    );

    setFormData({
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
    });

    setErrors({});

    setTimeout(() => {
      setSaveMessage("");
    }, 3000);
  };

  /* =====================================================
     DELETE SERVICE
  ===================================================== */

  const handleDeleteService = (id) => {
    const updatedServices =
      savedServices.filter(
        (service) => service.id !== id
      );

    setSavedServices(updatedServices);

    saveToLocalStorage(updatedServices);
  };

  /* =====================================================
     EDIT SERVICE
  ===================================================== */

  const handleEditService = (service) => {
    setFormData({
      serviceMain:
        service.serviceMain || "",
      specificServiceName:
        service.specificServiceName || "",
      chargeType:
        service.chargeType ||
        "Amount Per Event",
      totalPrice:
        service.totalPrice || "",
      description:
        service.description || "",
      overTimeCharge:
        service.overTimeCharge || "",
      travelCharges:
        service.travelCharges ||
        "Ex : 25 INR Per Km",
      minimumBookingHours:
        service.minimumBookingHours || "",
      advanceBookingPayment:
        service.advanceBookingPayment || "",
      workDeliveryTimeline:
        service.workDeliveryTimeline || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =====================================================
     ADD NEW SERVICE
  ===================================================== */

  const handleAddService = () => {
    setFormData({
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
    });

    setErrors({});

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <ServicesPricingLayout
      activeModel="service"
      showBackgroundLines={false}
    >
      {/* =================================================
          SAVE MESSAGE
      ================================================= */}

      {saveMessage && (
        <div
          className={`
            mt-[15px]
            flex
            items-center
            gap-[8px]
            rounded-[5px]
            border
            px-[16px]
            py-[12px]
            text-[16px]
            font-medium
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

      {/* =================================================
          TOOLBAR
      ================================================= */}

      <div
        className="
          mt-[18px]
          flex
          flex-col
          gap-[10px]
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div
          className="
            flex
            items-center
            gap-[10px]
          "
        >
          <span
            className="
              text-[20px]
              font-normal
              text-[#555555]
            "
          >
            All (
            {String(
              savedServices.length
            ).padStart(2, "0")}
            )
          </span>

          <button
            type="button"
            className="
              flex
              h-[45px]
              w-[121px]
              cursor-pointer
              items-center
              justify-center
              gap-[5px]
              rounded-[4px]
              bg-white
              px-[9px]
              text-[16px]
              font-normal
              text-[#333333]
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
            flex
            h-[52px]
            w-[218px]
            cursor-pointer
            items-center
            justify-center
            gap-[5px]
            rounded-[4px]
            bg-[#c40000]
            px-[16px]
            text-[18px]
            font-semibold
            text-white
          "
        >
          <FiPlusCircle className="text-[17px]" />

          Add Service
        </button>
      </div>

      {/* =================================================
          TITLE
      ================================================= */}

      <div className="mt-[15px]">
        <p
          className="
            text-[20px]
            font-medium
            text-[#777777]
          "
        >
          Specific Service - 1
        </p>
      </div>

      {/* =================================================
          FORM
      ================================================= */}

      <section
        className="
          mt-[7px]
          rounded-[6px]
          bg-white
          px-[25px]
          py-[20px]
          sm:px-[30px]
          md:px-[34px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-x-[20px]
            gap-y-[15px]
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

          {/* SPECIFIC SERVICE */}

          <PricingField
            label="Specific Service Name"
            required
            labelSize="text-[18px]"
            labelClassName="font-semibold"
          >
            <input
              type="text"
              name="specificServiceName"
              value={
                formData.specificServiceName
              }
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
              <option>
                Amount Per Event
              </option>

              <option>
                Amount Per Hour
              </option>

              <option>
                Amount Per Item
              </option>
            </select>
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
                  absolute
                  right-[8px]
                  top-[-15px]
                  text-[13px]
                  text-[#555555]
                "
              >
                {formData.description.length} / 400
                Characters
              </span>
            </div>
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
          </PricingField>

          {/* TRAVEL */}

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
              <option>
                Ex : 25 INR Per Km
              </option>

              <option>
                No Travel Charge
              </option>
            </select>
          </PricingField>

          {/* MINIMUM HOURS */}

          <PricingField
            label="Min. Booking Hours"
            optional
            labelSize="text-[18px]"
            labelClassName="font-semibold"
          >
            <input
              type="text"
              name="minimumBookingHours"
              value={
                formData.minimumBookingHours
              }
              onChange={handleChange}
              placeholder="Ex : 4 Hours"
              className={inputClassName}
            />
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
              value={
                formData.advanceBookingPayment
              }
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

          {/* DELIVERY */}

          <PricingField
            label="Work Delivery Timeline"
            optional
            labelSize="text-[18px]"
            labelClassName="font-semibold"
          >
            <input
              type="text"
              name="workDeliveryTimeline"
              value={
                formData.workDeliveryTimeline
              }
              onChange={handleChange}
              placeholder="Ex : Within 3 DAYS of the Event"
              className={inputClassName}
            />
          </PricingField>
        </div>

        {/* =================================================
            BUTTONS
        ================================================= */}

        <div
          className="
            mt-[22px]
            flex
            flex-col-reverse
            items-center
            justify-end
            gap-[12px]
            sm:flex-row
          "
        >
          <button
            type="button"
            onClick={handleSaveDraft}
            className="
              cursor-pointer
              text-[18px]
              font-semibold
              text-[#c40000]
            "
          >
            Save Draft
          </button>

          <button
            type="button"
            onClick={handleSaveService}
            className="
              h-[32px]
              w-[180px]
              cursor-pointer
              rounded-[4px]
              bg-[#333333]
              px-[18px]
              text-[18px]
              font-semibold
              text-white
            "
          >
            Save Service
          </button>
        </div>
      </section>

      {/* =====================================================
          SAVED SERVICES
      ===================================================== */}

      <div
        className="
          mt-[12px]
          space-y-[8px]
        "
      >
        {savedServices.map((service) => (
          <div
            key={service.id}
            className="
              flex
              items-center
              justify-between
              rounded-[5px]
              bg-white
              px-[18px]
              py-[15px]
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="min-w-0">
              {/* SERVICE TITLE */}

              <h3
                className="
                  text-[18px]
                  font-semibold
                  text-[#333333]
                "
              >
                {service.specificServiceName}
              </h3>

              {/* BADGE + SERVICE DETAILS */}

              <div
                className="
                  mt-[6px]
                  flex
                  items-center
                  gap-[7px]
                "
              >
                {/* BLACK CAMERA BADGE */}

                <div
                  className="
                    inline-flex
                    h-[37px]
                    w-[142px]
                    shrink-0
                    items-center
                    rounded-[3px]
                    bg-[#222222]
                    px-[9px]
                    text-[14px]
                    font-medium
                    leading-none
                    text-white
                  "
                >
                  <FaCamera
                    className="
                      mr-[4px]
                      text-white
                    "
                    size={17}
                  />

                  <span
                    className="
                      text-[14px]
                      font-semibold
                    "
                  >
                    {service.serviceMain}
                  </span>
                </div>

                {/* SPECIFIC SERVICE NAME */}

                <div
                  className="
                    flex
                    items-center
                    gap-[6px]
                    text-[14px]
                  "
                >
                  <span
                    className="
                      font-semibold
                      text-[#222222]
                    "
                  >
                    {service.specificServiceName},
                  </span>

                  {/* RED TEXT */}

                  <span
                    className="
                      font-semibold
                      text-red-900
                    "
                  >
                    Add Ons Applicable
                  </span>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT ACTIONS
            ================================================= */}

            <div
              className="
                ml-[15px]
                flex
                shrink-0
                items-center
                gap-[14px]
              "
            >
              {/* EDIT */}

              <button
                type="button"
                onClick={() =>
                  handleEditService(service)
                }
                className="
                  cursor-pointer
                  text-[#333333]
                "
                title="Edit"
              >
                <FiEdit className="text-[18px]" />
              </button>

              {/* DELETE */}

              <button
                type="button"
                onClick={() =>
                  handleDeleteService(service.id)
                }
                className="
                  cursor-pointer
                  text-[#900000]
                "
                title="Delete"
              >
                <FaTrash className="text-[16px]" />
              </button>

              {/* VIEW */}

              <button
                type="button"
                className="
                  cursor-pointer
                  text-[#333333]
                "
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