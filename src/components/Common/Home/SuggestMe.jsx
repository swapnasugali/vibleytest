import character from "../../../assets/character.png";

const SuggestMe = () => {
  return (
    <section
      className="
        relative
        mt-6
        w-full
        overflow-hidden
        rounded-[4px]
        bg-gradient-to-r
        from-[#fff0c9]
        via-[#fff9e9]
        to-[#f6f6f6]
      "
    >
      <div
        className="
          relative
          flex
          min-h-[180px]
          w-full
          items-center
          justify-center
          px-4
          py-6

          sm:min-h-[200px]
          sm:px-6

          md:min-h-[230px]
          md:px-8

          lg:min-h-[260px]
          lg:px-12

          xl:min-h-[290px]
          xl:px-16
        "
      >
        {/* ================= CONTENT ================= */}
        <div
          className="
            z-10
            flex
            w-full
            flex-col
            items-center
            justify-center
            text-center

            md:w-[65%]

            lg:w-[68%]

            xl:w-[70%]
          "
        >
          {/* Heading */}
          <h3
            className="
              max-w-[300px]
              text-[14px]
              font-medium
              leading-relaxed
              text-[#3b3b3b]

              sm:max-w-[450px]
              sm:text-[16px]

              md:max-w-[500px]
              md:text-[18px]

              lg:max-w-[650px]
              lg:text-[20px]

              xl:text-[22px]
            "
          >
            Not sure where to start? Let us recommend the best organizer /
            service for your event.
          </h3>

          {/* Button */}
          <button
            type="button"
            className="
              mt-4
              flex
              h-10
              w-[145px]
              cursor-pointer
              items-center
              justify-center
              rounded-[4px]
              bg-[#a90000]
              text-[12px]
              font-semibold
              uppercase
              text-white
              transition
              hover:bg-[#850000]

              sm:w-[155px]
              sm:text-[13px]

              md:h-11
              md:w-[165px]
              md:text-[14px]

              lg:h-12
              lg:w-[180px]
              lg:text-[15px]

              xl:w-[190px]
              xl:text-[16px]
            "
          >
            Suggest Me
          </button>

          {/* Bottom Text */}
          <p
            className="
              mt-4
              text-[10px]
              italic
              text-[#252525]

              sm:text-[11px]

              md:text-[12px]

              lg:text-[13px]

              xl:text-[14px]
            "
          >
            Attend the Short Survey, and we will suggest you the best!
          </p>
        </div>

        {/* ================= CHARACTER ================= */}
        <div
          className="
            absolute
            bottom-0
            right-0
            hidden
          
            items-end
            justify-end

            md:flex
            md:h-full
            md:w-[35%]

            lg:w-[32%]

            xl:w-[30%]
          "
        >
          <img
            src={character}
            alt="Vibely character"
            className="
              h-auto
              max-h-full
              w-auto
              max-w-full
              object-contain
              object-bottom
            "
          />
        </div>
      </div>
    </section>
  );
};

export default SuggestMe;
