import { Route, Routes } from "react-router-dom"
import { AddPortfolios, Assets, Portfolio } from "./pages"

function App() {

  return (
      <Routes>
         <Route path='/' element={<Portfolio/>}/>
         <Route path='/addportfolio' element={<AddPortfolios/>}/>
         <Route path='/assets' element={<Assets/>}/>
      </Routes>
  )
}

export default App;
