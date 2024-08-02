import { Shoe } from "../types/shoetype";

const ShopItem = ({shoe}: {shoe: Shoe}) : React.ReactElement => {

    return (
        <div className='max-w-xs rounded shadow-lg border-2 flex flex-col p-2 lg:p-4 cursor-pointer transition duration-250 hover:scale-105'>
            <img alt={shoe.name} src={shoe.img_URL} className="object-cover" />
            <div className='w-full h-full font-myFont text-xs md:text-sm grid grid-rows-2'>
                <span>{shoe.name}</span>
                <div aria-label='shoe-price' className='text-sm self-end'>
                    {shoe.discount != null ?
                    <div className='flex flex-col'>
                        <span className='text-red-500 line-through'>{'\u20B1 '}{(Math.round(shoe.price*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                        <span >{'\u20B1 '}{(Math.round((shoe.price - shoe.price * shoe.discount)*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>                      
                    </div> :
                    <span>{'\u20B1 '}{(Math.round(shoe.price*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default ShopItem;