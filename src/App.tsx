import { Route, Routes } from "react-router-dom"
import { Portfolio } from "./pages/Portfolios"

function App() {

  return (
      <Routes>
         <Route path='/' element={<Portfolio/>}/>
      </Routes>
  )
}

export default App
