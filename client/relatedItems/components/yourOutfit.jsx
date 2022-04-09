import React from 'react';
import Card from './Card.jsx';

class YourOutfit extends React.Component {
  constructor(props) {
    super(props);


  }


  render() {
    return(
      <div>
        <div className='your-outfit-container'>
          {/* {this.props.num.map((n,i) => (
            <Card key={i} />
          ))} */}
        </div>
      </div>
    );
  }

}

export default YourOutfit;