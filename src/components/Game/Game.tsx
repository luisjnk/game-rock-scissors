import React from 'react';

import { IDashboardContext } from '../../interfaces/IDashboardContext';
import { FIGHT_RULES, GAME_OPTIONS, TEST_IDS } from '../../utils/constants';

import GameItem, { TypeOfGameItem } from './Item/Item';
import GameResult, { TypeOfResult } from './Result/Result';

import './game.scss';

interface Props {
  context: React.Context<IDashboardContext>
}
const Game: React.FC<Props> = ({ context }: Props) => {

  const { useContext, useEffect, useState } = React;
  const {
    setHouseGameOptionSelected,
    houseGameOption,
    selectedGameOption,
    increaseGameScore,
    getGameRules,
    setPlayerResultState
  } = useContext(context)

  const { run, chooseOponent } = getGameRules()

  const [playerResult, setPlayerResult] = useState(TypeOfResult.notFinished);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const randomHouseSelection = () => {
    setTimeout(() => {
      setHouseGameOptionSelected(chooseOponent())
    }, 1000);
  }

  const chooseWinner = () => {
    if (houseGameOption !== GAME_OPTIONS.None) {
      const { playerBeatsHouse, houseBeatsPlayer } = run(houseGameOption, selectedGameOption)
      if (playerBeatsHouse) {
        setPlayerResult(_ => TypeOfResult.winner)
        setPlayerResultState(selectedGameOption)
        increaseGameScore()
      }
      if (houseBeatsPlayer) {
        setPlayerResult(_ => TypeOfResult.lose)
        setPlayerResultState(houseGameOption)
      }

      if (!playerBeatsHouse && !houseBeatsPlayer) {
        setPlayerResult(_ => TypeOfResult.draw)
        setPlayerResultState(GAME_OPTIONS.None)
      }
      setIsGameFinished(_ => true)
    }
  }

  const getGameContainerClassNames = () => {
    if (isGameFinished) {
      return "game-finished-container"
    } else {
      return "game-container"
    }
  }

  useEffect(() => {
    randomHouseSelection()
  }, [])

  useEffect(() => {
    chooseWinner()
  }, [houseGameOption])

  return (
    <div>
      <div data-testid={TEST_IDS.GAME_ITEMS} className={getGameContainerClassNames()}>
        <GameItem context={context} typeOfGameItem={TypeOfGameItem.player} />
        {isGameFinished && <GameResult context={context} typeOfResult={playerResult} />}
        <GameItem context={context} typeOfGameItem={TypeOfGameItem.house} />
      </div>
    </div>
  )
}

export default Game;
