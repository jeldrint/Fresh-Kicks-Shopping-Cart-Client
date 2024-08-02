import './App.css'

import { fetchMainData } from './utils';
import { setDataProps, setErrorProps, setLoadingProps, Shoe } from './types/shoetype';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const App = ({mainData, setMainData, isErrorMain, setIsErrorMain, isLoadingMain, setIsLoadingMain}: 
    {   mainData: Shoe [], setMainData: setDataProps, isErrorMain: null | string, 
        setIsErrorMain: setErrorProps, isLoadingMain: boolean, setIsLoadingMain: setLoadingProps    
    }): React.ReactElement => {

    fetchMainData(setMainData,setIsErrorMain,setIsLoadingMain)

    if (isLoadingMain) return <p>Loading... Please wait</p>
    if (isErrorMain) return <p>{isErrorMain}</p>

    return (
    <div className='min-h-screen h-full w-full flex flex-col justify-between items-center'>
        <Header />
        <Outlet />
        <Footer />
    </div>
    )
}

export default App