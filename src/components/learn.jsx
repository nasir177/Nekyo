import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Home,
    Users,
    Video,
    MessageSquare,
    PenSquare
} from "lucide-react";
import './learn.css';

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
    <div
        className={`flex items-center space-x-3 py-2 px-4 rounded-lg cursor-pointer ${
            active ? "text-green-400" : "hover:bg-gray-800"
        }`}
        onClick={onClick}
    >
        <Icon size={20} />
        <span>{label}</span>
    </div>
);

const ChapterSelection = ({ navigate }) => {
    const [selectedChapter, setSelectedChapter] = useState(null);

    const chapters = [
        { id: 1, title: "はじめまして", subtitle: "Nice to meet you", image: "/learnimage/neko.png" },
        { id: 2, title: "こんにちは", subtitle: "Greetings" , image: "/learnimage/elearning.png"},
        { id: 3, title: "ありがとう", subtitle: "Thank you", image: "/learnimage/thank-you.png" },
        { id: 4, title: "ごめんなさい", subtitle: "Apologies" , image: "/learnimage/sorry.png"},
        { id: 5, title: "いくつですか", subtitle: "How many?" , image: "/learnimage/confused.png"},
        { id: 6, title: "どこですか", subtitle: "Where is it?" , image: "/learnimage/where.png"},
        { id: 7, title: "なにがすき", subtitle: "What do you like?" , image: "/learnimage/tiger.png"},
        { id: 8, title: "だれですか", subtitle: "Who is it?", image: "/learnimage/curiosity.png" },
        { id: 9, title: "おわり", subtitle: "The End", image: "/learnimage/elearning (1).png" },
    ];

    return (
        <div className="chapter-container">
            <h1 className="app-title">START HERE</h1>
            <div className="chapters-grid">
                {chapters.map((chapter) => (
                    <div
                        key={chapter.id}
                        className={`chapter-card ${selectedChapter === chapter.id ? 'selected' : ''}`}
                        onClick={() => setSelectedChapter(chapter.id)}
                    >
                        <div className="chapter-number">{chapter.id}.</div>
                        <div className="chapter-content">
                            {chapter.image && (
                                <img
                                    src={chapter.image}
                                    alt={chapter.title}
                                    className="chapter-image"
                                />
                            )}
                            <h3 className="japanese-text">{chapter.title}</h3>
                            <p className="english-text">{chapter.subtitle}</p>
                        </div>
                        {selectedChapter === chapter.id && (
                            <div
                                className="start-button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/chapter/${chapter.id}`);
                                }}
                            >
                                Start
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function LearnPage() {
    const navigate = useNavigate();

    // Sidebar navigation items
    const sidebarItems = [
        { icon: Home, label: "Learn", path: "/learn" },
        { icon: Users, label: "Characters", path: "/hiragana" },
        { icon: PenSquare, label: "Practice board", path: "/whiteboard" },
        { icon: Video, label: "Videos", path: "/videos" },
        { icon: MessageSquare, label: "Conversation", path: "/conversation" },
    ];

    // Get current path for active state
    const currentPath = window.location.pathname;

    return (
        <div className="learn-layout">
            {/* Sidebar */}
            <aside className="sidebar">
    <div className="sidebar-header">
        <img
            src="/learnimage/8481943.jpg"
            alt="Nekyo"
            className="sidebar-image"
        />
        <h1 className="logo">Nekyo</h1>
    </div>
    {sidebarItems.map(item => (
        <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={currentPath.startsWith(item.path)}
            onClick={() => navigate(item.path)}
        />
    ))}
</aside>

            {/* Main Content */}
            <main className="main-content">
                <ChapterSelection navigate={navigate} />
            </main>

            {/* Right panel */}
            <aside className="right-panel">
              
                <div className="card">
                    <h3>Create a profile to save your progress!</h3>
                    <button className="profile-btn green">CREATE A PROFILE</button>
                    <button className="profile-btn blue">SIGN IN</button>
                </div>
            </aside>
        </div>
    );
}
