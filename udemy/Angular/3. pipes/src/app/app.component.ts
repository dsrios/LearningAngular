import { Component } from '@angular/core';
import { setTimeout } from 'timers';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Diego';
  nombre2 = 'diEgo sebastiAn RIOs PeReZ';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  number = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      carrera: '48',
      calle: '85',
      numero: '30',
      casa: 'Primer Piso'
    }
  };

  valorPromesa = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve ( ' Llego la data! '), 3500 );
  });

  fecha = new Date();

  video = 'Mtau4v6foHA';

}
