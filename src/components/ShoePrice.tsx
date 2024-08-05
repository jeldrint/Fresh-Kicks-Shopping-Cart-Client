import { Shoe } from "../types/shoetype";

type ShoePriceProps ={
    shoe: Shoe,
    className: string
}

const ShoePrice = ({shoe, className}: ShoePriceProps ): React.ReactElement => {
    return(
        <div aria-label='shoe-price' className={className}>
            {shoe.discount != null ?
            <div className='flex flex-col'>
                <span className='text-red-500 line-through'>{'\u20B1 '}{(Math.round(shoe.price*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                <span >{'\u20B1 '}{(Math.round((shoe.price - shoe.price * shoe.discount)*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>                      
            </div> :
            <span>{'\u20B1 '}{(Math.round(shoe.price*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
            }
        </div>

    )
}

export default ShoePrice;