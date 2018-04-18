import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'; // Necesario para la aproximacion por data

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
    correo: 'diego@yopmail.com',
    pasatiempos: ['Correr', 'Jugar Futbol', 'Dormir', 'Ir a cine']
    };

  constructor() {

    console.log(this.usuario);


    /*
      Ejemplo y uso del FormGroup
      nameInput: new FormControl (valueDefautl, [validationRules], validationRulesAsync)
      Se incluyeron en el nombrecompleto dentro del FormGroup
      'nombre': new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      'apellido': new FormControl( '', Validators.required ),
    */

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
          'nombre': new FormControl( '', [Validators.required, Validators.minLength(3)] ),
          'apellido': new FormControl( '', [Validators.required, this.noDiego] )
        }),
      'correo': new FormControl( '', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$')] ),
      'pasatiempos': new FormArray([
        new FormControl('', Validators.required)
      ])
    });

    // Agregar los valores a los campos. (la forma debe tener la misma forma que el objeto)
    // this.forma.setValue ( this.usuario );

  }

  ngOnInit() {
  }


  agregarPasatiempo() {
    /*
    <FormArray> : Esta sintaxis sirve para que TS sepa que el elemento que
    estamos seleccionando es un arreglo
    */
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl( '', Validators.required )
    );
  }


  // Crear validaciones personalizadas (Se pueden crear en un documento aparte)
  noDiego( control: FormControl ): {[s: string]: boolean} {
    if ( control.value === 'diego' ) {
      return {
        noDiego: true
      };
    }

    return null;
  }

  GuardarCambios() {
    console.log( this.forma.value );
    console.log( this.forma );

    // Resetear el formulario a su estado pristing (estado inicial)
    this.forma.reset ( {
      nombrecompleto: {
        nombre: '',
        apellido: ''
      },
      correo: ''
    } );
  }
}
