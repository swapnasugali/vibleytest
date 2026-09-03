import React from "react";
import { FaPlay } from "react-icons/fa";

import wedding1 from "../../assets/wedding1.png";
import wedding2 from "../../assets/wedding2.png";
import wedding3 from "../../assets/wedding3.png";
import wedding4 from "../../assets/wedding4.png";
import wedding5 from "../../assets/wedding5.png";

const ProviderFeatured = () => {
  return (
    <section className="w-full bg-[#f7f7f7] px-5 py-7 sm:px-8 md:px-10 lg:px-0">

      {/* Featured Heading */}
      <div className="mb-7 flex justify-center lg:mb-8">
        <div className="relative">
          <h2 className="text-[15px] font-medium text-[#222222] sm:text-[17px]">
            Featured
          </h2>

          <span className="absolute bottom-[-7px] left-1/2 h-[1px] w-9 -translate-x-1/2 bg-[#a00000]" />

          <span className="absolute right-[-6px] top-[-5px] h-7 w-[1px] bg-[#a00000]" />
        </div>
      </div>

      {/* Featured Content */}
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-8 lg:grid-cols-[290px_780px] lg:items-center lg:gap-[15px]">

        {/* Left Content */}
        <div className="lg:pr-2">

          <h3 className="font-serif text-[30px] italic leading-[1.05] text-[#e50909] sm:text-[34px]">
            Hyderabadi
            <br />
            Weddings!
          </h3>

          <p className="mt-6 text-[9px] leading-[1.8] text-[#555555] sm:text-[10px]">
            We brought the grand Patel family wedding to life with
            breathtaking attention to every detail. From heartfelt moments
            to the couple's most cherished memories, every frame was
            captured with purpose and precision.
          </p>

          <p className="mt-5 text-[9px] leading-[1.8] text-[#555555] sm:text-[10px]">
            We believe every wedding and auspicious celebration deserves
            timeless storytelling — preserving emotions, beauty, and
            unforgettable moments without letting a single memory go
            uncaptured.
          </p>

        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[168px_182px]">

          {/* Wedding 1 */}
          <div className="flex overflow-hidden rounded-md bg-[#f7f7f7] lg:col-start-1 lg:row-start-1">
            <img
              src={wedding1}
              alt="Wedding hands"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Wedding 2 */}
          <div className="flex overflow-hidden rounded-md bg-[#f7f7f7] lg:col-start-2 lg:row-start-1">
            <img
              src={wedding2}
              alt="Wedding mandap"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Wedding 3 - Bottom Wide */}
          <div className="flex overflow-hidden rounded-md bg-[#f7f7f7] lg:col-span-2 lg:col-start-1 lg:row-start-2">
            <img
              src={wedding3}
              alt="Bride"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Wedding 4 - Tall */}
          <div className="flex overflow-hidden rounded-md bg-[#f7f7f7] lg:col-start-3 lg:row-span-2 lg:row-start-1">
            <img
              src={wedding4}
              alt="Wedding couple"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Wedding 5 - Tall */}
          <div className="relative flex overflow-hidden rounded-md bg-[#f7f7f7] lg:col-start-4 lg:row-span-2 lg:row-start-1">
            <img
              src={wedding5}
              alt="Wedding dance"
              className="h-full w-full object-contain"
            />

            {/* Play Button */}
            <button
              type="button"
              aria-label="Play wedding video"
              className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#ffd000] bg-black/10 text-[#ffd000] transition-transform duration-300 hover:scale-110"
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