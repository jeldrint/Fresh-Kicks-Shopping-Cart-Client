import { useParams } from "react-router-dom";
import { Shoe } from "../types/shoetype";
import Card from "./Card";


const Shop = ({mainData}: {mainData: Shoe []}): React.ReactElement => {
    const { category } = useParams();

    return (
        <main className='m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
            {
                category === 'hot-items' ? mainData.filter(shoe => {
                    return shoe.category.hot_item === true
                }).map(shoe => {
                    return <Card key={shoe.id} shoe={shoe} />
                }) : category === 'new-arrivals' ? mainData.filter(shoe => {
                    return shoe.category.new_arrival === true
                }).map(shoe => {
                    return <Card key={shoe.id} shoe={shoe} />
                }) : category === 'men' ? mainData.filter(shoe => {
                    return shoe.category.men === true
                }).map(shoe => {
                    return <Card key={shoe.id} shoe={shoe} />
                }) : category === 'women' ? mainData.filter(shoe => {
                    return shoe.category.women === true
                }).map(shoe => {
                    return <Card key={shoe.id} shoe={shoe} />
                }) : category === 'kids' ? mainData.filter(shoe => {
                    return shoe.category.kids === true
                }).map(shoe => {
                    return <Card key={shoe.id} shoe={shoe} /> 
                }) : mainData.map(shoe => {
                    return <Card key={shoe.id} shoe={shoe} />
                })
            }
        </main>
    )
}

export default Shop;

// mainData.map(item =>{
//     //console.log(item.name)
//     return item.name
// })
