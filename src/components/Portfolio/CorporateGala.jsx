import React from "react";
import { FaPlay } from "react-icons/fa";

import event11 from "../../assets/event11.png";
import event22 from "../../assets/event22.png";
import event33 from "../../assets/event33.png";
import event44 from "../../assets/event44.png";
import event55 from "../../assets/event55.png";

const CorporateGala = () => {
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
      {/* ================= MAIN CONTENT ================= */}
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

        {/* ================= CORPORATE GALLERY ================= */}
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

          {/* ================= EVENT 1 ================= */}
          <div
            className="
              col-start-1
              row-start-1
              row-span-1
              w-full
              overflow-hidden
              rounded-[3px]

              lg:row-span-2
            "
          >
            <img
              src={event11}
              alt="Corporate event"
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

          {/* ================= EVENT 2 ================= */}
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
              src={event22}
              alt="Corporate speaker"
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

          {/* ================= EVENT 3 ================= */}
          <div
            className="
              col-start-1
              row-start-3
              w-full
              overflow-hidden
              rounded-[3px]

              lg:col-start-3
              lg:row-start-1
              lg:row-span-1
            "
          >
            <img
              src={event33}
              alt="Corporate audience"
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

          {/* ================= EVENT 4 ================= */}
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
              src={event44}
              alt="Corporate conference"
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

          {/* ================= EVENT 5 ================= */}
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
              src={event55}
              alt="Corporate gala"
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
              aria-label="Play corporate video"
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

        </div>

        {/* ================= CORPORATE CONTENT ================= */}
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
              sm:text-[38px]
            "
          >
            Corporate
            <br />
            Gala 2026
          </h2>

          {/* ================= FIRST PARAGRAPH ================= */}
          <p
            className="
              mt-7
              max-w-[350px]
              text-[10px]
              leading-[1.8]
              text-[#555555]
              sm:text-[11px]
            "
          >
            The Corporate Gala 2026, Bangalore — proudly hosted six
            leading MNCs and featuring 100+ startups alongside 20 top
            enterprises in the city&apos;s prime business district —
            was professionally captured and curated by our team.
          </p>

          {/* ================= SECOND PARAGRAPH ================= */}
          <p
            className="
              mt-5
              max-w-[350px]
              text-[10px]
              leading-[1.8]
              text-[#555555]
              sm:text-[11px]
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