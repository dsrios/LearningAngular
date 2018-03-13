import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alerta: String = 'alert-danger';
  cargar: Boolean = false;

  propiedades: Object = {
    danger: false
  };


  constructor() { }

  ngOnInit() {
    // window.FontAwesomeConfig = { autoReplaceSvg: 'nest'}
  }

  ejecutar() {
    console.log('INTRO');
    // debugger;
    this.cargar = true;
    setTimeout( () => this.cargar = false, 3000 );
  }


}
