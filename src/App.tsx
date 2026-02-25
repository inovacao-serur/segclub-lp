import './App.css'
import { Routes, Route } from 'react-router-dom';
import SegClub from './pages/SegClub';


function App() {
  return (
    <Routes>
      <Route path="/" element={<SegClub />} />
    </Routes>
  );
}

export default App
