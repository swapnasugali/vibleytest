import React, { useRef, useState } from "react";
import {
  FiArrowLeft,
  FiImage,
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

  /* =========================================================
      PHOTO UPLOAD
  ========================================================= */
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

  /* =========================================================
      VIDEO UPLOAD
  ========================================================= */
  const handleVideoChange = (event) => {
    const selectedFiles = Array.from(event.target.files || []);

    setVideos((previousVideos) => [
      ...previousVideos,
      ...selectedFiles,
    ]);

    event.target.value = "";
  };

  /* =========================================================
      SAVE
  ========================================================= */
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
    <section
      className="w-full"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* =====================================================
          PAGE HEADER
          SAME 96% WIDTH AS MAIN CARD
      ===================================================== */}
      <div
        className="
          mx-auto
          mb-4
          flex
          w-[96%]
          items-start
          justify-between
          gap-4
        "
      >
        <div>
          <h1 className="text-[34px] font-semibold text-[#292929]">
            Manage Portfolio
          </h1>

          <p className="mt-[2px] text-[18px] text-[#9F9F9F]">
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

      {/* =====================================================
          MAIN CARD
          SAME 96% WIDTH
      ===================================================== */}
      <div
        className="
          mx-auto
          w-[96%]
          overflow-hidden
          rounded-[7px]
          bg-white
          shadow-[0_1px_4px_rgba(0,0,0,0.03)]
        "
      >
        <div className="px-[38px] pb-5 pt-[20px]">

          {/* =================================================
              EVENT INFORMATION
          ================================================= */}
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-[#eeeeee]
              pb-[7px]
            "
          >
            <h2 className="text-[26px] font-medium text-[#737373]">
              Event Information
            </h2>

            {/* FEATURED OUTLINED BOX */}
            <button
              type="button"
              onClick={() => setFeatured(!featured)}
              className="
                flex
                h-[39px]
                w-[181px]
                cursor-pointer
                items-center
                justify-between
                rounded-[4px]
                border
                border-[#000000]
                bg-white
                px-[13px]
              "
            >
              <span
                className="
                  text-[26px]
                  font-medium
                  leading-none
                  text-[#737373]
                "
              >
                Featured
              </span>

              <span
                className={`
                  relative
                  h-[20px]
                  w-[36px]
                  shrink-0
                  rounded-full
                  transition
                  ${
                    featured
                      ? "bg-[#ffb000]"
                      : "bg-[#c8c8c8]"
                  }
                `}
              >
                <span
                  className={`
                    absolute
                    top-[2px]
                    h-[16px]
                    w-[16px]
                    rounded-full
                    bg-white
                    shadow-[0_1px_3px_rgba(0,0,0,0.25)]
                    transition-all
                    ${
                      featured
                        ? "right-[2px]"
                        : "left-[2px]"
                    }
                  `}
                />
              </span>
            </button>
          </div>

          {/* =================================================
              EVENT TITLE
          ================================================= */}
          <div className="mt-[17px]">
            <label
              className="
                mb-[5px]
                block
                text-[18px]
                font-semibold
                text-[#333]
              "
            >
              Event Title
              <span className="text-[#d00000]">*</span>
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
                text-[16px]
                text-[#333]
                outline-none
                placeholder:text-[#999]
                focus:border-[#970000]
              "
            />
          </div>

          {/* =================================================
              SERVICE + EVENT TYPE
          ================================================= */}
          <div
            className="
              mt-[14px]
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
            "
          >
            <div>
              <label
                className="
                  mb-[5px]
                  block
                  text-[18px]
                  font-semibold
                  text-[#333]
                "
              >
                Service Type
                <span className="text-[#d00000]">*</span>
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
                  text-[16px]
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

            <div>
              <label
                className="
                  mb-[5px]
                  block
                  text-[18px]
                  font-semibold
                  text-[#333]
                "
              >
                Event Type
                <span className="text-[#d00000]">*</span>
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
                  text-[16px]
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

          {/* =================================================
              EVENT DATE
          ================================================= */}
          <div className="mt-[14px] max-w-[340px]">
            <label
              className="
                mb-[5px]
                block
                text-[18px]
                font-semibold
                text-[#333]
              "
            >
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
                  text-[16px]
                  text-[#555]
                  outline-none
                  focus:border-[#970000]
                "
              />
            </div>
          </div>

          {/* =================================================
              ABOUT EVENT
          ================================================= */}
          <div className="mt-[14px]">
            <div
              className="
                mb-[5px]
                flex
                items-center
                justify-between
              "
            >
              <label
                className="
                  text-[18px]
                  font-semibold
                  text-[#333]
                "
              >
                About Event

                <span
                  className="
                    ml-1
                    font-normal
                    italic
                    text-[#777]
                  "
                >
                  (Optional)
                </span>
              </label>

              <span className="text-[18px] text-[#333]">
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
                text-[16px]
                text-[#555]
                outline-none
                placeholder:text-[#999]
                focus:border-[#970000]
              "
            />
          </div>

          {/* =================================================
              MEDIA UPLOAD HEADER
          ================================================= */}
          <div
            className="
              mt-[20px]
              flex
              items-center
              justify-between
              border-b
              border-[#eeeeee]
              pb-[7px]
            "
          >
            <h2 className="text-[26px] font-medium text-[#777]">
              Media Upload
            </h2>

            {/* GRID PREVIEW - NO OUTLINE */}
            <button
              type="button"
              className="
                m-0
                cursor-pointer
                border-0
                bg-transparent
                p-0
                text-[16px]
                text-[#2E2E2E]
                underline
                underline-offset-2
                outline-none
              "
            >
              Grid Preview
            </button>
          </div>

          {/* =================================================
              MEDIA AREA
          ================================================= */}
          <div
            className="
              mt-[12px]
              flex
              items-start
              gap-[20px]
            "
          >
            {/* LEFT UPLOAD BOX */}
            <div
              className="
                flex
                h-[262px]
                w-[586px]
                shrink-0
                flex-col
                items-center
                justify-center
                rounded-[4px]
                border
                border-dashed
                border-[#777]
              "
            >
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
                <FiUploadCloud
                  className="
                    h-[17px]
                    w-[17px]
                    text-[#e11]
                  "
                />
              </div>

              <p className="text-[16.77px] text-[#6D6D6D]">
                Upload photos, clips of the event
              </p>

              <p className="mt-[2px] text-[13.72px] text-[#6D6D6D]">
                (.jpg, png, webp supported)
              </p>

              <input
                ref={photoInputRef}
                type="file"
                accept="image/*"
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

              <div
                className="
                  mt-[11px]
                  flex
                  items-center
                  gap-[8px]
                "
              >
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
                    text-[12px]
                    font-bold
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
                    text-[12px]
                    font-bold
                    text-[#555]
                  "
                >
                  VIDEOS
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col">
              <div
                className="
                  flex
                  items-start
                  gap-[12px]
                "
              >
                {/* BOX 1 */}
                <div
                  className="
                    relative
                    flex
                    h-[131px]
                    w-[131px]
                    shrink-0
                    flex-col
                    items-center
                    rounded-[4px]
                    border
                    border-[#a9a9a9]
                    bg-white
                  "
                >
                  <span
                    className="
                      absolute
                      left-[8px]
                      top-[7px]
                      text-[10px]
                      font-medium
                      leading-none
                      text-[#000000]
                    "
                  >
                    3 images
                  </span>

                  <div
                    className="
                      absolute
                      top-[28px]
                      flex
                      h-[68px]
                      w-[45px]
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[3px]
                      bg-[#eeeeee]
                    "
                  >
                    {photos.length > 0 ? (
                      <div className="flex h-full w-full gap-[1px]">
                        {photos.slice(0, 3).map((photo) => (
                          <img
                            key={photo.id}
                            src={photo.url}
                            alt=""
                            className="
                              h-full
                              min-w-0
                              flex-1
                              object-cover
                            "
                          />
                        ))}
                      </div>
                    ) : (
                      <FiImage
                        className="
                          h-[20px]
                          w-[20px]
                          text-[#777]
                        "
                      />
                    )}
                  </div>

                  <span
                    className="
                      absolute
                      bottom-[10px]
                      whitespace-nowrap
                      text-[12px]
                      font-medium
                      leading-none
                      text-[#737373]
                    "
                  >
                    (1080 X 1920)
                  </span>
                </div>

                {/* BOX 2 */}
                <div
                  className="
                    relative
                    flex
                    h-[131px]
                    w-[131px]
                    shrink-0
                    flex-col
                    items-center
                    rounded-[4px]
                    border
                    border-[#a9a9a9]
                    bg-white
                  "
                >
                  <div
                    className="
                      absolute
                      top-[35px]
                      flex
                      h-[50px]
                      w-[70px]
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[3px]
                      bg-[#eeeeee]
                    "
                  >
                    {photos[3]?.url ? (
                      <img
                        src={photos[3].url}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <FiImage
                        className="
                          h-[20px]
                          w-[20px]
                          text-[#777]
                        "
                      />
                    )}
                  </div>

                  <span
                    className="
                      absolute
                      bottom-[10px]
                      whitespace-nowrap
                      text-[12px]
                      font-medium
                      leading-none
                      text-[#737373]
                    "
                  >
                    (1920 X 1080)
                  </span>
                </div>

                {/* BOX 3 */}
                <div
                  className="
                    relative
                    flex
                    h-[131px]
                    w-[131px]
                    shrink-0
                    flex-col
                    items-center
                    rounded-[4px]
                    border
                    border-[#a9a9a9]
                    bg-white
                  "
                >
                  <div
                    className="
                      absolute
                      top-[35px]
                      flex
                      h-[50px]
                      w-[50px]
                      items-center
                      justify-center
                      rounded-[4px]
                      bg-[#eeeeee]
                    "
                  >
                    <FiImage
                      className="
                        h-[22px]
                        w-[22px]
                        text-[#777]
                      "
                    />
                  </div>

                  <span
                    className="
                      absolute
                      bottom-[10px]
                      whitespace-nowrap
                      text-[12px]
                      font-medium
                      leading-none
                      text-[#737373]
                    "
                  >
                    (1080 X 1080)
                  </span>
                </div>

                {/* BOX 4 */}
                <div
                  className="
                    relative
                    flex
                    h-[131px]
                    w-[131px]
                    shrink-0
                    flex-col
                    items-center
                    rounded-[4px]
                    border
                    border-[#a9a9a9]
                    bg-white
                  "
                >
                  <div
                    className="
                      absolute
                      top-[35px]
                      flex
                      h-[50px]
                      w-[50px]
                      items-center
                      justify-center
                      rounded-[4px]
                      bg-[#eeeeee]
                    "
                  >
                    <FiImage
                      className="
                        h-[22px]
                        w-[22px]
                        text-[#777]
                      "
                    />
                  </div>

                  <span
                    className="
                      absolute
                      bottom-[10px]
                      whitespace-nowrap
                      text-[12px]
                      font-medium
                      leading-none
                      text-[#737373]
                    "
                  >
                    (1080 X 1080)
                  </span>
                </div>
              </div>

              {/* NOTE */}
              <p
                className="
                  mt-[18px]
                  max-w-[560px]
                  text-[14px]
                  font-light
                  leading-[22px]
                  text-[#6D6D6D]
                "
              >
                <span className="font-medium">
                  Note :
                </span>{" "}
                Kindly upload the photos according to the mentioned
                dimensions for the best HD grid viewing experience
                for the clients.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM ACTION BAR
        ===================================================== */}
        <div
          className="
            flex
            items-center
            justify-end
            gap-8
            border-t
            border-[#e6e6e6]
            px-[38px]
            py-[16px]
          "
        >
          <button
            type="button"
            className="
              cursor-pointer
              text-[22.76px]
              font-semibold
              text-[#970000]
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
              h-[54px]
              min-w-[236px]
              cursor-pointer
              items-center
              justify-center
              gap-2
              rounded-[5px]
              bg-[#303030]
              px-5
              text-[22.76px]
              font-semibold
              text-[#FFFFFF]
              hover:bg-[#222]
            "
          >
            Save Section
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSectionForm;