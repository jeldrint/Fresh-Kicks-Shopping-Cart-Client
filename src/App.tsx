import { useState } from 'react';
import './App.css'
import Layout from './components/Layout';
import Shop from './components/Shop';

import { fetchMainData } from './utils';

const App = ({}): JSX.Element => {
    const [mainData, setMainData] = useState<string []>([]);
    const [errorMain, setErrorMain] = useState<string |null>(null);
    const [loadingMain, setLoadingMain] = useState(false);

    fetchMainData(setMainData,setErrorMain,setLoadingMain)

    return (
    <div className='min-h-screen h-full w-full flex flex-col justify-between items-center'>
        <Layout>
            <Shop />
        </Layout>
    </div>
    )
}

export default App
