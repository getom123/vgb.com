// src/components/CTA.jsx

import React, { useState } from 'react';
import Button from './ui/Button';
import './CTA.css';

const CTA = () => {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const accountNumber = '683 9908 011';

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Unable to copy account number:', error);
    }
  };

  const closeModal = () => {
    setShowDonateModal(false);
    setCopied(false);
  };

  return (
    <section className="cta">
      <div className="container cta-container">

        <span className="cta-tag">MAKE A DIFFERENCE</span>

        <h2>
          Your Support Can <span>Change a Life</span>
        </h2>

        <p>
          Every contribution helps us provide skills, resources, and
          opportunities that empower youth, women, and communities to build
          sustainable livelihoods.
        </p>

        <Button
          variant="primary"
          size="large"
          onClick={() => setShowDonateModal(true)}
        >
          Donate Now
        </Button>

      </div>

      {/* ================================
          DONATION MODAL
      ================================= */}

      {showDonateModal && (
        <div
          className="donation-modal-overlay"
          onClick={closeModal}
        >
          <div
            className="donation-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              className="donation-modal-close"
              onClick={closeModal}
              aria-label="Close donation modal"
            >
              &times;
            </button>

            {/* Header */}
            <div className="donation-modal-header">

              <div className="donation-icon">
                ₦
              </div>

              <span className="donation-modal-tag">
                SUPPORT OUR MISSION
              </span>

              <h2>Make a Donation</h2>

              <p>
                Your generosity helps us create opportunities, provide
                practical skills, and support communities in need.
              </p>

            </div>

            {/* Bank Details */}
            <div className="bank-details">

              <h3>Bank Transfer</h3>

              <div className="bank-detail">
                <span>Account Name</span>
                <strong>
                  VGB FOUNDATION
                </strong>
              </div>

              <div className="bank-detail">
                <span>Bank Name</span>
                <strong>
                  MoniePoint
                </strong>
              </div>

              <div className="bank-detail account-number-row">
                <div>
                  <span>Account Number</span>

                  <strong>
                    {accountNumber}
                  </strong>
                </div>

                <button
                  className="copy-account"
                  onClick={copyAccountNumber}
                >
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>
              </div>

            </div>

            {/* Note */}
            <div className="donation-note">
              <span>💙</span>

              <p>
                Every donation, no matter the amount, contributes to
                creating meaningful opportunities and transforming lives.
              </p>
            </div>

            <button
              className="donation-done"
              onClick={closeModal}
            >
              Done
            </button>

          </div>
        </div>
      )}

    </section>
  );
};

export default CTA;