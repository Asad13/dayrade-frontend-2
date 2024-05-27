import React,{ useEffect,memo,Fragment } from 'react'

//Siderbarlogo
import Sidebarlogo from '../../../../../components/partials/components/sidebar/sidebar-logo'

//Sidebarprofile
import Sidebarprofilecard from '../../../../../components/partials/components/sidebar/sidebar-profile-card'

//E-commerce-vartical-nav
import Ecommercevarticalnav from './e-commerce-vartical-nav'

//Scrollbar
import Scrollbar from 'smooth-scrollbar'

// Import selectors & action from setting store
import * as SettingSelector from '../../../../../store/setting/selectors'

// Redux Selector / Action
import { useSelector } from 'react-redux';


const Ecommercesidebar = memo(() => {

    const appName = useSelector(SettingSelector.app_name)
    
    const sidebarColor = useSelector(SettingSelector.sidebar_color)
    const sidebarHide = useSelector(SettingSelector.sidebar_show); // array
    const sidebarType = useSelector(SettingSelector.sidebar_type) // array
    const sidebarMenuStyle = useSelector(SettingSelector.sidebar_menu_style)

    // useEffect(
    //     () => {
    //         Scrollbar.init(document.querySelector('#my-scrollbar'))
    //     }
    // )
    useEffect(() => {
        Scrollbar.init(document.querySelector("#my-scrollbar"));
    
        window.addEventListener("resize", () => {
          const tabs = document.querySelectorAll(".nav");
          const sidebarResponsive = document.querySelector(
            '[data-sidebar="responsive"]'
          );
          if (window.innerWidth < 1025) {
            Array.from(tabs, (elem) => {
              if (
                !elem.classList.contains("flex-column") &&
                elem.classList.contains("nav-tabs") &&
                elem.classList.contains("nav-pills")
              ) {
                elem.classList.add("flex-column", "on-resize");
              }
              return elem.classList.add("flex-column", "on-resize");
            });
            if (sidebarResponsive !== null) {
              if (!sidebarResponsive.classList.contains("sidebar-mini")) {
                sidebarResponsive.classList.add("sidebar-mini", "on-resize");
              }
            }
          } else {
            Array.from(tabs, (elem) => {
              if (elem.classList.contains("on-resize")) {
                elem.classList.remove("flex-column", "on-resize");
              }
              return elem.classList.remove("flex-column", "on-resize");
            });
            if (sidebarResponsive !== null) {
              if (
                sidebarResponsive.classList.contains("sidebar-mini") &&
                sidebarResponsive.classList.contains("on-resize")
              ) {
                sidebarResponsive.classList.remove("sidebar-mini", "on-resize");
              }
            }
          }
        });
      });
    return (
        <Fragment>
            <aside className={`${sidebarColor} ${sidebarType.join(" ")} ${sidebarMenuStyle} ${sidebarHide.join( " " ) ? 'sidebar-none' : 'sidebar'} sidebar-base `} data-sidebar='responsive'>
                <Sidebarlogo app_name={appName}/>
                <div className="sidebar-body pt-0 data-scrollbar" id="my-scrollbar">
                    <Sidebarprofilecard />
                    <hr className="hr-horizontal" />
                    <div className="sidebar-list">
                        <Ecommercevarticalnav />
                    </div>
                </div>
                <div className="sidebar-footer"></div>
            </aside>
        </Fragment>
    )
}
)

Ecommercesidebar.displayName="Ecommercesidebar"
export default Ecommercesidebar