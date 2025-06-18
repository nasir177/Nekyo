import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pause, Volume2 } from "lucide-react";
import "./Quiz.css";
import FlipCard from "./FlipCard";

// Kawaii Button
export const Button = ({ children, className, ...props }) => (
    <button
        className={`kawaii-btn ${className || ""}`}
        {...props}
    >
        {children}
    </button>
);

// Progress Bar
export const Progress = ({ value }) => (
    <div className="kawaii-progress-bar">
        <div
            className="kawaii-progress-bar-fill"
            style={{ width: `${value}%` }}
        ></div>
    </div>
);

const QuizComponent = ({ chapterId: propChapterId }) => {
     const params = useParams();
    const chapterId = propChapterId || params.chapterId;
    // const { chapterId } = useParams(); // <-- get chapterId from URL
    const [quizData, setQuizData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        fetch("/quizData.json")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load quiz data");
                return res.json();
            })
            .then((data) => {
                setQuizData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setSelected(null);
        setShowResult(false);
        setFlipped(false);
    }, [currentIndex]);

    if (loading) {
        return (
            <div className="kawaii-quiz-bg">
                <div className="kawaii-quiz-card kawaii-center">
                    <span className="kawaii-loader">🍡</span>
                    <div className="kawaii-loading-text">Loading...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="kawaii-quiz-bg">
                <div className="kawaii-quiz-card kawaii-center kawaii-error">
                    {error}
                </div>
            </div>
        );
    }

    // Filter questions for the current chapter
    const questions = quizData.filter(q => String(q.chapter) === String(chapterId));
    const currentQuestion = questions[currentIndex];

    if (!questions.length) {
        return (
            <div className="kawaii-quiz-bg">
                <div className="kawaii-quiz-card kawaii-center">
                    <div className="kawaii-congrats">No questions found for this chapter.</div>
                </div>
            </div>
        );
    }

    if (!currentQuestion) {
        return (
            <div className="kawaii-quiz-bg">
                <div className="kawaii-quiz-card kawaii-center">
                    <div className="kawaii-congrats">🎉 Congratulations! You have completed the chapter! 🎉</div>
                </div>
            </div>
        );
    }

    const handleChoice = (choice, idx) => {
        setSelected(idx);
        if (choice.correct) {
            setTimeout(() => setCurrentIndex((prev) => prev + 1), 900);
        } else {
            setShowResult(true);
        }
    };

    const renderChoices = () => (
        <div className="kawaii-choices">
            {currentQuestion.choices.map((choice, idx) => (
                <Button
                    key={idx}
                    className={
                        `kawaii-choice-btn ` +
                        (selected !== null
                            ? choice.correct
                                ? "kawaii-choice-correct"
                                : selected === idx
                                ? "kawaii-choice-wrong"
                                : ""
                            : "")
                    }
                    onClick={() => handleChoice(choice, idx)}
                    disabled={selected !== null}
                >
                    {choice.reading ? (
                        <span>
                            <span className="kawaii-choice-furi">{choice.reading}</span>
                            <span className="kawaii-choice-main">{choice.text}</span>
                        </span>
                    ) : (
                        <span className="kawaii-choice-main">{choice.text}</span>
                    )}
                </Button>
            ))}
        </div>
    );

    const renderCard = () => {
        if (currentQuestion.type === "flipcard") {
            return (
                <div className="kawaii-flipcard-wrap">
                    <FlipCard
                        front={currentQuestion.front}
                        back={currentQuestion.back}
                    />
                    <Button
                        className="kawaii-btn-main"
                        onClick={() => setCurrentIndex((prev) => prev + 1)}
                    >
                        Next
                    </Button>
                </div>
            );
        }

        return (
            <div className="kawaii-question-wrap">
                <div className="kawaii-question-title">
                    {currentQuestion.question}
                </div>
                {currentQuestion.image && (
                    <img
                        src={currentQuestion.image}
                        alt="question"
                        className="kawaii-question-img"
                    />
                )}
                {currentQuestion.audio && (
                    <button
                        onClick={() => new Audio(currentQuestion.audio).play()}
                        className="kawaii-audio-btn"
                    >
                        <Volume2 size={28} />
                    </button>
                )}
                <div className="kawaii-question-prompt">{currentQuestion.prompt}</div>
                {renderChoices()}
                {showResult && selected !== null && (
                    <div className="kawaii-wrong-msg">
                        ❌ Wrong answer. Try to remember it!
                    </div>
                )}
                {(showResult || currentQuestion.type === "flipcard") && (
                    <Button
                        className="kawaii-btn-main"
                        onClick={() => setCurrentIndex((prev) => prev + 1)}
                    >
                        Next
                    </Button>
                )}
            </div>
        );
    };

    return (
        <div className="kawaii-quiz-bg">
            <div className="kawaii-quiz-card">
                <div className="kawaii-quiz-header">
                    <button className="kawaii-pause-btn" onClick={() => setPaused((p) => !p)}>
                        <Pause className={paused ? "text-orange-500" : "text-gray-400"} />
                    </button>
                    <Progress value={((currentIndex + 1) / questions.length) * 100} />
                </div>
                {renderCard()}
            </div>
        </div>
    );
};

export default QuizComponent;