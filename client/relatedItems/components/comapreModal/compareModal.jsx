/* eslint-disable react/prop-types */
import React from 'react';
import CompareTable from './compareTable.jsx';


// class CompareModal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       leftArray : [],
//       rightArray : [],
//       centerArray: []
//     }
//   }
//   render() {
//     console.log(this.props)
//     return(
//       <div className='compareModal' >
//        <CompareTable left = {this.state.left} right = {this.state.right} center = {this.state.center}/>
//      </div>
//     )
//   }
// }
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
        <tbody>
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