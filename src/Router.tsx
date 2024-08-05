import App from './App';
import { useState } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Shoe } from './types/shoetype';
import Shop from './router-components/Shop';
import ShoeSolo from './router-components/ShoeSolo';

const Router = () : React.ReactElement => {
    const [mainData, setMainData] = useState<Shoe []>([]);
    const [isErrorMain, setIsErrorMain] = useState<string |null>(null);
    const [isLoadingMain, setIsLoadingMain] = useState(false);
    const [cartItems, setCartItems] = useState<Shoe []>([]);


    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to='/fresh-kicks' />
        },

        {
            path: '/fresh-kicks',
            element: <App mainData={mainData} setMainData={setMainData} isErrorMain={isErrorMain} setIsErrorMain={setIsErrorMain} isLoadingMain={isLoadingMain} setIsLoadingMain={setIsLoadingMain} />,
            children: [
                { path: '/fresh-kicks/:category', element: <Shop mainData={mainData} /> },
                { path: '/fresh-kicks/:category/:name_id', element: <ShoeSolo mainData={mainData} cartItems={cartItems} setCartItems={setCartItems} /> },
            ]
        },

    ])
    return <RouterProvider router={router} />

}

export default Router;