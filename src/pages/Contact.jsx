 import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import ContactFooter from "../components/ContactFooter"; 

function Contact() {
  return (
    <div>
      <ContactHero />
      <main className="bg-white">
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
}

export default Contact;