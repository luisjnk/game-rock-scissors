import React from 'react';

import { ReactComponent as IconSpock } from "../../assets/svg/icon-spock.svg"
import { ReactComponent as IconLizard } from "../../assets/svg/icon-lizard.svg"
import { ReactComponent as IconRock } from "../../assets/svg/icon-rock.svg"
import { ReactComponent as IconPaper } from "../../assets/svg/icon-paper.svg"
import { ReactComponent as IconScissors } from "../../assets/svg/icon-scissors.svg"

import { GAME_OPTIONS, TEST_IDS } from '../../utils/constants';
import { IDashboardContext } from '../../interfaces/IDashboardContext';

import './options.scss';
import Spinner from '../Game/Spinner/Spinner';

interface Props {
  optionSelected: string,
  context: React.Context<IDashboardContext>
}

const Options: React.FC<Props> = ({ optionSelected, context}: Props) => {
  const { useContext } = React;

  const {setGameOptionSelected, playerResult } = useContext(context);

  const handleIcon = () => {
    switch (optionSelected) {
      case GAME_OPTIONS.Spock: {
        return <IconSpock data-testid={TEST_IDS.ICON_SPOCK}/>
      }
      case GAME_OPTIONS.Lizard: {
        return <IconLizard data-testid={TEST_IDS.ICON_LIZARD}/>
      }
      case GAME_OPTIONS.Rock: {
        return <IconRock data-testid={TEST_IDS.ICON_ROCK} />
      }
      case GAME_OPTIONS.Paper: {
        return <IconPaper data-testid={TEST_IDS.ICON_PAPER}/>
      }
      case GAME_OPTIONS.Scissors: {
        return <IconScissors data-testid={TEST_IDS.ICON_SCISSORS}/>
      }
      default: {
        return <div data-testid={TEST_IDS.ICON_NONE} className="selected-none"></div>
      }
    }
  }

  const handleWinner = () => {
    if (playerResult === optionSelected && playerResult !== GAME_OPTIONS.None) {
      return true;
    }
    return false
  }

  const click = () => {
    setGameOptionSelected(optionSelected);
  }

  return (
    <div className={`option-item ${optionSelected}-option `}>
      <div className={`${optionSelected}-innercircle`}>
        {handleWinner() && <Spinner />} 
        <button onClick={() => { click() }} className={`option-rectangle ${optionSelected}-rectangle`}>
          {handleIcon()}
        </button>
      </div>
    </div>
  )
}

export default Options;

