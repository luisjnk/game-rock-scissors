import { FIGHT_RULES, GAME_OPTIONS } from "../utils/constants"

export interface RunGameRespose {
  playerBeatsHouse: boolean,
  houseBeatsPlayer: boolean
}

export interface GameRules {
  run(houseGameOption: string, selectedGameOption: string): RunGameRespose,
  chooseOponent(): string
}

export interface Props {
  getRandomNumber(length: number) : number
}

const gameRules = ({getRandomNumber} : Props): GameRules => {
  const run = (houseGameOption: string, selectedGameOption: string): RunGameRespose => {
    const playerBeatsHouse = FIGHT_RULES[selectedGameOption].beats.find(option => option === houseGameOption) != undefined
    const houseBeatsPlayer = FIGHT_RULES[houseGameOption].beats.find(option => option === selectedGameOption) != undefined

    return {
      playerBeatsHouse,
      houseBeatsPlayer
    }
  }

  const chooseOponent = (): string => {
    const values = Object.values(GAME_OPTIONS);
    const newValues = values.filter(value => value !== GAME_OPTIONS.None)
    const index = getRandomNumber(newValues.length)
    return newValues[index - 1]
  }


  return {
    run,
    chooseOponent
  }

}

export default gameRules;