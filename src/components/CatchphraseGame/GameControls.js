import React from 'react';
import { Box } from '@mui/material';
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
  const buttonStyles = {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 500,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    minWidth: '140px',
    justifyContent: 'center',
    height: '48px'
  };

  if (!isPlaying) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 300 }}>
        <button
          onClick={onStart}
          style={{
            ...buttonStyles,
            backgroundColor: '#2196f3',
            color: 'white',
            width: '100%'
          }}
        >
          <PlayArrow sx={{ fontSize: 24 }} />
          Start Game
        </button>
        <button
          onClick={onReset}
          style={{
            ...buttonStyles,
            backgroundColor: 'transparent',
            border: '1px solid #ccc',
            color: 'inherit',
            width: '100%'
          }}
        >
          <RestartAlt sx={{ fontSize: 24 }} />
          Reset
        </button>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        <button
          onClick={onCorrect}
          style={{
            ...buttonStyles,
            backgroundColor: '#2196f3',
            color: 'white',
            flex: 1
          }}
        >
          Got it!
        </button>
        <button
          onClick={onSkip}
          style={{
            ...buttonStyles,
            backgroundColor: '#e0e0e0',
            color: 'inherit',
            flex: 1
          }}
        >
          Skip
        </button>
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <button
          onClick={onPause}
          style={{
            ...buttonStyles,
            backgroundColor: '#f4511e',
            color: 'white',
            flex: 1
          }}
        >
          <Pause sx={{ fontSize: 24 }} />
          Pause
        </button>
        <button
          onClick={onReset}
          style={{
            ...buttonStyles,
            backgroundColor: 'transparent',
            border: '1px solid #ccc',
            color: 'inherit',
            flex: 1
          }}
        >
          <RestartAlt sx={{ fontSize: 24 }} />
          Reset
        </button>
      </Box>
    </Box>
  );
};

export default GameControls;