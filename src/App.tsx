import { Route, Routes } from "react-router-dom"
import { AddPortfolios, Portfolio } from "./pages"

function App() {
  return (
      <Routes>
         <Route path='/' element={<Portfolio/>}/>
         <Route path='/addPortfolio' element={<AddPortfolios/>}/>
      </Routes>
  )
}

export default App
