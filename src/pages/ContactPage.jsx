import React, { useState } from 'react';
import { Breadcrumbs, PageBanner, SectionTitle } from '../components/common';
import { contactData, faqList, usefulPhones } from '../data/contact';

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Ingresá tu nombre';
    if (!formData.email.trim()) e.email = 'Ingresá tu correo';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Correo no válido';
    if (!formData.message.trim()) e.message = 'Ingresá tu mensaje';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
  };

  const handleChange = (field) => (ev) => {
    setFormData((prev) => ({ ...prev, [field]: ev.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  if (sent) {
    return (
      <div className="form-success">
        <p>Gracias por tu mensaje. Será respondido a la brevedad.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="contact-name">Nombre y apellido *</label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={handleChange('name')}
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'error-name' : undefined}
        />
        {errors.name && <span id="error-name" className="form-error" role="alert">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="contact-email">Correo electrónico *</label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          required
          aria-invalid={!!errors.email}
        />
        {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="contact-phone">Teléfono</label>
        <input
          id="contact-phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange('phone')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact-subject">Asunto</label>
        <input
          id="contact-subject"
          type="text"
          value={formData.subject}
          onChange={handleChange('subject')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact-message">Mensaje *</label>
        <textarea
          id="contact-message"
          rows={5}
          value={formData.message}
          onChange={handleChange('message')}
          required
          aria-invalid={!!errors.message}
        />
        {errors.message && <span className="form-error" role="alert">{errors.message}</span>}
      </div>
      <button type="submit" className="btn btn--primary btn--lg">
        Enviar mensaje
      </button>
    </form>
  );
}

export function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contacto"
        subtitle="Atención al vecino"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
      />
      <div className="container page-content">
        <Breadcrumbs items={[{ path: '/', label: 'Inicio' }, { path: '/contacto', label: 'Contacto' }]} />
        <SectionTitle title="Atención al vecino" subtitle="Estamos para escucharte." />

        <div className="contact-page__grid">
          <div className="contact-page__data">
            <h2>Datos de contacto</h2>
            <p>
              <strong>{contactData.address.street}</strong><br />
              {contactData.address.city}, {contactData.address.province}
            </p>
            <p>
              Teléfono: <a href={`tel:${contactData.phoneRaw}`}>{contactData.phone}</a>
            </p>
            <p>
              Email: <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
            </p>
            <p><strong>Horarios:</strong> {contactData.officeHours}</p>

            <h3>Teléfonos útiles</h3>
            <ul>
              {usefulPhones.map((p, i) => (
                <li key={i}>{p.label}: {p.number}</li>
              ))}
            </ul>
          </div>
          <div className="contact-page__form">
            <h2>Envianos un mensaje</h2>
            <ContactForm />
          </div>
        </div>

        <section className="faq-section">
          <h2>Preguntas frecuentes</h2>
          <dl className="faq-list">
            {faqList.map((faq) => (
              <React.Fragment key={faq.id}>
                <dt>{faq.question}</dt>
                <dd>{faq.answer}</dd>
              </React.Fragment>
            ))}
          </dl>
        </section>
      </div>
    </>
  );
}
