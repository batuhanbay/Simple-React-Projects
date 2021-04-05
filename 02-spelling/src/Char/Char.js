import React from 'react';

const char = ( props ) => {
  const styleChar = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    border: '1px solid black'
  }
  return(
    <div style={styleChar} onClick={props.clicked}>
      {props.character}
    </div>
  )
}

export default char;