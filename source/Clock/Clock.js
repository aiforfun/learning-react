import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Digit from './Digit';

class Clock extends Component {
  render() {
    return(
      <div>
        <Digit value={this.props.hours} />{' : '}
        <Digit value={this.props.minutes} />{' : '}
        <Digit value={this.props.seconds} />
      </div>
    );
  }
}
Clock.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired
}

export default Clock;