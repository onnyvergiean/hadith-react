import Hadith from "./GetListHadith";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetDetailHadith from "./GetDetailHadith";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hadith />} />
        <Route path="/:id/" element={<GetDetailHadith />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
