import React from 'react';
import PropTypes from 'prop-types';

export default class Person extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return(
        <div>Here is :
          <ul>
            <li>name => {this.props.name}</li>
            <li>age => {this.props.age}</li>
          </ul>
        </div>
        );
      }
}

Person.defaultProps = {
  name : 'Anonymous'
}

Person.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number.isRequired
}
