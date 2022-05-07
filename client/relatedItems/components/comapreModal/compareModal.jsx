/* eslint-disable react/prop-types */
import React from 'react';
import CompareTable from './compareTable.jsx';

const CompareModal = (props) => {
  return (
    <div className='compareModal'>
     <p>COMPARING</p>
      <table id ='table'>
        <thead>
          <tr>
            <th>{props.leftName}</th>
            <th></th>
            <th>{props.rightName}</th>
          </tr>
        </thead>
        <tbody id='table-body'>
        <tr>
          <th></th>
        </tr>
        {props.center.map((item, index) => (
        <CompareTable key={index} item = {item} left ={props.left} right ={props.right} />
      ))}
        </tbody>
      </table>
    </div>
  )
}
export default CompareModal;