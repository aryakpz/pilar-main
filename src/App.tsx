import { Route, Routes } from "react-router-dom"
import { AssetOverview } from "./pages"
import { NotFound, OfficeHomePage } from "./components"

function App() {

  return (
    <Routes>
      <Route path='/*' element={<AssetOverview />}>
        <Route path='notfound' element={<NotFound />} />
        <Route path='Office' element={<OfficeHomePage />} />
      </Route>
    </Routes>
  )
}

export default App;


