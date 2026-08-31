import pillars from "../../../assets/pillars.png";

const ContactForm = () => {
  return (
    <section className="w-full bg-[#fffdfa] px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-14 xl:px-16">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Heading */}
        <h2 className="mb-6 text-center text-[22px] font-medium text-[#344054] sm:text-[25px] md:text-[28px]">
          Let us Connect
        </h2>

        {/* ================= DESKTOP FORM ================= */}
        <div className="relative hidden w-full sm:block">
          <div className="relative aspect-[2.15/1] w-full">

            {/* Pillars Background */}
            <img
              src={pillars}
              alt="Pillar frame"
              className="pointer-events-none absolute inset-0 h-full w-full object-contain"
            />

            {/* Form - Center */}
            <div className="absolute left-1/2 top-1/2 w-[40%] -translate-x-1/2 -translate-y-1/2">

              {/* Your Name */}
              <div className="mb-[2.2%] grid grid-cols-[38%_1fr] items-center gap-[3%]">
                <label className="text-right text-[clamp(9px,0.8vw,13px)] uppercase tracking-wide text-[#f2d8c8]">
                  Your Name :
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="h-[clamp(26px,3vw,38px)] w-full rounded-[6px] border border-[#d99b1c] bg-transparent px-3 text-center text-[clamp(8px,0.7vw,11px)] text-white outline-none placeholder:text-[#cba19b]"
                />
              </div>

              {/* Email */}
              <div className="mb-[2.2%] grid grid-cols-[38%_1fr] items-center gap-[3%]">
                <label className="text-right text-[clamp(9px,0.8vw,13px)] uppercase tracking-wide text-[#f2d8c8]">
                  Email :
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-[clamp(26px,3vw,38px)] w-full rounded-[6px] border border-[#d99b1c] bg-transparent px-3 text-center text-[clamp(8px,0.7vw,11px)] text-white outline-none placeholder:text-[#cba19b]"
                />
              </div>

              {/* Contact Number */}
              <div className="mb-[2.2%] grid grid-cols-[38%_1fr] items-center gap-[3%]">
                <label className="text-right text-[clamp(9px,0.8vw,13px)] uppercase tracking-wide text-[#f2d8c8]">
                  Contact Number :
                </label>

                <input
                  type="tel"
                  placeholder="Enter your contact number"
                  className="h-[clamp(26px,3vw,38px)] w-full rounded-[6px] border border-[#d99b1c] bg-transparent px-3 text-center text-[clamp(8px,0.7vw,11px)] text-white outline-none placeholder:text-[#cba19b]"
                />
              </div>

              {/* Event Type */}
              <div className="mb-[2.2%] grid grid-cols-[38%_1fr] items-center gap-[3%]">
                <label className="text-right text-[clamp(9px,0.8vw,13px)] uppercase tracking-wide text-[#f2d8c8]">
                  Event Type :
                </label>

                <input
                  type="text"
                  placeholder="Corporate, Wedding, Birthday, Concert etc."
                  className="h-[clamp(26px,3vw,38px)] w-full rounded-[6px] border border-[#d99b1c] bg-transparent px-3 text-center text-[clamp(8px,0.7vw,11px)] text-white outline-none placeholder:text-[#cba19b]"
                />
              </div>

              {/* Notes / Query */}
              <div className="grid grid-cols-[38%_1fr] items-start gap-[3%]">
                <label className="pt-2 text-right text-[clamp(9px,0.8vw,13px)] uppercase tracking-wide text-[#f2d8c8]">
                  Notes / Query :
                </label>

                <textarea
                  placeholder="Brief your query if any..."
                  className="h-[clamp(55px,7vw,85px)] w-full resize-none rounded-[6px] border border-[#d99b1c] bg-transparent px-3 py-2 text-[clamp(8px,0.7vw,11px)] text-white outline-none placeholder:text-[#cba19b]"
                />
              </div>

              {/* Call and WhatsApp */}
              <div className="mt-[2.5%] flex justify-center gap-[10%]">
                <label className="flex items-center gap-2 text-[clamp(9px,0.8vw,13px)] uppercase tracking-wide text-[#f2d8c8]">
                  Call

                  <input
                    type="checkbox"
                    className="
                      h-3.5
                      w-3.5
                      cursor-pointer
                      appearance-none
                      rounded-[2px]
                      border
                      border-[#d99b1c]
                      bg-transparent
                      checked:bg-transparent
                    "
                  />
                </label>

                <label className="flex items-center gap-2 text-[clamp(9px,0.8vw,13px)] uppercase tracking-wide text-[#f2d8c8]">
                  WhatsApp

                  <input
                    type="checkbox"
                    className="
                      h-3.5
                      w-3.5
                      cursor-pointer
                      appearance-none
                      rounded-[2px]
                      border
                      border-[#d99b1c]
                      bg-transparent
                      checked:bg-transparent
                    "
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE FORM ================= */}
        <div className="block rounded-[6px] border-y-4 border-[#d99b1c] bg-gradient-to-r from-[#4b0808] via-[#a51d1d] to-[#4b0808] px-5 py-7 shadow-md sm:hidden">
          
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
            <div className="flex justify-center gap-8 pt-2">
              <label className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-[#f2d8c8]">
                Call

                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 appearance-none rounded-[2px] border border-[#d99b1c] bg-transparent checked:bg-transparent"
                />
              </label>

              <label className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-[#f2d8c8]">
                WhatsApp

                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 appearance-none rounded-[2px] border border-[#d99b1c] bg-transparent checked:bg-transparent"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="mx-auto mt-5 flex h-[40px] min-w-[176px] items-center justify-center rounded-[7px] bg-[#c98500] px-8 text-[12px] font-semibold uppercase text-white transition hover:bg-[#a96f00]"
        >
          Submit
        </button>

      </div>
    </section>
  );
};

export default ContactForm;