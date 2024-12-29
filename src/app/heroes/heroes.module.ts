import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";


@NgModule ({
  declarations:[// recuerda ordenar las declaraciones alfabeticamente, por que si no hay pdo en Git
    HeroComponent,
    ListComponent,
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ],
  imports:[
    CommonModule,/*se agrego este por que no jalaba la aplicacion, el CommonModule
    agrega las directivas que antes solo tenia el modulo app.module.ts y ahora
    lo tiene heroes.module.ts tambien*/
  ]
})
export class HeroesModule {}
