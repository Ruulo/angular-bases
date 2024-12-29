import { Component } from '@angular/core';

@Component({//Decorador/Funcion que trasforma la clase de abajo en un componente
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent {
  public counter: number = 10;
  increaseBy( value:number ):void { // se puso void para que no regrese nada
    //this.counter = this.counter + 1;//forma larga(se lee como: counter = a counter +1)
    this.counter += value;//forma corta (se lee como: counter = a counter +1)
  }
  resetCounter ():void {
    this.counter = 10;
  }
}






