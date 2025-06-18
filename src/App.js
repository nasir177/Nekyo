import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import HiraganaCharactersPage from './components/HiraganaCharactersPage'; // double check spelling & filename
import LearnPage from './components/learn'; // rename this file to LearnPage.jsx for consistency
import Quiz from './components/Quiz';
import Whiteboard from './components/Whiteboard';
import Videos from './components/Videos';
import Hiragana101 from './components/Hiragana101';
import Conversation from './components/Conversation';

function App() {
  return (
    <Router>
      <div className="app-layout" style={{ display: 'flex' }}>
        <div className="main-content" style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/hiragana" element={<HiraganaCharactersPage />} />
            <Route path="/learn" element={<LearnPage />} />
             <Route path="/whiteboard" element={<Whiteboard />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/hiragana101" element={<Hiragana101 />} />
            <Route path="/chapter/:chapterId" element={<Quiz />} />
            <Route path="/conversation" element={<Conversation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
