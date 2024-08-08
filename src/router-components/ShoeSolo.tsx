import { useParams } from "react-router-dom";
import { CartItems, Shoe } from "../types/shoetype";
import { useState } from "react";
import SizeGrid from "../components/SizeGrid";
import ShoePrice from "../components/ShoePrice";
import CartIcon from '../images/shopping-bag.png'

type ShoeSoloProps ={
    mainData: Shoe [],
    cartItems: CartItems [],
    setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>>
} 


const ShoeSolo = ({mainData, cartItems, setCartItems} : ShoeSoloProps) : React.ReactElement => {
    const {name_id} = useParams();
    const [errMsg, setErrMsg] = useState<string>('');
    const [sizeSwitch, setSizeSwitch] = useState<string | null>(null);

    const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>,shoe: Shoe) => {
        e.preventDefault();
        //console.log(shoe)
        let shoePrice = shoe.price - shoe.price * (shoe.discount ? shoe.discount: 0);
        //console.log(sizeSwitch)
        if(sizeSwitch){
            if(cartItems.find(item=>item.name === shoe.name && item.size === sizeSwitch)){
                setErrMsg('duplicate-shoe')
            }else{
                //prev=>[...prev,{id: shoe.id + '-' + sizeSwitch, name: shoe.name, size: sizeSwitch, price: shoePrice, img: shoe.img, qty:1}]
                setCartItems(prev=>[...prev,{id: shoe.name_id + '-'+ sizeSwitch, name: shoe.name, size: sizeSwitch, price: shoePrice, img_URL: shoe.img_URL, qty: 1}])
                setErrMsg('')
            }
        }else{
            setErrMsg('no-size-selected')
        }

    }

    return(
        <>
        { mainData.filter(shoe => shoe.name_id === name_id)
            .map(shoe => (
                //console.log(shoe.category.menShoeSize)
                <section key={name_id} className="p-6 w-full flex flex-col items-center md:flex-row md:justify-center">
                    <div>
                        <img alt={shoe.name} src={shoe.img_URL} className='max-h-[40rem]'></img>
                    </div>
                    <div className='flex flex-col justify-start items-center gap-y-5 md:gap-y-3 lg:gap-y-2'>
                            <h1 className='text-lg font-lato tracking-wide font-bold text-center'>{shoe.name}</h1>
                            <SizeGrid category={shoe.category} sizeSwitch={sizeSwitch} setSizeSwitch={setSizeSwitch} />
                            {errMsg === 'no-size-selected' ?
                                <h3 className={'text-md font-myFont text-red-500'}>No size specified.</h3> :
                                errMsg === 'duplicate-shoe' ?
                                <h3 className={'text-md font-myFont text-red-500'}>Shoe already added to cart.</h3> :
                                <h3 className='text-md font-myFont text-black opacity-0'>This is an invisible text.</h3>
                            }

                            <div className='flex w-full justify-center items-center gap-x-5'>
                                <ShoePrice shoe={shoe} className={'flex flex-col font-montserrat text-sm md:text-lg'} />
                                <button type='submit' onClick={e=>addToCart(e,shoe)} className='px-8 py-3 rounded-full flex flex-col items-center justify-between
                                    transition-colors bg-indigo-700 text-slate-200 hover:bg-indigo-800 active:scale-90 '>
                                    <span>Add to Cart</span>
                                    <img alt='cart-icon' src={CartIcon} className='max-w-[20px] invert'/>
                                </button>
                            </div>

                    </div>
                </section>
            ))

        }
        </>
        
    )
}

export default ShoeSolo;


