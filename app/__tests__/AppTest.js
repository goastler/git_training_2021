 
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import {add} from '../App';

test('test add method', () => {
  const result = add(3,2);
  console.log(result)
  expect(result).toEqual(5);
});

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
