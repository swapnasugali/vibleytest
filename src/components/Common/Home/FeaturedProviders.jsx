import { FaArrowLeft,FaArrowRight,FaChevronRight,
} from "react-icons/fa";

import provider1 from "../../../assets/provider1.png";
import provider2 from "../../../assets/provider2.png";
import provider3 from "../../../assets/provider3.png";

const providers = [
  {
    category: "Photography",
    name: "ARTLANE STUDIO",
    location: "Kondapalli, Hyderabad",
    image: provider1,
  },
  {
    category: "Catering",
    name: "MANGALAM CATERERS",
    location: "Kukatpally, Hyderabad",
    image: provider2,
  },
  {
    category: "Lighting",
    name: "ELITE LIGHTING SERVICES",
    location: "Madhapur, Hyderabad",
    image: provider3,
  },
];

const FeaturedProviders = () => {
  return (
    <section className="w-full bg-[#fffdfa] px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-14 xl:px-16">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Heading */}
        <h2 className="mb-7 text-[19px] font-medium text-[#344054] sm:text-[22px] md:mb-8 md:text-[25px]">
          Featured Service Providers
        </h2>

        {/* Providers Area */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Previous"
            className="
              absolute
              -left-3
              top-[42%]
              z-20
              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-[#f2676d]
              text-white
              shadow-sm
              sm:-left-4
              md:-left-7
              lg:-left-10
            "
          >
            <FaArrowLeft className="text-[10px]" />
          </button>

          {/* Provider Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {providers.map((provider, index) => (
              <div
                key={index}
                className="
                  overflow-hidden
                  border
                  border-[#dedede]
                  bg-white
                "
              >
                {/* Image Area */}
                <div className="relative aspect-[1.75/1] w-full overflow-hidden">

                  {/* Provider Image */}
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      object-center
                    "
                  />

                  {/* Category */}
                  <span
                    className="
                      absolute
                      left-2
                      top-2
                      z-10
                      border
                      border-[#ffffff]/40
                      bg-[#272727]/white
                      
                      px-3
                      py-1.5
                      shadow-sm
                    "
                  >
                     <span className="text-[10px] font-medium text-white sm:text-[11px]"></span>
                    {provider.category}
                     </span>

                  {/* Portfolio */}
                  <button
                    type="button"
                    className="
                      absolute
                      right-3
                      top-3
                      flex
                      h-[25px]
                      w-[71px]
                      items-center
                      gap-[2px]
                      text-[10px]
                      font-medium
                      text-[#f4b400]
                    "
                  >
                    <span>Portfolio</span>

                    {/* Two Right Arrows */}
                    <span className="flex items-center -space-x-[3px] text-white">
                      <FaChevronRight className="text-[8px]" />
                      <FaChevronRight className="text-[8px]" />
                    </span>
                  </button>
                </div>

                {/* Provider Details */}
                <div className="flex items-center justify-between gap-3 px-3 py-3 sm:px-4 sm:py-4">

                  {/* Provider Text */}
                  <div className="h-[39px] w-full max-w-[241px] min-w-0">
                    <h3 className="text-[14px] font-semibold text-[#2f2f2f]">
                        {provider.name}
                    </h3>


                    <p className="mt-1 text-[10px] text-[#000000] sm:text-[11px]">
                      {provider.location}
                    </p>
                  </div>

                  {/* Book Now Button */}
                 <button
                    type="button"
                    className="
                        shrink-0
                        h-[39px]
                        w-[105px]
                        rounded-[8px]
                        bg-[#A63A2A]
                        text-[10px]
                        font-medium
                        text-white
                        transition
                        hover:bg-[#8f3023]
                        sm:w-[110px]
                        sm:text-[11px]
                    "
                    >
                    BOOK NOW
                    </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Next"
            className="
              absolute
              -right-3
              top-[42%]
              z-20
              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-[#f2676d]
              text-white
              shadow-sm
              sm:-right-4
              md:-right-7
              lg:-right-10
            "
          >
            <FaArrowRight className="text-[10px]" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;