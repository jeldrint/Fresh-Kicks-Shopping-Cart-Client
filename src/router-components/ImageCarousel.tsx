import { useEffect, useState } from "react"
import ImgSlide from "../components/ImageSlide"
import { Shoe } from "../types/shoetype"


const ImgCarousel = ({mainData}: {mainData: Shoe []}) : React.ReactElement => {
    const [carouselShoes,setCarouselShoes] = useState<Shoe []>([])
    const tempArr: Shoe [] = mainData;

    useEffect(()=> {
        //console.log(mainData.sort((a,b)=>b.discount - a.discount).slice(0,5))
        setCarouselShoes(tempArr.sort((a,b)=>b.discount - a.discount).slice(0,5))
    },[])

    return(
        <ImgSlide carouselShoes={carouselShoes} />
    ) 
}

export default ImgCarousel