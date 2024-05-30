import { BookApi } from "./apis"
import Logo from "./assets/Nook.svg"
import BookImg from "./assets/Books.svg"

function App() {
  return (
  <div>
    <div className="p-5, text-center">
      <img src={Logo} className="p-3"></img>
    </div>
    <div>
      <img src={BookImg} id="books"></img>
      <h4 id="h4">All your books in one place</h4>
    </div>
  </div>
  )
}


export default App
