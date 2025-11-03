function Foto(props) {
  return (
    <>
      <div style={{margin: "auto"}}>
        <img src={props.foto1} style={{height:"300px", width:"400px"}} alt="tatry" />
      </div>
      <div style={{margin: "auto"}}>
        <img src={props.foto2} style={{height:"300px", width:"400px"}} alt="tatry" />
      </div>
      <div style={{margin: "auto"}}>
        <img src={props.foto3} style={{height:"300px", width:"400px"}} alt="tatry" />
      </div>
    </>
  )
}
export default Foto