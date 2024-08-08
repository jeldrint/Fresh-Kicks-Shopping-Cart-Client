import { Link, useParams } from "react-router-dom";
import { Shoe } from "../types/shoetype";
import ShoePrice from "./ShoePrice";

const Card = ({shoe}: {shoe: Shoe}) : React.ReactElement => {
    const {category} = useParams();
    const fullLink: string = `/fresh-kicks/${category}/${shoe.name_id}`

    return (
        <Link to={fullLink} className="relative max-h-xs rounded shadow-lg border-2 p-2 lg:p-4 flex flex-col justify-between cursor-pointer transition duration-250 hover:scale-105">
            <div className='font-sans grid auto-rows-max'>
                { shoe.discount != null && <span className='absolute right-0 top-0 p-1 font-bold bg-indigo-600 text-slate-200'>-{shoe.discount * 100 }%</span> }
                <img alt={shoe.name} src={shoe.img_URL} className="object-cover" />
                <div className='flex flex-col text-xs md:text-sm'>
                    <span className="text-red-700 font-bold font-montserrat">{shoe.brand.toUpperCase()}</span>
                    <span className="">{shoe.name}</span>
                </div>
            </div>
            <ShoePrice shoe={shoe} className='mt-1 flex flex-col font-lato text-xs md:text-sm' />
        </Link>
    )
}

export default Card;