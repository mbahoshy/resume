import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconText from './IconText';

const paperStyle = {
  width: '8.5in',
  // width: '100%',
  height: '11in',
  margin: '0',
  fontSize: '12pt'
}

const headerStyle = {
  color: '#1d1d5e',
  fontWeight: '600',
  fontFamily: 'Helvetica',
  fontSize: '20pt',
  width: '100%',
  alignSelf: 'center'
}

const CoverLetter = () => {

  return (
    <div style={paperStyle}>
      <div style={{ display: 'flex' }}>
        <div style={headerStyle}>Matthew Ross</div>
        <div>mbahoshy@gmail.com</div>
        <div>(253) 228-8586</div>
        <div>Denver, CO</div>
        {/* <div style={{ marginTop: '10px', marginBottom: '3px' }}>
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
        </div> */}
      </div>
      <div>
        My career in software development was born from passion. I spent hours holed up in my room
        learning PHP, SQL and jQuery. Eventually, in 2013 I applied to an accelerated bootcamp to learn how to market
        my skills.

        Shortly after, I was hired at a software consulting company as a junior developer. Over the past 8 years
        I rose through the ranks and saw the company (and our clients) through 2 major transitions.

        Our development stack was always on the cutting edge, and I have been using React extensively since its early
        days. As a consultant, however, I was exposed to many different programming languages and systems. My biggest
        asset as a developer was my ability to quickly learn and use effectively any technology thrown my way.

        As my career progressed, I took on additional responsibilities - quoting and estimating, code review,
        scrum meetings, hiring and interviewing, client meetings, emergency support - I became a jack of many trades.

        I am excited to apply for this position as it seems like a natural trajectory for my growth. I have been a
        big fish in a small pond, and I am ready for my next adventure and opportunity to learn from those around me.
        
        There has been an incredible relationship and loyalty between myself, my current employer, and our long standing clients.
        I look forward to bringing this same integrity and work ethic to my next employer.


      </div>
    </div>
  )
}

export default CoverLetter;