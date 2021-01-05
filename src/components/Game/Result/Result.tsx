import React, { useContext } from 'react';

import { IDashboardContext } from '../../../interfaces/IDashboardContext';
import { GAME_RESULTS_MESSAGE } from '../../../utils/constants';

export enum TypeOfResult {
  winner = 0,
  lose = 1,
  draw = 3,
  notFinished = 4
}

interface Props {
  typeOfResult: number,
  context: React.Context<IDashboardContext>
}
const GameResult: React.FC<Props> = ({ typeOfResult, context }: Props) => {
  const { playAgain} = useContext(context)

  const resultTitle = () => {
    if (typeOfResult === TypeOfResult.winner) {
      return GAME_RESULTS_MESSAGE.WIN;
    } else if (typeOfResult === TypeOfResult.lose) {
      return GAME_RESULTS_MESSAGE.LOOSE
    } else {
      return GAME_RESULTS_MESSAGE.DRAW
    }
  }

  const click = () => {
    playAgain()
  }

  return (
    <div className="result">
      <h1>{resultTitle()}</h1>
      <button onClick={() => click()}>Play Again</button>
    </div>
  )
}

export default GameResult;
