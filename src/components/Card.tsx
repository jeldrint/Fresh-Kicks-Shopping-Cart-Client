import { Link, useParams } from "react-router-dom";
import { Shoe } from "../types/shoetype";
import ShoePrice from "./ShoePrice";

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
                <ShoePrice shoe={shoe} className='font-lato text-xs md:text-sm self-end' />
            </div>
        </Link>
    )
}

export default Card;