import React from 'react'

//Social layout
import DashboardLayout from '../layouts/social'

// pages
import Dashboard from '../pages/dashboard'
import Newsfeed from '../pages/newsfeed'
import Socialprofile from '../pages/social-profile'
import Friendprofile from '../pages/friend-profile'
import Friendlist from '../pages/friend-list'
import Friendrequset from '../pages/friend-requset'
import Eventlist from '../pages/event-list'
import Eventdetail from '../pages/event-detail'
import Group from '../pages/group'
import Profilebadges from '../pages/profile-badges'
import Groupdetail from '../pages/group-detail'
import Profileimages from '../pages/profile-images'
import Birthday from '../pages/birthday'
import Accountsetting from '../pages/account-setting'
import Profilevideo from '../pages/profile-video'
import Notification from '../pages/notification'

export const SocialRouter = [
  {
    path: 'social',
    element: <DashboardLayout />,
    children: [
      // Social
      {
        path: 'dashboard',
        element: <Dashboard />,
        name:'Dashboard',
        active:'home'

      },
      {
        path: 'newsfeed',
        element: <Newsfeed />,
        name:'Newsfeed'

      },
      {
        path: 'friend-list',
        element: <Friendlist />,
        name:'Friend List'

      },
      {
        path: 'friend-requset',
        element: <Friendrequset />,
        name:'Friend Request'

      },
      {
        path: 'friend-profile',
        element: <Friendprofile />,
        name:'Friend Profile'

      },
      {
        path: 'profile-badges',
        element: <Profilebadges />,
        name:'Profile Badges'

      },
      {
        path: 'profile-images',
        element: <Profileimages />,
        name:'Profile Images'

      },
      {
        path: 'profile-video',
        element: <Profilevideo />,
        name:'Profile Video'

      },
      {
        path: 'birthday',
        element: <Birthday />,
        name:'Birthday'

      },
      {
        path: 'notification',
        element: <Notification />,
        name:'Notification'

      },
      {
        path: 'account-setting',
        element: <Accountsetting />,
        name:'Account Setting'

      },
      {
        path: 'event-list',
        element: <Eventlist />,
        name:'Event List'

      },
      {
        path: 'event-detail',
        element: <Eventdetail />,
        name:'Event Detail'

      },
      {
        path: 'group',
        element: <Group />,
        name:'Group'

      },
      {
        path: 'group-detail',
        element: <Groupdetail />,
        name:'Group Detail'

      },
      {
        path: 'social-profile',
        element: <Socialprofile />,
        name:'Social Profile'

      },

    ]
  }
]