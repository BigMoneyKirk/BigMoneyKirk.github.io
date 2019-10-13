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

  aboutEJ(){
    return `That boy EJ, he is something else!`;
  }

}
