import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Opportunities from './Components/Opportunities';
import Profile from './Components/Profile';
import Qna from './Components/Qna';
import Question_page from './Components/Question_page';
import GiveAnswer from './Components/GiveAnswer';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Qna/>}/>
      <Route exact path="/question" element={ <Question_page/>} />
        <Route exact path="/opportunities" element={<Opportunities />} />
        <Route exact path="/myprofile" element={<Profile/>}/>
        <Route exact path="/giveanswer" element={ <GiveAnswer/>} />
        
      </Routes>
    </Router>
  );
}

export default App;

