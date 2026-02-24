import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AllLinksPage from "./pages/AllLinksPage";
import CollectionsPage from "./pages/CollectionsPage";
import SearchPage from "./pages/SearchPage";

export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}><Routes>
        <Route path="/" element={<AllLinksPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/settings" element={<AllLinksPage />} />
      </Routes></main>
    </div>
  </BrowserRouter>);
}
