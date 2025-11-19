import Dodawanie from "./components/Dodawanie"
import Odejmowanie from "./components/Odejmowanie"
import Mnozenie from "./components/Mnozenie"
import Dzielenie from "./components/Dzielenie"
import Zerowy from "./components/Zerowy"
import { useEffect,useState } from "react"

function App() {
  const [sterowanie,setSterowanie] = useState(0);
  const [operacje,setOperacje] = useState(<Dodawanie/>);

  useEffect(()=>{
    if(sterowanie===0)  setOperacje(<Zerowy/>)
    if(sterowanie==="1")  setOperacje(<Dodawanie/>)
    if(sterowanie==="2")  setOperacje(<Odejmowanie/>)
    if(sterowanie==="3")  setOperacje(<Mnozenie/>)
    if(sterowanie==="4")  setOperacje(<Dzielenie/>)
  },[sterowanie]);

  return (
    <>
      <div>
        <select onChange={(e)=>setSterowanie(e.target.value)}>
          <option value="1">Dodawanie</option>
          <option value="2">Odejmowanie</option>
          <option value="3">Mnozenie</option>
          <option value="4">Dzielenie</option>
        </select>
        <hr />
        {operacje}
      </div>
    </>
  )
}

export default App
