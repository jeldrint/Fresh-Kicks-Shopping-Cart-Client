import App from './App';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

//import { useState } from 'react';



const Router = () : JSX.Element => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to='/fresh-kicks' />
        },

        {
            path: '/fresh-kicks',
            element: <App />
        }
    ])
    return <RouterProvider router={router} />

}

export default Router;