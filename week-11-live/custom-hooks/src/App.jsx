
import './App.css';
import { useFetch } from './useFetch';

function App() {
const {finaldata} = useFetch("https://jsonplaceholder.typicode.com/todos/1")
  return (
    <>
      <p>App is on</p>
      <p>{JSON.stringify(finaldata)}</p>
    </>
  )
}

export default App
