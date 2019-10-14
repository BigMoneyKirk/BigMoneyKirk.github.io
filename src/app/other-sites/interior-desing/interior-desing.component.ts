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
    return `EJ, you need to message me what type of bio you would like to put here...`;
  }

  andHere(){
    return `And here!!`;
  }

}
