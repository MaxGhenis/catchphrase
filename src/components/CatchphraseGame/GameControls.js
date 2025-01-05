import React from 'react';
import { Button, Box, Typography } from '@mui/material';
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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        {!isPlaying ? (
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="success"
              onClick={onStart}
              startIcon={<PlayArrow />}
              sx={{ minWidth: 140 }}
            >
              {isPaused ? 'Resume' : 'Start Round'}
            </Button>
            <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary' }}>
              Press Enter
            </Typography>
          </Box>
        ) : (
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="warning"
              onClick={onPause}
              startIcon={<Pause />}
              sx={{ minWidth: 140 }}
            >
              Pause
            </Button>
            <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary' }}>
              Press P
            </Typography>
          </Box>
        )}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="outlined"
            color="inherit"
            onClick={onReset}
            startIcon={<RestartAlt />}
            sx={{ minWidth: 140 }}
          >
            Reset Game
          </Button>
          <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary' }}>
            Press R
          </Typography>
        </Box>
      </Box>
      
      {isPlaying && (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={onCorrect}
              size="large"
              sx={{ minWidth: 140 }}
            >
              Got it!
            </Button>
            <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary' }}>
              Space or G
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="inherit"
              onClick={onSkip}
              size="large"
              sx={{ minWidth: 140 }}
            >
              Skip
            </Button>
            <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary' }}>
              Press S
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default GameControls;