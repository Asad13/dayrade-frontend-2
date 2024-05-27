import React from 'react'

//E-commerce layout
import EcommerceLayout from '../layouts/e-commerce'

// pages
import Admindashboard from '../pages/admin/admin-dashboard'
import Userlist from '../pages/app/user-list'
import Userprofile from '../pages/app/user-profile'
import Vendordashboard from '../pages/user/vendor-dashbord'
import Productdetailsthreed from '../pages/product-details-3d'
import Rotateproductdetails from '../pages/product-details-360'
import Orderprocess from '../pages/order-process'
import Categorieslist from '../pages/categories-list'
import Productdetails from '../pages/product-details'
import Productfullgrid from '../pages/product-full-grid'
import Shopleftfilter from '../pages/shop-left-filter'
import Shoprightfilter from '../pages/shop-right-filter'
import Productlist from '../pages/product-list'
import Shopmain from '../pages/shop-main'
import Wishlist from '../pages/wishlist'
import Invoice from '../pages/invoice'

export const EcommerceRouter = [{
  path: 'e-commerce',
  element: <EcommerceLayout />,
  children: [

    {
      path: 'admin/admin-dashboard',
      element: <Admindashboard />,
      name: 'admin dashboard',
      active:'home'
    },

    {
      path: 'user/vendor-dashbord',
      element: <Vendordashboard />,
      name: 'Vendor Dashboard'

    },
    {
      path: 'shop-main',
      element: <Shopmain />,
      name: 'Shop Main'

    },
    {
      path: 'shop-left-filter',
      element: <Shopleftfilter />,
      name: 'Shop - Left Filter'
      
    },
    {
      path: 'shop-right-filter',
      element: <Shoprightfilter />,
      name: 'Shop - Right Filter'

    },
    {
      path: 'product-full-grid',
      element: <Productfullgrid />,
      name: 'Product Grid View'

    },
    {
      path: 'product-list',
      element: <Productlist />,
      name: 'Product List View'

    },
    {
      path: 'categories-list',
      element: <Categorieslist />,
      name: 'Category List'

    },
    {
      path: 'product-details',
      element: <Productdetails />,
      name: 'Product Detail'

    },
    {
      path: 'product-details-3d',
      element: <Productdetailsthreed />,
      name: '3D Product Detail'

    },
    {
      path: 'product-details-360',
      element: <Rotateproductdetails />,
      name: '360 Product Detail'

    },
    {
      path: 'order-process',
      element: <Orderprocess />,
      name: 'Order Process'

    },
    {
      path: 'invoice',
      element: <Invoice />,
      name: 'Invoice'

    },
    {
      path: 'wishlist',
      element: <Wishlist />,
      name: 'Wishlist'

    },
    {
      path: 'app/user-profile',
      element: <Userprofile />,
      name: 'User Profile'

    },
    {
      path: 'app/user-list',
      element: <Userlist />,
      name: 'User List'

    },

  ],
}
]