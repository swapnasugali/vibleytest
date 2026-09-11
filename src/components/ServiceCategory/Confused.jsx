import React from "react";
import { useParams } from "react-router-dom";

// =====================================================
// SUGGESTION DATA
// =====================================================

const suggestionData = {
  1: {
    questionStart: "Confused About Choosing",
    questionLine: "The",
    questionBold: "Right Photography Service",
    button: "Let Us Suggest",
  },

  2: {
    questionStart: "Confused About Choosing",
    questionLine: "The",
    questionBold: "Right Catering Service",
    button: "Let Us Suggest",
  },

  3: {
    questionStart: "Confused About Choosing",
    questionLine: "The",
    questionBold: "Right Event Service",
    button: "Let Us Suggest",
  },

  4: {
    questionStart: "Confused About Choosing",
    questionLine: "The",
    questionBold: "Right Decor Service",
    button: "Let Us Suggest",
  },

  5: {
    questionStart: "Confused About Choosing",
    questionLine: "The",
    questionBold: "Right DJ & Sound Service",
    button: "Let Us Suggest",
  },
};

// =====================================================
// IMAGES
// =====================================================

// PHOTOGRAPHY
import photo061 from "../../assets/photo061.avif";

// CATERING
import catering061 from "../../assets/catering061.png";
import catering062 from "../../assets/catering062.png";

// EVENT
import event061 from "../../assets/event061.jpg";

// DECOR
import stage061 from "../../assets/stage061.jpg";

// DJ
import dj061 from "../../assets/dj061.jpg";

// =====================================================
// DYNAMIC IMAGE DATA
// =====================================================

const suggestionImages = {
  1: [photo061],

  // catering061 = chefs
  // catering062 = food
  2: [catering061, catering062],

  3: [event061],

  4: [stage061],

  5: [dj061],
};

// =====================================================
// COMPONENT
// =====================================================

const Confused = () => {
  const { id } = useParams();

  const serviceId = Number(id);

  const content = suggestionData[serviceId];

  const images = suggestionImages[serviceId];

  // ===================================================
  // INVALID ID
  // ===================================================

  if (!content || !images) {
    return (
      <section
        className="
          flex
          min-h-[250px]
          w-full
          items-center
          justify-center
          bg-white
          px-5
        "
      >
        <p className="text-center text-sm font-medium text-[#555]">
          Service not found.
        </p>
      </section>
    );
  }

  // ===================================================
  // BUTTON
  // ===================================================

  const handleSuggest = () => {
    console.log(
      "Suggestion requested for service:",
      serviceId
    );
  };

  // ===================================================
  // UI
  // ===================================================

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white

        px-5
        py-8

        sm:px-8
        sm:py-9

        md:px-10
        md:py-8

        lg:px-12
        lg:py-8
      "
    >

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1120px]
          items-center
          justify-between
          gap-5

          md:min-h-[370px]

          lg:min-h-[390px]
        "
      >

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div
          className="
            flex
            w-full
            max-w-[550px]
            flex-col
            items-start
            justify-center

            md:pl-[45px]

            lg:pl-[55px]
          "
        >

          {/* =================================================
              QUESTION
          ================================================= */}

          <div className="flex items-start">

            {/* TEXT */}

            <div>

              {/* FIRST LINE */}

              <p
                className="
                  whitespace-nowrap
                  text-[32px]
                  font-normal
                  leading-[1.15]
                  text-[#151515]

                  sm:text-[28px]

                  md:text-[32px]

                  lg:text-[32px]
                "
              >
                {content.questionStart}
              </p>

              {/* SECOND LINE */}

              <p
                className="
                  mt-[5px]
                  whitespace-nowrap
                  text-[32px]
                  font-normal
                  leading-[1.15]
                  text-[#151515]

                  sm:text-[28px]

                  md:text-[32px]

                  lg:text-[32px]
                "
              >
                {content.questionLine}{" "}

                <span className="font-bold">
                  {content.questionBold}
                </span>
              </p>

            </div>

            {/* QUESTION MARK */}

            <span
              className="
                ml-[8px]
                mt-[-10px]
                text-[70px]
                font-semibold
                leading-none
                text-[#d93636]

                sm:text-[144px]

                md:text-[149px]

                lg:text-[154px]
              "
            >
              ?
            </span>

          </div>

          {/* =================================================
              BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={handleSuggest}
            className="
              mt-[30px]
              ml-[118px]

              cursor-pointer

              rounded-[4px]

              bg-[#b00000]

              px-[18px]
              py-[9px]

              text-[16px]
              font-semibold
              text-white

              transition
              duration-200

              hover:bg-[#850000]

              active:scale-95

              sm:ml-[120px]
            "
          >
            {content.button}
          </button>

        </div>

        {/* =================================================
            RIGHT IMAGE AREA
        ================================================= */}

        <div
          className="
            relative
            hidden
            h-[370px]
            w-[520px]
            shrink-0

            md:block

            lg:h-[400px]
            lg:w-[560px]
          "
        >

          {/* =================================================
              CATERING - TWO IMAGES
          ================================================= */}

          {serviceId === 2 ? (

            <div
              className="
                absolute
                bottom-[-25px]
                right-0
                h-full
                w-full
              "
            >

              {/* =================================================
                  FOOD IMAGE
                  TOP
              ================================================= */}

              <img
                src={images[1]}
                alt="Catering food"
                className="
                  absolute

                  right-[-5px]
                  top-[0px]

                  z-10

                  h-[300px]
                  w-[900px]

                  object-contain
                  object-bottom

                  lg:right-[-10px]
                  lg:top-[-5px]

                  lg:h-[350px]
                  lg:w-[1200px]
                "
              />

              {/* =================================================
                  CHEFS IMAGE
                  BOTTOM + MORE DOWN
              ================================================= */}

              <img
                src={images[0]}
                alt="Catering chefs"
                className="
                  absolute

                  right-[5px]
                  bottom-[-18px]

                  z-20

                  h-[500px]
                  w-[1200px]

                  object-contain
                  object-bottom

                  lg:right-[0px]
                  lg:bottom-[-15px]

                  lg:h-[500px]
                  lg:w-[1200px]
                "
              />

            </div>

          ) : (

            /* =================================================
                OTHER SERVICES
            ================================================= */

            <img
              src={images[0]}
              alt={content.questionBold}
              className="
                absolute
                bottom-[-55px]
                right-0

                h-[330px]
                w-[500px]

                object-contain
                object-bottom

                lg:h-[365px]
                lg:w-[540px]
              "
            />

          )}

        </div>

      </div>

    </section>
  );
};

export default Confused;