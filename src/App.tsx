import { Route, Routes } from "react-router-dom"
import { Portfolio } from "./pages"
import { AddPortfolis } from "./pages"

function App() {

  return (
      <Routes>
         <Route path='/' element={<Portfolio/>}/>
         <Route path='/addportfolio' element={<AddPortfolis/>}/>
      </Routes>
  )
}

export default App
