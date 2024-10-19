import { useState, useEffect } from "react";

export function useFetch(url){
    const [finaldata, setfinaldata] = useState({});

        async function getDetails(){
            const response = await fetch(url);
            const json = await response.json();
            setfinaldata(json);
        }

        useEffect(() =>{
            getDetails();
        },[url])
    
    return { finaldata };
}