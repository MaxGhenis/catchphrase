import React, { useState, useEffect, useCallback } from 'react';
import { Timer, RefreshCw, Play, Pause, Settings } from 'lucide-react';
import { generate } from 'random-words';
import './CatchphraseGame.css';

// eslint-disable-next-line react-hooks/exhaustive-deps
const CatchphraseGame = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [roundDuration, setRoundDuration] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const getNewWord = () => {
    const word = generate();
    setCurrentWord(word);
  };

  const startRound = () => {
    if (isPaused) {
      setIsPaused(false);
      setIsPlaying(true);
    } else {
      getNewWord();
      setIsPlaying(true);
      setTimeLeft(roundDuration);
    }
  };

  const pauseGame = () => {
    setIsPlaying(false);
    setIsPaused(true);
  };

  const handleCorrect = () => {
    if (currentTeam === 1) {
      setTeam1Score(prev => prev + 1);
    } else {
      setTeam2Score(prev => prev + 1);
    }
    getNewWord();
  };

  const handleSkip = () => {
    getNewWord();
  };

  const endRound = useCallback(() => {
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTeam(team => team === 1 ? 2 : 1);
    setTimeLeft(roundDuration);
    setCurrentWord('');
  }, [roundDuration]);

  const resetGame = () => {
    setTeam1Score(0);
    setTeam2Score(0);
    setCurrentTeam(1);
    setTimeLeft(roundDuration);
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentWord('');
  };

  const handleTimeChange = (seconds) => {
    const newDuration = Number(seconds);
    setRoundDuration(newDuration);
    if (!isPlaying) {
      setTimeLeft(newDuration);
    }
  };

  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            clearInterval(timer);
            endRound();
            return roundDuration;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, endRound, roundDuration]);

  return (
    <div className="game-container">
      <h1>
        Catchphrase
        <button 
          onClick={() => setShowSettings(!showSettings)}
          className="settings-button"
        >
          <Settings size={28} />
        </button>
      </h1>
      
      {showSettings && (
        <div className="settings-panel">
          <label>Round Duration (seconds):</label>
          <select 
            value={roundDuration} 
            onChange={(e) => handleTimeChange(e.target.value)}
            className="time-select"
          >
            <option value={30}>30</option>
            <option value={45}>45</option>
            <option value={60}>60</option>
            <option value={90}>90</option>
            <option value={120}>120</option>
          </select>
        </div>
      )}

      <div className="scores">
        <div className={currentTeam === 1 ? 'current-team' : ''}>
          Team 1: {team1Score}
        </div>
        <div className={currentTeam === 2 ? 'current-team' : ''}>
          Team 2: {team2Score}
        </div>
      </div>

      <div className="timer">
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

      <div className="controls">
        <div className="main-controls">
          {!isPlaying ? (
            <button onClick={startRound} className="play-button">
              <Play size={24} />
              {isPaused ? 'Resume' : 'Start Round'}
            </button>
          ) : (
            <button onClick={pauseGame} className="pause-button">
              <Pause size={24} />
              Pause
            </button>
          )}
          <button onClick={resetGame} className="reset-button">
            <RefreshCw size={24} />
            Reset Game
          </button>
        </div>
        
        {isPlaying && (
          <div className="game-controls">
            <button onClick={handleCorrect} className="got-it-button">
              Got it!
            </button>
            <button onClick={handleSkip} className="skip-button">
              Skip
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatchphraseGame;