/* eslint-disable react/prop-types */
import React from 'react';
import {BsStarFill} from 'react-icons/bs';
import {BsStar} from 'react-icons/bs';
import {BsStarHalf} from 'react-icons/bs';


class Stars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stars: this.floor(this.props.stars)
    }

    this.floor = this.floor.bind(this);
  }

  floor(number) {
    if (number >= 5) {
      return 5;
    }
    if (number >= 4.5) {
      return 4.5;
    }
    if (number >= 4) {
      return 4;
    }
    if (number >= 3.5) {
      return 3.5;
    }
    if (number >= 3) {
      return 3;
    }
    if (number >= 2.5) {
      return 2.5;
    }
    if (number >= 2) {
      return 2;
    }
    if (number >= 1.5) {
      return 1.5;
    }
    if (number >= 1) {
      return 1;
    }
    if (number >= .5) {
      return .5;
    }
    if (number >= 0) {
      return 0;
    }
  }

  render() {
    const items = [];
    var count = 5;
    var i = this.state.stars;
    var full = Math.floor(i);
    for (full; full > 0; full--) {
      items.push(<BsStarFill/>);
      i--;
      count--;
    }

    if (i === .5) {
      items.push(<BsStarHalf/>);
      count--;
    }

    for (count; count > 0; count--) {
      items.push(<BsStar/>);
      count--;
    }

    return (
      <div>
        {items}
      </div>
    )
  }
}

export default Stars;