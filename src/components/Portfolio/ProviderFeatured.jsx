import React from "react";
import { FaPlay } from "react-icons/fa";

import wedding1 from "../../assets/wedding1.png";
import wedding2 from "../../assets/wedding2.png";
import wedding3 from "../../assets/wedding3.png";
import wedding4 from "../../assets/wedding4.png";
import wedding5 from "../../assets/wedding5.png";

const ProviderFeatured = () => {
  return (
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
              bottom-[-8px]
              left-1/2
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
              top-[-3px]
              h-8
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
            Hyderabadi
            <br />
            Weddings!
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
            We brought the grand Patel family wedding to life with
            breathtaking attention to every detail. From heartfelt moments
            to the couple&apos;s most cherished memories, every frame was
            captured with purpose and precision.
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
            We believe every wedding and auspicious celebration deserves
            timeless storytelling — preserving emotions, beauty, and
            unforgettable moments without letting a single memory go
            uncaptured.
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

          {/* ================= WEDDING 1 ================= */}
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
              src={wedding1}
              alt="Wedding hands"
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

          {/* ================= WEDDING 2 ================= */}
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
              src={wedding2}
              alt="Wedding mandap"
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

          {/* ================= WEDDING 3 ================= */}
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
              src={wedding3}
              alt="Wedding couple"
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

          {/* ================= WEDDING 4 ================= */}
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
              src={wedding4}
              alt="Wedding bride"
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

          {/* ================= WEDDING 5 ================= */}
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
              src={wedding5}
              alt="Wedding dance"
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
              aria-label="Play wedding video"
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

      </div>

    </section>
  );
};

export default ProviderFeatured;