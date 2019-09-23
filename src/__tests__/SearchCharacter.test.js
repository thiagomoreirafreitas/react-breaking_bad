import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import SearchCharacter from '../pages/SearchCharacter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><SearchCharacter required={true}
    match={{params: {searchName: 'Walter White'}, isExact: true, path: "", url: ""}}/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
