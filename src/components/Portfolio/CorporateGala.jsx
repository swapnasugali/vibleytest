import React from "react";
import { FaPlay } from "react-icons/fa";

import event11 from "../../assets/event11.png";
import event22 from "../../assets/event22.png";
import event33 from "../../assets/event33.png";
import event44 from "../../assets/event44.png";
import event55 from "../../assets/event55.png";

const CorporateGala = () => {
  return (
    <section className="w-full bg-[#f7f7f7] px-5 sm:px-8 md:px-10">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-7 lg:grid-cols-[590px_1fr]">

        {/* ================= CORPORATE IMAGE GALLERY ================= */}
        <div
          className="
            grid
            grid-cols-4
            grid-rows-[125px_145px]
            gap-1.5
          "
        >

          {/* ================= LARGE LEFT IMAGE ================= */}
          <div className="row-span-2 overflow-hidden rounded-[3px]">
            <img
              src={event11}
              alt="Corporate event"
              className="block h-full w-full object-cover"
            />
          </div>

          {/* ================= TOP MIDDLE LEFT ================= */}
          <div className="overflow-hidden rounded-[3px]">
            <img
              src={event22}
              alt="Corporate speaker"
              className="block h-full w-full object-cover"
            />
          </div>

          {/* ================= TOP MIDDLE RIGHT ================= */}
          <div className="overflow-hidden rounded-[3px]">
            <img
              src={event33}
              alt="Corporate audience"
              className="block h-full w-full object-cover"
            />
          </div>

          {/* ================= BOTTOM WIDE IMAGE ================= */}
          <div className="col-span-2 overflow-hidden rounded-[3px]">
            <img
              src={event44}
              alt="Corporate conference"
              className="block h-full w-full object-cover"
            />
          </div>

          {/* ================= RIGHT VERTICAL IMAGE ================= */}
          <div className="relative row-span-2 overflow-hidden rounded-[3px]">
            <img
              src={event55}
              alt="Corporate gala"
              className="block h-full w-full object-cover"
            />

            {/* Yellow Play Button */}
            <button
              type="button"
              aria-label="Play corporate video"
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

        </div>

        {/* ================= CORPORATE CONTENT ================= */}
        <div className="flex flex-col justify-center px-1 lg:pl-2">

          {/* Heading */}
          <h2
            className="
              text-[30px]
              font-medium
              leading-[1.25]
              text-[#087d67]
              sm:text-[34px]
            "
          >
            Corporate
            <br />
            Gala 2026
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
            The Corporate Gala 2026, Bangalore — proudly hosted six
            leading MNCs and featuring 100+ startups alongside 20 top
            enterprises in the city's prime business district — was
            professionally captured and curated by our team.
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
            From keynote moments to networking highlights, every frame
            was documented with precision, delivering impactful visual
            storytelling for a prestigious corporate gathering.
          </p>

        </div>

      </div>
    </section>
  );
};

export default CorporateGala;