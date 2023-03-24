import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  
})
export class DataBidingComponent {

  public contadorClique: number = 0;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome: string ="";

  adicionarClique(){
    this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }

  keyUp(event: any){

    this.nome =  event.target.value;
  }

}


