import React from "react";
import { FaAward } from "react-icons/fa";

const ProviderAbout = () => {
  return (
    <section className="w-full bg-[#f7f7f7] px-6 py-5 sm:px-8 md:px-10">
      
      <div className="grid grid-cols-2 gap-4">

        {/* About Provider */}
        <div className="rounded-lg bg-white px-4 py-4">
          
          <h2 className="text-[22px] font-medium italic text-[#555555]">
            Artlane - Creating unforgettable moments since ages.
          </h2>

          <p className="mt-4 text-[16px] leading-5 text-[#5A403E]">
            Artlane Studio is an award-winning editorial and wedding
            photographer based in Andhra Pradesh, capturing fleeting moments
            through a cinematic lens. With a background in fine arts, Julian
            approaches every event as a curated narrative, focusing on light,
            texture, and raw emotion.
          </p>

        </div>

        {/* Awards */}
        <div className="rounded-lg bg-white px-4 py-4">

          {/* Award 1 */}
          <div className="flex items-start gap-2">
            <FaAward className="mt-1 shrink-0 text-[15px] text-[#e50909]" />

            <div>
              <h3 className="text-[18px] font-medium text-[#252525] underline">
                International Wedding Excellence Award – 2024
              </h3>

              <p className="mt-1 text-[14px] leading-4 text-[#5A403E]">
                Honored for crafting visually rich, editorial-style wedding
                narratives across luxury destinations.
              </p>
            </div>
          </div>

          {/* Award 2 */}
          <div className="mt-4 flex items-start gap-2">
            <FaAward className="mt-1 shrink-0 text-[15px] text-[#e50909]" />

            <div>
              <h3 className="text-[18px] font-medium text-[#252525] underline">
                Luxury Wedding Excellence Award
              </h3>

              <p className="mt-1 text-[14px] leading-4 text-[#5A403E]">
                Recognized for delivering high-end, refined event storytelling
                with a strong focus on elegance, detail, and timeless visual
                narratives.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ProviderAbout;