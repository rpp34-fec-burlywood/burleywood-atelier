/* eslint-disable react/prop-types */
import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';


class Stars extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const items = [];
    var count = 0;
    var i = this.props.stars;
    var full = Math.floor(i);
    for (full; full > 0; full--) {
      items.push(<BsStarFill/>);
      count++;
    }

    if (0.25 <= (i % 1) && (i % 1) < 0.75) {
      items.push(<BsStarHalf/>);
      count++;
    } else if ((i % 1) >= 0.75) {
      items.push(<BsStarFill/>);
      count++;
    }

    for (count; count < 5; count++) {
      items.push(<BsStar/>);
    }

    return (
      <div className="stars">
        {items}
      </div>
    )
  }
}

export default Stars;