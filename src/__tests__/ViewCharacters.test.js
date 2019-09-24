import React from 'react';
import ReactDOM from 'react-dom';

import ViewCharacters from '../components/ViewCharacters';

it('renders without crashing', () => {
  const data = [{
    char_id: 1,
    name: "Walter White",
    birthday: "09-07-1958",
    occupation: [
      "High School Chemistry Teacher",
      "Meth King Pin"
    ],
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    status: "Deceased",
    appearance: [1, 2, 3, 4, 5],
    nickname: "Heisenberg",
    portrayed: "Bryan Cranston"
  }];
  const div = document.createElement('div');
  ReactDOM.render(<ViewCharacters characters={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
