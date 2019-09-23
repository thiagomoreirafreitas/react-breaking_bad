import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import Characters from '../pages/Characters';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Characters /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
