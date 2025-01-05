import React from 'react';
import { Box, Typography } from '@mui/material';
import { Timer as TimerIcon } from '@mui/icons-material';

const GameDisplay = ({ 
  timeLeft, 
  currentWord, 
  isPlaying, 
  currentTeam,
  team1Name,
  team2Name 
}) => {
  const currentTeamName = currentTeam === 1 ? team1Name : team2Name;

  return (
    <>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: 2,
        my: 4
      }}>
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

      {isPlaying && (
        <Box sx={{ 
          my: 4, 
          px: 2, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          minHeight: '120px',  // Fixed height to prevent layout shifts
          justifyContent: 'center'
        }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 500,
              color: 'text.primary',
              textAlign: 'center',
              mb: 1
            }}
          >
            {currentWord}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: 'text.secondary' }}
          >
            {`${currentTeamName}'s Round`}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default GameDisplay;