import React from 'react';
import Section from './Section';

// Project icon component
const ProjectIcon = ({ gradient }) => (
  <div className="card-icon" style={{ background: gradient }}>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  </div>
);

const projects = [
  {
    title: 'Student Grievance Management System',
    summary: 'Built a role-based Grievance Management Portal using Spring MVC, Hibernate (JPA), Maven, and JUnit, implementing Student/Staff/Admin workflows, robust entity mappings, and service-layer validations throughout the full software development lifecycle (SDLC).',
    //gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image:'/Student Management System.png'
  },
  {
    title: 'COVID-19 Tracker & Awareness App',
    summary: 'Built and deployed a Spring Boot COVID-19 Tracker leveraging RestTemplate-based REST API integration, in-memory caching, and Chart.js-powered data visualizations on a Thymeleaf frontend for real-time country and state-level insights.',
    //gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    image: '/COVID - 19 Tracker.png'
  },
  {
    title: ' Online Examination Portal',
    summary: 'Built and deployed a full-stack Online Examination System using Spring Boot, MySQL, JSP, and Bootstrap, implementing RESTful APIs, role-based access control, session authentication, question bank and result management, and automated exam submission through Spring scheduling.',
    //gradient: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
    image: '/Online Examination Portal.png'
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
