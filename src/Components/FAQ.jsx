// src/components/FAQ.jsx
import React, { useState } from 'react';
import AccordionItem from './ui/AccordionItem';
import './FAQ.css';

const faqs = [
  { question: 'How long does a project take?', answer: 'Typical projects take 4-8 weeks depending on complexity.' },
  { question: 'Do you offer ongoing support?', answer: 'Yes, we provide maintenance and support packages.' },
  { question: 'What industries do you serve?', answer: 'We work with startups, e-commerce, healthcare, and more.' },
  { question: 'Can you help with existing websites?', answer: 'Absolutely! We offer redesign and optimization services.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Got questions? We've got answers</p>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;