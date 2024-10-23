
import './App.css';
import { useCounter } from './useCounter';
import { useFetch } from './useFetch';

function App() {
const {finaldata} = useFetch("https://jsonplaceholder.typicode.com/todos/1")

const {count,increaseCount} = useCounter();

  return (
    <>
      <p>App is on</p>
      <p>{JSON.stringify(finaldata)}</p>

      <button onClick={increaseCount}>Increase {count}</button>
    </>
  )
}

export default App
