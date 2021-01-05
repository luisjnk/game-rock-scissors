import { GAME_OPTIONS } from "../utils/constants";
import { getRandomNumber } from "../utils/math";
import gameRules from "./gameRules-usecases";

describe("GameRules", () => {
  it("Ensure rule paper hits rock is working", async () => {
   const { run } = gameRules({getRandomNumber})
   const { playerBeatsHouse,
         houseBeatsPlayer
    } = run(GAME_OPTIONS.Rock, GAME_OPTIONS.Paper)

    expect(playerBeatsHouse).toBeTruthy
    expect(houseBeatsPlayer).toBeFalsy
  });

  it("Ensure rule paper hits spock is working", async () => {
    const { run } = gameRules({getRandomNumber})
    const { playerBeatsHouse,
          houseBeatsPlayer
     } = run(GAME_OPTIONS.Spock, GAME_OPTIONS.Paper)
 
     expect(playerBeatsHouse).toBeTruthy
     expect(houseBeatsPlayer).toBeFalsy
   });

   it("Ensure rule scissors hits paper is working", async () => {
    const { run } = gameRules({getRandomNumber})
    const { playerBeatsHouse,
          houseBeatsPlayer
     } = run(GAME_OPTIONS.Paper, GAME_OPTIONS.Scissors)
 
     expect(playerBeatsHouse).toBeTruthy
     expect(houseBeatsPlayer).toBeFalsy
   });


   it("Ensure rule scissors hits lizard is working", async () => {
    const { run } = gameRules({getRandomNumber})
    const { playerBeatsHouse,
          houseBeatsPlayer
     } = run(GAME_OPTIONS.Lizard, GAME_OPTIONS.Scissors)
 
     expect(playerBeatsHouse).toBeTruthy
     expect(houseBeatsPlayer).toBeFalsy
   });

   it("Ensure rule lizard hits paper is working", async () => {
    const { run } = gameRules({getRandomNumber})
    const { playerBeatsHouse,
          houseBeatsPlayer
     } = run(GAME_OPTIONS.Paper, GAME_OPTIONS.Lizard)
 
     expect(playerBeatsHouse).toBeTruthy
     expect(houseBeatsPlayer).toBeFalsy
   });


   it("Ensure rule paper hits spock is working", async () => {
    const { run } = gameRules({getRandomNumber})
    const { playerBeatsHouse,
          houseBeatsPlayer
     } = run(GAME_OPTIONS.Spock, GAME_OPTIONS.Lizard)
 
     expect(playerBeatsHouse).toBeTruthy
     expect(houseBeatsPlayer).toBeFalsy
   });

   it("Ensure rule spock hits scissors is working", async () => {
    const { run } = gameRules({getRandomNumber})
    const { playerBeatsHouse,
          houseBeatsPlayer
     } = run(GAME_OPTIONS.Scissors, GAME_OPTIONS.Spock)
 
     expect(playerBeatsHouse).toBeTruthy
     expect(houseBeatsPlayer).toBeFalsy
   });

   it("Ensure rule spock hits rock is working", async () => {
    const { run } = gameRules({getRandomNumber})
    const { playerBeatsHouse,
          houseBeatsPlayer
     } = run(GAME_OPTIONS.Rock, GAME_OPTIONS.Spock)
 
     expect(playerBeatsHouse).toBeTruthy
     expect(houseBeatsPlayer).toBeFalsy
   });

   it("Ensure rule spock hits rock is working", async () => {
    const getRandomNumberMock = () => {
      return {
        getRandomNumber: (length: number): number => 1
      }
    }
    const { chooseOponent } = gameRules(getRandomNumberMock())
    const oponent = chooseOponent();
     expect(oponent).toBe(GAME_OPTIONS.Lizard)
   });
});