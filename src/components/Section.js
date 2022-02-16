import React from 'react';

const subtitleStyle = {
  // fontSize: '10pt',
  fontStyle: 'italic',
  fontfamily: 'Helvetica',
  color: '#1d1d5e',
}


const Section = ({
  title,
  subtitle,
  children
}) => {

  return (
    <div>
      <div style={{ display: 'flex', borderBottom: '1px solid rgb(29 29 94 / 10%)', paddingBottom: '10px' }}>
        <div style={{
          flex: '1',
          color: '#1d1d5e',
          fontWeight: '700',
          // textTransform: 'uppercase',
          fontfamily: 'Helvetica',
          fontSize: '12pt'
          }}>
          {title}
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