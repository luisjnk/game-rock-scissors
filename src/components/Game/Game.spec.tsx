import * as React from "react";
import {
  render
} from "@testing-library/react";
import { GAME_OPTIONS, GAME_RESULTS_MESSAGE, GAME_TITLE, TEST_IDS } from "../../utils/constants";
import DashboardContext from "../../context/dashboard-context";
import Game from "./Game";
import { gameRulesDrawMock, gameRulesHouseWinsMock, gameRulesMock } from "../../config/mocks/mocks";

const makeSut = (willPlayerWin: boolean, gameRun: boolean = true, isPaper = false ) => {

  let getGameRules;

  if (willPlayerWin) {
    getGameRules = gameRulesMock
  } else if (!willPlayerWin && !isPaper) {
    getGameRules = gameRulesHouseWinsMock
  }else { 
    getGameRules = gameRulesDrawMock
  }

  const sut =  {
    selectedGameOption: !isPaper ? GAME_OPTIONS.Scissors : GAME_OPTIONS.Paper,
    houseGameOption: gameRun ? GAME_OPTIONS.Paper : GAME_OPTIONS.None,
    setGameOptionSelected() { },
    setHouseGameOptionSelected() { },
    score: 0,
    increaseGameScore() { },
    playAgain() { },
    getGameRules,
    playerResult: !isPaper ? GAME_OPTIONS.Scissors : GAME_OPTIONS.Paper ,
    setPlayerResultState() {}
  }

  return {
    sut
  }
}

describe("Game Component", () => {

  it("Should player wins because Scissors hits paper", async () => {
    const {sut} = makeSut(true)

    const { findByText } = render(
      <DashboardContext.Provider value={sut}>
        <Game context={DashboardContext} />
      </DashboardContext.Provider>
    );
    expect(await findByText(GAME_RESULTS_MESSAGE.WIN)).toBeTruthy

  });

  it("Should player loose because Paper hits rock", async () => {
    const {sut} = makeSut(false)

    const { findByText } = render(
      <DashboardContext.Provider value={sut}>
        <Game context={DashboardContext} />
      </DashboardContext.Provider>
    );
    expect(await findByText(GAME_RESULTS_MESSAGE.LOOSE)).toBeTruthy
  });

  it("Should draw", async () => {
    const {sut} = makeSut(false, true, true)

    const { findByText } = render(
      <DashboardContext.Provider value={sut}>
        <Game context={DashboardContext} />
      </DashboardContext.Provider>
    );
    expect(await findByText(GAME_RESULTS_MESSAGE.DRAW)).toBeTruthy
  });

  it("Should not render the result because the house is selected the option yet", async () => {
    const {sut} = makeSut(false, false)

    const { findByTestId } = render(
      <DashboardContext.Provider value={sut}>
        <Game context={DashboardContext} />
      </DashboardContext.Provider>
    );
    const GAME_ITEMS = await findByTestId(TEST_IDS.GAME_ITEMS);
    expect(GAME_ITEMS.childElementCount).toBe(2)
  });

});