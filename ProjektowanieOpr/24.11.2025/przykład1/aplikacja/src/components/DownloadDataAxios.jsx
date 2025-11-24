import { useState, useEffect } from "react"
import axios from "axios"

export default function DownloadDataAxios({par}){
    
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos", {
            params:{
                id: par
            }
        })
        .then(odpowiedz=>setData(odpowiedz.data))
        
    },[])
    return (
        <>
        <div>
            <h1>Pobieranie danych ze zdalnego restAPI</h1>
            <hr />
            <ul>
            {
                data.map((el)=>(
                    <li key={el.id}>
                        <b>Tytuł:</b> <i>{el.title}</i><b>{el.completed===true ? "zakończono" : "w opracowaniu"}</b>
                    </li>
                ))
            }
            </ul>
        </div>
        </>
    )
}