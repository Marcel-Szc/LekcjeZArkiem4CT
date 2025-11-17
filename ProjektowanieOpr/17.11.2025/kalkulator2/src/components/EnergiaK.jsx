import { useState } from "react";
export default function EnergiaK() {
  const [liczba1, setLiczba1] = useState(0)
  const [liczba2, setLiczba2] = useState(0)
  const [wynik, setWynik] = useState(0)

  const oblicz = ()=>{
    setWynik((parseFloat(liczba1)*(parseFloat(liczba2)*parseFloat(liczba2)))/2);
  }

  return (
    <>
      <h1>Oblicz Energię kinetyczną</h1>
      <hr />
      Masa: <input onChange={(par)=>setLiczba1(par.target.value)} placeholder="podaj masę obiektu"/><br></br>
      Prędkość: <input onChange={(par)=>setLiczba2(par.target.value)} placeholder="podaj prędkość obiektu"/><br></br>
      wynik: {wynik}
      <hr />
      <button onClick={()=>oblicz()}>Oblicz</button>
    </>
  )
}

