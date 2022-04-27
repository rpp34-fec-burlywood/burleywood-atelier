/* eslint-disable react/prop-types */
import React from 'react';
import Title from './components/Title.jsx';
import SearchBar from './components/SearchBar.jsx';
import QuestionsList from './components/QuestionsList/QuestionsList.jsx';
import AddQuestionModal from './components/AddQuestionModal/AddQuestionModal.jsx';
import './style.css'
class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionModalOpen: false,
      originalQuestionsList: props.originalQuestionsList,
      currentQuestionsList: props.originalQuestionsList
    }

    this.addQuestionClickHandler = this.addQuestionClickHandler.bind(this);
    this.closeQuestionModal = this.closeQuestionModal.bind(this);
    this.setQuestionList = this.setQuestionList.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currProd !== this.props.currProd) {
      this.props.refetch(this.props.currProd.id);
    }
    if (prevProps.originalQuestionsList !== this.props.originalQuestionsList) {
      this.setState({
        originalQuestionsList: this.props.originalQuestionsList,
        currentQuestionsList: this.props.originalQuestionsList
      })
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

  setQuestionList(newQuestionList) {
    this.setState({
      currentQuestionsList: newQuestionList
    })
  }

  render() {
    return (
      <>
        <Title/>
        <SearchBar 
          setQuestionList={this.setQuestionList} 
          originalQuestionList={this.state.originalQuestionsList}
        />
        <QuestionsList 
          questions={this.state.currentQuestionsList}
          addQuestionClickHandler = {this.addQuestionClickHandler}
        />
        {this.state.questionModalOpen ?  
          <AddQuestionModal 
            closeModal={this.closeQuestionModal} 
            currProd={this.props.currProd}
          /> : 
          null
        }
      </>
    );
  }

}

export default QuestionsAndAnswers;