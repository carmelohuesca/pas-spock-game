import { Component } from '@angular/core';
import { SpockGame } from './SpockGame';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends SpockGame {
  title = 'spockGame';
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
      console.log(this.result);
    }
    this.changeTurn();
  }

  changeTurn() {
    this.turn = this.turn === this.playerOne ? this.playerTwo : this.playerOne;
  }

}
