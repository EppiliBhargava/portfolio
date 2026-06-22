import React from 'react';
import Section from './Section';

function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
    >
      <div className="timeline">
        <article className="timeline-item">
          <header className="timeline-header">
            <div>
              <h3 className="timeline-title">Full Stack Development</h3>
              <p className="timeline-meta">Self-Directed Upskilling · Aug 2024 - Present · Hyderabad</p>
            </div>
            <span className="timeline-tag">Full Stack</span>
          </header>
          <ul className="timeline-list">
            <li>
              Undertaking structured learning in Full Stack Development with focus on Java-based backend and modern frontend technologies.
            </li>
            <li>
              Building hands-on projects using HTML5, CSS3, JavaScript (ES6+), React JS, and Spring Boot.
            </li>
            <li>
              Practicing Git/GitHub workflows, REST API design, and component-based UI development.
            </li>
          </ul>
        </article>

        <article className="timeline-item">
          <header className="timeline-header">
            <div>
              <h3 className="timeline-title">Java Developer</h3>
              <p className="timeline-meta">Wipro · 2022 - 2024 · Bangalore</p>
            </div>
            <span className="timeline-tag">Java</span>
          </header>
          <ul className="timeline-list">
            <li>
              Developed and maintained backend services using Java 17, Spring Boot, and RESTful APIs, ensuring scalable and high-performance application functionality.
            </li>
            <li>
              Collaborated with cross-functional teams to design and optimize database operations using MySQL/PostgreSQL, implementing efficient queries and improving application performance.
            </li>
            <li>
              Participated in Git-based version control, code reviews, and CI/CD pipelines using Jenkins and Docker, contributing to faster and more reliable software deployments.
            </li>
            <li>
              Implemented API integrations and performed unit testing using JUnit and Mockito, improving code quality and application reliability.
            </li>
            <li>
              Worked in an Agile/Scrum environment, participating in sprint planning, daily stand-ups, and feature delivery cycles.
            </li>
          </ul>
        </article>

        <article className="timeline-item">
          <header className="timeline-header">
            <div>
              <h3 className="timeline-title">Java Developer Intern</h3>
              <p className="timeline-meta">Quantumware Technical Services Pvt. Ltd · June 2021 - Jan 2022 · Bhubaneswar, Odisha</p>
            </div>
            <span className="timeline-tag">Internship</span>
          </header>
          <ul className="timeline-list">
            <li>
              Developed and enhanced Java-based application modules using core Java concepts and object-oriented design principles.
            </li>
            <li>
              Assisted in debugging, testing, and optimizing existing applications to improve performance and resolve functional issues.
            </li>
            <li>
              Collaborated with the development team on requirement analysis, feature implementation, and maintaining technical documentation.
            </li>
          </ul>
        </article>
      </div>
    </Section>
  );
}

export default ExperienceSection;
