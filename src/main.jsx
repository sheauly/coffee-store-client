import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayOut from './layOut/MainLayOut.jsx';
import Home from './component/Home.jsx';

import UpdatedCoffee from './component/UpdatedCoffee.jsx';
import AddCoffee from './component/AddCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/coffees'),
        Component: Home
      },
      {
        path: 'addCoffee',
        Component: AddCoffee,
      },
      {
        path: 'updateCoffee',
        Component: UpdatedCoffee
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
