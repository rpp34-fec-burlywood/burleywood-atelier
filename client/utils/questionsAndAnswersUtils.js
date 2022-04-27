import API from './APIRequests.js';

async function getQuestionsArray (productID) {

  let questions = await API.getQuestions(productID);
  let sortedQuestionsArray = questions.results;
  sortedQuestionsArray.sort((a, b) => (b.question_helpfulness - a.question_helpfulness))
  questions.results = sortedQuestionsArray
  this.setState({questionsList : questions});
}

var qaHandlers = {
  getQuestionsArray,
}

export default qaHandlers;