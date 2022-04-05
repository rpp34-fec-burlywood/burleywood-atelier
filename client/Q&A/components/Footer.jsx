import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <button>
          MORE ANSWERED QUESTIONS
        </button>
        <br />
        <button>
          ADD A QUESTION +
        </button>
      </div>
    );
  }
}

export default Footer;