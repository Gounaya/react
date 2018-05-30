import React from 'react';

import Book from '../components/book.js';

export default class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let allbooks = this.props.books.map(
      book =>
        <Book
          {...book}
          onBookChange = { this.props.onBookChange }
          key = {book.id}
        />
    )

    // commpute sum of all ratings (0 if undefined)
    let ratingSum = this.props.books.reduce(
      (acc, book) => (acc + (book.rating ? book.rating : 0)), 0
    );

    return(
        <div className="books">
          <p>Voici la liste des livres. La note moyenne attribuée est : {(ratingSum/this.props.books.length).toFixed(2)}</p>
          {allbooks}
        </div>
        );
    }
}
