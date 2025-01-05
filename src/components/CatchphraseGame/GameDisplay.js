import React from 'react';
import { Box, Typography } from '@mui/material';
import { Timer as TimerIcon } from '@mui/icons-material';

const GameDisplay = ({ timeLeft, currentWord, isPlaying, isPaused, currentTeam }) => {
  return (
    <>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: 2,
          my: 4
        }}
      >
        <TimerIcon sx={{ fontSize: 40 }} />
        <Typography
          variant="h2"
          component="span"
          sx={{
            fontWeight: 300,
            color: timeLeft <= 10 ? 'error.main' : 'text.primary',
            animation: timeLeft <= 10 ? 'pulse 1s infinite' : 'none',
          }}
        >
          {timeLeft}s
        </Typography>
      </Box>

      <Box 
        sx={{ 
          my: 4, 
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <Typography
          variant="h3"
          sx={{
            minHeight: 70,
            mb: 2,
            fontWeight: 500,
            color: 'text.primary',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isPlaying ? currentWord : isPaused ? 'Resume Round' : 'Press Play to Start'}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: 'text.secondary' }}
        >
          {isPlaying || isPaused ? `Team ${currentTeam}'s Round` : `Team ${currentTeam} Get Ready!`}
        </Typography>
      </Box>
    </>
  );
};

export default GameDisplay;