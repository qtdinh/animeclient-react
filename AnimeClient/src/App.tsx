import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Characters from './pages/Character';
import Navbar from './components/Navbar';
// import Login from './Login';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </Router>
  )
}

export default App
