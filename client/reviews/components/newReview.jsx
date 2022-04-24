import React from 'react';

class NewReview extends React.Components {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <form>
          <label>Rating:</label>
          {/* <input type="text"><br></br> */}
          <label>Summary:</label>
          {/* <input type="text"><br></br> */}
          <label>Body:</label>
          {/* <input type="text"><br></br> */}
        </form>
      </div>
    );
  }
}