import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { MARGIN_LEFT, SIDEBAR_HEIGHT, SIDEBAR_WIDTH } from '../constants';
import IconText from './IconText';


const spacerStyle = {
  height: '30px',
  width: '100%',
  fontSize: '12pt'
}

const headerStyle = {
  color: '#1d1d5e',
  fontWeight: '700',
  textTransform: 'uppercase',
  fontfamily: 'Helvetica',
  fontSize: '12pt'
}

const itemStyle = {
  padding: '1px 0'
}


const Item = ({ children }) => (
  <div style={itemStyle}>
    {children}
  </div>
)


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
        <Item>mbahoshy@gmail.com</Item>
        <Item>(253) 228-8586</Item>
        <Item>Denver, CO</Item>
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
        <Item>React</Item>
        <Item>Redux</Item>
        <Item>Webpack</Item>
        <Item>Angular</Item>
        <Item>Node/Express</Item>
        <Item>NextJS</Item>
        <Item>Javascript</Item>
        <Item>HTML/HTML5</Item>
        <Item>CSS/CSS3</Item>
        <Item>Bootstrap</Item>
        <Item>Flexbox</Item>
        <Item>C#</Item>
        <Item>.NET</Item>
        <Item>Python</Item>
        <Item>Go</Item>
        <Item>Ruby on Rails</Item>
        <Item>Mongo</Item>
        <Item>SQL</Item>
        <Item>NoSQL</Item>
        <Item>Git</Item>
        {/* <Item>Jira</Item> */}
        {/* <div>RESTful design</div> */}


        <div style={spacerStyle}></div>
        <div style={headerStyle}>Roles</div>
        {/* <Item>Technical Business Consulting</Item> */}
        <Item>Department Lead</Item>
        <Item>Project Manager</Item>
        <Item>Lead Developer</Item>
        {/* <Item>Project Architect</Item> */}
        <Item>Scrum Master</Item>
        <Item>Business Development</Item>
        <Item>Technical Consultant</Item>
        <Item>Customer Relations</Item>

        <div style={spacerStyle}></div>
        <div style={headerStyle}>Education</div>
        <Item>University of Washington</Item>
        <Item>Code Fellows</Item>

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