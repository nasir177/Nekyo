import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <video
        className="bg-image"
        src="/welcome.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-content">
        <h1 className="hero-title">
          Nekyo
          <span style={{ display: 'block', fontSize: '0.5em', marginTop: '0.2em', letterSpacing: '0.1em' }}>
            ねきょう
          </span>
        </h1>
        <p className="hero-subtitle">Learn Japanese with us</p>
        <div className="buttons">
          <button className="primary-btn" onClick={() => navigate('/hiragana')}>
            Get started
          </button>
          <button className="secondary-btn">I already had an account</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
// This component serves as the hero section of the application, featuring a background video, title, subtitle, and buttons for navigation.
// The `useNavigate` hook from `react-router-dom` is used to programmatically navigate to the Hiragana characters page when the "Get started" button is clicked.    
