import React from 'react';

const subtitleStyle = {
  fontSize: '10pt',
  fontStyle: 'italic',
  fontfamily: 'Helvetica',
  color: '#1d1d5e',
}


const Section = ({
  title,
  subtitle,
  minititle,
  children
}) => {

  return (
    <div>
      <div style={{ display: 'flex', borderBottom: '1px solid rgb(29 29 94 / 10%)', paddingBottom: '10px', alignItems: 'baseline' }}>
        <div style={{
          flex: '1',
          color: '#1d1d5e',
          fontWeight: '700',
          // textTransform: 'uppercase',
          fontfamily: 'Helvetica',
          fontSize: '12pt',
          display: 'flex',
          alignItems: 'baseline'
          }}>
          {title}
          {minititle && (
            <div
              style={{
                display: 'inline',
                fontSize: '10pt',
                fontStyle: 'italic',
                fontWeight: '400',
                paddingLeft: '20px'
              }}
            >
              {minititle}
            </div>
          )}
        </div>
        {subtitle && (
          <div style={subtitleStyle}>
            {subtitle}
          </div>
        )}
      </div>
      <div style={{ fontSize: '10pt' }}>
        {children}
      </div>
    </div>
  )
};

export default Section;