import { useState } from "react";
function Dodawanie() {
  const [liczba1, setLiczba1] = useState(0)
  const [liczba2, setLiczba2] = useState(0)
  const [wynik, setWynik] = useState(0)

  const oblicz = ()=>{
    setWynik(parseInt(liczba1)+parseInt(liczba2));
  }

  return (
    <>
      <h1>Dodawanie</h1>
      <hr />
      liczba1: <input onChange={(par)=>setLiczba1(par.target.value)} placeholder="podaj liczbe 1"/><br></br>
      liczba2: <input onChange={(par)=>setLiczba2(par.target.value)} placeholder="podaj liczbe 2"/><br></br>
      wynik: {wynik}
      <hr />
      <button onClick={()=>oblicz()}>Oblicz</button>
    </>
  )
}

export default Dodawanie
