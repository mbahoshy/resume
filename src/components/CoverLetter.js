import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconText from './IconText';
import CoverLetterBody from './CoverLetterBody';

const paperStyle = {
  width: '8.5in',
  // width: '100%',
  height: '11in',
  margin: '0',
  // margin: '.25in 2in 2in .25in'
}

const containerStyle = {
  // padding: '.5in 1in',
  height: '10in',
  paddingTop: '.5in',
  marginLeft: '1in',
  marginRight: '1in',
  overflowY: 'hidden',
  fontSize: '12pt'
}

const headerStyle = {
  color: '#1d1d5e',
  fontWeight: '600',
  fontFamily: 'Helvetica',
  fontSize: '20pt',
  width: '100%',
  textAlign: 'center',
  height: '.5in',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const bodyStyle = {
  fontSize: '10pt'
}

const dividerStyle = {
  width: '100%',
  // margin: 'auto',
  paddingBottom: '10px',
  borderBottom: '1px solid #1d1d5e'
}



const CoverLetter = () => {

  return (
    <div style={paperStyle}>
      <div style={containerStyle}>
        
        <div style={headerStyle}>
          <div>
            Matthew Ross
          </div>
        </div>
        <div style={dividerStyle}></div>
        <div style={{ margin: '.25in 0' }}>
          <div>
            mbahoshy@gmail.com
          </div>
          <div>
            (253) 228-8586
          </div>
          <div>
            Denver, CO
          </div>
        </div>
      
        <div style={{ margin: '.5in 0' }}>
          <div>3/12/2022</div>
          <div>GitHub - Application for Senior Software Engineer</div>
        </div>

        <CoverLetterBody />

      </div>
   
    </div>
  )
}

export default CoverLetter;