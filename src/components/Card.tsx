import { Shoe } from "../types/shoetype";


const Card = ({mainData}: {mainData: Shoe []}):React.ReactElement<Shoe> => {
    console.log(mainData)
    return <h1>Hello</h1>
}

export default Card;