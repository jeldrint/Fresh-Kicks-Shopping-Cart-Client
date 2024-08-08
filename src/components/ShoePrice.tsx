import { Shoe } from "../types/shoetype";

type ShoePriceProps ={
    shoe: Shoe,
    className: string
}

const ShoePrice = ({shoe, className}: ShoePriceProps ): React.ReactElement => {
        if(shoe.discount != null) {
            return(
                <div aria-label='shoe-price' className={className}>
                    <span className='text-slate-400 line-through'>{'\u20B1 '}{(Math.round(shoe.price*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                    <span className='text-red-700 font-bold' >{'\u20B1 '}{(Math.round((shoe.price - shoe.price * shoe.discount)*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                </div>
            )
        }else{
            return(
                <span aria-label='shoe-price' className={className}>{'\u20B1 '}{(Math.round(shoe.price*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
            )
        }
}

export default ShoePrice;

