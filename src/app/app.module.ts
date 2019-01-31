import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpockGameModule } from './spock-game/spock-game.module';
import { ComponentsModule } from './components/components.module';
import { BaseComponentsModule } from './base-components/base-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseComponentsModule,
    ComponentsModule,
    SpockGameModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
