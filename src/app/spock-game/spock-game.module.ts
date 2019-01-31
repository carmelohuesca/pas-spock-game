import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpockGameRoutingModule } from './spock-game-routing.module';
import { SpockGameComponent } from './spock-game.component';

@NgModule({
  declarations: [SpockGameComponent],
  imports: [
    CommonModule,
    SpockGameRoutingModule
  ]
})
export class SpockGameModule { }
