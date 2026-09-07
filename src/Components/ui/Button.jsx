// src/components/ui/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', size = 'medium', onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;