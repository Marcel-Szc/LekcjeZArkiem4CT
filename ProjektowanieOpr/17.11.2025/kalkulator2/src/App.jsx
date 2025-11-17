import PoleK from "./components/PoleK"
import PoleP from "./components/PoleP"
import PoleR from "./components/PoleR"
import PoleT from "./components/PoleT"
import EnergiaP from "./components/EnergiaP"
import EnergiaK from "./components/EnergiaK"
import Wybierz from "./components/Wybierz"
import { useEffect,useState } from "react"

function App() {
  const [sterowanie,setSterowanie] = useState(0);
  const [operacje,setOperacje] = useState(<Wybierz/>);

  useEffect(()=>{
    if(sterowanie===0)  setOperacje(<Wybierz/>)
    if(sterowanie==="1")  setOperacje(<PoleK/>)
    if(sterowanie==="2")  setOperacje(<PoleP/>)
    if(sterowanie==="3")  setOperacje(<PoleR/>)
    if(sterowanie==="4")  setOperacje(<PoleT/>)
    if(sterowanie==="5")  setOperacje(<EnergiaP/>)
      if(sterowanie==="6")  setOperacje(<EnergiaK/>)
  },[sterowanie]);

  return (
    <>
      <div>
        <select onChange={(e)=>setSterowanie(e.target.value)}>
          <option value="1">Pole Koła</option>
          <option value="2">Pole Prostokąta</option>
          <option value="3">Pole Rombu</option>
          <option value="4">Pole Trójkąta</option>
          <option value="5">Energia Potencjalna</option>
          <option value="6">Energia Kinetyczna</option>

        </select>
        <hr />
        {operacje}
      </div>
    </>
  )
}

export default App

