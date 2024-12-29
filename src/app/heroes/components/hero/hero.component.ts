import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName(): string {/*Los get son una propiedad, que se ve como una propiedad
pero realmente es un metodo*/
return this.name.toUpperCase();
  // return 'Hola Mundo'.toUpperCase();//este es un metodo de los strings
  }
  getHeroDescription():string {/*Estes es metodo de la clase HeroComponent*/
    return `${this.name} - ${this.age}`;
  }
/*Si ponemos el metodo getHeroDescription como private entonces no podremos acceder a el
desde el hero.component.html*/
changeHero():void {//Hay que poner void si no regresa nada el meodo
this.name = 'Spiderman';
}
changeAge():void {//Hay que poner void si no regresa nada el meodo
this.age = 25;
}
resetForm():void {//Hay que poner void si no regresa nada el meodo
  // this.name = 'ironman';
  this.age = 45;
  document.querySelectorAll('h1')!.forEach( element => {
    element.innerHTML = '<h1>Desde Angular</h1>';
  })
//querySelector busca el primer h1 y querySelectroAll busca todos los h1 que encuentre
}
}



