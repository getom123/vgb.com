// src/components/ui/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  type = 'button',
  href,
}) => {
  const handleClick = (e) => {
    if (href?.startsWith('#')) {
      e.preventDefault();

      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;