/* eslint-disable react/prop-types */
import React from 'react';
import Review from './review.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
      <div>Review List</div>
      {
        this.props.reviews.map((review) => (
          <Review key={review.review_id} data={review}/>
        ))
      }
      <div>
        <button>More Reviews</button>
        <button onClick={console.log('Add Review')}>Add Review</button>
      </div>
      </div>
    );
  }

}

export default ReviewList;