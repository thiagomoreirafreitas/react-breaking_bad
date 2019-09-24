import React from 'react';
import ReactDOM from 'react-dom';

import PaginationCharacters from '../components/PaginationCharacters';

it('renders without crashing', () => {
  const pageNumbers = [1, 2, 3];
  const currentCharacters = [{
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
  const active = 1;
  const paginate = () => { };
  const prev = () => { };
  const next = () => { };
  const div = document.createElement('div');
  ReactDOM.render(
    <PaginationCharacters
      pageNumbers={pageNumbers}
      currentCharacters={currentCharacters}
      active={active}
      paginate={paginate}
      prev={prev}
      next={next} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
