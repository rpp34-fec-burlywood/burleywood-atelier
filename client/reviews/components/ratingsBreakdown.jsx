/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var sum = 0;
    var rec = 0;
    var counts = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    }
    var reviews = this.props.reviews;

    for (var i = 0; i < reviews.length; i++) {
      sum += reviews[i].rating; // Perhaps have this in the inital call
      counts[reviews[i].rating]++;
      rec += reviews[i].recommend ? 1 : 0;
    }
    var average = sum / reviews.length;
    average = average.toFixed(2);
    var recommendation = rec / reviews.length * 100;
    recommendation = recommendation.toFixed(2);

    return (
      <div id='breakdown'>
        <div id='average'> {average} </div>
        <div id='recommend'> {`${recommendation}% of reviews recommend this product`} </div>
        <div className='stars'>
          <div id='five'> {`5 stars: ${counts['5']}`} </div>
          <div id='four'> {`4 stars: ${counts['4']}`}  </div>
          <div id='three'> {`3 stars: ${counts['3']}`}  </div>
          <div id='two'> {`2 stars: ${counts['2']}`}  </div>
          <div id='one'> {`1 stars: ${counts['1']}`}  </div>
        </div>
      </div>
    );
  }
}

export default RatingsBreakdown;