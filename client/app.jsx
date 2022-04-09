import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/overview.jsx';
import QuestionsAndAnswers from './Q&A/QuestionsAndAnswers.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import API from './utils/APIRequests.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    // example request upon initiation.
    API.getProducts();
  }

  componentDidMount() {
    API.getRelatedProducts(64624);
  }

  render() {
    return (
      <div>
        <h1>Starter app</h1>
        <Overview />
        <RelatedItems />
        <QuestionsAndAnswers/>
      </div>
    )
  }
}

export default App;