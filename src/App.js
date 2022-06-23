import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HadithDetail from './Components/HadithDetail';
import HadithList from './Components/HadithList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HadithList />} />
        <Route path="/:id" element={<HadithDetail />} />
        <Route path="*" element={<HadithList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
