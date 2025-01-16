import { Navigate, Route, Routes } from "react-router-dom"
import { Assets } from "./pages"
import { AssetDashboard, AssetList, AssetOverview } from "./components"

function App() {

  return (
    <Routes>
      <Route path="/assets/*" element={<Assets />}>
        <Route index element={<Navigate to="list" replace />} />
        <Route path="list" element={<AssetList />} />
        <Route path="view" element={<AssetOverview />} />
        <Route path="dashboard" element={<AssetDashboard />} />
      </Route>
    </Routes>
  )
}

export default App
