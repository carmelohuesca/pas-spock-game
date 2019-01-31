import { Component, OnInit } from '@angular/core';
import { SpockGame } from '../SpockGame';

@Component({
  selector: 'app-spock-game',
  templateUrl: './spock-game.component.html',
  styleUrls: ['./spock-game.component.scss']
})
export class SpockGameComponent extends SpockGame {

  turn: string;
  choiceOne: string;
  choiceTwo: string;

  constructor() {
    super('Carmelo', 'Raquel');
    this.turn = this.playerOne;
  }

  select(choice: string) {
    if (this.turn === this.playerOne) {
      this.choiceOne = choice;
    } else {
      this.choiceTwo = choice;
      this.round(this.choiceOne, this.choiceTwo);
    }
    this.changeTurn();
  }

  changeTurn() {
    this.turn = this.turn === this.playerOne ? this.playerTwo : this.playerOne;
  }
}
