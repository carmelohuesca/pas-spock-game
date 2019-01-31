export class SpockGame {

  static CHOICE = {
    ROCK: 'ROCK',
    PAPER: 'PAPER',
    SCISSORS: 'SCISSORS',
    LIZARD: 'LIZARD',
    SPOCK: 'SPOCK'
  };

  static RESULTS = {
    DRAW: 'empate',
    PLAYERONEWINS: 'ha ganado el jugador 1',
    PLAYERTWOWINS: 'ha ganado el jugador 2',
  };

  playerOne: string;
  playerTwo: string;
  rounds: number;
  result: string;

  constructor(playerOne: string, playerTwo: string) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.rounds = 0;
  }

  round(choiceOne: string, choiceTwo: string) {
    this.rounds++;
    this.logic(choiceOne, choiceTwo);
    return this.result;
  }

  logic(choiceOne: string, choiceTwo: string) {
    if (choiceOne === choiceTwo) {
      this.result = SpockGame.RESULTS.DRAW;
    } else {
      switch (choiceOne) {
        case SpockGame.CHOICE.ROCK:
          this.rockChoice(choiceTwo);
          break;
        case SpockGame.CHOICE.PAPER:
          this.paperChoice(choiceTwo);
          break;
        case SpockGame.CHOICE.SCISSORS:
          this.scissorsChoice(choiceTwo);
          break;
        case SpockGame.CHOICE.LIZARD:
          this.lizardChoice(choiceTwo);
          break;
        case SpockGame.CHOICE.SPOCK:
          this.spockChoice(choiceTwo);
          break;
      }
    }
  }

  playerTwoWins(isPlayerTwoWinner: boolean) {
    this.result = (isPlayerTwoWinner) ? SpockGame.RESULTS.PLAYERTWOWINS : SpockGame.RESULTS.PLAYERONEWINS;
  }

  shouldWinWhen(isPlayerOneWinner: boolean) {
    this.playerTwoWins(!isPlayerOneWinner);
  }

  isDistinctOf(choice, choiceOne, choiceTwo): boolean {
    return (choice !== SpockGame.CHOICE[choiceOne] && choice !== SpockGame.CHOICE[choiceTwo]);
  }

  rockChoice(choice) {
    const choiceOne = SpockGame.CHOICE.PAPER;
    const choiceTwo = SpockGame.CHOICE.SPOCK;
    this.shouldWinWhen(this.isDistinctOf(choice, choiceOne, choiceTwo));
  }

  paperChoice(choice) {
    const choiceOne = SpockGame.CHOICE.SCISSORS;
    const choiceTwo = SpockGame.CHOICE.LIZARD;
    this.shouldWinWhen(this.isDistinctOf(choice, choiceOne, choiceTwo));
  }

  scissorsChoice(choice) {
    const choiceOne = SpockGame.CHOICE.ROCK;
    const choiceTwo = SpockGame.CHOICE.SPOCK;
    this.shouldWinWhen(this.isDistinctOf(choice, choiceOne, choiceTwo));
  }

  lizardChoice(choice) {
    const choiceOne = SpockGame.CHOICE.ROCK;
    const choiceTwo = SpockGame.CHOICE.SCISSORS;
    this.shouldWinWhen(this.isDistinctOf(choice, choiceOne, choiceTwo));
  }

  spockChoice(choice) {
    const choiceOne = SpockGame.CHOICE.PAPER;
    const choiceTwo = SpockGame.CHOICE.LIZARD;
    this.shouldWinWhen(this.isDistinctOf(choice, choiceOne, choiceTwo));
  }

}
