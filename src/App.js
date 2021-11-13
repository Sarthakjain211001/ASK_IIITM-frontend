import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Opportunities from './Components/Opportunities';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/opportunities" element={<Opportunities />} />
      </Routes>
    </Router>
  );
}

export default App;
