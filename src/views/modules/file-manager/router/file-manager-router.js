import React from 'react'

//FileManager layout
import Dashboard from '../pages/dashboard'

// pages
import FilemanagerLayout from '../layouts/file-manager'
import DocumentFolder from '../pages/document-folder'
import Imagefolder from '../pages/image-folder'
import Videofolder from '../pages/video-folder'
import Allfile from '../pages/all-file'
import Trash from '../pages/trash'

export const FilemanagerRouter = [
    {
        path: 'file-manager',
        element: <FilemanagerLayout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />,
                name:'Dashboard',
                active:'home'


            },
            {
                path: 'image-folder',
                element: <Imagefolder />,
                name:'Image'

            },
            {
                path: 'video-folder',
                element: <Videofolder />,
                name:'Video'

            },
            {
                path: 'document-folder',
                element: <DocumentFolder />,
                name:'Document'

            },
            {
                path: 'all-file',
                element: <Allfile />,
                name:'All Files'

            },
            {
                path: 'trash',
                element: <Trash />,
                name:'Trash'

            }
        ]
    }
]