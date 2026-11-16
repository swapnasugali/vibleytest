import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import {
  MdCheckCircle,
  MdRadioButtonUnchecked,
  MdPerson,
  MdBusiness,
  MdPhone,
  MdLocationOn,
  MdDescription,
} from "react-icons/md";

/* =========================================================
   1. PROFILE ICON
========================================================= */

const ProfileIcon = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle
        cx="24"
        cy="13"
        r="8"
        stroke="#FFB000"
        strokeWidth="2.5"
      />

      <path
        d="M10 37C10 31.477 14.477 27 20 27H28C33.523 27 38 31.477 38 37V38C38 39.105 37.105 40 36 40H12C10.895 40 10 39.105 10 38V37Z"
        stroke="#FFB000"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/* =========================================================
   2. CONVERSION RATE ICON
========================================================= */

const ConversionIcon = () => {
  return (
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
};

/* =========================================================
   3. THUMBNAIL BADGE ICON
========================================================= */

const ThumbnailBadgeIcon = () => {
  return (
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
};

/* =========================================================
   4. PROFILE COMPLETION POPUP
========================================================= */

const ProfileCompletionPopup = ({
  onClose,
  completion,
  onSave,
}) => {
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const sections = [
    {
      name: "Basic Profile Details",
      icon: <MdPerson />,
      completed: true,
    },
    {
      name: "Contact Information",
      icon: <MdPhone />,
      completed: true,
    },
    {
      name: "Business Information",
      icon: <MdBusiness />,
      completed: true,
    },
    {
      name: "Business Location",
      icon: <MdLocationOn />,
      completed: true,
    },
    {
      name: "Business Description",
      icon: <MdDescription />,
      completed: false,
    },
  ];

  const handleSave = () => {
    if (!description.trim()) {
      setError("Please enter your business description.");
      return;
    }

    onSave();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/50 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="my-auto w-full max-w-[600px] overflow-hidden rounded-xl bg-white shadow-2xl"
        style={{ fontFamily: "Poppins, sans-serif" }}
        onClick={(e) => e.stopPropagation()}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-5 sm:px-7">

          <div>
            <h2 className="text-[16px] font-semibold uppercase text-[#222222]">
              Complete Your Profile
            </h2>

            <p className="mt-1 text-[12px] text-gray-500">
              Complete your remaining profile information.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close popup"
            className="flex h-[35px] w-[35px] shrink-0 items-center cursor-pointer justify-center rounded-full border-2 border-[#B00000] text-[#B00000] transition hover:bg-[#B00000] hover:text-white"
          >
            <FaTimes />
          </button>
        </div>

        {/* CONTENT */}
        <div className="px-5 py-6 sm:px-7">

          {/* COMPLETION PERCENTAGE */}
          <div className="rounded-lg bg-[#fff9ec] p-4">

            <div className="flex items-center justify-between">

              <span className="text-[13px] font-semibold text-gray-800">
                Profile Completion
              </span>

              <span className="text-[20px] font-bold text-[#990000]">
                {completion}%
              </span>

            </div>

            <div className="mt-3 h-[9px] w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-[#FFB000] transition-all duration-700"
                style={{ width: `${completion}%` }}
              />
            </div>

            <p className="mt-2 text-[11px] text-gray-500">
              {completion === 100
                ? "Your profile is complete!"
                : "One more step to complete your profile."}
            </p>

          </div>

          {/* PROFILE SECTIONS */}
          <h3 className="mb-3 mt-6 text-[14px] font-semibold text-gray-800">
            Profile Sections
          </h3>

          <div className="space-y-3">

            {sections.map((section, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-3 transition hover:bg-gray-50 sm:px-4"
              >

                <div className="flex items-center gap-3">

                  <span className="text-[21px] text-[#990000]">
                    {section.icon}
                  </span>

                  <span className="text-[12px] font-medium text-gray-700 sm:text-[13px]">
                    {section.name}
                  </span>

                </div>

                {section.completed ? (
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-green-600">
                    <MdCheckCircle size={17} />
                    Completed
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-orange-600">
                    <MdRadioButtonUnchecked size={17} />
                    Pending
                  </span>
                )}

              </div>
            ))}

          </div>

          {/* BUSINESS DESCRIPTION INPUT */}
          {completion < 100 && (
            <div className="mt-6">

              <label className="mb-2 block text-[13px] font-semibold text-gray-800">
                Business Description
                <span className="text-red-600"> *</span>
              </label>

              <textarea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setError("");
                }}
                rows={3}
                maxLength={300}
                placeholder="Describe your business and the services you provide..."
                className="w-full resize-none rounded-lg border border-gray-300 p-3 text-[13px] outline-none transition focus:border-[#990000] focus:ring-2 focus:ring-[#990000]/10"
              />

              <div className="mt-1 flex items-center justify-between">

                {error ? (
                  <span className="text-[11px] text-red-600">
                    {error}
                  </span>
                ) : (
                  <span className="text-[11px] text-gray-400">
                    Enter your business description.
                  </span>
                )}

                <span className="text-[11px] text-gray-400">
                  {description.length}/300
                </span>

              </div>

            </div>
          )}

          {/* BUTTONS */}
          <div className="mt-6 flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-gray-300 px-5 py-2.5 text-[12px] font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            {completion < 100 && (
              <button
                type="button"
                onClick={handleSave}
                className="rounded-md bg-[#990000] px-6 py-2.5 text-[12px] font-semibold text-white transition hover:bg-[#750000]"
              >
                Save & Complete
              </button>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

/* =========================================================
   5. THUMBNAIL BADGE TEXT POPUP
========================================================= */

const ThumbnailBadgePopup = ({
  onClose,
  badgeText,
  onSave,
}) => {
  const [editedText, setEditedText] = useState(badgeText);
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!editedText.trim()) {
      setError("Please enter badge text.");
      return;
    }

    onSave(editedText.trim());
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[708px] overflow-hidden rounded-[14px] bg-white shadow-xl"
        style={{ fontFamily: "Poppins, sans-serif" }}
        onClick={(e) => e.stopPropagation()}
      >

        {/* HEADER */}
        <div className="flex h-[79px] items-center justify-between border-b border-gray-200 px-6 sm:px-[25px]">

          <h2 className="text-[16px] font-semibold uppercase tracking-[0.3px] text-[#222222]">
            Thumbnail Badge Text
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close popup"
            className="flex h-[35px] w-[35px] shrink-0 items-center justify-center cursor-pointer rounded-full border-[3px] border-[#B00000] text-[#B00000] transition hover:bg-[#B00000] hover:text-white"
          >
            <FaTimes />
          </button>

        </div>

        {/* CONTENT */}
        <div className="flex flex-col items-center px-4 pb-6 pt-4 sm:px-6">

          <p className="mb-3 w-full text-center text-[14px] leading-[25px] text-[#333333]">
            Manage the badge text in the landing page thumbnail previews.
          </p>

          {/* PREVIEW */}
          <div className="relative w-full max-w-[435px] overflow-hidden rounded-[3px]">

            <img
              src="https://res.cloudinary.com/porwmjke/image/upload/v1791787040/provider1.png"
              alt="Photography thumbnail preview"
              className="block h-auto w-full"
            />

            <div className="absolute left-0 top-[8px] max-w-[75%] border border-[#8D795C] bg-[#302B24]/90 px-[8px] py-[4px]">
              <span className="break-words text-[16px] font-semibold text-white">
                {editedText || "Photography"}
              </span>
            </div>

            <div className="absolute right-[10px] top-[10px]">
              <span className="text-[16px] font-semibold text-[#FFB900]">
                Portfolio »
              </span>
            </div>

            <div className="absolute bottom-0 left-0 flex h-[37px] items-center bg-[#B90000] px-[12px]">
              <span className="whitespace-nowrap text-[14px] font-medium text-white">
                STARTING FROM ₹25,000
              </span>
            </div>

          </div>

          {/* INPUT */}
          <div className="mt-5 w-full max-w-[435px]">

            <label className="mb-2 block text-[13px] font-semibold text-gray-700">
              Edit Badge Text
            </label>

            <input
              type="text"
              value={editedText}
              maxLength={30}
              onChange={(e) => {
                setEditedText(e.target.value);
                setError("");
              }}
              placeholder="Enter badge text"
              className="h-[44px] w-full rounded-md border border-gray-300 px-3 text-[14px] outline-none focus:border-[#990000]"
            />

            <div className="mt-1 flex justify-between">
              <span className="text-[11px] text-red-600">
                {error}
              </span>

              <span className="text-[11px] text-gray-400">
                {editedText.length}/30
              </span>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="mt-4 flex gap-3">

            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-gray-300 px-6 py-2.5 text-[13px] font-semibold text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="rounded-md bg-[#990000] px-7 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#750000]"
            >
              Save Changes
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

/* =========================================================
   6. DASHBOARD STATS
========================================================= */

const DashboardStats = () => {

  const [isThumbnailPopupOpen, setIsThumbnailPopupOpen] =
    useState(false);

  const [isProfilePopupOpen, setIsProfilePopupOpen] =
    useState(false);

  const [badgeText, setBadgeText] =
    useState("Photography");

  const [profileCompletion, setProfileCompletion] =
    useState(95);

  const [conversionRate] = useState(75);

  const minimumLeadValue = "50,000";

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

          {/* COMPLETE PROFILE BUTTON */}
          <button
            type="button"
            onClick={() => setIsProfilePopupOpen(true)}
            className="absolute bottom-[13px] left-1/2 -translate-x-1/2 cursor-pointer whitespace-nowrap text-[14px] font-medium text-[#252525] underline transition-colors hover:text-[#990000]"
          >
            {profileCompletion === 100
              ? "View Profile"
              : "Complete Profile"}
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
              Starting from 12,000
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

      {/* PROFILE COMPLETION POPUP */}
      {isProfilePopupOpen && (
        <ProfileCompletionPopup
          completion={profileCompletion}
          onSave={() => setProfileCompletion(100)}
          onClose={() => setIsProfilePopupOpen(false)}
        />
      )}

      {/* THUMBNAIL POPUP */}
      {isThumbnailPopupOpen && (
        <ThumbnailBadgePopup
          badgeText={badgeText}
          onSave={setBadgeText}
          onClose={() => setIsThumbnailPopupOpen(false)}
        />
      )}

    </>
  );
};

export default DashboardStats;
