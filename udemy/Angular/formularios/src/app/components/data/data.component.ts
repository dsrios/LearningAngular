import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Necesario para la aproximacion por data

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  // Elemento responsable de la forma

  forma: FormGroup;

  usuario: Object = {

    nombrecompleto: {
      nombre: 'Diego',
      apellido: 'Perez'
    },
    correo: 'diego@yopmail.com'
  };

  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
          'nombre': new FormControl( '', [Validators.required, Validators.minLength(3)] ),
          'apellido': new FormControl( '', Validators.required )
        }),

      // nameInput: new FormControl (valueDefautl, [validationRules], validationRulesAsync)
      // Se incluyeron en el nombrecompleto dentro del FormGroup
      // 'nombre': new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      // 'apellido': new FormControl( '', Validators.required ),
      'correo': new FormControl( '', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$')] )
    });

    // Agregar los valores a los campos. (la forma debe tener la misma forma que el objeto)
    this.forma.setValue ( this.usuario );

  }

  ngOnInit() {
  }

  GuardarCambios() {
    console.log( this.forma.value );
    console.log( this.forma );
  }
}
