import React from 'react';

import Card from './components/Card';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='related-items-container'>
          RELATED PRODUCTS
          <Card/>
        </div>
        <div className='your-outfit-container'>
          YOUR OUTFIT
          <Card/>
        </div>
      </div>
    );
  }

}

export default RelatedItems;