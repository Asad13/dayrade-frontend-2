import React from 'react';

// default layout
import Default from '../layouts/dashboard/default';

// Dashboard
import Index from '../views/dashboard/index';
import AlternateDashboard from '../views/dashboard/alternate-dashboard';

// icon pages
import Solid from '../views/dashboard/icons/solid';
import Outline from '../views/dashboard/icons/outline';
import DualTone from '../views/dashboard/icons/dual-tone';

// special pages
import Billing from '../views/dashboard/special-pages/billing';
import Calender from '../views/dashboard/special-pages/calender';
import Kanban from '../views/dashboard/special-pages/kanban';
import Pricing from '../views/dashboard/special-pages/pricing';
import Timeline from '../views/dashboard/special-pages/timeline';

// user pages
import Userprofile from '../views/dashboard/app/user-profile';
import UserAdd from '../views/dashboard/app/user-add';
import UserList from '../views/dashboard/app/user-list';

// extra
import Admin from '../views/dashboard/admin/admin';
import Uicolor from '../views/modules/plugins/pages/ui-color';

// widget
import Widgetbasic from '../views/dashboard/widget/widgetbasic';
import Widgetchart from '../views/dashboard/widget/widgetchart';
import Widgetcard from '../views/dashboard/widget/widgetcard';

// map
import Google from '../views/dashboard/maps/google';

// form
import FormElement from '../views/dashboard/from/form-element';
import FormWizard from '../views/dashboard/from/form-wizard';
import FormValidation from '../views/dashboard/from/form-validation';

// table
import BootstrapTable from '../views/dashboard/table/bootstrap-table';
import TableData from '../views/dashboard/table/table-data';
import Borderedtable from '../views/dashboard/table/border-table';
import Fancytable from '../views/dashboard/table/fancy-table';
import FixedTable from '../views/dashboard/table/fixed-table';

//extra
import PrivacyPolicy from '../views/dashboard/extra/privacy-policy';
import TermsofService from '../views/dashboard/extra/terms-of-service';
import BlankPage from '../views/dashboard/extra/blank-page';
import ShimmerComponent from '../views/dashboard/extra/ShimmerComponent';

import BlankPage1 from '../views/dashboard/extra/blank-page1';

export const DefaultRouter = [
  {
    path: '',
    element: <Default />,
    children: [
      {
        path: 'dashboard',
        element: <Index />,
        name: 'hopeui home',
        active: 'home',
      },
      {
        path: 'dashboard/alternate-dashboard',
        element: <AlternateDashboard />,
        name: 'alternate dashboard',
        active: 'home',
      },
      // Special Pages
      {
        path: 'dashboard/special-pages/billing',
        element: <Billing />,
        name: 'Billing',
        active: 'pages',
        subActive: 'SpecialPages',
      },
      {
        path: 'dashboard/special-pages/calender',
        element: <Calender />,
        name: 'Calendar',
        active: 'pages',
        subActive: 'SpecialPages',
      },
      {
        path: 'dashboard/special-pages/kanban',
        element: <Kanban />,
        name: 'Kanban',
        active: 'pages',
        subActive: 'SpecialPages',
      },
      {
        path: 'dashboard/special-pages/pricing',
        element: <Pricing />,
        name: 'Pricing',
        active: 'pages',
        subActive: 'SpecialPages',
      },
      {
        path: 'dashboard/special-pages/timeline',
        element: <Timeline />,
        name: 'Timeline',
        active: 'pages',
        subActive: 'SpecialPages',
      },
      //User
      {
        path: 'dashboard/app/user-profile',
        element: <Userprofile />,
        name: 'User Profile',
        active: 'pages',
        subActive: 'User',
      },
      {
        path: 'dashboard/app/user-add',
        element: <UserAdd />,
        name: 'User Add',
        active: 'pages',
        subActive: 'User',
      },
      {
        path: 'dashboard/app/user-list',
        element: <UserList />,
        name: 'User List',
        active: 'pages',
        subActive: 'User',
      },
      // Admin
      {
        path: 'dashboard/admin/admin',
        element: <Admin />,
        name: 'Admin',
      },
      // Ui-Color
      {
        path: 'plugins/ui-color',
        element: <Uicolor />,
        name: 'UI Color',
      },
      // Widgets
      {
        path: 'dashboard/widget/widgetbasic',
        element: <Widgetbasic />,
        name: 'Basic Widget',
        active: 'elements',
        subActive: 'Widgets',
      },
      {
        path: 'dashboard/widget/widgetchart',
        element: <Widgetchart />,
        name: 'Widget Chart',
        active: 'elements',
        subActive: 'Widgets',
      },
      {
        path: 'dashboard/widget/widgetcard',
        element: <Widgetcard />,
        name: 'Widget Card',
        active: 'elements',
        subActive: 'Widgets',
      },
      // Map
      {
        path: 'dashboard/map/google',
        element: <Google />,
        name: 'Google Map',
        active: 'elements',
        subActive: 'Map',
      },

      // Form
      {
        path: 'dashboard/form/form-element',
        element: <FormElement />,
        name: 'Form Elements',
        active: 'elements',
        subActive: 'Form',
      },
      {
        path: 'dashboard/form/form-wizard',
        element: <FormWizard />,
        name: 'Form Wizard',
        active: 'elements',
        subActive: 'Form',
      },
      {
        path: 'dashboard/form/form-validation',
        element: <FormValidation />,
        name: 'Form Validation',
        active: 'elements',
        subActive: 'Form',
      },
      // Table
      {
        path: 'dashboard/table/bootstrap-table',
        element: <BootstrapTable />,
        name: 'Bootstrap Table',
        active: 'elements',
        subActive: 'Table',
      },
      {
        path: 'dashboard/table/table-data',
        element: <TableData />,
        name: 'Data Table',
        active: 'elements',
        subActive: 'Table',
      },
      {
        path: 'dashboard/table/border-table',
        element: <Borderedtable />,
        name: 'Border Table',
        active: 'elements',
        subActive: 'Table',
      },
      {
        path: 'dashboard/table/fancy-table',
        element: <Fancytable />,
        name: 'Fancy Table',
        active: 'elements',
        subActive: 'Table',
      },
      {
        path: 'dashboard/table/fixed-table',
        element: <FixedTable />,
        name: 'Fixed Table',
        active: 'elements',
        subActive: 'Table',
      },

      // Icon
      {
        path: 'dashboard/icon/solid',
        element: <Solid />,
        name: 'Solid Icons',
        active: 'elements',
        subActive: 'Icon',
      },
      {
        path: 'dashboard/icon/outline',
        element: <Outline />,
        name: 'Outline Icons',
        active: 'elements',
        subActive: 'Icon',
      },
      {
        path: 'dashboard/icon/dual-tone',
        element: <DualTone />,
        name: 'Dual Tone Icons',
        active: 'elements',
        subActive: 'Icon',
      },
      // extra-pages
      {
        path: 'dashboard/extra/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'dashboard/extra/terms-of-service',
        element: <TermsofService />,
      },
      {
        path: 'dashboard/blank-page',
        element: <BlankPage1 />,
        name: 'Blank-Page',
      },
      {
        path: 'dashboard/extra/blank-page',
        element: <BlankPage />,
      },
      {
        path: 'dashboard/extra/ShimmerComponent',
        element: <ShimmerComponent />,
      },
    ],
  },
];
