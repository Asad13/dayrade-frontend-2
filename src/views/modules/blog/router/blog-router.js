import React from 'react'

// blog layout
import BlogLayout from '../layouts/blog'

// pages
import Blogcategory from '../pages/blog-category'
import Blogcomments from '../pages/blog-comments'
import Blogdetails from '../pages/blog-details'
import Bloggrid from '../pages/blog-grid'
import Bloglist from '../pages/blog-list'
import BlogMain from '../pages/blog-main'
import Blogtrending from '../pages/blog-trending'
import Bloganalytic from '../pages/blog-analytic'

export const BlogRouter = [

    {
        path: '',
        element: <BlogLayout />,
        children: [
            {
                path: 'blog',
                element: <Bloganalytic />,
                name:'Dashboard',
                active:'home'

            },
            {
                path: 'blog/blog-main',
                element: <BlogMain />,
                name:'Blog Main'

            },
            {
                path: 'blog/blog-details',
                element: <Blogdetails />,
                name:'Blog Details'

            },
            {
                path: 'blog/blog-grid',
                element: <Bloggrid />,
                name:'Blog Grid'

            },
            {
                path: 'blog/blog-list',
                element: <Bloglist />,
                name:'Blog List'

            },
            {
                path: 'blog/blog-trending',
                element: <Blogtrending />,
                name:'Blog Trending'

            },
            {
                path: 'blog/blog-comments',
                element: <Blogcomments />,
                name:'Comments List'

            },
            {
                path: 'blog/blog-category',
                element: <Blogcategory />,
                name:'Blog Category'

            }
        ]
    }
]