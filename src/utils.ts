import { useEffect } from "react"
import { type Shoe } from "./types/shoetype"

type setDataProps = React.Dispatch<React.SetStateAction<Shoe[]>>;
type setIsErrorProps = React.Dispatch<React.SetStateAction<string | null>>;
type setIsLoadingProps = React.Dispatch<React.SetStateAction<boolean>>;


export const fetchMainData = (setData: setDataProps, setIsError: setIsErrorProps, setIsLoading: setIsLoadingProps) => {
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await fetch('/api', {mode: 'cors'} );
                const response:Shoe[] = await data.json();
                //console.log(response)
                setData(response)
            }catch(error){
                const message =
                    error instanceof Error ? error.message : 'There was an error somewhere...'
                setIsError(message);
            }finally{
                setIsLoading(false)
            }
        };
        fetchData();
    },[])
}