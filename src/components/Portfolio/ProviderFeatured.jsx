import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlay, FaTimes } from "react-icons/fa";

// ================= PHOTOGRAPHY IMAGES =================

import wedding1 from "../../assets/wedding1.png";
import wedding2 from "../../assets/wedding2.png";
import wedding3 from "../../assets/wedding3.png";
import wedding4 from "../../assets/wedding4.png";
import wedding5 from "../../assets/wedding5.png";

// ================= CATERING IMAGES =================

import catering2 from "../../assets/catering2.jpg";
import catering3 from "../../assets/catering3.jpg";
import catering4 from "../../assets/catering4.jpg";
import catering5 from "../../assets/catering5.jpg";
import catering6 from "../../assets/catering6.jpg";

// ================= LIGHTING IMAGES =================

import lighting1 from "../../assets/lightining1.jpg";
import lighting4 from "../../assets/lighting4.jpg";
import lighting2 from "../../assets/lightining2.jpg";
import lighting5 from "../../assets/lighting5.jpg";
import lighting6 from "../../assets/lighting6.jpg";

// ================= VIDEOS =================

import photographyVideo from "../../assets/Videos/photography-video.mp4";
import cateringVideo from "../../assets/Videos/catering-video.mp4";
import lightingVideo from "../../assets/Videos/lighting-video.mp4";

// ================= PORTFOLIO DATA =================

const portfolioData = {
  photography: {
    title: "Hyderabadi",
    titleLine2: "Weddings!",

    description1:
      "We brought the grand Patel family wedding to life with breathtaking attention to every detail. From heartfelt moments to the couple's most cherished memories, every frame was captured with purpose and precision.",

    description2:
      "We believe every wedding and auspicious celebration deserves timeless storytelling — preserving emotions, beauty, and unforgettable moments without letting a single memory go uncaptured.",

    images: [
      wedding1,
      wedding2,
      wedding3,
      wedding4,
      wedding5,
    ],

    alt: [
      "Wedding hands",
      "Wedding mandap",
      "Wedding couple",
      "Wedding bride",
      "Wedding dance",
    ],

    video: photographyVideo,
  },

  catering: {
    title: "Delicious",
    titleLine2: "Catering!",

    description1:
      "We provide delicious and beautifully presented catering services for weddings, birthdays, corporate events and special occasions, with a focus on quality and taste.",

    description2:
      "From traditional flavours to modern menus, we create memorable dining experiences with fresh ingredients, professional service and attention to every detail.",

    images: [
      catering2,
      catering3,
      catering4,
      catering5,
      catering6,
    ],

    alt: [
      "Catering food",
      "Catering service",
      "Catering presentation",
      "Catering dishes",
      "Catering setup",
    ],

    video: cateringVideo,
  },

  lighting: {
    title: "Beautiful",
    titleLine2: "Lighting!",

    description1:
      "We create stunning lighting setups that bring weddings, parties, corporate events and celebrations to life with elegant and vibrant visual experiences.",

    description2:
      "From decorative lighting to complete event setups, every detail is carefully planned to create the perfect atmosphere and highlight the beauty of every celebration.",

    images: [
      lighting1,
      lighting4,
      lighting2,
      lighting5,
      lighting6,
    ],

    alt: [
      "Event lighting",
      "Wedding lighting",
      "Decorative lighting",
      "Lighting setup",
      "Event decoration",
    ],

    video: lightingVideo,
  },
};

// ================= COMPONENT =================

const ProviderFeatured = () => {
  const { type } = useParams();

  const data =
    portfolioData[type] || portfolioData.photography;

  // ================= VIDEO STATE =================

  const [showVideo, setShowVideo] = useState(false);

  // ================= PLAY VIDEO =================

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  // ================= CLOSE VIDEO =================

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <>
      <section
        className="
          w-full
          bg-[#f7f7f7]
          px-5
          py-7
          sm:px-8
          md:px-10
          lg:px-8
        "
      >

        {/* ================= FEATURED HEADING ================= */}

        <div className="mb-8 flex justify-center">
          <div className="relative">

            <h2
              className="
                text-[15px]
                font-medium
                leading-none
                text-[#222222]
                sm:text-[16px]
              "
            >
              Featured
            </h2>

            {/* Bottom Line */}

            <span
              className="
                absolute
                bottom-[-10px]
                left-1/1
                h-[1px]
                w-12
                -translate-x-1/2
                bg-[#a00000]
              "
            />

            {/* Right Vertical Line */}

            <span
              className="
                absolute
                right-[-8px]
                top-[-1px]
                h-10
                w-[1px]
                bg-[#a00000]
              "
            />

          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1150px]
            min-w-0
            grid-cols-1
            gap-7

            lg:grid-cols-[260px_1fr]
            lg:items-start
            lg:gap-5
          "
        >

          {/* ================= LEFT CONTENT ================= */}

          <div className="pt-1">

            {/* Heading */}

            <h3
              className="
                MonteCarlo
                text-[38px]
                leading-[1.05]
                text-[#e50909]

                sm:text-[45px]

                lg:text-[54px]
              "
            >
              {data.title}

              <br />

              {data.titleLine2}
            </h3>

            {/* First Paragraph */}

            <p
              className="
                mt-6
                text-[10px]
                leading-[1.8]
                text-[#5A403E]

                sm:text-[11px]

                lg:text-[12px]
              "
            >
              {data.description1}
            </p>

            {/* Second Paragraph */}

            <p
              className="
                mt-5
                text-[10px]
                leading-[1.8]
                text-[#5A403E]

                sm:text-[11px]

                lg:text-[12px]
              "
            >
              {data.description2}
            </p>

          </div>

          {/* ================= GALLERY ================= */}

          <div
            className="
              grid
              w-full
              min-w-0
              grid-cols-1
              gap-2

              lg:h-[440px]
              lg:grid-cols-[190px_190px_260px_260px]
              lg:grid-rows-[190px_225px]
              lg:gap-[5px]
            "
          >

            {/* ================= IMAGE 1 ================= */}

            <div
              className="
                col-start-1
                row-start-1
                w-full
                overflow-hidden
                rounded-[3px]

                lg:col-start-1
                lg:row-start-1
              "
            >
              <img
                src={data.images[0]}
                alt={data.alt[0]}
                className="
                  block
                  h-auto
                  w-full
                  object-contain

                  lg:h-full
                  lg:w-full
                  lg:object-fill
                "
              />
            </div>

            {/* ================= IMAGE 2 ================= */}

            <div
              className="
                col-start-1
                row-start-2
                flex
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-[3px]
                bg-white

                lg:col-start-2
                lg:row-start-1
              "
            >
              <img
                src={data.images[1]}
                alt={data.alt[1]}
                className="
                  block
                  h-auto
                  w-full
                  object-contain

                  lg:h-full
                  lg:w-full
                  lg:object-contain
                "
              />
            </div>

            {/* ================= IMAGE 3 ================= */}

            <div
              className="
                col-start-1
                row-start-3
                flex
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-[3px]
                bg-white

                lg:col-start-1
                lg:col-span-2
                lg:row-start-2
              "
            >
              <img
                src={data.images[2]}
                alt={data.alt[2]}
                className="
                  block
                  h-auto
                  w-full
                  object-contain

                  lg:h-full
                  lg:w-full
                  lg:object-contain
                "
              />
            </div>

            {/* ================= IMAGE 4 ================= */}

            <div
              className="
                col-start-1
                row-start-4
                w-full
                overflow-hidden
                rounded-[3px]

                lg:col-start-3
                lg:row-start-1
                lg:row-span-2
              "
            >
              <img
                src={data.images[3]}
                alt={data.alt[3]}
                className="
                  block
                  h-auto
                  w-full
                  object-contain

                  lg:h-full
                  lg:w-full
                  lg:object-fill
                "
              />
            </div>

            {/* ================= IMAGE 5 ================= */}

            <div
              className="
                relative
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
                alt={data.alt[4]}
                className="
                  block
                  h-auto
                  w-full
                  object-contain

                  lg:h-full
                  lg:w-full
                  lg:object-fill
                "
              />

              {/* ================= PLAY BUTTON ================= */}

              <button
                type="button"
                onClick={handlePlayVideo}
                aria-label="Play video"
                className="
                  absolute
                  right-3
                  top-3
                  z-10
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-[#ffd000]
                  bg-black/30
                  text-[#ffd000]
                  transition-transform
                  duration-300
                  hover:scale-110
                "
              >
                <FaPlay className="ml-[1px] text-[8px]" />
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* ================= VIDEO MODAL ================== */}
      {/* ================================================= */}

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
          onClick={handleCloseVideo}
        >

          {/* ================= VIDEO CONTAINER ================= */}

          <div
            className="
              relative
              w-full
              max-w-[900px]
              overflow-hidden
              rounded-lg
              bg-black
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* ================= CLOSE BUTTON ================= */}

            <button
              type="button"
              onClick={handleCloseVideo}
              aria-label="Close video"
              className="
                absolute
                right-3
                top-3
                z-20
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-black/60
                text-white
                transition-all
                duration-300
                hover:scale-110
                hover:bg-[#e50909]
              "
            >
              <FaTimes className="text-sm" />
            </button>

            {/* ================= VIDEO ================= */}

            <video
              src={data.video}
              controls
              autoPlay
              className="
                block
                max-h-[80vh]
                w-full
                object-contain
              "
            >
              Your browser does not support the video tag.
            </video>

          </div>

        </div>
      )}

    </>
  );
};

export default ProviderFeatured;