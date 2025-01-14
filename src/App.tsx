import { Route, Routes } from "react-router-dom"
import { AddPortfolios } from "./pages"

function App() {
  return (
      <Routes>
         <Route path='/addPortfolio' element={<AddPortfolios/>}/>
      </Routes>
  )
}

export default App
