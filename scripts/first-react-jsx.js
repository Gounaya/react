import React from 'react';
import ReactDOM from 'react-dom';

import Second from '../components/second';

var bootstrapReact =
  () => ReactDOM.render(
      <Second />,
      document.getElementById('insertReactHere')
    );


window.addEventListener('DOMContentLoaded', bootstrapReact );
