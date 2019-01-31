import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpockGameComponent } from './spock-game.component';

const routes: Routes = [
  {
    path: 'spock-game',
    component: SpockGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpockGameRoutingModule { }
