import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlay, FaTimes } from "react-icons/fa";

// =====================================================
// PORTFOLIO DATA
// =====================================================

const portfolioData = {
  // ===================================================
  // PHOTOGRAPHY
  // ===================================================

  photography: {
    images: [
     "https://res.cloudinary.com/porwmjke/image/upload/v1791780861/event11.png",
     "https://res.cloudinary.com/porwmjke/image/upload/v1791546385/event22.png",
     "https://res.cloudinary.com/porwmjke/image/upload/v1791780861/event33.png",
     "https://res.cloudinary.com/porwmjke/image/upload/v1791780861/event44.png",
     "https://res.cloudinary.com/porwmjke/image/upload/v1791780861/event55.png"

    ],

    video: "https://res.cloudinary.com/porwmjke/video/upload/v1791781098/corportae-photography-video.mp4",

    heading: (
      <>
        Corporate
        <br />
        Gala 2026
      </>
    ),

    paragraph1:
      "The Corporate Gala 2026, Bangalore — proudly hosted six leading MNCs and featuring 100+ startups alongside 20 top enterprises in the city's prime business district — was professionally captured and curated by our team.",

    paragraph2:
      "From keynote moments to networking highlights, every frame was documented with precision, delivering impactful visual storytelling for a prestigious corporate gathering.",
  },

  // ===================================================
  // CATERING
  // ===================================================

  catering: {
    images: [
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780934/corporategala1.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780934/corporategala2.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780934/corporategala3.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780934/corporategala4.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780934/corporategala5.jpg",
    ],

    video: "https://res.cloudinary.com/porwmjke/video/upload/v1791781076/corporate-food-video.mp4",

    heading: (
      <>
        Corporate
        <br />
        Catering 2026
      </>
    ),

    paragraph1:
      "Our catering team delivered a memorable dining experience for the Corporate Gala 2026 with delicious food, elegant presentation, and professional service for every guest.",

    paragraph2:
      "From refreshing starters to beautifully presented main-course dishes, every element was carefully prepared to make the corporate celebration enjoyable and memorable.",
  },

  // ===================================================
  // LIGHTING
  // ===================================================

  lighting: {
    images: [
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780984/corporatelight1.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780984/corporatelight2.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780984/corporatelight3.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780984/corporatelight4.jpg",
      "https://res.cloudinary.com/porwmjke/image/upload/v1791780984/corporatelight5.jpg",
    ],

    video: "https://res.cloudinary.com/porwmjke/video/upload/v1791781085/corporate-light-video.mp4",

    heading: (
      <>
        Corporate
        <br />
        Lighting 2026
      </>
    ),

    paragraph1:
      "The Corporate Gala 2026 was enhanced with professional lighting arrangements designed to create an elegant and energetic atmosphere throughout the venue.",

    paragraph2:
      "From the stage and entrance to the main event areas, every lighting setup was carefully planned to complement the corporate theme and highlight the important moments of the celebration.",
  },
};

// =====================================================
// COMPONENT
// =====================================================

const CorporateGala = () => {
  const { type } = useParams();

  const [showVideo, setShowVideo] = useState(false);

  // Get respective data from URL
  const data =
    portfolioData[type] || portfolioData.photography;

  return (
    <section
      className="
        w-full
        bg-[#f7f7f7]
        px-5
        pb-8
        pt-5
        sm:px-8
        md:px-10
        lg:px-8
      "
    >

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1180px]
          min-w-0
          grid-cols-1
          gap-8

          lg:grid-cols-[820px_1fr]
          lg:items-center
          lg:gap-10
        "
      >

        {/* ===================================================
            GALLERY
            =================================================== */}

        <div
          className="
            grid
            w-full
            min-w-0
            grid-cols-1
            gap-2

            lg:h-[440px]
            lg:w-[820px]
            lg:grid-cols-[170px_170px_210px_210px]
            lg:grid-rows-[210px_220px]
            lg:gap-[5px]
          "
        >

          {/* =================================================
              IMAGE 1
              ================================================= */}

          <div
            className="
              relative
              col-start-1
              row-start-1
              w-full
              overflow-hidden
              rounded-[3px]

              lg:row-span-2
            "
          >
            <img
              src={data.images[0]}
              alt="Corporate event"
              className="
                block
                h-auto
                w-full
                object-contain

                lg:h-full
                lg:w-full
                lg:object-cover
              "
            />

            {/* ================= PLAY BUTTON ================= */}

            <button
              type="button"
              onClick={() => setShowVideo(true)}
              aria-label="Play video"
              className="
                absolute
                right-3
                top-3
                z-10
                flex
                h-8
                w-8
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border-2
                border-[#ffd000]
                bg-black/30
                text-[#ffd000]
                transition-all
                duration-300
                hover:scale-110
                hover:bg-black/50
              "
            >
              <FaPlay className="ml-[1px] text-[8px]" />
            </button>
          </div>

          {/* =================================================
              IMAGE 2
              ================================================= */}

          <div
            className="
              col-start-1
              row-start-2
              w-full
              overflow-hidden
              rounded-[3px]

              lg:col-start-2
              lg:row-start-1
            "
          >
            <img
              src={data.images[1]}
              alt="Corporate event"
              className="
                block
                h-auto
                w-full
                object-contain

                lg:h-full
                lg:w-full
                lg:object-cover
              "
            />
          </div>

          {/* =================================================
              IMAGE 3
              ================================================= */}

          <div
            className="
              col-start-1
              row-start-3
              w-full
              overflow-hidden
              rounded-[3px]

              lg:col-start-3
              lg:row-start-1
            "
          >
            <img
              src={data.images[2]}
              alt="Corporate event"
              className="
                block
                h-auto
                w-full
                object-contain

                lg:h-full
                lg:w-full
                lg:object-cover
              "
            />
          </div>

          {/* =================================================
              IMAGE 4
              ================================================= */}

          <div
            className="
              col-start-1
              row-start-4
              w-full
              overflow-hidden
              rounded-[3px]

              lg:col-start-2
              lg:col-span-2
              lg:row-start-2
            "
          >
            <img
              src={data.images[3]}
              alt="Corporate event"
              className="
                block
                h-auto
                w-full
                object-contain

                lg:h-full
                lg:w-full
                lg:object-cover
              "
            />
          </div>

          {/* =================================================
              IMAGE 5
              ================================================= */}

          <div
            className="
              col-start-1
              row-start-5
              w-full
              overflow-hidden
              rounded-[3px]

              lg:col-start-4
              lg:row-start-1
              lg:row-span-2
            "
          >
            <img
              src={data.images[4]}
              alt="Corporate event"
              className="
                block
                h-auto
                w-full
                object-contain

                lg:h-full
                lg:w-full
                lg:object-cover
              "
            />
          </div>

        </div>

        {/* ===================================================
            CORPORATE CONTENT
            =================================================== */}

        <div
          className="
            flex
            min-w-0
            flex-col
            justify-center
            px-1
            lg:pl-2
          "
        >

          {/* ================= HEADING ================= */}

          <h2
            className="
              text-[32px]
              font-medium
              leading-[1.2]
              text-[#087d67]

              sm:text-[44px]
            "
          >
            {data.heading}
          </h2>

          {/* ================= PARAGRAPH 1 ================= */}

          <p
            className="
              mt-7
              max-w-[350px]
              text-[10px]
              leading-[1.8]
              text-[#555555]

              sm:text-[14px]
            "
          >
            {data.paragraph1}
          </p>

          {/* ================= PARAGRAPH 2 ================= */}

          <p
            className="
              mt-5
              max-w-[350px]
              text-[10px]
              leading-[1.8]
              text-[#555555]

              sm:text-[14px]
            "
          >
            {data.paragraph2}
          </p>

        </div>

      </div>

      {/* =====================================================
          VIDEO MODAL
          ===================================================== */}

      {showVideo && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/80
            px-4
          "
          onClick={() => setShowVideo(false)}
        >

          {/* ================= VIDEO CONTAINER ================= */}

          <div
            className="
              relative
              w-full
              max-w-[850px]
              overflow-hidden
              rounded-lg
              bg-black
              shadow-2xl
            "
            onClick={(event) => event.stopPropagation()}
          >

            {/* ================= CLOSE BUTTON ================= */}

            <button
              type="button"
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
              className="
                absolute
                right-3
                top-3
                z-20
                flex
                h-8
                w-8
                cursor-pointer
                items-center
                justify-center
                rounded-full
                bg-black/70
                text-white
                transition-all
                duration-300
                hover:scale-110
                hover:bg-red-600
              "
            >
              <FaTimes className="text-sm" />
            </button>

            {/* ================= VIDEO ================= */}

            <video
              src={data.video}
              controls
              autoPlay
              playsInline
              className="
                block
                max-h-[80vh]
                w-full
                object-contain
              "
            />

          </div>
        </div>
      )}

    </section>
  );
};

export default CorporateGala;