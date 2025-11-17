import { useState } from "react";
export default function PoleK() {
  const [liczba1, setLiczba1] = useState(0)
  const liczbaPi = Math.PI;
  const [wynik, setWynik] = useState(0)

  const oblicz = ()=>{
    setWynik(parseFloat(liczbaPi)*(parseFloat(liczba1)*parseFloat(liczba1)));
  }

  return (
    <>
      <h1>Oblicz Pole Koła:</h1>
      <hr />
      Promien: <input onChange={(par)=>setLiczba1(par.target.value)} placeholder="promien"/><br></br>
      wynik: {wynik}
      <hr />
      <button onClick={()=>oblicz()}>Oblicz</button>
    </>
  )
}

