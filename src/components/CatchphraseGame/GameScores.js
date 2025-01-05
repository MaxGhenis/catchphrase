import React from 'react';

const GameScores = ({ team1Score, team2Score, currentTeam }) => {
  return (
    <div className="scores">
      <div className={currentTeam === 1 ? 'current-team' : ''}>
        Team 1: {team1Score}
      </div>
      <div className={currentTeam === 2 ? 'current-team' : ''}>
        Team 2: {team2Score}
      </div>
    </div>
  );
};

export default GameScores;