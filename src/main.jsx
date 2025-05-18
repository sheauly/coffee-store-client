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
import CoffeeDetail from './component/CoffeeDetail.jsx';
import SignUP from './component/SignUP.JSX';
import SignIn from './component/SignIn.jsx';
import AuthProvider from './component/AuthProvider.jsx';
import Users from './component/Users.jsx';

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
        path: '/addCoffee',
        Component: AddCoffee,
      },
      {
        path: '/coffee/:id',
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetail
      },
      {
        path: '/updateCoffee/:id',
         loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`), 
        Component: UpdatedCoffee
      },
      {
        path: 'signin',
        Component: SignIn,
      },
      {
        path: 'signup',
        Component: SignUP
      },
      {
        path: 'users',
        loader: () => fetch('http://localhost:3000/users'),
        Component: Users
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
