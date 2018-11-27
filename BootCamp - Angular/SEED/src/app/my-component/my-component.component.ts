import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  name = 'Diego Rios';
  count = 0;
  imgSource = 'https://www.facevertizing.com/wp-content/uploads/2016/05/Nailed-It-Baby-Meme-06.jpg';
  textButton = 'Enable';
  inputState = true;

  constructor() { }

  ngOnInit() {
  }

  changeState() {
    this.inputState = !this.inputState;
    this.textButton = this.textButton === 'Enable' ? 'Disable' : 'Enable';
  }

}
