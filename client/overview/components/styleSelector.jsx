/* eslint-disable react/prop-types */
import React from 'react';
import StylePin from './stylePin.jsx';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);

    this.renderStyles = this.renderStyles.bind(this);
  }

  // selectedStyle={this.props.selectedStyle}
  // currProdStyles={this.props.currProdStyles}

  renderStyles(currProdStyles) {
    if (this.props.selectedStyle && currProdStyles){
      var block = [];
      var row = [
        <StylePin
          styledId={this.props.selectedStyle.style_id}
          photo={this.props.selectedStyle.photos[0].thumbnail_url}
          key={this.props.selectedStyle.style_id} />
      ];
      for (let style of currProdStyles) {
        if (style.style_id !==this.props.selectedStyle.style_id) {
          row.push(
            <StylePin
              styledId={style.style_id}
              photo={style.photos[0].thumbnail_url}
              key={style.style_id} />
          );
        }
        if (row.length >= 4) {
          block.push(<div className="styleRow">{row}</div>);
          row = new Array;
        }
      }
      block.push(<div className="styleRow">{row}</div>)
      return block;
    }
    return <div></div>
  }



  render() {
    return(
      <div className="styleSelector">
        <div>{`STYLE > ${this.props.selectedStyle?.name.toUpperCase()}`}</div>
        <div>{}</div>
        <div>
          {this.renderStyles(this.props.currProdStyles)}
        </div>

      </div>
    );
  }

}

export default StyleSelector;