import React from 'react';
import PropTypes from 'prop-types';

import starOn from '../images/star_on.png';
import starOff from '../images/star_off.png';

export default class Star extends React.Component {
  constructor(props) {
    super(props);
  }

  selectSource() {
    if (this.props.on) {
      return starOn;
    } else {
      return starOff;
    }
  }

  handleClick(event) {
    this.props.onStarChange(event);
  }

  render() {
    return(
      <img src={this.selectSource()}
        onClick={this.handleClick.bind(this)}
      />
      );
    }
}

Star.defaultProps = {
  on : false
}
Star.propTypes = {
  on : PropTypes.bool
}
