### Rules
If the player wins, they gain 1 point. If the computer wins, the player loses one point.

-   Scissors beats Paper
-   Paper beats Rock
-   Rock beats Lizard
-   Lizard beats Spock
-   Spock beats Scissors
-   Scissors beats Lizard
-   Paper beats Spock
-   Rock beats Scissors
-   Lizard beats Paper
-   Spock beats Rock

Not sure what Rock, Paper, Scissors, Lizard, Spock is? [Check out this clip from The Big Bang Theory](https://www.youtube.com/watch?v=iSHPVCBsnLw).

### Tech

* [NodeJs] - https://nodejs.org/en/

### Docker RUN
Install the dependencies and devDependencies and start the server.

```sh
$ cd game-rock-scissors
$ docker build -t react-app .
$ docker run -i -d -p 3000:3000 react-app
```

### Installation and run
Install the dependencies and devDependencies and start the server.

```sh
$ cd game-rock-scissors
$ npm install
$ node run start
```
