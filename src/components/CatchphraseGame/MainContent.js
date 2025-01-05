import React from 'react';
import { Box, Typography } from '@mui/material';
import GameControls from './GameControls';
import GameDisplay from './GameDisplay';
import GameScores from './GameScores';

const MainContent = ({ game }) => {
  return (
    <Box sx={{ 
      p: 3,
      display: 'flex',
      flexDirection: 'column',
      height: { xs: '550px', sm: '600px' },
    }}>
      <Typography 
        variant="h4" 
        align="center"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          mb: 2
        }}
      >
        🎮 CATCHPHRASE 🎮
      </Typography>

      <GameScores
        team1Score={game.team1Score}
        team2Score={game.team2Score}
        currentTeam={game.currentTeam}
        team1Name={game.team1Name}
        team2Name={game.team2Name}
      />

      {game.isPlaying ? (
        <>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <GameDisplay
              timeLeft={game.timeLeft}
              currentWord={game.currentWord}
              isPlaying={game.isPlaying}
              currentTeam={game.currentTeam}
              team1Name={game.team1Name}
              team2Name={game.team2Name}
            />
          </Box>

          <GameControls
            isPlaying={game.isPlaying}
            isPaused={game.isPaused}
            onStart={game.startRound}
            onPause={game.pauseGame}
            onCorrect={game.handleCorrect}
            onSkip={game.handleSkip}
            onReset={game.resetGame}
          />
        </>
      ) : (
        <Box sx={{ 
          flex: 1,
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <GameControls
            isPlaying={game.isPlaying}
            isPaused={game.isPaused}
            onStart={game.startRound}
            onReset={game.resetGame}
          />
        </Box>
      )}
    </Box>
  );
};

export default MainContent;