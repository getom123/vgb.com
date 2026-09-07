// src/components/Contact.jsx
import React, { useState } from 'react';
import Button from './ui/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name required';
    if (!formData.email) newErrors.email = 'Email required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message) newErrors.message = 'Message required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      alert('Message sent! (Demo)');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Book a Call</h2>
          <p>Let's discuss your project</p>
        </div>
        <div className="contact-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <Button type="submit" variant="primary">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;