import { Route, Routes } from "react-router-dom"
import { Portfolio } from "./pages"
import { AddPortfolios } from "./pages"

function App() {

  return (
      <Routes>
         <Route path='/' element={<Portfolio/>}/>
         <Route path='/addportfolio' element={<AddPortfolios/>}/>
      </Routes>
  )
}

export default App
