import { GameRules, RunGameRespose } from "../../usecases/gameRules-usecases";
import { GAME_OPTIONS } from "../../utils/constants";

export const gameRulesMock = (): GameRules => {
  const run = (houseGameOption: string, selectedGameOption: string): RunGameRespose => {
    return {
      playerBeatsHouse: true,
      houseBeatsPlayer: false
    }
  }

  const chooseOponent = (): string => {
    return GAME_OPTIONS.Paper
  }

  return {
    run,
    chooseOponent
  }
}

export const gameRulesDrawMock = (): GameRules => {
  const run = (houseGameOption: string, selectedGameOption: string): RunGameRespose => {
    return {
      playerBeatsHouse: false,
      houseBeatsPlayer: false
    }
  }

  const chooseOponent = (): string => {
    return GAME_OPTIONS.Paper
  }

  return {
    run,
    chooseOponent
  }
}

export const gameRulesHouseWinsMock = (): GameRules => {
  const run = (houseGameOption: string, selectedGameOption: string): RunGameRespose => {
    return {
      playerBeatsHouse: false,
      houseBeatsPlayer: true
    }
  }

  const chooseOponent = (): string => {
    return GAME_OPTIONS.Paper
  }

  return {
    run,
    chooseOponent
  }
}
