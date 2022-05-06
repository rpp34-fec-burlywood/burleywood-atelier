/* eslint-disable react/prop-types */
import React from 'react';
import {BsStarFill} from 'react-icons/bs';
import {BsStar} from 'react-icons/bs';
import {BsStarHalf} from 'react-icons/bs';


class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.round = this.round.bind(this);
  }

  round(number) {
    if (number >= 4.75) {
      return 5;
    }
    if (number >= 4.25) {
      return 4.5;
    }
    if (number >= 3.75) {
      return 4;
    }
    if (number >= 3.25) {
      return 3.5;
    }
    if (number >= 2.75) {
      return 3;
    }
    if (number >= 2.25) {
      return 2.5;
    }
    if (number >= 1.75) {
      return 2;
    }
    if (number >= 1.25) {
      return 1.5;
    }
    if (number >= .75) {
      return 1;
    }
    if (number >= .25) {
      return .5;
    }
    if (number >= 0) {
      return 0;
    }
  }

  render() {
    const items = [];
    var count = 5;
    var i = this.round(parseFloat(this.props.stars));
    var full = Math.floor(i);
    for (full; full > 0; full--) {
      items.push(<BsStarFill key={count}/>);
      i--;
      count--;
    }

    if (i === .5) {
      items.push(<BsStarHalf key={count}/>);
      count--;
    }

    for (count; count > 0; count--) {
      items.push(<BsStar key={count}/>);
    }

    return (
      <div>
        {items}
      </div>
    )
  }
}

export default Stars;