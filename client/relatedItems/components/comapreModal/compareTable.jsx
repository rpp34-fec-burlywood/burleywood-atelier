/* eslint-disable react/prop-types */
import React from 'react';

const CompareTable = (props) => {
  //compare left and right
  let left = props.left.includes(props.item)
  let right = props.right.includes(props.item)

  return (
    <tr>
      <th id='th-left'> {left ? <span className='compare-left'>	&#10004;</span> : null}</th>
      <th id='th-center'> {props.item}</th>
      <th id='th-right'> {right ? <span className='compare-right'>	&#10004;</span> : null}</th>
    </tr>
  )
}

export default CompareTable;