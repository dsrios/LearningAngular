import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

 // transferData: Object = {id: 1, msg: 'Hello'};
 transferData: Object = [
   {id: 1, msg: 'Modulo 1', positions: [1, 2]},
   {id: 2, msg: 'Modulo 2', positions: [1]},
   {id: 3, msg: 'Modulo 3', positions: [1, 2]},
   {id: 4, msg: 'Modulo 4', positions: [1, 2]},
   {id: 5, msg: 'Modulo 5', positions: [1, 2]}
 ];

 receivedData: Array<any> = [];



  transferDataSuccess($event: any) {
    console.log( $event );

    this.receivedData.push($event);
  }


}
