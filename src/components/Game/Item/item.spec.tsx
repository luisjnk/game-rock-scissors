import * as React from "react";
import {
  render,
  cleanup,
  act,
} from "@testing-library/react";
import DashboardContext, { DashboardContextProvider } from "../../../context/dashboard-context";
import GameItem, { TypeOfGameItem } from "./Item";
import { GAME_TITLE } from "../../../utils/constants";

describe("ButtonState Component", () => {

  it("Should render player title correctly", async () => {
    const { findByText } = render(
      <DashboardContextProvider>
        <GameItem context={DashboardContext} typeOfGameItem={TypeOfGameItem.player} />
      </DashboardContextProvider>
    );
    expect(await findByText( GAME_TITLE.player)).toBeTruthy
  });

  it("Should render house title correctly", async () => {
    const { findByText } = render(
      <DashboardContextProvider>
        <GameItem context={DashboardContext} typeOfGameItem={TypeOfGameItem.house} />
      </DashboardContextProvider>
    );
    expect(await findByText(GAME_TITLE.house)).toBeTruthy
  });

});