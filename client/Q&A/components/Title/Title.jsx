/* eslint-disable react/prop-types */
import React from 'react';
import './Title.css';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <h1 id='qa-title'>
        Questions & Answers
      </h1>

    );
  }
}

export default Title;