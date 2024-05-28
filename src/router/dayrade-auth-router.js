import { Navigate } from 'react-router-dom';
import Root from '../Root';
import AuthLayout from '../layouts/AuthLayout';
import { Component as Login } from '../views/dayrade/login/Component';
import ErrorComp from '../components/dayrade/utils/ErrorComp';

const AuthRouter = [
  {
    element: <Root />,
    errorElement: <ErrorComp />,
    children: [
      {
        element: <AuthLayout />,
        // errorElement: <ErrorComp />,
        children: [
          {
            path: '/',
            element: <Login />,
          },
          {
            path: '/register',
            lazy: () => import('../views/dayrade/register/Component'),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];

export default AuthRouter;
