import React from 'react';
import { PlayArrow, Pause, RestartAlt } from '@mui/icons-material';

const GameControls = ({
  isPlaying,
  isPaused,
  onStart,
  onPause,
  onReset,
  onCorrect,
  onSkip
}) => {
  return (
    <div className="controls">
      <div className="main-controls">
        {!isPlaying ? (
          <div>
            <button onClick={onStart} className="play-button">
              <PlayArrow sx={{ fontSize: 24 }} />
              {isPaused ? 'Resume' : 'Start Round'}
            </button>
            <div className="shortcuts">Press Enter</div>
          </div>
        ) : (
          <div>
            <button onClick={onPause} className="pause-button">
              <Pause sx={{ fontSize: 24 }} />
              Pause
            </button>
            <div className="shortcuts">Press P</div>
          </div>
        )}
        <div>
          <button onClick={onReset} className="reset-button">
            <RestartAlt sx={{ fontSize: 24 }} />
            Reset Game
          </button>
          <div className="shortcuts">Press R</div>
        </div>
      </div>
      
      {isPlaying && (
        <div className="game-controls">
          <div>
            <button onClick={onCorrect} className="got-it-button">
              Got it!
            </button>
            <div className="shortcuts">Space or G</div>
          </div>
          <div>
            <button onClick={onSkip} className="skip-button">
              Skip
            </button>
            <div className="shortcuts">Press S</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameControls;