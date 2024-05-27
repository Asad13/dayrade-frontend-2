import React from 'react'

// pulgin layout
import PluginsLayout from '../layouts/plugins'

// pages
import Apexcharts from '../pages/apexcharts'
import Treeview from '../pages/treeview';
import Buttonhover from '../pages/button-hover';
import Choisejs from '../pages/choise-js';
import Flatpickrr from '../pages/flatpickr';
import Fslightbox from '../pages/fslightbox';
import Galleryhover from '../pages/gallery-hover';
import Imagecopper from '../pages/image-copper';
import Loader from '../pages/loader';
import Select2 from '../pages/select2';
import Sweetalert from '../pages/sweet-alert';
import Quilleditor from '../pages/quill-editor';
import Uppyplugin from '../pages/uppy';
import RatingPage from '../pages/rating-page';
import UserPrivacySetting from "../../../dashboard/app/user-privacy-setting";

export const Plugingrouter = [

    {
        path: "",
        element: <PluginsLayout />,
        children: [
            {
                path: 'plugins/apexcharts',
                element: <Apexcharts />,
                name: 'Apexcharts', 
                active:'pages',
                subActive:'Plugins'
            },
            {
                path: 'plugins/treeview',
                element: <Treeview />,
                name: 'Tree-view',
                active:'pages',
                subActive:'Plugins'

            },
            {
                path: 'plugins/button-hover',
                element: <Buttonhover />,
                name: 'Button Hover',
                active:'pages',
                subActive:'Plugins'

            },
            {
                path: 'plugins/choise-js',
                element: <Choisejs />,
                name: ' Choice JS',
                active:'pages',
                subActive:'Plugins'

            },
            {
                path: 'plugins/flatpickr',
                element: <Flatpickrr />,
                name: ' Flatpicker',
                active:'pages',
                subActive:'Plugins'

            },
            {
                path: 'plugins/fslightbox',
                element: <Fslightbox />,
                name: 'FS Lightbox',
                active:'pages',
                subActive:'Plugins'

            },
            {
                path: 'plugins/gallery-hover',
                element: <Galleryhover />,
                name: 'Gallery Hover',
                active:'pages',
                subActive:'Plugins'

            },
            {
                path: 'plugins/image-copper',
                element: <Imagecopper />,
                name: 'mage Croper',
                active:'pages',
                subActive:'Plugins'

            },
            {
                path: 'plugins/loader',
                element: <Loader />,
                name: 'Loader',
                active:'pages',
                subActive:'Plugins'

            },
            {
                path: 'plugins/select2',
                element: <Select2 />,
                name: 'Select-2',
                active:'pages',
                subActive:'Plugins'

            },
            {
                path: 'plugins/sweet-alert',
                element: <Sweetalert />,
                name: 'Sweet Alert',
                active:'pages',
                subActive:'Plugins'

            },
            {
                path: 'plugins/quill-editor',
                element: <Quilleditor />,
                name: 'Quill',
                active:'pages',
                subActive:'Plugins'

            },
            {
                path: 'plugins/uppy',
                element: <Uppyplugin />,
                name: 'Uppy',
                active:'pages',
                subActive:'Plugins'

            },
            {
                path: 'plugins/rating',
                element: <RatingPage />,
                name: 'Rating',
                active:'pages',
                subActive:'Plugins'

            },
            {
                path: "/dashboard/app/user-privacy-setting",
                element: <UserPrivacySetting />,
                
            },
        ]
    }
]