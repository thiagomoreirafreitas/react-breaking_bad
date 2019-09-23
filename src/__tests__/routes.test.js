import React from 'react';
import ReactDOM from 'react-dom';

import Routes from '../routes';
import { BrowserRouter, Switch} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Switch><Routes /></Switch></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
