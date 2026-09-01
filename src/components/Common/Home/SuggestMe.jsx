import character from "../../../assets/character.png";

const SuggestMe = () => {
  return (
    <section
      className="
        relative
        mt-6
        w-full
        overflow-visible
        rounded-[4px]
        bg-gradient-to-r
        from-[#fff0c9]
        via-[#fff9e9]
        to-[#f6f6f6]

        h-[180px]
        sm:h-[200px]
        md:h-[230px]
        lg:h-[250px]
        xl:h-[270px]
      "
    >
      {/* Content */}
      <div
        className="
          flex
          h-full
          w-full
          flex-col
          items-center
          justify-center
          px-4
          text-center

          sm:px-6

          md:w-[70%]
          md:px-8

          lg:w-[72%]
          lg:px-10

          xl:w-[75%]
        "
      >
        {/* Heading */}
        <h3
          className="
            max-w-[280px]
            text-[14px]
            font-medium
            leading-relaxed
            text-[#3b3b3b]

            sm:max-w-[420px]
            sm:text-[16px]

            md:max-w-[500px]
            md:text-[18px]

            lg:max-w-[600px]
            lg:text-[20px]

            xl:max-w-[650px]
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
            h-[38px]
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

            sm:h-[40px]
            sm:w-[150px]
            sm:text-[13px]

            md:h-[44px]
            md:w-[165px]
            md:text-[14px]

            lg:h-[46px]
            lg:w-[175px]
            lg:text-[15px]
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
          "
        >
          Attend the Short Survey, and we will suggest you the best!
        </p>
      </div>

      {/* Character */}
      <img
        src={character}
        alt="Vibely character"
        className="
          absolute
          bottom-0
          right-[3%]
          z-20
          hidden
          h-auto
          w-auto
          object-contain

          md:block
          md:h-[230px]

          lg:h-[250px]

          xl:h-[270px]
        "
      />
    </section>
  );
};

export default SuggestMe;
