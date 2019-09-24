import React from 'react';
import ReactDOM from 'react-dom';
import SkeletonCharacters from '../components/SkeletonCharacters';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkeletonCharacters />, div);
  ReactDOM.unmountComponentAtNode(div);
});
