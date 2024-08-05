import { useParams } from "react-router-dom";
import { Shoe } from "../types/shoetype";
import { useState } from "react";
import SizeGrid from "../components/SizeGrid";
import ShoePrice from "../components/ShoePrice";
import CartIcon from '../images/shopping-bag.png'

type ShoeSoloProps ={
    mainData: Shoe [],
    cartItems: string [],
    setCartItems: React.Dispatch<React.SetStateAction<string[]>>
} 


const ShoeSolo = ({mainData, cartItems, setCartItems} : ShoeSoloProps) : React.ReactElement => {
    const {name_id} = useParams();
    const [errMsg, setErrMsg] = useState<string>('');
    const [sizeSwitch, setSizeSwitch] = useState<string | null>(null);

    const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>,shoe: Shoe) => {
        e.preventDefault();
        console.log(shoe)
        let shoePrice = shoe.price - shoe.price * (shoe.discount ? shoe.discount: 0);
        // if(sizeSwitch){
        //     if(cartItems.find(item=>item.name === shoe.name && item.size === sizeSwitch)){
        //         setErrMsg('duplicate-shoe')
        //     }else{
        //         //setCartItems(prev=>[...prev,{id: shoe.id + '-' + sizeSwitch, name: shoe.name, size: sizeSwitch, price: shoePrice, img: shoe.img, qty:1}])
        //         setErrMsg('')
        //     }
        // }else{
        //     setErrMsg('no-size-selected')
        // }

    }

    return(
        <>
        { mainData.filter(shoe => shoe.name_id === name_id)
            .map(shoe => {
                //console.log(shoe.category.menShoeSize)
                return (
                    <section key={name_id} className="p-10 w-full flex flex-col items-center md:flex-row md:justify-center">
                        <div>
                            <img alt={shoe.name} src={shoe.img_URL} className='max-h-[40rem]'></img>
                        </div>
                        <div className='flex flex-col justify-start items-center gap-y-5 md:gap-y-3 lg:gap-y-2'>
                                <h1 className='text-lg font-lato tracking-wide font-bold text-center'>{shoe.name}</h1>
                                {errMsg === 'no-size-selected' ?
                                    <h3 className={'text-md font-myFont text-red-500'}>No size specified.</h3> :
                                 errMsg === 'duplicate-shoe' ?
                                    <h3 className={'text-md font-myFont text-red-500'}>Shoe already added to cart.</h3> :
                                    <h3 className='text-md font-myFont text-black opacity-0'>Shoe added.</h3>
                                }
                                <SizeGrid category={shoe.category} sizeSwitch={sizeSwitch} setSizeSwitch={setSizeSwitch} />
                                <div className='flex w-full justify-evenly items-center'>
                                    <div className='text-2xl font-bold'>
                                        <ShoePrice shoe={shoe} className={'font-montserrat text-sm md:text-lg'} />
                                    </div>
                                    <button type='submit' onClick={e=>addToCart(e,shoe)} className='px-8 py-3 rounded-full flex flex-col items-center justify-between
                                     transition-colors bg-indigo-700 text-slate-200 hover:bg-indigo-800 active:bg-indigo-900 '>
                                        <span>Add to Cart</span>
                                        <img alt='cart-icon' src={CartIcon} className='max-w-[20px] invert'/>
                                    </button>
                                </div>

                        </div>
                    </section>

                )
            })

        }
        </>
        
    )
}

export default ShoeSolo;


