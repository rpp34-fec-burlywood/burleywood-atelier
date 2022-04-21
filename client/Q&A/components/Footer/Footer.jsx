/* eslint-disable react/prop-types */
import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return(
      <div id='qa-footer'>
        <div id='show-more-questions'>
          <button
            id='show-more-questions-button'
          >
            MORE ANSWERED QUESTIONS
          </button>
        </div>
        <div id='add-question'>
          <button 
            onClick={this.props.addQuestionClickHandler}
            id='add-question-button'
          >
            ADD A QUESTION +
          </button>
        </div>
      </div>
    );
  }
}

export default Footer;