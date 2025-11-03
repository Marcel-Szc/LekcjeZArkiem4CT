import Contact from './Contact'
function Header(){
    return (
        <>
            <div style={{background:"orange",width:"100%", height:"150px"}}>
                <h1>Header</h1>
                <Contact email="mail@poczta.pl" tel="123 456 789" adres="Stara Wiocha jajcarska 7"/>
            </div>
        </>
    )
}

export default Header;