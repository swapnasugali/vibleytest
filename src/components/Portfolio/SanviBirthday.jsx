import React from "react";
import { FaPlay } from "react-icons/fa";

import birthday1 from "../../assets/birthday1.png";
import birthday2 from "../../assets/birthday2.png";
import birthday3 from "../../assets/birthday3.png";
import birthday4 from "../../assets/birthday4.png";
import birthday5 from "../../assets/birthday5.png";

const SanviBirthday = () => {
  return (
    <section className="w-full bg-[#f7f7f7] px-5 sm:px-8 md:px-10">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-7 lg:grid-cols-[590px_1fr]">

        {/* ================= BIRTHDAY IMAGE GALLERY ================= */}
        <div
          className="
            grid
            grid-cols-4
            grid-rows-[125px_145px]
            gap-1.5
          "
        >

          {/* Large Left Image */}
          <div className="relative row-span-2 overflow-hidden rounded-[3px]">
            <img
              src={birthday1}
              alt="Sanvi birthday celebration"
              className="block h-full w-full object-cover"
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
                text-[#ffd000]
                transition-transform
                duration-300
                hover:scale-110
              "
            >
              <FaPlay className="ml-[1px] text-[8px]" />
            </button>
          </div>

          {/* Top Middle Left */}
          <div className="overflow-hidden rounded-[3px]">
            <img
              src={birthday2}
              alt="Sanvi birthday"
              className="block h-full w-full object-cover"
            />
          </div>

          {/* Top Middle Right */}
          <div className="overflow-hidden rounded-[3px]">
            <img
              src={birthday3}
              alt="Sanvi birthday celebration"
              className="block h-full w-full object-cover"
            />
          </div>

          {/* Bottom Wide Image */}
          <div className="col-span-2 overflow-hidden rounded-[3px]">
            <img
              src={birthday4}
              alt="Sanvi birthday cake"
              className="block h-full w-full object-cover"
            />
          </div>

          {/* Right Vertical Image */}
          <div className="row-span-2 overflow-hidden rounded-[3px]">
            <img
              src={birthday5}
              alt="Sanvi birthday celebration"
              className="block h-full w-full object-cover"
            />
          </div>

        </div>

        {/* ================= BIRTHDAY CONTENT ================= */}
        <div className="flex flex-col justify-center px-1 lg:pl-2">

          {/* Heading */}
          <h2
            className="
              font-serif
              text-[30px]
              font-medium
              leading-[1.25]
              text-[#a90000]
              sm:text-[34px]
            "
          >
            Sanvi’s
            <br />
            Birthday
          </h2>

          {/* First Paragraph */}
          <p
            className="
              mt-8
              max-w-[360px]
              text-[9px]
              leading-[1.8]
              text-[#555555]
              sm:text-[10px]
            "
          >
            Sanvi’s pre-birthday celebration was a heartwarming
            evening filled with love, laughter, and togetherness —
            beautifully celebrated in her serene garden space with
            the three most important souls in her world, her mother
            and father.
          </p>

          {/* Second Paragraph */}
          <p
            className="
              mt-5
              max-w-[360px]
              text-[9px]
              leading-[1.8]
              text-[#555555]
              sm:text-[10px]
            "
          >
            Surrounded by calming greens and soft blue tones of
            nature, every frame captured not just smiles, but the
            warmth, bond, and pure emotions shared between them.
          </p>

        </div>

      </div>

      {/* ================= BUTTON ================= */}
      <div className="flex justify-center py-7">
        <button
          type="button"
          className="
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
          Let&apos;s Plan Your Event
        </button>
      </div>
    </section>
  );
};

export default SanviBirthday;