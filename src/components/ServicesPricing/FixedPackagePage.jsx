import React, { useEffect, useState } from "react";

import {
  FiPlusCircle,
  FiEdit2,
  FiTrash2,
  FiChevronDown,
  FiCheckCircle,
} from "react-icons/fi";

import { FaCamera } from "react-icons/fa";

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

    if (errors[`service-${id}-${field}`]) {
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
        (service) => service.id !== id
      )
    );
  };


  /* =========================================================
     VALIDATION
  ========================================================= */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.packageName.trim()) {
      newErrors.packageName =
        "Fixed Package Name is required.";
    }

    if (!formData.category.trim()) {
      newErrors.category =
        "Category is required.";
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

    if (services.length < 2) {
      newErrors.services =
        "At least 2 services are required.";
    }

    services.forEach((service) => {
      if (!service.name.trim()) {
        newErrors[
          `service-${service.id}-name`
        ] = "Service Name is required.";
      }

      if (!service.description.trim()) {
        newErrors[
          `service-${service.id}-description`
        ] = "Description is required.";
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
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
      savedAt: new Date().toISOString(),
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

    const newPackage = {
      id: Date.now(),
      packageName:
        formData.packageName.trim(),
      category:
        formData.category.trim(),
      serviceCount: `${services.length} services, Add Ons Applicable`,
    };

    const updatedPackages = [
      ...savedPackages,
      newPackage,
    ];

    setSavedPackages(updatedPackages);

    const packageData = {
      formData,
      services,
      savedPackages: updatedPackages,
      status: "saved",
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "fixedPackageData",
      JSON.stringify(packageData)
    );

    setSaveType("success");

    setSaveMessage(
      "Package saved successfully."
    );

    /* Clear form */

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

    setTimeout(() => {
      setSaveMessage("");
    }, 3000);
  };


  /* =========================================================
     DELETE PACKAGE
  ========================================================= */

  const handleDeletePackage = (id) => {
    const updatedPackages =
      savedPackages.filter(
        (pkg) => pkg.id !== id
      );

    setSavedPackages(updatedPackages);

    try {
      const existingData =
        localStorage.getItem(
          "fixedPackageData"
        );

      const parsedData = existingData
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
     EDIT PACKAGE
  ========================================================= */

  const handleEditPackage = (pkg) => {
    setFormData((previous) => ({
      ...previous,
      packageName: pkg.packageName,
      category: pkg.category,
    }));

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
              savedPackages.length
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
          onClick={() => {
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
          }}
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

          Add Package
        </button>

      </div>


      {/* =====================================================
          TITLE
      ===================================================== */}

      <div className="mt-[15px]">

        <p
          className="
            text-[20px]
            font-medium
            text-[#777777]
          "
        >
          Fixed Package - 1
        </p>

      </div>


      {/* =====================================================
          PACKAGE FORM
      ===================================================== */}

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

          {/* PACKAGE NAME */}

          <PricingField
            label="Fixed Package Name"
            required
            labelSize="text-[18px]"
            labelClassName="font-semibold"
          >
            <input
              type="text"
              name="packageName"
              value={formData.packageName}
              onChange={handleChange}
              placeholder="Ex : All in One Trending Pack"
              className={inputClassName}
            />

            {errors.packageName && (
              <p className="mt-[4px] text-[13px] font-normal text-[#c40000]">
                {errors.packageName}
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
              placeholder="Ex : Photography"
              className={inputClassName}
            />

            {errors.category && (
              <p className="mt-[4px] text-[13px] font-normal text-[#c40000]">
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
              <p className="mt-[4px] text-[13px] font-normal text-[#c40000]">
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
                placeholder="Ex : this is the best ever package which includes all the services ..."
                className={textareaClassName}
              />

              <span
                className="
                  absolute
                  right-[8px]
                  top-[-15px]
                  text-[13px]
                  font-normal
                  text-[#555555]
                "
              >
                {formData.description.length} / 400 Characters
              </span>

            </div>

          </PricingField>


          {/* OVER TIME */}

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
              value={formData.minimumBookingHours}
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
              value={formData.advanceBookingPayment}
              onChange={handleChange}
              placeholder="Ex : 30%"
              className={inputClassName}
            />

            {errors.advanceBookingPayment && (
              <p className="mt-[4px] text-[13px] font-normal text-[#c40000]">
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
              value={formData.workDeliveryTimeline}
              onChange={handleChange}
              placeholder="Ex : Within 3 DAYS of the Event"
              className={inputClassName}
            />
          </PricingField>

        </div>


        {/* =====================================================
            SERVICES PROVIDED
        ===================================================== */}

        <div className="mt-[16px]">

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
                text-[18px]
                font-semibold
                text-[#333333]
              "
            >
              Services Provided

              <span className="text-[#d00000]">
                *
              </span>

              <span
                className="
                  ml-[4px]
                  text-[15px]
                  italic
                  text-[#737373]
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
                w-[167px]
                cursor-pointer
                items-center
                gap-[4px]
                rounded-[3px]
                border
                border-[#cfcfcf]
                px-[8px]
                text-[18px]
                font-medium
                text-[#970000]
              "
            >
              <FiPlusCircle className="text-[16px]" />

              Add Service
            </button>

          </div>


          {errors.services && (
            <p className="mt-[5px] text-[13px] text-[#c40000]">
              {errors.services}
            </p>
          )}


          <div
            className="
              mt-[7px]
              bg-[#fffcef]
              px-[12px]
              py-[10px]
            "
          >

            {services.map(
              (service, index) => (

                <div
                  key={service.id}
                  className="
                    relative
                    mb-[10px]
                    grid
                    grid-cols-1
                    gap-[10px]
                    last:mb-0
                    sm:grid-cols-[25px_1fr_1.5fr]
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
                      "
                    >

                      <label
                        className="
                          block
                          text-[18px]
                          font-semibold
                        "
                      >
                        Service Name

                        <span className="text-[#d00000]">
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
                            cursor-pointer
                            text-[#c40000]
                          "
                          title="Remove Service"
                        >
                          <FiTrash2 className="text-[18px]" />
                        </button>
                      )}

                    </div>


                    <input
                      type="text"
                      value={service.name}
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
                      `}
                    />


                    {errors[
                      `service-${service.id}-name`
                    ] && (
                      <p className="mt-[4px] text-[13px] font-normal text-[#c40000]">
                        {
                          errors[
                            `service-${service.id}-name`
                          ]
                        }
                      </p>
                    )}

                  </div>


                  {/* DESCRIPTION */}

                  <div>

                    <div
                      className="
                        flex
                        justify-between
                      "
                    >

                      <label
                        className="
                          text-[18px]
                          font-semibold
                        "
                      >
                        Description

                        <span className="text-[#d00000]">
                          *
                        </span>
                      </label>


                      <span
                        className="
                          text-[14px]
                          text-[#737373]
                        "
                      >
                        {service.description.length} / 200 Characters
                      </span>

                    </div>


                    <input
                      type="text"
                      maxLength={200}
                      value={service.description}
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
                      `}
                    />


                    {errors[
                      `service-${service.id}-description`
                    ] && (
                      <p className="mt-[4px] text-[13px] font-normal text-[#c40000]">
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


        {/* =====================================================
            BUTTONS
        ===================================================== */}

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
              transition
              hover:text-[#970000]
            "
          >
            Save Draft
          </button>


          <button
            type="button"
            onClick={handleSavePackage}
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
              transition
              hover:bg-[#222222]
            "
          >
            Save Package
          </button>

        </div>

      </section>


      {/* =====================================================
          SAVED FIXED PACKAGES
          SAME STYLE AS SPECIFIC SERVICE
      ===================================================== */}

      <div
        className="
          mt-[12px]
          space-y-[8px]
        "
      >

        {savedPackages.map((pkg) => (

          <div
            key={pkg.id}
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

            {/* LEFT CONTENT */}

            <div>

              <h3
                className="
                  text-[18px]
                  font-semibold
                  text-[#333333]
                "
              >
                {pkg.packageName}
              </h3>


              {/* CATEGORY + PACKAGE INFO */}

              <div
                className="
                  mt-[5px]
                  flex
                  items-center
                  gap-[7px]
                "
              >

                {/* BLACK PHOTOGRAPHY BADGE */}

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

                  {pkg.category}
                  </span>

                </div>


                {/* SERVICE COUNT */}

                <span
                  className="
                    text-[14px]
                    font-semibold
                    text-[#111111]
                  "
                >
                  {pkg.serviceCount}
                </span>

              </div>

            </div>


            {/* RIGHT ICONS */}

            <div
              className="
                flex
                items-center
                gap-[14px]
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
                "
                title="Edit"
              >
                <FiEdit2 className="text-[18px]" />
              </button>


              {/* DELETE */}

              <button
                type="button"
                onClick={() =>
                  handleDeletePackage(pkg.id)
                }
                className="
                  cursor-pointer
                  text-[#900000]
                "
                title="Delete"
              >
                <FiTrash2 className="text-[18px]" />
              </button>


              {/* EXPAND */}

              <button
                type="button"
                className="
                  cursor-pointer
                  text-[#333333]
                "
                title="Expand"
              >
                <FiChevronDown className="text-[18px]" />
              </button>

            </div>

          </div>

        ))}

      </div>

    </ServicesPricingLayout>
  );
};


export default FixedPackagePage;