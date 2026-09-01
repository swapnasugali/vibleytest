import ContactForm from "./ContactForm";
import SuggestMe from "./SuggestMe";

const ContactSection = () => {
  return (
    <section className="w-full bg-[#f7f7f7] px-4 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-10 xl:px-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <ContactForm />

        <SuggestMe />
      </div>
    </section>
  );
};

export default ContactSection;