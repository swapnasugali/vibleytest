import { useState } from "react";
import pillars from "../../../assets/pillars.png";
import "@fontsource/cinzel";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    eventType: "",
    notes: "",
    call: false,
    whatsapp: false,
  });

  const [successMessage, setSuccessMessage] = useState("");

  // ================= HANDLE INPUT CHANGE =================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setSuccessMessage("");
  };

  // ================= SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();

    // Contact preference validation
    if (!formData.call && !formData.whatsapp) {
      alert("Please select Call or WhatsApp");
      return;
    }

    // Success
    setSuccessMessage("Form submitted successfully!");

    console.log("Form Data:", formData);
  };

  // ================= CUSTOM CHECKBOX =================
  const CustomCheckbox = ({ label, name, checked }) => {
    return (
      <label className="flex cursor-pointer items-center gap-2 font-['Cinzel'] uppercase">
        <span>{label}</span>

        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={handleChange}
          className="sr-only"
        />

        <span
          className={`flex h-4 w-4 items-center justify-center rounded-[2px] border border-[#d99b1c] text-[12px] font-bold text-white ${
            checked ? "bg-[#d99b1c]" : ""
          }`}
        >
          {checked && "✓"}
        </span>
      </label>
    );
  };

  return (
    <section className="w-full bg-[#ffffff] px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-14 lg:py-14 xl:px-16">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* ================= HEADING ================= */}
        <h2 className="mb-6 text-center text-[26px] font-medium text-[#252525] sm:text-[30px] md:text-[32px] lg:text-[34px] hover:text-pink-500 hover:scale-105">
          Let us Connect
        </h2>

        <form onSubmit={handleSubmit}>

          {/* ================= TABLET / LAPTOP FORM ================= */}
          <div className="relative hidden w-full min-[500px]:block">
            <div className="relative aspect-[2.15/1] w-full">

              <img
                src={pillars}
                alt="Pillar frame"
                className="pointer-events-none absolute inset-0 h-full w-full object-contain"
              />

              <div
                className="
                  absolute
                  left-1/3
                  top-1/2
                  w-[52%]
                  -translate-x-1/2
                  -translate-y-1/2
                  md:w-[50%]
                  lg:w-[46%]
                  xl:w-[40%]
                "
              >

                {/* NAME */}
                <div className="mb-[2.5%] grid grid-cols-[38%_1fr] items-center gap-[3%] hover:scale-105 transition-transform duration-300">
                  <label className="font-['Cinzel'] text-right text-[10px] uppercase tracking-wide text-[#FFE9C0] md:text-[11px] lg:text-[12px]">
                    Your Name :
                  </label>

                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      minLength="2"
                      className="
                        h-[18px]
                        w-[450px]
                        max-w-full
                        rounded-[6px]
                        border
                        border-[#d99b1c]
                        bg-transparent
                        px-3
                        text-center
                        text-[9px]
                        text-white
                        outline-none
                        placeholder:text-[#E16158]
                        md:h-[26px]
                        md:text-[10px]
                        lg:h-[34px]
                        lg:text-[11px]
                        xl:h-[38px]
                      "
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="mb-[2.5%] grid grid-cols-[38%_1fr] items-center gap-[3%] hover:scale-105 transition-transform duration-300">
                  <label className="font-['Cinzel'] text-right text-[10px] uppercase tracking-wide text-[#FFE9C0] md:text-[11px] lg:text-[12px]">
                    Email :
                  </label>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="
                        h-[18px]
                        w-[450px]
                        max-w-full
                        rounded-[6px]
                        border
                        border-[#d99b1c]
                        bg-transparent
                        px-3
                        text-center
                        text-[9px]
                        text-white
                        outline-none
                        placeholder:text-[#E16158]
                        md:h-[26px]
                        md:text-[10px]
                        lg:h-[34px]
                        lg:text-[11px]
                        xl:h-[38px]
                      "
                    />
                  </div>
                </div>

                {/* CONTACT NUMBER */}
                <div className="mb-[2.5%] grid grid-cols-[38%_1fr] items-center gap-[3%] hover:scale-105 transition-transform duration-300">
                  <label className="font-['Cinzel'] text-right text-[10px] uppercase tracking-wide text-[#FFE9C0] md:text-[11px] lg:text-[12px]">
                    Contact Number :
                  </label>

                  <div>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="Enter your contact number"
                      required
                      pattern="[3-9][0-9]{9}"
                      maxLength="10"
                      inputMode="numeric"
                      title="Phone number must be exactly 10 digits and start with 3 to 9"
                      className="
                        h-[18px]
                        w-[450px]
                        max-w-full
                        rounded-[6px]
                        border
                        border-[#d99b1c]
                        bg-transparent
                        px-3
                        text-center
                        text-[9px]
                        text-white
                        outline-none
                        placeholder:text-[#E16158]
                        md:h-[26px]
                        md:text-[10px]
                        lg:h-[34px]
                        lg:text-[11px]
                        xl:h-[38px]
                      "
                    />
                  </div>
                </div>

                {/* EVENT TYPE */}
                <div className="mb-[2.5%] grid grid-cols-[38%_1fr] items-center gap-[3%] hover:scale-105 transition-transform duration-300">
                  <label className="font-['Cinzel'] text-right text-[10px] uppercase tracking-wide text-[#FFE9C0] md:text-[11px] lg:text-[12px]">
                    Event Type :
                  </label>

                  <div>
                    <input
                      type="text"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      placeholder="Corporate, Wedding, Birthday, Concert etc."
                      required
                      className="
                        h-[18px]
                        w-[450px]
                        max-w-full
                        rounded-[6px]
                        border
                        border-[#d99b1c]
                        bg-transparent
                        px-3
                        text-center
                        text-[9px]
                        text-white
                        outline-none
                        placeholder:text-[#E16158]
                        md:h-[26px]
                        md:text-[10px]
                        lg:h-[34px]
                        lg:text-[11px]
                        xl:h-[38px]
                      "
                    />
                  </div>
                </div>

                {/* NOTES */}
                <div className="grid grid-cols-[38%_1fr] items-start gap-[3%] hover:scale-105 transition-transform duration-300">
                  <label className="pt-2 font-['Cinzel'] text-right text-[10px] uppercase tracking-wide text-[#FFE9C0] md:text-[11px] lg:text-[12px]">
                    Notes / Query :
                  </label>

                  <div>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Brief your query if any..."
                      required
                      className="
                        h-[18px]
                        w-[450px]
                        max-w-full
                        resize-none
                        rounded-[6px]
                        border
                        border-[#d99b1c]
                        bg-transparent
                        px-3
                        py-2
                        text-[9px]
                        text-white
                        outline-none
                        placeholder:text-[#E16158]
                        md:h-[52px]
                        md:text-[10px]
                        lg:h-[66px]
                        lg:text-[11px]
                        xl:h-[75px]
                      "
                    />
                  </div>
                </div>

                {/* CHECKBOXES */}
                <div className="mt-[3%] flex justify-center gap-10 text-[10px] text-[#FFE9C0] md:text-[11px] lg:text-[12px] hover:scale-105 transition-transform duration-300">
                  <CustomCheckbox
                    label="Call"
                    name="call"
                    checked={formData.call}
                  />

                  <CustomCheckbox
                    label="WhatsApp"
                    name="whatsapp"
                    checked={formData.whatsapp}
                  />
                </div>

              </div>
            </div>
          </div>

          {/* ================= MOBILE FORM ================= */}
          <div className="block rounded-[6px] border-y-4 border-[#d99b1c] bg-gradient-to-r from-[#4b0808] via-[#a51d1d] to-[#4b0808] px-4 py-6 shadow-md sm:px-6 sm:py-7 min-[500px]:hidden">
            <div className="space-y-4">

              {/* NAME */}
              <div>
                <label className="mb-2 block font-['Cinzel'] text-[11px] uppercase tracking-wide text-[#f2d8c8]">
                  Your Name :
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  minLength="2"
                  className="h-10 w-full rounded-[5px] border border-[#d99b1c] bg-transparent px-3 text-[11px] text-white outline-none placeholder:text-[#cba19b]"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block font-['Cinzel'] text-[11px] uppercase tracking-wide text-[#f2d8c8]">
                  Email :
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="h-10 w-full rounded-[5px] border border-[#d99b1c] bg-transparent px-3 text-[11px] text-white outline-none placeholder:text-[#cba19b]"
                />
              </div>

              {/* CONTACT NUMBER */}
              <div>
                <label className="mb-2 block font-['Cinzel'] text-[11px] uppercase tracking-wide text-[#f2d8c8]">
                  Contact Number :
                </label>

                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  required
                  pattern="[3-9][0-9]{9}"
                  maxLength="10"
                  inputMode="numeric"
                  title="Phone number must be exactly 10 digits and start with 3 to 9"
                  className="h-10 w-full rounded-[5px] border border-[#d99b1c] bg-transparent px-3 text-[11px] text-white outline-none placeholder:text-[#cba19b]"
                />
              </div>

              {/* EVENT TYPE */}
              <div>
                <label className="mb-2 block font-['Cinzel'] text-[11px] uppercase tracking-wide text-[#f2d8c8]">
                  Event Type :
                </label>

                <input
                  type="text"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  placeholder="Corporate, Wedding, Birthday, Concert etc."
                  required
                  className="h-10 w-full rounded-[5px] border border-[#d99b1c] bg-transparent px-3 text-[11px] text-white outline-none placeholder:text-[#cba19b]"
                />
              </div>

              {/* NOTES */}
              <div>
                <label className="mb-2 block font-['Cinzel'] text-[11px] uppercase tracking-wide text-[#f2d8c8]">
                  Notes / Query :
                </label>

                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Brief your query if any..."
                  required
                  className="h-24 w-full resize-none rounded-[5px] border border-[#d99b1c] bg-transparent px-3 py-2 text-[11px] text-white outline-none placeholder:text-[#cba19b]"
                />
              </div>

              {/* MOBILE CHECKBOXES */}
              <div className="flex justify-center gap-8 pt-2 text-[11px] text-[#f2d8c8]">
                <CustomCheckbox
                  label="Call"
                  name="call"
                  checked={formData.call}
                />

                <CustomCheckbox
                  label="WhatsApp"
                  name="whatsapp"
                  checked={formData.whatsapp}
                />
              </div>

            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="mx-auto mt-5 flex h-11 w-[180px] cursor-pointer items-center justify-center rounded-[7px] bg-[#c98500] px-6 text-[16px] font-semibold uppercase text-white transition hover:bg-[#a96f00] sm:h-12 sm:w-[210px] sm:text-[18px] md:h-[50px] md:w-[230px] md:text-[20px] lg:h-[54px] lg:w-[250px] lg:text-[22px] cursor-pointer hover:bg-blue-300 hover:text-red-400"
          >
            Submit
          </button>

          {successMessage && (
            <div className="mt-4 text-center text-[14px] font-medium text-green-600">
              {successMessage}
            </div>
          )}

        </form>
      </div>
    </section>
  );
};

export default ContactForm;