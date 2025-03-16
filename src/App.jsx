import Crud from "./homeworks/crud"
import Json from "./homeworks/json"
import Menubar from "./homeworks/menubar"

function App() {
  return (
    <div>
      <Menubar/>
      <Crud/>
      <Json/>
    </div>
  )
}

export default App