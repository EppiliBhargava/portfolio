import React from 'react';
import Section from './Section';

const SkillGroup = ({ title, items }) => (
  <div className="skill-group">
    <h3 className="skill-group-title">{title}</h3>
    <div className="skill-tags">
      {items.map((skill) => (
        <span key={skill} className="tag">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills"
    >
      <div className="skills-grid">
        <SkillGroup
          title="Backend Development"
          items={['Core Java(OOPs, Collections, Streams)', 'C', 'C#', 'Spring Boot', 'Maven', 'Gradle']}
        />
        <SkillGroup
          title="Frontend Development"
          items={['HTML5', 'CSS3', 'JavaScript(ES6+)', 'ReactJs']}
        />
        <SkillGroup
          title="Databases"
          items={['SQL', 'MySQL', 'Database Design & Optimization']}
        />
        <SkillGroup
          title="Dev Tools"
          items={['Git', 'GitHub', 'Github Actions', 'VS Code', 'IntelliJ IDEA']}
        />
        <SkillGroup
          title="Other"
          items={['IBM Rhapsody', 'Unity 3D', 'Maya']}
        />
      </div>
    </Section>
  );
}

export default SkillsSection;
