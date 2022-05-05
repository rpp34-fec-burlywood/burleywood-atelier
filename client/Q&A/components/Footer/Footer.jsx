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
        <div id='show-more-or-collapse-questions'>

          {/* Chained ternary operator. First check if questions list contains more than 2 questions. 
              Then decides which button to load.
          */}
          {
            this.props.questions?.results?.length > 2 ? 
              this.props.loadMoreQuestions ? 
              <div
                id='show-more-questions-button'
                onClick={this.props.loadMoreQuestionsHandler}
              >
                MORE ANSWERED QUESTIONS
              </div> :
              <div
                id='collapse-questions-button'
                onClick={this.props.collapseQuestions}
              >
                COLLAPSE QUESTIONS
              </div> 
            : 
            null
          }
        </div>
        <div id='add-question'>
          <div 
            onClick={this.props.addQuestionClickHandler}
            id='add-question-button'
          >
            ADD A QUESTION +
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;