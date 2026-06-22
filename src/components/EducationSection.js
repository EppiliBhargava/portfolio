import React from 'react';
import Section from './Section';

function EducationSection() {
  return (
    <Section
      id="education"
      title="Education"
    >
      <div className="card">
        <h3 className="card-title">Centurion University of Technology &amp; Management</h3>
        <p className="card-meta">B.Tech · Computer Science Engineering · 2017 - 2021</p>
        <p className="card-meta">Bhubaneswar, Odisha, India · 8.56 CGPA</p>
      </div>
    </Section>
  );
}

export default EducationSection;
