import Hadith from "./Hadith";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HadithDetail from "./HadithDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hadith />} />
        <Route path="/hadith/:id/:number" element={<HadithDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
