import { fetchMainData } from './utils';
import { CartItems, Shoe } from './types/shoetype';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

type AppProps = {
    mainData: Shoe [],
    setMainData: React.Dispatch<React.SetStateAction<Shoe []>>,
    isErrorMain: null | string,
    setIsErrorMain: React.Dispatch<React.SetStateAction<string | null>>,
    isLoadingMain: boolean,
    setIsLoadingMain: React.Dispatch<React.SetStateAction<boolean>>,
    cartItems: CartItems [],
    setCartItems: React.Dispatch<React.SetStateAction<CartItems []>>,
}


const App = ({mainData, setMainData, isErrorMain, setIsErrorMain, isLoadingMain, setIsLoadingMain, cartItems, setCartItems}: AppProps): React.ReactElement => {

    fetchMainData(setMainData,setIsErrorMain,setIsLoadingMain)

    if (isLoadingMain) return <p>Loading... Please wait</p>
    if (isErrorMain) return <p>{isErrorMain}</p>

    return (
    <div className='min-h-screen h-full w-full flex flex-col justify-between items-center'>
        <Header cartItems={cartItems} setCartItems={setCartItems} />
        <Outlet />
        <Footer />
    </div>
    )
}

export default App