/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';
import Stars from '../../stars.jsx'
import Bar from './bar.jsx'

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var sum = 0;
    var div = 0;
    var rec = this.props.reviewMeta.recommended;
    var counts = this.props.reviewMeta.ratings;

    if (counts) {
      div = parseInt(rec.true) + parseInt(rec.false);
      for (var i = 1; i <= 5; i++) {
        if (i in counts) {
          sum += i * counts[i];
        } else {
          counts[i] = 0;
        }
      }

      var average = sum / div;
      console.log('Ave', average);
      average = average.toFixed(2);
      var recommendation = (rec.true / div) * 100;
      console.log('Recs', rec.true, div);
      recommendation = recommendation.toFixed(2);
      // console.log('review Meta', this.props.reviewMeta);

      var characteristics = this.props.reviewMeta.characteristics;
      var char_array = [];
      for (var char in characteristics) {
        char_array.push([char, characteristics[char]]);
      }
      // console.log('Array', char_array);

      return (
        <div id='breakdown'>
          <div id='overall'>
            <span className='meta' id='average'>
              {average}
            </span>
            <span className='meta' id='avestars'>
              <Stars stars={average}/>
            </span>
          </div>
          <div id='recommend'> {`${recommendation}% of reviews recommend this product`} </div>
          <div className='stars'>
            <div id='five' className='num_stars'> {`5 stars`} <Bar count={counts[5]} total={div}/> </div>
            <div id='four' className='num_stars'> {`4 stars`} <Bar count={counts[4]} total={div}/> </div>
            <div id='three' className='num_stars'> {`3 stars`} <Bar count={counts[3]} total={div}/> </div>
            <div id='two' className='num_stars'> {`2 stars`} <Bar count={counts[2]} total={div}/> </div>
            <div id='one' className='num_stars'> {`1 stars`} <Bar count={counts[1]} total={div}/> </div>
          </div>
          <br></br>
          <div className='characteristics'>
            {
              char_array.map((item) => {
                return (<div id={item[1].id} key={item[1].id}> {`${item[0]}: ${parseFloat(item[1].value).toFixed(2)}`} </div>);
              })
            }
          </div>
        </div>
      );
    }

    return (
      <div id='breakdown'>
      </div>
    );
  }
}

export default RatingsBreakdown;