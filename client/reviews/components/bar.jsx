/* eslint-disable react/prop-types */
import React from 'react';
import './reviews.css';

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
      items.push(<div className='black' width={1} key={this.props.num + i + 'b'}> </div>);
      count--;
    }

    for(var i = 0; i < count; i++) {
      items.push(<div className='grey' width={1}  key={this.props.num + i + 'g'}> </div>);
    }

    return (
      <div id='percents'>
        {items} <span id='star_count'> {this.props.count} </span>
      </div>
    )
  }
}

export default Bar;