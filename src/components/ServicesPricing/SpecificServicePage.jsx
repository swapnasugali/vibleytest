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

  const emptyFormData = {
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

  const [formData, setFormData] = useState({
    ...emptyFormData,
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
     FORM VISIBILITY
  ===================================================== */

  const [showMainForm, setShowMainForm] =
    useState(true);

  /* =====================================================
     LOAD LOCAL STORAGE
  ===================================================== */

  useEffect(() => {
    try {
      const savedData =
        localStorage.getItem(
          "specificServiceData"
        );

      if (!savedData) {
        return;
      }

      const parsedData =
        JSON.parse(savedData);

      if (parsedData.formData) {
        setFormData(parsedData.formData);
      }

      if (
        parsedData.savedServices &&
        Array.isArray(parsedData.savedServices)
      ) {
        setSavedServices(
          parsedData.savedServices
        );
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
    const { name, value } =
      event.target;

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

    if (
      !formData.specificServiceName.trim()
    ) {
      newErrors.specificServiceName =
        "Specific Service Name is required.";
    }

    if (!formData.totalPrice.trim()) {
      newErrors.totalPrice =
        "Total Price is required.";
    }

    if (
      !formData.advanceBookingPayment.trim()
    ) {
      newErrors.advanceBookingPayment =
        "Advance Booking Payment is required.";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
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
    const isValid =
      validateForm();

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

      chargeType:
        formData.chargeType,

      totalPrice:
        formData.totalPrice,

      description:
        formData.description,

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

    setSavedServices(
      updatedServices
    );

    saveToLocalStorage(
      updatedServices
    );

    setSaveType("success");

    setSaveMessage(
      "Specific service saved successfully."
    );

    setFormData({
      ...emptyFormData,
    });

    setErrors({});

    setTimeout(() => {
      setSaveMessage("");
    }, 3000);
  };

  /* =====================================================
     DELETE SERVICE
  ===================================================== */

  const handleDeleteService = (
    id
  ) => {
    const updatedServices =
      savedServices.filter(
        (service) =>
          service.id !== id
      );

    setSavedServices(
      updatedServices
    );

    saveToLocalStorage(
      updatedServices
    );
  };

  /* =====================================================
     EDIT SERVICE
  ===================================================== */

  const handleEditService = (
    service
  ) => {
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

    setShowMainForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =====================================================
     VIEW SERVICE
  ===================================================== */

  const handleViewService = (
    service
  ) => {
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

    setShowMainForm(true);

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
      ...emptyFormData,
    });

    setErrors({});

    setShowMainForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =====================================================
     TOP EDIT BUTTON
  ===================================================== */

  const handleTopEdit = () => {
    setShowMainForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =====================================================
     TOP DELETE BUTTON
  ===================================================== */

  const handleTopDelete = () => {
    const shouldDelete =
      window.confirm(
        "Are you sure you want to clear this specific service?"
      );

    if (!shouldDelete) {
      return;
    }

    setFormData({
      ...emptyFormData,
    });

    setErrors({});

    setSaveMessage("");
    setSaveType("");
  };

  /* =====================================================
     TOP VIEW / HIDE BUTTON
  ===================================================== */

  const handleTopView = () => {
    setShowMainForm(
      (previous) => !previous
    );
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
            <FiCheckCircle
              className="text-[20px]"
            />
          )}

          <span>
            {saveMessage}
          </span>
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
          gap-[12px]
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div
          className="
            flex
            w-full
            items-center
            gap-[10px]
            sm:w-auto
          "
        >
          <span
            className="
              whitespace-nowrap
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

            <FiChevronDown
              className="text-[17px]"
            />
          </button>
        </div>

        {/* =================================================
            ADD SERVICE
        ================================================= */}

        <button
          type="button"
          onClick={handleAddService}
          className="
            flex
            h-[52px]
            w-full
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
            transition
            hover:bg-[#a80000]
            sm:w-[218px]
          "
        >
          <FiPlusCircle
            className="text-[17px]"
          />

          Add Service
        </button>
      </div>

      {/* =================================================
          SPECIFIC SERVICE - 1 WHITE CARD
      ================================================= */}

      <section
        className="
          mt-[15px]
          w-full
          overflow-hidden
          rounded-[6px]
          bg-white
        "
      >
        {/* =================================================
            TITLE
        ================================================= */}

        <div
          className="
            flex
            min-h-[48px]
            items-center
            px-[15px]
            sm:px-[20px]
            md:px-[25px]
          "
        >
          <p
            className="
              text-[18px]
              font-medium
              text-[#777777]
              sm:text-[20px]
            "
          >
            Specific Service - 1
          </p>
        </div>

        {/* =================================================
            TOP ACTION ICONS
        ================================================= */}

        <div
          className="
            flex
            h-[56px]
            items-center
            justify-end
            border-b
            border-t
            border-[#e5e5e5]
            px-[15px]
            sm:px-[25px]
            md:px-[30px]
            lg:px-[34px]
          "
        >
          <div
            className="
              flex
              items-center
              gap-[22px]
              sm:gap-[28px]
            "
          >
            {/* EDIT */}

            <button
              type="button"
              onClick={handleTopEdit}
              title="Edit"
              aria-label="Edit specific service"
              className="
                flex
                cursor-pointer
                items-center
                justify-center
                text-[#222222]
                transition
                hover:text-[#000000]
              "
            >
              <FiEdit
                size={22}
                strokeWidth={2}
              />
            </button>

            {/* DELETE */}

            <button
              type="button"
              onClick={handleTopDelete}
              title="Delete"
              aria-label="Delete specific service"
              className="
                flex
                cursor-pointer
                items-center
                justify-center
                text-[#8b0000]
                transition
                hover:text-[#c40000]
              "
            >
              <FaTrash
                size={17}
              />
            </button>

            {/* VIEW */}

            <button
              type="button"
              onClick={handleTopView}
              title={
                showMainForm
                  ? "Hide"
                  : "View"
              }
              aria-label={
                showMainForm
                  ? "Hide service"
                  : "View service"
              }
              className="
                flex
                cursor-pointer
                items-center
                justify-center
                text-[#222222]
                transition
                hover:text-[#000000]
              "
            >
              <LuEyeClosed
                size={21}
                strokeWidth={2}
              />
            </button>
          </div>
        </div>

        {/* =================================================
            FORM
        ================================================= */}

        {showMainForm && (
          <div
            className="
              px-[15px]
              py-[20px]
              sm:px-[25px]
              sm:py-[20px]
              md:px-[30px]
              lg:px-[34px]
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-x-[20px]
                gap-y-[15px]
                md:grid-cols-2
              "
            >
              {/* =================================================
                  SERVICE
              ================================================= */}

              <PricingField
                label="Service"
                required
                labelSize="text-[16px] sm:text-[18px]"
                labelClassName="font-semibold"
              >
                <input
                  type="text"
                  name="serviceMain"
                  value={
                    formData.serviceMain
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Ex : Photography"
                  className={inputClassName}
                />

                {errors.serviceMain && (
                  <p
                    className="
                      mt-[4px]
                      text-[13px]
                      text-[#c40000]
                    "
                  >
                    {
                      errors.serviceMain
                    }
                  </p>
                )}
              </PricingField>

              {/* =================================================
                  SPECIFIC SERVICE
              ================================================= */}

              <PricingField
                label="Specific Service Name"
                required
                labelSize="text-[16px] sm:text-[18px]"
                labelClassName="font-semibold"
              >
                <input
                  type="text"
                  name="specificServiceName"
                  value={
                    formData.specificServiceName
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Ex : General Photography"
                  className={inputClassName}
                />

                {errors.specificServiceName && (
                  <p
                    className="
                      mt-[4px]
                      text-[13px]
                      text-[#c40000]
                    "
                  >
                    {
                      errors.specificServiceName
                    }
                  </p>
                )}
              </PricingField>

              {/* =================================================
                  CHARGE TYPE
              ================================================= */}

              <PricingField
                label="Charge Type"
                required
                labelSize="text-[16px] sm:text-[18px]"
                labelClassName="font-semibold"
              >
                <select
                  name="chargeType"
                  value={
                    formData.chargeType
                  }
                  onChange={
                    handleChange
                  }
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

              {/* =================================================
                  TOTAL PRICE
              ================================================= */}

              <PricingField
                label="Total Price"
                required
                labelSize="text-[16px] sm:text-[18px]"
                labelClassName="font-semibold"
              >
                <input
                  type="text"
                  name="totalPrice"
                  value={
                    formData.totalPrice
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="12,000/- INR"
                  className={inputClassName}
                />

                {errors.totalPrice && (
                  <p
                    className="
                      mt-[4px]
                      text-[13px]
                      text-[#c40000]
                    "
                  >
                    {
                      errors.totalPrice
                    }
                  </p>
                )}
              </PricingField>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <PricingField
                label="Description"
                labelSize="text-[16px] sm:text-[18px]"
                labelClassName="font-semibold"
                className="md:col-span-2"
              >
                <div
                  className="relative"
                >
                  <textarea
                    name="description"
                    value={
                      formData.description
                    }
                    onChange={
                      handleChange
                    }
                    maxLength={400}
                    placeholder="Ex : this is the best ever service which includes ..."
                    className={textareaClassName}
                  />

                  <span
                    className="
                      absolute
                      right-[8px]
                      top-[-15px]
                      whitespace-nowrap
                      text-[11px]
                      text-[#555555]
                      sm:text-[13px]
                    "
                  >
                    {
                      formData.description
                        .length
                    }{" "}
                    / 400 Characters
                  </span>
                </div>
              </PricingField>

              {/* =================================================
                  OVER TIME CHARGE
              ================================================= */}

              <PricingField
                label="Over Time Charge / Hour"
                optional
                labelSize="text-[16px] sm:text-[18px]"
                labelClassName="font-semibold"
              >
                <input
                  type="text"
                  name="overTimeCharge"
                  value={
                    formData.overTimeCharge
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Ex : 1500/- INR Per Hour"
                  className={inputClassName}
                />
              </PricingField>

              {/* =================================================
                  TRAVEL CHARGES
              ================================================= */}

              <PricingField
                label="Travel Charges"
                optional
                labelSize="text-[16px] sm:text-[18px]"
                labelClassName="font-semibold"
              >
                <select
                  name="travelCharges"
                  value={
                    formData.travelCharges
                  }
                  onChange={
                    handleChange
                  }
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

              {/* =================================================
                  MINIMUM BOOKING HOURS
              ================================================= */}

              <PricingField
                label="Min. Booking Hours"
                optional
                labelSize="text-[16px] sm:text-[18px]"
                labelClassName="font-semibold"
              >
                <input
                  type="text"
                  name="minimumBookingHours"
                  value={
                    formData.minimumBookingHours
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Ex : 4 Hours"
                  className={inputClassName}
                />
              </PricingField>

              {/* =================================================
                  ADVANCE PAYMENT
              ================================================= */}

              <PricingField
                label="Advance Booking Payment (%)"
                required
                labelSize="text-[16px] sm:text-[18px]"
                labelClassName="font-semibold"
              >
                <input
                  type="text"
                  name="advanceBookingPayment"
                  value={
                    formData.advanceBookingPayment
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Ex : 30%"
                  className={inputClassName}
                />

                {errors.advanceBookingPayment && (
                  <p
                    className="
                      mt-[4px]
                      text-[13px]
                      text-[#c40000]
                    "
                  >
                    {
                      errors
                        .advanceBookingPayment
                    }
                  </p>
                )}
              </PricingField>

              {/* =================================================
                  DELIVERY
              ================================================= */}

              <PricingField
                label="Work Delivery Timeline"
                optional
                labelSize="text-[16px] sm:text-[18px]"
                labelClassName="font-semibold"
              >
                <input
                  type="text"
                  name="workDeliveryTimeline"
                  value={
                    formData.workDeliveryTimeline
                  }
                  onChange={
                    handleChange
                  }
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
                onClick={
                  handleSaveDraft
                }
                className="
                  cursor-pointer
                  text-[17px]
                  font-semibold
                  text-[#c40000]
                  transition
                  hover:text-[#970000]
                  sm:text-[18px]
                "
              >
                Save Draft
              </button>

              <button
                type="button"
                onClick={
                  handleSaveService
                }
                className="
                  h-[40px]
                  w-full
                  cursor-pointer
                  rounded-[4px]
                  bg-[#333333]
                  px-[18px]
                  text-[17px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#222222]
                  sm:h-[32px]
                  sm:w-[180px]
                  sm:text-[18px]
                "
              >
                Save Service
              </button>
            </div>
          </div>
        )}
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
        {savedServices.map(
          (service) => (
            <div
              key={service.id}
              className="
                flex
                flex-col
                gap-[12px]
                rounded-[5px]
                bg-white
                px-[15px]
                py-[15px]
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:px-[18px]
              "
            >
              {/* =================================================
                  LEFT CONTENT
              ================================================= */}

              <div className="min-w-0 flex-1">
                <h3
                  className="
                    truncate
                    text-[17px]
                    font-semibold
                    text-[#333333]
                    sm:text-[18px]
                  "
                >
                  {
                    service.specificServiceName
                  }
                </h3>

                <div
                  className="
                    mt-[6px]
                    flex
                    flex-wrap
                    items-center
                    gap-[7px]
                  "
                >
                  {/* CAMERA BADGE */}

                  <div
                    className="
                      inline-flex
                      h-[37px]
                      min-w-0
                      max-w-full
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
                        shrink-0
                        text-white
                      "
                      size={17}
                    />

                    <span
                      className="
                        truncate
                        text-[14px]
                        font-semibold
                      "
                    >
                      {
                        service.serviceMain
                      }
                    </span>
                  </div>

                  {/* SERVICE NAME */}

                  <div
                    className="
                      flex
                      min-w-0
                      flex-wrap
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
                      {
                        service
                          .specificServiceName
                      },
                    </span>

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
                  RIGHT ACTION ICONS
              ================================================= */}

              <div
                className="
                  ml-0
                  flex
                  shrink-0
                  items-center
                  justify-end
                  gap-[18px]
                  sm:ml-[15px]
                  sm:gap-[14px]
                "
              >
                {/* EDIT */}

                <button
                  type="button"
                  onClick={() =>
                    handleEditService(
                      service
                    )
                  }
                  className="
                    flex
                    cursor-pointer
                    items-center
                    justify-center
                    text-[#333333]
                    transition
                    hover:text-[#000000]
                  "
                  title="Edit"
                  aria-label="Edit service"
                >
                  <FiEdit
                    className="text-[18px]"
                  />
                </button>

                {/* DELETE */}

                <button
                  type="button"
                  onClick={() =>
                    handleDeleteService(
                      service.id
                    )
                  }
                  className="
                    flex
                    cursor-pointer
                    items-center
                    justify-center
                    text-[#900000]
                    transition
                    hover:text-[#c40000]
                  "
                  title="Delete"
                  aria-label="Delete service"
                >
                  <FaTrash
                    className="text-[16px]"
                  />
                </button>

                {/* VIEW */}

                <button
                  type="button"
                  onClick={() =>
                    handleViewService(
                      service
                    )
                  }
                  className="
                    flex
                    cursor-pointer
                    items-center
                    justify-center
                    text-[#333333]
                    transition
                    hover:text-[#000000]
                  "
                  title="View"
                  aria-label="View service"
                >
                  <LuEyeClosed
                    className="text-[18px]"
                  />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </ServicesPricingLayout>
  );
};

export default SpecificServicePage;