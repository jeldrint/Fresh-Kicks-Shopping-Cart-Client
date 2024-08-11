import { useEffect, useState } from "react"
import ImgSlide from "../components/ImageSlide"
import { Shoe } from "../types/shoetype"


const ImgCarousel = ({mainData}: {mainData: Shoe []}) : React.ReactElement => {
    const [carouselShoes,setCarouselShoes] = useState<Shoe []>([])
    const tempArr: Shoe [] = [];

    useEffect(()=> {
        if(tempArr.length === 0){
            mainData.forEach(shoe => {
                tempArr.push(shoe)
            })    
        }
        setCarouselShoes(tempArr.sort((a,b)=>b.discount - a.discount).slice(0,8))
    },[])

    return(
        <ImgSlide carouselShoes={carouselShoes} />
    ) 
}

export default ImgCarousel