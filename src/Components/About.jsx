// src/components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">


      {/* Who We Are */}
      <div className="container about-container">

        <div className="about-image">
          <img
            src="/images/vgb-about.jpg"
            alt="VGB Foundation community empowerment"
          />
        </div>

        <div className="about-content">

          <span className="small-heading">WHO WE ARE</span>

          <h2>
            Building people who can
            <span> build their communities.</span>
          </h2>

          <p>
            VGB Foundation is committed to creating positive change by
            empowering individuals and communities with practical skills,
            entrepreneurship knowledge, resources, and opportunities.
          </p>

          <p>
            We believe that sustainable development begins when people are
            equipped with the capacity and opportunities to improve their
            livelihoods. Through skills development, entrepreneurship
            initiatives, outreach activities, and community-focused
            programs, we work to create pathways toward economic
            independence and meaningful participation in society.
          </p>

          <div className="about-highlight">
            <span>Our goal is simple:</span>
            <strong>
              Empower people today so they can create impact tomorrow.
            </strong>
          </div>

        </div>

      </div>


      {/* Mission & Vision */}
      <div className="container mission-container">

        <div className="mission-card">
          <div className="card-number">01</div>

          <h3>Our Mission</h3>

          <p>
            To equip individuals with practical skills and entrepreneurship
            knowledge, organize outreach activities to assist people in need,
            and bring positive change to the community through empowerment
            opportunities that enable people to improve their livelihoods
            and create sustainable impact within their communities.
          </p>
        </div>


        <div className="mission-card vision-card">
          <div className="card-number">02</div>

          <h3>Our Vision</h3>

          <p>
            To build empowered communities where youth and women have the
            skills, resources, and opportunities to achieve economic
            independence and contribute meaningfully to society.
          </p>
        </div>

      </div>


      {/* Values */}
      <div className="container values-section">

        <div className="section-title">
          <span className="section-tag">WHAT GUIDES US</span>

          <h2>
            Our Core <span>Values</span>
          </h2>

          <p>
            The principles that shape how we serve people and create impact.
          </p>
        </div>


        <div className="values-grid">

          <div className="value-card">
            <span className="value-icon">01</span>
            <h3>Empowerment</h3>
            <p>
              We believe people thrive when they have the skills, resources,
              and opportunities to take charge of their future.
            </p>
          </div>

          <div className="value-card">
            <span className="value-icon">02</span>
            <h3>Compassion</h3>
            <p>
              We care about people and are committed to responding to
              genuine community needs with dignity and respect.
            </p>
          </div>

          <div className="value-card">
            <span className="value-icon">03</span>
            <h3>Opportunity</h3>
            <p>
              We create pathways that help individuals discover their
              potential and pursue economic independence.
            </p>
          </div>

          <div className="value-card">
            <span className="value-icon">04</span>
            <h3>Impact</h3>
            <p>
              We focus on practical initiatives that produce meaningful,
              sustainable change in people's lives and communities.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;