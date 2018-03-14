import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {

  alerta: String = 'info';
  alerta2: String = 'danger';
  arrayName: string [] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light' ];


  constructor() { }

  ngOnInit() {
  }

  random() {
    const number = Math.round(Math.random() * this.arrayName.length);
    console.log(number);
    this.alerta2 = this.arrayName[number];
  }

  refresh() {
    setInterval( () => { this.random(); }, 2000);
  }
}
