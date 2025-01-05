import React from 'react';
import { Box, Select, MenuItem, Button, FormControl } from '@mui/material';
import { AutoAwesome } from '@mui/icons-material';

const GameSettings = ({ roundDuration, onTimeChange, partyMode, onPartyModeChange }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 2,
        p: 2,
        borderBottom: 1,
        borderColor: 'divider'
      }}
    >
      <FormControl size="small">
        <Select
          value={roundDuration}
          onChange={(e) => onTimeChange(e.target.value)}
          sx={{ minWidth: 100 }}
        >
          <MenuItem value={30}>30s</MenuItem>
          <MenuItem value={45}>45s</MenuItem>
          <MenuItem value={60}>60s</MenuItem>
          <MenuItem value={90}>90s</MenuItem>
          <MenuItem value={120}>120s</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant={partyMode ? "contained" : "outlined"}
        color="primary"
        onClick={() => onPartyModeChange(!partyMode)}
        startIcon={<AutoAwesome />}
        size="small"
      >
        {partyMode ? 'Chill Mode' : 'Party Mode'}
      </Button>
    </Box>
  );
};

export default GameSettings;