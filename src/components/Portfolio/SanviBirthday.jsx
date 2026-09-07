import React from "react";
import { FaPlay } from "react-icons/fa";

import birthday1 from "../../assets/birthday1.png";
import birthday2 from "../../assets/birthday2.png";
import birthday3 from "../../assets/birthday3.png";
import birthday4 from "../../assets/birthday4.png";
import birthday5 from "../../assets/birthday5.png";

const SanviBirthday = () => {
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
      {/* =========================================================
          DESKTOP / LARGE SCREEN CONTENT
          ========================================================= */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1000px]
          grid-cols-1
          gap-8

          lg:grid-cols-[145px_145px_180px_280px_180px]
          lg:grid-rows-[180px_193px]
          lg:gap-[5px]
          lg:items-stretch
        "
      >
        {/* =====================================================
            IMAGE 1
            ===================================================== */}
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
            src={birthday1}
            alt="Sanvi birthday celebration"
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

          {/* Play Button */}
          <button
            type="button"
            aria-label="Play birthday video"
            className="
              absolute
              right-3
              top-3
              z-10
              flex
              h-7
              w-7
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

        {/* =====================================================
            IMAGE 2
            ===================================================== */}
        <div
          className="
            overflow-hidden
            rounded-[3px]

            lg:col-start-2
            lg:row-start-1
          "
        >
          <img
            src={birthday2}
            alt="Sanvi birthday celebration"
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

        {/* =====================================================
            IMAGE 3
            ===================================================== */}
        <div
          className="
            overflow-hidden
            rounded-[3px]

            lg:col-start-3
            lg:row-start-1
          "
        >
          <img
            src={birthday3}
            alt="Sanvi birthday celebration"
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

        {/* =====================================================
            IMAGE 4
            ===================================================== */}
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
            src={birthday4}
            alt="Sanvi birthday cake"
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

        {/* =====================================================
            SANVI BIRTHDAY CONTENT
            Desktop: between image 4 and image 5
            Mobile: after image 4
            ===================================================== */}
        <div
          className="
            flex
            flex-col
            justify-center
            px-1

            lg:col-start-4
            lg:row-start-1
            lg:row-span-2
            lg:pl-2
            lg:pr-1
          "
        >
          {/* Heading */}
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
            Sanvi&apos;s
            <br />
            Birthday
          </h2>

          {/* Paragraph 1 */}
          <p
            className="
              mt-7
              max-w-[280px]
              text-[9px]
              leading-[1.75]
              text-[#5A403E]

              sm:text-[10px]

              lg:text-[9px]
              xl:text-[10px]
            "
          >
            Sanvi&apos;s pre-birthday celebration was a heartwarming
            evening filled with love, laughter, and togetherness —
            beautifully celebrated in her serene garden space with
            the three most important souls in her world, her mother
            and father.
          </p>

          {/* Paragraph 2 */}
          <p
            className="
              mt-5
              max-w-[280px]
              text-[9px]
              leading-[1.75]
              text-[#5A403E]

              sm:text-[10px]

              lg:text-[9px]
              xl:text-[10px]
            "
          >
            Surrounded by calming greens and soft blue tones of
            nature, every frame captured not just smiles, but the
            warmth, bond, and pure emotions shared between them.
          </p>
        </div>

        {/* =====================================================
            IMAGE 5
            Desktop: right side of Sanvi content
            Mobile: LAST image
            ===================================================== */}
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
            src={birthday5}
            alt="Sanvi birthday celebration"
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

      {/* =========================================================
          BUTTON
          ========================================================= */}
      <div className="flex justify-center pt-7">
        <button
          type="button"
          className="
            rounded-[4px]
            bg-[#b00000]
            cursor-pointer
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
          Let&apos;s Plan Your Event
        </button>
      </div>
    </section>
  );
};

export default SanviBirthday;