import { Navigate, Route, Routes } from "react-router-dom"
import { Portfolio ,AddPortfolios, Assets} from "./pages"
import { AssetDashboard, AssetList, AssetOverview } from "./components"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Portfolio/>}/>
      <Route path="/addportfolio/*" element={<AddPortfolios />}/>
      <Route path='/assets' element={<Assets/>}>
        <Route index element={<Navigate to="list" replace />} />
        <Route path="list" element={<AssetList />} />
        <Route path="view" element={<AssetOverview />} />
        <Route path="dashboard" element={<AssetDashboard />} />
      </Route>
      {/* </Route> */}
    </Routes>
  )
}

export default App
