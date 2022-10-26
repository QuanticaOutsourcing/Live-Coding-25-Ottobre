import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import List from './components/List';
import Details from './components/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <List />
  },
  {
    path: '/details',
    element: <Details />
  }
]);

function App() {
  return (
    <React.Fragment>
        <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
