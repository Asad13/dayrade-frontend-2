import React, { memo, Fragment, Suspense } from 'react'

// react-router-dom
import { Outlet } from 'react-router-dom'

// Header
import Headerpro from '../../../../components/partials/pro/headerstyle/header-pro'

// Sidebar
import Sidebar from '../../../../components/partials/dashboard/sidebarstyle/sidebar'

// Footer
import Footer from '../../../../components/partials/dashboard/footerstyle/footer'

//Subheader
import SubHeader from '../../../../components/partials/dashboard/headerstyle/sub-header'

//SeetingoffCanvas
import SettingOffCanvas from '../../../../components/setting/SettingOffCanvas'

// Import selectors & action from setting store
import * as SettingSelector from '../../../../store/setting/selectors'

// Redux Selector / Action
import { useSelector } from 'react-redux';

const Plugins = memo(() => {
    const appName = useSelector(SettingSelector.app_name)
    return (
        <Fragment>
            <Sidebar app_name={appName} />
            <main className="main-content">
                <div className="position-relative iq-banner default">
                    <Headerpro />
                    <SubHeader />
                </div>

                <div className="container-fluid content-inner pb-0" id="page_layout">
                    <Suspense fallback={<div className="react-load"></div>}>
                        <Outlet />
                    </Suspense>
                </div>
                <Footer />
            </main>
            <SettingOffCanvas />
        </Fragment>
    )
})

Plugins.displayName = "Plugins"
export default Plugins
