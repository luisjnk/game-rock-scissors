import React from 'react';

import Options from '../Options/Options';

import { IDashboardContext } from '../../interfaces/IDashboardContext';
import { GAME_OPTIONS, TEST_IDS } from '../../utils/constants';

import { ReactComponent as IconPentgon } from "../../assets/svg/bg-pentagon-mobile.svg"

import './pentagon.scss';

interface Props {
  context: React.Context<IDashboardContext>
}
const Pentagon: React.FC<Props> = ({context}: Props) => {
  const handleDisplayOptions = () => {
    const gameOptions = Object.values(GAME_OPTIONS)
    const validGameOptions = gameOptions.filter(option =>  option != GAME_OPTIONS.None)
    return validGameOptions.map( option => {
      return(
        <Options key={option} context={context} optionSelected={option} />
      )
    })
  }
  return (
    <div className="pentagon-margin"> 
      <div className="icon-position">
         <IconPentgon />
      </div>
      <div data-testid={TEST_IDS.PENTAGON_OPTIONS} className="options-container">
          {handleDisplayOptions()}
      </div>
    </div>
  )
}

export default Pentagon;
