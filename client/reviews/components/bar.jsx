/* eslint-disable react/prop-types */
import React from 'react';

class Bar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var items = [];
    var count = this.props.total;
    var num = this.props.count;

    var width = 200/count;

    for(var i = 0; i < num; i++) {
      items.push(<div className='black' width={1}> </div>);
      count--;
    }

    for(var i = 0; i < count; i++) {
      items.push(<div className='grey' width={1}> </div>);
    }

    return (
      <div id='percents'>
        {items}
      </div>
    )
  }
}

export default Bar;