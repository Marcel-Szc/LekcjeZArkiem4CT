function Contact(props) {
  return (
    <>
      <div>
        <ul>
            <li>Imię i Nazwisko: {props.name}</li>
            <li>Email: {props.email}</li>
        </ul>
      </div>
    </>
  )
}
export default Contact
