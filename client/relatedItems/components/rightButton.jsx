//naming it button for now
import React from 'react';

const rightButton = (props) => {
  if(props.len >=4) {
    return (
      <button id= {`right-${props.buttonID}`} onClick={()=>props.slideRight(props.buttonID)} >right</button>
    )
  } else {
    return (
      <p></p>
    )
  }

}
export default rightButton