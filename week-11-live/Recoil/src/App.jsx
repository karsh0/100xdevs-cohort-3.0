
import { createContext } from 'react';
import './App.css'
import { useContext } from 'react';
import { useState } from 'react';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom, evenSelector } from './store/atoms/counter';

function App() {
//creating a increase/decrease functionality
  return (
    <>
      <RecoilRoot>
        <Counter/>
      </RecoilRoot>
    </>
  )
}

//selectors



// const countContext = createContext();

// function CounterContextProvider({children}){
//   const [count, setcount] = useState(0);

//   return (
//     <countContext.Provider value={{count, setcount}}>{children}</countContext.Provider>
//   )
// }

function Increase(){
  const setcount = useSetRecoilState(counterAtom);

const IncreaseFn = () =>{
  setcount(c => c+2);
}

  return <div>
    <button onClick={IncreaseFn}>Increase</button>
  </div>
}
function Decrease(){
  const setcount = useSetRecoilState(counterAtom);

const DecreaseFn = () =>{
  setcount(c => c-1);
}

  return <div>
    <button onClick={DecreaseFn}>Decrease</button>
  </div>
}
const CurrentCounter = () =>{
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>
}

const DisplayValue = () =>{
  const value = useRecoilValue(evenSelector);
  if(value){
    return <p>Even</p>
  }
  else{
    return <p>Odd</p>
  }
}

function Counter(){
  return (
    <div>
    <CurrentCounter/>
    <Increase/>
    <Decrease/>
    <DisplayValue/>
    </div>
  )
}

export default App
