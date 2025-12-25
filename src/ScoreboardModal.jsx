import React, { useState, useEffect } from 'react';
import './ScoreboardModal.css';

const SCOREBOARD_KEY = 'set-trainer-scoreboard';

export function getScoreboard() {
    const stored = localStorage.getItem(SCOREBOARD_KEY);
    return stored ? JSON.parse(stored) : [];
}

function saveScoreboard(scoreboard) {
    localStorage.setItem(SCOREBOARD_KEY, JSON.stringify(scoreboard));
}

export function addScore(name, time, wrongCount) {
    const scoreboard = getScoreboard();
    scoreboard.push({
        name,
        time,
        wrongCount,
        date: new Date().toISOString()
    });
    scoreboard.sort((a, b) => a.time - b.time);
    saveScoreboard(scoreboard);
}

function ScoreboardModal({ isOpen, onClose, currentTime, wrongCount }) {
    const [name, setName] = useState('');
    const [saved, setSaved] = useState(false);
    const [topScores, setTopScores] = useState([]);

    useEffect(() => {
        if (isOpen) {
            setTopScores(getScoreboard().slice(0, 5));
            setSaved(false);
            setName('');
        }
    }, [isOpen]);

    const handleSave = () => {
        if (name.trim()) {
            addScore(name.trim(), currentTime, wrongCount);
            setTopScores(getScoreboard().slice(0, 5));
            setSaved(true);
        }
    };

    const formatTime = (milliseconds) => {
        const totalSeconds = milliseconds / 1000;
        const mins = Math.floor(totalSeconds / 60);
        const secs = (totalSeconds % 60).toFixed(2);
        return `${mins}:${secs.padStart(5, '0')}`;
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>🎉 Challenge Complete! 🎉</h2>
                <p className="completion-stats">
                    Time: {formatTime(currentTime)} | Wrong: {wrongCount}
                </p>

                {!saved ? (
                    <div className="name-input-section">
                        <label htmlFor="player-name">Enter your name:</label>
                        <input
                            id="player-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSave()}
                            placeholder="Your name"
                            maxLength={20}
                            autoFocus
                        />
                        <button onClick={handleSave} disabled={!name.trim()}>
                            Save Score
                        </button>
                    </div>
                ) : (
                    <p className="saved-message">✓ Score saved!</p>
                )}

                <div className="scoreboard-section">
                    <h3>Top 5 Scores</h3>
                    {topScores.length === 0 ? (
                        <p>No scores yet. Be the first!</p>
                    ) : (
                        <table className="scoreboard-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Wrong</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topScores.map((score, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{score.name}</td>
                                        <td>{formatTime(score.time)}</td>
                                        <td>{score.wrongCount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default ScoreboardModal;
