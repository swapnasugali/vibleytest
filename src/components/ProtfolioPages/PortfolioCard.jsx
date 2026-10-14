
import React, { useEffect, useState } from "react";

import { FiEdit, FiEye } from "react-icons/fi";
import {
  FaStar,
  FaCamera,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

import PortfolioGalleryPreview from "./PortfolioGalleryPreview";

const EVENT_MEDIA = {
  "corporate event": {
    photos: [
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780934/corporategala1.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780934/corporategala2.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780934/corporategala3.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780934/corporategala4.jpg",
    ],
    videos: [
      "https://res.cloudinary.com/porwmjke/video/upload/v1791781085/corporate-light-video.mp4",
      "https://res.cloudinary.com/porwmjke/video/upload/v1791783928/events-light-video.mp4",
    ],
  },

  wedding: {
    photos: [
      "https://res.cloudinary.com/porwmjke/image/upload/v1791778383/photo053.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791779160/photo021.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791549208/photo03.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791549234/photo04.jpg",
    ],
    videos: [
      "https://res.cloudinary.com/porwmjke/video/upload/v1791783833/wedding-video.mp4",
      "https://res.cloudinary.com/porwmjke/video/upload/v1791783565/catering-video.mp4",
    ],
  },

  birthday: {
    photos: [
      "https://res.cloudinary.com/porwmjke/image/upload/v1791783409/birthday1.png",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791783409/birthday2.png",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791783409/birthday3.png",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791783409/birthday4.png",
    ],
    videos: [
      "https://res.cloudinary.com/porwmjke/video/upload/v1791783565/catering-video.mp4",
      "https://res.cloudinary.com/porwmjke/video/upload/v1791781085/corporate-light-video.mp4",
    ],
  },

  "get together": {
    photos: [
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780861/event11.png",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791781798/light11.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791777473/event042.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780874/event44.png",
    ],
    videos: [
      "https://res.cloudinary.com/porwmjke/video/upload/v1791783565/catering-video.mp4",
      "https://res.cloudinary.com/porwmjke/video/upload/v1791783833/wedding-video.mp4",
    ],
  },

  "get to gather": {
    photos: [
      "https://res.cloudinary.com/porwmjke/image/upload/v1791781798/light11.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791781798/light11.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791777473/event042.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780874/event44.png",
    ],
    videos: [
      "https://res.cloudinary.com/porwmjke/video/upload/v1791781085/corporate-light-video.mp4",
      "https://res.cloudinary.com/porwmjke/video/upload/v1791783833/wedding-video.mp4",
    ],
  },
};

const normalizeEventType = (value = "") =>
  value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ");

const PortfolioCard = ({
  section,
  onEdit,
  onDelete,
  onSave,
  showGallery = false,
}) => {
  const [isVisible, setIsVisible] = useState(showGallery);
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [portfolioData, setPortfolioData] = useState(section);

  const [formData, setFormData] = useState({
    title: section?.title || "",
    serviceType: section?.serviceType || "",
    eventType: section?.eventType || "",
  });

  // Sync with parent data
  useEffect(() => {
    setPortfolioData(section);

    if (!isEditing) {
      setFormData({
        title: section?.title || "",
        serviceType: section?.serviceType || "",
        eventType: section?.eventType || "",
      });
    }
  }, [section, isEditing]);

  // EDIT
  const handleEdit = () => {
    setFormData({
      title: portfolioData?.title || "",
      serviceType: portfolioData?.serviceType || "",
      eventType: portfolioData?.eventType || "",
    });

    setErrorMessage("");
    setSuccessMessage("");
    setIsEditing(true);

    if (typeof onEdit === "function") {
      onEdit(portfolioData);
    }
  };

  // INPUT CHANGE
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrorMessage("");
    setSuccessMessage("");
  };

  // SAVE
  const handleSave = (event) => {
    event.preventDefault();

    const title = formData.title.trim();
    const serviceType = formData.serviceType.trim();
    const eventType = formData.eventType.trim();

    if (!title || !serviceType || !eventType) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    const updatedSection = {
      ...portfolioData,
      title,
      serviceType,
      eventType,
    };

    // Update current card
    setPortfolioData(updatedSection);

    // Update parent list and persistent storage
    if (typeof onSave === "function") {
      const result = onSave(updatedSection);

      if (result === false) {
        setErrorMessage("Unable to save changes. Please try again.");
        return;
      }
    } else {
      // Fallback: save this section in localStorage
      try {
        const existing = JSON.parse(
          localStorage.getItem("portfolioSections") || "[]"
        );

        const sections = Array.isArray(existing) ? existing : [];
        const index = sections.findIndex(
          (item) => item.id === updatedSection.id
        );

        if (index !== -1) {
          sections[index] = updatedSection;
        } else {
          sections.push(updatedSection);
        }

        localStorage.setItem(
          "portfolioSections",
          JSON.stringify(sections)
        );
      } catch (error) {
        console.error("Portfolio save failed:", error);
        setErrorMessage("Unable to save changes in this browser.");
        return;
      }
    }

    setIsEditing(false);
    setErrorMessage("");
    setSuccessMessage("Portfolio updated successfully.");
  };

  // CANCEL
  const handleCancel = () => {
    setFormData({
      title: portfolioData?.title || "",
      serviceType: portfolioData?.serviceType || "",
      eventType: portfolioData?.eventType || "",
    });

    setErrorMessage("");
    setSuccessMessage("");
    setIsEditing(false);
  };

  // DELETE
  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this portfolio section?"
    );

    if (confirmed && typeof onDelete === "function") {
      onDelete(portfolioData.id);
    }
  };

  const eventKey = normalizeEventType(portfolioData?.eventType);

  const eventMedia = EVENT_MEDIA[eventKey] || {
    photos: [],
    videos: [],
  };

  const savedPhotos = Array.isArray(portfolioData?.photos)
    ? portfolioData.photos
    : [];

  const savedVideos = Array.isArray(portfolioData?.videos)
    ? portfolioData.videos
    : [];

  const photos =
    savedPhotos.length > 0 ? savedPhotos : eventMedia.photos;

  const videos =
    savedVideos.length > 0 ? savedVideos : eventMedia.videos;

  const isDestinationWedding =
    portfolioData?.title?.trim().toLowerCase() ===
    "destination wedding at maldives";

  const isFeatured =
    isDestinationWedding || portfolioData?.featured === true;

  return (
    <article
      className="w-full max-w-full overflow-hidden rounded-[7px] bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* HEADER */}
      <div className="flex w-full min-w-0 items-start justify-between gap-[10px] px-[27px] pb-[10px] pt-[14px]">
        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 flex-wrap items-center gap-[7px]">
            <h2 className="min-w-0 max-w-full break-words text-[26px] font-normal leading-[1.2] text-[#333333]">
              {portfolioData?.title || "Untitled Portfolio"}
            </h2>

            {isFeatured && (
              <span className="inline-flex h-[37px] shrink-0 items-center gap-[3px] rounded-[3px] bg-[#f5ad00] px-[6px] text-[14px] font-semibold leading-none text-white">
                <FaStar size={17} />
                Featured
              </span>
            )}
          </div>

          <div className="mt-[6px] flex min-w-0 flex-wrap items-center gap-[5px]">
            <span className="inline-flex h-[27px] max-w-full shrink-0 items-center overflow-hidden rounded-[3px] bg-[#222222] px-[7px] text-[14px] font-medium leading-none text-white">
              <FaCamera className="mr-[4px] shrink-0" size={17} />
              <span className="truncate">
                {portfolioData?.serviceType || "General Photography"}
              </span>
            </span>

            <span className="h-[14px] w-[1px] shrink-0 bg-[#777777]" />

            <span className="max-w-full truncate text-[14px] font-medium leading-none text-[#333333]">
              {portfolioData?.eventType || "Corporate Event"}
            </span>
          </div>
        </div>

        {/* ACTION ICONS */}
        <div className="flex shrink-0 items-center gap-[20px] pt-[1px]">
          <button
            type="button"
            onClick={handleEdit}
            title="Edit portfolio"
            aria-label="Edit portfolio"
            className="flex h-[32px] w-[32px] shrink-0 cursor-pointer items-center justify-center bg-transparent p-0 text-[#222222] transition hover:text-[#a60000]"
          >
            <FiEdit size={25} strokeWidth={2.2} />
          </button>

          <button
            type="button"
            onClick={handleDelete}
            title="Delete portfolio"
            aria-label="Delete portfolio"
            className="flex h-[32px] w-[32px] shrink-0 cursor-pointer items-center justify-center bg-transparent p-0 text-[#850000] transition hover:text-[#a60000]"
          >
            <FaTrash size={25} />
          </button>

          <button
            type="button"
            onClick={() => setIsVisible((previous) => !previous)}
            title={isVisible ? "Hide portfolio" : "Show portfolio"}
            aria-label={isVisible ? "Hide portfolio" : "Show portfolio"}
            className="flex h-[40px] w-[40px] shrink-0 cursor-pointer items-center justify-center bg-transparent p-0 text-[#222222] transition hover:text-[#111111]"
          >
            {isVisible ? (
              <FiEye size={30} strokeWidth={2.2} />
            ) : (
              <LuEyeClosed size={32} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* EDIT FORM */}
      {isEditing && (
        <form
          onSubmit={handleSave}
          className="mx-[12px] mb-[12px] rounded-[5px] border border-[#e5e5e5] bg-[#fffdf8] p-[16px]"
        >
          <h3 className="mb-[12px] text-[16px] font-semibold text-[#333333]">
            Edit Portfolio Details
          </h3>

          <div className="mb-[10px]">
            <label
              htmlFor={`portfolio-title-${portfolioData?.id}`}
              className="mb-[5px] block text-[13px] font-medium text-[#333333]"
            >
              Portfolio Title
            </label>

            <input
              id={`portfolio-title-${portfolioData?.id}`}
              name="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="h-[38px] w-full rounded-[4px] border border-[#cfcfcf] bg-white px-[10px] text-[13px] outline-none focus:border-[#d99d00]"
            />
          </div>

          <div className="mb-[10px]">
            <label
              htmlFor={`portfolio-service-${portfolioData?.id}`}
              className="mb-[5px] block text-[13px] font-medium text-[#333333]"
            >
              Service Type
            </label>

            <input
              id={`portfolio-service-${portfolioData?.id}`}
              name="serviceType"
              type="text"
              value={formData.serviceType}
              onChange={handleInputChange}
              required
              className="h-[38px] w-full rounded-[4px] border border-[#cfcfcf] bg-white px-[10px] text-[13px] outline-none focus:border-[#d99d00]"
            />
          </div>

          <div className="mb-[14px]">
            <label
              htmlFor={`portfolio-event-${portfolioData?.id}`}
              className="mb-[5px] block text-[13px] font-medium text-[#333333]"
            >
              Event Type
            </label>

            <input
              id={`portfolio-event-${portfolioData?.id}`}
              name="eventType"
              type="text"
              value={formData.eventType}
              onChange={handleInputChange}
              required
              className="h-[38px] w-full rounded-[4px] border border-[#cfcfcf] bg-white px-[10px] text-[13px] outline-none focus:border-[#d99d00]"
            />
          </div>

          {errorMessage && (
            <p role="alert" className="mb-[10px] text-[12px] text-red-600">
              {errorMessage}
            </p>
          )}

          <div className="flex justify-end gap-[8px]">
            <button
              type="button"
              onClick={handleCancel}
              className="flex items-center gap-[6px] rounded-[4px] border border-[#cfcfcf] px-[12px] py-[7px] text-[12px] text-[#333333] hover:bg-gray-100"
            >
              <FaTimes />
              Cancel
            </button>

            <button
              type="submit"
              className="flex items-center gap-[6px] rounded-[4px] bg-[#d99d00] px-[12px] py-[7px] text-[12px] font-medium text-white hover:bg-[#bd8900]"
            >
              <FaCheck />
              Save Changes
            </button>
          </div>
        </form>
      )}

      {/* SUCCESS MESSAGE */}
      {successMessage && !isEditing && (
        <p
          role="status"
          className="mx-[12px] mb-[10px] text-right text-[12px] text-green-600"
        >
          {successMessage}
        </p>
      )}

      {/* GALLERY */}
      {isVisible && (
        <div className="w-full min-w-0 px-[12px] pb-[12px]">
          <PortfolioGalleryPreview photos={photos} videos={videos} />
        </div>
      )}
    </article>
  );
};

export default PortfolioCard;
