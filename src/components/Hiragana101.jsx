import React from 'react';
import './Hiragana101.css';

const Hiragana101 = () => {
  return (
    <div className="hiragana-page">
      <h2>Let’s learn Japanese!</h2>
      <div className="lesson-section">
        <h3>Hiragana 101</h3>
        <p>
          <b>Hiragana</b> is one of the basic Japanese writing systems. It is used for native Japanese words, grammatical elements, and for beginners to start reading and writing. Each hiragana character represents a single sound or syllable, making it essential for building a strong foundation in Japanese.
        </p>
        <p>
          For example, <span className="highlight">うし</span> is pronounced <strong>ushi</strong> and means <strong>cow</strong>. Can you figure out what <span className="highlight">すし</span> means?
        </p>

        <div className="kana-cards">
          <KanaCard kana="す" romaji="su" example="super" />
          <KanaCard kana="し" romaji="shi" example="sheet" />
          <KanaCard kana="あ" romaji="a" example="art" />
          <KanaCard kana="い" romaji="i" example="ink" />
          <KanaCard kana="う" romaji="u" example="ooze" />
          <KanaCard kana="え" romaji="e" example="end" />
          <KanaCard kana="お" romaji="o" example="orange" />
          <KanaCard kana="か" romaji="ka" example="car" />
          <KanaCard kana="き" romaji="ki" example="key" />
        </div>
      </div>
      <button className="start-btn">START LESSON</button>
    </div>
  );
};

const KanaCard = ({ kana, romaji, example }) => {
  return (
    <div className="kana-card">
      <div className="kana">{kana}</div>
      <div className="romaji">{romaji}</div>
      <div className="example">like in “{example}”</div>
      <div className="audio-icon" title="Play audio">🔊</div>
    </div>
  );
};

export default Hiragana101;