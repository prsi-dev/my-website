import ContactForm from "../components/ContactForm";
import "../styles/contact.scss";

function Contact({ theme }) {
  return (
    <main className={`Contact__${theme}`}>
      <h2>Contact</h2>
      <section className="Contact__section">
        <ContactForm />
      </section>
    </main>
  );
}
export default Contact;
