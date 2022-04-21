/* eslint-disable react/prop-types */
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  processSearch(searchValue) {

    if (searchValue.length >= 3) {
      const copiedQuestionList = structuredClone(this.props.originalQuestionList);
      let newQuestionResults = [];
      for (let question of copiedQuestionList.results) {
        if (question.question_body.toLowerCase().replaceAll(' ', '').includes(searchValue.replaceAll(' ', ''))) {
          newQuestionResults.push(question)
        }
      }
      copiedQuestionList.results = newQuestionResults
      this.props.setQuestionList(copiedQuestionList)
    } else {
      this.props.setQuestionList(structuredClone(this.props.originalQuestionList))
    }
  }

  render() {
    return(

        <input
          onChange={(e) => this.processSearch(e.target.value)} 
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        />
    );
  }
}

export default SearchBar;