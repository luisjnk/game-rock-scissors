import { GameRules, Props } from "../usecases/gameRules-usecases";

export interface IDashboardContext {
  selectedGameOption: string
  setGameOptionSelected(option: string): void
  houseGameOption: string
  setHouseGameOptionSelected(option: string): void
  score: number,
  increaseGameScore(): void,
  playAgain(): void,
  getGameRules(): GameRules,
  playerResult: string,
  setPlayerResultState(winner: string): void
}