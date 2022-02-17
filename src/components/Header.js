import React from 'react';
import { MARGIN_LEFT, MARGIN_RIGHT, HEADER_HEIGHT } from '../constants';

const containerStyle = {
  height: HEADER_HEIGHT,
  width: '100%',
  backgroundColor: '#1d1d5e',
  fontFamily: 'Helvetica',
  fontSize: '20pt',
  color: 'white',
}

const Header = () => {
  return (
    <div style={containerStyle}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          padding: `0 ${MARGIN_LEFT} 0 ${MARGIN_RIGHT}`
        }}>
          <div style={{ flex: '1' }}>Matthew Ross</div>
          <div style={{
            // fontSize: '16pt',
            fontStyle: 'italic'
            }}>Senior Project Manager</div>
        </div>
    </div>
  )
}

export default Header;