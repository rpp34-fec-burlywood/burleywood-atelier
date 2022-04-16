import API from './APIRequests.js';

async function getQuestionsArray (productID) {

  let questions = await API.getQuestions(productID);

  this.setState({questionsList : questions});
}

var qaHandlers = {
  getQuestionsArray,
}

export default qaHandlers;