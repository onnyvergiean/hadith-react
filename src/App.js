import Hadith from "./GetListHadith";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GetDetailHadith from "./GetDetailHadith";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hadith />} />
        <Route path="/hadith/:id/:number" element={<GetDetailHadith />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
