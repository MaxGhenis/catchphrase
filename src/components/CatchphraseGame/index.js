import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useGame } from './useGame';
import GameDisplay from './GameDisplay';
import GameControls from './GameControls';
import GameScores from './GameScores';
import GameSettings from './GameSettings';

// Create theme
const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevents all-caps button text
        },
      },
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'grey.100',
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
          <GameSettings 
            roundDuration={game.roundDuration}
            onTimeChange={game.handleTimeChange}
            partyMode={partyMode}
            onPartyModeChange={setPartyMode}
          />

          <Box sx={{ p: 3 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Catchphrase
            </Typography>

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
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default CatchphraseGame;