import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Materia from './components/Materia';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materiaPrincipal" element={<Materia />} />
      </Routes>
    </Router>
  );
}

export default App;
