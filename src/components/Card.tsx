import { Link, useParams } from "react-router-dom";
import { Shoe } from "../types/shoetype";

const Card = ({shoe}: {shoe: Shoe}) : React.ReactElement => {
    const {category} = useParams();
    const fullLink: string = `/fresh-kicks/${category}/${shoe.name_id}`

    return (
        <Link to={fullLink} className='font-sans max-w-xs rounded shadow-lg border-2 flex flex-col p-2 lg:p-4 cursor-pointer transition duration-250 hover:scale-105'>
            <img alt={shoe.name} src={shoe.img_URL} className="object-cover" />
            <div className='w-full h-full text-xs md:text-sm grid grid-rows-2'>
                <div className="flex flex-col">
                    <span className="text-red-700 font-bold font-montserrat">{shoe.brand.toUpperCase()}</span>
                    <span>{shoe.name}</span>
                </div>
                <div aria-label='shoe-price' className='font-lato text-sm self-end'>
                    {shoe.discount != null ?
                    <div className='flex flex-col'>
                        <span className='text-red-500 line-through'>{'\u20B1 '}{(Math.round(shoe.price*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                        <span >{'\u20B1 '}{(Math.round((shoe.price - shoe.price * shoe.discount)*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>                      
                    </div> :
                    <span>{'\u20B1 '}{(Math.round(shoe.price*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                    }
                </div>
            </div>
        </Link>
    )
}

export default Card;