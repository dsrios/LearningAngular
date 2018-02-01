import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activar: boolean = true): string {

    let ocultarContrasena = value;
    
    if (activar) {
      let numCharacters = '';
      const arrayValue = value.split('');

      arrayValue.forEach(element => {
        numCharacters += '*';
      });

      ocultarContrasena = numCharacters;

    }


    return ocultarContrasena;
  }

}

