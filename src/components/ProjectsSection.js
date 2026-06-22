import React from 'react';
import Section from './Section';

const projects = [
  {
    title: 'Student Grievance Management System',
    summary: 'Built a role-based Grievance Management Portal using Spring MVC, Hibernate (JPA), Maven, and JUnit, implementing Student/Staff/Admin workflows, robust entity mappings, and service-layer validations throughout the full software development lifecycle (SDLC).',
    image: '/Student Management System.png',
  },
  {
    title: 'COVID-19 Tracker & Awareness App',
    summary: 'Built and deployed a Spring Boot COVID-19 Tracker leveraging RestTemplate-based REST API integration, in-memory caching, and Chart.js-powered data visualizations on a Thymeleaf frontend for real-time country and state-level insights.',
    image: '/COVID - 19 Tracker.png',
  },
  {
    title: 'Online Examination Portal',
    summary: 'Built and deployed a full-stack Online Examination System using Spring Boot, MySQL, JSP, and Bootstrap, implementing RESTful APIs, role-based access control, session authentication, question bank and result management, and automated exam submission through Spring scheduling.',
    image: '/Online Examination Portal.png',
  },
];

function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Projects"
    >
      <div className="cards-grid">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <div className="card-icon">
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-summary">{project.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default ProjectsSection;
