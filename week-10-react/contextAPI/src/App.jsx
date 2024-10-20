
import { createContext, useContext, useState } from 'react'

//increase decrease count:1
const CounterContext = createContext();

function ContextProvider({children}){
  const [count , setCount] = useState(0);

  return <CounterContext.Provider value={{count,setCount}}>
    {children}
  </CounterContext.Provider>
}

function App() {
  const [count , setCount] = useState(0);


  return (
    // <CounterContext.Provider value={{count,setCount}}>
    // <Increase/>
    // <Decrease/>  
    // <Counter/>
    // </CounterContext.Provider>

    <ContextProvider>
         <Increase/>
    <Decrease/>  
    <Counter/>
    </ContextProvider>
    
  )
}


function Increase(){
  const {setCount} = useContext(CounterContext);
  return <button onClick={()=> setCount(count => count+1)}>Increase</button>
}

function Decrease(){
  const {setCount} = useContext(CounterContext);
  return <button onClick={()=> setCount(count => count-1)}>Decrease</button>

}

function Counter(){
  const {count} = useContext(CounterContext);
  return <p>Count is: {count}</p>
}

export default App
