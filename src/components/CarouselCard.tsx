import { Shoe } from "../types/shoetype";
import ShoePrice from "./ShoePrice";

const CarouselCard = ({shoe, imgDisplay}: {shoe: Shoe, imgDisplay: string}) : React.ReactElement => {

    return (
        <div className={`${imgDisplay} flex-col justify-center items-center text-xs md:text-lg`}>
            <div className="text-sm md:text-lg flex items-center font-bold font-montserrat">
                <span className="text-red-700">{shoe.brand.toUpperCase()}&emsp;</span>
                <span className="w-[15rem] md:w-[40rem] whitespace-nowrap overflow-hidden text-ellipsis">{shoe.name}</span>
            </div>
            <div className="flex items-center">
                <ShoePrice shoe={shoe} className='flex gap-x-3 font-lato text-sm md:text-lg' />
                <span className="text-red-600 font-lato font-bold text-sm md:text-lg">&ensp;{shoe.discount * 100 }% OFF!</span>
            </div>
            <img alt={shoe.name} src={shoe.img_URL} className="max-h-[30rem] object-cover" />
        </div>
    )
}

export default CarouselCard;