import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messing-around-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public statement(){
    return `I would like to give a special shoutout to the families. The ones who have stuck in there through thick and thin. The ones who have known us from birth. A special cheers and thanks to you all. I love you.`;
  }

}
