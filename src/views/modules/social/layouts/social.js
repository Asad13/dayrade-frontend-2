import React, { Suspense, memo, Fragment } from 'react'

// react-router-dom
import { Outlet, useLocation } from 'react-router-dom'

// Header
import Headerpro from '../../../../components/partials/pro/headerstyle/header-pro'

// Sidebar
import Socialsidebar from '../components/partials/social-sidebar'

// Footer
import Footer from '../../../../components/partials/dashboard/footerstyle/footer'

//SeetingoffCanvas
import SettingOffCanvas from '../../../../components/setting/SettingOffCanvas'

//Subheader
import SubHeader from '../../../../components/partials/dashboard/headerstyle/sub-header'

// Import selectors & action from setting store
import * as SettingSelector from '../../../../store/setting/selectors'


// Redux Selector / Action
import { useSelector } from 'react-redux';

// Scss social
import "../../../../assets/modules/social/scss/social.scss"

const Social = memo(() => {
    const pageLayout = useSelector(SettingSelector.page_layout)
    const headerBanner = useSelector(SettingSelector.header_banner)
    let location = useLocation();
    let bannerStyle = '';
    if (location.pathname === '/social/dashboard') {
        bannerStyle = true
    }
    return (
        <Fragment>
            <Socialsidebar />
            <main className="main-content social">
                <div className={`${bannerStyle ? `iq-banner  ${headerBanner}` : ''} position-relative `}>
                    <Headerpro />
                    {bannerStyle &&
                        <SubHeader />
                    }
                </div>
                <div className={`container-fluid content-inner pb-0 ${pageLayout}`} id="page_layout">
                    <Suspense fallback={<div className="react-load"></div>}>
                        <Outlet />
                    </Suspense>
                </div>
                <Footer />
            </main>
            <SettingOffCanvas BannerStyle={bannerStyle} />
        </Fragment>
    )
})


Social.displayName = "Social"
export default Social
