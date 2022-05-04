//naming it button for now
import React from 'react';

const rightButton = (props) => {
  console.log(props)
  if(props.len >4 && props.buttonID === 'related') {
    return (
      <button className="arrowRight" id= {`right-${props.buttonID}`} onClick={()=>props.slideRight(props.buttonID)} >&#10093;

      </button>
    )
  }
  if(props.len >3 && props.buttonID === 'outfit') {
    return (
      <button className="arrow" id= {`right-${props.buttonID}`} onClick={()=>props.slideRight(props.buttonID)} >&#10093;

      </button>
    ) }else {
    return (
      <p></p>
    )
  }

}
export default rightButton