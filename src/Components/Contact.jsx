
// src/components/Contact.jsx

import React, { useState } from 'react';
import Button from './ui/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      alert('Thank you for reaching out to VGB Foundation!');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove error when user starts correcting a field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">

        {/* Section Header */}
        <div className="section-title">
          <span className="section-tag">GET IN TOUCH</span>

          <h2>
            Let's <span>Make a Difference</span> Together
          </h2>

          <p>
            Have a question, want to partner with us, volunteer, support
            our programs, or learn more about our work? We'd love to hear
            from you.
          </p>
        </div>


        <div className="contact-container">

          {/* Contact Information */}
          <div className="contact-info">

            <span className="contact-tag">CONTACT VGB FOUNDATION</span>

            <h3>
              There are many ways to
              <span> get involved.</span>
            </h3>

            <p>
              Whether you want to support our programs, collaborate with us,
              volunteer your time, or simply learn more about what we do,
              reach out to our team.
            </p>


            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>

              <div>
                <span>Email Us</span>
                <a href="mailto:info@vgbfoundation.org">
                  info@vgbfoundation.org
                </a>
              </div>
            </div>


            {/* Phone */}
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>

              <div>
                <span>Call Us</span>
                <a href="tel:+2340000000000">
                  +234 XXX XXX XXXX
                </a>
              </div>
            </div>


            {/* Location */}
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-location-dot"></i>
              </div>

              <div>
                <span>Our Location</span>
                <p>Nigeria</p>
              </div>
            </div>


            {/* Social Media */}
            <div className="contact-socials">
              <span>Follow Our Work</span>

              <div className="social-links">

                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>

              </div>
            </div>

          </div>


          {/* Contact Form */}
          <div className="contact-form-wrapper">

            <h3>Send Us a Message</h3>

            <p>
              Fill out the form below and our team will get back to you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="contact-form"
              noValidate
            >

              {/* Name */}
              <div className="form-group">
                <label htmlFor="name">Full Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />

                {errors.name && (
                  <span className="error">{errors.name}</span>
                )}
              </div>


              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                />

                {errors.email && (
                  <span className="error">{errors.email}</span>
                )}
              </div>


              {/* Subject */}
              <div className="form-group">
                <label htmlFor="subject">How Can We Help?</label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="General Enquiry">
                    General Enquiry
                  </option>
                  <option value="Partnership">
                    Partnership
                  </option>
                  <option value="Volunteer">
                    Volunteer
                  </option>
                  <option value="Donation">
                    Donation / Support
                  </option>
                  <option value="Programmes">
                    Programmes & Training
                  </option>
                </select>

                {errors.subject && (
                  <span className="error">{errors.subject}</span>
                )}
              </div>


              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Your Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                />

                {errors.message && (
                  <span className="error">{errors.message}</span>
                )}
              </div>


              <Button
                type="submit"
                variant="primary"
              >
                Send Message →
              </Button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
