import { useEffect, useState } from "react";

export default function useDebounce(Backend){
    const prevFn = useRef();

    const [searchBackend, getsearchBackend] = useState(0);

    useEffect(()=>{
        clearTimeout(searchBackend);
        const search = setTimeout(Backend)
    },[])

}