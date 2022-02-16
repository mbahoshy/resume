import React from 'react';

const nameStyle2 = {
  width: '100%',
  backgroundColor: '#1d1d5e',
  // backgroundColor: '#35359c',
  // backgroundColor: 'rgb(64 64 64)',
  fontFamily: 'Helvetica',
  // fontFamily: 'Montserrat',
  // fontFamily: 'Inter',
  fontSize: '20pt',
  borderBottom: '1px solid #ccc',
  color: 'white',
  // textAlign: 'center',
  padding: '20px 0',
}

const Header = () => {
  return (
    <div style={nameStyle2}>
    <div style={{
      display: 'flex',
      padding: '0 20px'
    }}>
      <div style={{ flex: '1' }}>Matthew Ross</div>
      <div style={{
        // fontSize: '16pt',
        fontStyle: 'italic'
        }}>Senior Project Manager</div>
    </div>
    {/* <span style={{ padding: '0 20px' }}>
      Matthew Ross
      <span style={{ float: 'right' }}>Senior Project Manager</span>
      <br />

    </span> */}
    {/* <i>Senior Project Manager</i> */}
  </div>
  )
}

export default Header;