import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './header.component';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';


  // app.test.js
import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
   <BrowserRouter>
    <Header />
   </BrowserRouter>), div);
 });

describe('Test suits for Header', () => {
  it('should match with snapshot', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    )
    .toJSON();
   expect(tree).toMatchSnapshot();
   });
  });

test('rendering/navigating', () => {
//   const history = createMemoryHistory()
    render(<Header/>, { wrapper: BrowserRouter })
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/CONTACT/i)).toBeInTheDocument()

//   const leftClick = { button: 0 }
//   userEvent.click(screen.getByText(/MENS/i), leftClick)

//   // check that the content changed to the new page
//   expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
})

// test('landing on a bad page', () => {
// //   const history = createMemoryHistory()
// //   history.push('/some/bad/route')
//   render(
//     <BrowserRouter>
//      <Header/>
//    </BrowserRouter>
//   )

//   expect(screen.getByText(/no match/i)).toBeInTheDocument()
// })

// test('rendering a component that uses useLocation', () => {
//   const history = createMemoryHistory()
//   const route = '/some-route'
//   history.push(route)
//   render(
//     <Router history={history}>
//       <LocationDisplay />
//     </Router>
//   )

//   expect(screen.getByTestId('location-display')).toHaveTextContent(route)
// })
