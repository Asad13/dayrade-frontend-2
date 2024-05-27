import React from 'react';
//router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { IndexRouters } from './router';
//scss
import './assets/modules/landing-pages/scss/landing-pages.scss';
import 'shepherd.js/dist/css/shepherd.css';
import 'flatpickr/dist/flatpickr.css';
import 'choices.js/public/assets/styles/choices.min.css';
import './assets/scss/hope-ui.scss';
import './assets/scss/pro.scss';
import './assets/scss/custom.scss';
import './assets/scss/rtl.scss';
import './assets/scss/customizer.scss';
import './assets/custom/scss/custom.scss';
import './assets/scss/dayrade.scss';

// Redux Selector / Action
import { useDispatch } from 'react-redux';

// import state selectors
import { setSetting } from './store/setting/actions';

function App({ children }) {
  const dispatch = useDispatch();
  dispatch(setSetting());

  const router = createBrowserRouter([...IndexRouters], {
    basename: process.env.PUBLIC_URL,
  });
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
