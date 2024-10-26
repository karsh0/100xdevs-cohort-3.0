import { useRef } from "react" 
export  function useDebounce(originalFn){
    const clock = useRef();

    const fn = () =>{
        clearTimeout(clock.current);
        clock.current  = setTimeout(originalFn,200);
    }   

    return fn

}