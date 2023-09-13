import React from 'react';
import '../styles/Main.css'; // Import your CSS file

const Main = () => {
  // Sample projects data, replace with your own projects
  const projects = [
    {
      title: 'Project 1',
      description: 'A description of your first project.',
      link: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'A description of your second project.',
      link: 'https://github.com/yourusername/project2',
    },
    {
      title: 'Project 3',
      description: 'A description of your third project.',
      link: 'https://github.com/yourusername/project3',
    },
  ];

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
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Main;
