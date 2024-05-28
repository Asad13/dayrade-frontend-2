import React, { memo, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

//React-bootstrap
import { Accordion } from 'react-bootstrap';

//Componets
import SidebarMenu from '../../components/sidebar/sidebar-menu';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { logout } from '../../../../services/auth';

const SidebarFooter = memo(() => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Accordion as="ul" className="navbar-nav iq-main-menu">
        <SidebarMenu isTag="true" pathname="/settings" title="Settings">
          <i className="icon">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 10.75C9.74264 10.75 10.75 9.74264 10.75 8.5C10.75 7.25736 9.74264 6.25 8.5 6.25C7.25736 6.25 6.25 7.25736 6.25 8.5C6.25 9.74264 7.25736 10.75 8.5 10.75Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5455 10.5455C13.4547 10.7511 13.4276 10.9792 13.4677 11.2004C13.5078 11.4216 13.6133 11.6257 13.7705 11.7864L13.8114 11.8273C13.9382 11.9539 14.0387 12.1043 14.1074 12.2699C14.176 12.4354 14.2113 12.6128 14.2113 12.792C14.2113 12.9712 14.176 13.1487 14.1074 13.3142C14.0387 13.4798 13.9382 13.6302 13.8114 13.7568C13.6847 13.8836 13.5343 13.9842 13.3688 14.0528C13.2032 14.1214 13.0258 14.1568 12.8466 14.1568C12.6674 14.1568 12.4899 14.1214 12.3244 14.0528C12.1589 13.9842 12.0085 13.8836 11.8818 13.7568L11.8409 13.7159C11.6802 13.5587 11.4761 13.4533 11.2549 13.4132C11.0338 13.3731 10.8056 13.4001 10.6 13.4909C10.3983 13.5773 10.2264 13.7208 10.1052 13.9038C9.98407 14.0867 9.91906 14.3011 9.91818 14.5205V14.6364C9.91818 14.998 9.77451 15.3449 9.51878 15.6006C9.26305 15.8563 8.9162 16 8.55455 16C8.19289 16 7.84604 15.8563 7.59031 15.6006C7.33458 15.3449 7.19091 14.998 7.19091 14.6364V14.575C7.18563 14.3493 7.11258 14.1305 6.98126 13.9468C6.84993 13.7632 6.66641 13.6234 6.45455 13.5455C6.2489 13.4547 6.02078 13.4276 5.7996 13.4677C5.57842 13.5078 5.37433 13.6133 5.21364 13.7705L5.17273 13.8114C5.04608 13.9382 4.89569 14.0387 4.73015 14.1074C4.5646 14.176 4.38716 14.2113 4.20795 14.2113C4.02875 14.2113 3.85131 14.176 3.68576 14.1074C3.52022 14.0387 3.36983 13.9382 3.24318 13.8114C3.1164 13.6847 3.01582 13.5343 2.94719 13.3688C2.87857 13.2032 2.84325 13.0258 2.84325 12.8466C2.84325 12.6674 2.87857 12.4899 2.94719 12.3244C3.01582 12.1589 3.1164 12.0085 3.24318 11.8818L3.28409 11.8409C3.44128 11.6802 3.54672 11.4761 3.58682 11.2549C3.62693 11.0338 3.59985 10.8056 3.50909 10.6C3.42266 10.3983 3.27915 10.2264 3.09623 10.1052C2.9133 9.98407 2.69895 9.91906 2.47955 9.91818H2.36364C2.00198 9.91818 1.65513 9.77451 1.3994 9.51878C1.14367 9.26305 1 8.9162 1 8.55455C1 8.19289 1.14367 7.84604 1.3994 7.59031C1.65513 7.33458 2.00198 7.19091 2.36364 7.19091H2.425C2.65068 7.18563 2.86955 7.11258 3.05316 6.98126C3.23677 6.84993 3.37662 6.66641 3.45455 6.45455C3.54531 6.2489 3.57238 6.02078 3.53228 5.7996C3.49217 5.57842 3.38673 5.37433 3.22955 5.21364L3.18864 5.17273C3.06185 5.04608 2.96127 4.89569 2.89265 4.73015C2.82402 4.5646 2.7887 4.38716 2.7887 4.20795C2.7887 4.02875 2.82402 3.85131 2.89265 3.68576C2.96127 3.52022 3.06185 3.36983 3.18864 3.24318C3.31528 3.1164 3.46568 3.01582 3.63122 2.94719C3.79676 2.87857 3.97421 2.84325 4.15341 2.84325C4.33261 2.84325 4.51006 2.87857 4.6756 2.94719C4.84114 3.01582 4.99154 3.1164 5.11818 3.24318L5.15909 3.28409C5.31978 3.44128 5.52387 3.54672 5.74505 3.58682C5.96623 3.62693 6.19435 3.59985 6.4 3.50909H6.45455C6.65621 3.42266 6.82819 3.27915 6.94934 3.09623C7.07048 2.9133 7.13549 2.69895 7.13636 2.47955V2.36364C7.13636 2.00198 7.28003 1.65513 7.53576 1.3994C7.7915 1.14367 8.13834 1 8.5 1C8.86166 1 9.2085 1.14367 9.46424 1.3994C9.71997 1.65513 9.86364 2.00198 9.86364 2.36364V2.425C9.86451 2.6444 9.92952 2.85876 10.0507 3.04168C10.1718 3.22461 10.3438 3.36812 10.5455 3.45455C10.7511 3.54531 10.9792 3.57238 11.2004 3.53228C11.4216 3.49217 11.6257 3.38673 11.7864 3.22955L11.8273 3.18864C11.9539 3.06185 12.1043 2.96127 12.2699 2.89265C12.4354 2.82402 12.6128 2.7887 12.792 2.7887C12.9712 2.7887 13.1487 2.82402 13.3142 2.89265C13.4798 2.96127 13.6302 3.06185 13.7568 3.18864C13.8836 3.31528 13.9842 3.46568 14.0528 3.63122C14.1214 3.79676 14.1568 3.97421 14.1568 4.15341C14.1568 4.33261 14.1214 4.51006 14.0528 4.6756C13.9842 4.84114 13.8836 4.99154 13.7568 5.11818L13.7159 5.15909C13.5587 5.31978 13.4533 5.52387 13.4132 5.74505C13.3731 5.96623 13.4001 6.19435 13.4909 6.4V6.45455C13.5773 6.65621 13.7208 6.82819 13.9038 6.94934C14.0867 7.07048 14.3011 7.13549 14.5205 7.13636H14.6364C14.998 7.13636 15.3449 7.28003 15.6006 7.53576C15.8563 7.7915 16 8.13834 16 8.5C16 8.86166 15.8563 9.2085 15.6006 9.46424C15.3449 9.71997 14.998 9.86364 14.6364 9.86364H14.575C14.3556 9.86451 14.1412 9.92952 13.9583 10.0507C13.7754 10.1718 13.6319 10.3438 13.5455 10.5455Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
        </SidebarMenu>
        <SidebarMenu isTag="true" pathname="/profile" title="Pofile">
          <i className="icon">
            <svg
              width="16"
              height="18"
              viewBox="0 0 17 19"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 16.5V14.8333C14.5 13.9493 14.1576 13.1014 13.5481 12.4763C12.9386 11.8512 12.112 11.5 11.25 11.5H4.75C3.88805 11.5 3.0614 11.8512 2.4519 12.4763C1.84241 13.1014 1.5 13.9493 1.5 14.8333V16.5M11.25 4.83333C11.25 6.67428 9.79493 8.16667 8 8.16667C6.20507 8.16667 4.75 6.67428 4.75 4.83333C4.75 2.99238 6.20507 1.5 8 1.5C9.79493 1.5 11.25 2.99238 11.25 4.83333Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
        </SidebarMenu>
        <li className={`nav-item`}>
          <button
            className={`nav-link`}
            onClick={() => {
              logout();
              navigate(0);
            }}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Logout</Tooltip>}
            >
              <i className="icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 16.5H3.16667C2.72464 16.5 2.30072 16.3244 1.98816 16.0118C1.67559 15.6993 1.5 15.2754 1.5 14.8333V3.16667C1.5 2.72464 1.67559 2.30072 1.98816 1.98816C2.30072 1.67559 2.72464 1.5 3.16667 1.5H6.5M12.3333 13.1667L16.5 9M16.5 9L12.3333 4.83333M16.5 9H6.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Logout</span>
          </button>
        </li>
      </Accordion>
    </Fragment>
  );
});

SidebarFooter.displayName = 'SidebarFooter';
export default SidebarFooter;
