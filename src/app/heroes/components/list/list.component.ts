import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk', 'Thor'];
  public deletedHero?:string;//se puso el ? para que acepte string y undefine, por que sino marca error

  removeLastHero(): void {
    // this.heroNames.pop();
   this.deletedHero = this.heroNames.pop();/*string | undefine - remueve el ultimo elemento de un arreglo y
   lo retorna, si el array esta vacio, retorna undefine y el arreglo no es modificado*/
  //  console.log({deletedHero})
   }

}
