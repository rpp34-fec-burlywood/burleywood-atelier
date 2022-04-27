/* eslint-disable react/prop-types */
import React from 'react';
import CompareModal from './compareModal.jsx'

class CompareButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftArray : [],
      rightArray : [],
      centerArray: [],
      modalShowing: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.buildArrays = this.buildArrays.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  //this.props.currProd is current product's feature
  //this.props.selectedProd is selected product's feature...

  buildArrays (){
    // build array of all the features with duplicates removed.
    let left = []
    this.props.currProd.forEach(item => {
      if(item.value && item.value) {
        //combine
        let temp = item.value + ' ' + item.feature
        left.push(temp)
      }
    });
    let right = []
    this.props.selectedProd.forEach(item => {
      if(item.value && item.feature) {
        let temp = item.value + ' ' + item.feature
        right.push(temp)
      }
    })
    let combined = [... new Set([...left, ...right])]
    this.setState({leftArray: left, rightArray: right, centerArray: combined})
  }
closeModal(){
  this.setState({modalShowing: false})
  document.removeEventListener("click", this.closeModal);
}
handleClick(e) {
  this.buildArrays();
  this.setState(prevState => ({
    modalShowing : !prevState.modalShowing
  }));
  e.stopPropagation();

  document.addEventListener("click", this.closeModal);

}


render() {
  return (

    <button className='compare-button' onClick ={(e)=>this.handleClick(e)}>
      &#10025;
      {this.state.modalShowing ?
        <CompareModal leftName ={this.props.leftName} rightName ={this.props.rightName} left ={this.state.leftArray} center = {this.state.centerArray} right ={this.state.rightArray}/> : null
      }
    </button>
  )
}
}
export default CompareButton;