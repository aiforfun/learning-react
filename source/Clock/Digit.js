import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Digit extends Component {
  render() {
    let digitStyle={
      display:'inline-block',
      fontSize: 20,
      padding: 10,
      margin: 5,
      background: 'rgb(194, 194, 194)'
    };
    let displayValue; if(this.props.value < 10){
      displayValue = '0' + this.props.value; } else {
      displayValue = this.props.value; }
    return (
      <div style={digitStyle}>{displayValue}</div>
    ); }
}
Digit.propTypes = {
  value: PropTypes.number.isRequired
}

export default Digit;