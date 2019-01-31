import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpockGameRoutingModule } from './spock-game-routing.module';
import { SpockGameComponent } from './spock-game.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [SpockGameComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    SpockGameRoutingModule
  ]
})
export class SpockGameModule { }
