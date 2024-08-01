import { useParams } from "react-router-dom";
import { Shoe } from "../types/shoetype";


const Shop = ({mainData}: {mainData: Shoe []}): React.ReactElement => {
    //const { categories } = useParams();
    //<h1>Welcome to {categories ? categories : 'shop'}</h1>        
    return (
        <main>
            {
                mainData.map(item =>{
                    console.log(item.name)
                    return item.name
                })
            }
        </main>
    )
}

export default Shop;