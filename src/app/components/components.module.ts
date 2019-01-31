import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockModule } from './clock/clock.module';
import { RankModule } from './rank/rank.module';

@NgModule({
  declarations: [],
  imports: [
    ClockModule,
    CommonModule,
    RankModule
  ],
  exports: [
    ClockModule,
    CommonModule,
    RankModule
  ]
})
export class ComponentsModule { }
