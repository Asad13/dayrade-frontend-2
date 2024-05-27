import React from 'react'

//Auth pro
import Accountdeactivate from "../pages/account-deactivate"
import Authemail from "../pages/email"
import Lockscreen from "../pages/lock-screen"
import Resetpassword from "../pages/reset-password"
import Signin from "../pages/sign-in"
import Signup from "../pages/sign-up"
import Twofactor from "../pages/two-factor"
import SignIn from "../pages/simple/sign-in"
import SignUp from "../pages/simple/sign-up"
import Simple from '../layouts/simple'

export const SimpleAuthRouter = [
    // Animated
    {
        path: 'auth',
        element: <Simple />,
        children: [
            {
                path: 'sign-in',
                element: <Signin />
            },
            {
                path: 'sign-up',
                element: <Signup />
            },
            {
                path: 'sign-up',
                element: <SignUp />
            },
            {
                path: 'email',
                element: <Authemail />
            },
            {
                path: 'lock-screen',
                element: <Lockscreen />
            },
            {
                path: 'reset-password',
                element: <Resetpassword />
            },
            {
                path: 'two-factor',
                element: <Twofactor />
            },
            {
                path: 'account-deactivate',
                element: <Accountdeactivate />
            },
            {
                path: 'simple/sign-in',
                element: <SignIn />
            },
            {
                path: 'simple/sign-up',
                element: <SignUp />
            }
        ]
    }

]