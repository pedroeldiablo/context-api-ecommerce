import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import {renderWithRouter} from './test/utils/renderWithRouter'


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

  test('rendering/navigating', () => {
    //   const history = createMemoryHistory()
      render(
         <BrowserRouter>
         <App/>
       </BrowserRouter>
      )
      // verify page content for expected route
      // often you'd use a data-testid or role query, but this is also possible
      expect(screen.getByText(/CONTACT/i)).toBeInTheDocument()
    
      const leftClick = { button: 0 }
      userEvent.click(screen.getByText(/^MENS$/i), leftClick)
    
      // check that the content changed to the new page
      expect(screen.getByText(/^Camo Down Vest$/i)).toBeInTheDocument()
    })

    test('landing on a bad page', () => {
      renderWithRouter(<App />, { route: '/gobbledygook' })
    
      expect(screen.getByText(/^Oops seems there's nothing here$/i)).toBeInTheDocument()
    })
