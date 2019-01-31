import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponentsComponent } from './base-components.component';

const routes: Routes = [{
  path: 'base-components',
  component: BaseComponentsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseComponentsRoutingModule { }
