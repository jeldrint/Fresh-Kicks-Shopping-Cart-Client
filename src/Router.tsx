import App from './App';
import { useState } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Shoe } from './types/shoetype';
import Shop from './components/Shop';

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
                {path: '/fresh-kicks/shop', element: <Shop mainData={mainData} />},
                {path: '/fresh-kicks/shop/:category', element: <Shop mainData={mainData} />}
            ]
        },
    ])
    return <RouterProvider router={router} />

}

export default Router;