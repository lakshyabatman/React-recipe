import React from 'react';
import {render} from 'react-dom'
import App from '../components/App';
let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
test('renders learn react link', () => {

  render(<App />,container);
  expect(container).toBeDefined()
});
