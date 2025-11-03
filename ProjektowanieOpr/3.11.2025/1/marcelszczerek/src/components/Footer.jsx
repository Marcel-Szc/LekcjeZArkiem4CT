import Contact from './Contact'
function Footer(){
    return (
        <>
            <footer style={{width:"100%",height:"150px",background:"red"}}>
                <h4>To jest stopa</h4>
                <Contact email="mail@mail.com" tel="674 206 941" adres="Cwele Lipkowa 4"/>
            </footer>
        </>
    )
}

export default Footer;