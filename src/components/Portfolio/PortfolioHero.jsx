import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import photography from "../../assets/photography1.png";

const ProviderHero = () => {
  return (
    <section className="w-full p-0">
      <div className="relative w-full overflow-hidden">

        {/* Photography Image */}
        <img
          src={photography}
          alt="Artlane Studio Photography"
          className="block h-auto w-full object-cover"
        />

        {/* Left Arrow */}
        <button
          type="button"
          className="absolute left-5 top-1/2 z-10 -translate-y-1/2 text-white transition-transform duration-300 hover:scale-125"
          aria-label="Previous image"
        >
          <FaChevronLeft className="text-xl sm:text-2xl" />
        </button>

        {/* Right Arrow */}
        <button
          type="button"
          className="absolute right-5 top-1/2 z-10 -translate-y-1/2 text-white transition-transform duration-300 hover:scale-125"
          aria-label="Next image"
        >
          <FaChevronRight className="text-xl sm:text-2xl" />
        </button>

      </div>
    </section>
  );
};

export default ProviderHero;