import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlay, FaTimes } from "react-icons/fa";

// ================= PHOTOGRAPHY IMAGES =================

import birthday1 from "../../assets/birthday1.png";
import birthday2 from "../../assets/birthday2.png";
import birthday3 from "../../assets/birthday3.png";
import birthday4 from "../../assets/birthday4.png";
import birthday5 from "../../assets/birthday5.png";

// ================= CATERING IMAGES =================

import catering111 from "../../assets/catering111.jpg";
import catering222 from "../../assets/catering222.jpg";
import catering333 from "../../assets/catering333.jpg";
import catering444 from "../../assets/catering444.jpg";
import catering555 from "../../assets/catering555.jpg";

// ================= LIGHTING IMAGES =================

import birthday11 from "../../assets/birthday11.jpg";
import birthday22 from "../../assets/birthday22.jpg";
import birthday33 from "../../assets/birthday33.jpg";
import birthday44 from "../../assets/birthday44.jpg";
import birthday55 from "../../assets/birthday55.jpg";

// ================= VIDEOS =================

import weddingVideo from "../../assets/Videos/wedding-video.mp4";
import cateringVideo from "../../assets/Videos/catering-food-video.mp4";
import lightingVideo from "../../assets/Videos/events-light-video.mp4";

// ======================================================
// PORTFOLIO DATA
// ======================================================

const portfolioData = {
  // ====================================================
  // PHOTOGRAPHY
  // ====================================================

  photography: {
    images: [
      birthday1,
      birthday2,
      birthday3,
      birthday4,
      birthday5,
    ],

    video: weddingVideo,

    heading: (
      <>
        Sanvi&apos;s
        <br />
        Birthday
      </>
    ),

    paragraph1:
      "Sanvi's pre-birthday celebration was a heartwarming evening filled with love, laughter, and togetherness — beautifully celebrated in her serene garden space with the three most important souls in her world, her mother and father.",

    paragraph2:
      "Surrounded by calming greens and soft blue tones of nature, every frame captured not just smiles, but the warmth, bond, and pure emotions shared between them.",

    buttonText: "Let's Plan Your Event",
  },

  // ====================================================
  // CATERING
  // ====================================================

  catering: {
    images: [
      catering111,
      catering222,
      catering333,
      catering444,
      catering555,
    ],

    video: cateringVideo,

    heading: (
      <>
        Mangalam
        <br />
        Catering
      </>
    ),

    paragraph1:
      "Mangalam Caterers brings delicious food, beautiful presentation, and professional service together to create memorable dining experiences for weddings, corporate events, birthdays, and special celebrations.",

    paragraph2:
      "From traditional favorites to carefully prepared modern dishes, every menu is planned with attention to taste, quality, hygiene, and the unique requirements of every event.",

    buttonText: "Let's Plan Your Event",
  },

  // ====================================================
  // LIGHTING
  // ====================================================

  lighting: {
    images: [
      birthday11,
      birthday22,
      birthday33,
      birthday44,
      birthday55,
    ],

    video: lightingVideo,

    heading: (
      <>
        Elite
        <br />
        Lighting
      </>
    ),

    paragraph1:
      "Elite Lighting Services creates beautiful and professional lighting setups for weddings, parties, corporate events, and celebrations, transforming every venue into an attractive and memorable space.",

    paragraph2:
      "From decorative lighting to stage and event illumination, every setup is designed according to the event theme, venue, and client requirements with attention to detail.",

    buttonText: "Let's Plan Your Event",
  },
};

// ======================================================
// MAIN COMPONENT
// ======================================================

const SanviBirthday = () => {
  const { type } = useParams();

  const [showVideo, setShowVideo] = useState(false);

  // ====================================================
  // GET DATA BASED ON URL
  // ====================================================

  const data =
    portfolioData[type] || portfolioData.photography;

  return (
    <section
      className="
        w-full
        bg-[#f7f7f7]
        px-5
        pb-8
        pt-8

        sm:px-8
        md:px-10
        lg:px-8
      "
    >

      {/* =================================================
          MAIN CONTENT
          ================================================= */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1180px]
          grid-cols-1
          gap-8

          lg:grid-cols-[170px_170px_210px_320px_210px]
          lg:grid-rows-[180px_193px]
          lg:gap-[5px]
          lg:items-stretch
        "
      >

        {/* =================================================
            IMAGE 1
            ================================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[3px]

            lg:col-start-1
            lg:row-start-1
            lg:row-span-2
          "
        >

          <img
            src={data.images[0]}
            alt="Event"
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

          {/* PLAY BUTTON */}

          <button
            type="button"
            aria-label="Play video"
            onClick={() => setShowVideo(true)}
            className="
              absolute
              right-3
              top-3
              z-10
              flex
              h-7
              w-7
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border-2
              border-[#ffd000]
              bg-black/20
              text-[#ffd000]
              transition-transform
              duration-300
              hover:scale-110
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
            overflow-hidden
            rounded-[3px]

            lg:col-start-2
            lg:row-start-1
          "
        >

          <img
            src={data.images[1]}
            alt="Event"
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
            overflow-hidden
            rounded-[3px]

            lg:col-start-3
            lg:row-start-1
          "
        >

          <img
            src={data.images[2]}
            alt="Event"
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
            overflow-hidden
            rounded-[3px]

            lg:col-start-2
            lg:col-span-2
            lg:row-start-2
          "
        >

          <img
            src={data.images[3]}
            alt="Event"
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
            DYNAMIC CONTENT
            ================================================= */}

        <div
          className="
            flex
            flex-col
            justify-center
            px-1

            lg:col-start-4
            lg:row-start-1
            lg:row-span-2
            lg:pl-3
            lg:pr-2
          "
        >

          {/* HEADING */}

          <h2
            className="
              font-serif
              text-[54px]
              font-medium
              leading-[1.15]
              text-[#a90000]

              sm:text-[34px]

              lg:text-[30px]
              xl:text-[32px]
            "
          >
            {data.heading}
          </h2>

          {/* PARAGRAPH 1 */}

          <p
            className="
              mt-7
              max-w-[310px]
              text-[9px]
              leading-[1.75]
              text-[#5A403E]

              sm:text-[10px]

              lg:text-[9px]
              xl:text-[10px]
            "
          >
            {data.paragraph1}
          </p>

          {/* PARAGRAPH 2 */}

          <p
            className="
              mt-5
              max-w-[310px]
              text-[9px]
              leading-[1.75]
              text-[#5A403E]

              sm:text-[10px]

              lg:text-[9px]
              xl:text-[10px]
            "
          >
            {data.paragraph2}
          </p>

        </div>

        {/* =================================================
            IMAGE 5
            ================================================= */}

        <div
          className="
            overflow-hidden
            rounded-[3px]

            lg:col-start-5
            lg:row-start-1
            lg:row-span-2
          "
        >

          <img
            src={data.images[4]}
            alt="Event"
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

      {/* =================================================
          BUTTON
          ================================================= */}

      <div className="flex justify-center pt-7">

        <button
          type="button"
          className="
            cursor-pointer
            rounded-[4px]
            bg-[#b00000]
            px-4
            py-2
            text-[10px]
            font-medium
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-[#8f0000]
          "
        >
          {data.buttonText}
        </button>

      </div>

      {/* =================================================
          VIDEO MODAL
          ================================================= */}

      {showVideo && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/80
            px-4
          "
          onClick={() => setShowVideo(false)}
        >

          {/* VIDEO CONTAINER */}

          <div
            className="
              relative
              w-full
              max-w-[850px]
              overflow-hidden
              rounded-lg
              bg-black
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              aria-label="Close video"
              onClick={() => setShowVideo(false)}
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
              "
            >
              <FaTimes className="text-[13px]" />
            </button>

            {/* VIDEO */}

            <video
              src={data.video}
              controls
              autoPlay
              playsInline
              className="
                block
                h-auto
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

export default SanviBirthday;