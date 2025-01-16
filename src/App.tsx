import { Route, Routes } from "react-router-dom"
import { AssetOverview } from "./pages"

function App() {

  return (
      <Routes>
         <Route path='/overview' element={<AssetOverview/>}/>
      </Routes>
  )
}

export default App
