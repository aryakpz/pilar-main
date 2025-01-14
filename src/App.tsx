import { Route, Routes } from "react-router-dom"
import { Assets, Portfolio } from "./pages"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Portfolio />} />
      <Route path='/assets/*' element={<Assets />}>
      </Route>
    </Routes>
  )
}

export default App
