function Contact(props){
    return(
        <>
            <div>
                <ul>
                    <li>Email: {props.email}</li>
                    <li>Telefon: {props.tel}</li>
                    <li>Adres: {props.adres}</li>
                </ul>
            </div>
        </>
    )
}
export default Contact;