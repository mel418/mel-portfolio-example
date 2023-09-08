import React from 'react';
import '../styles/Experience.css'; 
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; 

const Experience = () => {
  return (
    <div className="container">
      <h1>Work and Study Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="August 2021 - Present"
          iconStyle={{ background: '#ff69b4', color: 'white' }}
        >
          <h3 className="vertical-timeline-element-title">Target</h3>
          <h4 className="vertical-timeline-element-subtitle">Retail Employee</h4>
          <p>
            I have been working at Target since August 2021. During my time there, I have gained valuable experience in various aspects of retail operations and customer service.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="Present"
          iconStyle={{ background: '#ff69b4', color: 'white' }}
        >
          <h3 className="vertical-timeline-element-title">Secretary of Women in Coding at CSULB</h3>
          <h4 className="vertical-timeline-element-subtitle">Student Organization</h4>
          <p>
            I currently hold the position of Secretary at Women in Coding, a student organization at CSULB. In this role, I assist in organizing events, workshops, and activities to promote diversity in the field of computer science.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="April 2023"
          iconStyle={{ background: '#ff69b4', color: 'white' }}
        >
          <h3 className="vertical-timeline-element-title">Marinahacks 3.0 Hackathon</h3>
          <h4 className="vertical-timeline-element-subtitle">Second Place Winner</h4>
          <p>
            I participated in the Marinahacks 3.0 hackathon and secured the second-place position. My team and I developed a music recommendation Discord bot called "Ser Tibbles" using Python and Discord.py. It was an exciting experience, and we were proud of our achievement.
          </p>
        </VerticalTimelineElement>
        {/* Add more timeline items for additional experiences */}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
