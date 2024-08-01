import { useEffect } from "react"
import { type Shoe } from "./types/shoetype"

import { setDataProps, setErrorProps, setLoadingProps } from "./types/shoetype"

export const fetchMainData = (setData: setDataProps, setIsError: setErrorProps, setIsLoading: setLoadingProps) => {
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await fetch('/api', {mode: 'cors'} );
                const response:Shoe[] = await data.json();
                console.log(response)
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