import pillars from "../../../assets/pillars.png";

const ContactForm = () => {
  const CustomCheckbox = ({ label }) => {
    return (
      <label className="flex cursor-pointer items-center gap-2 uppercase">
        <span>{label}</span>

        <input type="checkbox" className="peer sr-only" />

        <span className="flex h-4 w-4 items-center justify-center rounded-[2px] border border-[#d99b1c] text-[12px] font-bold text-white peer-checked:bg-[#d99b1c]">
          <span className="hidden peer-checked:block">✓</span>
        </span>
      </label>
    );
  };

  return (
    <section className="w-full bg-[#fffdfa] px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-14 lg:py-14 xl:px-16">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Heading */}
        <h2 className="mb-6 text-center text-[26px] font-medium text-[#252525] sm:text-[30px] md:text-[32px] lg:text-[34px]">
          Let us Connect
        </h2>

        {/* ================= DESKTOP / TABLET FORM ================= */}
        <div className="relative hidden w-full md:block">
          <div className="relative aspect-[2.15/1] w-full">
        <div className="block w-full md:hidden"></div>


            {/* Pillars Background */}
            <img
              src={pillars}
              alt="Pillar frame"
              className="pointer-events-none absolute inset-0 h-full w-full object-contain"
            />

            {/* Form */}
            <div className="absolute left-1/2 top-1/2 w-[52%] -translate-x-1/2 -translate-y-1/2 lg:w-[46%] xl:w-[40%]">

              {/* Your Name */}
              <div className="mb-[2.2%] grid grid-cols-[38%_1fr] items-center gap-[3%]">
                <label className="text-right text-[10px] uppercase tracking-wide text-[#f2d8c8] md:text-[11px] lg:text-[12px]">
                  Your Name :
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="h-7 w-full rounded-[6px] border border-[#d99b1c] bg-transparent px-3 text-center text-[9px] text-white outline-none placeholder:text-[#cba19b] md:h-8 md:text-[10px] lg:h-9 lg:text-[11px]"
                />
              </div>

              {/* Email */}
              <div className="mb-[2.2%] grid grid-cols-[38%_1fr] items-center gap-[3%]">
                <label className="text-right text-[10px] uppercase tracking-wide text-[#f2d8c8] md:text-[11px] lg:text-[12px]">
                  Email :
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-7 w-full rounded-[6px] border border-[#d99b1c] bg-transparent px-3 text-center text-[9px] text-white outline-none placeholder:text-[#cba19b] md:h-8 md:text-[10px] lg:h-9 lg:text-[11px]"
                />
              </div>

              {/* Contact Number */}
              <div className="mb-[2.2%] grid grid-cols-[38%_1fr] items-center gap-[3%]">
                <label className="text-right text-[10px] uppercase tracking-wide text-[#f2d8c8] md:text-[11px] lg:text-[12px]">
                  Contact Number :
                </label>

                <input
                  type="tel"
                  placeholder="Enter your contact number"
                  className="h-7 w-full rounded-[6px] border border-[#d99b1c] bg-transparent px-3 text-center text-[9px] text-white outline-none placeholder:text-[#cba19b] md:h-8 md:text-[10px] lg:h-9 lg:text-[11px]"
                />
              </div>

              {/* Event Type */}
              <div className="mb-[2.2%] grid grid-cols-[38%_1fr] items-center gap-[3%]">
                <label className="text-right text-[10px] uppercase tracking-wide text-[#f2d8c8] md:text-[11px] lg:text-[12px]">
                  Event Type :
                </label>

                <input
                  type="text"
                  placeholder="Corporate, Wedding, Birthday, Concert etc."
                  className="h-7 w-full rounded-[6px] border border-[#d99b1c] bg-transparent px-3 text-center text-[9px] text-white outline-none placeholder:text-[#cba19b] md:h-8 md:text-[10px] lg:h-9 lg:text-[11px]"
                />
              </div>

              {/* Notes / Query */}
              <div className="grid grid-cols-[38%_1fr] items-start gap-[3%]">
                <label className="pt-2 text-right text-[10px] uppercase tracking-wide text-[#f2d8c8] md:text-[11px] lg:text-[12px]">
                  Notes / Query :
                </label>

                <textarea
                  placeholder="Brief your query if any..."
                  className="h-14 w-full resize-none rounded-[6px] border border-[#d99b1c] bg-transparent px-3 py-2 text-[9px] text-white outline-none placeholder:text-[#cba19b] md:h-16 md:text-[10px] lg:h-20 lg:text-[11px]"
                />
              </div>

              {/* Checkboxes */}
              <div className="mt-[2.5%] flex justify-center gap-10 text-[10px] text-[#f2d8c8] md:text-[11px] lg:text-[12px]">
                <CustomCheckbox label="Call" />
                <CustomCheckbox label="WhatsApp" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE FORM ================= */}
        <div className="block rounded-[6px] border-y-4 border-[#d99b1c] bg-gradient-to-r from-[#4b0808] via-[#a51d1d] to-[#4b0808] px-4 py-6 shadow-md sm:px-6 sm:py-7 md:hidden">

          <div className="space-y-4">

            {/* Name */}
            <div>
              <label className="mb-2 block text-[11px] uppercase tracking-wide text-[#f2d8c8]">
                Your Name :
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="h-10 w-full rounded-[5px] border border-[#d99b1c] bg-transparent px-3 text-[11px] text-white outline-none placeholder:text-[#cba19b]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-[11px] uppercase tracking-wide text-[#f2d8c8]">
                Email :
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="h-10 w-full rounded-[5px] border border-[#d99b1c] bg-transparent px-3 text-[11px] text-white outline-none placeholder:text-[#cba19b]"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="mb-2 block text-[11px] uppercase tracking-wide text-[#f2d8c8]">
                Contact Number :
              </label>

              <input
                type="tel"
                placeholder="Enter your contact number"
                className="h-10 w-full rounded-[5px] border border-[#d99b1c] bg-transparent px-3 text-[11px] text-white outline-none placeholder:text-[#cba19b]"
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="mb-2 block text-[11px] uppercase tracking-wide text-[#f2d8c8]">
                Event Type :
              </label>

              <input
                type="text"
                placeholder="Corporate, Wedding, Birthday, Concert etc."
                className="h-10 w-full rounded-[5px] border border-[#d99b1c] bg-transparent px-3 text-[11px] text-white outline-none placeholder:text-[#cba19b]"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="mb-2 block text-[11px] uppercase tracking-wide text-[#f2d8c8]">
                Notes / Query :
              </label>

              <textarea
                placeholder="Brief your query if any..."
                className="h-24 w-full resize-none rounded-[5px] border border-[#d99b1c] bg-transparent px-3 py-2 text-[11px] text-white outline-none placeholder:text-[#cba19b]"
              />
            </div>

            {/* Mobile Checkboxes */}
            <div className="flex justify-center gap-8 pt-2 text-[11px] text-[#f2d8c8]">
              <CustomCheckbox label="Call" />
              <CustomCheckbox label="WhatsApp" />
            </div>

          </div>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="mx-auto mt-5 flex h-11 w-[180px] cursor-pointer items-center justify-center rounded-[7px] bg-[#c98500] px-6 text-[16px] font-semibold uppercase text-white transition hover:bg-[#a96f00] sm:h-12 sm:w-[210px] sm:text-[18px] md:h-[50px] md:w-[230px] md:text-[20px] lg:h-[54px] lg:w-[250px] lg:text-[22px]"
        >
          Submit
        </button>

      </div>
    </section>
  );
};

export default ContactForm;