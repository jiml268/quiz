import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home'
import TopScores from '../pages/TopScores/TopScores';

import Quiz from '../pages/Quiz/Quiz';
import FinalScore from '../pages/FinalScore/FinalScore';
import Review from '../pages/Review/Review';
function App() {

  return (
   
    <div className="App">
     
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Quiz />} />
        <Route path="/end" element={<FinalScore />} />
        <Route path="/review" element={<Review />} />
        <Route path="/topscores" element={<TopScores />} />

        <Route path="*" element={<p>Path not resolved</p>} />
       </Routes>
      </div>
      
  );
}

export default App;
