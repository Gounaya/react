import React from 'react';
import First from './first';

var Second =
  (props) =>
    <div>
      <h3>Second React component that uses another React component</h3>
      <First />
    </div>


export default Second;
