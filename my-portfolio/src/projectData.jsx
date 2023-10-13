const projectData = [
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
      githubLink: 'https://github.com/mel418/my-shopping-cart-app--practice-/tree/main/shopping-cart-app',
      livePreviewLink: 'https://my-shopping-cart-app-practice.vercel.app/',
      type: 'odin-project',
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
      githubLink: 'https://github.com/mel418/Discord-Music-Rec-Bot/blob/master/MarinaHacks.py',
      livePreviewLink: 'https://devpost.com/software/discord-music-rec-bot-ser-tibbles',
      type: 'hackathon',
    },
    {
      title: 'CECS 277 - Object Oriented Application Development',
      classFormat: (
        <div className="description">
            <a href='https://github.com/mel418/CECS-277' target="_blank" rel="noopener noreferrer">
                GitHub Repository
            </a>
        </div>),
      type: 'class',
    },
  ];

export default projectData;