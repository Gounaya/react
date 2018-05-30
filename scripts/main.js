import React from 'react';
import ReactDOM from 'react-dom';

import BookListWithFilter from '../components/booklistwithfilter.js';


var bootstrapReact =
  () => ReactDOM.render(
      <BookListWithFilter />,
      document.getElementById('insertReactHere')
    );

//
window.addEventListener('DOMContentLoaded', bootstrapReact );
