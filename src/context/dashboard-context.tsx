import * as React from "react";

import { IDashboardContext } from "../interfaces/IDashboardContext";
import { GAME_OPTIONS } from "../utils/constants";
import gameRules, { GameRules } from "../usecases/gameRules-usecases";
import { getRandomNumber } from "../utils/math";

const { createContext, useState } = React;
const DashboardContext = createContext({} as IDashboardContext);

export const DashboardContextProvider: React.FC = ({ children }) => {
  const [selectedGameOption, setSelectedGameOption] = useState("");
  const [houseGameOption, setHouseGameOption] = useState(GAME_OPTIONS.None);
  const [playerResult, setPlayerResult] = useState(GAME_OPTIONS.None)
  const [score, setScore] = useState(0);

  const setGameOptionSelected = (option: string) => {
    setSelectedGameOption(option)
  }
  
  const setHouseGameOptionSelected = (option: string) => {
    setHouseGameOption(option)
  }

  const increaseGameScore = () => {
    setScore(score => score +1)
  }

  const setPlayerResultState = (winner: string) => {
    setPlayerResult(winner)
  }

  const playAgain= () => {
    setHouseGameOption(GAME_OPTIONS.None)
    setSelectedGameOption(GAME_OPTIONS.None)
    setPlayerResult(GAME_OPTIONS.None)
  }

  const getGameRules = (): GameRules => {
    const { run, chooseOponent } = gameRules({getRandomNumber})
    return {
      run,
      chooseOponent
    }
  }

  return (
    <DashboardContext.Provider
      value={{
        selectedGameOption,
        setGameOptionSelected,
        houseGameOption,
        setHouseGameOptionSelected,
        score,
        increaseGameScore,
        playAgain,
        getGameRules,
        playerResult,
        setPlayerResultState
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
