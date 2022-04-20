/* eslint-disable react/prop-types */
import React from 'react';
import Title from './components/Title.jsx';
import SearchBar from './components/SearchBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import QuestionsList from './components/QuestionsList/QuestionsList.jsx';
import AddQuestionModal from './components/AddQuestionModal/AddQuestionModal.jsx';
import './style.css'
class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionModalOpen: false
    }

    this.addQuestionClickHandler = this.addQuestionClickHandler.bind(this)
    this.closeQuestionModal = this.closeQuestionModal.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currProd !== this.props.currProd) {
      this.props.refetch(this.props.currProd.id);
    }
  }

  addQuestionClickHandler() {
    this.setState({
      questionModalOpen: true
    })
  }
  
  closeQuestionModal() {
    this.setState({
      questionModalOpen: false
    })
  }

  render() {
    console.log(this.props.questionsList)
    return (
      <div>
        <Title/>
        <SearchBar/>
        <QuestionsList questions={this.props.questionsList}/>
        <Footer addQuestionClickHandler={this.addQuestionClickHandler}/>
        {this.state.questionModalOpen ?  <AddQuestionModal closeModal={this.closeQuestionModal}/> : null}
      </div>
    );
  }

}

export default QuestionsAndAnswers;