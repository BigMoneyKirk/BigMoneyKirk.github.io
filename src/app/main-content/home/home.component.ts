import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
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
      transition('shrunken <=> *',
      [style({
        backgroundColor: 'orange'
      }),
        animate(0, style({ borderRadius: '50px' })),
        animate(700),
      ])
    ]),

    trigger('list1', [
      state('void', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [ 
        style({ opacity: 0, transform: 'translateX(-100px)', color: 'blue' }) , 
        group([
          animate(1000, keyframes([
            style({
              transform: 'translateX(-100px)',
              opacity: 0,
              offset: 0
            }),
            style({
              transform: 'translateX(-50px)',
              opacity: 0.5,
              offset: 0.3,
              color: 'red'
            }),
            style({
              transform: 'translateX(-20px)',
              opacity: 1,
              offset: 0.8,
              color: 'green'
            }),
            style({
              transform: 'translateX(0)',
              offset: 1,
              color: 'pink'
            }),
          ])),
          animate(300, style({
            // color: 'red'
          }))
        ]),
        ]),

      transition('* => void', animate(300, style({ transform: 'translateX(100px)', opacity: 0 })))
    ])

  ]
})

export class HomeComponent implements OnInit {

  public state = 'normal';
  public wildState = 'normal';
  public list1 = '';

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  public animationEnded(event){
    this.state = 'normal';
  }

  public animationStarted(event){
    this.state = 'highlighted';
  }

  public startAnimation(){
    this.state = 'highlighted';
  }

  public onAnimate(){
    this.state == 'normal'? this.state = 'highlighted': this.state = 'normal';
    this.wildState == 'normal'? this.wildState = 'highlighted': this.wildState = 'normal';
  }
  
  public onDelete(){
    this.list1 = 'void';
  }

  public onShrink(){
    if (this.wildState == 'normal')
      this.wildState = 'shrunken';
    else{
      this.wildState = 'normal'
    }
  }

  ngAfterViewInit(){
    $(document).ready(function(){
      $("p").click(function(){
      $(this).hide();
      });
    });
}
}
