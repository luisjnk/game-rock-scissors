export const GAME_OPTIONS = {
  Lizard: "lizard",
  Spock: "spock",
  Rock: "rock",
  Paper: "paper",
  Scissors: "scissors",
  None: "none"
}

export const FIGHT_RULES = {
  [GAME_OPTIONS.Scissors]: {
    beats: [GAME_OPTIONS.Paper, GAME_OPTIONS.Lizard]
  },
  [GAME_OPTIONS.Paper]: {
    beats: [GAME_OPTIONS.Rock, GAME_OPTIONS.Spock]
  },
  [GAME_OPTIONS.Rock]: {
    beats: [GAME_OPTIONS.Lizard, GAME_OPTIONS.Scissors]
  },
  [GAME_OPTIONS.Lizard]: {
    beats: [GAME_OPTIONS.Spock, GAME_OPTIONS.Paper]
  },
  [GAME_OPTIONS.Spock]: {
    beats: [GAME_OPTIONS.Scissors, GAME_OPTIONS.Rock]
  }
}

export const GAME_TITLE = {
  player: "You Picked",
  house: "The House Picked"
}

export const TEST_IDS = {
  ICON_SPOCK : "icon-spock",
  ICON_LIZARD: "icon-lizard",
  ICON_ROCK: "icon-rock",
  ICON_PAPER: "icon-paper",
  ICON_SCISSORS: "icon-scissors",
  ICON_NONE: "icon-none",
  GAME_ITEMS: "game-items",
  RULES_MODAL_BUTTON: "rules_modal_button",
  RULES_MODAL: "rules_modal",
  CLOSE_MODAL_BUTTON: "close_modal_button",
  PENTAGON_OPTIONS: "pentagon_options"
}

export const GAME_RESULTS_MESSAGE = {
  WIN: "YOU WIN",
  LOOSE: "YOU LOOSE",
  DRAW: "YOU DRAW"
}