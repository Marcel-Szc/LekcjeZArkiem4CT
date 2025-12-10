import { useState,useEffect } from "react";
import './App.css'
import photo1 from './assets/obraz1.jpg'
import photo2 from './assets/obraz2.jpg' 
import photo3 from './assets/obraz3.jpg'  
import photo4 from './assets/obraz4.jpg' 
import photo5 from './assets/obraz5.jpg' 
import photo6 from './assets/obraz6.jpg' 
import photo7 from './assets/obraz7.jpg' 
import photo8 from './assets/obraz8.jpg' 
import photo9 from './assets/obraz9.jpg' 
import photo10 from './assets/obraz10.jpg' 
import photo11 from './assets/obraz11.jpg' 
import photo12 from './assets/obraz12.jpg' 
import { use } from "react";

export default function Galeria(){
    const [cat1,setCat1] = useState(true);
    const [cat2,setCat2] = useState(true);
    const [cat3,setCat3] = useState(true);
    const [OnOff,SetOnOff] = useState("categoryOn");
    const tablica = [
        {id: 0, alt: "Mak", filename: photo1, category:1, downloads: 35},
        {id: 1, alt:"Bukiet", filename: photo2, category: 1, downloads: 43},
        {id: 2, alt:"Dalmatyńczyk", filename: photo3, category:2, downloads: 2},
        {id: 3, alt:"Świnka morska", filename: photo4, category:2, downloads: 53},
        {id: 4, alt:"Rotwailer", filename: photo5, category:2, downloads: 43},
        {id: 5, alt:"Audi", filename: photo6, category:3, downloads: 11},
        {id: 6, alt:"kotki", filename: photo7, category:2, downloads: 22},
        {id: 7, alt:"Róża", filename: photo8, category:1, downloads: 33},
        {id: 8, alt:"Świnka morska", filename: photo9, category:2, downloads: 123},
        {id: 9, alt:"Foksterier", filename: photo10, category:2, downloads: 22},
        {id: 10, alt:"Szczeniak", filename: photo11, category:2, downloads: 12},
        {id: 11, alt:"Garbus", filename: photo12, category:3, downloads: 321}
    ]
    
    return(
        <>
            <h1>Kategorie zdjęć</h1>
            <div className="check">
                <div className="toggle-item">
                    <label className="switch">
                        <input type="checkbox" defaultChecked onChange={(e)=>{
                            if(e.target.checked==true){
                                setCat1(false)
                                SetOnOff("categoryOn")
                                console.log("On");
                            }else{
                                setCat1(true)
                                SetOnOff("categoryOff")
                                console.log("off");
                            }
                        }}/>
                        <span className="slider"></span>
                    </label>
                    <span className="toggle-label">Kwiaty</span>
                </div>

                <div className="toggle-item">
                    <label className="switch">
                        <input type="checkbox" defaultChecked onChange={(e)=>{
                            if(e.target.checked==true){
                                setCat2(false)
                                SetOnOff("categoryOn")
                            }else{
                                setCat2(true)
                                SetOnOff("categoryOff")
                            }
                        }}/>
                        <span className="slider"></span>
                    </label>
                    <span className="toggle-label">Zwierzęta</span>
                </div>

                <div className="toggle-item">
                    <label className="switch">
                        <input type="checkbox" defaultChecked onChange={(e)=>{
                            if(e.target.checked==true){
                                setCat3(false)
                                SetOnOff("categoryOn")
                            }else{
                                setCat3(true)
                                SetOnOff("categoryOff")
                            }
                        }}/>
                        <span className="slider"></span>
                    </label>
                    <span className="toggle-label">Samochody</span>
                </div>
            </div>
            {
                tablica.map(element => {
                    const [download,SetDownload] = useState(element.downloads);
                    const [OnOff2,SetOnOff2] = usestate(OnOff);
                    useEffect(()=>{
                        if(element.)
                    })
                    return(
                        <>
                            <div key={element.id} className={OnOff2}>
                                <img src={element.filename} alt={element.alt} />
                                <div>Pobrań: {download}</div>
                                <button onClick={()=>SetDownload(download+1)}>
                                    Pobierz</button>
                            </div>
                        </>
                    )
                })
            }
        </>
    );
}