import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

/* =========================================================
   FEATURED PROVIDER DATA
========================================================= */

const STORAGE_KEY = "vibleyFeaturedProviders";
const UPDATE_EVENT = "vibleyFeaturedProvidersUpdated";

const DEFAULT_PROVIDERS = [
  {
    category: "Photography",
    name: "ARTLANE STUDIO",
    location: "Kondapalli, Hyderabad",
    image:
      "https://res.cloudinary.com/porwmjke/image/upload/v1791787040/provider1.png",
    offer: "STARTING FROM ₹25,000",
    portfolioPath: "/portfolio/photography/photo001",
  },
  {
    category: "Catering",
    name: "MANGALAM CATERERS",
    location: "Kukatpally, Hyderabad",
    image:
      "https://res.cloudinary.com/porwmjke/image/upload/v1791787063/provider2.png",
    offer: "BEST PRICES PER PLATE",
    portfolioPath: "/portfolio/catering/catering001",
  },
  {
    category: "Lighting",
    name: "ELITE LIGHTING SERVICES",
    location: "Madhapur, Hyderabad",
    image:
      "https://res.cloudinary.com/porwmjke/image/upload/v1791787098/provider3.png",
    offer: "COMBO WITH DJ SERVICES",
    portfolioPath: "/portfolio/lighting/lighting001",
  },
];

/* Remove duplicate provider entries */

const removeDuplicateProviders = (providers) => {
  if (!Array.isArray(providers)) return DEFAULT_PROVIDERS;

  const uniqueProviders = [];
  const seen = new Set();

  providers.forEach((provider) => {
    if (!provider || typeof provider !== "object") return;

    const key = `${provider.category || ""}-${provider.name || ""}-${
      provider.portfolioPath || ""
    }`.toLowerCase();

    if (!seen.has(key)) {
      seen.add(key);
      uniqueProviders.push(provider);
    }
  });

  return uniqueProviders.length > 0
    ? uniqueProviders
    : DEFAULT_PROVIDERS;
};

/* Read providers from localStorage */

const getStoredProviders = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return DEFAULT_PROVIDERS;

    return removeDuplicateProviders(JSON.parse(saved));
  } catch (error) {
    console.error("Unable to read provider details:", error);
    return DEFAULT_PROVIDERS;
  }
};

/* =========================================================
   1. PROFILE ICON
========================================================= */

const ProfileIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="13" r="8" stroke="#FFB000" strokeWidth="2.5" />
    <path
      d="M10 37C10 31.477 14.477 27 20 27H28C33.523 27 38 31.477 38 37V38C38 39.105 37.105 40 36 40H12C10.895 40 10 39.105 10 38V37Z"
      stroke="#FFB000"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

/* =========================================================
   2. CONVERSION RATE ICON
========================================================= */

const ConversionIcon = () => (
  <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
    <path
      d="M8 43L25 26L35 36L53 16"
      stroke="#FFB000"
      strokeWidth="5"
      strokeLinecap="square"
    />
    <path
      d="M25 3L28 11L36 14L28 17L25 25L22 17L14 14L22 11L25 3Z"
      fill="#FFB000"
    />
    <path
      d="M10 19L12 25L18 27L12 29L10 35L8 29L2 27L8 25L10 19Z"
      fill="#FFB000"
    />
    <path
      d="M39 8L42 15L49 18L42 21L39 28L36 21L29 18L36 15L39 8Z"
      fill="#FFB000"
    />
  </svg>
);

/* =========================================================
   3. THUMBNAIL BADGE ICON
========================================================= */

const ThumbnailBadgeIcon = () => (
  <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
    <rect
      x="5"
      y="7"
      width="48"
      height="36"
      rx="5"
      stroke="#FFB000"
      strokeWidth="4"
    />
    <circle cx="11" cy="51" r="2.5" fill="#FFB000" />
    <circle cx="23" cy="51" r="2.5" fill="#FFB000" />
    <circle cx="35" cy="51" r="2.5" fill="#FFB000" />
    <circle cx="47" cy="51" r="2.5" fill="#FFB000" />
  </svg>
);

/* =========================================================
   4. THUMBNAIL BADGE INFO AND EDIT POPUP
========================================================= */

const ThumbnailBadgePopup = ({ providers, onClose, onSave }) => {
  const [activeTab, setActiveTab] = useState("info");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [editedProvider, setEditedProvider] = useState({
    ...(providers[0] || DEFAULT_PROVIDERS[0]),
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const selectedProvider = providers[selectedIndex] || providers[0];

  /* Close popup when Escape key is pressed */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  /* Change selected provider */

  const handleProviderChange = (event) => {
    const index = Number(event.target.value);
    const provider = providers[index];

    if (!provider) return;

    setSelectedIndex(index);
    setEditedProvider({ ...provider });
    setError("");
    setSuccess("");
  };

  /* Update input fields */

  const handleFieldChange = (field, value) => {
    setEditedProvider((previous) => ({
      ...previous,
      [field]: value,
    }));

    setError("");
    setSuccess("");
  };

  /* Open Info tab */

  const handleInfoTab = () => {
    setActiveTab("info");
    setEditedProvider({ ...selectedProvider });
    setError("");
    setSuccess("");
  };

  /* Open Edit tab */

  const handleEditTab = () => {
    setActiveTab("edit");
    setEditedProvider({ ...selectedProvider });
    setError("");
    setSuccess("");
  };

  /* Cancel editing */

  const handleCancel = () => {
    setEditedProvider({ ...selectedProvider });
    setActiveTab("info");
    setError("");
    setSuccess("");
  };

  /* Save provider details */

  const handleSave = () => {
    const updatedProvider = {
      ...editedProvider,
      category: editedProvider.category.trim(),
      name: editedProvider.name.trim(),
      location: editedProvider.location.trim(),
      offer: editedProvider.offer.trim(),
    };

    if (
      !updatedProvider.category ||
      !updatedProvider.name ||
      !updatedProvider.location ||
      !updatedProvider.offer
    ) {
      setError("Please fill in all provider details.");
      setSuccess("");
      return;
    }

    const saved = onSave(selectedIndex, updatedProvider);

    if (saved) {
      setEditedProvider(updatedProvider);
      setSuccess("Provider details updated successfully.");
      setError("");
      setActiveTab("info");
    } else {
      setError("Unable to save details. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-[708px] overflow-y-auto rounded-[14px] bg-white shadow-xl"
        style={{ fontFamily: "Poppins, sans-serif" }}
        onClick={(event) => event.stopPropagation()}
      >
        {/* HEADER */}

        <div className="sticky top-0 z-20 flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-5 sm:px-[25px]">
          <h2 className="text-[15px] font-semibold uppercase tracking-[0.3px] text-[#222222] sm:text-[16px]">
            Featured Provider Details
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close popup"
            className="flex h-[35px] w-[35px] shrink-0 cursor-pointer items-center justify-center rounded-full border-[3px] border-[#B00000] text-[#B00000] transition hover:bg-[#B00000] hover:text-white"
          >
            <FaTimes />
          </button>
        </div>

        <div className="px-4 pb-6 pt-5 sm:px-6">
          {/* PROVIDER SELECT */}

          <label className="mb-2 block text-[13px] font-semibold text-gray-700">
            Select Service Provider
          </label>

          <select
            value={selectedIndex}
            onChange={handleProviderChange}
            className="mb-5 h-[44px] w-full rounded-md border border-gray-300 bg-white px-3 text-[13px] outline-none focus:border-[#990000]"
          >
            {providers.map((provider, index) => (
              <option
                key={`${provider.portfolioPath}-${index}`}
                value={index}
              >
                {provider.category} - {provider.name}
              </option>
            ))}
          </select>

          {/* INFO / EDIT TABS */}

          <div className="mb-5 flex border-b border-gray-200">
            <button
              type="button"
              onClick={handleInfoTab}
              className={`px-6 py-3 text-[13px] font-semibold transition ${
                activeTab === "info"
                  ? "border-b-[3px] border-[#990000] text-[#990000]"
                  : "text-gray-500 hover:text-[#990000]"
              }`}
            >
              Info
            </button>

            <button
              type="button"
              onClick={handleEditTab}
              className={`px-6 py-3 text-[13px] font-semibold transition ${
                activeTab === "edit"
                  ? "border-b-[3px] border-[#990000] text-[#990000]"
                  : "text-gray-500 hover:text-[#990000]"
              }`}
            >
              Edit
            </button>
          </div>

          {/* IMAGE PREVIEW */}

          <div className="mx-auto w-full max-w-[435px] overflow-hidden rounded-[4px] border border-gray-200">
            <div className="relative">
              <img
                src={selectedProvider.image}
                alt={selectedProvider.name}
                className="block aspect-[1.75/1] w-full object-cover"
              />

              <div className="absolute left-0 top-[8px] max-w-[75%] border border-[#8D795C] bg-[#302B24]/90 px-[8px] py-[4px]">
                <span className="break-words text-[14px] font-semibold text-white">
                  {activeTab === "edit"
                    ? editedProvider.category || "Category"
                    : selectedProvider.category}
                </span>
              </div>

              <div className="absolute right-[10px] top-[10px]">
                <span className="text-[14px] font-semibold text-[#FFB900]">
                  Portfolio »
                </span>
              </div>

              <div className="absolute bottom-0 left-0 max-w-[90%] bg-[#272727]/90 px-3 py-2">
                <span className="break-words text-[11px] font-medium text-white">
                  {activeTab === "edit"
                    ? editedProvider.offer || "Offer details"
                    : selectedProvider.offer}
                </span>
              </div>
            </div>
          </div>

          {/* SUCCESS MESSAGE */}

          {success && (
            <p className="mx-auto mt-4 w-full max-w-[435px] rounded-md bg-green-50 px-3 py-2 text-[12px] font-medium text-green-700">
              {success}
            </p>
          )}

          {/* INFO TAB */}

          {activeTab === "info" && (
            <div className="mx-auto mt-5 w-full max-w-[435px] rounded-lg border border-gray-200 p-4">
              <h3 className="mb-4 text-[14px] font-semibold text-[#760000]">
                Provider Information
              </h3>

              <div className="space-y-3 text-[13px]">
                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Category</span>
                  <span className="text-right font-medium text-gray-800">
                    {selectedProvider.category}
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Provider Name</span>
                  <span className="text-right font-medium text-gray-800">
                    {selectedProvider.name}
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Location</span>
                  <span className="text-right font-medium text-gray-800">
                    {selectedProvider.location}
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Offer</span>
                  <span className="text-right font-medium text-gray-800">
                    {selectedProvider.offer}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-gray-500">Portfolio Route</span>

                  <Link
                    to={selectedProvider.portfolioPath}
                    onClick={onClose}
                    className="break-all font-medium text-[#990000] underline"
                  >
                    {selectedProvider.portfolioPath}
                  </Link>
                </div>
              </div>

              <button
                type="button"
                onClick={handleEditTab}
                className="mt-5 w-full rounded-md bg-[#990000] px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-[#750000]"
              >
                Edit Provider Details
              </button>
            </div>
          )}

          {/* EDIT TAB */}

          {activeTab === "edit" && (
            <div className="mx-auto mt-5 w-full max-w-[435px] space-y-4">
              <div>
                <label className="mb-2 block text-[13px] font-semibold text-gray-700">
                  Category / Badge Text
                </label>

                <input
                  type="text"
                  maxLength={30}
                  value={editedProvider.category}
                  onChange={(event) =>
                    handleFieldChange("category", event.target.value)
                  }
                  placeholder="Enter category"
                  className="h-[44px] w-full rounded-md border border-gray-300 px-3 text-[13px] outline-none focus:border-[#990000]"
                />

                <p className="mt-1 text-right text-[10px] text-gray-400">
                  {editedProvider.category.length}/30
                </p>
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-semibold text-gray-700">
                  Provider Name
                </label>

                <input
                  type="text"
                  maxLength={50}
                  value={editedProvider.name}
                  onChange={(event) =>
                    handleFieldChange("name", event.target.value)
                  }
                  placeholder="Enter provider name"
                  className="h-[44px] w-full rounded-md border border-gray-300 px-3 text-[13px] outline-none focus:border-[#990000]"
                />

                <p className="mt-1 text-right text-[10px] text-gray-400">
                  {editedProvider.name.length}/50
                </p>
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-semibold text-gray-700">
                  Location
                </label>

                <input
                  type="text"
                  maxLength={60}
                  value={editedProvider.location}
                  onChange={(event) =>
                    handleFieldChange("location", event.target.value)
                  }
                  placeholder="Enter location"
                  className="h-[44px] w-full rounded-md border border-gray-300 px-3 text-[13px] outline-none focus:border-[#990000]"
                />

                <p className="mt-1 text-right text-[10px] text-gray-400">
                  {editedProvider.location.length}/60
                </p>
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-semibold text-gray-700">
                  Offer / Price Badge
                </label>

                <input
                  type="text"
                  maxLength={45}
                  value={editedProvider.offer}
                  onChange={(event) =>
                    handleFieldChange("offer", event.target.value)
                  }
                  placeholder="Enter offer details"
                  className="h-[44px] w-full rounded-md border border-gray-300 px-3 text-[13px] outline-none focus:border-[#990000]"
                />

                <p className="mt-1 text-right text-[10px] text-gray-400">
                  {editedProvider.offer.length}/45
                </p>
              </div>

              {error && (
                <p className="rounded-md bg-red-50 px-3 py-2 text-[12px] text-red-600">
                  {error}
                </p>
              )}

              <div className="flex justify-end gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="rounded-md border border-gray-300 px-5 py-2.5 text-[13px] font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  className="rounded-md bg-[#990000] px-6 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#750000]"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   5. DASHBOARD STATS
========================================================= */

const DashboardStats = () => {
  const navigate = useNavigate();

  const [isThumbnailPopupOpen, setIsThumbnailPopupOpen] =
    useState(false);

  const [providers, setProviders] = useState(getStoredProviders);

  // Existing project value. Connect to actual profile data after
  // checking the profile component and its saved data structure.
  const profileCompletion = 95;

  const [conversionRate] = useState(75);
  const minimumLeadValue = "50,000";

  /* Sync provider details across components and browser tabs */

  useEffect(() => {
    const syncProviders = () => {
      setProviders(getStoredProviders());
    };

    window.addEventListener(UPDATE_EVENT, syncProviders);
    window.addEventListener("storage", syncProviders);

    return () => {
      window.removeEventListener(UPDATE_EVENT, syncProviders);
      window.removeEventListener("storage", syncProviders);
    };
  }, []);

  /* Save provider details */

  const handleProviderSave = (index, updatedProvider) => {
    try {
      const updatedProviders = providers.map((provider, providerIndex) =>
        providerIndex === index ? updatedProvider : provider
      );

      const uniqueProviders =
        removeDuplicateProviders(updatedProviders);

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(uniqueProviders)
      );

      setProviders(uniqueProviders);

      window.dispatchEvent(new Event(UPDATE_EVENT));

      return true;
    } catch (error) {
      console.error("Unable to save provider details:", error);
      return false;
    }
  };

  return (
    <>
      <div
        className="grid w-full grid-cols-1 gap-4 bg-[#f7f5f5] px-5 py-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[32px] xl:px-[50px] xl:py-[24px]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* PROFILE COMPLETION */}

        <div className="group relative h-[189px] min-w-0 rounded-[9px] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="absolute left-0 top-[40px] flex h-[76px] w-[132px] items-center justify-end pr-[16px]">
            <ProfileIcon />
          </div>

          <div className="absolute left-[132px] top-[40px] h-[76px] border-l border-[#777777]" />

          <div className="absolute left-[145px] right-[10px] top-[45px] min-w-0">
            <h3 className="text-[16px] font-semibold leading-[22px] text-[#760000]">
              Profile Completion
            </h3>

            <p className="mt-[9px] text-center text-[24.27px] font-bold leading-[30px] text-[#111820]">
              {profileCompletion}%
            </p>

            <div className="mt-2 h-[5px] w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-[#FFB000] transition-all duration-700"
                style={{ width: `${profileCompletion}%` }}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate("/service-providers/profile")}
            className="absolute bottom-[13px] left-1/2 -translate-x-1/2 cursor-pointer whitespace-nowrap text-[14px] font-medium text-[#252525] underline transition-colors hover:text-[#990000]"
          >
            Complete Profile
          </button>
        </div>

        {/* CONVERSION RATE */}

        <div className="group relative h-[189px] min-w-0 rounded-[9px] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="absolute left-0 top-[40px] flex h-[76px] w-[138px] items-center justify-end pr-[12px]">
            <ConversionIcon />
          </div>

          <div className="absolute left-[138px] top-[40px] h-[76px] border-l border-[#777777]" />

          <div className="absolute left-[162px] right-[12px] top-[45px] min-w-0">
            <h3 className="text-[16px] font-semibold leading-[22px] text-[#760000]">
              Conversion Rate
            </h3>

            <p className="mt-[9px] text-center text-[24.27px] font-bold leading-[30px] text-[#111820]">
              {conversionRate}%
            </p>

            <div className="mt-2 h-[5px] w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-[#FFB000] transition-all duration-700"
                style={{ width: `${conversionRate}%` }}
              />
            </div>
          </div>
        </div>

        {/* THUMBNAIL BADGE TEXT */}

        <div className="group relative h-[189px] min-w-0 rounded-[9px] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="absolute left-0 top-[40px] flex h-[76px] w-[121px] items-center justify-end pr-[10px]">
            <ThumbnailBadgeIcon />
          </div>

          <div className="absolute left-[121px] top-[40px] h-[76px] border-l border-[#777777]" />

          <div className="absolute left-[139px] right-[20px] top-[45px] min-w-0">
            <h3 className="text-center text-[16px] font-semibold leading-[22px] text-[#760000]">
              Thumbnail Badge Text
            </h3>

            <div className="mt-[7px] flex h-[42px] w-full min-w-0 items-center justify-center rounded-[7px] bg-[#e7e7e7] px-1 text-center text-[12px] leading-[16px] text-[#777777]">
              <span className="line-clamp-2">
                {providers[0]?.offer || "No offer added"}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsThumbnailPopupOpen(true)}
            className="absolute bottom-[13px] left-1/2 -translate-x-1/2 cursor-pointer whitespace-nowrap text-[14px] font-medium text-[#252525] underline transition-colors hover:text-[#990000]"
          >
            Info and Edit
          </button>
        </div>

        {/* MIN. HIGH VALUE LEAD */}

        <div className="group relative h-[189px] min-w-0 rounded-[9px] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="absolute left-0 right-0 top-[45px] flex min-w-0 flex-col items-center px-2">
            <h3 className="w-full text-center text-[16px] font-semibold leading-[22px] text-[#760000]">
              Min. High value Lead
            </h3>

            <p className="mt-[9px] text-center text-[24.27px] font-bold leading-[30px] text-[#111820]">
              {minimumLeadValue}
            </p>

            <div className="mt-2 h-[5px] w-[65%] overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-3/4 rounded-full bg-[#FFB000]" />
            </div>
          </div>
        </div>
      </div>

      {/* PROVIDER INFO AND EDIT POPUP */}

      {isThumbnailPopupOpen && (
        <ThumbnailBadgePopup
          providers={providers}
          onSave={handleProviderSave}
          onClose={() => setIsThumbnailPopupOpen(false)}
        />
      )}
    </>
  );
};

export default DashboardStats;