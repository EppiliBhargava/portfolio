import React from 'react';
import Section from './Section';

function MoreSection() {
  return (
    <Section
      id="more"
      title="Beyond Work"
    >
      <div className="beyond-grid">
        <div className="beyond-card beyond-card-hobbies">
          <h3 className="beyond-label">Hobbies</h3>
          <p className="beyond-intro">
            I love exploring new places, food, and ideas. Outside work, you&apos;ll usually find me:
          </p>
          <ul className="beyond-list">
            <li>Travelling across India with friends and discovering new cities.</li>
            <li>Riding bikes and exploring new routes.</li>
            <li>Cooking and trying different kinds of food.</li>
            <li>Playing video games and experimenting with new gameplay experiences.</li>
            <li>Researching topics I come across for the first time.</li>
          </ul>
        </div>

        <div className="beyond-card beyond-card-contact">
          <div className="beyond-section">
            <h3 className="beyond-label">Languages</h3>
            <div className="language-tags">
              <span className="language-tag">English</span>
              <span className="language-tag">Telugu</span>
              <span className="language-tag">Hindi</span>
              <span className="language-tag">Odia</span>
            </div>
          </div>
          
          <div className="beyond-section">
            <h3 className="beyond-label">Contact</h3>
            <p className="beyond-contact-text">
              The best way to reach me is via LinkedIn. I&apos;m open to Salesforce Developer and Java Developer roles.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default MoreSection;
