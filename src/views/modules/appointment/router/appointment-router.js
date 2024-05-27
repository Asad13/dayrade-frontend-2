import React from 'react'

//Appointment layout
import Appointment from '../layouts/appointment'

// pages
import Dashboard from '../pages/appointment'
import Bookappointment from '../pages/book-appointment'
import Doctorvisit from '../pages/doctor-visit'


export const AppointmentRouter = [
    {
        path: 'appointment',
        element: <Appointment />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />,
                name:'Appointment',
                active:'home'


            },
            {
                path: 'book-appointment',
                element: <Bookappointment />,
                name:'Book Appointment'
                
            },
            {
                path: 'doctor-visit',
                element: <Doctorvisit />,
                name:'Doctor Visit'

            }
        ]
    }
]
