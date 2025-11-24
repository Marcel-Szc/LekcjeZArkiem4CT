import Aplikacja  from "./components/Aplikacja" 
import DownloadDataAxios from "./components/DownloadDataAxios"
function App() {
  return (
    <>
      <Aplikacja/>
      <hr />
      <DownloadDataAxios par="100"/>
    </>
  )
}

export default App