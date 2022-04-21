/* eslint-disable react/prop-types */

import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    var review = this.props.data;
    const months = {
      '01' : "January",
      '02' : "February",
      '03' : "March",
      '04' : "April",
      '05' : "May",
      '06' : "June",
      '07' : "July",
      '08' : "August",
      '09' : "September",
      '10' : "October",
      '11' : "November",
      '12' : "December"
    }

    const date = review.date.split('T')[0].split('-');
    const year = date[0];
    const month = months[date[1]];
    const day = date[2];
    var dateText = `${month} ${day}, ${year}`;
    console.log('Month', date);

    return(
      <div>
        <div> {`${review.reviewer_name}, ${dateText}`} </div>
        <div> {review.summary} </div>
        <div> {review.body} </div>
        <div> ------------------- </div>
      </div>
    );
  }

}

export default Review;