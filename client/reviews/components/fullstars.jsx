/* eslint-disable react/prop-types */
import React from 'react';
import {BsStarFill} from 'react-icons/bs';
import {BsStar} from 'react-icons/bs';
import {BsStarHalf} from 'react-icons/bs';


class FStars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stars: this.props.stars
    }
  }

  render() {
    const items = [];
    var full = this.state.stars;

    for (full; full > 0; full--) {
      items.push(<BsStarFill key={full}/>);
    }

    return (
      <span>
        {items}
      </span>
    )
  }
}

export default FStars;