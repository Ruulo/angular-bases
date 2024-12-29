import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
declarations:[
  CounterComponent
],
exports: [
  CounterComponent //a qui le estoy diciendo a el mundo externo que puede usar este CounterComponent
]
})
export class CounterModule {}
