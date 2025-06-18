import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Conversation.css";

export default function Conversation() {
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [status, setStatus] = useState("ask");
    const [showSkip, setShowSkip] = useState(false);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/conversationData.json")
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data);
                setMessages([
                    {
                        type: "bot",
                        text: data[0].question,
                        animate: true
                    }
                ]);
            });
    }, []);

    useEffect(() => {
        if (status === "ask" && inputRef.current) inputRef.current.focus();
    }, [status, current]);

    const handleSend = () => {
        if (!userInput.trim()) return;
        const answer = questions[current].answer.trim();
        setMessages((msgs) => [
            ...msgs,
            { type: "user", text: userInput }
        ]);
        if (userInput.trim() === answer) {
            setStatus("correct");
            setMessages((msgs) => [
                ...msgs,
                { type: "bot", text: "Yay! 🎉 That's correct!", animate: false }
            ]);
            setTimeout(() => {
                goNext();
            }, 1200);
        } else {
            setStatus("wrong");
            setMessages((msgs) => [
                ...msgs,
                { type: "bot", text: "Oops! Try again or skip?", animate: false }
            ]);
            setShowSkip(true);
        }
        setUserInput("");
    };

    const goNext = () => {
        setShowSkip(false);
        if (current + 1 < questions.length) {
            setCurrent(current + 1);
            setMessages((msgs) => [
                ...msgs,
                {
                    type: "bot",
                    text: questions[current + 1].question,
                    animate: true
                }
            ]);
            setStatus("ask");
        } else {
            setMessages((msgs) => [
                ...msgs,
                { type: "bot", text: "All done! Great job! 🌸", animate: false }
            ]);
            setStatus("done");
        }
    };

    const handleVoice = () => {
        if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
            alert("Voice recognition not supported.");
            return;
        }
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = "ja-JP";
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setUserInput(transcript);
        };
        recognition.start();
    };

    const goBack = () => {
        navigate("/learn");
    };

    return (
        <div className="conversation-cute-bg" style={{ padding: "40px 0 0 0", minHeight: "100vh", background: "#fff", position: "relative" }}>

 {/* Sakura petals */}
 <svg className="sakura-petal" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="petalGradient" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stopColor="#fff6fa" />
      <stop offset="80%" stopColor="#ffb7c5" />
      <stop offset="100%" stopColor="#ff6f91" />
    </radialGradient>
  </defs>
  <ellipse cx="16" cy="20" rx="10" ry="16" fill="url(#petalGradient)" transform="rotate(-20 16 20)" />
</svg>
<svg className="sakura-petal" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="petalGradient2" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stopColor="#fff6fa" />
      <stop offset="80%" stopColor="#ffb7c5" />
      <stop offset="100%" stopColor="#ff6f91" />
    </radialGradient>
  </defs>
  <ellipse cx="16" cy="20" rx="10" ry="16" fill="url(#petalGradient2)" transform="rotate(10 16 20)" />
</svg>
<svg className="sakura-petal" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="petalGradient3" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stopColor="#fff6fa" />
      <stop offset="80%" stopColor="#ffb7c5" />
      <stop offset="100%" stopColor="#ff6f91" />
    </radialGradient>
  </defs>
  <ellipse cx="16" cy="20" rx="10" ry="16" fill="url(#petalGradient3)" transform="rotate(-30 16 20)" />
</svg>
<svg className="sakura-petal" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="petalGradient4" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stopColor="#fff6fa" />
      <stop offset="80%" stopColor="#ffb7c5" />
      <stop offset="100%" stopColor="#ff6f91" />
    </radialGradient>
  </defs>
  <ellipse cx="16" cy="20" rx="10" ry="16" fill="url(#petalGradient4)" transform="rotate(25 16 20)" />
</svg>
<svg className="sakura-petal" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="petalGradient5" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stopColor="#fff6fa" />
      <stop offset="80%" stopColor="#ffb7c5" />
      <stop offset="100%" stopColor="#ff6f91" />
    </radialGradient>
  </defs>
  <ellipse cx="16" cy="20" rx="10" ry="16" fill="url(#petalGradient5)" transform="rotate(-10 16 20)" />
</svg>

            {/* Back button in upper right */}
            <button
                onClick={goBack}
                style={{
                    position: "absolute",
                    top: 24,
                    right: 40,
                    background: "none",
                    border: "none",
                    color: "#FF7F3F",
                    fontWeight: 600,
                    fontSize: 18,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    zIndex: 10
                }}
            >
                <span style={{ display: "inline-block", marginRight: 6 }}>
                    {/* Left arrow SVG */}
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M18 24L10 14L18 4" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                Back
            </button>
            <div className="conversation-cute-container">
                <div className="conversation-chat-window">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`conversation-msg ${msg.type} ${
                                msg.animate ? "pop-in" : ""
                            }`}
                        >
                            {msg.type === "bot" && <span className="bot-icon">🐱</span>}
                            {msg.type === "user" && <span className="user-icon">🧑</span>}
                            <span>{msg.text}</span>
                        </div>
                    ))}
                </div>
                {status !== "done" && (
                    <div className="conversation-input-row">
                        <input
                            ref={inputRef}
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type your answer…"
                            onKeyDown={e => e.key === "Enter" && handleSend()}
                            disabled={status === "correct"}
                            className="conversation-input"
                        />
                        <button className="voice-btn" onClick={handleVoice} title="Voice input" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {/* Microphone SVG */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect x="9" y="2" width="6" height="12" rx="3" fill="#000"/>
                                <path d="M5 10v2a7 7 0 0 0 14 0v-2" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M12 22v-3" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M8 22h8" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                        <button className="send-btn" onClick={handleSend} disabled={status === "correct"}>
                            Send
                        </button>
                        {showSkip && (
                            <button className="skip-btn" onClick={goNext}>
                                Skip
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
