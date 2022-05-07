/* eslint-disable react/prop-types */
import React from 'react';
const DeleteButton = (props) => {
  return (
    <button className='delete-outfit' onClick ={(e)=>{props.handleRemove(props.id, e)}}>
      &#9447;
    </button>
  )
}
export default DeleteButton;