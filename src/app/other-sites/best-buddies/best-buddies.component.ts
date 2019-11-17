import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messing-around-best-buddies',
  templateUrl: './best-buddies.component.html',
  styleUrls: ['./best-buddies.component.scss']
})
export class BestBuddiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  about(){
    return `Meet Anne Johnson and Max Hersberger. Not only are they my co-workers, but they are my friends.`;
  }

}
