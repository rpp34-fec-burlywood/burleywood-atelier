import API from './APIRequests.js';

async function getQuestionsArray (productID) {

  let questions = await API.getQuestions(productID);
  let sortedQuestionsArray = questions.results;

  // sort questions array
  sortedQuestionsArray.sort((a, b) => (b.question_helpfulness - a.question_helpfulness))
  questions.results = sortedQuestionsArray


  questions.results.forEach(questionObj => {

    let temp = Object.keys(questionObj.answers)
      .map((answerID) => (questionObj.answers[answerID]));
    temp.sort((a, b) => (b.helpfulness - a.helpfulness))
    questionObj.answers = temp
  });

  console.log(questions.results)

  this.setState({questionsList : questions});
}

var qaHandlers = {
  getQuestionsArray,
}

export default qaHandlers;