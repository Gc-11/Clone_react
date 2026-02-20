
import { useState } from "react"

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.name.length < 3) {
      setStatus("Name must be at least 3 characters")
      return
    }

    setStatus("Message sent successfully!")
  }

  return (
    <section className="contactSection">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
        <button type="submit" className="btn">Send Message</button>
        <p>{status}</p>
      </form>
    </section>
  )
}

export default ContactForm
