import { useState } from "react";
import { Shoe } from "../types/shoetype";
import CarouselCard from "./CarouselCard";

const ImgSlide = ({carouselShoes}:{carouselShoes: Shoe []}) => {
    const [currIdx, setCurrIdx] = useState<number>(0);
    
    const handleNext = () : void => {
        setCurrIdx(prev=> prev + 1 === carouselShoes.length ? 0 : prev + 1)
    }

    const handlePrevious = () : void => {
        setCurrIdx(prev=> prev - 1 === 0 ? carouselShoes.length - 1 : prev - 1)
    }

    const handleDots = (idx: number) : void => {
        setCurrIdx(idx)
    }


    return (
        <div>
            { carouselShoes.map((shoe,idx) => {
                return <CarouselCard key={shoe.id} shoe={shoe} imgDisplay={currIdx === idx ? 'flex': 'hidden' } />
            })}
        </div>
    )

}

export default ImgSlide;