import { Navigate, Route, Routes } from "react-router-dom";
import {
  Portfolio,
  AddPortfolios,
  Assets,
  AddAsset,
  AssetDetails,
} from "./pages";
import { AssetDashboard, AssetList, AssetOverview } from "./components";
import { NotFound } from "./components/NotFound";
import { NewsUpdates } from "./components/news";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/addportfolio/*" element={<AddPortfolios />} />
      <Route path="/assets" element={<Assets />}>
        <Route index element={<Navigate to="list" replace />} />
        <Route path="list" element={<AssetList />} />
        <Route path="view" element={<AssetOverview />} />
        <Route path="dashboard" element={<AssetDashboard />} />
      </Route>
      <Route path="/addAsset" element={<AddAsset />} />
      <Route path="/overview" element={<AssetDetails />}>
        <Route path ='News' element={<NewsUpdates/>}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
