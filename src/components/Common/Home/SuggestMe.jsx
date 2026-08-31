import character from "../../../assets/character.png";

const SuggestMe = () => {
  return (
    <div
      className="
        relative mt-7
        min-h-[150px]
        overflow-hidden
        rounded-[4px]
        bg-gradient-to-r
        from-[#fff0c9]
        via-[#fff9e9]
        to-[#f6f6f6]
      "
    >
      {/* Content */}
      <div
        className="
          flex min-h-[150px]
          w-full
          flex-col
          items-center
          justify-center
          px-5 py-6
          text-center

          sm:w-[75%]
          md:w-[70%]
          lg:w-[72%]
        "
      >
        <h3
          className="
            max-w-[620px]
            text-[13px]
            font-semibold
            leading-6
            text-[#3b3b3b]

            sm:text-[14px]
            md:text-[15px]
          "
        >
          Not sure where to start? Let us recommend the best organizer /
          service for your event.
        </h3>

        <button
          className="
            mt-4
            min-w-[130px]
            rounded-[4px]
            bg-[#a90000]
            px-7 py-2.5
            text-[10px]
            font-semibold
            uppercase
            text-white
            transition
            hover:bg-[#850000]
          "
        >
          Suggest Me
        </button>

        <p className="mt-4 text-[10px] italic text-[#666] sm:text-[11px]">
          Attend the Short Survey, and we will suggest you the best!
        </p>
      </div>

      {/* Character */}
      <img
        src={character}
        alt="Vibely character"
        className="
          absolute bottom-0 right-[4%]
          hidden
          h-[145px]
          w-auto
          object-contain

          sm:block
          md:h-[160px]
          lg:h-[175px]
        "
      />
    </div>
  );
};

export default SuggestMe;