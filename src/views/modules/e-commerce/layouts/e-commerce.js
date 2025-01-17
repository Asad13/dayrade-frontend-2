import React, { memo, Fragment, Suspense } from 'react'

// router-dom
import { Outlet } from 'react-router-dom'

// Header
import Headerpro from '../../../../components/partials/pro/headerstyle/header-pro'

// Sidebar
import Ecommercesidebar from '../components/partials/e-commerce-sidebar'

// Footer
import Footer from '../../../../components/partials/dashboard/footerstyle/footer'

//SeetingoffCanvas
import SettingOffCanvas from '../../../../components/setting/SettingOffCanvas'

// Import selectors & action from setting store
import * as SettingSelector from '../../../../store/setting/selectors'

// Redux Selector / Action
import { useSelector } from 'react-redux'

// Scss e-commerce
import "../../../../assets/modules/e-commerce/scss/e-commerce.scss"

const Ecommerce = memo(() => {
    const pageLayout = useSelector(SettingSelector.page_layout)
    return (
        <Fragment>
            <Ecommercesidebar />
            <main className="main-content">
                <div className="position-relative">
                    <Headerpro />
                </div>
                <div className={`container-fluid content-inner pb-0 ${pageLayout}`} id="page_layout">
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

Ecommerce.displayName = "Ecommerce"
export default Ecommerce
