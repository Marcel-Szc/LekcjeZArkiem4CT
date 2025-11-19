import { useEffect,useState } from 'react'
import Osoba1 from "./components/Osoba1"
import Osoba2 from "./components/Osoba2"
import Wybierz from "./components/Wybierz"

export default function App() {
  const [sterowanie,setSterowanie] = useState(0);
  const [operacje,setOperacje] = useState(<Wybierz/>);

  useEffect(()=>{
    if(sterowanie===0)  setOperacje(<Wybierz/>)
    if(sterowanie==="1")  setOperacje(<Osoba1/>)
    if(sterowanie==="2")  setOperacje(<Osoba2/>)
  },[sterowanie]);
  return (
    <>
      <select onChange={(e)=>setSterowanie(e.target.value)}>
        <option value="1">Goerge Droyd</option>
        <option value="2">Charlie Kirk</option>
      </select>
      <hr />
      {operacje}
    </>
  )
}