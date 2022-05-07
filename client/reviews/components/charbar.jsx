/* eslint-disable react/prop-types */
import React from 'react';
import './reviews.css';
import {BsTriangleFill} from 'react-icons/bs';

class CharBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var item = this.props.char;
    console.log('Item', item);
    var pixels = (310 / 5) * parseFloat(item[1].value);
    var move = pixels + "px";

    var style = {
      left: move,
    }

    var chars = {
      Size: {
        1: 'Too Small',
        3: 'Perfect',
        5: 'Too Big'
      },
      Width: {
        1: 'Too Narrow',
        3: 'Perfect',
        5: 'Too Wide'
      },
      Comfort: {
        1: 'Uncomfortable',
        3: 'Ok',
        5: 'Perfect'
      },
      Quality: {
        1: 'Poor',
        3: 'Expected',
        5: 'Perfect'
      },
      Length: {
        1: 'Runs Short',
        3: 'Perfect',
        5: 'Runs Long'
      },
      Fit: {
        1: 'Runs Tight',
        3: 'Perfect',
        5: 'Runs Loose'
      }
    }

    return (
      <div id='char_chart'>
        <div id='greylines'>
          <div className='greychar'></div>
          <div className='greychar'></div>
          <div className='greychar'></div>
        </div>
        <div id='chartext'>
          <div className='char' id='left'>{chars[item[0]][1]}</div>
          <div className='char' id='mid'>{chars[item[0]][3]}</div>
          <div className='char' id='right'>{chars[item[0]][5]}</div>
          <BsTriangleFill id='pointer' style={style}/>
        </div>
      </div>
    )
  }
}

export default CharBar;