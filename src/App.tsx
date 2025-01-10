import { Route, Routes } from "react-router-dom"
import { AddPortfolis } from "./pages"

function App() {
  return (
      <Routes>
         <Route path='/' element={<AddPortfolis/>}/>
      </Routes>
  )
}

export default App
