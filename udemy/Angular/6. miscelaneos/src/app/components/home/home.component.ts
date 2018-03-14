import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

              <div class="container main-container">
              <h3>Ejemplo 1</h3>
              <app-ng-style></app-ng-style>

              <hr>
              <h3>Ejemplo 2</h3>
              <app-css></app-css>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quos in illum
                  natus esse aliquam soluta commodi sint ullam. Perferendis repellendus iure archi
                  tecto maxime harum quo ipsa saepe ad laborum.
                </p>

              <hr>
              <h3>Ejemplo 3 ngClass</h3>
              <app-clases></app-clases>

              <hr>
              <h3>Ejemplo 4 Directivas Personalizadas</h3>

              <p [appResaltado]="'green'">Hola mundo directiva</p>


              <hr>
              <h3>Ejemplo 5 ng Switch</h3>
              <app-ng-switch></app-ng-switch>

              <br><br><br><br>
              </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
