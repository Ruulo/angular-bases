import { Component } from '@angular/core';

@Component({//Decorador/Funcion que trasforma la clase de abajo en un componente
  selector: 'app-root',//este esta en el index.html
  templateUrl: './app.component.html',//
  styleUrl: './app.component.css' /*en el ejemplo de Fernando a qui vine como un
   arreglo y segun esto se pueden agregar mas estilos*/
})
export class AppComponent {
  public title: string = 'Hola mundo';
}



