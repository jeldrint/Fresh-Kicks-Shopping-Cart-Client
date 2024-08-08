import { useEffect, useState } from "react";
import { Shoe } from "../types/shoetype";
import CarouselCard from "./CarouselCard";

const ImgSlide = ({carouselShoes}:{carouselShoes: Shoe []}) => {
    const [currIdx, setCurrIdx] = useState<number>(0);
    const dotClass1:string = 'bg-slate-300 w-4 h-4 rounded-full border-none transition-colors hover:bg-indigo-700 cursor-pointer';
    const dotClass2:string = 'bg-indigo-700 w-4 h-4 rounded-full border-none transition-colors hover:bg-indigo-700 cursor-pointer'

    useEffect(()=> {
        const interval = setInterval(() =>{
            if(currIdx === carouselShoes.length -1){
                setCurrIdx(0)
            }else{
                setCurrIdx(prevIdx=>prevIdx+1)
            }
        },5000)
        return () => clearInterval(interval)
    })

    return (
        <div className="grid grid-rows-1">
            { carouselShoes.map((shoe,idx) => (
                <CarouselCard key={idx} shoe={shoe} imgDisplay={currIdx === idx ? 'flex': 'hidden' } />
            ))}
            <div className="justify-self-center flex gap-x-1">
            { carouselShoes.map((_,idx) => (
                <div key={idx} onClick={()=>{setCurrIdx(idx); }} className={currIdx === idx ? dotClass2 : dotClass1}></div>
            ))}
            </div>
        </div>
    )

}

export default ImgSlide;