import React, { useState, useContext } from 'react';
import { IDashboardContext } from '../../interfaces/IDashboardContext';

interface Props {
  context: React.Context<IDashboardContext>
}

const Header: React.FC<Props> = ({context} : Props) => {
  const {score} = useContext(context);
  
  return (
    <div className="dashboard-header">
      <div className="header-text">
        <h1>ROCK</h1>
        <h1>PAPER</h1>
        <h1>SCISSORS</h1>
        <h1>Lizard</h1>
        <h1>SPOCK</h1>

      </div>
      <div className="header-score">
        <h1>Score</h1>
        <h1>{score}</h1>
      </div>
    </div>
  )
}

export default Header;
