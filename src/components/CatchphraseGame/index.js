import React, { useState, useEffect } from 'react';
import { useGame } from './useGame';
import GameDisplay from './GameDisplay';
import GameControls from './GameControls';
import GameScores from './GameScores';
import GameSettings from './GameSettings';
import './styles/index.css';

const CatchphraseGame = () => {
  const [partyMode, setPartyMode] = useState(false);
  const game = useGame();

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (game.isPlaying) {
        if (e.code === 'Space' || e.code === 'KeyG') {
          e.preventDefault();
          game.handleCorrect();
        } else if (e.code === 'KeyS') {
          e.preventDefault();
          game.handleSkip();
        } else if (e.code === 'KeyP') {
          e.preventDefault();
          game.pauseGame();
        }
      } else if (e.code === 'Enter') {
        e.preventDefault();
        game.startRound();
      } else if (e.code === 'KeyR') {
        e.preventDefault();
        game.resetGame();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [game]);

  return (
    <div className={`game-container ${partyMode ? 'party-mode' : ''}`}>
      <GameSettings 
        roundDuration={game.roundDuration}
        onTimeChange={game.handleTimeChange}
        partyMode={partyMode}
        onPartyModeChange={setPartyMode}
      />

      <h1>Catchphrase</h1>

      <GameScores
        team1Score={game.team1Score}
        team2Score={game.team2Score}
        currentTeam={game.currentTeam}
      />

      <GameDisplay
        timeLeft={game.timeLeft}
        currentWord={game.currentWord}
        isPlaying={game.isPlaying}
        isPaused={game.isPaused}
        currentTeam={game.currentTeam}
      />

      <GameControls
        isPlaying={game.isPlaying}
        isPaused={game.isPaused}
        onStart={game.startRound}
        onPause={game.pauseGame}
        onReset={game.resetGame}
        onCorrect={game.handleCorrect}
        onSkip={game.handleSkip}
      />
    </div>
  );
};

export default CatchphraseGame;