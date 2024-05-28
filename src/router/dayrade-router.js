import React from 'react';
import { queryClient } from '../utilities/queryClient';
import Root from '../Root';
import ErrorComp from '../components/dayrade/utils/ErrorComp';

// default layout
import Default from '../layouts/dashboard/default';
import Dashboard from '../views/dayrade/dashboard';

const DayradeRouter = [
  {
    element: <Root />,
    errorElement: <ErrorComp />,
    children: [
      {
        element: <Default />,
        // errorElement: <ErrorComp />,
        children: [
          {
            path: '/',
            element: <Dashboard />,
            name: 'home',
            active: 'home',
          },
          {
            path: '/economic-calendar',
            lazy: () => import('../views/dayrade/economic-calendar/Component'),
            name: 'home',
            active: 'home',
          },
          {
            path: '/settings',
            async loader() {
              const { loader } = await import(
                '../views/dayrade/settings/loader'
              );
              return loader(queryClient)();
            },
            lazy: () => import('../views/dayrade/settings/Component'),
          },
          {
            path: '/profile',
            lazy: () => import('../views/dayrade/profile/Component'),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    lazy: () => import('../views/dayrade/not-found/Component'),
  },
];

export default DayradeRouter;
