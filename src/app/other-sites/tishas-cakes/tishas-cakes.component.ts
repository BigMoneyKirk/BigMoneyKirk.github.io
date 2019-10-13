import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messing-around-tishas-cakes',
  templateUrl: './tishas-cakes.component.html',
  styleUrls: ['./tishas-cakes.component.scss']
})
export class TishasCakesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cakedesigns(){
    return `Wow! Look at these delicious looking cakes! I would KILL for one!! :D`;
  }

}
