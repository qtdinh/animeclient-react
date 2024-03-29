import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Characters from './pages/Character';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { AuthServiceProvider } from './services/AuthService';

function App() {
  return (
    <AuthServiceProvider>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/series" element={<Series />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </Router>
    </AuthServiceProvider>
  )
}

export default App
