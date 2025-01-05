import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useGame } from './useGame';
import GameDisplay from './GameDisplay';
import GameControls from './GameControls';
import GameScores from './GameScores';
import GameSettings from './GameSettings';
import './styles/party-mode.css';

const CatchphraseGame = () => {
  const [partyMode, setPartyMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const game = useGame();

  // Initialize dark mode based on system preference
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  // Add dark mode attribute to body
  useEffect(() => {
    document.body.setAttribute('data-mode', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#000000',
        secondary: darkMode ? '#b3b3b3' : '#666666',
      },
    },
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
      h4: {
        fontSize: '2rem',
        fontWeight: 600,
        marginBottom: '1rem',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });

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
          bgcolor: 'background.default',
          p: { xs: 1, sm: 2, md: 3 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease'
        }}
      >
        <Paper
          elevation={2}
          sx={{
            width: '100%',
            maxWidth: 600,
            overflow: 'hidden',
            bgcolor: 'background.paper',
            borderRadius: 2,
            transition: 'background-color 0.3s ease'
          }}
          className={partyMode ? 'party-mode' : ''}
        >
          <GameSettings 
            roundDuration={game.roundDuration}
            onTimeChange={game.handleTimeChange}
            partyMode={partyMode}
            onPartyModeChange={setPartyMode}
            darkMode={darkMode}
            onDarkModeChange={setDarkMode}
            team1Name={game.team1Name}
            team2Name={game.team2Name}
            onTeamNameChange={game.handleTeamNameChange}
          />

          <Box sx={{ p: 3 }}>
            <Typography 
              variant="h4" 
              align="center" 
              gutterBottom
              sx={{ 
                position: 'relative',
                zIndex: 1
              }}
            >
              🎮 CATCHPHRASE! 🎮
            </Typography>

            <GameScores
              team1Score={game.team1Score}
              team2Score={game.team2Score}
              currentTeam={game.currentTeam}
              team1Name={game.team1Name}
              team2Name={game.team2Name}
            />

            <GameDisplay
              timeLeft={game.timeLeft}
              currentWord={game.currentWord}
              isPlaying={game.isPlaying}
              isPaused={game.isPaused}
              currentTeam={game.currentTeam}
              team1Name={game.team1Name}
              team2Name={game.team2Name}
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