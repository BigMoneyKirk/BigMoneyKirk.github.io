import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [trigger('divState', [
    state('normal', style({
      backgroundColor: 'red',
      transform: 'translateX(0)'
    })),
    state('highlighted', style({
      backgroundColor: 'blue',
      transform: 'translateX(100px)'
    })),
    transition('normal <=> highlighted', animate(300)),
    // transition('highlighted => normal', animate(800))
  ]),
  trigger('wildState', [
    state('normal', style({
      backgroundColor: 'red',
      transform: 'translateX(0) scale(1)'
    })),
    state('highlighted', style({
      backgroundColor: 'blue',
      transform: 'translateX(100px) scale(1)'
    })),
    state('shrunken', style({
      backgroundColor: 'green',
      transform: 'translateX(0) scale(0.5)'
    })),
    transition('normal => highlighted', animate(300)),
    transition('highlighted => normal', animate(800)),
    transition('shrunken <=> *', animate(500))
  ])
]
})
export class HomeComponent implements OnInit {

  public state = 'normal';
  public wildState = 'normal';

  constructor() { }

  ngOnInit() {
  }

  public onAnimate(){
    this.state == 'normal'? this.state = 'highlighted': this.state = 'normal';
    this.wildState == 'normal'? this.wildState = 'highlighted': this.wildState = 'normal';
  }

  public onShrink(){
    this.wildState = 'shrunken';
  }

}
