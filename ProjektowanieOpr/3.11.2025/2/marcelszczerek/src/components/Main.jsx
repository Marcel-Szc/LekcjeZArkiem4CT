import Foto from './Foto'
function Main() {
  return (
    <>
    <div style={{height:"600px", width: "100%", background:"darkgrey", display: "flex"}}>
        <Foto 
            foto1='https://epochanacestach.cz/wp-content/uploads/2023/03/18916-marek-zelenak-vysoke-tatry-z-velkej-lomnice-full-1024x683.jpg'
            foto2='https://tse2.mm.bing.net/th/id/OIP.4p51IBQXBm36pKgATP6oeAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3'
            foto3='https://i.pinimg.com/originals/f3/30/03/f33003e02c4f3d86e655d8876a3f88b3.jpg'
        />
    </div>
    </>
  )
}
export default Main