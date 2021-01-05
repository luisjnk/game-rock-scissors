import * as React from "react";
import {
  render,
  act,
  fireEvent
} from "@testing-library/react";
import { GAME_OPTIONS, GAME_RESULTS_MESSAGE, GAME_TITLE, TEST_IDS } from "../../utils/constants";
import DashboardContext, { DashboardContextProvider } from "../../context/dashboard-context";
import {gameRulesMock } from "../../config/mocks/mocks";
import Dashboard from ".";

const makeSut = () => {
  const sut =  {
    selectedGameOption: GAME_OPTIONS.Scissors,
    houseGameOption: GAME_OPTIONS.Paper,
    setGameOptionSelected() { },
    setHouseGameOptionSelected() { },
    score: 0,
    increaseGameScore() { },
    playAgain() { },
    getGameRules: gameRulesMock,
    playerResult: GAME_OPTIONS.Scissors ,
    setPlayerResultState() {}
  }

  return {
    sut
  }
}

describe("Dashboard Component", () => {

  it("Should choose scissors and win the game because the house pick paper", async () => {
    const {sut} = makeSut()
    
    const { findByTestId, findByText } = render(
      <DashboardContext.Provider value={sut}>
        <Dashboard />
      </DashboardContext.Provider>
    );

    await act(async () => {
        fireEvent.click(await findByTestId(TEST_IDS.ICON_SCISSORS))
    });

    expect(await findByText(GAME_RESULTS_MESSAGE.WIN)).toBeTruthy
  });

  
  it("Should choose scissors and win the game because the house pick paper", async () => {
    const {sut} = makeSut()
    
    const { findByTestId, findByText } = render(
      <DashboardContextProvider>
        <Dashboard />
      </DashboardContextProvider>
    );

    await act(async () => {
        fireEvent.click(await findByTestId(TEST_IDS.ICON_SCISSORS))
    });

  });

  

  it("Should click on rules button and render modal", async () => {
    const {sut} = makeSut()
    
    const { findByTestId } = render(
      <DashboardContext.Provider value={sut}>
        <Dashboard />
      </DashboardContext.Provider>
    );

    await act(async () => {
        fireEvent.click(await findByTestId(TEST_IDS.RULES_MODAL_BUTTON))
    });

    expect(await findByTestId(TEST_IDS.RULES_MODAL)).toBeTruthy
  });

  it("Should click to close modal and works", async () => {
    const {sut} = makeSut()
    
    const { findByTestId, queryAllByTestId } = render(
      <DashboardContext.Provider value={sut}>
        <Dashboard />
      </DashboardContext.Provider>
    );

    await act(async () => {
        fireEvent.click(await findByTestId(TEST_IDS.RULES_MODAL_BUTTON))
    });

    await act(async () => {
        fireEvent.click(await findByTestId(TEST_IDS.CLOSE_MODAL_BUTTON))
    });

    expect(await queryAllByTestId(TEST_IDS.RULES_MODAL)).toHaveLength(0)
  });
});