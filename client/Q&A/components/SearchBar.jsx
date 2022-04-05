import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form>
        <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." name="question_search"/>
        <button type="submit">
        </button>
      </form>
    );
  }
}

export default SearchBar;