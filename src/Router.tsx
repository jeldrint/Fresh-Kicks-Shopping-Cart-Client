import App from './App';
import { useState } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Shoe } from './types/shoetype';
import Shop from './components/Shop';
import ShoeSolo from './components/ShoeSolo';

const Router = () : React.ReactElement => {
    const [mainData, setMainData] = useState<Shoe []>([]);
    const [isErrorMain, setIsErrorMain] = useState<string |null>(null);
    const [isLoadingMain, setIsLoadingMain] = useState(false);


    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to='/fresh-kicks' />
        },

        {
            path: '/fresh-kicks',
            element: <App mainData={mainData} setMainData={setMainData} isErrorMain={isErrorMain} setIsErrorMain={setIsErrorMain} isLoadingMain={isLoadingMain} setIsLoadingMain={setIsLoadingMain} />,
            children: [
                {path: '/fresh-kicks/:category', element: <Shop mainData={mainData} />},
            ]
        },
        {
            path: '/fresh-kicks/:category/:id',
            element: <ShoeSolo />
        },

    ])
    return <RouterProvider router={router} />

}

export default Router;