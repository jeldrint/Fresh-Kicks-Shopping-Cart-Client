import App from './App';
import { useState } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { CartItems, Shoe } from './types/shoetype';
import Shop from './router-components/Shop';
import ShoeSolo from './router-components/ShoeSolo';
import Checkout from './components/Checkout';
import { getItem } from './localstorage';
import ImgCarousel from './router-components/ImageCarousel';

const Router = () : React.ReactElement => {
    const [mainData, setMainData] = useState<Shoe []>([]);
    const [isErrorMain, setIsErrorMain] = useState<string |null>(null);
    const [isLoadingMain, setIsLoadingMain] = useState(false);
    const [cartItems, setCartItems] = useState<CartItems []>(getItem<CartItems[] | any>('cartItems') ? getItem<CartItems[] | any>('cartItems'): []);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to='/fresh-kicks' />
        },

        {
            path: '/fresh-kicks',
            element: <App setMainData={setMainData} isErrorMain={isErrorMain} 
            setIsErrorMain={setIsErrorMain} isLoadingMain={isLoadingMain} setIsLoadingMain={setIsLoadingMain}
            cartItems={cartItems} setCartItems={setCartItems} />,
            children: [
                { path: '/fresh-kicks', element: <ImgCarousel mainData={mainData} /> },
                { path: '/fresh-kicks/:category', element: <Shop mainData={mainData} /> },
                { path: '/fresh-kicks/:category/:name_id', element: <ShoeSolo mainData={mainData} cartItems={cartItems} setCartItems={setCartItems} /> },
            ]
        },
        {
            path: '/fresh-kicks/checkout',
            element: <Checkout />
        }

    ])
    return <RouterProvider router={router} />

}

export default Router;