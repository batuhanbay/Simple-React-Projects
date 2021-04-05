import React from 'react'

const validation = (props) => {
  let returnMessage = "Text long enough";
  if(props.inputLength <= 5 ){
    returnMessage = "Text too short";
  }
  return(
    <div>
     <p>{returnMessage}</p>
    </div>
  )
}

export default validation;