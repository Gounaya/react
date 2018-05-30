import React from 'react';

import BookList from './booklist.js';
import allbooks from '../data/books.js';   // to simulate database

export default class BookListWithFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books : [] , filterText : ''}
  }

  componentWillMount() {
    // fetch allbooks data in some database...
    this.setState({ books : allbooks});
  }

  handleBookChange(newbook) {
    let index = this.state.books.findIndex( book => (book.id === newbook.id) );
    let newList = this.state.books;
    newList.splice(index, 1, newbook);
    this.setState({ books : newList });
  }

  changeFilter() {
    this.setState( { filterText : this.filterInput.value} );
  }

  filterList() {
    return this.state.books.filter(
      book => book.title.includes(this.state.filterText)
    )
  }

  render() {

    return(
        <div>
          Title filter : <input
            value = { this.state.filterText }
            onChange = { this.changeFilter.bind(this) }
            ref = { input => this.filterInput = input }
          />
          <BookList
            books = { this.filterList() }
            onBookChange = { this.handleBookChange.bind(this) }
          />
        </div>
        );
    }
}
