/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

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
      for (var i = 1; i <= 5; i++) {
        if (i in counts) {
          sum += i * counts[i];
          div += 1;
        } else {
          counts[i] = 0;
        }
      }

      var average = sum / div;
      average = average.toFixed(2);
      var recommendation = rec.true / div * 100;
      recommendation = recommendation.toFixed(2);
      console.log('review Meta', this.props.reviewMeta);

      var characteristics = this.props.reviewMeta.characteristics;
      var char_array = [];
      for (var char in characteristics) {
        char_array.push([char, characteristics[char]]);
      }
      console.log('Array', char_array);

      return (
        <div id='breakdown'>
          <div id='average'> {average} </div>
          <div id='recommend'> {`${recommendation}% of reviews recommend this product`} </div>
          <div className='stars'>
            <div id='five'> {`5 stars: ${counts[5]}`} </div>
            <div id='four'> {`4 stars: ${counts[4]}`}  </div>
            <div id='three'> {`3 stars: ${counts[3]}`}  </div>
            <div id='two'> {`2 stars: ${counts[2]}`}  </div>
            <div id='one'> {`1 stars: ${counts[1]}`}  </div>
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