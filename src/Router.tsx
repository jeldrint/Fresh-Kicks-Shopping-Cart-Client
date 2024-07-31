import App from './App';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Shop from './components/Shop';

//import { useState } from 'react';

const Router = () : JSX.Element => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to='/fresh-kicks' />
        },

        {
            path: '/fresh-kicks',
            element: <App />,
            children: [
                {path: '/fresh-kicks/shop', element: <Shop />},
                {path: '/fresh-kicks/shop/:name', element: <Shop />},
            ]
        },

    ])
    return <RouterProvider router={router} />

}

export default Router;