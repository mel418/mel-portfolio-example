import React from 'react';
import '../styles/Main.css'; // Import your CSS file

const Main = () => {
  // Sample projects data, replace with your own projects
  const projects = [
    {
      title: 'Shopping Cart Web App',
      description: (<div className='description'>
        <p>
          Developed a React-based shopping cart web app that integrates the FakeStore API for product data.
        </p>
        <p>
          Features include:
          <ul>
            <li>Product browsing</li>
            <li>Cart management</li>
            <li>Responsive design</li>
          </ul>
        </p>
        <p>
          Proficiently used:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Context API</li>
            <li>CSS for UI styling</li>
          </ul>
        </p>
        <p>Gained skills in asynchronous data fetching, state management, routing, and debugging.</p>
      </div>),
      link: 'https://github.com/mel418/my-shopping-cart-app--practice-/tree/main/shopping-cart-app',
    },
    {
      title: 'Discord-Music-Rec-Bot',
      description: (
        <div className="description">
          <p>
            Developed a Discord bot using Python and the Discord.py library to provide music and music recommendations to users.
          </p>
          <p>
            Features include:
            <ul>
              <li>Integration with the Spotify API for music recommendations based on genres and song links.</li>
              <li>Customizable bot commands for interacting with the bot.</li>
              <li>Responsive handling of user requests and error messages.</li>
            </ul>
          </p>
          <p>
            Utilized the Spotipy library for Spotify API integration and Discord.py for building Discord bot functionality.
          </p>
          <p>Gained skills in API integration, bot development, and error handling.</p>
        </div>
      ),
      link: 'https://github.com/mel418/Discord-Music-Rec-Bot/blob/master/MarinaHacks.py',
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
        <div className="project-list">
        <h2>Portfolio</h2>
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
