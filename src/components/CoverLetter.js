import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconText from './IconText';

const paperStyle = {
  width: '8.5in',
  // width: '100%',
  height: '11in',
  margin: '0',
  fontSize: '12pt',
  // margin: '.25in 2in 2in .25in'
}

const headerStyle = {
  color: '#1d1d5e',
  fontWeight: '600',
  fontFamily: 'Helvetica',
  fontSize: '20pt',
  width: '100%',
  textAlign: 'center'
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

const containerStyle = {
  margin: '.25in 1in'
}

const CoverLetter = () => {

  return (
    <div style={paperStyle}>
      <div style={containerStyle}>
        
        <div style={headerStyle}>Matthew Ross</div>
        <div style={dividerStyle}></div>
        <div style={{ fontSize: '10pt', margin: '.25in 0' }}>
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
      
        <div style={{ margin: '.25in 0'}}>
          <div>3/12/2022</div>
          <div>Application for the position of Senior Software Engineer</div>
        </div>
        <div style={bodyStyle}>
          <p style={{ marginBottom: '.5in' }}>
            Dear Hiring Manager,
          </p>
          <p>
            My career in software development was born from passion. I spent hours holed up in my room
            learning PHP, SQL and jQuery. In 2013 I applied to an accelerated bootcamp to learn how to market
            my skills.
          </p>
          <p>
            Shortly after, I was hired at a software consulting company as a junior developer. Over the past 8 years
            I rose through the ranks and saw the company (and our clients) through 2 major transitions.
          </p>

          <p>
            Our development stack was always on the cutting edge, and I have been using React extensively since its early
            days. As a consultant, however, I was exposed to many different programming languages and systems. My biggest
            asset as a developer was my ability to quickly learn and use effectively any technology thrown my way.
          </p>

          <p>
            As my career progressed, I took on additional responsibilities - quoting and estimating, code review,
            scrum meetings, hiring and interviewing, client meetings, emergency support - I became a jack of many trades.
          </p>

          <p>
            I am excited to apply for this position because it is a great opportunity to continue growing in this industry.
            Github has been a part of my journey since the beginning.
            I've fostered an incredible relationship with my former employer and our long standing clients.
            I look forward to demonstrating these qualities in my next position.
          </p>

          <p style={{ marginBottom: '.5in', marginTop: '.25in'}}>
            Thank you for the consideration,
          </p>
          <p>Matthew Ross</p>

            {/* I am excited to apply for this position as it seems like a natural trajectory for my growth. I have been a */}
            {/* big fish in a small pond, and I am ready for my next adventure and opportunity to learn from those around me. */}
          {/* <p>
            There has been an incredible relationship and loyalty between myself, my current employer, and our long standing clients.
            I look forward to bringing this same integrity and work ethic to my next employer.
          </p>         */}


        </div>
    
      </div>
   
    </div>
  )
}

export default CoverLetter;