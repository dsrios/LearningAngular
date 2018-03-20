import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  template: `
    <p>
      nuevo-usuario works!
    </p>
  `,
  styles: []
})
export class NuevoUsuarioComponent implements OnInit {

  constructor( private router: ActivatedRoute) {

    this.router.parent.params.subscribe( params => { // el valor parent obtiene el parametro del padre desde el hijo
                          console.log('ruta HIJA Usuario Nuevo');
                          console.log(params);
                        });

  }

  ngOnInit() {
  }

}
