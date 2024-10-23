import { useState } from "react"

export function useCounter(){
    const [count, setCount] = useState(0);
    
    function increaseCount(){
        setCount(count => count+1);
    }
    
    function decreaseCount(){
        setCount(count => count-1);
    }

    return{
        count:count,
        increaseCount:increaseCount,
        decreaseCount:decreaseCount
    }

}