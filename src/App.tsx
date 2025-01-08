import { Route, Routes } from "react-router-dom"
import { AdminPage } from "./pages/Portfolios"

function App() {

  return (
      <Routes>
         <Route path='/' element={<AdminPage/>}/>
      </Routes>
  )
}

export default App
