import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Opportunities from './Components/Opportunities';
import Profile from './Components/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/opportunities" element={<Opportunities />} />
        <Route exact path="/myprofile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;

