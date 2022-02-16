import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


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
      width: '2in',
      display: 'inline-block',
      verticalAlign: 'top',
      backgroundColor: '#f7f7f7'
      
      }}>
      <div style={{ padding: '20px' }}>
        <div style={headerStyle}>Contact</div>
        <div>mbahoshy@gmail.com</div>
        <div>(253) 228-8586</div>
        <div>Denver, CO</div>
        <div>
          <a>LinkedIn</a>
          <LinkedInIcon />
          <i className="fa-brands fa-linkedin"></i>
        </div>
        {/* <h3>Preferred Stack</h3>
        <p>
          Node - Mongo - React
        </p> */}
        <div style={spacerStyle}></div>
        <div style={headerStyle}>Roles</div>
        <div>Project Manager</div>
        <div>Lead Developer</div>

        <div>Design and Estimate New Projects</div>
        <div>Interviewing and Onboarding</div>
        <div>Manage ticketing system and accounting integration</div>
        <div>Customer Relations</div>
        <div>Emergency Technical support</div>

        <div style={spacerStyle}></div>
        <div style={headerStyle}>Skills</div>
        <div>React</div>
        <div>Node/Express</div>
        <div>Javascript</div>
        <div>C#</div>
        <div>Python</div>
        <div>Go</div>
        <div>Mongo</div>
        <div>SQL</div>

      </div>
    </div>
  )
}

export default Sidebar;