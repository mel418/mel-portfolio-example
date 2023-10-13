import React from 'react';
import '../styles/Experience.css'; 
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; 

const Experience = () => {
  return (
    <div className="container experience">
      <h1 className='title'>Work and Study Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date="August 2021 - Present"
          iconStyle={{ background: '#ff69b4', color: 'white' }}
        >
          <h3 className="vertical-timeline-element-title">Target</h3>
          <h4 className="vertical-timeline-element-subtitle">Fulfillment Expert</h4>
          <ul>
            <li>
              Collaborate in a team of 5, exceeding daily goals by fulfilling 2000 online orders
            </li>
            <li>
            Maintain organized, safe workspace for accurate fulfillment
            </li>
            <li>
            Provide exceptional guest service, resolving issues promptly
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date="April 2023"
          iconStyle={{ background: '#ff69b4', color: 'white' }}
        >
          <h3 className="vertical-timeline-element-title">Marinahacks 3.0 Hackathon</h3>
          <h4 className="vertical-timeline-element-subtitle">Second Place Winner</h4>
          <ul>
            <li>
            Developed Ser Tibbles, a music recommendation Discord bot using Python and Discord.py
            </li>
            <li>
            Utilized the Spotify API for song suggestions based on user input
            </li>
            <li>
            Collaborated with a team of 4, secured 2nd place in the entertainment category
            </li>
          </ul>
          <p>
            Github: <span><a href='https://github.com/mel418/Discord-Music-Rec-Bot' target='_blank'>Discord-Music-Rec-Bot</a></span>  
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date="Present"
          iconStyle={{ background: '#ff69b4', color: 'white' }}
        >
          <h3 className="vertical-timeline-element-title">Secretary of Women in Coding (WIC) at CSULB</h3>
          <h4 className="vertical-timeline-element-subtitle">Student Organization</h4>
          <ul>
            <li>
              Proficiently manage communication by sending out emails and newsletters to members using MailChimp with one-week advance notice
            </li>
            <li>
              Ensure efficient and organize meetings by effectively organizing and minute-taking
            </li>
            <li>
              Contributing to the organization by assisting in the planning and execution of social events
            </li>
          </ul>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date="June 2023 - Present"
          iconStyle={{ background: '#ff69b4', color: 'white' }}
        >
          <h3 className="vertical-timeline-element-title">The Odin Project</h3>
          <h4 className="vertical-timeline-element-subtitle">Web Development</h4>
          <p>
            Working on various web development projects and learning new technologies through The Odin Project.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
