/* eslint-disable react/prop-types */
import React from 'react';

const DeleteButton = (props) => {
  return (
    <button className='delete-outfit' onClick ={()=>{props.handleRemove(props.id)}}>
      X
    </button>
  )
}
export default DeleteButton;