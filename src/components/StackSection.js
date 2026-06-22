import React from 'react';
import Section from './Section';

const tools = [
  {
    title: 'VS Code',
    summary: 'My everyday code editor for Java, ReactJs and Unity scripts — paired with GitHub and extensions.',
  },
  {
    title: 'GitHub & GitHub Actions',
    summary: 'Version control and CI/CD for Java plugins and automation workflows.',
  },
  {
    title: 'Maven & Gradle',
    summary: 'Build tools I use to manage Java projects and streamline plugin builds.',
  },
  {
    title: 'Unity & Maya',
    summary: 'My 3D and game development stack for interactive experiences and visualizations.',
  },
  {
    title: 'SQL & SOQL',
    summary: 'For querying and optimizing relational data and Salesforce records.',
  },
];

function StackSection() {
  return (
    <Section
      id="stack"
      title="App Stack"
    >
      <div className="cards-grid">
        {tools.map((tool) => (
          <article key={tool.title} className="card reveal-on-scroll">
            <h3 className="card-title">{tool.title}</h3>
            <p className="card-summary">{tool.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default StackSection;
