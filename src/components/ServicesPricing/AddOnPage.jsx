import React, { useState } from "react";

import {
  FiPlusCircle,
  FiEdit,
  FiChevronDown,
  FiUploadCloud,
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

const AddOnPage = () => {
  /* =========================================================
     EMPTY FORM
  ========================================================= */

  const emptyFormData = {
    addOnName: "",
    category: "",
    chargeType: "Amount Per Event",
    totalPrice: "",
    description: "",
    previewImage: null,
    applicability: "To all Services & Packages",
  };

  /* =========================================================
     FORM STATE
  ========================================================= */

  const [formData, setFormData] = useState({
    ...emptyFormData,
  });

  /* =========================================================
     SAVED ADD ONS
  ========================================================= */

  const [savedAddOns, setSavedAddOns] = useState([
    {
      id: 1,
      addOnName: "Neon Lighting Service",
      category: "Photography",
      description:
        "Lighting, Applicable To All Services and Packages",
      chargeType: "Amount Per Event",
      totalPrice: "5,000/- INR",
      applicability:
        "To all Services & Packages",
    },

    {
      id: 2,
      addOnName:
        "Cinematic Reel Shots Recording for Social Media Presence",
      category: "Videography",
      description:
        "Cinematic videography, Applicable To Packages",
      chargeType: "Amount Per Event",
      totalPrice: "8,000/- INR",
      applicability:
        "Specific Packages",
    },
  ]);

  /* =========================================================
     MESSAGE / VALIDATION
  ========================================================= */

  const [saveMessage, setSaveMessage] =
    useState("");

  const [saveType, setSaveType] =
    useState("");

  const [errors, setErrors] =
    useState({});

  /* =========================================================
     FORM VISIBILITY
  ========================================================= */

  const [showMainForm, setShowMainForm] =
    useState(true);

  /* =========================================================
     HANDLE INPUT
  ========================================================= */

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

  /* =========================================================
     IMAGE UPLOAD
  ========================================================= */

  const handleImageChange = (event) => {
    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }

    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      setSaveType("error");

      setSaveMessage(
        "Please upload a PNG, JPG, or WEBP image."
      );

      return;
    }

    if (
      file.size >
      2 * 1024 * 1024
    ) {
      setSaveType("error");

      setSaveMessage(
        "Image size must be less than 2MB."
      );

      return;
    }

    setFormData((previous) => ({
      ...previous,
      previewImage: file,
    }));

    setSaveMessage("");
    setSaveType("");
  };

  /* =========================================================
     VALIDATION
  ========================================================= */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.addOnName.trim()) {
      newErrors.addOnName =
        "Add on Name is required.";
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
      !formData.applicability.trim()
    ) {
      newErrors.applicability =
        "Applicability is required.";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  /* =========================================================
     SAVE DRAFT
  ========================================================= */

  const handleSaveDraft = () => {
    const draftData = {
      ...formData,

      previewImage:
        formData.previewImage
          ? formData.previewImage.name
          : null,

      status: "draft",

      savedAt:
        new Date().toISOString(),
    };

    localStorage.setItem(
      "addOnDraft",
      JSON.stringify(draftData)
    );

    setSaveType("success");

    setSaveMessage(
      "Draft saved successfully."
    );

    setTimeout(() => {
      setSaveMessage("");
    }, 3000);
  };

  /* =========================================================
     SAVE ADD ON
  ========================================================= */

  const handleSaveAddOn = () => {
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

    const newAddOn = {
      id: Date.now(),

      addOnName:
        formData.addOnName.trim(),

      category:
        formData.category.trim(),

      description:
        formData.description.trim() ||
        `${formData.chargeType}, ${formData.applicability}`,

      chargeType:
        formData.chargeType,

      totalPrice:
        formData.totalPrice,

      applicability:
        formData.applicability,
    };

    const updatedAddOns = [
      ...savedAddOns,
      newAddOn,
    ];

    setSavedAddOns(
      updatedAddOns
    );

    /* =======================================================
       SAVE TO LOCAL STORAGE
    ======================================================= */

    const existingAddOns =
      JSON.parse(
        localStorage.getItem(
          "specificAddOns"
        ) || "[]"
      );

    localStorage.setItem(
      "specificAddOns",
      JSON.stringify([
        ...existingAddOns,

        {
          ...formData,

          id: newAddOn.id,

          previewImage:
            formData.previewImage
              ? formData.previewImage.name
              : null,

          status: "saved",

          savedAt:
            new Date().toISOString(),
        },
      ])
    );

    setSaveType("success");

    setSaveMessage(
      "Add On saved successfully."
    );

    /* =======================================================
       RESET FORM
    ======================================================= */

    setFormData({
      ...emptyFormData,
    });

    setErrors({});

    setTimeout(() => {
      setSaveMessage("");
    }, 3000);
  };

  /* =========================================================
     DELETE ADD ON
  ========================================================= */

  const handleDeleteAddOn = (
    id
  ) => {
    const updatedAddOns =
      savedAddOns.filter(
        (addOn) =>
          addOn.id !== id
      );

    setSavedAddOns(
      updatedAddOns
    );

    const existingAddOns =
      JSON.parse(
        localStorage.getItem(
          "specificAddOns"
        ) || "[]"
      );

    const updatedLocalStorageAddOns =
      existingAddOns.filter(
        (addOn) =>
          addOn.id !== id
      );

    localStorage.setItem(
      "specificAddOns",
      JSON.stringify(
        updatedLocalStorageAddOns
      )
    );
  };

  /* =========================================================
     EDIT ADD ON
  ========================================================= */

  const handleEditAddOn = (
    addOn
  ) => {
    setFormData({
      addOnName:
        addOn.addOnName || "",

      category:
        addOn.category || "",

      chargeType:
        addOn.chargeType ||
        "Amount Per Event",

      totalPrice:
        addOn.totalPrice || "",

      description:
        addOn.description || "",

      previewImage: null,

      applicability:
        addOn.applicability ||
        "To all Services & Packages",
    });

    setErrors({});

    setShowMainForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     VIEW ADD ON
  ========================================================= */

  const handleViewAddOn = (
    addOn
  ) => {
    setFormData({
      addOnName:
        addOn.addOnName || "",

      category:
        addOn.category || "",

      chargeType:
        addOn.chargeType ||
        "Amount Per Event",

      totalPrice:
        addOn.totalPrice || "",

      description:
        addOn.description || "",

      previewImage: null,

      applicability:
        addOn.applicability ||
        "To all Services & Packages",
    });

    setErrors({});

    setShowMainForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     NEW ADD ON
  ========================================================= */

  const handleNewAddOn = () => {
    setFormData({
      ...emptyFormData,
    });

    setErrors({});

    setSaveMessage("");
    setSaveType("");

    setShowMainForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     TOP EDIT
  ========================================================= */

  const handleTopEdit = () => {
    setShowMainForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     TOP DELETE
  ========================================================= */

  const handleTopDelete = () => {
    const shouldDelete =
      window.confirm(
        "Are you sure you want to clear this Add On?"
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

  /* =========================================================
     TOP VIEW / HIDE
  ========================================================= */

  const handleTopView = () => {
    setShowMainForm(
      (previous) => !previous
    );
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <ServicesPricingLayout
      activeModel="addons"
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
            <FiCheckCircle
              className="text-[20px]"
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
            w-full
            items-center
            gap-[10px]
            sm:w-auto
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
              savedAddOns.length
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
            NEW ADD ON
        ================================================= */}

        <button
          type="button"
          onClick={
            handleNewAddOn
          }
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

          New Add on
        </button>
      </div>

      {/* =====================================================
          ADD ON - 1 WHITE CARD
      ===================================================== */}

      <section
        className="
          mt-[15px]
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
            px-[12px]
            sm:px-[10px]
          "
        >
          <p
            className="
              text-[20px]
              font-medium
              text-[#777777]
            "
          >
            Add On - 1
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
            px-[16px]
            sm:px-[30px]
            md:px-[34px]
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
              onClick={
                handleTopEdit
              }
              title="Edit"
              aria-label="Edit Add On"
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
              onClick={
                handleTopDelete
              }
              title="Delete"
              aria-label="Delete Add On"
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
              onClick={
                handleTopView
              }
              title={
                showMainForm
                  ? "Hide"
                  : "View"
              }
              aria-label={
                showMainForm
                  ? "Hide Add On"
                  : "View Add On"
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
            ADD ON FORM
        ================================================= */}

        {showMainForm && (
          <div
            className="
              px-[16px]
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
              {/* =================================================
                  ADD ON NAME
              ================================================= */}

              <PricingField
                label="Add on Name"
                required
                labelSize="text-[18px]"
                labelClassName="font-semibold"
              >
                <input
                  type="text"
                  name="addOnName"
                  value={
                    formData.addOnName
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Ex : Drone Service - Photos and Video Clips"
                  className={
                    inputClassName
                  }
                />

                {errors.addOnName && (
                  <p
                    className="
                      mt-[4px]
                      text-[13px]
                      font-normal
                      text-[#c40000]
                    "
                  >
                    {
                      errors.addOnName
                    }
                  </p>
                )}
              </PricingField>

              {/* =================================================
                  CATEGORY
              ================================================= */}

              <PricingField
                label="Category"
                required
                labelSize="text-[18px]"
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
                  placeholder="Photography"
                  className={
                    inputClassName
                  }
                />

                {errors.category && (
                  <p
                    className="
                      mt-[4px]
                      text-[13px]
                      font-normal
                      text-[#c40000]
                    "
                  >
                    {
                      errors.category
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
                labelSize="text-[18px]"
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

              {/* =================================================
                  TOTAL PRICE
              ================================================= */}

              <PricingField
                label="Total Price"
                required
                labelSize="text-[18px]"
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
                      text-[13px]
                      font-normal
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
                labelSize="text-[18px]"
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
                      right-[8px]
                      top-[-15px]
                      text-[13px]
                      font-normal
                      text-[#555555]
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
                  PREVIEW IMAGE
              ================================================= */}

              <PricingField
                label="Preview Image"
                labelSize="text-[18px]"
                labelClassName="font-semibold"
              >
                <label
                  className="
                    flex
                    h-[115px]
                    w-full
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    rounded-[4px]
                    border
                    border-dashed
                    border-[#cfcfcf]
                    bg-white
                    px-[10px]
                    text-center
                    transition
                    hover:border-[#c40000]
                    hover:bg-[#fffafa]
                  "
                >
                  <FiUploadCloud
                    className="
                      text-[25px]
                      text-[#e00000]
                    "
                  />

                  <p
                    className="
                      mt-[5px]
                      max-w-full
                      truncate
                      text-[14px]
                      font-normal
                      text-[#555555]
                    "
                  >
                    {formData.previewImage
                      ? formData
                          .previewImage
                          .name
                      : "Click to upload, OR drag and drop"}
                  </p>

                  <p
                    className="
                      mt-[2px]
                      text-[12px]
                      font-normal
                      text-[#999999]
                    "
                  >
                    (PNG, JPG, WEBP Max 2MB)
                  </p>

                  <input
                    type="file"
                    accept=".png,.jpg,.jpeg,.webp"
                    onChange={
                      handleImageChange
                    }
                    className="hidden"
                  />
                </label>
              </PricingField>

              {/* =================================================
                  APPLICABILITY
              ================================================= */}

              <PricingField
                label="Applicability"
                required
                labelSize="text-[18px]"
                labelClassName="font-semibold"
              >
                <select
                  name="applicability"
                  value={
                    formData.applicability
                  }
                  onChange={
                    handleChange
                  }
                  className={
                    selectClassName
                  }
                >
                  <option>
                    To all Services & Packages
                  </option>

                  <option>
                    Specific Services
                  </option>

                  <option>
                    Specific Packages
                  </option>
                </select>

                {errors.applicability && (
                  <p
                    className="
                      mt-[4px]
                      text-[13px]
                      font-normal
                      text-[#c40000]
                    "
                  >
                    {
                      errors.applicability
                    }
                  </p>
                )}
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
                items-stretch
                justify-end
                gap-[12px]
                sm:flex-row
                sm:items-center
              "
            >
              <button
                type="button"
                onClick={
                  handleSaveDraft
                }
                className="
                  cursor-pointer
                  text-center
                  text-[18px]
                  font-semibold
                  text-[#c40000]
                  transition
                  hover:text-[#970000]
                  sm:w-auto
                "
              >
                Save Draft
              </button>

              <button
                type="button"
                onClick={
                  handleSaveAddOn
                }
                className="
                  h-[42px]
                  w-full
                  cursor-pointer
                  rounded-[4px]
                  bg-[#333333]
                  px-[18px]
                  text-[18px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#222222]
                  sm:h-[32px]
                  sm:w-[180px]
                "
              >
                Save Add On
              </button>
            </div>
          </div>
        )}
      </section>

      {/* =====================================================
          SAVED ADD ONS
      ===================================================== */}

      <div
        className="
          mt-[12px]
          space-y-[8px]
        "
      >
        {savedAddOns.map(
          (addOn) => (
            <div
              key={addOn.id}
              className="
                flex
                flex-col
                gap-[12px]
                rounded-[5px]
                bg-white
                px-[14px]
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

              <div
                className="
                  min-w-0
                  w-full
                "
              >
                <h3
                  className="
                    break-words
                    text-[18px]
                    font-semibold
                    text-[#333333]
                  "
                >
                  {
                    addOn.addOnName
                  }
                </h3>

                {/* =================================================
                    CATEGORY + DESCRIPTION
                ================================================= */}

                <div
                  className="
                    mt-[6px]
                    flex
                    min-w-0
                    flex-col
                    items-stretch
                    gap-[7px]
                    sm:flex-row
                    sm:items-center
                  "
                >
                  {/* CAMERA BADGE */}

                  <div
                    className="
                      inline-flex
                      h-[37px]
                      w-full
                      shrink-0
                      items-center
                      rounded-[3px]
                      bg-[#222222]
                      px-[9px]
                      text-[14px]
                      font-medium
                      leading-none
                      text-white
                      sm:w-[142px]
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
                        addOn.category
                      }
                    </span>
                  </div>

                  {/* DESCRIPTION */}

                  <span
                    className="
                      min-w-0
                      break-words
                      text-[14px]
                      font-normal
                      leading-[20px]
                      text-[#777777]
                    "
                  >
                    {addOn.description.includes(
                      "Applicable To All Services and Packages"
                    ) ? (
                      <>
                        {
                          addOn.description.split(
                            "Applicable To All Services and Packages"
                          )[0]
                        }

                        <span
                          className="
                            font-semibold
                            text-red-900
                          "
                        >
                          Applicable To All Services and Packages
                        </span>

                        {
                          addOn.description.split(
                            "Applicable To All Services and Packages"
                          )[1]
                        }
                      </>
                    ) : addOn.description.includes(
                        "Applicable To Packages"
                      ) ? (
                      <>
                        {
                          addOn.description.split(
                            "Applicable To Packages"
                          )[0]
                        }

                        <span
                          className="
                            font-semibold
                            text-red-900
                          "
                        >
                          Applicable To Packages
                        </span>

                        {
                          addOn.description.split(
                            "Applicable To Packages"
                          )[1]
                        }
                      </>
                    ) : (
                      addOn.description
                    )}
                  </span>
                </div>
              </div>

              {/* =================================================
                  RIGHT ACTION ICONS
              ================================================= */}

              <div
                className="
                  flex
                  w-full
                  shrink-0
                  items-center
                  justify-end
                  gap-[18px]
                  border-t
                  border-[#eeeeee]
                  pt-[10px]
                  sm:ml-[15px]
                  sm:w-auto
                  sm:justify-start
                  sm:border-t-0
                  sm:pt-0
                "
              >
                {/* EDIT */}

                <button
                  type="button"
                  onClick={() =>
                    handleEditAddOn(
                      addOn
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
                  aria-label="Edit Add On"
                >
                  <FiEdit
                    className="text-[18px]"
                  />
                </button>

                {/* DELETE */}

                <button
                  type="button"
                  onClick={() =>
                    handleDeleteAddOn(
                      addOn.id
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
                  aria-label="Delete Add On"
                >
                  <FaTrash
                    className="text-[16px]"
                  />
                </button>

                {/* VIEW */}

                <button
                  type="button"
                  onClick={() =>
                    handleViewAddOn(
                      addOn
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
                  aria-label="View Add On"
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

export default AddOnPage;