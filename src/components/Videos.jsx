import React from "react";
import { useNavigate } from "react-router-dom";

const videos = [
    {
        id: 1,
        title: "Introduction",
        subtitle: "紹介",
        image: "https://i.ytimg.com/vi/rGrBHiuPlT0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBm5iuaypmgzczFxOZsQwcjaahytA",
        youtubeLink: "https://youtu.be/p9PEIsOzJ5E?si=h-xnqbWsYAVIzQwEVIDEO_ID_1",
    },
    {
        id: 2,
        title: "How to count in Japanese",
        subtitle: "日本語で数える方法",
        image: "https://i.ytimg.com/vi/bOUqVC4XkOY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLD2ScP2XqnZdEcJaT7LrbsCEcNiAA",
        youtubeLink: "https://youtu.be/bOUqVC4XkOY?si=2P5SmrEA7vAVxU5VVIDEO_ID_2",
    },
    {
        id: 3,
        title: "Days of the week and Days of the month",
        subtitle: "曜日と月の日",
         image: "https://i.ytimg.com/vi/JnoZE51WZg4/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDAtGcTkvMcGSwQ9XXoZbTIWjJ1wA",
        youtubeLink: "https://www.youtube.com/watch?v=JnoZE51WZg4&list=PL4071737C12790477&index=3&pp=iAQBVIDEO_ID_3",
    },
    
    {
        id: 4,
        title: "Going to a Destination",
        subtitle: "目的地に行く",
         image: "https://i.ytimg.com/vi/k74yjmfFb_A/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCAeB7K4-TbHslAXKK-NIY4dNQjew",
        youtubeLink: "https://www.youtube.com/watch?v=k74yjmfFb_A&list=PL4071737C12790477&index=4&pp=iAQBVIDEO_ID_4",
    },
    {
        id: 5,
        title: "Verbs",
        subtitle: "動詞",
          image: "https://i.ytimg.com/vi/KUIWRsVZZZA/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBmjbuwwPh8hd2zHjBCHfnte_X9ZA",
        youtubeLink: "https://www.youtube.com/watch?v=KUIWRsVZZZA&list=PL4071737C12790477&index=5&pp=iAQBVIDEO_ID_5",
    },
    {
        id: 6,
        title: "To do (verb)",
        subtitle: "する（動詞）",
          image: "https://i.ytimg.com/vi/ZGGufccTLso/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDncaSC6yLFnPdtpaZD5Spqv-B1-Q",
        youtubeLink: "https://www.youtube.com/watch?v=ZGGufccTLso&list=PL4071737C12790477&index=6&pp=iAQB0gcJCbIJAYcqIYzvVIDEO_ID_6",
    },
    {
        id: 7,
        title: "To give and to receive",
        subtitle: "あげる・もらう",
         image: "https://i.ytimg.com/vi/W0n-ODPwtzA/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCnJ_6Nl8B1GRLAW4e3Zf1MuU0R2A",
        youtubeLink: "https://www.youtube.com/watch?v=W0n-ODPwtzA&list=PL4071737C12790477&index=7&pp=iAQBVIDEO_ID_7",
    },
    {
        id: 8,
        title: "Familiy Members",
        subtitle: "家族のメンバー",
       image: "https://i.ytimg.com/vi/p9PEIsOzJ5E/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCHiSVY-f5NHZmjw5DgqV4J6caq1g",
        youtubeLink: "https://www.youtube.com/watch?v=p9PEIsOzJ5E&list=PL4071737C12790477&index=8&pp=iAQBVIDEO_ID_8",
    },
];

const playIcon = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#FF7F3F" />
        <polygon points="16,13 28,20 16,27" fill="#fff" />
    </svg>
);

export default function Videos() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: "40px 0 0 0", minHeight: "100vh", background: "#fff", position: "relative" }}>
            {/* Back button in upper right */}
            <button
                onClick={() => navigate("/hiragana")}
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
                        <path d="M18 24L10 14L18 4" stroke="#FF7F3F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                Back
            </button>
            <div style={{ marginLeft: 40, marginBottom: 24, display: "flex", alignItems: "center" }}>
                <span style={{
                    display: "inline-block",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: "#FF7F3F",
                    marginRight: 12
                }} />
                <h2 style={{ margin: 0, fontWeight: 700, fontSize: 28 }}>Video</h2>
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 32,
                padding: "0 40px"
            }}>
                {videos.map((video) => (
                    <div key={video.id} style={{
                        background: "#fff",
                        borderRadius: 16,
                        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                        overflow: "hidden",
                        transition: "box-shadow 0.2s",
                        position: "relative"
                    }}>
                        <div style={{ position: "relative" }}>
                            <a
                                href={video.youtubeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: "block", position: "relative" }}
                            >
                                <img
                                    src={video.image}
                                    alt={video.title}
                                    style={{ width: "100%", height: 180, objectFit: "cover" }}
                                />
                                <span
                                    style={{
                                        position: "absolute",
                                        right: 16,
                                        bottom: 16,
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        padding: 0
                                    }}
                                    aria-label={`Play ${video.title}`}
                                >
                                    {playIcon}
                                </span>
                            </a>
                        </div>
                        <div style={{ padding: "20px 20px 16px 20px" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                                <span style={{
                                    background: "#E6F4EA",
                                    color: "#1A7F5A",
                                    fontWeight: 700,
                                    borderRadius: 6,
                                    fontSize: 16,
                                    padding: "2px 10px",
                                    marginRight: 10
                                }}>
                                    #{video.id}
                                </span>
                                <span style={{ fontWeight: 700, fontSize: 18 }}>{video.title}</span>
                            </div>
                            <div style={{ color: "#666", fontSize: 16 }}>{video.subtitle}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}