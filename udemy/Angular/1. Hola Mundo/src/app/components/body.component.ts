import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent {

    // tslint:disable-next-line:no-inferrable-types
    mostrar: boolean= false;

    frase: any= {
    mensaje: 'the true sign of intelligence is not knowledge but imagination',
    autor: 'Albert E.'
    };

    personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];


}
