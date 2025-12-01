import { useContext } from 'react';
import { NazwaMotywu } from '../App';

export default function Informacja() {
  const { stronamocy } = useContext(NazwaMotywu);
    return (
        <>
        <div>Aktualny motyw to: {stronamocy==="ciemny" ? "Przemyśl swoje życie" : "Jesteś na dobrej ścieżce"} </div>
        </>
    );
}