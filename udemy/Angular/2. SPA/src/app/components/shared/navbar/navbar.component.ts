import { Component, OnInit } from '@angular/core';
// import {HttpModule} from '@angular/http';  Sirve para prevenir que caundo hagamos enter la pagiba se recargue
// Tambien se resuelve colocando onsubmit="return false" en el form

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'

})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  buscarHeroe( termino: string ) {
    console.log(termino);
  }



}
