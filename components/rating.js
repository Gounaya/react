import React from 'react';
import PropTypes from 'prop-types';

import Star from './star.js';

export default class Rating extends React.Component {
  constructor(props) {
    super(props);
  }

  handleStarClicked(starNum) {
    let newValue = starNum + 1;
    if (starNum === 0 && this.props.value === 1) {
      newValue =  0;
    }
    this.props.onRatingChange( newValue );
  }

  render() {
    let stars = new Array(5).fill(0).map(
      (e,i) =>
        <Star
          on = { i < this.props.value }
          onStarChange = { () => this.handleStarClicked(i) }
          key = {i}
        />
    );
    return(
      <span className="rating">
        {stars}
        <span>({this.props.value})</span>
      </span>
      );
    }
}

Rating.propTypes = {
  value : PropTypes.number
}
