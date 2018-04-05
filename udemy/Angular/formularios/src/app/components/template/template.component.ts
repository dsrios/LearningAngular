import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';

// Permite tipar el objeto que viene del formulario

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
            .ng-invalid.ng-touched:not(form) {
              border: 1px solid red;
            }

            .ng-valid.ng-touched:not(form) {
              border: 1px solid green;
            }
         `]
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellido: null,
    email: null
  };

  constructor() { }

  ngOnInit() {
  }

  guardar( forma: NgForm ) {
    console.log('Formulario posteo');
    console.log('NgForm: ', forma);
    console.log('Valores: ', forma.value);
    console.log('Usuario: ', this.usuario);
  }

  // tslint:disable-next-line:member-ordering
  myNumbers: any = [1, 2, 3, 4, 5];

  searchInArray( num ) {

  }

}
