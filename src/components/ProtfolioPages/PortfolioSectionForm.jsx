import React, { useEffect, useRef, useState } from "react";
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

const PortfolioSectionForm = ({
  initialData = null,
  onBack,
  onSave,
}) => {
  const photoInputRef = useRef(null);
  const videoInputRef = useRef(null);

  /* =====================================================
     FORM STATE
  ===================================================== */

  const [eventTitle, setEventTitle] = useState("");
  const [serviceType, setServiceType] = useState(
    "General Photography"
  );
  const [eventType, setEventType] = useState(
    "Corporate Event"
  );
  const [eventDate, setEventDate] = useState("");
  const [aboutEvent, setAboutEvent] = useState("");
  const [featured, setFeatured] = useState(true);

  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);

  /* =====================================================
     LOAD EDIT DATA
  ===================================================== */

  useEffect(() => {
    if (!initialData) {
      setEventTitle("");
      setServiceType("General Photography");
      setEventType("Corporate Event");
      setEventDate("");
      setAboutEvent("");
      setFeatured(true);
      setPhotos([]);
      setVideos([]);

      return;
    }

    setEventTitle(initialData.title || "");

    setServiceType(
      initialData.serviceType ||
        "General Photography"
    );

    setEventType(
      initialData.eventType ||
        "Corporate Event"
    );

    setEventDate(
      initialData.eventDate || ""
    );

    setAboutEvent(
      initialData.aboutEvent || ""
    );

    setFeatured(
      initialData.featured ?? true
    );

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
  }, [initialData]);

  /* =====================================================
     PHOTO UPLOAD
  ===================================================== */

  const handlePhotoChange = (event) => {
    const selectedFiles = Array.from(
      event.target.files || []
    );

    const remainingSlots =
      MAX_FILES - photos.length;

    const newPhotos = selectedFiles
      .slice(0, remainingSlots)
      .map((file) => ({
        id: `${file.name}-${file.lastModified}-${Date.now()}`,
        file,
        url: URL.createObjectURL(file),
      }));

    setPhotos((previousPhotos) => [
      ...previousPhotos,
      ...newPhotos,
    ]);

    event.target.value = "";
  };

  /* =====================================================
     VIDEO UPLOAD
  ===================================================== */

  const handleVideoChange = (event) => {
    const selectedFiles = Array.from(
      event.target.files || []
    );

    const newVideos = selectedFiles.map(
      (file) => ({
        id: `${file.name}-${file.lastModified}-${Date.now()}`,
        file,
        url: URL.createObjectURL(file),
      })
    );

    setVideos((previousVideos) => [
      ...previousVideos,
      ...newVideos,
    ]);

    event.target.value = "";
  };

  /* =====================================================
     SAVE
  ===================================================== */

  const handleSave = () => {
    if (!eventTitle.trim()) {
      alert("Please enter Event Title");
      return;
    }

    const sectionData = {
      id:
        initialData?.id ||
        Date.now(),

      title: eventTitle.trim(),

      serviceType,

      eventType,

      eventDate,

      aboutEvent,

      featured,

      photos,

      videos,
    };

    onSave(sectionData);
  };

  return (
    <section
      className="w-full min-w-0 overflow-x-hidden"
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <div
        className="
          mx-auto
          mb-[20px]
          flex
          w-[calc(100%-24px)]
          max-w-[1100px]
          flex-col
          gap-[14px]
          sm:w-[calc(100%-32px)]
          sm:flex-row
          sm:items-start
          sm:justify-between
          sm:gap-4
        "
      >
        {/* TITLE */}

        <div className="min-w-0 flex-1">
          <h1
            className="
              break-words
              text-[28px]
              font-semibold
              leading-[1.2]
              text-[#292929]
              sm:text-[30px]
              lg:text-[34px]
            "
          >
            Manage Portfolio
          </h1>

          <p
            className="
              mt-[4px]
              max-w-[800px]
              break-words
              text-[14px]
              leading-[20px]
              text-[#9F9F9F]
              sm:text-[15px]
              lg:text-[18px]
              lg:leading-[21px]
            "
          >
            Create Structured event-based portfolio
            sections to showcase your best work and
            attract clients
          </p>
        </div>

        {/* BACK BUTTON */}

        <button
          type="button"
          onClick={onBack}
          className="
            flex
            h-[45px]
            w-full
            shrink-0
            cursor-pointer
            items-center
            justify-center
            gap-[6px]
            rounded-[4px]
            bg-[#a60000]
            px-[14px]
            text-[15px]
            font-semibold
            text-white
            hover:bg-[#850000]
            sm:h-[50px]
            sm:w-[240px]
            sm:text-[16px]
            lg:h-[57px]
            lg:w-[300px]
            lg:text-[18px]
            xl:w-[365px]
          "
        >
          <FiArrowLeft className="h-[14px] w-[14px] shrink-0" />

          <span>Back to Portfolio</span>
        </button>
      </div>

      {/* =================================================
          MAIN CARD
      ================================================= */}

      <div
        className="
          mx-auto
          w-[calc(100%-24px)]
          max-w-[1100px]
          overflow-hidden
          rounded-[7px]
          bg-white
          shadow-[0_1px_4px_rgba(0,0,0,0.03)]
          sm:w-[calc(100%-32px)]
        "
      >
        {/* FORM CONTENT */}

        <div
          className="
            px-[14px]
            pb-[18px]
            pt-[18px]
            sm:px-[28px]
            sm:pb-[20px]
            sm:pt-[20px]
            lg:px-[38px]
          "
        >
          {/* EVENT INFORMATION */}

          <div
            className="
              flex
              flex-col
              items-start
              gap-[10px]
              border-b
              border-[#eeeeee]
              pb-[8px]
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:gap-3
            "
          >
            <h2
              className="
                text-[21px]
                font-medium
                text-[#737373]
                sm:text-[24px]
                lg:text-[26px]
              "
            >
              Event Information
            </h2>

            <button
              type="button"
              onClick={() =>
                setFeatured((previous) => !previous)
              }
              className="
                flex
                h-[34px]
                w-[151px]
                shrink-0
                cursor-pointer
                items-center
                justify-between
                rounded-[4px]
                border
                border-[#000000]
                bg-white
                px-[10px]
              "
            >
              <span
                className="
                  text-[16px]
                  font-medium
                  leading-none
                  text-[#737373]
                  sm:text-[18px]
                "
              >
                Featured
              </span>

              <span
                className={`
                  relative
                  h-[18px]
                  w-[31px]
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
                    h-[14px]
                    w-[14px]
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

          {/* EVENT TITLE */}

          <div className="mt-[14px]">
            <label
              className="
                mb-[5px]
                block
                text-[16px]
                font-semibold
                text-[#333]
                sm:text-[18px]
              "
            >
              Event Title
              <span className="text-[#d00000]">
                *
              </span>
            </label>

            <input
              type="text"
              value={eventTitle}
              onChange={(event) =>
                setEventTitle(event.target.value)
              }
              placeholder="Ex : Universal Media's Grand Launch Event 2026"
              className="
                h-[36px]
                w-full
                min-w-0
                rounded-[4px]
                border
                border-[#c9c9c9]
                px-[10px]
                text-[14px]
                text-[#333]
                outline-none
                placeholder:text-[#999]
                focus:border-[#970000]
                sm:h-[31px]
                sm:text-[16px]
              "
            />
          </div>

          {/* SERVICE TYPE + EVENT TYPE */}

          <div
            className="
              mt-[13px]
              grid
              grid-cols-1
              gap-[12px]
              sm:grid-cols-2
            "
          >
            <div className="min-w-0">
              <label
                className="
                  mb-[5px]
                  block
                  text-[16px]
                  font-semibold
                  text-[#333]
                  sm:text-[18px]
                "
              >
                Service Type
                <span className="text-[#d00000]">
                  *
                </span>
              </label>

              <select
                value={serviceType}
                onChange={(event) =>
                  setServiceType(event.target.value)
                }
                className="
                  h-[36px]
                  w-full
                  min-w-0
                  cursor-pointer
                  rounded-[4px]
                  border
                  border-[#c9c9c9]
                  bg-white
                  px-[10px]
                  text-[14px]
                  text-[#555]
                  outline-none
                  focus:border-[#970000]
                  sm:h-[31px]
                  sm:text-[16px]
                "
              >
                {serviceTypes.map((service) => (
                  <option
                    key={service}
                    value={service}
                  >
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="min-w-0">
              <label
                className="
                  mb-[5px]
                  block
                  text-[16px]
                  font-semibold
                  text-[#333]
                  sm:text-[18px]
                "
              >
                Event Type
                <span className="text-[#d00000]">
                  *
                </span>
              </label>

              <select
                value={eventType}
                onChange={(event) =>
                  setEventType(event.target.value)
                }
                className="
                  h-[36px]
                  w-full
                  min-w-0
                  cursor-pointer
                  rounded-[4px]
                  border
                  border-[#c9c9c9]
                  bg-white
                  px-[10px]
                  text-[14px]
                  text-[#555]
                  outline-none
                  focus:border-[#970000]
                  sm:h-[31px]
                  sm:text-[16px]
                "
              >
                {eventTypes.map((type) => (
                  <option
                    key={type}
                    value={type}
                  >
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* EVENT DATE */}

          <div className="mt-[13px] w-full max-w-[347px]">
            <label
              className="
                mb-[5px]
                block
                text-[16px]
                font-semibold
                text-[#333]
                sm:text-[18px]
              "
            >
              Event Date
            </label>

            <input
              type="date"
              value={eventDate}
              onChange={(event) =>
                setEventDate(event.target.value)
              }
              className="
                h-[36px]
                w-full
                rounded-[4px]
                border
                border-[#c9c9c9]
                px-[10px]
                text-[14px]
                text-[#555]
                outline-none
                focus:border-[#970000]
                sm:h-[31px]
                sm:text-[16px]
              "
            />
          </div>

          {/* ABOUT EVENT */}

          <div className="mt-[13px]">
            <div
              className="
                mb-[5px]
                flex
                flex-col
                items-start
                gap-[4px]
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:gap-2
              "
            >
              <label
                className="
                  text-[16px]
                  font-semibold
                  text-[#333]
                  sm:text-[18px]
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

              <span className="shrink-0 text-[12px] text-[#333] sm:text-[13px]">
                {aboutEvent.length} / {MAX_ABOUT_LENGTH} Characters
              </span>
            </div>

            <textarea
              value={aboutEvent}
              maxLength={MAX_ABOUT_LENGTH}
              onChange={(event) =>
                setAboutEvent(event.target.value)
              }
              placeholder="Ex : Universal media hired us for this auspicious event, we are glad to..."
              className="
                min-h-[55px]
                w-full
                resize-y
                rounded-[4px]
                border
                border-[#c9c9c9]
                px-[10px]
                py-[7px]
                text-[13px]
                text-[#555]
                outline-none
                placeholder:text-[#999]
                focus:border-[#970000]
                sm:h-[31px]
                sm:min-h-[31px]
              "
            />
          </div>

          {/* MEDIA HEADER */}

          <div
            className="
              mt-[18px]
              flex
              flex-col
              items-start
              gap-[5px]
              border-b
              border-[#eeeeee]
              pb-[7px]
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <h2
              className="
                text-[22px]
                font-medium
                text-[#777]
                sm:text-[26px]
              "
            >
              Media Upload
            </h2>

            <button
              type="button"
              className="
                m-0
                cursor-pointer
                border-0
                bg-transparent
                p-0
                text-[13px]
                text-[#2E2E2E]
                underline
                underline-offset-2
              "
            >
              Grid Preview
            </button>
          </div>

          {/* MEDIA AREA */}

          <div
            className="
              mt-[12px]
              flex
              min-w-0
              flex-col
              items-stretch
              gap-[14px]
              lg:flex-row
              lg:items-start
            "
          >
            {/* UPLOAD BOX */}

            <div
              className="
                flex
                min-h-[250px]
                w-full
                shrink-0
                flex-col
                items-center
                justify-center
                rounded-[4px]
                border
                border-dashed
                border-[#777]
                px-[12px]
                sm:min-h-[292px]
                lg:max-w-[500px]
              "
            >
              <div
                className="
                  mb-[7px]
                  flex
                  h-[34px]
                  w-[34px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#eeeeee]
                "
              >
                <FiUploadCloud className="h-[16px] w-[16px] text-[#e11]" />
              </div>

              <p className="text-center text-[14px] text-[#6D6D6D] sm:text-[16px]">
                Upload photos, clips of the event
              </p>

              <p className="mt-[1px] text-center text-[12px] text-[#6D6D6D] sm:text-[13px]">
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

              <div className="mt-[10px] flex w-full max-w-[210px] items-center gap-[7px]">
                <button
                  type="button"
                  onClick={() =>
                    photoInputRef.current?.click()
                  }
                  className="
                    h-[32px]
                    min-w-0
                    flex-1
                    cursor-pointer
                    rounded-[2px]
                    bg-[#d83c3c]
                    px-[8px]
                    text-[11px]
                    font-bold
                    text-white
                  "
                >
                  PHOTOS
                </button>

                <button
                  type="button"
                  onClick={() =>
                    videoInputRef.current?.click()
                  }
                  className="
                    h-[32px]
                    min-w-0
                    flex-1
                    cursor-pointer
                    rounded-[2px]
                    border
                    border-[#bdbdbd]
                    bg-white
                    px-[8px]
                    text-[11px]
                    font-bold
                    text-[#555]
                  "
                >
                  VIDEOS
                </button>
              </div>
            </div>

            {/* GRID PREVIEW */}

            <div className="min-w-0 flex-1">
              <div
                className="
                  grid
                  w-full
                  grid-cols-2
                  gap-[8px]
                  sm:grid-cols-4
                "
              >
                {/* BOX 1 */}

                <div
                  className="
                    relative
                    flex
                    h-[98px]
                    min-w-0
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
                      left-[6px]
                      top-[5px]
                      text-[7px]
                      font-medium
                      leading-none
                      text-[#000]
                    "
                  >
                    {photos.length} images
                  </span>

                  <div
                    className="
                      absolute
                      top-[25px]
                      flex
                      h-[35px]
                      w-[27px]
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[2px]
                      bg-[#eeeeee]
                    "
                  >
                    {photos.length > 0 ? (
                      <div className="flex h-full w-full gap-[1px]">
                        {photos
                          .slice(0, 3)
                          .map((photo) => (
                            <img
                              key={photo.id}
                              src={
                                photo.url
                              }
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
                      <FiImage className="h-[15px] w-[15px] text-[#777]" />
                    )}
                  </div>

                  <span
                    className="
                      absolute
                      bottom-[7px]
                      whitespace-nowrap
                      text-[8px]
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
                    h-[98px]
                    min-w-0
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
                      top-[24px]
                      flex
                      h-[27px]
                      w-[38px]
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[2px]
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
                      <FiImage className="h-[15px] w-[15px] text-[#777]" />
                    )}
                  </div>

                  <span
                    className="
                      absolute
                      bottom-[7px]
                      whitespace-nowrap
                      text-[8px]
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
                    h-[98px]
                    min-w-0
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
                      top-[24px]
                      flex
                      h-[27px]
                      w-[27px]
                      items-center
                      justify-center
                      rounded-[3px]
                      bg-[#eeeeee]
                    "
                  >
                    <FiImage className="h-[15px] w-[15px] text-[#777]" />
                  </div>

                  <span
                    className="
                      absolute
                      bottom-[7px]
                      whitespace-nowrap
                      text-[8px]
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
                    h-[98px]
                    min-w-0
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
                      top-[24px]
                      flex
                      h-[27px]
                      w-[27px]
                      items-center
                      justify-center
                      rounded-[3px]
                      bg-[#eeeeee]
                    "
                  >
                    <FiImage className="h-[15px] w-[15px] text-[#777]" />
                  </div>

                  <span
                    className="
                      absolute
                      bottom-[7px]
                      whitespace-nowrap
                      text-[8px]
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
                  mt-[10px]
                  text-[12px]
                  font-light
                  leading-[20px]
                  text-[#6D6D6D]
                  sm:text-[14px]
                  sm:leading-[24px]
                "
              >
                <span className="font-medium">
                  Note :
                </span>{" "}
                Kindly upload the photos according
                to the mentioned dimensions for the
                best HD grid viewing experience for
                the clients.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM ACTION BAR
        ================================================= */}

        <div
          className="
            flex
            flex-col
            items-stretch
            gap-[12px]
            border-t
            border-[#e6e6e6]
            px-[14px]
            py-[12px]
            sm:flex-row
            sm:items-center
            sm:justify-end
            sm:gap-[20px]
            sm:px-[28px]
            lg:px-[38px]
          "
        >
          <button
            type="button"
            className="
              cursor-pointer
              text-center
              text-[15px]
              font-semibold
              text-[#970000]
              hover:text-[#780000]
              sm:text-[18px]
            "
          >
            Save Draft
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="
              flex
              h-[45px]
              w-full
              cursor-pointer
              items-center
              justify-center
              gap-2
              rounded-[5px]
              bg-[#303030]
              px-5
              text-[15px]
              font-semibold
              text-white
              hover:bg-[#222]
              sm:w-[158px]
              sm:text-[16px]
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