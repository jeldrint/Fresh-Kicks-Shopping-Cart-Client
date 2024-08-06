import { Link } from "react-router-dom";
import { CartItems } from "../types/shoetype";
import { setItem } from "../localstorage";

type CartProps = {
    cartItems: CartItems [],
    setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>>,
    isCartDisplayed: boolean,
    setIsCartDisplayed: React.Dispatch<React.SetStateAction<boolean>>,
    cartTotalAmount: number,
    setCartTotalAmount: React.Dispatch<React.SetStateAction<number>>,
}

const Cart = ({cartItems, setCartItems, isCartDisplayed, setIsCartDisplayed, cartTotalAmount, setCartTotalAmount} : CartProps) => {
    //saving to localstorage
    setItem<CartItems []>('cartItems',cartItems)

    const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>, cartShoe: CartItems) => {
        let tempArr = cartItems;
        //console.log(tempArr)
        !e.target.value ? tempArr[tempArr.findIndex(item=>item.id === cartShoe.id)].qty = 0 : tempArr[tempArr.findIndex(item=>item.id === cartShoe.id)].qty = parseInt(e.target.value);
        if(parseInt(e.target.value) > 99){
            e.target.value = '99';
            tempArr[tempArr.findIndex(item=>item.id === cartShoe.id)].qty = 99
        }
        setCartItems(tempArr);

        setCartTotalAmount(cartItems.reduce((prev,curr)=>prev+(curr.price*curr.qty),0));
        if(!cartItems){
            setCartTotalAmount(0);
        }
    }
    const removeItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, cartShoe: CartItems) =>{
        e.preventDefault();
        let removedItemPrice = cartShoe.price * cartShoe.qty
        setCartItems(current=>current.filter(item=> item.id != cartShoe.id))
        setCartTotalAmount(cartItems.reduce((prev,curr)=>prev+(curr.price*curr.qty),0)-removedItemPrice);
    }

    const handleQtyInput = (e:React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.code.substring(0,5) != 'Digit' && e.code.substring(0,5) != 'Backs' && e.code.substring(0,5) != 'Arrow') {
            e.preventDefault();
        }
        //console.log(e.code)
    }

    return(
            <section className={isCartDisplayed ? 'z-10 overflow-y-auto w-[20rem] sm:w-[30rem] h-[80%] bg-white shadow-lg fixed right-[2%] top-[2%] p-4 rounded': 'hidden'}>
                <span onClick={()=>setIsCartDisplayed(false)} className='cursor-pointer font-bold hover:text-indigo-700'>{String.fromCharCode(171)} Go back</span>
                {cartItems.map((cartShoe)=>{
                    const id = cartShoe.name + '-' + cartShoe.size
                    return(
                        <div key={id} className='flex p-3 border-2 my-2 rounded'>
                            <div>
                                <img alt={cartShoe.name} src={cartShoe.img_URL} className='max-w-[100px]'/>
                            </div>
                            <div className='flex flex-col items-start text-xs gap-y-1'>
                                <span className='font-bold tracking-wide'>{cartShoe.name}</span>
                                <span className='tracking-wide'>{cartShoe.size.toUpperCase().replace('-',' - ')}</span>
                                <form className='flex gap-x-2 items-center'>
                                    <div>
                                        <label htmlFor='qty-input'>QTY: </label>
                                        <input title="cartshoe-qty" defaultValue={cartShoe.qty} min={1} max={99} type='number' className='rounded border max-w-[40px] text-center text-xs md:text-sm' onChange={e=>handleQtyChange(e,cartShoe)} onKeyDown={handleQtyInput}/>
                                    </div>
                                    <span>x {'\u20B1 '}{(Math.round(cartShoe.price*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                                </form>
                                <button type='button' className='text-white rounded p-1 bg-red-700 opacity-30 hover:opacity-100 active:bg-red-900 transition-opacity' onClick={e=>removeItem(e,cartShoe)}>Remove Item</button>
                            </div>
                        </div>
                    )
                })}
                <div className="flex items-center justify-evenly">
                {
                    cartItems.length === 0 ? 
                    <div className='h-full text-center font-bold font-montserrat text-xl tracking-wider text-indigo-800'>No items in cart yet.</div>
                    : <div className='font-bold tracking-wide text-lg'>TOTAL:&ensp;{'\u20B1 '}{cartTotalAmount.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
                }
                {
                    cartItems.length != 0 &&
                    <Link to='/fresh-kicks/checkout' type='submit' className='px-8 py-3 rounded-full flex flex-col items-center justify-between
                    transition-colors bg-indigo-700 text-slate-200 hover:bg-indigo-800 active:scale-90 '>
                        Proceed to Checkout
                    </Link>
                }
                </div>
            </section>
        )
}

export default Cart;
