import React from 'react';

// default layout
import Default from '../layouts/dashboard/default';
import Dashboard from '../views/dayrade/dashboard';
import EconomicCalendar from '../views/dayrade/economic-calendar';

export const DayradeRouter = [
  {
    path: '',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
        name: 'home',
        active: 'home',
      },
      {
        path: '/economic-calendar',
        element: <EconomicCalendar />,
        name: 'home',
        active: 'home',
      },
    ],
  },
];
