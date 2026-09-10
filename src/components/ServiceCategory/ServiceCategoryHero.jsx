import React from "react";
import { useParams } from "react-router-dom";

import photography from "../../assets/photo0.jpg";
import catering from "../../assets/catering0.png";
import venue from "../../assets/venue0.jpg";
import stage1 from "../../assets/stage0.jpg";
import dj from "../../assets/dj0.jpg";

// =====================================================
// SERVICE DATA
// =====================================================

const serviceData = [
  {
    id: 1,
    type: "photography",
    image: photography,
    heroText:
      "Capture beautiful and memorable moments with professional photography services.",
    locationText: "Serving Across Telangana & Andhra Pradesh",
    verifiedNumber: "120+",
    verifiedText: "Verified Photography Teams",
  },

  {
    id: 2,
    type: "catering",
    image: catering,
    heroText:
      "Large premium catering banner with elegant buffet and event dining visuals.",
    locationText: "Serving Across Telangana & Andhra Pradesh",
    verifiedNumber: "120+",
    verifiedText: "Verified Catering Teams",
  },

  {
    id: 3,
    type: "venue",
    image: venue,
    heroText:
      "Find beautiful and suitable venues for weddings, parties and special events.",
    locationText: "Serving Across Telangana & Andhra Pradesh",
    verifiedNumber: "120+",
    verifiedText: "Verified Venues",
  },

  {
    id: 4,
    type: "stage-decor",
    image: stage1,
    heroText:
      "Create a beautiful event atmosphere with elegant and creative stage decorations.",
    locationText: "Serving Across Telangana & Andhra Pradesh",
    verifiedNumber: "120+",
    verifiedText: "Verified Decor Teams",
  },

  {
    id: 5,
    type: "dj-sound",
    image: dj,
    heroText:
      "Make your celebration energetic with professional DJ and sound services.",
    locationText: "Serving Across Telangana & Andhra Pradesh",
    verifiedNumber: "120+",
    verifiedText: "Verified DJ & Sound Teams",
  },
];

// =====================================================
// COMPONENT
// =====================================================

const ServiceCategoryHero = () => {
  // URL nunchi id tiskuntunnam
  const { id } = useParams();

  // id based on correct service data find chestunnam
  const data = serviceData.find(
    (item) => item.id === Number(id)
  );

  // =====================================================
  // INVALID ID
  // =====================================================

  if (!data) {
    return (
      <section className="flex min-h-[300px] w-full items-center justify-center px-5 py-10">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#252525]">
            Service not found
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            The service you are looking for does not exist.
          </p>
        </div>
      </section>
    );
  }

  // =====================================================
  // MAIN UI
  // =====================================================

  return (
    <section className="w-full">

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

      <div
        className="
          relative
          min-h-[500px]
          w-full
          overflow-hidden
          bg-gradient-to-r
          from-[#430000]
          via-[#280000]
          to-[#0b0000]

          sm:min-h-[520px]

          md:min-h-[480px]

          lg:min-h-[500px]
        "
      >

        {/* ================================================= */}
        {/* DESKTOP IMAGE */}
        {/* ================================================= */}

        <div
          className="
            absolute
            right-0
            top-0
            hidden
            h-full
            w-[48%]
            md:block

            lg:w-[52%]

            xl:w-[55%]
          "
        >

          {/* Curved Image */}

          <div
            className="
              absolute
              right-0
              top-0
              h-full
              w-full
              overflow-hidden
            "
            style={{
              borderRadius:
                "10% 0 0 50% / 50% 0 0 100%",
            }}
          >

            <img
              src={data.image}
              alt={data.title}
              className="
                h-full
                w-full
                object-cover
                object-center
              "
            />

            {/* Image Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#300000]/50
                via-[#300000]/10
                to-transparent
              "
            />
          </div>
        </div>

        {/* ================================================= */}
        {/* MOBILE IMAGE */}
        {/* ================================================= */}

        <div
          className="
            absolute
            inset-0
            block
            md:hidden
          "
        >

          <img
            src={data.image}
            alt={data.title}
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* Mobile Dark Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#350000]/95
              via-[#350000]/75
              to-[#350000]/35
            "
          />
        </div>

        {/* ================================================= */}
        {/* LEFT CONTENT */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-20
            flex
            min-h-[500px]
            w-full
            items-center
            px-6
            py-12

            sm:min-h-[520px]
            sm:px-10

            md:min-h-[480px]
            md:w-[55%]
            md:px-10
            md:py-10

            lg:w-[50%]
            lg:px-[68px]

            xl:w-[48%]
            xl:px-[75px]
          "
        >

          <div
            className="
              w-full
              max-w-[390px]
            "
          >

            {/* ================================================= */}
            {/* SERVICE TITLE */}
            {/* ================================================= */}

            <h1
              className="
                mb-4
                text-2xl
                font-semibold
                text-white

                sm:text-3xl

                md:text-3xl

                lg:text-[32px]
              "
            >
              {data.title}
            </h1>

            {/* ================================================= */}
            {/* HERO TEXT */}
            {/* ================================================= */}

            <p
              className="
                text-[15px]
                leading-[1.6]
                text-[#eeeeee]

                sm:text-[17px]

                md:text-[18px]

                lg:text-[22px]
              "
            >
              {data.type === "catering" ? (
                <>
                  Large premium catering banner with elegant buffet and{" "}
                  <span className="font-semibold text-white">
                    event dining visuals.
                  </span>
                </>
              ) : (
                data.heroText
              )}
            </p>

            {/* ================================================= */}
            {/* BUTTON */}
            {/* ================================================= */}

            <button
              type="button"
              className="
                mt-6
                rounded-md
                bg-red-700
                px-5
                py-[9px]
                text-[16px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#c80000]
                hover:shadow-lg

                sm:px-6
                sm:py-[8px]
                sm:text-[16px]
              "
            >
              Let Us Suggest For You
            </button>

            {/* ================================================= */}
            {/* INFORMATION */}
            {/* ================================================= */}

            <div
              className="
                mt-6
                space-y-[6px]
                text-[10px]
                leading-4
                sm:text-[11px]
                md:text-[11px]
              "
            >

              {/* ================= SERVING ================= */}

              <p className="text-[#b5b5b5] text-[12px]">

                <span className="mr-2 text-white">
                  •
                </span>

                Serving Across{" "}

                <span className="font-semibold text-white">
                  Telangana & Andhra Pradesh
                </span>

              </p>

              {/* ================= VERIFIED ================= */}

              <p className="text-[#b5b5b5] text-[12px]">

                <span className="mr-2 text-white">
                  •
                </span>

                <span className="font-semibold text-white">
                  {data.verifiedNumber}
                </span>{" "}

                <span>
                  {data.verifiedText}
                </span>

              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceCategoryHero;