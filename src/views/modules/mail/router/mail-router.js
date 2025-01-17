import React from 'react'

//Mail layout
import Maillayout from '../layouts/mail'

// pages
import Emailcompose from '../pages/email-compose'
import Email from '../pages/email'

export const MailRouter = [
    {
        path: 'mail',
        element: <Maillayout />,
        children: [
            {
                path: 'email-compose',
                element: <Emailcompose />,
                name:'Email Compose'
            },
            {
                path: 'email',
                element: <Email />,
                name:'Email',
                active:'home'


            }
        ]
    }
]