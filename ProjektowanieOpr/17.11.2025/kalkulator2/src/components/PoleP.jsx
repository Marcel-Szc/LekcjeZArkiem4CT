import { useState } from "react";
export default function PoleP() {
  const [liczba1, setLiczba1] = useState(0)
  const [liczba2, setLiczba2] = useState(0)
  const [wynik, setWynik] = useState(0)

  const oblicz = ()=>{
    setWynik(parseInt(liczba1)*parseInt(liczba2));
  }

  return (
    <>
      <h1>Oblicz Pole Prostokąta</h1>
      <hr />
      długość a: <input onChange={(par)=>setLiczba1(par.target.value)} placeholder="podaj długość boku a"/><br></br>
      długosć b: <input onChange={(par)=>setLiczba2(par.target.value)} placeholder="podaj wysokość boku b"/><br></br>
      wynik: {wynik}
      <hr />
      <button onClick={()=>oblicz()}>Oblicz</button>
    </>
  )
}

