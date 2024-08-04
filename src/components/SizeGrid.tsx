import { Shoe_Category } from "../types/shoetype"

type SizeGridProps = {
    category: Shoe_Category,
    sizeSwitch: string | null,
    setSizeSwitch: React.Dispatch<React.SetStateAction<string | null>>
}

const SizeGrid = ({category, sizeSwitch, setSizeSwitch}: SizeGridProps) : React.ReactElement => {
    const className1: string = 'cursor-pointer text-center border rounded p-2 transition-colors hover:bg-indigo-500 hover:text-white active:bg-indigo-700'
    const className2: string = 'cursor-pointer text-center border rounded p-2 transition-colors active:bg-indigo-700 bg-indigo-700 text-white ring ring-indigo-300'
    let gender: string = ''

    return (
        <div className='grid auto-rows-max gap-y-1'>
            { Object.entries(category).filter(arr=>typeof arr[1] === "object").map(arr => arr.map(items => {
                if(typeof items === 'string'){
                    if(items === 'menShoeSize'){
                        gender = 'Men'
                    }
                    if(items === 'womenShoeSize'){
                        gender = 'Women'
                    }
                    if (items === 'kidsShoeSize') {
                        gender = 'Kids'
                    }
                }
                return(
                    typeof items === 'string' ?
                    <label key={items} className='text-sm md:text-md font-montserrat tracking-wide font-bold'>{gender}</label> :

                    typeof items === 'object' &&
                    <section key={items.id} className="mb-10 text-xs font-montserrat text-indigo-800 grid grid-cols-4 max-w-xs gap-2">
                    { Object.entries(items).filter(item => typeof item[1] === 'boolean').map(size=> {
                        let shoeID = gender.concat('-'+size[0]).toLowerCase();
                        //console.log(shoeID)
                        return(
                            <>
                                { size[1] ?
                                <button key={shoeID} name={shoeID} type='button' className={className1} >{size[0].toUpperCase().replace('_',' ')}</button>: 
                                <button key={shoeID} name={shoeID} type='button' disabled className='text-center border rounded py-2 bg-slate-100 text-slate-400'>{size[0].toUpperCase().replace('_',' ')}</button>
                                }
                                {shoeID = ''}
                            </>
                        )
                    })}
                    </section>    
            )
            }))}
        </div>
    )
}

export default SizeGrid

// if(typeof items === 'string'){
//     if(items === 'menShoeSize'){
//         gender = 'Men'
//     }
//     if(items === 'womenShoeSize'){
//         gender = 'Women'
//     }
//     if (items === 'kidsShoeSize') {
//         gender = 'Kids'
//     }
// }

// return(
//     typeof items === 'string' ?
//     <label key={items} className='text-sm md:text-md font-montserrat tracking-wide font-bold'>{gender}</label> :

//     typeof items === 'object' &&
//     <section key={items.id} className="mb-10 text-xs font-montserrat text-indigo-800 grid grid-cols-4 max-w-xs gap-2">
//     { Object.entries(items).filter(item => typeof item[1] === 'boolean').map(size=> {
//         let shoeID = gender.concat('-'+size[0]).toLowerCase();
//         //console.log(shoeID)
//         return(
//             <>
//                 { size[1] &&
//                 <button key={shoeID} id={shoeID} type='button' className={className1} >{size[0].toUpperCase().replace('_',' ')}</button>
//                 }
//                 {shoeID = ''}
//             </>
//         )
//     })}
//     </section>    
// )



//:
//<button key={shoeID} id={shoeID} type='button' disabled className='text-center border rounded py-2 bg-slate-100 text-slate-400'>{size[0].toUpperCase().replace('_',' ')}</button>
// {
//     //console.log(items)
//     typeof items[0] === 'string' ?
//     <label htmlFor='shoe-sizes' className='text-sm md:text-md font-varela'>{items[0].toUpperCase()}</label> :
//     <section className="text-sm text-indigo-800 grid grid-cols-4 max-w-xs gap-2">
//         { Object.entries(items[1]).filter(items => typeof items[1] === 'boolean').map(size=> {
//             let sizeID = items[0]+'-'+size[0];
//             console.log(sizeID)
//             return (
//                 <>
//                 {
//                     size[1] ?
//                     <button key={sizeID} onClick={(e)=>{e.preventDefault(); setSizeSwitch(sizeID)}} className={sizeSwitch === sizeID ? className2 : className1} >
//                         {size[0]}
//                     </button> :
//                     <button key={sizeID} disabled className='text-center border rounded py-2 bg-slate-100 text-slate-400'>{size[0]}</button>
//                 }
//                 </>

//                 )
//             })
            
//         }
//     </section>
// }
