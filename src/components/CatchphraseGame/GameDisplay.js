import React from 'react';
import { Timer } from 'lucide-react';

const GameDisplay = ({ timeLeft, currentWord, isPlaying, isPaused, currentTeam }) => {
  return (
    <>
      <div className={`timer ${timeLeft <= 10 ? 'low-time' : ''}`}>
        <Timer size={42} />
        <span>{timeLeft}s</span>
      </div>

      <div className="word-display">
        <div className="current-word">
          {isPlaying ? currentWord : isPaused ? 'Resume Round' : 'Press Play to Start'}
        </div>
        <div className="turn-indicator">
          {isPlaying || isPaused ? `Team ${currentTeam}'s Round` : `Team ${currentTeam} Get Ready!`}
        </div>
      </div>
    </>
  );
};

export default GameDisplay;