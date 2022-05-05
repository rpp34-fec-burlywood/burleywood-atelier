/* eslint-disable react/prop-types */
import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  processSearch(searchValue) {

    if (searchValue.length >= 3) {
      const copiedQuestionList = structuredClone(this.props.originalQuestionList);
      // filter questions
      copiedQuestionList.results = copiedQuestionList.results.filter((question) => {
        return question.question_body.toLowerCase().replaceAll(' ', '').includes(searchValue.replaceAll(' ', ''))
      });
      this.props.setQuestionList(copiedQuestionList)
    } else {
      this.props.setQuestionList(structuredClone(this.props.originalQuestionList))
    }
  }

  render() {
    return(
      <div id='search-bar'> 
        <input
          id='search-bar-input'
          onChange={(e) => this.processSearch(e.target.value)} 
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS... '
        />
      </div>

    );
  }
}

export default SearchBar;