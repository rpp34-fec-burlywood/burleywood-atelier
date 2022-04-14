/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Card.jsx';
import $ from 'jquery';
import RightButton from './rightButton.jsx';

class YourOutfit extends React.Component {
  constructor(props) {
    super(props);

    this.slideLeft = this.slideLeft.bind(this)
    this.slideRight = this.slideRight.bind(this)
  }
  slideLeft (){
    var element = document.getElementById('outfits');
    const scrollLength = element.offsetWidth / 4
    element.scrollLeft -= scrollLength;
    if(element.scrollLeft - element.scrollLeft === 0) {
      $('#right-outfit').show()
      $('#left-outfit').hide()
    }
  }

 slideRight() {
  var element = document.getElementById('outfits');
  const scrollLength = element.offsetWidth / 4
  element.scrollLeft += scrollLength;
  if (element.scrollLeft === 0 )
      {
       $('#right-outfits').hide()
       $('#left-outfits').show()
      }
}

  render() {
    return(
      <div>
       <div id="outfit-container">
        <button id="left-outfit" onClick={this.slideLeft}>left</button>
          <div id ="outfits">
            {this.props.num.map((product) => (
              <Card key={product.value.id + product.value.name} product={product.value} />
            ))}
            </div>
            <RightButton len ={this.props.num.length} buttonID={'outfit'} slideLeft={this.props.slideRight}/>
        </div>
      </div>
    );
  }

}

export default YourOutfit;