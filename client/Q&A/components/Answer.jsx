import React from 'react';
import LoadMoreAnswers from './LoadMoreAnswers.jsx';

class Answer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className='questions'>
          Q: Is a hotdog a sandwich?
        </div>
        <div className='answers'>
          A: YES. The U.S. Department of Agriculture (USDA) describes a sandwich as “a meat or poultry filling between two slices of bread, a bun, or a biscuit.”
        </div>
        <LoadMoreAnswers/>
      </div>

    );
  }
}

export default Answer;