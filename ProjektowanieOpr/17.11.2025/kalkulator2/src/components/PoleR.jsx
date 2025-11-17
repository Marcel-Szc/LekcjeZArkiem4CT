import { useState } from "react";
export default function PoleR() {
  const [liczba1, setLiczba1] = useState(0)
  const [liczba2, setLiczba2] = useState(0)
  const [wynik, setWynik] = useState(0)

  const oblicz = ()=>{
    setWynik(parseInt(liczba1)*parseInt(liczba2));
  }

  return (
    <>
      <h1>Oblicz Pole Rombu</h1>
      <hr />
      długość: <input onChange={(par)=>setLiczba1(par.target.value)} placeholder="podaj długość podstawy rombu"/><br></br>
      wysokość: <input onChange={(par)=>setLiczba2(par.target.value)} placeholder="podaj wysokość rombu"/><br></br>
      wynik: {wynik}
      <hr />
      <button onClick={()=>oblicz()}>Oblicz</button>
    </>
  )
}

