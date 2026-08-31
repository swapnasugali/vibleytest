import ContactForm from "./ContactForm";
import SuggestMe from "./SuggestMe";

const ContactSection = () => {
  return (
    <section className="w-full bg-[#f7f7f7] px-4 py-10 sm:px-6 md:py-12 lg:px-10 xl:px-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className="mb-8 text-center text-[22px] font-semibold text-[#343434] sm:text-[24px] md:text-[26px]">
          Let us Connect
        </h2>

        <ContactForm />

        <SuggestMe />
      </div>
    </section>
  );
};

export default ContactSection;