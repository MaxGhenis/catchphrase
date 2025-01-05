import React from 'react';
import { Sparkles } from 'lucide-react';

const GameSettings = ({ roundDuration, onTimeChange, partyMode, onPartyModeChange }) => {
  return (
    <div className="settings-banner">
      <div className="settings-control">
        <select 
          value={roundDuration} 
          onChange={(e) => onTimeChange(e.target.value)}
          className="time-select"
        >
          <option value={30}>30s</option>
          <option value={45}>45s</option>
          <option value={60}>60s</option>
          <option value={90}>90s</option>
          <option value={120}>120s</option>
        </select>
      </div>

      <button 
        onClick={() => onPartyModeChange(!partyMode)}
        className={`party-mode-button ${partyMode ? 'active' : ''}`}
      >
        <Sparkles size={16} />
        {partyMode ? 'Chill Mode' : 'Party Mode'}
      </button>
    </div>
  );
};

export default GameSettings;