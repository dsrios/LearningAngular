import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  // Medida
    scala = 'mm';
    width = '50';
    height = '70';

  // Tamaño total de cada modulo escala 1:10 => tamañoReal / 10
    widthSvg = this.width + this.scala;
    heightSvg = this.height + this.scala;

  // Division de grids escala 1:10 => 1grid = modulo igual al tamaño de modulo 1*1
    gridW = this.width + this.scala; // Same for H and W 'cause is squadre
    gridH = this.height + this.scala; // Same for H and W 'cause is squadre

  // Divisiones de cada grid tamaño del grid / 4
    smallGrid = parseFloat(this.width) / 4 + this.scala; // Same for H and W 'cause is squadre

 // transferData: Object = {id: 1, msg: 'Hello'};
 transferData: Object = [
   {id: 1, msg: 'Modulo 1', positions: [1, 2, 3, 4]},
   {id: 2, msg: 'Modulo 2', positions: [1]},
   {id: 3, msg: 'Modulo 3', positions: [1, 2, 3]},
   {id: 4, msg: 'Modulo 4', positions: [1, 2]},
   {id: 5, msg: 'Modulo 5', positions: [1, 2]}
 ];

 receivedData: Array<any> = [];



  transferDataSuccess($event: any) {
    console.log( $event );

    this.receivedData.push($event);
  }

  positions( n: any) {
    const positions: number = parseFloat(this.width) * n;
    return positions + this.scala;
  }


}
