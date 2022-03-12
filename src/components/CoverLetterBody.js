import React from 'react';

const bodyStyle = {
}

const CoverLetterBody = () => {

  return (
    <div style={bodyStyle}>
      <p style={{ marginBottom: '.5in' }}>
        Dear Hiring Manager,
      </p>
      <p>
        My career in software development was born from passion. I spent hours holed up in my room
        dreaming, designing, and building custom applications. In 2013 I applied to an accelerated bootcamp to learn how to market
        my skills.
      </p>
      <p>
        Shortly after, I was hired at a software consulting company as a junior developer. Over the past 8 years
        I rose through the ranks and saw the company (and our clients) through 2 major transitions.
      </p>

      <p>
        Our development stack was always on the cutting edge, and I have been using React extensively since its early
        days. As a consultant, I was exposed to many different programming languages. My biggest
        asset as a developer was my ability to quickly learn and use effectively any technology thrown my way.
      </p>

      <p>
        As my career progressed, I took on additional responsibilities - quoting and designing new projects,
        hiring and onboarding new developers, managing projects and customer relationships - all while continuing
        my role as a technical lead.
        
        {/* code review,
        scrum meetings, hiring and interviewing, client meetings, emergency support - I became a jack of many trades. */}
      </p>

      <p>
        GitHub has been a part of my journey since the beginning. Looking back through my repositories now,
        is like looking back through a photo book.
      
      </p>
      <p>
        I am excited to apply for this position because it is a great opportunity to continue growing in this industry.
        My skill set will be a great fit for the responsibilities outlined in the job posting.
      </p>
      <p>
        {/* I've fostered an incredible relationship with my former employer and our long standing clients.
        I look forward to demonstrating these qualities in my next position. */}
      </p>

      <p style={{ marginBottom: '.5in', marginTop: '.25in'}}>
        Thank you for your consideration, and I look forward to chatting further with you.
      </p>
      <p>Matthew Ross</p>

        {/* I am excited to apply for this position as it seems like a natural trajectory for my growth. I have been a */}
        {/* big fish in a small pond, and I am ready for my next adventure and opportunity to learn from those around me. */}
      {/* <p>
        There has been an incredible relationship and loyalty between myself, my current employer, and our long standing clients.
        I look forward to bringing this same integrity and work ethic to my next employer.
      </p>         */}


    </div>

  )
}

export default CoverLetterBody;