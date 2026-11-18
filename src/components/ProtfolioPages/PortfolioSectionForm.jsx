
import React, { useEffect, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiImage,
  FiUploadCloud,
  FiTrash2,
  FiVideo,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

const MAX_ABOUT_LENGTH = 400;
const MAX_FILES = 4;
const DRAFT_KEY = "portfolioSectionDraft";

const serviceTypes = [
  "General Photography",
  "Candid Photography",
  "Traditional Photography",
  "Catering",
  "Venue",
];

const eventTypes = [
  "Corporate Event",
  "Wedding",
  "Birthday",
  "Get To Gather",
  "Other",
];

const getTodayDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const PortfolioSectionForm = ({
  initialData = null,
  onBack,
  onSave,
}) => {
  const photoInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const createdUrlsRef = useRef([]);

  const [eventTitle, setEventTitle] = useState("");
  const [serviceType, setServiceType] = useState(
    "General Photography"
  );
  const [eventType, setEventType] = useState(
    "Corporate Event"
  );
  const [eventDate, setEventDate] = useState(getTodayDate());
  const [aboutEvent, setAboutEvent] = useState("");
  const [featured, setFeatured] = useState(true);

  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);

  const [showGridPreview, setShowGridPreview] = useState(true);

  // Load existing data while editing, or restore a saved draft.
  useEffect(() => {
    if (initialData) {
      setEventTitle(initialData.title || "");
      setServiceType(
        initialData.serviceType || "General Photography"
      );
      setEventType(
        initialData.eventType || "Corporate Event"
      );
      setEventDate(initialData.eventDate || getTodayDate());
      setAboutEvent(initialData.aboutEvent || "");
      setFeatured(initialData.featured ?? true);

      setPhotos(
        Array.isArray(initialData.photos)
          ? initialData.photos
          : []
      );

      setVideos(
        Array.isArray(initialData.videos)
          ? initialData.videos
          : []
      );

      return;
    }

    // Restore text fields from the last saved draft.
    try {
      const savedDraft = localStorage.getItem(DRAFT_KEY);

      if (savedDraft) {
        const draft = JSON.parse(savedDraft);

        setEventTitle(draft.eventTitle || "");
        setServiceType(
          draft.serviceType || "General Photography"
        );
        setEventType(draft.eventType || "Corporate Event");
        setEventDate(draft.eventDate || getTodayDate());
        setAboutEvent(draft.aboutEvent || "");
        setFeatured(draft.featured ?? true);
      } else {
        setEventTitle("");
        setServiceType("General Photography");
        setEventType("Corporate Event");
        setEventDate(getTodayDate());
        setAboutEvent("");
        setFeatured(true);
        setPhotos([]);
        setVideos([]);
      }
    } catch (error) {
      console.error("Unable to restore portfolio draft:", error);
    }
  }, [initialData]);

  // Revoke only the temporary URLs created by this component.
  useEffect(() => {
    return () => {
      createdUrlsRef.current.forEach((url) => {
        URL.revokeObjectURL(url);
      });

      createdUrlsRef.current = [];
    };
  }, []);

  const createMediaItem = (file) => {
    const url = URL.createObjectURL(file);

    createdUrlsRef.current.push(url);

    return {
      id: `${file.name}-${file.lastModified}-${Math.random()
        .toString(36)
        .slice(2)}`,
      file,
      url,
      name: file.name,
    };
  };

  // PHOTO UPLOAD
  const handlePhotoChange = (event) => {
    const selectedFiles = Array.from(event.target.files || []);
    const remainingSlots = MAX_FILES - photos.length;

    if (remainingSlots <= 0) {
      alert("You can upload a maximum of 4 photos.");
      event.target.value = "";
      return;
    }

    const validFiles = selectedFiles.filter((file) => {
      const validType = [
        "image/jpeg",
        "image/png",
        "image/webp",
      ].includes(file.type);

      if (!validType) {
        alert(`${file.name} is not supported. Upload JPG, PNG or WEBP files.`);
      }

      return validType;
    });

    const filesToAdd = validFiles.slice(0, remainingSlots);

    if (validFiles.length > remainingSlots) {
      alert(`You can upload only ${remainingSlots} more photo(s).`);
    }

    const newPhotos = filesToAdd.map(createMediaItem);

    setPhotos((previousPhotos) => [
      ...previousPhotos,
      ...newPhotos,
    ]);

    event.target.value = "";
  };

  // VIDEO UPLOAD
  const handleVideoChange = (event) => {
    const selectedFiles = Array.from(event.target.files || []);

    const validFiles = selectedFiles.filter((file) => {
      const validType = file.type.startsWith("video/");

      if (!validType) {
        alert(`${file.name} is not a supported video file.`);
      }

      return validType;
    });

    const newVideos = validFiles.map(createMediaItem);

    setVideos((previousVideos) => [
      ...previousVideos,
      ...newVideos,
    ]);

    event.target.value = "";
  };

  // REMOVE PHOTO
  const handleRemovePhoto = (photoId) => {
    setPhotos((previousPhotos) => {
      const photoToRemove = previousPhotos.find(
        (photo) => photo.id === photoId
      );

      if (photoToRemove?.url) {
        URL.revokeObjectURL(photoToRemove.url);

        createdUrlsRef.current = createdUrlsRef.current.filter(
          (url) => url !== photoToRemove.url
        );
      }

      return previousPhotos.filter(
        (photo) => photo.id !== photoId
      );
    });
  };

  // REMOVE VIDEO
  const handleRemoveVideo = (videoId) => {
    setVideos((previousVideos) => {
      const videoToRemove = previousVideos.find(
        (video) => video.id === videoId
      );

      if (videoToRemove?.url) {
        URL.revokeObjectURL(videoToRemove.url);

        createdUrlsRef.current = createdUrlsRef.current.filter(
          (url) => url !== videoToRemove.url
        );
      }

      return previousVideos.filter(
        (video) => video.id !== videoId
      );
    });
  };

  // SAVE DRAFT
  const handleSaveDraft = () => {
    const draftData = {
      eventTitle,
      serviceType,
      eventType,
      eventDate,
      aboutEvent,
      featured,
    };

    try {
      localStorage.setItem(
        DRAFT_KEY,
        JSON.stringify(draftData)
      );

      alert("Draft saved successfully.");
    } catch (error) {
      console.error("Unable to save draft:", error);
      alert("Unable to save draft. Please try again.");
    }
  };

  // SAVE SECTION
  const handleSave = () => {
    if (!eventTitle.trim()) {
      alert("Please enter Event Title.");
      return;
    }

    if (!eventDate) {
      alert("Please select Event Date.");
      return;
    }

    if (eventDate > getTodayDate()) {
      alert(
        "Future dates are not allowed. Please select today or a past date."
      );
      return;
    }

    if (typeof onSave !== "function") {
      alert("Save function is not connected. Please check the parent component.");
      return;
    }

    const sectionData = {
      id: initialData?.id || Date.now(),
      title: eventTitle.trim(),
      serviceType,
      eventType,
      eventDate,
      aboutEvent: aboutEvent.trim(),
      featured,
      photos,
      videos,
    };

    onSave(sectionData);

    // Clear the draft after successful save callback.
    localStorage.removeItem(DRAFT_KEY);
  };

  return (
    <section
      className="w-full min-w-0 overflow-x-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* PAGE HEADER */}
      <div className="mx-auto mb-5 flex w-[calc(100%-24px)] max-w-[1100px] flex-col gap-4 sm:w-[calc(100%-32px)] sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="break-words text-[28px] font-semibold leading-tight text-[#292929] sm:text-[30px] lg:text-[34px]">
            Manage Portfolio
          </h1>

          <p className="mt-1 max-w-[800px] break-words text-[14px] leading-5 text-[#9F9F9F] sm:text-[15px] lg:text-[18px]">
            Create structured event-based portfolio sections to showcase your best work and attract clients
          </p>
        </div>

        <button
          type="button"
          onClick={onBack}
          className="flex h-[45px] w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded bg-[#a60000] px-4 text-[15px] font-semibold text-white hover:bg-[#850000] sm:h-[50px] sm:w-[220px] lg:h-[57px] lg:w-[260px]"
        >
          <FiArrowLeft />
          Back to Portfolio
        </button>
      </div>

      {/* MAIN CARD */}
      <div className="mx-auto w-[calc(100%-24px)] max-w-[1100px] overflow-hidden rounded-[7px] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)] sm:w-[calc(100%-32px)]">
        <div className="px-[14px] pb-5 pt-5 sm:px-7 lg:px-[38px]">

          {/* EVENT INFORMATION */}
          <div className="flex flex-col gap-3 border-b border-[#eeeeee] pb-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-[21px] font-medium text-[#737373] sm:text-[24px] lg:text-[26px]">
              Event Information
            </h2>

            <button
              type="button"
              onClick={() => setFeatured((previous) => !previous)}
              aria-pressed={featured}
              className="flex h-[36px] w-[151px] cursor-pointer items-center justify-between rounded border border-[#999] bg-white px-2.5"
            >
              <span className="text-[16px] font-medium text-[#737373]">
                Featured
              </span>

              <span
                className={`relative h-[18px] w-[31px] rounded-full transition ${
                  featured ? "bg-[#ffb000]" : "bg-[#c8c8c8]"
                }`}
              >
                <span
                  className={`absolute top-[2px] h-[14px] w-[14px] rounded-full bg-white shadow transition-all ${
                    featured ? "right-[2px]" : "left-[2px]"
                  }`}
                />
              </span>
            </button>
          </div>

          {/* EVENT TITLE */}
          <div className="mt-4">
            <label className="mb-1 block text-[16px] font-semibold text-[#333] sm:text-[18px]">
              Event Title <span className="text-[#d00000]">*</span>
            </label>

            <input
              type="text"
              value={eventTitle}
              onChange={(event) => setEventTitle(event.target.value)}
              placeholder="Ex: Universal Media's Grand Launch Event 2026"
              className="h-[40px] w-full rounded border border-[#c9c9c9] px-3 text-[14px] text-[#333] outline-none placeholder:text-[#999] focus:border-[#970000] sm:text-[16px]"
            />
          </div>

          {/* SERVICE TYPE AND EVENT TYPE */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-[16px] font-semibold text-[#333] sm:text-[18px]">
                Service Type <span className="text-[#d00000]">*</span>
              </label>

              <select
                value={serviceType}
                onChange={(event) => setServiceType(event.target.value)}
                className="h-[40px] w-full cursor-pointer rounded border border-[#c9c9c9] bg-white px-3 text-[14px] text-[#555] outline-none focus:border-[#970000] sm:text-[16px]"
              >
                {serviceTypes.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-[16px] font-semibold text-[#333] sm:text-[18px]">
                Event Type <span className="text-[#d00000]">*</span>
              </label>

              <select
                value={eventType}
                onChange={(event) => setEventType(event.target.value)}
                className="h-[40px] w-full cursor-pointer rounded border border-[#c9c9c9] bg-white px-3 text-[14px] text-[#555] outline-none focus:border-[#970000] sm:text-[16px]"
              >
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* EVENT DATE */}
          <div className="mt-4 w-full max-w-[347px]">
            <label className="mb-1 block text-[16px] font-semibold text-[#333] sm:text-[18px]">
              Event Date <span className="text-[#d00000]">*</span>
            </label>

            <input
              type="date"
              value={eventDate}
              max={getTodayDate()}
              onChange={(event) => setEventDate(event.target.value)}
              className="h-[40px] w-full rounded border border-[#c9c9c9] px-3 text-[14px] text-[#555] outline-none focus:border-[#970000]"
            />
          </div>

          {/* ABOUT EVENT */}
          <div className="mt-4">
            <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <label className="text-[16px] font-semibold text-[#333] sm:text-[18px]">
                About Event
                <span className="ml-1 font-normal italic text-[#777]">
                  (Optional)
                </span>
              </label>

              <span className="text-[12px] text-[#555] sm:text-[13px]">
                {aboutEvent.length} / {MAX_ABOUT_LENGTH} Characters
              </span>
            </div>

            <textarea
              value={aboutEvent}
              maxLength={MAX_ABOUT_LENGTH}
              onChange={(event) => setAboutEvent(event.target.value)}
              placeholder="Describe your event..."
              rows={3}
              className="min-h-[80px] w-full resize-none rounded border border-[#c9c9c9] px-3 py-2 text-[14px] text-[#555] outline-none placeholder:text-[#999] focus:border-[#970000] sm:text-[15px]"
            />
          </div>

          {/* MEDIA HEADER */}
          <div className="mt-6 flex flex-col gap-2 border-b border-[#eeeeee] pb-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-[22px] font-medium text-[#777] sm:text-[26px]">
              Media Upload
            </h2>

            <button
              type="button"
              onClick={() => setShowGridPreview((previous) => !previous)}
              className="flex cursor-pointer items-center gap-2 self-start text-[13px] font-medium text-[#970000] underline underline-offset-2"
            >
              {showGridPreview ? <FiEyeOff /> : <FiEye />}
              {showGridPreview ? "Hide Preview" : "Grid Preview"}
            </button>
          </div>

          {/* MEDIA AREA */}
          <div className="mt-4 flex min-w-0 flex-col gap-5 lg:flex-row lg:items-start">

            {/* UPLOAD BOX */}
            <div className="flex min-h-[250px] w-full shrink-0 flex-col items-center justify-center rounded border border-dashed border-[#999] px-4 py-6 lg:max-w-[390px]">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#eeeeee]">
                <FiUploadCloud className="h-6 w-6 text-[#d22]" />
              </div>

              <p className="text-center text-[15px] font-medium text-[#555]">
                Upload photos and videos of the event
              </p>

              <p className="mt-1 text-center text-[12px] text-[#777]">
                Photos: JPG, PNG, WEBP
              </p>

              <p className="text-center text-[12px] text-[#777]">
                Maximum 4 photos
              </p>

              <input
                ref={photoInputRef}
                type="file"
                accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                multiple
                className="hidden"
                onChange={handlePhotoChange}
              />

              <input
                ref={videoInputRef}
                type="file"
                accept="video/*"
                multiple
                className="hidden"
                onChange={handleVideoChange}
              />

              <div className="mt-4 flex w-full max-w-[230px] gap-2">
                <button
                  type="button"
                  onClick={() => photoInputRef.current?.click()}
                  disabled={photos.length >= MAX_FILES}
                  className="h-[38px] flex-1 rounded bg-[#d83c3c] px-2 text-[12px] font-bold text-white hover:bg-[#b92d2d] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  PHOTOS ({photos.length}/{MAX_FILES})
                </button>

                <button
                  type="button"
                  onClick={() => videoInputRef.current?.click()}
                  className="h-[38px] flex-1 rounded border border-[#bdbdbd] bg-white px-2 text-[12px] font-bold text-[#555] hover:bg-[#f7f7f7]"
                >
                  VIDEOS
                </button>
              </div>
            </div>

            {/* GRID PREVIEW */}
            {showGridPreview && (
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-[15px] font-semibold text-[#444]">
                    Photo Preview
                  </h3>

                  <span className="text-[12px] text-[#777]">
                    {photos.length} / {MAX_FILES} photos
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {Array.from({ length: MAX_FILES }).map((_, index) => {
                    const photo = photos[index];

                    return (
                      <div
                        key={photo?.id || `empty-${index}`}
                        className="relative flex aspect-[4/5] min-w-0 items-center justify-center overflow-hidden rounded border border-[#c8c8c8] bg-[#f7f7f7]"
                      >
                        {photo?.url ? (
                          <>
                            <img
                              src={photo.url}
                              alt={photo.name || `Portfolio photo ${index + 1}`}
                              className="h-full w-full object-cover"
                            />

                            <button
                              type="button"
                              onClick={() => handleRemovePhoto(photo.id)}
                              aria-label="Remove photo"
                              className="absolute right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-white hover:bg-red-700"
                            >
                              <FiTrash2 size={14} />
                            </button>

                            <span className="absolute bottom-0 left-0 right-0 truncate bg-black/60 px-1 py-1 text-center text-[10px] text-white">
                              {photo.name || `Photo ${index + 1}`}
                            </span>
                          </>
                        ) : (
                          <div className="flex flex-col items-center gap-2 text-[#999]">
                            <FiImage size={24} />
                            <span className="text-[11px]">
                              Photo {index + 1}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* VIDEO PREVIEW */}
                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-[15px] font-semibold text-[#444]">
                      Video Preview
                    </h3>

                    <span className="text-[12px] text-[#777]">
                      {videos.length} videos
                    </span>
                  </div>

                  {videos.length === 0 ? (
                    <div className="flex min-h-[75px] items-center justify-center gap-2 rounded border border-dashed border-[#ccc] text-[13px] text-[#999]">
                      <FiVideo size={18} />
                      No videos uploaded
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {videos.map((video) => (
                        <div
                          key={video.id}
                          className="relative min-w-0 overflow-hidden rounded border border-[#ddd] bg-[#f7f7f7] p-2"
                        >
                          <video
                            src={video.url}
                            controls
                            className="max-h-[180px] w-full rounded bg-black"
                          />

                          <div className="mt-2 flex items-center justify-between gap-2">
                            <span className="min-w-0 truncate text-[12px] text-[#555]">
                              {video.name || "Uploaded video"}
                            </span>

                            <button
                              type="button"
                              onClick={() => handleRemoveVideo(video.id)}
                              aria-label="Remove video"
                              className="shrink-0 text-[#a60000] hover:text-red-800"
                            >
                              <FiTrash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <p className="mt-3 text-[12px] leading-5 text-[#777] sm:text-[13px]">
                  <strong>Note:</strong> Upload clear, high-quality photos for the best portfolio viewing experience.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM ACTION BAR */}
        <div className="flex flex-col-reverse gap-3 border-t border-[#e6e6e6] px-[14px] py-4 sm:flex-row sm:items-center sm:justify-end sm:gap-6 sm:px-7 lg:px-[38px]">
          <button
            type="button"
            onClick={handleSaveDraft}
            className="cursor-pointer text-center text-[15px] font-semibold text-[#970000] hover:text-[#780000] sm:text-[16px]"
          >
            Save Draft
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="flex h-[45px] w-full cursor-pointer items-center justify-center gap-2 rounded-[5px] bg-[#303030] px-5 text-[15px] font-semibold text-white hover:bg-[#222] sm:w-[158px] sm:text-[16px]"
          >
            Save Section
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSectionForm;
