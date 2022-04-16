//naming it button for now
import React from 'react';

const rightButton = (props) => {
  if(props.len >=4) {
    return (
      <button className="arrow" id= {`right-${props.buttonID}`} onClick={()=>props.slideRight(props.buttonID)} >&#5125;
      </button>
      // <div>
      //   <span id= {`right-${props.buttonID}`} onClick={()=>props.slideRight(props.buttonID)}></span>
      // </div>
    )
  } else {
    return (
      <p></p>
    )
  }

}
export default rightButton