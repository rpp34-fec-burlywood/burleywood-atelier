import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/overview.jsx';
import QuestionsAndAnswers from './Q&A/QuestionsAndAnswers.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import API from './utils/APIRequests.js';
import overviewHandler from './utils/overviewUtils.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currProd: undefined,
      currStyles: undefined,
      selectedStyle: undefined,
      // relatedProds: [];
    }

    // Binding all App state modifiers to App
    this.initialize = this.initialize.bind(this);
    this.getOverviewProduct = overviewHandler.getProduct.bind(this);
    this.getProductStyleById = overviewHandler.getProductStyleById.bind(this);

  }

  initialize() {
    // Initializes Overview by selecting 1 of 15 products
    this.getOverviewProduct(15)
    // also calls this.getProductStyleById
  }

  componentDidMount() {
    this.initialize();
    API.getRelatedProducts(64620);
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