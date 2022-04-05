import React from 'react';
import Title from './components/Title.jsx';
import SearchBar from './components/SearchBar.jsx';
import Answer from './components/Answer.jsx';
import Footer from './components/Footer.jsx';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Title/>
        <SearchBar/>
        <Answer/>
        <Footer/>
      </div>
    );
  }

}

export default QuestionsAndAnswers;