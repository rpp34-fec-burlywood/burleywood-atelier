/* eslint-disable react/prop-types */
import React from 'react';
import StylePin from './styleComponents/stylePin.jsx';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);

    this.renderStyles = this.renderStyles.bind(this);
  }

  // selectedStyle={this.props.selectedStyle}
  // currProdStyles={this.props.currProdStyles}

  renderStyles(currProdStyles) {
    if (this.props.defaultStyle && currProdStyles) {
      var block = [];
      var counter = 0;
      var row = [
        <StylePin
          styledId={this.props.defaultStyle.style_id}
          photo={this.props.defaultStyle.photos[0].thumbnail_url}
          key={this.props.defaultStyle.style_id + this.props.selectedStyle.name} />
      ];
      for (let style of currProdStyles) {
        if (style.style_id !== this.props.defaultStyle.style_id) {
          row.push(
            <StylePin
              styledId={style.style_id}
              photo={style.photos[0].thumbnail_url}
              key={style.style_id + style.name} />
          );
        }
        if (row.length >= 4) {
          block.push(<div className="styleRow" key={counter}>{row}</div>);
          row = new Array;
          counter++;
        }
      }
      block.push(<div className="styleRow" key={counter}>{row}</div>)
      return block;
    }
    return <div></div>
  }



  render() {
    if (this.props.defaultStyle?.name && this.props.defaultStyle?.name) {
      return (
        <div className="styleSelector">
          <div>{`STYLE: ${this.props.selectedStyle.name.toUpperCase()}`}</div>
          <div className="selectStylePin" onClick={this.props.styleClickHandler}>
            {this.renderStyles(this.props.currProdStyles)}
          </div>
        </div>
      );
    }
    return  <div className="styleSelector"></div>
  }

}

export default StyleSelector;