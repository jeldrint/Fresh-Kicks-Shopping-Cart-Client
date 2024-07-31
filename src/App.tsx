import { useState } from 'react';
import './App.css'
import Layout from './components/Layout';
import Shop from './components/Shop';

import { fetchMainData } from './utils';
import { type Shoe } from './types/ShoeType';
import Card from './components/Card';


const App = (): React.ReactElement => {
    const [mainData, setMainData] = useState<Shoe []>([]);
    const [isErrorMain, setIsErrorMain] = useState<string |null>(null);
    const [isLoadingMain, setIsLoadingMain] = useState(false);

    fetchMainData(setMainData,setIsErrorMain,setIsLoadingMain)
    if (isLoadingMain) return <p>Loading... Please wait</p>
    if (isErrorMain) return <p>{isErrorMain}</p>

    return (
    <div className='min-h-screen h-full w-full flex flex-col justify-between items-center'>
        <Card mainData={mainData} />
        <Layout >
            <Shop />
        </Layout>
    </div>
    )
}

export default App
