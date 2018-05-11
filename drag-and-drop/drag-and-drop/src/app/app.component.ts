import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';


  transferData: Object = {id: 1, msg: 'Hello'};
  receivedData: Array<any> = [];

  transferDataSuccess($event: any) {
      this.receivedData.push($event);
  }
}

