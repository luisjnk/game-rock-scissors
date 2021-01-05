import * as React from "react";
import {
  render,
  cleanup,
  act,
} from "@testing-library/react";
import Options from "./Options";
import { GAME_OPTIONS, TEST_IDS } from "../../utils/constants";
import DashboardContext, { DashboardContextProvider } from "../../context/dashboard-context";

describe("Options Component", () => {

  it("Should render lizard icon", async () => {
    const { findByTestId } = render(
      <DashboardContextProvider>
        <Options context={DashboardContext}  optionSelected={GAME_OPTIONS.Lizard}/>
      </DashboardContextProvider>
    );
    expect(await findByTestId(TEST_IDS.ICON_LIZARD)).toBeTruthy
  });

  it("Should render paper icon", async () => {
    const { findByTestId } = render(
      <DashboardContextProvider>
        <Options context={DashboardContext}  optionSelected={GAME_OPTIONS.Paper}/>
      </DashboardContextProvider>
    );
    expect(await findByTestId(TEST_IDS.ICON_PAPER)).toBeTruthy
  });

  it("Should render rock icon", async () => {
    const { findByTestId } = render(
      <DashboardContextProvider>
        <Options context={DashboardContext}  optionSelected={GAME_OPTIONS.Rock}/>
      </DashboardContextProvider>
    );
    expect(await findByTestId(TEST_IDS.ICON_ROCK)).toBeTruthy
  });

  it("Should render scissors icon", async () => {
    const { findByTestId } = render(
      <DashboardContextProvider>
        <Options context={DashboardContext}  optionSelected={GAME_OPTIONS.Scissors}/>
      </DashboardContextProvider>
    );
    expect(await findByTestId(TEST_IDS.ICON_SCISSORS)).toBeFalsy
  });

});