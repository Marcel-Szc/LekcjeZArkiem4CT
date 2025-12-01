import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Footer(){
    const { motyw } = useContext(ThemeContext);
    return(
        <div className={`footer ${motyw}`}>
            <h1>Moja aplikacja (zyjacy motyw: {motyw})</h1>
        </div>
    )
}