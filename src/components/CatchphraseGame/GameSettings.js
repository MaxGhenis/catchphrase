import React from 'react';

const GameSettings = ({ roundDuration, onTimeChange }) => {
  return (
    <div className="settings-panel">
      <label>Round Duration (seconds):</label>
      <select 
        value={roundDuration} 
        onChange={(e) => onTimeChange(e.target.value)}
        className="time-select"
      >
        <option value={30}>30</option>
        <option value={45}>45</option>
        <option value={60}>60</option>
        <option value={90}>90</option>
        <option value={120}>120</option>
      </select>
    </div>
  );
};

export default GameSettings;