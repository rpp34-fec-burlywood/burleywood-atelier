/* eslint-disable react/prop-types */
import React from 'react';
import Title from './components/Title.jsx';
import SearchBar from './components/SearchBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import QuestionsList from './components/QuestionsList/QuestionsList.jsx';
import './style.css'
class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currProd !== this.props.currProd) {
      this.props.refetch(this.props.currProd.id);
    }
  }
  
  render() {
    return (
      <div>
        <Title/>
        <SearchBar/>
        <QuestionsList questions={this.props.questionsList}/>
        <Footer/>
      </div>
    );
  }

}

export default QuestionsAndAnswers;