import React from 'react';
import { Box, Paper } from '@mui/material';

const GameContainer = ({ partyMode, children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        p: { xs: 1, sm: 2, md: 3 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: '100%',
          maxWidth: 600,
          overflow: 'hidden',
          bgcolor: 'background.paper',
          borderRadius: 2
        }}
        className={partyMode ? 'party-mode' : ''}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default GameContainer;