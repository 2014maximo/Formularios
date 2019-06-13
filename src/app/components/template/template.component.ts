import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border:1px solid pink;
    }`]
})
export class TemplateComponent {

usuario:Object = {
  nombre: null,
  apellido: null,
  email: null,
  pais: "CRI"
}

pais = [{
  codigo:"CRI",
  pais: "Costa Rica"
},
{
  codigo: "ESP",
  pais: "España" 
}]
  constructor() { }

  guardar( forma: NgForm ){
    console.log( forma );
    console.log( "Valor", forma.value );
    console.log( "Usuario", this.usuario );
  }

}
