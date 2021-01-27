import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
   <BrowserRouter>
    <App />
   </BrowserRouter>), div);
 });

describe('Test suits for MyComponentWithLink', () => {
  it('should match with snapshot', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    )
    .toJSON();
   expect(tree).toMatchSnapshot();
   });
  });
