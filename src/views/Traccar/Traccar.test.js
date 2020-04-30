import React from 'react';
import ReactDOM from 'react-dom';
import Traccar from './Traccar';

//jest.mock('react-chartjs-2', () => ({
//  Line: () => null,
//  Polar: () => null,
//  Pie: () => null,
//  Radar: () => null,
//  Bar: () => null,
//  Doughnut: () => null,
//}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Traccar />, div);
  ReactDOM.unmountComponentAtNode(div);
});