import { useParams } from "react-router-dom";
import { Shoe } from "../types/shoetype";
import { useState } from "react";
import SizeGrid from "../components/SizeGrid";


const ShoeSolo = ({mainData} : {mainData: Shoe []}) : React.ReactElement => {
    const {name_id} = useParams();
    const [errMsg, setErrMsg] = useState<string>('');
    const [sizeSwitch, setSizeSwitch] = useState<string | null>(null);

    return(
        <>
        { mainData.filter(shoe => shoe.name_id === name_id)
            .map(shoe => {
                //console.log(shoe.category.menShoeSize)
                return (
                    <section key={name_id} className="p-10 w-full flex flex-col items-center md:flex-row md:justify-center">
                        <div>
                            <img alt={shoe.name} src={shoe.img_URL} className='max-h-[40rem]'></img>
                        </div>
                        <div className='flex flex-col justify-start items-center gap-y-5 md:gap-y-3 lg:gap-y-2'>
                                <h1 className='text-lg font-lato tracking-wide font-bold text-center'>{shoe.name}</h1>
                                {errMsg === 'no-size-selected' ?
                                    <h3 className={'text-md font-myFont text-red-500'}>No size specified.</h3> :
                                 errMsg === 'duplicate-shoe' ?
                                    <h3 className={'text-md font-myFont text-red-500'}>Shoe already added to cart.</h3> :
                                    <h3 className='text-md font-myFont text-black opacity-0'>Shoe added.</h3>
                                }
                                <SizeGrid category={shoe.category} sizeSwitch={sizeSwitch} setSizeSwitch={setSizeSwitch} />
                        </div>
                    </section>

                )
            })

        }
        </>
        
    )
}

export default ShoeSolo;


