import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Provider from './Provider';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  </>
);
