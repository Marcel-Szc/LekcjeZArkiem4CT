import { useState, useEffect } from "react"

export default function Aplikacja(){
    
    const [inputValues, setinputValue] = useState("")//pobieram z from input do inputValue
    const [todoList, setTodoList] = useState([]) // po kliknięciu przycisku dodaje do tablicy wartość value z formularza(input)

    return (
        <>
            <div>
                <input onChange={(e)=>setinputValue(e.target.value)} />
                <button onClick={()=>setTodoList([...todoList,inputValues])}>DODAJ</button>
            </div>
            <ul>
            {
                todoList.map((el,index)=>(
                    <li key={index}>
                        {el}
                    </li>
                ))
            }
            </ul>

        </>
    )
}