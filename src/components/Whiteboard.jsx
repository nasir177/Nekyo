import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Whiteboard.css';

const Whiteboard = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const navigate = useNavigate();

  // Prevent touch scroll while drawing
  useEffect(() => {
    const preventScroll = (e) => {
      if (drawing) e.preventDefault();
    };
    document.addEventListener('touchmove', preventScroll, { passive: false });
    return () => {
      document.removeEventListener('touchmove', preventScroll);
    };
  }, [drawing]);

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    if (e.touches) {
      const touch = e.touches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      };
    } else {
      return {
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY
      };
    }
  };

  const startDrawing = (e) => {
    const { x, y } = getCoordinates(e);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;
    const { x, y } = getCoordinates(e);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#fffbe7';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  const stopDrawing = () => setDrawing(false);

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'whiteboard.png';
    link.href = url;
    link.click();
  };

  return (
    <div className="whiteboard-container">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/hiragana")}
        className="whiteboard-back-btn"
      >
        <span style={{ display: "inline-block", marginRight: 6 }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M18 24L10 14L18 4" stroke="#FF7F3F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        Back
      </button>

      <h2 className="whiteboard-title">Practice Board</h2>
      <canvas
        ref={canvasRef}
        width={500}
        height={400}
        className="chalkboard-canvas"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />
      <div className="chalkboard-buttons">
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleSave}>Save as Image</button>
      </div>
    </div>
  );
};

export default Whiteboard;
