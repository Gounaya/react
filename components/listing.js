import React from 'react';

import Person from './person.js';

export default class Listing extends React.Component {
  constructors(props) {
    super.props;
  }

  render() {
    return (
    <div>
      { this.props.children }
      <Person { ...this.props.persons[0] } />
      <Person { ...this.props.persons[1] } />
    </div>);
  }

}
