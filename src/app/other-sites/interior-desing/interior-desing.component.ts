import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messing-around-interior-desing',
  templateUrl: './interior-desing.component.html',
  styleUrls: ['./interior-desing.component.scss']
})
export class InteriorDesingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  aboutEJ(){
    return `That boy EJ, he is something else!`;
  }

}
