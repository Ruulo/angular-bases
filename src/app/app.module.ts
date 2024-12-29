import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';//CounterModule.module.ts
import { HeroesModule } from './heroes/heroes.module';//heroes.module.ts

import { AppComponent } from './app.component';//app.component.ts


@NgModule({ //Decora la clase AppModule
  declarations: [
    AppComponent,//Clase exportada desde app.component.ts
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
