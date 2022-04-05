import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/overview.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Starter app</h1>
        <Overview />
      </div>
    )
  }
}

export default App;