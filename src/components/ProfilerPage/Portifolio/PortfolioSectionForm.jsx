import React, { useRef, useState } from "react";
import {
  FiArrowLeft,
  FiCalendar,
  FiImage,
  FiPlayCircle,
  FiSave,
  FiUploadCloud,
} from "react-icons/fi";

const MAX_ABOUT_LENGTH = 400;
const MAX_FILES = 4;

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

const PortfolioSectionForm = ({ onBack, onSave }) => {
  const photoInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const [eventTitle, setEventTitle] = useState("");
  const [serviceType, setServiceType] = useState("General Photography");
  const [eventType, setEventType] = useState("Corporate Event");
  const [eventDate, setEventDate] = useState("");
  const [aboutEvent, setAboutEvent] = useState("");

  const [featured, setFeatured] = useState(true);

  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);

  const handlePhotoChange = (event) => {
    const selectedFiles = Array.from(event.target.files || []);

    const remainingSlots = MAX_FILES - photos.length;

    const newPhotos = selectedFiles
      .slice(0, remainingSlots)
      .map((file) => ({
        id: `${file.name}-${file.lastModified}`,
        file,
        url: URL.createObjectURL(file),
      }));

    setPhotos((previousPhotos) => [
      ...previousPhotos,
      ...newPhotos,
    ]);

    event.target.value = "";
  };

  const handleVideoChange = (event) => {
    const selectedFiles = Array.from(event.target.files || []);

    setVideos((previousVideos) => [
      ...previousVideos,
      ...selectedFiles,
    ]);

    event.target.value = "";
  };

  const handleSave = () => {
    if (!eventTitle.trim()) {
      alert("Please enter Event Title");
      return;
    }

    const newSection = {
      id: Date.now(),

      title: eventTitle,

      serviceType,

      eventType,

      eventDate,

      aboutEvent,

      featured,

      photos,

      videos,
    };

    onSave(newSection);
  };

  return (
    <section className="w-full">

      {/* =========================================================
          PAGE HEADER
      ========================================================= */}
      <div className="mb-4 flex items-start justify-between gap-4">

        <div>
          <h1 className="text-[21px] font-semibold text-[#292929]">
            Manage Portfolio
          </h1>

          <p className="mt-[2px] text-[11px] text-[#999]">
            Create Structured event-based portfolio sections to showcase
            your best work and attract clients
          </p>
        </div>

        <button
          type="button"
          onClick={onBack}
          className="
            flex
            h-[31px]
            min-w-[210px]
            cursor-pointer
            items-center
            justify-center
            gap-2
            rounded-[4px]
            bg-[#a60000]
            px-4
            text-[11px]
            font-semibold
            text-white
            hover:bg-[#850000]
          "
        >
          <FiArrowLeft className="h-[13px] w-[13px]" />

          Back to Portfolio
        </button>
      </div>

      {/* =========================================================
          MAIN FORM CARD
      ========================================================= */}
      <div className="overflow-hidden rounded-[7px] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.03)]">

        {/* =======================================================
            FORM CONTENT
        ======================================================= */}
        <div className="px-[38px] pb-5 pt-[20px]">

          {/* =====================================================
              EVENT INFORMATION HEADER
          ===================================================== */}
          <div className="flex items-center justify-between border-b border-[#eeeeee] pb-[7px]">

            <h2 className="text-[16px] font-medium text-[#777]">
              Event Information
            </h2>

            {/* Featured */}
            <button
              type="button"
              onClick={() => setFeatured(!featured)}
              className="flex cursor-pointer items-center gap-2 text-[15px] text-[#666]"
            >
              <span>Featured</span>

              <span
                className={`
                  relative
                  h-[19px]
                  w-[31px]
                  rounded-full
                  transition
                  ${featured ? "bg-[#ffb000]" : "bg-[#c8c8c8]"}
                `}
              >
                <span
                  className={`
                    absolute
                    top-[2px]
                    h-[15px]
                    w-[15px]
                    rounded-full
                    bg-white
                    shadow
                    transition
                    ${featured ? "right-[2px]" : "left-[2px]"}
                  `}
                />
              </span>
            </button>

          </div>

          {/* =====================================================
              EVENT TITLE
          ===================================================== */}
          <div className="mt-[17px]">

            <label className="mb-[5px] block text-[11px] font-semibold text-[#333]">
              Event Title<span className="text-[#d00000]">*</span>
            </label>

            <input
              type="text"
              value={eventTitle}
              onChange={(event) => setEventTitle(event.target.value)}
              placeholder="Ex : Universal Media's Grand Launch Event 2026"
              className="
                h-[31px]
                w-full
                rounded-[4px]
                border
                border-[#c9c9c9]
                px-[10px]
                text-[10px]
                text-[#333]
                outline-none
                placeholder:text-[#999]
                focus:border-[#970000]
              "
            />
          </div>

          {/* =====================================================
              SERVICE TYPE + EVENT TYPE
          ===================================================== */}
          <div className="mt-[14px] grid grid-cols-1 gap-3 sm:grid-cols-2">

            {/* Service Type */}
            <div>
              <label className="mb-[5px] block text-[11px] font-semibold text-[#333]">
                Service Type<span className="text-[#d00000]">*</span>
              </label>

              <select
                value={serviceType}
                onChange={(event) => setServiceType(event.target.value)}
                className="
                  h-[31px]
                  w-full
                  cursor-pointer
                  rounded-[4px]
                  border
                  border-[#c9c9c9]
                  bg-white
                  px-[10px]
                  text-[10px]
                  text-[#555]
                  outline-none
                  focus:border-[#970000]
                "
              >
                {serviceTypes.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Event Type */}
            <div>
              <label className="mb-[5px] block text-[11px] font-semibold text-[#333]">
                Event Type<span className="text-[#d00000]">*</span>
              </label>

              <select
                value={eventType}
                onChange={(event) => setEventType(event.target.value)}
                className="
                  h-[31px]
                  w-full
                  cursor-pointer
                  rounded-[4px]
                  border
                  border-[#c9c9c9]
                  bg-white
                  px-[10px]
                  text-[10px]
                  text-[#555]
                  outline-none
                  focus:border-[#970000]
                "
              >
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* =====================================================
              EVENT DATE
          ===================================================== */}
          <div className="mt-[14px] max-w-[340px]">

            <label className="mb-[5px] block text-[11px] font-semibold text-[#333]">
              Event Date
            </label>

            <div className="relative">

              <input
                type="date"
                value={eventDate}
                onChange={(event) => setEventDate(event.target.value)}
                className="
                  h-[31px]
                  w-full
                  rounded-[4px]
                  border
                  border-[#c9c9c9]
                  px-[10px]
                  text-[10px]
                  text-[#555]
                  outline-none
                  focus:border-[#970000]
                "
              />

              <FiCalendar
                className="
                  pointer-events-none
                  absolute
                  right-[9px]
                  top-1/2
                  h-[13px]
                  w-[13px]
                  -translate-y-1/2
                  text-[#333]
                "
              />

            </div>
          </div>

          {/* =====================================================
              ABOUT EVENT
          ===================================================== */}
          <div className="mt-[14px]">

            <div className="mb-[5px] flex items-center justify-between">

              <label className="text-[11px] font-semibold text-[#333]">
                About Event
                <span className="ml-1 font-normal italic text-[#777]">
                  (Optional)
                </span>
              </label>

              <span className="text-[9px] text-[#333]">
                {aboutEvent.length} / {MAX_ABOUT_LENGTH} Characters
              </span>

            </div>

            <textarea
              value={aboutEvent}
              maxLength={MAX_ABOUT_LENGTH}
              onChange={(event) => setAboutEvent(event.target.value)}
              placeholder="Ex : Universal media hired us for this auspicious event, we are glad to..."
              className="
                h-[31px]
                min-h-[31px]
                w-full
                resize-none
                rounded-[4px]
                border
                border-[#c9c9c9]
                px-[10px]
                py-[8px]
                text-[10px]
                text-[#555]
                outline-none
                placeholder:text-[#999]
                focus:border-[#970000]
              "
            />

          </div>

          {/* =====================================================
              MEDIA UPLOAD HEADER
          ===================================================== */}
          <div className="mt-[20px] flex items-center justify-between border-b border-[#eeeeee] pb-[7px]">

            <h2 className="text-[16px] font-medium text-[#777]">
              Media Upload
            </h2>

            <button
              type="button"
              className="
                cursor-pointer
                text-[9px]
                text-[#333]
                underline
                underline-offset-2
              "
            >
              Grid Preview
            </button>

          </div>

          {/* =====================================================
              MEDIA UPLOAD AREA
          ===================================================== */}
          <div className="mt-[12px] grid grid-cols-1 gap-3 lg:grid-cols-[340px_1fr]">

            {/* ===================================================
                UPLOAD BOX
            =================================================== */}
            <div
              className="
                flex
                h-[170px]
                flex-col
                items-center
                justify-center
                rounded-[4px]
                border
                border-dashed
                border-[#777]
              "
            >

              {/* Upload Icon */}
              <div
                className="
                  mb-[8px]
                  flex
                  h-[39px]
                  w-[39px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#eeeeee]
                "
              >
                <FiUploadCloud className="h-[17px] w-[17px] text-[#e11]" />
              </div>

              <p className="text-[10px] text-[#777]">
                Upload photos, clips of the event
              </p>

              <p className="mt-[2px] text-[9px] text-[#999]">
                (.jpg, png, webp supported)
              </p>

              {/* Hidden Photo Input */}
              <input
                ref={photoInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handlePhotoChange}
              />

              {/* Hidden Video Input */}
              <input
                ref={videoInputRef}
                type="file"
                accept="video/*"
                multiple
                className="hidden"
                onChange={handleVideoChange}
              />

              {/* Upload Buttons */}
              <div className="mt-[11px] flex items-center gap-[8px]">

                <button
                  type="button"
                  onClick={() => photoInputRef.current?.click()}
                  className="
                    h-[16px]
                    min-w-[58px]
                    cursor-pointer
                    rounded-[2px]
                    bg-[#d83c3c]
                    px-[9px]
                    text-[7px]
                    font-semibold
                    text-white
                  "
                >
                  PHOTOS
                </button>

                <button
                  type="button"
                  onClick={() => videoInputRef.current?.click()}
                  className="
                    h-[16px]
                    min-w-[58px]
                    cursor-pointer
                    rounded-[2px]
                    border
                    border-[#bdbdbd]
                    bg-white
                    px-[9px]
                    text-[7px]
                    font-semibold
                    text-[#555]
                  "
                >
                  VIDEOS
                </button>

              </div>
            </div>

            {/* ===================================================
                MEDIA DIMENSION PREVIEWS
            =================================================== */}
            <div className="grid grid-cols-4 gap-[7px]">

              {/* 1080 x 1920 */}
              <div className="flex flex-col items-center">

                <div className="relative flex h-[77px] w-full items-center justify-center rounded-[3px] border border-[#c9c9c9] bg-white">

                  {photos[0]?.url ? (
                    <img
                      src={photos[0].url}
                      alt=""
                      className="h-full w-full rounded-[3px] object-cover"
                    />
                  ) : (
                    <FiImage className="h-[14px] w-[14px] text-[#777]" />
                  )}

                  <span className="absolute left-[4px] top-[4px] text-[6px] text-[#555]">
                    {photos.length > 0 ? "1" : "3"} images
                  </span>

                </div>

                <span className="mt-[5px] text-[7px] text-[#555]">
                  (1080 x 1920)
                </span>

              </div>

              {/* 1920 x 1080 */}
              <div className="flex flex-col items-center">

                <div className="flex h-[77px] w-full items-center justify-center rounded-[3px] border border-[#c9c9c9] bg-white">

                  {photos[1]?.url ? (
                    <img
                      src={photos[1].url}
                      alt=""
                      className="h-full w-full rounded-[3px] object-cover"
                    />
                  ) : (
                    <FiImage className="h-[14px] w-[14px] text-[#777]" />
                  )}

                </div>

                <span className="mt-[5px] text-[7px] text-[#555]">
                  (1920 x 1080)
                </span>

              </div>

              {/* 1080 x 1080 */}
              <div className="flex flex-col items-center">

                <div className="flex h-[77px] w-full items-center justify-center rounded-[3px] border border-[#c9c9c9] bg-white">

                  {photos[2]?.url ? (
                    <img
                      src={photos[2].url}
                      alt=""
                      className="h-full w-full rounded-[3px] object-cover"
                    />
                  ) : (
                    <FiImage className="h-[14px] w-[14px] text-[#777]" />
                  )}

                </div>

                <span className="mt-[5px] text-[7px] text-[#555]">
                  (1080 x 1080)
                </span>

              </div>

              {/* 1080 x 1080 */}
              <div className="flex flex-col items-center">

                <div className="flex h-[77px] w-full items-center justify-center rounded-[3px] border border-[#c9c9c9] bg-white">

                  {photos[3]?.url ? (
                    <img
                      src={photos[3].url}
                      alt=""
                      className="h-full w-full rounded-[3px] object-cover"
                    />
                  ) : (
                    <FiImage className="h-[14px] w-[14px] text-[#777]" />
                  )}

                </div>

                <span className="mt-[5px] text-[7px] text-[#555]">
                  (1080 x 1080)
                </span>

              </div>

            </div>
          </div>

          {/* =====================================================
              UPLOAD NOTE
          ===================================================== */}
          <p className="mt-[8px] max-w-[680px] text-[8px] leading-[13px] text-[#777]">
            <span className="font-medium">Note :</span> Kindly upload
            photos according to the mentioned dimensions for the best
            HD grid viewing experience for the clients.
          </p>

        </div>

        {/* =======================================================
            BOTTOM ACTION BAR
        ======================================================= */}
        <div className="flex items-center justify-end gap-8 border-t border-[#e6e6e6] px-[38px] py-[16px]">

          <button
            type="button"
            className="
              cursor-pointer
              text-[12px]
              font-semibold
              text-[#a60000]
              hover:text-[#780000]
            "
          >
            Save Draft
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="
              flex
              h-[31px]
              min-w-[137px]
              cursor-pointer
              items-center
              justify-center
              gap-2
              rounded-[5px]
              bg-[#303030]
              px-5
              text-[11px]
              font-semibold
              text-white
              hover:bg-[#222]
            "
          >
            <FiSave className="h-[13px] w-[13px]" />
            Save Section
          </button>

        </div>

      </div>
    </section>
  );
};

export default PortfolioSectionForm;