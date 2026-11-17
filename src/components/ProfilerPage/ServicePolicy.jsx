
import React, { useState } from "react";

const ServicePolicy = () => {
  // Toggle states
  const [enableRescheduling, setEnableRescheduling] = useState(true);
  const [bookingInAdvance, setBookingInAdvance] = useState(true);

  // Input states
  const [cancellationPolicy, setCancellationPolicy] = useState("");
  const [reschedulingDays, setReschedulingDays] = useState("3 Days");
  const [advancePercentage, setAdvancePercentage] = useState("");

  // Validation and success states
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Cancellation policy change
  const handleCancellationPolicyChange = (event) => {
    const value = event.target.value;

    if (value.length <= 500) {
      setCancellationPolicy(value);

      setErrors((prev) => ({
        ...prev,
        cancellationPolicy: "",
      }));

      setSuccessMessage("");
    }
  };

  // Advance percentage validation
  const handleAdvancePercentageChange = (event) => {
    const value = event.target.value;

    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setAdvancePercentage(value);

      setErrors((prev) => ({
        ...prev,
        advancePercentage: "",
      }));

      setSuccessMessage("");
    }
  };

  // Save policy
  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (bookingInAdvance) {
      if (!advancePercentage.trim()) {
        newErrors.advancePercentage =
          "Please enter advance percentage";
      } else if (
        Number(advancePercentage) < 1 ||
        Number(advancePercentage) > 100
      ) {
        newErrors.advancePercentage =
          "Percentage must be between 1 and 100";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSuccessMessage("");
      return;
    }

    const policyData = {
      cancellationPolicy,
      enableRescheduling,
      reschedulingDays: enableRescheduling
        ? reschedulingDays
        : null,
      bookingInAdvance,
      advancePercentage: bookingInAdvance
        ? Number(advancePercentage)
        : null,
    };

    console.log("Service Policy Details:", policyData);

    setSuccessMessage("Service policy saved successfully.");
  };

  // Clear success message while editing
  const clearSuccessMessage = () => {
    setSuccessMessage("");
  };

  // Toggle styles
  const toggleClass = (enabled) => `
    relative
    h-[18px]
    w-[28px]
    shrink-0
    cursor-pointer
    rounded-full
    transition-colors
    duration-200
    ${enabled ? "bg-[#a90000]" : "bg-[#cfcfcf]"}
  `;

  return (
    <section
      className="w-full rounded-[4px] bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* HEADER */}
      <div className="border-b border-[#e5e5e5] px-[16px] py-[9px]">
        <h2 className="text-[20px] font-semibold text-[#333]">
          SERVICE POLICY & REGULATIONS
        </h2>
      </div>

      {/* CONTENT */}
      <form
        onSubmit={handleSubmit}
        className="px-[16px] pb-[16px] pt-[9px]"
      >
        {/* CANCELLATION POLICY */}
        <div>
          <label
            htmlFor="cancellationPolicy"
            className="mb-[5px] block text-[18px] font-semibold text-[#333]"
          >
            Cancellation Policy Summary
          </label>

          <textarea
            id="cancellationPolicy"
            value={cancellationPolicy}
            onChange={handleCancellationPolicyChange}
            onFocus={clearSuccessMessage}
            maxLength={500}
            placeholder="Write your Policy, to be displayed for the clients before booking.."
            className={`
              h-[150px]
              w-full
              resize-none
              rounded-[4px]
              border
              px-[10px]
              py-[8px]
              text-[12px]
              outline-none
              placeholder:text-[#9F9F9F]
              focus:border-[#a90000]
              ${
                errors.cancellationPolicy
                  ? "border-red-500"
                  : "border-[#cfcfcf]"
              }
            `}
          />

          <div className="mt-[4px] flex justify-between">
            <span className="text-[11px] text-red-500">
              {errors.cancellationPolicy}
            </span>

            <span className="text-[11px] text-[#888]">
              {cancellationPolicy.length}/500 characters
            </span>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-[10px] border-t border-[#eeeeee]" />

        {/* RESCHEDULING */}
        <div className="flex flex-wrap items-center gap-[7px]">
          <span className="text-[18px] font-semibold text-[#333]">
            Enable Re Scheduling
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={enableRescheduling}
            aria-label="Enable rescheduling"
            onClick={() => {
              setEnableRescheduling((prev) => !prev);
              clearSuccessMessage();
            }}
            className={toggleClass(enableRescheduling)}
          >
            <span
              className={`
                absolute
                top-[3px]
                h-[12px]
                w-[12px]
                rounded-full
                bg-white
                transition-all
                duration-200
                ${
                  enableRescheduling
                    ? "right-[2px]"
                    : "left-[2px]"
                }
              `}
            />
          </button>

          <span
            className={`text-[18px] ${
              enableRescheduling
                ? "text-[#333]"
                : "text-[#999]"
            }`}
          >
            Within
          </span>

          <select
            value={reschedulingDays}
            disabled={!enableRescheduling}
            onChange={(e) => {
              setReschedulingDays(e.target.value);
              clearSuccessMessage();
            }}
            className="
              h-[25px]
              rounded-[4px]
              border
              border-[#cfcfcf]
              bg-white
              px-[7px]
              text-[12px]
              outline-none
              cursor-pointer
              disabled:cursor-not-allowed
              disabled:bg-[#f2f2f2]
              disabled:text-[#999]
            "
          >
            <option value="3 Days">3 Days</option>
            <option value="5 Days">5 Days</option>
            <option value="7 Days">7 Days</option>
          </select>

          <span
            className={`text-[18px] ${
              enableRescheduling
                ? "text-[#333]"
                : "text-[#999]"
            }`}
          >
            Of Booking
          </span>
        </div>

        {/* BOOKING IN ADVANCE */}
        <div className="mt-[10px] flex flex-wrap items-center gap-[7px]">
          <span className="text-[18px] font-semibold text-[#333]">
            Booking In Advance
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={bookingInAdvance}
            aria-label="Enable booking in advance"
            onClick={() => {
              setBookingInAdvance((prev) => !prev);
              setErrors((prev) => ({
                ...prev,
                advancePercentage: "",
              }));
              clearSuccessMessage();
            }}
            className={toggleClass(bookingInAdvance)}
          >
            <span
              className={`
                absolute
                top-[3px]
                h-[12px]
                w-[12px]
                rounded-full
                bg-white
                transition-all
                duration-200
                ${
                  bookingInAdvance
                    ? "right-[2px]"
                    : "left-[2px]"
                }
              `}
            />
          </button>

          <input
            type="text"
            inputMode="numeric"
            value={advancePercentage}
            disabled={!bookingInAdvance}
            onChange={handleAdvancePercentageChange}
            onFocus={clearSuccessMessage}
            placeholder="Enter basic Advance %"
            className={`
              h-[25px]
              w-[175px]
              rounded-[4px]
              border
              px-[8px]
              text-[12px]
              outline-none
              focus:border-[#a90000]
              disabled:cursor-not-allowed
              disabled:bg-[#f2f2f2]
              ${
                errors.advancePercentage
                  ? "border-red-500"
                  : "border-[#cfcfcf]"
              }
            `}
          />

          {bookingInAdvance && (
            <span className="text-[12px] text-[#666]">
              %
            </span>
          )}
        </div>

        {/* ADVANCE PERCENTAGE ERROR */}
        {errors.advancePercentage && (
          <p className="mt-[5px] text-[11px] text-red-500">
            {errors.advancePercentage}
          </p>
        )}

        {/* SAVE BUTTON */}
        <div className="mt-[18px] flex flex-wrap items-center gap-[12px]">
          <button
            type="submit"
            className="
              rounded-[4px]
              bg-[#a90000]
              px-[20px]
              py-[7px]
              text-[12px]
              font-medium
              text-white
              transition-colors
              hover:bg-[#870000]
            "
          >
            Save Policy
          </button>

          {successMessage && (
            <p
              role="status"
              className="text-[12px] font-medium text-green-600"
            >
              {successMessage}
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default ServicePolicy;
