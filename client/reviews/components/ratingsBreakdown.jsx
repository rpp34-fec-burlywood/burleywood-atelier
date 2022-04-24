/* eslint-disable react/prop-types */
import React from 'react';

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var sum = 0;
    var rec = 0;
    var reviews = this.props.reviews;

    for (var i = 0; i < reviews.length; i++) {
      sum += reviews[i].rating; // Perhaps have this in the inital call
      rec += reviews[i].recommend ? 1 : 0;
    }
    var average = sum / reviews.length;
    var recommendation = rec / reviews.length * 100;
    return (
      <div>
        <div> {`Score: ${average}`} </div>
        <div> {`${recommendation}% of reviews recommend this product`} </div>
      </div>
    );
  }
}

export default RatingsBreakdown;