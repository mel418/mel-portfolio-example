import React, { useState } from 'react';
import '../styles/Main.css'; // Import your CSS file
import projectData from '../projectData';

const Main = () => {
  const [selectedType, setSelectedType] = useState('all');

  return (
    <div className="main">
      <header>
        <h1>Melody Gatan</h1>
        <h2>Software Engineer</h2>
        <p>Computer Science Major at CSULB</p>
      </header>
      <section className="about">
        <h2>About Me</h2>
        <p>
          Hello! I'm a second-year computer science major at CSULB with a passion for coding and technology. Currently, I'm working at Target and actively seeking an internship in the field of computer science to further enhance my skills.
        </p>
      </section>
      <section className="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-buttons">
          <button
            onClick={() => setSelectedType('all')}
            className={selectedType === 'all' ? 'active' : ''}
          >
            All Projects
          </button>
          <button
          onClick={() => setSelectedType('personal')}
          className={selectedType === 'personal' ? 'active' : ''}
        >
          Personal Projects
        </button>
        <button
          onClick={() => setSelectedType('odin-project')}
          className={selectedType === 'odin-project' ? 'active' : ''}
        >
          Odin Projects
        </button>
        <button
          onClick={() => setSelectedType('class')}
          className={selectedType === 'class' ? 'active' : ''}
        >
          Class Projects
        </button>
        <button
          onClick={() => setSelectedType('hackathon')}
          className={selectedType === 'hackathon' ? 'active' : ''}
        >
          Hackathon
        </button>
        </div>
        <div className="project-list">
          {projectData.map((project, index) => {
            if (selectedType === 'all' || project.type === selectedType) {
              return (
                <div className="project" key={index}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.type === 'class' ? (
                    <p>{project.classFormat}</p>
                  ) : (
                    <div className="project-links">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                      </a>
                      <a href={project.livePreviewLink} target="_blank" rel="noopener noreferrer">
                        Live Preview
                      </a>
                    </div>
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      </section>
    </div>
  );
}

export default Main;
