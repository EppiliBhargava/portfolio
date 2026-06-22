import React from 'react';

function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="section-inner">
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        {title && <h2 className="section-title">{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

export default Section;
