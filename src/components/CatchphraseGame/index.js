import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { useGame } from './useGame';
import GameSettings from './GameSettings';
import ThemeProvider from './ThemeProvider';
import GameContainer from './GameContainer';
import MainContent from './MainContent';
import './styles/party/base.css';

const CatchphraseGame = () => {
  const [partyMode, setPartyMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const game = useGame();

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  useEffect(() => {
    document.body.setAttribute('data-mode', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <ThemeProvider darkMode={darkMode}>
      <GameContainer partyMode={partyMode}>
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
        <MainContent game={game} />
      </GameContainer>
    </ThemeProvider>
  );
};

export default CatchphraseGame;