import { useState } from "react";
import "./Contact.css";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", form);
    // Aquí puedes agregar lógica para enviar el formulario a un backend o servicio de correo
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-content">
          <h2 className="contact-title">Contact</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
              required
              className="contact-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              required
              className="contact-input"
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              value={form.message}
              onChange={handleChange}
              required
              className="contact-textarea"
            />
            <button type="submit" className="contact-button">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}