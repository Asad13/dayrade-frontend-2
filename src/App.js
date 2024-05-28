import React, { useEffect } from 'react';
//router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DayradeRouter from './router/dayrade-router';
import AuthRouter from './router/dayrade-auth-router';
import { useUserContext } from './hooks/useUserContext';
import { checkAuth } from './services/auth';
import Loader from './ui/Loader';
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
import './styles/dayradetailwind.scss';

// Redux Selector / Action
import { useDispatch } from 'react-redux';

// import state selectors
import { setSetting } from './store/setting/actions';

function App() {
  const dispatch = useDispatch();
  dispatch(setSetting());

  const { isAuthenticated, setIsAuthenticated } = useUserContext();

  useEffect(() => {
    const checkAuthStatus = async () => {
      const data = await checkAuth();
      setIsAuthenticated(data.status ?? false);
    };

    checkAuthStatus();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isAuthenticated == null) {
    return <Loader />;
  }

  let router;

  if (isAuthenticated) {
    router = createBrowserRouter([...DayradeRouter]);
  } else {
    router = createBrowserRouter([...AuthRouter]);
  }

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
