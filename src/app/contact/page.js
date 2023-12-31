import ContactCard from "../components/ConatctCard"
import ContactForm from "../components/ContactForm"
import styles from './contact.module.css'
const Contact = () => {
  return (
    <div>  <div className={styles.container}>
    <h1>Contact Us</h1>
    <ContactCard />

        <section className={styles.contact_section}>
            <h2>We&apos;d love to hear <span> from you </span></h2>

            <ContactForm/>
        </section>
    </div>

</div>
  )
}

export default Contact
