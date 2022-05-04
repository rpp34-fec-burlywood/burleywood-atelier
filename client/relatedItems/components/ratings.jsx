import reviewHandlers from '../../utils/reviewUtils.js';
import API from '../../utils/APIRequests.js';
import React from 'react';

import Stars from '../../stars.jsx';

class Ratings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ratings: 0
    }
    this.getRatings = this.getRatings.bind(this)
  }

getRatings(productID) {
   API.getReviewMeta(productID)
    .then((ratings) => {
      let total = 0
      let count = 0
      for(let rating in ratings.ratings) {
        total += Number(ratings.ratings[rating])
        count++;
      }
      let average = 0;
       average = total/count;
       console.log(average)
       this.setState({ratings: average})
    })
 }

  render() {
    return(
      <>
       <Stars stars={this.state.ratings} />
      </>

    )
  }
}

export default Ratings;