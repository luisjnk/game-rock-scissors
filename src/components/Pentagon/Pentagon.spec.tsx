import * as React from "react";
import {
  render
} from "@testing-library/react";
import { GAME_OPTIONS, TEST_IDS } from "../../utils/constants";
import DashboardContext, { DashboardContextProvider } from "../../context/dashboard-context";
import Pentagon from "./Pentagon";

describe("Pentagon  Component", () => {

  it("Should render 5 game options", async () => {
    const { findByTestId } = render(
      <DashboardContextProvider>
        <Pentagon context={DashboardContext} />
      </DashboardContextProvider>
    );

    const PENTAGON_OPTIONS = await findByTestId(TEST_IDS.PENTAGON_OPTIONS);
    expect(PENTAGON_OPTIONS.childElementCount).toBe(5)
  });
});