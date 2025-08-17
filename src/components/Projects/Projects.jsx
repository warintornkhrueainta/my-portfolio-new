import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';


const projectsData = [
  {
    id: 1,
    title: 'mini-ecommerce-collaboration',
    description: 'My Simple Store web app.',
    technologies: ['html', 'css', 'javascript'],
    image: 'https://i.pinimg.com/736x/f2/be/de/f2bede35a94991c6b4824bf07d93f794.jpg',
    github: 'https://github.com/warintornkhrueainta/mini-ecommerce.git',
    demo: 'https://warintornkhrueainta.github.io/mini-ecommerce/'
  },
  {
    id: 2,
    title: 'my-weather-app',
    description: 'A responsive personal portfolio website showcasing projects and skills.',
    technologies: ['html', 'css', 'javascript'],
    image: 'https://i.pinimg.com/736x/5f/b0/42/5fb0428dbfb350eab752d3f81e378f8e.jpg',
    github: 'https://github.com/warintornkhrueainta/my-weather-app.git',
    demo: 'https://warintornkhrueainta.github.io/my-weather-app/'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio website showcasing projects and skills.',
    technologies: ['html', 'css', 'javascript'],
    image: 'https://i.pinimg.com/474x/51/6a/d1/516ad15e26c362fb0df89887daad9a63.jpg',
    github:'https://github.com/warintornkhrueainta/portfolio-website.git',
    demo: 'https://warintornkhrueainta.github.io/portfolio-website/'
  }
];

function Projects() {
  const [filter, setFilter] = useState('All');

  const allTechnologies = ['All', ...new Set(
    projectsData.flatMap(project => project.title)
  )];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project =>
      project.title.includes(filter)
    );

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my projects.
        </p>

        <div className="filter-controls">
          {allTechnologies.map(tech => (
            <button
              key={tech}
              className={`filter-btn ${filter === tech ? 'active' : ''}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;