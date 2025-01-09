import { Route, Routes } from "react-router-dom"
import { Portfolio } from "./pages"

function App() {

  return (
      <Routes>
         <Route path='/' element={<Portfolio/>}/>
      </Routes>
  )
}

export default App
