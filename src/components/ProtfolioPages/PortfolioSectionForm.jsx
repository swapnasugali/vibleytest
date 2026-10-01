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
    <section
      className="w-full"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* PAGE HEADER */}
      <div
        className="
          mx-auto
          mb-[20px]
          flex
          w-[calc(100%-24px)]
          max-w-[1100px]
          items-start
          justify-between
          gap-4
          px-0
          sm:w-[calc(100%-32px)]
        "
      >
        <div className="min-w-0">
          <h1
            className="
              text-[34px]
              font-semibold
              leading-[1.2]
              text-[#292929]
              sm:text-[30px]
            "
          >
            Manage Portfolio
          </h1>

          <p
            className="
              mt-[4px]
              max-w-[800px]
              text-[18px]
              leading-[21px]
              text-[#9F9F9F]
              sm:text-[15px]
            "
          >
            Create Structured event-based portfolio sections to showcase
            your best work and attract clients
          </p>
        </div>

        <button
          type="button"
          onClick={onBack}
          className="
            flex
            h-[57px]
            min-w-[365px]
            shrink-0
            cursor-pointer
            items-center
            justify-center
            gap-[6px]
            rounded-[4px]
            bg-[#a60000]
            px-[10px]
            text-[18px]
            font-semibold
            text-white
            hover:bg-[#850000]
          "
        >
          <FiArrowLeft className="h-[12px] w-[12px]" />
          Back to Portfolio
        </button>
      </div>

      {/* MAIN CARD */}
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
            px-[18px]
            pb-[18px]
            pt-[18px]
            sm:px-[38px]
            sm:pb-[20px]
            sm:pt-[20px]
          "
        >
          {/* EVENT INFORMATION */}
          <div
            className="
              flex
              items-center
              justify-between
              gap-3
              border-b
              border-[#eeeeee]
              pb-[7px]
            "
          >
            <h2
              className="
                text-[21px]
                font-medium
                text-[#737373]
                sm:text-[26px]
              "
            >
              Event Information
            </h2>

            <button
              type="button"
              onClick={() => setFeatured(!featured)}
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
                  text-[20px]
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
              onChange={(event) =>
                setEventTitle(event.target.value)
              }
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
                onChange={(event) =>
                  setServiceType(event.target.value)
                }
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
                onChange={(event) =>
                  setEventType(event.target.value)
                }
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

          {/* EVENT DATE */}
          <div className="mt-[13px] max-w-[347px]">
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

            <input
              type="date"
              value={eventDate}
              onChange={(event) =>
                setEventDate(event.target.value)
              }
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

          {/* ABOUT EVENT */}
          <div className="mt-[13px]">
            <div
              className="
                mb-[5px]
                flex
                items-center
                justify-between
                gap-2
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
              </label>``

              <span className="shrink-0 text-[13px] text-[#333]">
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
                h-[31px]
                min-h-[31px]
                w-full
                resize-y
                rounded-[4px]
                border
                border-[#c9c9c9]
                px-[10px]
                py-[5px]
                text-[13px]
                text-[#555]
                outline-none
                placeholder:text-[#999]
                focus:border-[#970000]
              "
            />
          </div>

          {/* MEDIA HEADER */}
          <div
            className="
              mt-[18px]
              flex
              items-center
              justify-between
              border-b
              border-[#eeeeee]
              pb-[7px]
            "
          >
            <h2
              className="
                text-[26px]
                font-medium
                text-[#777]
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
                outline-none
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
              flex-col
              items-start
              gap-[14px]
              lg:flex-row
            "
          >
            {/* UPLOAD BOX */}
            <div
              className="
                flex
                h-[292px]
                w-full
                max-w-[500px]
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
                <FiUploadCloud
                  className="h-[16px] w-[16px] text-[#e11]"
                />
              </div>

              <p className="text-[16px] text-[#6D6D6D]">
                Upload photos, clips of the event
              </p>

              <p className="mt-[1px] text-[13px] text-[#6D6D6D]">
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

              <div className="mt-[10px] flex items-center gap-[7px]">
                <button
                  type="button"
                  onClick={() =>
                    photoInputRef.current?.click()
                  }
                  className="
                    h-[27px]
                    min-w-[99px]
                    cursor-pointer
                    rounded-[2px]
                    bg-[#d83c3c]
                    px-[8px]
                    text-[12px]
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
                    h-[27px]
                    min-w-[94px]
                    cursor-pointer
                    rounded-[2px]
                    border
                    border-[#bdbdbd]
                    bg-white
                    px-[8px]
                    text-[12px]
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
                    3 images
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
                  text-[14px]
                  font-light
                  leading-[24px]
                  text-[#6D6D6D]
                "
              >
                <span className="font-medium">Note :</span>{" "}
                Kindly upload the photos according to the mentioned
                dimensions for the best HD grid viewing experience
                for the clients.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION BAR */}
        <div
          className="
            flex
            items-center
            justify-end
            gap-[26px]
            border-t
            border-[#e6e6e6]
            px-[18px]
            py-[12px]
            sm:px-[38px]
            sm:py-[12px]
          "
        >
          <button
            type="button"
            className="
              cursor-pointer
              text-[16px]
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
              min-w-[158px]
              cursor-pointer
              items-center
              justify-center
              gap-2
              rounded-[5px]
              bg-[#303030]
              px-5
              text-[16px]
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