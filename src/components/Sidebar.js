import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { MARGIN_LEFT, SIDEBAR_HEIGHT, SIDEBAR_WIDTH } from '../constants';
import IconText from './IconText';


const spacerStyle = {
  height: '20px',
  width: '100%',
  fontSize: '12pt'
}

const headerStyle = {
  color: '#1d1d5e',
  fontWeight: '700',
  textTransform: 'uppercase',
  fontfamily: 'Helivetica',
  fontSize: '12pt'
}


const Sidebar = () => {

  return (
    <div style={{
      fontSize: '10pt',
      width: SIDEBAR_WIDTH,
      height: SIDEBAR_HEIGHT,
      display: 'inline-block',
      verticalAlign: 'top',
      backgroundColor: '#f7f7f7'
      
      }}>
      <div style={{ padding: `20px 20px 20px ${MARGIN_LEFT}` }}>
        <div style={headerStyle}>Contact</div>
        <div>mbahoshy@gmail.com</div>
        <div>(253) 228-8586</div>
        <div>Denver, CO</div>
        <div style={{ marginTop: '10px', marginBottom: '3px' }}>
          <IconText
            text="LinkedIn"
            href="https://www.linkedin.com/in/mbahoshy/"
            icon={<LinkedInIcon />}
          />
        </div>
        <div>
          <IconText
            text="GitHub"
            href="https://github.com/mbahoshy/"
            icon={<GitHubIcon />}
          />
        </div>


        <div style={spacerStyle}></div>

        <div style={headerStyle}>Technical Skills</div>
        <div>React</div>
        <div>Angular</div>
        <div>Node/Express</div>
        <div>Javascript</div>
        <div>C#</div>
        <div>Python</div>
        <div>Go</div>
        <div>Mongo</div>
        <div>SQL</div>
        <div>NoSQL</div>
        {/* <div>RESTful design</div> */}


        <div style={spacerStyle}></div>
        <div style={headerStyle}>Roles</div>
        <div>Technical Business Consulting</div>
        <div>Project Manager</div>
        <div>Lead Developer</div>
        <div>Project Architect</div>
        <div>Scrum Master</div>
        <div>New Project Development</div>
        <div>Customer Relationship</div>

{/* 
        <div>Design and Estimate New Projects</div>
        <div>Interviewing and Onboarding</div>
        <div>Manage ticketing system and accounting integration</div>
        <div>Customer Relations</div>
        <div>Emergency Technical support</div> */}



      </div>
    </div>
  )
}

export default Sidebar;