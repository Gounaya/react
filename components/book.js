import React from 'react';
import PropTypes from 'prop-types';

import Rating from '../components/rating.js';

export default class Book extends React.Component {
  constructor(props) {
    super(props);
  }


  handleRatingChange(newRating) {
    let book = { ...this.props, rating : newRating};
    this.props.onBookChange(book);
  }


  render() {
      return(
        <div className="book">
          <span className="title">{this.props.title}</span>
          <span className="author">{this.props.author}</span>
          <span className="year">{this.props.year}</span>
          <Rating
            value={this.props.rating}
            onRatingChange = { rating => this.handleRatingChange(rating) }
          />
        </div>
      );
  }
}

Book.propTypes = {
  name : PropTypes.number
}
Book.defaultProps = {
  rating : 0
}
