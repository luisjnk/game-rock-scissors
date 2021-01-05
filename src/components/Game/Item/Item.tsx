import React, { useEffect } from 'react';

import Options from '../../Options/Options';

import { IDashboardContext } from '../../../interfaces/IDashboardContext';
import { GAME_OPTIONS, GAME_TITLE } from '../../../utils/constants';

export enum TypeOfGameItem {
  player = 0,
  house = 1
}

interface Props {
  context: React.Context<IDashboardContext>
  typeOfGameItem: number
}
const GameItem: React.FC<Props> = ({ context, typeOfGameItem }: Props) => {
  const { useContext } = React;

  const { selectedGameOption, houseGameOption } = useContext(context);
  const handleGameItemTitle = () => {
    if (typeOfGameItem === TypeOfGameItem.player) {
      return GAME_TITLE.player
    } else {
      return GAME_TITLE.house
    }
  }

  const handleGameItemSelected = () => {
    if (typeOfGameItem === TypeOfGameItem.player ) {
      return selectedGameOption
    } else if (houseGameOption !== GAME_OPTIONS.None) {
      return houseGameOption
    } else {
      return GAME_OPTIONS.None
    }
  }

  const handleGameItemClassName = () => {
    if (typeOfGameItem === TypeOfGameItem.player ) {
      return "player-item"
    } else {
      return "house-item" 
    }
  }

  return (
    <div className={handleGameItemClassName()} >
      <div className="game-item ">
        <h1>{handleGameItemTitle()}</h1>
        <Options context={context} optionSelected={handleGameItemSelected()} />
      </div>
    </div>
  )
}

export default GameItem;
