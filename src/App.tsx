import { Route, Routes } from "react-router-dom"
import { AddAsset, Portfolio } from "./pages"

function App() {

  return (
      <Routes>
         <Route path='/' element={<Portfolio/>}/>
         <Route path='/addAsset' element={<AddAsset/>}/>
      </Routes>
  )
}

export default App
