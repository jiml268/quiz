import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home'
import TopScores from '../pages/TopScores/TopScores';

import Quiz from '../pages/Quiz/Quiz';
import FinalScore from '../pages/FinalScore/FinalScore';
import Review from '../pages/Review/Review';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../pages/NavBar/Navbar';

function App() {

  return (
   
    <div className="App">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      < Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Quiz />} />
        <Route path="/end" element={<FinalScore />} />
        <Route path="/review" element={<Review />} />
        <Route path="/topscores" element={<TopScores />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />



        <Route path="*" element={<p>Path not resolved</p>} />
       </Routes>
      </div>
      
  );
}

export default App;
