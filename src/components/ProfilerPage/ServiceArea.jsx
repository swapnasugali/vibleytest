import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

const ServiceArea = () => {
  const [baseLocation, setBaseLocation] = useState("");
  const [locations, setLocations] = useState([
    "Telangana",
    "Andhra Pradesh",
    "Karnataka",
    "Tamil Nadu",
  ]);

  const [newLocation, setNewLocation] = useState("");
  const [showLocationInput, setShowLocationInput] = useState(false);

  const [fromTime, setFromTime] = useState("10:00am");
  const [toTime, setToTime] = useState("10:00pm");

  const [availableDays, setAvailableDays] = useState(["All Days"]);
  const [showDaysDropdown, setShowDaysDropdown] = useState(false);

  const [errors, setErrors] = useState({});

  const days = [
    "All Days",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const errorClass = "mt-[4px] text-[12px] text-red-600";

  const inputClass =
    "h-[30px] w-full rounded-[4px] border border-[#cfcfcf] px-[10px] text-[12px] outline-none placeholder:text-[#777] focus:border-[#970000]";

  // Base location validation
  const handleBaseLocationChange = (event) => {
    const value = event.target.value;
    setBaseLocation(value);

    let message = "";

    if (!value.trim()) {
      message = "Base area location is required.";
    } else if (value.trim().length < 3) {
      message = "Enter at least 3 characters.";
    } else if (value.trim().length > 100) {
      message = "Maximum 100 characters allowed.";
    }

    setErrors((prev) => ({
      ...prev,
      baseLocation: message,
    }));
  };

  // Add serviceable location
  const handleAddLocation = () => {
    const location = newLocation.trim();

    if (!location) {
      setErrors((prev) => ({
        ...prev,
        newLocation: "Please enter a location.",
      }));
      return;
    }

    if (!/^[\p{L}\s,.-]+$/u.test(location)) {
      setErrors((prev) => ({
        ...prev,
        newLocation: "Enter a valid location name.",
      }));
      return;
    }

    if (location.length > 50) {
      setErrors((prev) => ({
        ...prev,
        newLocation: "Maximum 50 characters allowed.",
      }));
      return;
    }

    if (
      locations.some(
        (item) => item.toLowerCase() === location.toLowerCase()
      )
    ) {
      setErrors((prev) => ({
        ...prev,
        newLocation: "This location already exists.",
      }));
      return;
    }

    if (locations.length >= 10) {
      setErrors((prev) => ({
        ...prev,
        newLocation: "Maximum 10 locations allowed.",
      }));
      return;
    }

    setLocations((prev) => [...prev, location]);
    setNewLocation("");
    setShowLocationInput(false);

    setErrors((prev) => ({
      ...prev,
      newLocation: "",
      locations: "",
    }));
  };

  // Remove serviceable location
  const handleRemoveLocation = (locationToRemove) => {
    setLocations((prev) =>
      prev.filter((location) => location !== locationToRemove)
    );

    setErrors((prev) => ({
      ...prev,
      locations: "",
    }));
  };

  // Update operation timings without validation
  const handleTimeChange = (field, value) => {
    if (field === "from") {
      setFromTime(value);
    } else {
      setToTime(value);
    }
  };

  // Select availability days
  const handleDayChange = (day) => {
    setAvailableDays((prev) => {
      if (day === "All Days") {
        return ["All Days"];
      }

      const selectedDays = prev.filter(
        (item) => item !== "All Days"
      );

      if (selectedDays.includes(day)) {
        return selectedDays.filter((item) => item !== day);
      }

      const updatedDays = [...selectedDays, day];

      return updatedDays.length === 7
        ? ["All Days"]
        : updatedDays;
    });

    setErrors((prev) => ({
      ...prev,
      availableDays: "",
    }));
  };

  // Submit: no operation timing validation
  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!baseLocation.trim()) {
      nextErrors.baseLocation = "Base area location is required.";
    } else if (baseLocation.trim().length < 3) {
      nextErrors.baseLocation = "Enter at least 3 characters.";
    } else if (baseLocation.trim().length > 100) {
      nextErrors.baseLocation = "Maximum 100 characters allowed.";
    }

    if (locations.length === 0) {
      nextErrors.locations =
        "Add at least one serviceable location.";
    }

    if (availableDays.length === 0) {
      nextErrors.availableDays =
        "Select at least one available day.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      console.log("Service Area Details:", {
        baseLocation: baseLocation.trim(),
        serviceableLocations: locations,
        operationTimings: {
          from: fromTime,
          to: toTime,
        },
        availableDays,
      });
    }
  };

  return (
    <section
      className="w-full rounded-[4px] bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* HEADER */}
      <div className="border-b border-[#e5e5e5] px-[16px] py-[9px]">
        <h2 className="text-[20px] font-semibold text-[#333]">
          SERVICE AREA / OPERATIONS
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="px-[16px] pb-[14px] pt-[9px]"
      >
        {/* BASE LOCATION */}
        <div>
          <label className="mb-[5px] block text-[18px] font-semibold text-[#2E2E2E]">
            Base Area Location
          </label>

          <input
            type="text"
            value={baseLocation}
            onChange={handleBaseLocationChange}
            maxLength={100}
            placeholder="Kondapur, Hyderabad"
            className={inputClass}
          />

          {errors.baseLocation && (
            <p className={errorClass}>{errors.baseLocation}</p>
          )}
        </div>

        {/* SERVICEABLE LOCATIONS */}
        <div className="mt-[10px]">
          <label className="mb-[6px] block text-[18px] font-semibold text-[#2E2E2E]">
            Serviceable Locations
          </label>

          <div className="flex flex-wrap items-center gap-[6px]">
            {locations.map((location) => (
              <span
                key={location}
                className="inline-flex items-center gap-[7px] rounded-[3px] bg-[#F3F4F6] px-[10px] py-[4px] text-[16px] text-[#4B5563]"
              >
                {location}

                <button
                  type="button"
                  onClick={() => handleRemoveLocation(location)}
                  aria-label={`Remove ${location}`}
                  className="cursor-pointer text-[16px] text-[#777] hover:text-red-600"
                >
                  ×
                </button>
              </span>
            ))}

            {locations.length < 10 && !showLocationInput && (
              <button
                type="button"
                onClick={() => {
                  setShowLocationInput(true);
                  setErrors((prev) => ({
                    ...prev,
                    newLocation: "",
                  }));
                }}
                aria-label="Add location"
                className="flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full border border-[#555]"
              >
                <FiPlus className="text-[11px]" />
              </button>
            )}
          </div>

          {showLocationInput && (
            <div className="mt-[8px] flex flex-wrap items-start gap-[6px]">
              <div>
                <input
                  type="text"
                  value={newLocation}
                  onChange={(event) => {
                    setNewLocation(event.target.value);
                    setErrors((prev) => ({
                      ...prev,
                      newLocation: "",
                    }));
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      handleAddLocation();
                    }

                    if (event.key === "Escape") {
                      setShowLocationInput(false);
                      setNewLocation("");
                      setErrors((prev) => ({
                        ...prev,
                        newLocation: "",
                      }));
                    }
                  }}
                  maxLength={50}
                  placeholder="Enter location"
                  className="h-[30px] w-[200px] rounded-[4px] border border-[#cfcfcf] px-[8px] text-[12px] outline-none focus:border-[#970000]"
                />

                {errors.newLocation && (
                  <p className={errorClass}>
                    {errors.newLocation}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={handleAddLocation}
                className="rounded-[4px] bg-[#970000] px-[10px] py-[7px] text-[12px] text-white"
              >
                Add
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowLocationInput(false);
                  setNewLocation("");
                  setErrors((prev) => ({
                    ...prev,
                    newLocation: "",
                  }));
                }}
                className="rounded-[4px] border border-[#ccc] px-[10px] py-[7px] text-[12px]"
              >
                Cancel
              </button>
            </div>
          )}

          {errors.locations && (
            <p className={errorClass}>{errors.locations}</p>
          )}

          <p className="mt-[4px] text-[11px] text-[#777]">
            {locations.length}/10 locations added
          </p>
        </div>

        {/* TIMINGS + AVAILABILITY */}
        <div className="mt-[12px] grid grid-cols-1 gap-[12px] sm:grid-cols-2">
          {/* OPERATION TIMINGS */}
          <div>
            <label className="mb-[6px] block text-[18px] font-semibold text-[#333]">
              Operation Timings
            </label>

            <div className="flex flex-wrap items-center gap-[5px]">
              <span className="text-[16px] text-[#2E2E2E]">
                From
              </span>

              <input
                type="text"
                value={fromTime}
                onChange={(event) =>
                  handleTimeChange("from", event.target.value)
                }
                placeholder="10:00am"
                className="h-[30px] w-[85px] rounded-[4px] border border-[#cfcfcf] px-[7px] text-[12px] outline-none focus:border-[#970000]"
              />

              <span className="text-[16px] text-[#2E2E2E]">
                To
              </span>

              <input
                type="text"
                value={toTime}
                onChange={(event) =>
                  handleTimeChange("to", event.target.value)
                }
                placeholder="10:00pm"
                className="h-[30px] w-[85px] rounded-[4px] border border-[#cfcfcf] px-[7px] text-[12px] outline-none focus:border-[#970000]"
              />
            </div>
          </div>

          {/* AVAILABILITY DROPDOWN */}
          <div className="relative">
            <label className="mb-[6px] block text-[18px] font-semibold text-[#333]">
              Availability
            </label>

            <button
              type="button"
              onClick={() =>
                setShowDaysDropdown((prev) => !prev)
              }
              aria-expanded={showDaysDropdown}
              className="flex h-[30px] w-full items-center justify-between rounded-[4px] border border-[#cfcfcf] bg-white px-[10px] text-left text-[12px] text-[#777] outline-none"
            >
              <span className="truncate">
                {availableDays.includes("All Days")
                  ? "Monday to Sunday ( All Days )"
                  : availableDays.length > 0
                  ? availableDays.join(", ")
                  : "Select available days"}
              </span>

              <span className="ml-[8px] text-[10px]">▼</span>
            </button>

            {showDaysDropdown && (
              <div className="absolute z-20 mt-[4px] max-h-[200px] w-full overflow-y-auto rounded-[4px] border border-[#cfcfcf] bg-white p-[8px] shadow-md">
                {days.map((day) => (
                  <label
                    key={day}
                    className="flex cursor-pointer items-center gap-[8px] rounded-[3px] px-[6px] py-[7px] text-[12px] text-[#444] hover:bg-[#F3F4F6]"
                  >
                    <input
                      type="checkbox"
                      checked={
                        day === "All Days"
                          ? availableDays.includes("All Days")
                          : availableDays.includes("All Days") ||
                            availableDays.includes(day)
                      }
                      onChange={() => handleDayChange(day)}
                      className="accent-[#970000]"
                    />
                    {day}
                  </label>
                ))}
              </div>
            )}

            {errors.availableDays && (
              <p className={errorClass}>
                {errors.availableDays}
              </p>
            )}
          </div>
        </div>

        {/* SAVE BUTTON */}
        <div className="mt-[16px]">
          <button
            type="submit"
            className="cursor-pointer rounded-[4px] bg-[#970000] px-[20px] py-[9px] text-[13px] font-medium text-white hover:bg-[#790000]"
          >
            Save Service Area
          </button>
        </div>
      </form>
    </section>
  );
};

export default ServiceArea;