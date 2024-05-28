import React, { memo, Fragment } from 'react';

//React-bootstrap
import { Accordion } from 'react-bootstrap';

//Componets
import SidebarMenu from '../../components/sidebar/sidebar-menu';

const VerticalNav = memo(() => {
  return (
    <Fragment>
      <Accordion as="ul" className="navbar-nav iq-main-menu">
        <SidebarMenu isTag="true" pathname="/" title="Dashboard">
          <i className="icon">
            <svg
              className="icon-20"
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
                fill="currentColor"
              ></path>
            </svg>
          </i>
        </SidebarMenu>
        <SidebarMenu
          isTag="true"
          pathname="/economic-calendar"
          title="Economic Calendar"
        >
          <i className="icon">
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7 6.2H1M9.45 1V3.6M4.25 1V3.6M4.12 14H9.58C10.6721 14 11.2182 14 11.6353 13.7875C12.0022 13.6005 12.3005 13.3022 12.4875 12.9353C12.7 12.5182 12.7 11.9721 12.7 10.88V5.42C12.7 4.3279 12.7 3.78185 12.4875 3.36472C12.3005 2.9978 12.0022 2.69949 11.6353 2.51254C11.2182 2.3 10.6721 2.3 9.58 2.3H4.12C3.0279 2.3 2.48185 2.3 2.06472 2.51254C1.6978 2.69949 1.39949 2.9978 1.21254 3.36472C1 3.78185 1 4.3279 1 5.42V10.88C1 11.9721 1 12.5182 1.21254 12.9353C1.39949 13.3022 1.6978 13.6005 2.06472 13.7875C2.48185 14 3.0279 14 4.12 14Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
        </SidebarMenu>
      </Accordion>
    </Fragment>
  );
});

VerticalNav.displayName = 'VerticalNav';
export default VerticalNav;
