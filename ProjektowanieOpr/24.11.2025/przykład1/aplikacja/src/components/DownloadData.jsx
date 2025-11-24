import { useState, useEffect } from "react"

export default function DownloadData(){
    
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(odpowiedz=>odpowiedz.json())
        .then(odpowiedz=>setData(odpowiedz))
    },[])
    //https://jsonplaceholder.typicode/todos
    return (
        <>
        <div>
            <h1>Pobieranie danych ze zdalnego restAPI</h1>
            <p>https://jsonplaceholder.typicode/todos</p>
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