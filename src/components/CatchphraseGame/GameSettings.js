import React from 'react';
import { Box, Select, MenuItem, Button, IconButton, TextField } from '@mui/material';
import { AutoAwesome, DarkMode, LightMode } from '@mui/icons-material';

const GameSettings = ({ 
  roundDuration, 
  onTimeChange, 
  partyMode, 
  onPartyModeChange, 
  darkMode,
  onDarkModeChange,
  team1Name,
  team2Name,
  onTeamNameChange
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        gap: 2,
        p: 2,
        borderBottom: 1,
        borderColor: 'divider'
      }}
    >
      {/* Team Names */}
      <Box sx={{ 
        display: 'flex', 
        gap: 1, 
        width: { xs: '100%', sm: 'auto' }
      }}>
        <TextField
          size="small"
          value={team1Name}
          onChange={(e) => onTeamNameChange(1, e.target.value)}
          placeholder="Team 1"
          sx={{ flex: 1 }}
        />
        <TextField
          size="small"
          value={team2Name}
          onChange={(e) => onTeamNameChange(2, e.target.value)}
          placeholder="Team 2"
          sx={{ flex: 1 }}
        />
      </Box>

      {/* Game Controls */}
      <Box sx={{ 
        display: 'flex', 
        gap: 2, 
        alignItems: 'center',
        width: { xs: '100%', sm: 'auto' },
        justifyContent: 'center'
      }}>
        <Select
          size="small"
          value={roundDuration}
          onChange={(e) => onTimeChange(e.target.value)}
          sx={{ 
            minWidth: 100,
            flex: { xs: 1, sm: 'none' },
            maxWidth: { xs: 120, sm: 'none' }
          }}
        >
          <MenuItem value={30}>30s</MenuItem>
          <MenuItem value={45}>45s</MenuItem>
          <MenuItem value={60}>60s</MenuItem>
          <MenuItem value={90}>90s</MenuItem>
          <MenuItem value={120}>120s</MenuItem>
        </Select>

        <Button
          variant={partyMode ? "contained" : "outlined"}
          color="primary"
          onClick={() => onPartyModeChange(!partyMode)}
          startIcon={<AutoAwesome />}
          size="small"
          sx={{ 
            flex: { xs: 1, sm: 'none' },
            maxWidth: { xs: 120, sm: 'none' }
          }}
        >
          {partyMode ? 'Chill' : 'Party'}
        </Button>

        <IconButton 
          onClick={() => onDarkModeChange(!darkMode)} 
          size="small"
          sx={{ flex: 'none' }}
        >
          {darkMode ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default GameSettings;