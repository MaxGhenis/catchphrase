import React from 'react';
import { Box, Typography } from '@mui/material';

const GameScores = ({ team1Score, team2Score, currentTeam }) => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        px: 4,
        my: 3
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: currentTeam === 1 ? 700 : 400,
          color: currentTeam === 1 ? 'primary.main' : 'text.primary',
          transition: 'all 0.3s ease'
        }}
      >
        Team 1: {team1Score}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: currentTeam === 2 ? 700 : 400,
          color: currentTeam === 2 ? 'primary.main' : 'text.primary',
          transition: 'all 0.3s ease'
        }}
      >
        Team 2: {team2Score}
      </Typography>
    </Box>
  );
};

export default GameScores;