/* eslint-disable react/prop-types */

import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    var review = this.props.data;
    return(
      <div>
        <div> {`${review.reviewer_name}, ${review.date }`} </div>
        <div> {review.summary} </div>
        <div> {review.body} </div>
      </div>
    );
  }

}

export default Review;