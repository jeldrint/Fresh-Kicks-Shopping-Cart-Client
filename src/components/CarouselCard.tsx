import { Shoe } from "../types/shoetype";
import ShoePrice from "./ShoePrice";

const CarouselCard = ({shoe, imgDisplay}: {shoe: Shoe, imgDisplay: string}) : React.ReactElement => {
    const className:string = `bg-indigo-200 ${imgDisplay} flex-col justify-center items-center text-xs md:text-lg p-2 lg:p-4`;

    return (
        <div className={className}>
            <img alt={shoe.name} src={shoe.img_URL} className="max-h-[32rem] object-cover" />
            <div className="text-sm md:text-lg flex items-center font-bold font-montserrat">
                <span className="text-red-700">{shoe.brand.toUpperCase()}&emsp;</span>
                <span>{shoe.name}</span>
            </div>
            <div className="flex items-center justify-evenly">
                <ShoePrice shoe={shoe} className='flex gap-x-3 font-lato text-sm md:text-lg' />
                <span className="text-red-600 font-lato font-bold text-sm md:text-lg">{shoe.discount * 100 }% OFF!</span>
            </div>
        </div>
    )
}

export default CarouselCard;