import { Shoe } from "../types/shoetype";
import { useParams } from "react-router-dom";


const Shop = (): React.ReactElement => {
    const { categories } = useParams();

    return (
    <main>
        <h1>Welcome to {categories ? categories : 'shop'}</h1>        
    </main>
    )
}

export default Shop;