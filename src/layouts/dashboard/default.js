import React, { useEffect, memo, Fragment } from 'react';
import { Outlet } from 'react-router-dom';

//react-shepherd
// import { ShepherdTour, ShepherdTourContext } from 'react-shepherd';

//sidebar
import Sidebar from '../../components/partials/dashboard/sidebarstyle/sidebar';
import Header from '../../components/partials/pro/headerstyle/header';

//seetingoffCanvas
// import SettingOffCanvas from '../../components/setting/SettingOffCanvas';

import Loader from '../../components/Loader';

// Import selectors & action from setting store
import * as SettingSelector from '../../store/setting/selectors';

// Redux Selector / Action
import { useSelector } from 'react-redux';
import { Suspense } from 'react';

// const Tour = () => {
//   const tour = useContext(ShepherdTourContext);
//   const { pathname } = useLocation();
//   useEffect(() => {
//     if (
//       pathname === '/dashboard' &&
//       sessionStorage.getItem('tour') !== 'true'
//     ) {
//       tour?.start();
//     }
//   });
//   return <Fragment></Fragment>;
// };

const Default = memo((props) => {
  const pageLayout = useSelector(SettingSelector.page_layout);
  const appName = useSelector(SettingSelector.app_name);
  useEffect(() => {});

  // const closeTour = () => {
  //   sessionStorage.setItem('tour', 'true');
  // };

  // // shepherd
  // const newSteps = [
  //   {
  //     title: '<h4>Menu</h4>',
  //     text: '<p className="mb-0">Check the content under Menu Style. Click to view all oavailable Menu Style options for you.</p>',
  //     attachTo: { element: '.sidebar ', on: 'right' },
  //     buttons: [
  //       {
  //         type: 'next',
  //         text: 'Next',
  //       },
  //     ],
  //     when: {
  //       show: () => {
  //         document
  //           .querySelector('.shepherd-modal-overlay-container')
  //           .classList.add('shepherd-modal-is-visible');
  //       },
  //       cancel: () => closeTour(),
  //     },
  //   },
  //   {
  //     title: '<h4>Profile Setting</h4>',
  //     text: '<p className="mb-0">Configure your Profile using Profile Settings. Edit, save and update your profile from here.</p>',
  //     attachTo: { element: '.iq-tour ', on: 'bottom' },
  //     buttons: [
  //       {
  //         type: 'back',
  //         classes: 'shepherd-button-secondary',
  //         text: 'Back',
  //       },
  //       {
  //         type: 'next',
  //         text: 'Next',
  //       },
  //     ],
  //     when: {
  //       cancel: () => closeTour(),
  //     },
  //   },
  //   {
  //     title: '<h4>Live Customizer</h4>',
  //     text: '<p className="mb-0">Transform the entire look, color, style and appearance of using Live Customizer settings. Change and copy the settings from here.</p>',
  //     attachTo: { element: '.btn-setting', on: 'left' },
  //     buttons: [
  //       {
  //         type: 'back',
  //         classes: 'shepherd-button-secondary',
  //         text: 'Back',
  //       },
  //       {
  //         action() {
  //           sessionStorage.setItem('tour', 'true');
  //           return this.next();
  //         },
  //         text: 'Done',
  //       },
  //     ],
  //     when: {
  //       cancel: () => closeTour(),
  //     },
  //   },
  // ];
  // const tourOptions = {
  //   defaultStepOptions: {
  //     cancelIcon: {
  //       enabled: true,
  //     },
  //   },
  //   when: {
  //     cancel: function () {},
  //   },
  // };

  return (
    <Fragment>
      {/* <ShepherdTour steps={newSteps} tourOptions={tourOptions}> */}
      <Loader />
      <Sidebar app_name={appName} />
      {/* <Tour /> */}
      <main className="main-content">
        <div className={`position-relative dayrade-header-conatiner`}>
          <Header />
        </div>
        <div className={` ${pageLayout} pb-0`}>
          <Suspense fallback={<div className="react-load"></div>}>
            <Outlet></Outlet>
          </Suspense>
        </div>
        {/* <Footer /> */}
      </main>
      {/* <Link
          className="btn btn-secondary btn-dashboard"
          to="/landing-pages/home"
        >
          Landing Pages
        </Link> */}
      {/* <SettingOffCanvas /> */}
      {/* </ShepherdTour> */}
    </Fragment>
  );
});

Default.displayName = 'Default';
export default Default;
