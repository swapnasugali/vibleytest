import React, { useEffect, useState } from "react";

import {
  FiPlusCircle,
  FiEdit,
  FiTrash2,
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

const FixedPackagePage = () => {
  /* =========================================================
     FORM STATE
  ========================================================= */

  const [formData, setFormData] = useState({
    packageName: "",
    category: "",
    chargeType: "Amount Per Event",
    totalPrice: "",
    description: "",
    overTimeCharge: "",
    travelCharges: "Ex : 25 INR Per Km",
    minimumBookingHours: "",
    advanceBookingPayment: "",
    workDeliveryTimeline: "",
  });

  /* =========================================================
     SERVICES STATE
  ========================================================= */

  const [services, setServices] = useState([
    {
      id: 1,
      name: "",
      description: "",
    },
    {
      id: 2,
      name: "",
      description: "",
    },
  ]);

  /* =========================================================
     SAVED PACKAGES
  ========================================================= */

  const [savedPackages, setSavedPackages] = useState([
    {
      id: 1,
      packageName: "Corporate Event Package",
      category: "Photography",
      serviceCount: "3 services, Add Ons Applicable",
    },
    {
      id: 2,
      packageName: "Pre Wedding Shoot Package",
      category: "Photography",
      serviceCount: "4 Services, Add Ons Applicable",
    },
  ]);

  /* =========================================================
     MESSAGE / VALIDATION
  ========================================================= */

  const [saveMessage, setSaveMessage] = useState("");
  const [saveType, setSaveType] = useState("");
  const [errors, setErrors] = useState({});

  /* =========================================================
     VIEW / FORM STATE
  ========================================================= */

  const [showMainForm, setShowMainForm] = useState(true);

  /* =========================================================
     LOAD SAVED DATA
  ========================================================= */

  useEffect(() => {
    try {
      const savedPackageData =
        localStorage.getItem("fixedPackageData");

      if (savedPackageData) {
        const parsedData =
          JSON.parse(savedPackageData);

        if (parsedData.formData) {
          setFormData(parsedData.formData);
        }

        if (
          parsedData.services &&
          Array.isArray(parsedData.services)
        ) {
          setServices(parsedData.services);
        }

        if (
          parsedData.savedPackages &&
          Array.isArray(parsedData.savedPackages)
        ) {
          setSavedPackages(
            parsedData.savedPackages
          );
        }
      }
    } catch (error) {
      console.error(
        "Unable to load fixed package data:",
        error
      );
    }
  }, []);

  /* =========================================================
     HANDLE INPUT
  ========================================================= */

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

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

  /* =========================================================
     HANDLE SERVICE INPUT
  ========================================================= */

  const handleServiceChange = (
    id,
    field,
    value
  ) => {
    setServices((previous) =>
      previous.map((service) =>
        service.id === id
          ? {
              ...service,
              [field]: value,
            }
          : service
      )
    );

    if (
      errors[
        `service-${id}-${field}`
      ]
    ) {
      setErrors((previous) => ({
        ...previous,
        [`service-${id}-${field}`]: "",
      }));
    }

    if (saveMessage) {
      setSaveMessage("");
      setSaveType("");
    }
  };

  /* =========================================================
     ADD SERVICE
  ========================================================= */

  const addService = () => {
    setServices((previous) => [
      ...previous,
      {
        id: Date.now(),
        name: "",
        description: "",
      },
    ]);
  };

  /* =========================================================
     REMOVE SERVICE
  ========================================================= */

  const removeService = (id) => {
    setServices((previous) =>
      previous.filter(
        (service) =>
          service.id !== id
      )
    );
  };

  /* =========================================================
     RESET FORM
  ========================================================= */

  const resetForm = () => {
    setFormData({
      packageName: "",
      category: "",
      chargeType: "Amount Per Event",
      totalPrice: "",
      description: "",
      overTimeCharge: "",
      travelCharges: "Ex : 25 INR Per Km",
      minimumBookingHours: "",
      advanceBookingPayment: "",
      workDeliveryTimeline: "",
    });

    setServices([
      {
        id: 1,
        name: "",
        description: "",
      },
      {
        id: 2,
        name: "",
        description: "",
      },
    ]);

    setErrors({});
    setSaveMessage("");
    setSaveType("");
  };

  /* =========================================================
     TOP EDIT BUTTON
  ========================================================= */

  const handleTopEdit = () => {
    setShowMainForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     TOP DELETE BUTTON
  ========================================================= */

  const handleTopDelete = () => {
    const shouldDelete =
      window.confirm(
        "Are you sure you want to clear this fixed package?"
      );

    if (!shouldDelete) {
      return;
    }

    resetForm();
  };

  /* =========================================================
     TOP VIEW BUTTON
  ========================================================= */

  const handleTopView = () => {
    setShowMainForm(
      (previous) => !previous
    );
  };

  /* =========================================================
     VALIDATION
  ========================================================= */

  const validateForm = () => {
    const newErrors = {};

    if (
      !formData.packageName.trim()
    ) {
      newErrors.packageName =
        "Fixed Package Name is required.";
    }

    if (
      !formData.category.trim()
    ) {
      newErrors.category =
        "Category is required.";
    }

    if (
      !formData.totalPrice.trim()
    ) {
      newErrors.totalPrice =
        "Total Price is required.";
    }

    if (
      !formData.advanceBookingPayment.trim()
    ) {
      newErrors.advanceBookingPayment =
        "Advance Booking Payment is required.";
    }

    if (services.length < 2) {
      newErrors.services =
        "At least 2 services are required.";
    }

    services.forEach((service) => {
      if (!service.name.trim()) {
        newErrors[
          `service-${service.id}-name`
        ] =
          "Service Name is required.";
      }

      if (
        !service.description.trim()
      ) {
        newErrors[
          `service-${service.id}-description`
        ] =
          "Description is required.";
      }
    });

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  /* =========================================================
     SAVE PACKAGE DATA
  ========================================================= */

  const savePackageData = (
    status = "draft"
  ) => {
    const packageData = {
      formData,
      services,
      savedPackages,
      status,
      savedAt:
        new Date().toISOString(),
    };

    localStorage.setItem(
      "fixedPackageData",
      JSON.stringify(packageData)
    );
  };

  /* =========================================================
     SAVE DRAFT
  ========================================================= */

  const handleSaveDraft = () => {
    savePackageData("draft");

    setSaveType("success");

    setSaveMessage(
      "Draft saved successfully."
    );

    setTimeout(() => {
      setSaveMessage("");
    }, 3000);
  };

  /* =========================================================
     SAVE PACKAGE
  ========================================================= */

  const handleSavePackage = () => {
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

    const newPackage = {
      id: Date.now(),

      packageName:
        formData.packageName.trim(),

      category:
        formData.category.trim(),

      serviceCount:
        `${services.length} services, Add Ons Applicable`,
    };

    const updatedPackages = [
      ...savedPackages,
      newPackage,
    ];

    setSavedPackages(
      updatedPackages
    );

    const packageData = {
      formData,
      services,
      savedPackages:
        updatedPackages,
      status: "saved",
      savedAt:
        new Date().toISOString(),
    };

    localStorage.setItem(
      "fixedPackageData",
      JSON.stringify(packageData)
    );

    setSaveType("success");

    setSaveMessage(
      "Package saved successfully."
    );

    resetForm();

    setTimeout(() => {
      setSaveMessage("");
    }, 3000);
  };

  /* =========================================================
     DELETE SAVED PACKAGE
  ========================================================= */

  const handleDeletePackage = (
    id
  ) => {
    const updatedPackages =
      savedPackages.filter(
        (pkg) =>
          pkg.id !== id
      );

    setSavedPackages(
      updatedPackages
    );

    try {
      const existingData =
        localStorage.getItem(
          "fixedPackageData"
        );

      const parsedData =
        existingData
          ? JSON.parse(existingData)
          : {};

      parsedData.savedPackages =
        updatedPackages;

      localStorage.setItem(
        "fixedPackageData",
        JSON.stringify(parsedData)
      );
    } catch (error) {
      console.error(
        "Unable to delete package:",
        error
      );
    }
  };

  /* =========================================================
     EDIT SAVED PACKAGE
  ========================================================= */

  const handleEditPackage = (
    pkg
  ) => {
    setFormData((previous) => ({
      ...previous,

      packageName:
        pkg.packageName,

      category:
        pkg.category,
    }));

    setShowMainForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <ServicesPricingLayout
      activeModel="fixed"
      showBackgroundLines={false}
    >
      {/* =====================================================
          RESPONSIVE MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1090px]
          px-[12px]

          sm:px-[16px]

          md:px-[20px]

          lg:px-0
        "
      >
        {/* =====================================================
            SAVE MESSAGE
        ===================================================== */}

        {saveMessage && (
          <div
            className={`
              mt-[15px]
              flex
              items-center
              gap-[8px]
              rounded-[5px]
              border
              px-[12px]
              py-[10px]
              text-[14px]
              font-medium

              sm:px-[16px]
              sm:py-[12px]
              sm:text-[16px]

              ${
                saveType === "success"
                  ? "border-[#b7dfbd] bg-[#edf9ef] text-[#26733a]"
                  : "border-[#efb0b0] bg-[#fff1f1] text-[#c40000]"
              }
            `}
          >
            {saveType === "success" && (
              <FiCheckCircle
                className="shrink-0 text-[19px] sm:text-[20px]"
              />
            )}

            <span>
              {saveMessage}
            </span>
          </div>
        )}

        {/* =====================================================
            TOOLBAR
        ===================================================== */}

        <div
          className="
            mt-[16px]
            flex
            flex-col
            gap-[12px]

            sm:mt-[18px]
            sm:flex-row
            sm:items-center
            sm:justify-between

            lg:gap-[20px]
          "
        >
          <div
            className="
              flex
              w-full
              items-center
              justify-between
              gap-[10px]

              sm:w-auto
              sm:justify-start
            "
          >
            <span
              className="
                whitespace-nowrap
                text-[17px]
                font-normal
                text-[#555555]

                sm:text-[20px]
              "
            >
              All (
              {String(
                savedPackages.length
              ).padStart(2, "0")}
              )
            </span>

            <button
              type="button"
              className="
                flex
                h-[42px]
                w-[105px]
                shrink-0
                cursor-pointer
                items-center
                justify-center
                gap-[4px]
                rounded-[4px]
                bg-white
                px-[7px]
                text-[14px]
                font-normal
                text-[#333333]

                sm:h-[45px]
                sm:w-[121px]
                sm:gap-[5px]
                sm:px-[9px]
                sm:text-[16px]
              "
            >
              Sort By

              <FiChevronDown
                className="text-[16px] sm:text-[17px]"
              />
            </button>
          </div>

          {/* ADD PACKAGE */}

          <button
            type="button"
            onClick={() => {
              resetForm();
              setShowMainForm(true);
            }}
            className="
              flex
              h-[48px]
              w-full
              cursor-pointer
              items-center
              justify-center
              gap-[5px]
              rounded-[4px]
              bg-[#c40000]
              px-[14px]
              text-[16px]
              font-semibold
              text-white
              transition
              hover:bg-[#a80000]

              sm:h-[52px]
              sm:w-[218px]
              sm:px-[16px]
              sm:text-[18px]
            "
          >
            <FiPlusCircle
              className="text-[16px] sm:text-[17px]"
            />

            Add Package
          </button>
        </div>

        {/* =====================================================
            FIXED PACKAGE
        ===================================================== */}

        <section
          className="
            mt-[12px]
            overflow-hidden
            rounded-[6px]
            bg-white

            sm:mt-[15px]
          "
        >
          {/* PACKAGE TITLE */}

          <div
            className="
              flex
              min-h-[45px]
              items-center
              px-[12px]

              sm:min-h-[48px]
              sm:px-[10px]
            "
          >
            <p
              className="
                text-[17px]
                font-medium
                text-[#777777]

                sm:text-[20px]
              "
            >
              Fixed Package - 1
            </p>
          </div>

          {/* TOP ACTION ICONS */}

          <div
            className="
              flex
              h-[52px]
              items-center
              justify-end
              border-b
              border-t
              border-[#e5e5e5]
              px-[15px]

              sm:h-[56px]
              sm:px-[25px]

              md:px-[30px]

              lg:px-[34px]
            "
          >
            <div
              className="
                flex
                items-center
                gap-[20px]

                sm:gap-[28px]
              "
            >
              {/* EDIT */}

              <button
                type="button"
                onClick={handleTopEdit}
                title="Edit"
                aria-label="Edit package"
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
                  size={20}
                  strokeWidth={2}
                  className="sm:h-[22px] sm:w-[22px]"
                />
              </button>

              {/* DELETE */}

              <button
                type="button"
                onClick={handleTopDelete}
                title="Delete"
                aria-label="Delete package"
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
                  size={16}
                  className="sm:h-[17px] sm:w-[17px]"
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
                    ? "Hide package"
                    : "View package"
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
                  size={20}
                  strokeWidth={2}
                  className="sm:h-[21px] sm:w-[21px]"
                />
              </button>
            </div>
          </div>

          {/* ===================================================
              PACKAGE FORM
          =================================================== */}

          {showMainForm && (
            <div
              className="
                px-[14px]
                py-[16px]

                sm:px-[20px]
                sm:py-[20px]

                md:px-[30px]

                lg:px-[34px]
              "
            >
              <div
                className="
                  grid
                  grid-cols-1
                  gap-x-[16px]
                  gap-y-[14px]

                  sm:grid-cols-2
                  sm:gap-x-[18px]
                  sm:gap-y-[15px]

                  lg:gap-x-[20px]
                "
              >
                {/* PACKAGE NAME */}

                <PricingField
                  label="Fixed Package Name"
                  required
                  labelSize="text-[16px] sm:text-[18px]"
                  labelClassName="font-semibold"
                >
                  <input
                    type="text"
                    name="packageName"
                    value={
                      formData.packageName
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Ex : All in One Trending Pack"
                    className={
                      inputClassName
                    }
                  />

                  {errors.packageName && (
                    <p
                      className="
                        mt-[4px]
                        text-[12px]
                        font-normal
                        text-[#c40000]

                        sm:text-[13px]
                      "
                    >
                      {errors.packageName}
                    </p>
                  )}
                </PricingField>

                {/* CATEGORY */}

                <PricingField
                  label="Category"
                  required
                  labelSize="text-[16px] sm:text-[18px]"
                  labelClassName="font-semibold"
                >
                  <input
                    type="text"
                    name="category"
                    value={
                      formData.category
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Ex : Photography"
                    className={
                      inputClassName
                    }
                  />

                  {errors.category && (
                    <p
                      className="
                        mt-[4px]
                        text-[12px]
                        font-normal
                        text-[#c40000]

                        sm:text-[13px]
                      "
                    >
                      {errors.category}
                    </p>
                  )}
                </PricingField>

                {/* CHARGE TYPE */}

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
                    className={
                      selectClassName
                    }
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
                    className={
                      inputClassName
                    }
                  />

                  {errors.totalPrice && (
                    <p
                      className="
                        mt-[4px]
                        text-[12px]
                        font-normal
                        text-[#c40000]

                        sm:text-[13px]
                      "
                    >
                      {errors.totalPrice}
                    </p>
                  )}
                </PricingField>

                {/* DESCRIPTION */}

                <PricingField
                  label="Description"
                  labelSize="text-[16px] sm:text-[18px]"
                  labelClassName="font-semibold"
                  className="sm:col-span-2"
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
                      placeholder="Ex : this is the best ever package which includes all the services ..."
                      className={
                        textareaClassName
                      }
                    />

                    <span
                      className="
                        absolute
                        right-[6px]
                        top-[-14px]
                        text-[11px]
                        font-normal
                        text-[#555555]

                        sm:right-[8px]
                        sm:top-[-15px]
                        sm:text-[13px]
                      "
                    >
                      {
                        formData
                          .description
                          .length
                      }

                      {" / 400 Characters"}
                    </span>
                  </div>
                </PricingField>

                {/* OVER TIME CHARGE */}

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
                    className={
                      inputClassName
                    }
                  />
                </PricingField>

                {/* TRAVEL CHARGES */}

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
                    className={
                      selectClassName
                    }
                  >
                    <option>
                      Ex : 25 INR Per Km
                    </option>

                    <option>
                      No Travel Charge
                    </option>
                  </select>
                </PricingField>

                {/* MINIMUM BOOKING HOURS */}

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
                    className={
                      inputClassName
                    }
                  />
                </PricingField>

                {/* ADVANCE PAYMENT */}

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
                    className={
                      inputClassName
                    }
                  />

                  {errors.advanceBookingPayment && (
                    <p
                      className="
                        mt-[4px]
                        text-[12px]
                        font-normal
                        text-[#c40000]

                        sm:text-[13px]
                      "
                    >
                      {
                        errors.advanceBookingPayment
                      }
                    </p>
                  )}
                </PricingField>

                {/* WORK DELIVERY */}

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
                    className={
                      inputClassName
                    }
                  />
                </PricingField>
              </div>

              {/* =================================================
                  SERVICES PROVIDED
              ================================================= */}

              <div
                className="
                  mt-[18px]

                  sm:mt-[16px]
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-[10px]

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <label
                    className="
                      text-[16px]
                      font-semibold
                      leading-[22px]
                      text-[#333333]

                      sm:text-[18px]
                      sm:leading-normal
                    "
                  >
                    Services Provided

                    <span
                      className="text-[#d00000]"
                    >
                      *
                    </span>

                    <span
                      className="
                        ml-[3px]
                        text-[13px]
                        italic
                        text-[#737373]

                        sm:ml-[4px]
                        sm:text-[15px]
                      "
                    >
                      (at least 2 services makes the package)
                    </span>
                  </label>

                  <button
                    type="button"
                    onClick={addService}
                    className="
                      flex
                      h-[37px]
                      w-full
                      cursor-pointer
                      items-center
                      justify-center
                      gap-[4px]
                      rounded-[3px]
                      border
                      border-[#cfcfcf]
                      px-[8px]
                      text-[16px]
                      font-medium
                      text-[#970000]
                      transition
                      hover:bg-[#fff5f5]

                      sm:w-[167px]
                      sm:justify-start
                      sm:text-[18px]
                    "
                  >
                    <FiPlusCircle
                      className="text-[16px]"
                    />

                    Add Service
                  </button>
                </div>

                {errors.services && (
                  <p
                    className="
                      mt-[5px]
                      text-[12px]
                      text-[#c40000]

                      sm:text-[13px]
                    "
                  >
                    {errors.services}
                  </p>
                )}

                {/* SERVICES LIST */}

                <div
                  className="
                    mt-[7px]
                    bg-[#fffcef]
                    px-[8px]
                    py-[10px]

                    sm:px-[12px]
                  "
                >
                  {services.map(
                    (service, index) => (
                      <div
                        key={service.id}
                        className="
                          relative
                          mb-[14px]
                          grid
                          grid-cols-1
                          gap-[10px]
                          last:mb-0

                          sm:grid-cols-[25px_1fr]

                          lg:grid-cols-[25px_1fr_1.5fr]
                        "
                      >
                        {/* NUMBER */}

                        <div
                          className="
                            hidden
                            pt-[10px]
                            text-[9px]
                            font-medium

                            sm:block
                          "
                        >
                          {index + 1}.
                        </div>

                        {/* SERVICE NAME */}

                        <div>
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              gap-[8px]
                            "
                          >
                            <label
                              className="
                                block
                                text-[16px]
                                font-semibold
                                leading-[21px]

                                sm:text-[18px]
                                sm:leading-normal
                              "
                            >
                              Service Name

                              <span
                                className="text-[#d00000]"
                              >
                                *
                              </span>
                            </label>

                            {services.length > 2 && (
                              <button
                                type="button"
                                onClick={() =>
                                  removeService(
                                    service.id
                                  )
                                }
                                className="
                                  shrink-0
                                  cursor-pointer
                                  text-[#c40000]
                                "
                                title="Remove Service"
                              >
                                <FiTrash2
                                  className="text-[18px]"
                                />
                              </button>
                            )}
                          </div>

                          <input
                            type="text"
                            value={
                              service.name
                            }
                            onChange={(event) =>
                              handleServiceChange(
                                service.id,
                                "name",
                                event.target.value
                              )
                            }
                            placeholder={
                              index === 0
                                ? "Ex : General Photography"
                                : "Ex : Candid Photography"
                            }
                            className={`
                              ${inputClassName}
                              mt-[4px]
                              w-full
                            `}
                          />

                          {errors[
                            `service-${service.id}-name`
                          ] && (
                            <p
                              className="
                                mt-[4px]
                                text-[12px]
                                font-normal
                                text-[#c40000]

                                sm:text-[13px]
                              "
                            >
                              {
                                errors[
                                  `service-${service.id}-name`
                                ]
                              }
                            </p>
                          )}
                        </div>

                        {/* SERVICE DESCRIPTION */}

                        <div>
                          <div
                            className="
                              flex
                              items-start
                              justify-between
                              gap-[8px]
                            "
                          >
                            <label
                              className="
                                text-[16px]
                                font-semibold
                                leading-[21px]

                                sm:text-[18px]
                                sm:leading-normal
                              "
                            >
                              Description

                              <span
                                className="text-[#d00000]"
                              >
                                *
                              </span>
                            </label>

                            <span
                              className="
                                shrink-0
                                text-[12px]
                                text-[#737373]

                                sm:text-[14px]
                              "
                            >
                              {
                                service
                                  .description
                                  .length
                              }

                              {" / 200 Characters"}
                            </span>
                          </div>

                          <input
                            type="text"
                            maxLength={200}
                            value={
                              service.description
                            }
                            onChange={(event) =>
                              handleServiceChange(
                                service.id,
                                "description",
                                event.target.value
                              )
                            }
                            placeholder={
                              index === 0
                                ? "Ex : Stunning All around photography, which covers the event ..."
                                : "Ex : Candid are Club, We are specialized in taking a toned cand..."
                            }
                            className={`
                              ${inputClassName}
                              mt-[4px]
                              w-full
                            `}
                          />

                          {errors[
                            `service-${service.id}-description`
                          ] && (
                            <p
                              className="
                                mt-[4px]
                                text-[12px]
                                font-normal
                                text-[#c40000]

                                sm:text-[13px]
                              "
                            >
                              {
                                errors[
                                  `service-${service.id}-description`
                                ]
                              }
                            </p>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* =================================================
                  BUTTONS
              ================================================= */}

              <div
                className="
                  mt-[22px]
                  flex
                  flex-col-reverse
                  items-stretch
                  justify-end
                  gap-[10px]

                  sm:flex-row
                  sm:items-center
                  sm:gap-[12px]
                "
              >
                <button
                  type="button"
                  onClick={
                    handleSaveDraft
                  }
                  className="
                    w-full
                    cursor-pointer
                    py-[8px]
                    text-[16px]
                    font-semibold
                    text-[#c40000]
                    transition
                    hover:text-[#970000]

                    sm:w-auto
                    sm:py-0
                    sm:text-[18px]
                  "
                >
                  Save Draft
                </button>

                <button
                  type="button"
                  onClick={
                    handleSavePackage
                  }
                  className="
                    h-[40px]
                    w-full
                    cursor-pointer
                    rounded-[4px]
                    bg-[#333333]
                    px-[18px]
                    text-[16px]
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#222222]

                    sm:h-[32px]
                    sm:w-[180px]
                    sm:text-[18px]
                  "
                >
                  Save Package
                </button>
              </div>
            </div>
          )}
        </section>

        {/* =====================================================
            SAVED FIXED PACKAGES
        ===================================================== */}

        <div
          className="
            mt-[10px]
            space-y-[8px]

            sm:mt-[12px]
          "
        >
          {savedPackages.map(
            (pkg) => (
              <div
                key={pkg.id}
                className="
                  flex
                  flex-col
                  gap-[12px]
                  rounded-[5px]
                  bg-white
                  px-[12px]
                  py-[13px]

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  sm:gap-[15px]
                  sm:px-[18px]
                  sm:py-[15px]
                "
              >
                {/* LEFT CONTENT */}

                <div
                  className="
                    min-w-0
                    flex-1
                  "
                >
                  <h3
                    className="
                      break-words
                      text-[16px]
                      font-semibold
                      text-[#333333]

                      sm:text-[18px]
                    "
                  >
                    {pkg.packageName}
                  </h3>

                  <div
                    className="
                      mt-[7px]
                      flex
                      flex-wrap
                      items-center
                      gap-[7px]
                    "
                  >
                    {/* CATEGORY BADGE */}

                    <div
                      className="
                        inline-flex
                        min-h-[35px]
                        w-auto
                        max-w-full
                        shrink-0
                        items-center
                        rounded-[3px]
                        bg-[#222222]
                        px-[9px]
                        py-[6px]
                        text-[13px]
                        font-medium
                        leading-none
                        text-white

                        sm:h-[37px]
                        sm:w-[142px]
                        sm:py-0
                        sm:text-[14px]
                      "
                    >
                      <FaCamera
                        className="
                          mr-[4px]
                          shrink-0
                          text-white
                        "
                        size={16}
                      />

                      <span
                        className="
                          truncate
                          text-[13px]
                          font-semibold

                          sm:text-[14px]
                        "
                      >
                        {pkg.category}
                      </span>
                    </div>

                    {/* SERVICE COUNT */}

                    <span
                      className="
                        break-words
                        text-[13px]
                        font-semibold
                        leading-[19px]
                        text-[#111111]

                        sm:text-[14px]
                        sm:leading-normal
                      "
                    >
                      {
                        pkg.serviceCount.split(
                          "Add Ons Applicable"
                        )[0]
                      }

                      <span
                        className="
                          font-semibold
                          text-red-900
                        "
                      >
                        Add Ons Applicable
                      </span>
                    </span>
                  </div>
                </div>

                {/* RIGHT ACTION ICONS */}

                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    justify-end
                    gap-[18px]
                    border-t
                    border-[#eeeeee]
                    pt-[9px]

                    sm:border-t-0
                    sm:pt-0
                    sm:gap-[14px]
                  "
                >
                  {/* EDIT */}

                  <button
                    type="button"
                    onClick={() =>
                      handleEditPackage(pkg)
                    }
                    className="
                      cursor-pointer
                      text-[#333333]
                      transition
                      hover:text-[#000000]
                    "
                    title="Edit"
                  >
                    <FiEdit
                      className="text-[18px]"
                    />
                  </button>

                  {/* DELETE */}

                  <button
                    type="button"
                    onClick={() =>
                      handleDeletePackage(
                        pkg.id
                      )
                    }
                    className="
                      cursor-pointer
                      text-[#900000]
                      transition
                      hover:text-[#c40000]
                    "
                    title="Delete"
                  >
                    <FaTrash
                      className="text-[16px]"
                    />
                  </button>

                  {/* VIEW */}

                  <button
                    type="button"
                    onClick={() => {
                      setFormData(
                        (previous) => ({
                          ...previous,
                          packageName:
                            pkg.packageName,
                          category:
                            pkg.category,
                        })
                      );

                      setShowMainForm(
                        true
                      );

                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="
                      cursor-pointer
                      text-[#333333]
                      transition
                      hover:text-[#000000]
                    "
                    title="View"
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
      </div>
    </ServicesPricingLayout>
  );
};

export default FixedPackagePage;