import React, { cloneElement } from 'react';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
  color: '#1d1d5e',
  textDecoration: 'none'
}

const IconText = ({
  href,
  text,
  icon
}) => {

  const x = cloneElement(icon, {
    style: {
      fontSize: '18px',
      marginLeft: '5px'
    },
    height: '18',
    width: '18'
  })

  if (href) return (
    <a href={href} style={containerStyle}>
      {text}
      {x}
    </a>
  )

  return (
    <div style={containerStyle}>
      {text}
      {x}
    </div>
  )
}

export default IconText;