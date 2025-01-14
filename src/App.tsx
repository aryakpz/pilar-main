import { Route, Routes } from "react-router-dom"
import { AddAsset, Portfolio } from "./pages"

function App() {

  return (
      <Routes>
         <Route path='/' element={<Portfolio/>}/>
          
         <Route>
         <Route path='/addAsset' element={<AddAsset/>}/>
         </Route>

      </Routes>
  )
}

export default App
