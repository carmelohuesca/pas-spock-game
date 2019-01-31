import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponentsRoutingModule } from './base-components-routing.module';
import { BaseComponentsComponent } from './base-components.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    BaseComponentsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    BaseComponentsRoutingModule
  ]
})
export class BaseComponentsModule { }
