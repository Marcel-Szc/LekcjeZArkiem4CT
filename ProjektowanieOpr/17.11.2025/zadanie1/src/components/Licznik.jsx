import { useState } from "react";

function Licznik(){

    const[licznik,setLicznik] = useState(6.7);
    return (
        <>
            <h2>
                Licznik: {licznik}
            </h2>
            <hr />
            <div>
                <button onClick={()=>setLicznik(wartosc=>wartosc+1)}>
                    LICZNIK++
                </button>
                <button onClick={()=>setLicznik(6.7)}>
                    RESET
                </button>
            </div>

        </>
    )
}

export default Licznik